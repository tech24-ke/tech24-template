# run at repo root
$SrcDir  = ".\law-site"
$DstDir  = ".\realestate-site"
$OldSlug = "law-site"
$NewSlug = "realestate-site"
$OldName = "Law"
$NewName = "Real Estate"

# fallback WA numbers (your .wa-rr keeps working if present)
$WaKenya   = "254748699460"
$WaBelgium = "32465603546"

if (Test-Path $DstDir) { throw "Target $DstDir already exists." }

# Copy but skip heavy/build dirs
robocopy $SrcDir $DstDir /E /XF *.log /XD node_modules .next .turbo .vercel | Out-Null

# --- Rename paths containing the slug (files first, then dirs) ---
Get-ChildItem -Path $DstDir -Recurse -File |
  ? { $_.Name -match [regex]::Escape($OldSlug) } |
  % { Rename-Item $_.FullName ($_.Name -replace [regex]::Escape($OldSlug), $NewSlug) }

Get-ChildItem -Path $DstDir -Recurse -Directory |
  Sort-Object FullName -Descending |
  ? { $_.Name -match [regex]::Escape($OldSlug) } |
  % { Rename-Item $_.FullName ($_.Name -replace [regex]::Escape($OldSlug), $NewSlug) }

# --- In-file replacements (safe set) ---
# Allow text edits in common text files, but exclude lock/env files explicitly
$TextExt      = @("*.ts","*.tsx","*.js","*.jsx","*.json","*.md","*.css","*.scss","*.html","*.yml","*.yaml","*.toml")
$ExcludeNames = @("package-lock.json",".env",".env.local",".env.development",".env.production",".env.test")

Get-ChildItem -Path $DstDir -Recurse -Include $TextExt -File |
  ? { $ExcludeNames -notcontains $_.Name } |
  %{
    $p = $_.FullName
    $c = Get-Content $p -Raw

    # word-boundary to avoid partial hits
    $c = $c -replace "\b$([regex]::Escape($OldSlug))\b", $NewSlug
    $c = $c -replace "\b$([regex]::Escape($OldName))\b",  $NewName

    # keep #templates anchors consistent
    $c = $c -replace 'href=`"#templates`"', 'href="#templates"'

    Set-Content $p $c -Encoding UTF8
  }

# --- Code-only tweaks: phone numbers + bioLinks injection ---
$CodeExt = @("*.ts","*.tsx","*.js","*.jsx")
Get-ChildItem -Path $DstDir -Recurse -Include $CodeExt -File | %{
  $p = $_.FullName
  $c = Get-Content $p -Raw

  # visible default WA numbers if hardcoded (strict boundaries)
  $c = $c -replace "\b2547\d{8}\b", $WaKenya
  $c = $c -replace "\b324\d{8}\b",  $WaBelgium

  # inject bio links if a config array exists and not already present
  if ($c -match "bioLinks\s*:\s*\[" -and $c -notmatch "shop\.tech24\.co\.ke") {
    $c = $c -replace "bioLinks\s*:\s*\[",
      'bioLinks: ["https://salon.tech24.co.ke","https://shop.tech24.co.ke","https://event.tech24.co.ke",'
    $c = $c -replace 'bioLinks:\s*\[\s*,','bioLinks: ['  # tidy accidental leading comma
  }

  Set-Content $p $c -Encoding UTF8
}

# --- Patch package.json "name" safely (JSON parse/write) ---
$pkgPath = Join-Path $DstDir "package.json"
if (Test-Path $pkgPath) {
  try {
    $json = Get-Content $pkgPath -Raw | ConvertFrom-Json
    if ($null -ne $json.name) {
      $json.name = $NewSlug
      # preserve indentation reasonably
      ($json | ConvertTo-Json -Depth 50) | Set-Content $pkgPath -Encoding UTF8
    }
  } catch {
    Write-Warning "Could not parse package.json for safe name update: $($_.Exception.Message)"
  }
}

Write-Host "✅ Copied $OldSlug → $NewSlug into $DstDir"

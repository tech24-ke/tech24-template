# run at repo root
$SrcDir = ".\event-site"      # adjust to your path
$DstDir = ".\bnb-site"
$OldSlug = "event-site"
$NewSlug = "bnb-site"
$OldName = "Event"
$NewName = "Bnb"

# fallback WA numbers (your .wa-rr keeps working if present)
$WaKenya   = "254748699460"
$WaBelgium = "32465603546"

if (Test-Path $DstDir) { throw "Target $DstDir already exists." }
robocopy $SrcDir $DstDir /E /XF *.log /XD node_modules .next .turbo .vercel

# rename files/folders with 'salon' in the name
Get-ChildItem -Path $DstDir -Recurse -File | ? { $_.Name -match $OldSlug } | %{
  Rename-Item $_.FullName ($_.Name -replace $OldSlug,$NewSlug)
}
Get-ChildItem -Path $DstDir -Recurse -Directory |
  Sort-Object FullName -Descending | ? { $_.Name -match $OldSlug } | %{
    Rename-Item $_.FullName ($_.Name -replace $OldSlug,$NewSlug)
  }

# in-file replacements
$TextExt = @("*.ts","*.tsx","*.js","*.jsx","*.json","*.md","*.css","*.scss","*.html","*.yml","*.yaml","*.env","*.toml")
Get-ChildItem -Path $DstDir -Recurse -Include $TextExt | %{
  $p = $_.FullName
  $c = Get-Content $p -Raw
  $c = $c -replace "($OldSlug)", $NewSlug
  $c = $c -replace "($OldName)", $NewName
  # keep #templates as-is (ensure anchors use href="#templates")
  $c = $c -replace 'href=`"#templates`"', 'href="#templates"'
  # ensure visible default WA numbers if hardcoded
  $c = $c -replace "2547\d{8}", $WaKenya
  $c = $c -replace "324\d{8}",   $WaBelgium
  # inject bio links if a config array exists
  if ($c -match "bioLinks\s*:\s*\[" -and $c -notmatch "shop\.tech24\.co\.ke") {
    $c = $c -replace "bioLinks\s*:\s*\[", 'bioLinks: ["https://salon.tech24.co.ke","https://shop.tech24.co.ke","https://event.tech24.co.ke",'
    $c = $c -replace 'bioLinks:\s*\[\s*,','bioLinks: ['
  }
  Set-Content $p $c -Encoding UTF8
}

Write-Host "✅ Copied salon → shop to $DstDir"

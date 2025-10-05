import Link from "next/link";
import Image from "next/image";
import { site } from "@/site.config";
import { whatsappLink } from "./lib/whatsapp";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">

      {/* TOP BAR / BRAND */}
      <header className="border-b border-black/5 bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-xl bg-[linear-gradient(135deg,#ff6a00,#ff3d00)]" />
            <div className="font-semibold">{site.brand}</div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <span>📍 {site.contact.addressLine}, {site.contact.city}</span>
            <span>🕘 {site.hours[0].d}: {site.hours[0].h}</span>
            <a className="hover:underline" href={`tel:${site.contact.phone}`}>☎ {site.contact.phone}</a>
          </div>
          <a
            className="inline-flex items-center rounded-2xl px-4 py-2 font-medium bg-black text-white"
            href={whatsappLink(site.contact.whatsapp, "Hi! I'd like to order")}
            target="_blank"
          >
            Order on WhatsApp
          </a>
        </div>
      </header>

      {/* HERO: sharp photo + orange overlay */}
      <section className="relative">
        {/* Photo layer (place a sharp 2400×1400+ image at /public/hero.jpg) */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="/hero.jpg"
            alt="Café interior"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        {/* Orange gradient overlay — reduce opacity for less “softness” */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#ff6a00,#ff3d00)] opacity-40" />
        <div className="mx-auto max-w-6xl px-4 py-16 text-white">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/15">
            Westlands · Nairobi 🇰🇪
          </div>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
            {site.hero.title}
          </h1>
          <p className="mt-4 text-white/90 text-lg">{site.hero.subtitle}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              className="inline-flex items-center rounded-2xl px-5 py-3 font-medium shadow-sm bg-white text-slate-900"
              href={whatsappLink(site.contact.whatsapp, "Hi! I'd like to order from DineEasy Café")}
              target="_blank"
            >
              {site.hero.ctaText}
            </a>
            {site.deliveryLinks.map((d, i) => (
              <a
                key={i}
                className="inline-flex items-center rounded-2xl px-5 py-3 font-medium shadow-sm border border-white/40 text-white"
                href={d.url}
                target="_blank"
              >
                Order via {d.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* INFO STRIP */}
      <section className="bg-black text-white">
        <div className="mx-auto max-w-6xl px-4 py-4 text-sm grid md:grid-cols-3 gap-3">
          <a className="hover:underline" href={site.contact.mapsUrl} target="_blank">
            📍 {site.contact.addressLine}, {site.contact.city}
          </a>
          <div>🕘 Hours: {site.hours[0].d} {site.hours[0].h} · {site.hours[1].d} {site.hours[1].h}</div>
          <div className="flex gap-4 md:justify-end">
            <a className="hover:underline" href={`mailto:${site.contact.email}`}>✉ {site.contact.email}</a>
            <a className="hover:underline" href={`tel:${site.contact.phone}`}>☎ {site.contact.phone}</a>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-bold">Menu</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-8">
          {site.menu.map((cat, i) => (
            <div key={i} className="rounded-2xl border border-black/5 shadow-sm bg-white">
              <div className="px-5 py-3 font-semibold text-white rounded-t-2xl bg-[linear-gradient(135deg,#ff6a00,#ff3d00)]">
                {cat.title}
              </div>
              <ul className="p-5 space-y-4">
                {cat.items.map((it, j) => (
                  <li key={j} className="flex items-start justify-between gap-4">
                    <div>
                      <div className="font-medium">{it.name}</div>
                      <div className="text-slate-600 text-sm">{it.desc}</div>
                    </div>
                    <div className="text-slate-900 font-semibold">KES {it.price}</div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT + MAP */}
      <section className="mx-auto max-w-6xl px-4 pb-16 grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-black/5 shadow-sm bg-white p-6">
          <h3 className="text-lg font-semibold">About</h3>
          <p className="mt-2 text-slate-700">{site.about.blurb}</p>
        </div>
        <div className="rounded-2xl overflow-hidden border border-black/5 shadow-sm">
          <iframe
            title="Map"
            src={site.contact.mapsEmbed}
            className="w-full h-[300px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-black/5">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-slate-600">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div>© {new Date().getFullYear()} {site.hero.title}. All rights reserved.</div>
            <div className="flex gap-4">
              <a className="hover:underline" href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
              <Link href="/" className="hover:underline">Home</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

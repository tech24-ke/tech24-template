import Link from "next/link";
import { site } from "@/site.config";
import { whatsappLink } from "./lib/whatsapp";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0 -z-10 bg-tech24-gradient opacity-90" />
        <div className="mx-auto max-w-6xl px-4 py-16 text-white">
          <div className="px-3 py-1 rounded-full text-xs font-semibold bg-white/15 inline-block">
            Nairobi · Kenya 🇰🇪
          </div>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
            {site.hero.title}
          </h1>
          <p className="mt-4 text-white/90 text-lg">{site.hero.subtitle}</p>
          <div className="mt-6 flex gap-3">
            <a
              className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 font-medium shadow-sm transition bg-white text-slate-900"
              href={whatsappLink(site.contact.whatsapp, "Hi! I want to book an appointment")}
              target="_blank"
            >
              {site.hero.ctaText}
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 font-medium shadow-sm transition border border-white/25 text-white"
              href={site.contact.mapsUrl}
              target="_blank"
            >
              Find us on Maps
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-bold">Our Services</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {site.services.map((s, i) => (
            <div
              key={i}
              className="rounded-2xl border border-black/5 shadow-sm bg-white p-6"
            >
              <div className="text-lg font-semibold">{s.title}</div>
              <p className="text-slate-600 mt-1">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-2xl p-8 bg-black text-white grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-2xl font-bold">Ready to book?</h3>
            <p className="text-white/80 mt-2">
              Message us on WhatsApp or call during business hours.
            </p>
          </div>
          <div className="flex md:justify-end gap-3">
            <a
              className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 font-medium shadow-sm transition bg-white text-slate-900"
              href={whatsappLink(site.contact.whatsapp, "Hi! I want to book")}
              target="_blank"
            >
              WhatsApp
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 font-medium shadow-sm transition border border-white/25 text-white"
              href={`tel:${site.contact.phone}`}
            >
              Call {site.contact.phone}
            </a>
          </div>
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

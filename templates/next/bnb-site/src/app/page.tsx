/* eslint-disable @next/next/no-img-element */
import React from "react";
import { whatsappLink } from "@/app/lib/whatsapp";
import { site } from "@/site.config";

// Stable WA link builder (no hydration mismatch)
const wa = (msg: string) => whatsappLink(site.contact.whatsapp, msg);

// Tiny inline icons
function IconKeys({ className = "" }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="18" r="8" />
      <path d="M26 22l8 8M30 26l6 6M34 30l6 6" />
    </svg>
  );
}
function IconChat({ className = "" }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 12h22a8 8 0 0 1 8 8v2a8 8 0 0 1-8 8H18l-8 6v-6H8a8 8 0 0 1-8-8v-2a8 8 0 0 1 8-8z" />
      <path d="M20 20h12M12 20h4" />
    </svg>
  );
}
function IconChecklist({ className = "" }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="10" y="8" width="28" height="32" rx="4" />
      <path d="M16 18h16M16 24h10M16 30h14" />
      <path d="M12 6l2 4h20l2-4" />
    </svg>
  );
}

export default function Page() {
  // Demo properties (replace images with your own: /public/p1.jpg ... p6.jpg)
  const bnbs = [
    { id: 1, title: "1BR • Westlands", rate: "KES 7,500 / night", meta: "Sleeps 2 · Wi-Fi · Parking", img: "p1.jpg" },
    { id: 2, title: "Studio • Kilimani", rate: "KES 5,500 / night", meta: "Sleeps 2 · Balcony · Near Yaya", img: "p2.jpg" },
    { id: 3, title: "2BR • Kileleshwa", rate: "KES 11,000 / night", meta: "Sleeps 4 · Pool · Gym", img: "p3.jpg" },
    { id: 4, title: "1BR • Lavington", rate: "KES 8,500 / night", meta: "Sleeps 2 · Kitchen · Netflix", img: "p4.jpg" },
    { id: 5, title: "Studio • CBD", rate: "KES 4,800 / night", meta: "Sleeps 2 · Lift · 24/7 security", img: "p5.jpg" },
    { id: 6, title: "2BR • Parklands", rate: "KES 10,500 / night", meta: "Sleeps 4 · Near Aga Khan", img: "p6.jpg" },
  ];

  return (
    <main className="min-h-dvh bg-[#0b1020] text-[#e7e9ee] antialiased">

      {/* Top ribbon */}
      <div className="w-full bg-[#e8f7ee] text-[#206b3b] text-center text-sm py-2">
        <span className="font-medium">My BNB Manager</span> — built for Nairobi hosts running 2–4 short-lets
      </div>

      {/* Header (glass) */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/5 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="" className="h-9 w-9 object-contain rounded-full ring-1 ring-white/10" />
            <span className="font-semibold tracking-tight text-lg">{site.brand}</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-[15px] text-white/80">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#portfolio" className="hover:text-white">Properties</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a
            href={wa("Hi! I manage 2–4 BnBs and would like a demo.")}
            target="_blank" rel="noopener"
            className="rounded-full px-4 py-2 text-sm border border-white/15 text-white/90 hover:bg-white/10 transition"
          >
            Request Demo
          </a>
        </div>
      </header>

      {/* Hero — diagonal gradient + giant watermark */}
      <section
        id="hero"
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0b1020 0%, #102043 60%, #0b1020 100%)",
        }}
      >
        {/* BIG watermark */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="text-[24rem] sm:text-[32rem] font-black tracking-tighter text-white/5 select-none leading-none">
            BNB
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-20">
          {/* Glass headline card */}
          <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8 text-center shadow-[0_10px_60px_rgba(0,0,0,0.25)]">
            <h1 className="text-4xl font-bold text-white">{site.hero.title}</h1>
            <p className="text-white/80 text-lg mt-4">{site.hero.subtitle}</p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a
                href={wa("Hi! I manage 2–4 BnBs and I want booking requests from my site.")}
                target="_blank" rel="noopener"
                className="rounded-full bg-[#25d366] text-white px-6 py-3 font-medium hover:bg-[#1eb053] transition"
              >
                {site.hero.ctaText}
              </a>
              <a
                href="#portfolio"
                className="rounded-full border border-white/20 text-white/90 px-6 py-3 font-medium hover:bg-white/10 transition"
              >
                View Properties
              </a>
            </div>

            {/* Mini stats row */}
            <div className="mt-8 grid grid-cols-3 gap-4 text-left">
              {[
                { k: "BnBs managed", v: "2–4" },
                { k: "Avg. occupancy", v: "82%" },
                { k: "Response time", v: "< 5 min" },
              ].map((s, i) => (
                <div key={i} className="rounded-xl bg-white/5 border border-white/10 px-4 py-3">
                  <div className="text-xs uppercase tracking-wide text-white/60">{s.k}</div>
                  <div className="text-xl font-semibold text-white mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* angled divider */}
        <div className="h-16 bg-[#0b1020]"
             style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 40%)" }} />
      </section>

      {/* Features — icon tiles */}
      <section id="features" className="py-20 bg-[#0b1020]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <div className="h-14 w-14 text-[#a8ffbf]">
              <IconKeys className="h-full w-full" />
            </div>
            <h3 className="font-semibold text-white mt-4">{site.services[0].title}</h3>
            <p className="text-white/70 text-sm mt-1">{site.services[0].desc}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <div className="h-14 w-14 text-[#a8ffbf]">
              <IconChat className="h-full w-full" />
            </div>
            <h3 className="font-semibold text-white mt-4">{site.services[1].title}</h3>
            <p className="text-white/70 text-sm mt-1">{site.services[1].desc}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <div className="h-14 w-14 text-[#a8ffbf]">
              <IconChecklist className="h-full w-full" />
            </div>
            <h3 className="font-semibold text-white mt-4">{site.services[2].title}</h3>
            <p className="text-white/70 text-sm mt-1">{site.services[2].desc}</p>
          </div>
        </div>
      </section>

      {/* Portfolio — horizontal scroll-snap gallery with glass cards */}
      <section id="portfolio" className="py-20 bg-[#0b1020]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-6">Featured Properties</h2>
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2">
            {bnbs.map((b) => (
              <div key={b.id} className="snap-start min-w-[300px] max-w-[320px] rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4 shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
                <img src={b.img} alt="" className="rounded-xl mb-3" />
                <div className="font-medium text-white">{b.title}</div>
                <div className="text-sm text-white/70">{b.meta}</div>
                <div className="text-sm font-semibold mt-1 text-white">{b.rate}</div>
                <div className="mt-3 flex gap-3">
                  <a
                    href={wa(`Hi, I would like to request dates for ${b.title} – ${b.rate}.`)}
                    target="_blank"
                    rel="noopener"
                    className="text-[#25d366] font-medium hover:underline"
                  >
                    Request on WhatsApp
                  </a>
                  <a href={site.contact.mapsUrl} target="_blank" className="text-white/70 hover:text-white">
                    Map
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works — stepped cards on a wave */}
      <section id="how" className="relative bg-[#0b1020]">
        <svg aria-hidden viewBox="0 0 1440 120" className="w-full text-[#0b1020]">
          <path fill="#0b1020" d="M0 0h1440v60L0 120z" />
        </svg>
        <div className="bg-white text-[#202327]">
          <div className="max-w-6xl mx-auto px-6 py-16">
            <h2 className="text-2xl font-semibold text-center mb-10">How it works</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <div className="text-xs tracking-wide uppercase text-gray-500">Step 1</div>
                <h3 className="font-semibold mt-1">Add your 2–4 properties</h3>
                <p className="text-sm text-gray-600 mt-2">We set up listings with photos, rates, rules, and FAQs.</p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <div className="text-xs tracking-wide uppercase text-gray-500">Step 2</div>
                <h3 className="font-semibold mt-1">Guests request on WhatsApp</h3>
                <p className="text-sm text-gray-600 mt-2">They tap, message you, and you confirm availability.</p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <div className="text-xs tracking-wide uppercase text-gray-500">Step 3</div>
                <h3 className="font-semibold mt-1">Share check-in & payments</h3>
                <p className="text-sm text-gray-600 mt-2">Send guide, collect M-Pesa or card when you’re ready.</p>
              </div>
            </div>
          </div>
        </div>
        <svg aria-hidden viewBox="0 0 1440 120" className="w-full rotate-180">
          <path fill="#0b1020" d="M0 0h1440v60L0 120z" />
        </svg>
      </section>

      {/* Pricing — glass tiles */}
      <section id="pricing" className="py-20 bg-[#0b1020]">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          {[
            { name: "Starter (1–2 units)", price: "4,999 KES", note: "One page + up to 2 listings + WhatsApp bookings" },
            { name: "Manager (3–5 units)", price: "9,999 KES", note: "Multi-section + 5 listings + check-in guides" },
            { name: "Pro (6+ units)", price: "On request", note: "Calendar sync, payments, housekeeping tools" },
          ].map((p, idx) => (
            <div key={idx} className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col">
              <h3 className="font-semibold text-lg text-white mb-1">{p.name}</h3>
              <div className="text-2xl font-bold text-white mb-2">{p.price}</div>
              <p className="text-sm text-white/70 mb-4">{p.note}</p>
              <a
                href={wa(`Hi, I am interested in the ${p.name} plan for My BNB Manager.`)}
                target="_blank"
                rel="noopener"
                className="mt-auto inline-block rounded-full bg-[#25d366] text-white px-5 py-2 text-sm font-medium hover:bg-[#1eb053] transition"
              >
                Continue on WhatsApp
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Templates (cross-sell) */}
      <section id="templates" className="py-20 px-6 bg-[#0b1020]">
        <h2 className="text-center text-2xl font-semibold mb-10">More Templates</h2>
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { title: "Salon",  preview: "https://salon.tech24.co.ke", img:"salon.jpg" },
            { title: "Shop",   preview: "https://shop.tech24.co.ke",  img:"shop.jpg" },
            { title: "Event",  preview: "https://event.tech24.co.ke", img:"event.jpg" },
          ].map((t, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <img src={t.img} alt="" className="rounded-lg mb-4" />
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-white">{t.title}</h4>
                  <a href={t.preview} target="_blank" className="text-sm text-white/70 hover:text-white">Preview</a>
                </div>
                <a
                  href={wa(`Hi! I want to use the ${t.title} template.`)}
                  target="_blank" rel="noopener"
                  className="rounded-full border border-white/20 text-white/90 px-4 py-2 text-sm hover:bg-white/10 transition"
                >
                  Use this
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-[#0b1020] text-center">
        <h2 className="text-2xl font-semibold mb-6 text-white">Let’s set up your BnB site</h2>
        <p className="text-white/70 mb-6">We build it in days and connect your WhatsApp.</p>
        <div className="flex flex-wrap gap-3 justify-center text-sm text-white/80 mb-6">
          <span>Tel: {site.contact.phone}</span>
          <span> | </span>
          <span>Email: {site.contact.email}</span>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={wa("Hi! I manage 2–4 BnBs and want to start with My BNB Manager.")}
            target="_blank"
            rel="noopener"
            className="inline-block rounded-full bg-[#25d366] text-white px-6 py-3 font-medium hover:bg-[#1eb053] transition"
          >
            Continue on WhatsApp
          </a>
          <a
            href={site.contact.mapsUrl}
            target="_blank"
            className="inline-block rounded-full border border-white/20 text-white/90 px-6 py-3 font-medium hover:bg-white/10 transition"
          >
            Open in Maps
          </a>
        </div>
      </section>

      {/* Footer */}
	  
      <footer className="border-t border-black/5">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-slate-600">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div>
            © {new Date().getFullYear()}{" "}
            <Link
              href="https://tech24.co.ke"
              className="font-bold underline hover:text-slate-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tech24 AgencyX
            </Link>
            . All rights reserved.
          </div>
          <div className="flex gap-4">
            <a
              className="hover:underline"
              href={`mailto:${site.contact.email}`}
            >
              {site.contact.email}
            </a>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </div>
        </div>
      </div>
    </footer>

      {/* Floating WA dock */}
      <a
        href={wa("Hi! Quick question about My BNB Manager.")}
        target="_blank"
        rel="noopener"
        className="fixed bottom-5 right-5 z-50 rounded-full shadow-xl bg-[#25d366] text-white px-5 py-3 font-medium hover:bg-[#1eb053] transition"
      >
        Chat on WhatsApp
      </a>
    </main>
  );
}

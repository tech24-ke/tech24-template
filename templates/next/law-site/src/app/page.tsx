/* eslint-disable @next/next/no-img-element */
import React from "react";
import { whatsappLink } from "@/app/lib/whatsapp";
import { site } from "@/site.config";

/** Stable WA link builder (no hydration mismatch) */
const wa = (msg: string) => whatsappLink(site.contact.whatsapp, msg);

/** Tiny inline icons */
function IconFamily({ className = "" }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="16" cy="16" r="4" />
      <circle cx="32" cy="16" r="4" />
      <path d="M10 30v-3a6 6 0 0 1 12 0v3" />
      <path d="M26 30v-3a6 6 0 0 1 12 0v3" />
      <circle cx="24" cy="22" r="3" />
      <path d="M20 34v-3a4 4 0 0 1 8 0v3" />
    </svg>
  );
}
function IconScales({ className = "" }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M24 6v6M8 20l8-8 8 8M24 12l8 8M8 20h16M40 20h-8M12 20c0 4-4 8-4 8h12s-4-4-4-8M36 20c0 4-4 8-4 8h12s-4-4-4-8M24 28v12M16 40h16" />
    </svg>
  );
}
function IconDoc({ className = "" }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M30 4H14a4 4 0 0 0-4 4v32a4 4 0 0 0 4 4h20a4 4 0 0 0 4-4V12z" />
      <path d="M30 4v8h8M16 20h16M16 26h16M16 32h12" />
    </svg>
  );
}
function IconShield({ className = "" }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M24 4l16 6v10c0 10-6.5 18-16 22C14.5 38 8 30 8 20V10z" />
      <path d="M18 24l4 4 8-8" />
    </svg>
  );
}

export default function Page() {
  const TEAM = [
    { name: "Adv. Jane W.", role: "Managing Partner", img: "team-1.jpg", focus: "center 22%" },
    { name: "Adv. Peter K.", role: "Senior Associate", img: "team-2.jpg", focus: "55% 20%" },
  ];

  const PRACTICE_AREAS = [
    { title: "Corporate & Commercial", desc: "Company formation, contracts, compliance, negotiations.", img: "/templates/law/corporate.jpg", icon: <IconDoc className="h-8 w-8" /> },
    { title: "Real Estate & Conveyancing", desc: "Title searches, transfers, leases, due diligence.", img: "/templates/law/conveyancing.jpg", icon: <IconScales className="h-8 w-8" /> },
    { title: "Family Law", desc: "Divorce, custody, maintenance, succession planning.", img: "/templates/law/family.jpg", icon: <IconFamily className="h-8 w-8" /> },
    { title: "Criminal Defense", desc: "Bail, arraignment, trial strategy, appeals.", img: "/templates/law/criminal.jpg", icon: <IconShield className="h-8 w-8" /> },
  ];

  const TESTIMONIALS = [
    { q: "Professional, responsive, and effective.", a: "SME Owner — Westlands" },
    { q: "They handled our conveyancing seamlessly.", a: "Home Buyer — Kilimani" },
  ];

  return (
    <main className="min-h-dvh bg-[#11264D] text-[#E8ECF4] antialiased">
      {/* Top ribbon */}
      <div className="w-full bg-[#D4AF37]/15 text-[#D4AF37] text-center text-sm py-2">
        <span className="font-medium">Advocate Pro</span> — Nairobi Advocates & Legal Consultants
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/5 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="" className="h-9 w-9 object-contain rounded-full ring-1 ring-white/10" />
            <span className="font-semibold tracking-tight text-lg">{site.brand}</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-[15px] text-white/80">
            <a href="#practice-areas" className="hover:text-white">Practice Areas</a>
            <a href="#team" className="hover:text-white">Our Team</a>
            <a href="#testimonials" className="hover:text-white">Testimonials</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href={wa("Hello, I’d like to book a legal consultation.")} target="_blank" rel="noopener" className="rounded-full px-4 py-2 text-sm border border-white/15 text-white/90 hover:bg-white/10 transition">
            Book Consultation
          </a>
        </div>
      </header>

      {/* Hero (brighter gradient + softer watermark) */}
      <section id="hero" className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #102B5A 0%, #0E2347 60%, #0C1F3F 100%)" }}>
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.04]">
          <div className="text-[20rem] sm:text-[28rem] font-black tracking-tighter text-white select-none leading-none">LAW</div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8 text-center shadow-[0_10px_60px_rgba(0,0,0,0.25)]">
            <h1 className="text-4xl font-extrabold text-white">Justice. Expertise. Integrity.</h1>
            <p className="text-white/80 text-lg mt-4">Your trusted legal partner in Nairobi.</p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href={wa("Hello, I’d like to book a legal consultation.")} target="_blank" rel="noopener" className="rounded-full bg-[#D4AF37] text-[#0B1B3A] px-6 py-3 font-semibold hover:brightness-110 transition">
                Chat on WhatsApp
              </a>
              <a href="#practice-areas" className="rounded-full border border-white/20 text-white/90 px-6 py-3 font-medium hover:bg-white/10 transition">
                Explore Practice Areas
              </a>
            </div>

            {/* Mini stats row */}
            <div className="mt-8 grid grid-cols-3 gap-4 text-left">
              {[
                { k: "Years of practice", v: "15+" },
                { k: "Matters handled", v: "350+" },
                { k: "Avg. response", v: "< 5 min" },
              ].map((s, i) => (
                <div key={i} className="rounded-xl bg-white/5 border border-white/10 px-4 py-3">
                  <div className="text-xs uppercase tracking-wide text-white/60">{s.k}</div>
                  <div className="text-xl font-semibold text-white mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="h-16 bg-[#11264D]" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 40%)" }} />
      </section>

      {/* Practice Areas (dark) */}
      <section id="practice-areas" className="py-20 bg-[#11264D]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white inline-block border-b-2 border-transparent hover:border-[#D4AF37] transition">Practice Areas</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PRACTICE_AREAS.map((a) => (
              <div key={a.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:shadow-lg transition">
                <div className="text-[#D4AF37] mb-4">{a.icon}</div>
                <h3 className="font-semibold text-white">{a.title}</h3>
                <p className="mt-2 text-white/70 text-sm">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team (mid-navy block + portrait-friendly 4:3) */}
      <section id="team" className="bg-[#0F1F3C]">
        <div className="mx-auto max-w-6xl px-6 py-20 text-white">
          <h2 className="text-3xl font-bold inline-block border-b-2 border-transparent hover:border-[#D4AF37] transition">Our Team</h2>
          <p className="mt-3 text-white/80 max-w-2xl">Over 15 years of combined experience representing clients across Kenya.</p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {TEAM.map((m) => (
              <article key={m.name} className="group rounded-2xl bg-white/5 p-6 backdrop-blur border border-white/10 h-full flex flex-col">
                <div className="aspect-[4/3] overflow-hidden rounded-xl">
                  <img src={m.img} alt={m.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" style={{ objectPosition: (m as any).focus || "center 25%" }} />
                </div>
                <div className="mt-4">
                  <div className="font-semibold text-white">{m.name}</div>
                  <div className="text-white/70 text-sm">{m.role}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials (light section for breath) */}
      <section id="testimonials" className="bg-white text-[#1B2844]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold inline-block border-b-2 border-transparent hover:border-[#D4AF37] transition">What Clients Say</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {TESTIMONIALS.map((t, i) => (
              <blockquote key={i} className="rounded-2xl border border-gray-200 bg-[#F7F9FC] p-6">
                <p className="text-[#0F1F3C]">“{t.q}”</p>
                <footer className="mt-3 text-[#4A5877] text-sm">— {t.a}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* How it works (already light center band) */}
      <section id="how" className="relative bg-[#11264D]">
        <svg aria-hidden viewBox="0 0 1440 120" className="w-full text-[#11264D]"><path fill="#11264D" d="M0 0h1440v60L0 120z" /></svg>
        <div className="bg-white text-[#202327]">
          <div className="max-w-6xl mx-auto px-6 py-16">
            <h2 className="text-2xl font-semibold text-center mb-10">How it works</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                ["Step 1", "Tell us your matter", "Share details via WhatsApp or email for a quick review."],
                ["Step 2", "Consult with an advocate", "We advise on options, risks, and next steps."],
                ["Step 3", "Representation & follow-up", "We prepare documents and represent you as needed."],
              ].map(([s, t, d]) => (
                <div key={s} className="rounded-2xl border border-gray-200 bg-white p-6">
                  <div className="text-xs tracking-wide uppercase text-gray-500">{s}</div>
                  <h3 className="font-semibold mt-1">{t}</h3>
                  <p className="text-sm text-gray-600 mt-2">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <svg aria-hidden viewBox="0 0 1440 120" className="w-full rotate-180"><path fill="#11264D" d="M0 0h1440v60L0 120z" /></svg>
      </section>

      {/* Pricing (mid-navy) */}
      <section id="pricing" className="py-20 bg-[#0F1F3C]">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          {[
            { name: "Consultation", price: "KES 4,999", note: "Up to 45 min — in-person or online" },
            { name: "Retainer", price: "From KES 25,000", note: "Ongoing advisory for SMEs" },
            { name: "Case-by-Case", price: "On request", note: "Litigation, conveyancing, contracts" },
          ].map((p, idx) => (
            <div key={idx} className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col">
              <h3 className="font-semibold text-lg text-white mb-1">{p.name}</h3>
              <div className="text-2xl font-bold text-white mb-2">{p.price}</div>
              <p className="text-sm text-white/70 mb-4">{p.note}</p>
              <a href={wa(`Hello, I'm interested in the ${p.name} option.`)} target="_blank" rel="noopener" className="mt-auto inline-block rounded-full bg-[#D4AF37] text-[#0B1B3A] px-5 py-2 text-sm font-semibold hover:brightness-110 transition">
                Book on WhatsApp
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Templates (dark) */}
      <section id="templates" className="py-20 px-6 bg-[#11264D]">
        <h2 className="text-center text-2xl font-semibold mb-10 text-white">More Templates</h2>
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[{ title: "Salon", preview: "https://salon.tech24.co.ke", img: "salon.jpg" }, { title: "Shop", preview: "https://shop.tech24.co.ke", img: "shop.jpg" }, { title: "Event", preview: "https://event.tech24.co.ke", img: "event.jpg" }].map((t, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <img src={t.img} alt="" className="rounded-lg mb-4" />
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-white">{t.title}</h4>
                  <a href={t.preview} target="_blank" className="text-sm text-white/70 hover:text-white">Preview</a>
                </div>
                <a href={wa(`Hello! I want to use the ${t.title} template.`)} target="_blank" rel="noopener" className="rounded-full border border-white/20 text-white/90 px-4 py-2 text-sm hover:bg-white/10 transition">
                  Use this
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact (dark) */}
      <section id="contact" className="py-20 bg-[#11264D] text-center">
        <h2 className="text-2xl font-semibold mb-6 text-white">Book Your Consultation</h2>
        <p className="text-white/70 mb-6">{site.address}</p>
        <div className="flex flex-wrap gap-3 justify-center text-sm text-white/80 mb-6">
          <span>Tel: {site.contact.phone}</span><span> | </span><span>Email: {site.contact.email}</span>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <a href={wa("Hello, I’d like to book a legal consultation.")} target="_blank" rel="noopener" className="inline-block rounded-full bg-[#D4AF37] text-[#0B1B3A] px-6 py-3 font-semibold hover:brightness-110 transition">
            Chat on WhatsApp
          </a>
          <a href={site.contact.mapsUrl} target="_blank" className="inline-block rounded-full border border-white/20 text-white/90 px-6 py-3 font-medium hover:bg-white/10 transition">
            Open in Maps
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-white/60 border-t border-white/10 bg-[#11264D]">
        <p>© {new Date().getFullYear()} Tech24 Agency — All rights reserved.</p>
      </footer>

      {/* Floating WA dock */}
      <a href={wa("Hi! Quick question about Advocate Pro.")} target="_blank" rel="noopener" className="fixed bottom-5 right-5 z-50 rounded-full shadow-xl bg-[#D4AF37] text-[#0B1B3A] px-5 py-3 font-semibold hover:brightness-110 transition">
        Chat on WhatsApp
      </a>
    </main>
  );
}

"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from "react";
import { whatsappRR } from "@/app/lib/whatsapp";
import { site } from "@/site.config";

/* ---------- Inline icons (lightweight, themeable) ---------- */
function IconTicket({ className = "" }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M8 16h32v16H8z" />
      <path d="M12 16v-3a3 3 0 0 1 3-3h6M36 32v3a3 3 0 0 1-3 3h-6" />
      <path d="M30 20v8M18 20v8" />
    </svg>
  );
}
function IconWhatsApp({ className = "" }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M24 42c9.39 0 17-7.61 17-17S33.39 8 24 8 7 15.61 7 25c0 3.23.9 6.25 2.47 8.81L8 40l6.36-1.6A17 17 0 0 0 24 42z"/>
      <path d="M17 20c1 5 6 10 11 11l3-3" />
    </svg>
  );
}
function IconSchedule({ className = "" }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="6" y="8" width="36" height="32" rx="4" />
      <path d="M12 6v6M36 6v6M6 18h36" />
      <path d="M24 24v8M20 28h8" />
    </svg>
  );
}

/* ---------- Minimal Carousel (no deps) ---------- */
type Slide = { src: string; title?: string; subtitle?: string; };

function HeroCarousel({
  slides,
  ctaText,
  mapsUrl
}: {
  slides: Slide[];
  ctaText: string;
  mapsUrl: string;
}) {
  const [idx, setIdx] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const hoverRef = useRef(false);
  const touchStartX = useRef<number | null>(null);

  const next = () => setIdx((p) => (p + 1) % slides.length);
  const prev = () => setIdx((p) => (p - 1 + slides.length) % slides.length);

  useEffect(() => {
    timer.current && clearInterval(timer.current);
    timer.current = setInterval(() => {
      if (!hoverRef.current) next();
    }, 5500);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slides.length]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) < 40) return;
    if (dx < 0) next(); else prev();
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      onMouseEnter={() => (hoverRef.current = true)}
      onMouseLeave={() => (hoverRef.current = false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="relative h-[56vh] min-h-[360px] w-full">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${i === idx ? "opacity-100" : "opacity-0"}`}
            aria-hidden={i !== idx}
          >
            <img src={s.src} alt="" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-[radial-gradient(1200px_400px_at_50%_-10%,rgba(40,80,255,.28),transparent)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.45),rgba(11,15,26,.75))]" />
          </div>
        ))}

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-md">
            {slides[idx].title || site.hero.title}
          </h1>
          <p className="text-white/80 max-w-2xl mt-4 text-lg">
            {slides[idx].subtitle || site.hero.subtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <a
              href={whatsappRR("Hi! I&apos;m interested in the Event website template.")}
              target="_blank" rel="noopener"
              className="rounded-full bg-[#25d366] text-white px-6 py-3 font-medium hover:bg-[#1eb053] transition"
            >
              {ctaText}
            </a>
            <a
              href={mapsUrl}
              target="_blank"
              className="rounded-full border border-white/30 text-white/90 px-6 py-3 font-medium hover:bg-white/10 transition"
            >
              Open in Maps
            </a>
          </div>
        </div>

        <button
          aria-label="Previous slide"
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 hover:bg-black/60 text-white p-2"
        >
          ‹
        </button>
        <button
          aria-label="Next slide"
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 hover:bg-black/60 text-white p-2"
        >
          ›
        </button>

        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 w-2 rounded-full ${i === idx ? "bg-white" : "bg-white/50 hover:bg-white/70"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Page ---------- */
export default function Page() {
  const slides: Slide[] = [
    { src: "/event/slide1.jpg", title: site.hero.title, subtitle: site.hero.subtitle },
    { src: "/event/slide2.jpg", title: "Speakers & Performances", subtitle: "Top local talent - Quality production" },
    { src: "/event/slide3.jpg", title: "Nairobi - KICC", subtitle: "Easy access - Safe parking - Great views" }
  ];

  const agenda = [
    { time: "09:00", title: "Registration & Coffee", room: "Lobby" },
    { time: "10:00", title: "Keynote: Building Fast Web", room: "Main Hall" },
    { time: "11:30", title: "Panel: Payments in Kenya", room: "Main Hall" },
    { time: "14:00", title: "Workshops & Demos", room: "Studio A" },
    { time: "17:00", title: "Afterparty & Networking", room: "Terrace" },
  ];

  const tiers = [
    { name: "Early Bird", price: "1,499 KES", note: "Limited seats, ends soon" },
    { name: "Standard",  price: "2,499 KES", note: "Full access, all sessions" },
    { name: "VIP",       price: "On request", note: "Front row + backstage" },
  ];

  return (
    <main className="min-h-dvh bg-[#0b0f1a] text-[#e7e9ee] antialiased">
      <div className="w-full bg-[#e9edff] text-[#2b3ae6] text-center text-sm py-2">
        <span className="font-medium">Event Demo Template</span>&nbsp; — Distinct, night-mode layout for meetups, concerts & conferences
      </div>

      <header className="sticky top-0 z-40 bg-[#0b0f1a]/80 backdrop-blur supports-[backdrop-filter]:bg-[#0b0f1a]/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="" className="h-9 w-9 object-contain rounded-full ring-1 ring-white/10" />
            <span className="font-semibold tracking-tight text-lg text-white">{site.brand}</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-[15px] text-white/80">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#schedule" className="hover:text-white">Schedule</a>
            <a href="#tickets" className="hover:text-white">Tickets</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={whatsappRR("Hi! I&apos;d like a quick demo of the Event template.")}
              target="_blank" rel="noopener"
              className="rounded-full px-4 py-2 text-sm border border-white/15 text-white/90 hover:bg-white/10 transition"
            >
              Request Demo
            </a>
          </div>
        </div>
      </header>

      {/* Hero Carousel */}
      <HeroCarousel slides={slides} ctaText={site.hero.ctaText} mapsUrl={site.contact.mapsUrl} />

      {/* Features */}
      <section id="features" className="py-20 bg-[#0e1322]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          {site.services.map((s, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-8">
              <div className="mx-auto mb-4 h-14 w-14 text-[#a8ffbf]">
                {i === 0 && <IconTicket className="h-full w-full p-1.5" />}
                {i === 1 && <IconSchedule className="h-full w-full p-1.5" />}
                {i === 2 && <IconWhatsApp className="h-full w-full p-1.5" />}
              </div>
              <h3 className="font-semibold mb-2 text-white">{s.title}</h3>
              <p className="text-white/70 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="py-20 px-6 bg-[#0b0f1a]">
        <h2 className="text-center text-2xl font-semibold mb-10 text-white">Schedule</h2>
        <div className="max-w-3xl mx-auto">
          <ol className="relative border-l border-white/15">
            {agenda.map((a, idx) => (
              <li key={idx} className="ml-6 mb-8">
                <span className="absolute -left-2.5 mt-1 h-5 w-5 rounded-full bg-[#25d366] border-2 border-[#0b0f1a]" />
                <div className="flex flex-wrap items-baseline gap-3">
                  <span className="text-white/70 text-sm w-16">{a.time}</span>
                  <h4 className="text-white font-medium">{a.title}</h4>
                </div>
                <p className="text-white/60 text-sm ml-16 mt-1">{a.room}</p>
              </li>
            ))}
          </ol>
          <div className="text-center mt-8">
            <a
              href={whatsappRR("Hi! I&apos;d like to RSVP for the event.")}
              target="_blank"
              rel="noopener"
              className="inline-block rounded-full bg-[#25d366] text-white px-6 py-3 font-medium hover:bg-[#1eb053] transition"
            >
              RSVP on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Tickets */}
      <section id="tickets" className="py-20 bg-[#0e1322]">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          {[
            { name: "Early Bird", price: "1,499 KES", note: "Limited seats, ends soon" },
            { name: "Standard",  price: "2,499 KES", note: "Full access, all sessions" },
            { name: "VIP",       price: "On request", note: "Front row + backstage" },
          ].map((p, idx) => (
            <div key={idx} className="rounded-xl border border-white/10 bg-white/5 p-6 flex flex-col">
              <h3 className="font-semibold text-lg mb-1 text-white">{p.name}</h3>
              <div className="text-2xl font-bold mb-2 text-white">{p.price}</div>
              <p className="text-sm text-white/70 mb-4">{p.note}</p>
              <a
                href={whatsappRR(`Hi, I&apos;m interested in the ${p.name} ticket.`)}
                target="_blank" rel="noopener"
                className="mt-auto inline-block rounded-full bg-[#25d366] text-white px-5 py-2 text-sm font-medium hover:bg-[#1eb053] transition"
              >
                Get on WhatsApp
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Templates */}
      <section id="templates" className="py-20 px-6 bg-[#0b0f1a]">
        <h2 className="text-center text-2xl font-semibold mb-10 text-white">More Templates</h2>
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { title: "Salon",  preview: "https://salon.tech24.co.ke", img:"salon.jpg" },
            { title: "Shop",   preview: "https://shop.tech24.co.ke",  img:"shop.jpg" },
            { title: "Event",  preview: "https://event.tech24.co.ke", img:"event.jpg" },
          ].map((t, i) => (
            <div key={i} className="rounded-lg border border-white/10 bg-white/5 p-5">
              <img src={`${t.img}`} alt="" className="rounded-lg mb-4" />
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-white">{t.title}</h4>
                  <a href={t.preview} target="_blank" className="text-sm text-white/70 hover:text-white">
                    Preview
                  </a>
                </div>
                <a
                  href={whatsappRR(`Hi! I want to use the ${t.title} template.`)}
                  target="_blank"
                  rel="noopener"
                  className="rounded-full border border-white/20 text-white/90 px-4 py-2 text-sm hover:bg_white/10 transition"
                >
                  Use this
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-[#0e1322] text-center">
        <h2 className="text-2xl font-semibold mb-6 text-white">Let&apos;s Build Your Event</h2>
        <p className="text-white/70 mb-6">
          We&apos;ll set up your event site and connect your WhatsApp - ready to go in days.
        </p>
        <div className="flex flex-wrap gap-3 justify_center text-sm text-white/80 mb-6">
          <span>Tel: {site.contact.phone}</span>
          <span> | </span>
          <span>Email: {site.contact.email}</span>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={whatsappRR("Hi! I&apos;d like to get started with the Event template.")}
            target="_blank"
            rel="noopener"
            className="inline-block rounded-full bg-[#25d366] text-white px-6 py-3 font-medium hover:bg-[#1eb053] transition"
          >
            Continue on WhatsApp
          </a>
          <a
            href={site.contact.mapsUrl}
            target="_blank"
            className="inline-block rounded-full border border_white/20 text-white/90 px-6 py-3 font-medium hover:bg-white/10 transition"
          >
            Open in Maps
          </a>
        </div>
      </section>

      <footer className="py-6 text-center text-sm text-white/60 border-t border-white/10 bg-[#0b0f1a]">
        <p>© {new Date().getFullYear()} Tech24 Agency — All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-2 text-[13px]">
          <a href="https://salon.tech24.co.ke" target="_blank" className="hover:text-white">Salon</a>
          <a href="https://shop.tech24.co.ke" target="_blank" className="hover:text-white">Shop</a>
          <a href="https://event.tech24.co.ke" target="_blank" className="hover:text-white">Event</a>
        </div>
      </footer>
    </main>
  );
}

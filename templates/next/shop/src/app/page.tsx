/* eslint-disable @next/next/no-img-element */
import React from "react";
import { whatsappRR } from "@/app/lib/whatsapp";

/* minimalist icons that inherit color via currentColor */
function IconPayment({ className = "" }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="6" y="12" width="36" height="24" rx="4"></rect>
      <rect x="10" y="20" width="12" height="2" rx="1" fill="currentColor" stroke="none"></rect>
      <rect x="28" y="8" width="12" height="22" rx="3"></rect>
      <circle cx="34" cy="26" r="1.5" fill="currentColor" stroke="none"></circle>
    </svg>
  );
}

function IconChatOrder({ className = "" }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M8 12h22a8 8 0 0 1 8 8v2a8 8 0 0 1-8 8H18l-8 6v-6H8a8 8 0 0 1-8-8v-2a8 8 0 0 1 8-8z" />
      <path d="M28 17h10l2 12H26l2-12z" />
      <path d="M30 17a3 3 0 0 1 6 0" />
    </svg>
  );
}

function IconSpeed({ className = "" }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="12" y="6" width="24" height="36" rx="4"></rect>
      <circle cx="24" cy="35" r="1.5" fill="currentColor" stroke="none"></circle>
      <path d="M6 20h10M4 26h12M8 32h8" />
    </svg>
  );
}

export default function Page() {
  return (
    <main className="min-h-dvh bg-[#fcfaf8] text-[#2b2a2a] antialiased">
      {/* Demo ribbon */}
      <div className="w-full bg-[#e4f2dd] text-[#437a3a] text-center text-sm py-2">
        <span className="font-medium">Shop Demo Template</span>&nbsp; — Elegant, mobile-first layout for stores & boutiques
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#fcfaf8]/90 backdrop-blur supports-[backdrop-filter]:bg-[#fcfaf8]/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Tech24 Shop" className="h-9 w-9 object-contain rounded-full" />
            <span className="font-semibold tracking-tight text-lg">Tech24 Shop</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-[15px]">
            <a href="#features" className="hover:opacity-80">Features</a>
            <a href="#products" className="hover:opacity-80">Products</a>
            <a href="#pricing" className="hover:opacity-80">Pricing</a>
            <a href="#contact" className="hover:opacity-80">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={whatsappRR("Hi! I'd like a quick demo of the Shop template.")}
              target="_blank" rel="noopener"
              className="rounded-full px-4 py-2 text-sm border border-[#d8c6b6] hover:bg-[#f4ece6] transition"
            >
              Request Demo
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-24 px-6 text-center bg-[#fffdfb]" id="hero">
        <h1 className="text-4xl font-bold mb-4 text-[#2b2a2a]">
          Create Your Online Shop <br className="hidden sm:block" /> in Days, Not Weeks
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Clean, mobile-first template perfect for boutiques, electronics, or mini-markets.
          Fast to deploy, easy to manage, and ready for WhatsApp orders.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={whatsappRR("Hi! I'm interested in the Shop website template.")}
            target="_blank" rel="noopener"
            className="rounded-full bg-[#25d366] text-white px-6 py-3 font-medium hover:bg-[#1eb053] transition"
          >
            Chat on WhatsApp
          </a>
          <a
            href="#templates"
            className="rounded-full border border-[#d8c6b6] px-6 py-3 font-medium hover:bg-[#f4ece6] transition"
          >
            Back to Templates
          </a>
        </div>
      </section>

      {/* Features (single, icon-based) */}
      <section id="features" className="py-20 bg-[#faf7f3] scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          <div>
            <div className="mx-auto mb-4 h-20 w-20 text-[#437a3a]">
              <IconPayment className="h-full w-full p-3" />
            </div>
            <h3 className="font-semibold mb-2">M-Pesa & Card Ready</h3>
            <p className="text-gray-600 text-sm">
              Enable payments through M-Pesa, Visa, or MasterCard when you’re ready.
            </p>
          </div>
          <div>
            <div className="mx-auto mb-4 h-20 w-20 text-[#437a3a]">
              <IconChatOrder className="h-full w-full p-3" />
            </div>
            <h3 className="font-semibold mb-2">WhatsApp Orders</h3>
            <p className="text-gray-600 text-sm">
              Customers message you instantly for orders or inquiries — no extra setup.
            </p>
          </div>
          <div>
            <div className="mx-auto mb-4 h-20 w-20 text-[#437a3a]">
              <IconSpeed className="h-full w-full p-3" />
            </div>
            <h3 className="font-semibold mb-2">Fast on Mobile</h3>
            <p className="text-gray-600 text-sm">
              Optimized for Kenyan traffic & low-data connections with blazing speed.
            </p>
          </div>
        </div>
      </section>

      {/* Products grid (UNCHANGED dynamic mapping) */}
      <section id="products" className="py-20 px-6 scroll-mt-24">
        <h2 className="text-center text-2xl font-semibold mb-10">Featured Products</h2>
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[1,2,3,4,5,6].map(i => (
            <div key={i} className="rounded-lg border border-[#eee] bg-white p-4 hover:shadow-md transition">
              <img src={`p${i}.jpg`} alt="" className="rounded-lg mb-3" />
              <h4 className="font-medium">Product {i}</h4>
              <p className="text-sm text-gray-500 mb-2">KES {(1000 + i*200).toLocaleString()}</p>
              <a
                href={whatsappRR(`Hi, I’m interested in Product ${i}.`)}
                target="_blank" rel="noopener"
                className="text-[#25d366] font-medium hover:underline"
              >
                Ask on WhatsApp
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing (simple) */}
      <section id="pricing" className="py-20 bg-[#faf7f3] scroll-mt-24">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          {[
            { name: "Starter", price: "4,999 KES", note: "One-page shop + WhatsApp Orders" },
            { name: "Plus", price: "9,999 KES", note: "Multi-section pages + Offers + Gallery" },
            { name: "Pro", price: "On request", note: "Payments, inventory, delivery setup" },
          ].map((p, idx) => (
            <div key={idx} className="rounded-xl border border-[#e8e0d9] bg-white p-6 flex flex-col">
              <h3 className="font-semibold text-lg mb-1">{p.name}</h3>
              <div className="text-2xl font-bold mb-2">{p.price}</div>
              <p className="text-sm text-gray-600 mb-4">{p.note}</p>
              <a
                href={whatsappRR(`Hi, I'm interested in the ${p.name} plan for the Shop template.`)}
                target="_blank" rel="noopener"
                className="mt-auto inline-block rounded-full bg-[#25d366] text-white px-5 py-2 text-sm font-medium hover:bg-[#1eb053] transition"
              >
                Continue on WhatsApp
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Templates anchor (UNCHANGED dynamic mapping) */}
      <section id="templates" className="py-20 px-6 scroll-mt-24">
        <h2 className="text-center text-2xl font-semibold mb-10">More Templates</h2>
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { title: "Salon",  preview: "https://salon.tech24.co.ke", img:"salon.jpg" },
            { title: "Shop",   preview: "https://shop.tech24.co.ke",  img:"shop.jpg" },
            { title: "Event",  preview: "https://event.tech24.co.ke", img:"event.jpg" },
          ].map((t, i) => (
            <div key={i} className="rounded-lg border border-[#eee] bg-white p-5">
              <img src={`${t.img}`} alt="" className="rounded-lg mb-4" />
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold">{t.title}</h4>
                  <a href={t.preview} target="_blank" className="text-sm text-gray-500 hover:underline">
                    Preview
                  </a>
                </div>
                <a
                  href={whatsappRR(`Hi! I want to use the ${t.title} template.`)}
                  target="_blank" rel="noopener"
                  className="rounded-full border border-[#d8c6b6] px-4 py-2 text-sm hover:bg-[#f4ece6] transition"
                >
                  Use this
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-[#fffdfb] text-center scroll-mt-24">
        <h2 className="text-2xl font-semibold mb-6">Let's Build Your Shop</h2>
        <p className="text-gray-600 mb-8">
          We’ll set up your store template and connect your WhatsApp — ready to sell in days.
        </p>
        <a
          href={whatsappRR("Hi! I’d like to get started with the Shop template.")}
          target="_blank" rel="noopener"
          className="inline-block rounded-full bg-[#25d366] text-white px-6 py-3 font-medium hover:bg-[#1eb053] transition"
        >
          Continue on WhatsApp
        </a>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500 border-t border-gray-100">
        <p>© {new Date().getFullYear()} Tech24 Agency — All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-2 text-[13px]">
          <a href="https://salon.tech24.co.ke" target="_blank">Salon</a>
          <a href="https://shop.tech24.co.ke" target="_blank">Shop</a>
          <a href="https://event.tech24.co.ke" target="_blank">Event</a>
        </div>
      </footer>
    </main>
  );
}

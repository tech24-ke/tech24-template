/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Page() {
  return (
    <main className="min-h-dvh bg-[#fcfaf8] text-[#2b2a2a] antialiased">
      {/* Demo ribbon */}
      <div className="w-full bg-[#eadfd7] text-[#6b5b4f] text-sm py-2 text-center">
        <span className="font-medium">Salon Demo Template</span> &nbsp;•&nbsp; Elegant layout for beauty businesses
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#fcfaf8]/90 backdrop-blur supports-[backdrop-filter]:bg-[#fcfaf8]/70 border-b border-[#eadfd7]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
                src="/logo.png"
                alt="Lumière Salon"
                className="h-9 w-9 object-contain rounded-full"
              />

          </div>
          <nav className="hidden md:flex items-center gap-8 text-[15px]">
            <a href="#services" className="hover:opacity-80">Services</a>
            <a href="#gallery" className="hover:opacity-80">Gallery</a>
            <a href="#pricing" className="hover:opacity-80">Pricing</a>
            <a href="#contact" className="hover:opacity-80">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#book"
              className="rounded-full px-4 py-2 text-sm border border-[#d8c6b6] hover:bg-[#f4ece6] transition"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-24 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <p className="uppercase tracking-[0.28em] text-xs text-[#8b7a6d] mb-4">
              HAIR • BEAUTY • CARE
            </p>
            <h1 className="font-serif text-4xl/tight sm:text-5xl/tight lg:text-6xl/tight">
              Luxury Hair &amp; Beauty <span className="whitespace-nowrap">for Modern Women</span>
            </h1>
            <p className="mt-5 text-[15px] leading-7 text-[#5a514b]">
              Soft palettes, precision cuts, and indulgent care. A minimal, elegant
              website template tailored for salons and beauty studios that want calm sophistication.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#book"
                className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium bg-[#ceb09a] hover:bg-[#c6a58c] text-white transition"
              >
                Book Appointment
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium border border-[#d8c6b6] hover:bg-[#f5eee9] transition"
              >
                View Services
              </a>
            </div>

            {/* Key points */}
            <ul className="mt-8 grid sm:grid-cols-3 gap-4">
              {[
                ["Cut & Style", "Precision cuts, soft layers"],
                ["Coloring", "Balayage, gloss, toners"],
                ["Treatments", "Keratin & deep repair"],
              ].map(([title, sub]) => (
                <li key={title} className="rounded-2xl border border-[#eadfd7] bg-white p-4">
                  <p className="font-medium">{title}</p>
                  <p className="text-xs text-[#7a6e64] mt-1">{sub}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[28px] bg-gradient-to-br from-[#fff7f2] to-transparent" />
            <img
              src="hero.jpg"
              alt="Elegant salon interior"
              className="w-full h-[440px] object-cover rounded-[28px] border border-[#eadfd7] shadow-[0_8px_40px_rgba(77,64,54,0.12)]"
            />
            <div className="absolute bottom-3 right-3 rounded-full bg-white/90 backdrop-blur px-4 py-2 text-xs border border-[#eadfd7]">
              Open Tue–Sun • By Appointment
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-6">
            <h2 className="font-serif text-3xl sm:text-4xl">Signature Services</h2>
            <a href="#pricing" className="text-sm underline underline-offset-4 hover:opacity-80">
              See pricing
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Cut & Finish",
                desc: "Personalized consultation, precision cut, and polished blow-dry.",
                img: "service-cut.jpg",
              },
              {
                title: "Color & Gloss",
                desc: "Radiant, low-maintenance color: balayage, gloss, root melts.",
                img: "service-color.jpg",
              },
              {
                title: "Treatment Rituals",
                desc: "Repair & shine rituals for long-lasting softness and strength.",
                img: "service-treatment.jpg",
              },
            ].map((s) => (
              <article
                key={s.title}
                className="group overflow-hidden rounded-3xl border border-[#eadfd7] bg-white"
              >
                <img
                  src={s.img}
                  alt={s.title}
                  className="h-52 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                />
                <div className="p-5">
                  <h3 className="text-lg font-medium">{s.title}</h3>
                  <p className="mt-1 text-sm text-[#6a5f56]">{s.desc}</p>
                  <div className="mt-4">
                    <a
                      href="#book"
                      className="text-sm rounded-full border border-[#d8c6b6] px-4 py-2 hover:bg-[#f5eee9] transition"
                    >
                      Book now
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-6">
            <h2 className="font-serif text-3xl sm:text-4xl">Soft Gallery</h2>
            <p className="text-sm text-[#7a6e64]">A calm, minimal look & feel</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {["g1.jpg", "g2.jpg", "g3.jpg", "g4.jpg", "g5.jpg", "g6.jpg", "g7.jpg", "g8.jpg"].map(
              (name) => (
                <img
                  key={name}
                  src={`${name}`}
                  alt="Salon style"
                  className="aspect-[4/5] w-full object-cover rounded-2xl border border-[#eadfd7]"
                />
              )
            )}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-14 lg:py-24 bg-[#fffdfb] border-y border-[#eadfd7]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl mb-8">Pricing</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Classic Cut",
                price: "KES 2,800",
                items: ["Consultation", "Cut & Blow-dry", "Finishing"],
              },
              {
                name: "Balayage Glow",
                price: "KES 7,500",
                items: ["Lightening", "Gloss/Toner", "Conditioning"],
              },
              {
                name: "Keratin Ritual",
                price: "KES 9,900",
                items: ["Smoothing", "Frizz-control", "Shine treatment"],
              },
            ].map((p) => (
              <div
                key={p.name}
                className="rounded-3xl border border-[#eadfd7] bg-white p-6 flex flex-col"
              >
                <h3 className="text-lg font-medium">{p.name}</h3>
                <p className="mt-1 text-sm text-[#7a6e64]">Approx. 60–120 mins</p>
                <p className="mt-5 text-2xl font-semibold">{p.price}</p>
                <ul className="mt-4 space-y-2 text-sm text-[#5f564f]">
                  {p.items.map((i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-[#ceb09a]" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <a
                    href="#book"
                    className="inline-flex rounded-full bg-[#ceb09a] hover:bg-[#c6a58c] text-white px-5 py-3 text-sm transition"
                  >
                    Book this
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl mb-8">What clients say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              ["Softest color ever", "The balayage is subtle and glossy. Exactly the calm look I wanted."],
              ["Relaxing experience", "Peaceful vibe, gentle music, and a beautiful minimalist interior."],
              ["Lasting results", "Keratin made my hair smooth for weeks without heavy styling."],
            ].map(([title, quote]) => (
              <figure key={title} className="rounded-3xl border border-[#eadfd7] bg-white p-6">
                <figcaption className="font-medium">{title}</figcaption>
                <blockquote className="mt-2 text-sm text-[#6a5f56]">“{quote}”</blockquote>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="py-14 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl">Ready to elevate your salon?</h2>
          <p className="mt-3 text-[15px] text-[#6b6057]">
            This template is part of the Tech24 library. We customize copy, colors, and booking
            CTA for your brand in days.
          </p>
          <div className="mt-7 flex items-center justify-center gap-3">
            <a
              href="#book"
              className="rounded-full bg-[#ceb09a] hover:bg-[#c6a58c] text-white px-6 py-3 text-sm font-medium transition"
            >
              Preview Booking Flow
            </a>
            <a
              href="#"
              className="rounded-full border border-[#d8c6b6] px-6 py-3 text-sm font-medium hover:bg-[#f5eee9] transition"
            >
              Visit Demo
            </a>
          </div>
          <p className="mt-6 text-xs text-[#8b7a6d]">Nairobi • Tue–Sun • 10:00–19:00</p>
        </div>
      </section>

      {/* Footer */}
	  
      <footer className="border-t border-[#eadfd7]">
	  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
		<p className="text-[#7a6e64]">
		  © {new Date().getFullYear()}{" "}
		  <a
			href="https://tech24.co.ke"
			target="_blank"
			rel="noopener noreferrer"
			className="font-bold underline hover:text-[#5e5046]"
		  >
			Tech24
		  </a>{" "}
		  Templates
		</p>
		<div className="flex gap-4">
		  <a href="#" className="hover:opacity-80">Privacy</a>
		  <a href="#" className="hover:opacity-80">Terms</a>
		  <a href="#" className="hover:opacity-80">Support</a>
		</div>
	  </div>
	</footer>

    </main>
  );
}

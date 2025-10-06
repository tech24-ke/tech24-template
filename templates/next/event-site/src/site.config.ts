// Exact same shape as your salon/shop config
export const site = {
  brand: "Tech24 Event",
  baseUrl: "https://event.tech24.co.ke",
  metaTitle: "Tech24 Event - Nairobi",
  metaDescription:
    "Fast, affordable event website with WhatsApp RSVPs - powered by Tech24.",
  contact: {
    phone: "+254 748 699460",
    whatsapp: "+254748699460",
    email: "info@business.co.ke",
    mapsUrl: "https://maps.google.com?q=KICC+Nairobi"
  },
  hero: {
    title: "Tech24 Launch Event",
    subtitle: "RSVP in 1 tap - WhatsApp ready",
    ctaText: "RSVP on WhatsApp"
  },
  services: [
    { title: "Tickets & Payments", desc: "M-Pesa or card, promo codes" },
    { title: "Schedule & Speakers", desc: "Agenda, sessions, updates" },
    { title: "Venue & Map", desc: "Location, directions, parking" }
  ]
} as const;

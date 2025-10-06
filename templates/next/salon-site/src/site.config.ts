export const site = {
  brand: "Tech24 Template",
  baseUrl: "http://localhost:3000",
  metaTitle: "Glow Beauty Salon · Nairobi",
  metaDescription:
    "Fast, affordable website with WhatsApp bookings — powered by Tech24.",
  contact: {
    phone: "+254 748 699460",
    whatsapp: "+254748699460",
    email: "info@business.co.ke",
    mapsUrl: "https://maps.google.com?q=Kimathi+St+Nairobi"
  },
  hero: {
    title: "Glow Beauty Salon",
    subtitle: "Book your look in 1 tap — WhatsApp ready",
    ctaText: "Book on WhatsApp"
  },
  services: [
    { title: "Hair Styling", desc: "Braids, weaves, treatments" },
    { title: "Nails & Spa", desc: "Manicure, pedicure, gel" },
    { title: "Makeup", desc: "Events & bridal looks" }
  ]
} as const;

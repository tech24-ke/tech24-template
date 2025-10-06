// My BNB Manager — short-let managers with 2–4 properties
export const site = {
  brand: "My BNB Manager",
  baseUrl: "https://bnb.tech24.co.ke",
  metaTitle: "My BNB Manager - Nairobi",
  metaDescription:
    "Simple website for short-let managers (2–4 BnBs): WhatsApp bookings, availability, map and M-Pesa.",
  contact: {
    phone: "+254 748 699460",
    whatsapp: "+254748699460",
    email: "hello@business.co.ke",
    mapsUrl: "https://maps.google.com?q=Westlands+Nairobi"
  },
  hero: {
    title: "Manage 2–4 BnBs the easy way",
    subtitle: "WhatsApp booking requests, availability info, Google Map, and quick M-Pesa payments.",
    ctaText: "Get Booking Requests"
  },
  services: [
    { title: "2–4 Property Portfolio", desc: "Showcase units with photos, rates and amenities." },
    { title: "WhatsApp Bookings", desc: "Guests message you instantly to request dates." },
    { title: "Housekeeping & Check-in", desc: "Share guides and rotas when you are ready." }
  ]
} as const;

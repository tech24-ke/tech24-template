export const site = {
  brand: "DineEasy Café",
  baseUrl: "http://localhost:3000",
  metaTitle: "DineEasy Café · Westlands, Nairobi",
  metaDescription:
    "Local café in Westlands. Fast takeaway, delivery links, and WhatsApp ordering.",
  contact: {
    phone: "+254 700 000000",
    whatsapp: "+254700000000",
    email: "orders@dineeasy.co.ke",
    addressLine: "Woodvale Grove, Westlands",
    city: "Nairobi, Kenya",
    mapsUrl: "https://maps.google.com?q=Woodvale+Grove+Westlands+Nairobi",
    mapsEmbed:
      "https://www.google.com/maps?q=Woodvale+Grove,+Westlands,+Nairobi&output=embed"
  },
  hero: {
    title: "DineEasy Café",
    subtitle: "Order in one tap — WhatsApp ready",
    ctaText: "Order on WhatsApp"
  },
  hours: [
    { d: "Mon–Fri", h: "07:30 – 21:00" },
    { d: "Sat–Sun", h: "08:00 – 22:00" }
  ],
  deliveryLinks: [
    { label: "Glovo", url: "https://glovoapp.com/ke/" },
    { label: "Uber Eats", url: "https://www.ubereats.com/" }
  ],
  menu: [
    {
      title: "Breakfast",
      items: [
        { name: "Chapati & Chai", price: "250", desc: "Fresh chapati + spiced tea" },
        { name: "Mandazi (3)", price: "200", desc: "Light, fluffy, fresh" },
        { name: "Spanish Omelette", price: "450", desc: "Eggs, onions, peppers" }
      ]
    },
    {
      title: "Burgers",
      items: [
        { name: "Beef Burger", price: "650", desc: "Cheddar, pickles, house sauce" },
        { name: "Chicken Burger", price: "620", desc: "Crispy fillet, garlic mayo" }
      ]
    },
    {
      title: "Drinks",
      items: [
        { name: "Passion Juice", price: "250", desc: "Freshly squeezed" },
        { name: "Latte", price: "300", desc: "Double shot" }
      ]
    }
  ],
  about: {
    blurb:
      "We’re a neighborhood café serving Kenyan favorites, quick breakfasts, and fresh juices. Order online or swing by in Westlands."
  }
} as const;

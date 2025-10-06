// src/app/lib/whatsapp.ts
export function whatsappLink(number: string, text?: string) {
  const n = (number || "").replace(/\D/g, ""); // keep digits only
  const q = text ? `?text=${encodeURIComponent(text)}` : "";
  return `https://wa.me/${n}${q}`;
}

// Simple round-robin if you want a local fallback.
// If you already have a global .wa-rr init, keep that one instead.
const waAgents = ["254748699460", "32465603546"];
let waIdx = 0;

export function whatsappRR(text?: string) {
  const n = waAgents[waIdx % waAgents.length];
  waIdx++;
  return whatsappLink(n, text);
}

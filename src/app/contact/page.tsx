// src/app/contact/page.tsx
import type { CSSProperties } from "react";
import WorldMap from "@/components/ui/world-map";
import ContactForm from "@/components/ContactForm";

const brand = { green: "#34eb40", dark: "#0c0f14" } as const;

export const metadata = {
  title: "Contact Us | Intellance",
  description:
    "Get in touch to talk ERP, AI & automation. Offices worldwide and 24/7 support.",
};

const dots = [
  // demo lines (customize or remove)
  { start: { lat: 37.7749, lng: -122.4194 }, end: { lat: 51.5072, lng: -0.1276 } },
  { start: { lat: 28.6139, lng: 77.209 }, end: { lat: 25.2048, lng: 55.2708 } },
];

export default function ContactPage() {
  return (
    <main className="scroll-smooth">
      {/* HERO */}
   <section className="relative min-h-[70vh] flex items-center justify-center text-white overflow-hidden">
  <WorldMap
    dots={[
      { start: { lat: 37.7749, lng: -122.4194 }, end: { lat: 51.5072, lng: -0.1276 } },
      { start: { lat: 28.6139, lng: 77.209 }, end: { lat: 25.2048, lng: 55.2708 } },
    ]}
    lineColor="#34eb40"
  />

  <div className="relative z-10 max-w-4xl text-center px-6">
    <h1 className="text-5xl md:text-6xl font-extrabold">Let’s Build What Matters</h1>
    <p className="mt-4 text-white/80 text-lg">
      Tell us about your ERP or AI initiative. We’ll respond within one business day.
    </p>
  </div>
</section>

      {/* FORM */}
      <section className="bg-white text-[#2E2E37]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-12 md:pt-16 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-1">
              <h2 className="text-2xl md:text-3xl font-extrabold">Send us a message</h2>
              <div
                className="h-[2px] w-40 bg-gradient-to-r from-[var(--brand)] to-[var(--brand)]/40 mt-3"
                style={{ "--brand": brand.green } as CSSProperties}
              />
              <p className="mt-4 text-[15px] leading-7 text-[#2E2E37]/90">
                Prefer email? Write to <a className="underline" href="mailto:nasad8204@gmail.com">nasad8204@gmail.com</a>.
              </p>
            </div>
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="bg-[radial-gradient(120%_120%_at_5%_-10%,#ffffff_0%,#f7f9fc_60%,#eef2f7_100%)] text-[#2E2E37]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-10 pb-16">
          <h3 className="text-2xl md:text-3xl font-extrabold">Our Locations</h3>
          <div
            className="h-[2px] w-48 bg-gradient-to-r from-[var(--brand)] to-[var(--brand)]/40 mt-3 mb-6"
            style={{ "--brand": brand.green } as CSSProperties}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-black/10 bg-white p-6">
              <h4 className="text-lg font-bold">San Francisco, USA</h4>
              <p className="text-sm text-[#2E2E37]/80 mt-1">101 Market St</p>
              <p className="mt-3 text-sm"><span className="font-semibold">Phone:</span> +1 (415) 555-0101</p>
              <p className="text-sm"><span className="font-semibold">Email:</span> sf@intellance.com</p>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white p-6">
              <h4 className="text-lg font-bold">Dubai, UAE</h4>
              <p className="text-sm text-[#2E2E37]/80 mt-1">Dubai Internet City</p>
              <p className="mt-3 text-sm"><span className="font-semibold">Phone:</span> +971 4 555 0123</p>
              <p className="text-sm"><span className="font-semibold">Email:</span> dubai@intellance.com</p>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white p-6">
              <h4 className="text-lg font-bold">Lahore, PK</h4>
              <p className="text-sm text-[#2E2E37]/80 mt-1">Gulberg III</p>
              <p className="mt-3 text-sm"><span className="font-semibold">Phone:</span> +92 42 555 0142</p>
              <p className="text-sm"><span className="font-semibold">Email:</span> lahore@intellance.com</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

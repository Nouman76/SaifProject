// src/components/ContactForm.tsx
"use client";

import { useState } from "react";

type Status = { ok: boolean; message: string } | null;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus(null);
    setLoading(true);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // Very light validation
    if (!data.name || !data.email || !data.message) {
      setStatus({ ok: false, message: "Name, Email and Message are required." });
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();
      setStatus({ ok: res.ok, message: json.message || (res.ok ? "Sent!" : "Failed") });
      if (res.ok) form.reset();
    } catch {
      setStatus({ ok: false, message: "Network error. Please try again." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium">Name</label>
          <input name="name" className="mt-1 w-full rounded-md border border-black/15 px-3 py-2 outline-none focus:ring-2 focus:ring-[#34eb40]" placeholder="Your name" />
        </div>
        <div>
          <label className="text-sm font-medium">Email</label>
          <input type="email" name="email" className="mt-1 w-full rounded-md border border-black/15 px-3 py-2 outline-none focus:ring-2 focus:ring-[#34eb40]" placeholder="you@company.com" />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium">Company</label>
        <input name="company" className="mt-1 w-full rounded-md border border-black/15 px-3 py-2 outline-none focus:ring-2 focus:ring-[#34eb40]" placeholder="Company Inc." />
      </div>

      <div>
        <label className="text-sm font-medium">Message</label>
        <textarea name="message" rows={5} className="mt-1 w-full rounded-md border border-black/15 px-3 py-2 outline-none focus:ring-2 focus:ring-[#34eb40]" placeholder="Tell us about your project..." />
      </div>

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center rounded-md border border-black/10 bg-[#34eb40] px-5 py-2 text-sm font-semibold text-[#0c0f14] hover:opacity-90 disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {status && (
          <span className={`text-sm ${status.ok ? "text-green-600" : "text-red-600"}`}>
            {status.message}
          </span>
        )}
      </div>
    </form>
  );
}

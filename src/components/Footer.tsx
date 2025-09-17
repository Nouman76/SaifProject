import Link from "next/link";
import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0b0f14] text-gray-300 relative">
      {/* Accent top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#34eb40] via-transparent to-[#34eb40]" />

      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Column 1: Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Let’s connect</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/contact" className="hover:text-[#34eb40] transition-colors">Get in touch</Link>
            </li>
            <li>
              <Link href="/contact#locations" className="hover:text-[#34eb40] transition-colors">View locations</Link>
            </li>
            <li>
              <Link href="/about#who-we-are" className="hover:text-[#34eb40] transition-colors">Learn about us</Link>
            </li>
          </ul>
        </div>

        {/* Column 2: Services (4 only) */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/services/sap" className="hover:text-[#34eb40] transition-colors">SAP</Link>
            </li>
            <li>
              <Link href="/services/oracle" className="hover:text-[#34eb40] transition-colors">Oracle</Link>
            </li>
            <li>
              <Link href="/services/salesforce" className="hover:text-[#34eb40] transition-colors">Salesforce</Link>
            </li>
            <li>
              <Link href="/services/ai-automation" className="hover:text-[#34eb40] transition-colors">AI &amp; Automation</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: About with deep links to sections */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">About Intellance</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/about#who-we-are" className="hover:text-[#34eb40] transition-colors">Who we are</Link>
            </li>
            <li>
              <Link href="/about#vision" className="hover:text-[#34eb40] transition-colors">Vision</Link>
            </li>
            <li>
              <Link href="/about#mission" className="hover:text-[#34eb40] transition-colors">Mission</Link>
            </li>
            <li>
              <Link href="/about#leadership" className="hover:text-[#34eb40] transition-colors">Leadership</Link>
            </li>
            <li>
              <Link href="/about#ceo-message" className="hover:text-[#34eb40] transition-colors">CEO message</Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Social */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Follow us</h4>
          <div className="flex space-x-5">
            {[Facebook, Linkedin, Twitter, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="p-2 rounded-full border border-gray-700 hover:border-[#34eb40] hover:text-[#34eb40] transition-colors"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-gray-800 text-center py-4 text-sm bg-[#0b0f14]/90">
        <p>
          © {new Date().getFullYear()} <span className="text-white font-medium">Intellance</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

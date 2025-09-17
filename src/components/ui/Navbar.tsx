"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X, Phone } from "lucide-react";
import LogoGreen from "@/assets/intellance_logo_compact_green.svg";

type SubItem = { name: string; href: string };
type ServicesMap = Record<string, SubItem[]>;

const CATEGORY_ROUTES: Record<string, string> = {
  SAP: "/services/sap",
  Oracle: "/services/oracle",
  Salesforce: "/services/salesforce",
  "AI & Automation": "/services/ai-automation",
};

const services: ServicesMap = {
  SAP: [
    { name: "S/4HANA", href: "/services/sap#s4hana" },
    { name: "Ariba", href: "/services/sap#ariba" },
    { name: "SuccessFactors", href: "/services/sap#successfactors" },
    { name: "Business Technology Platform (BTP)", href: "/services/sap#btp" },
    { name: "Analytics Cloud (SAC)", href: "/services/sap#sac" },
    { name: "Fiori & SAPUI5", href: "/services/sap#fiori" },
    { name: "Integration Suite", href: "/services/sap#integration-suite" },
  ],
  Oracle: [
    { name: "Cloud ERP", href: "/services/oracle#cloud-erp" },
    { name: "Fusion Middleware", href: "/services/oracle#fusion-middleware" },
    { name: "Analytics Cloud", href: "/services/oracle#analytics-cloud" },
    { name: "Database", href: "/services/oracle#database" },
    { name: "Integration Cloud", href: "/services/oracle#integration-cloud" },
    { name: "HCM Cloud", href: "/services/oracle#hcm-cloud" },
  ],
  Salesforce: [
    { name: "Sales Cloud", href: "/services/salesforce#sales-cloud" },
    { name: "Service Cloud", href: "/services/salesforce#service-cloud" },
    { name: "Marketing Cloud", href: "/services/salesforce#marketing-cloud" },
    { name: "Commerce Cloud", href: "/services/salesforce#commerce-cloud" },
    { name: "Experience Cloud", href: "/services/salesforce#experience-cloud" },
    {
      name: "Analytics Cloud (Tableau CRM)",
      href: "/services/salesforce#analytics-cloud",
    },
    {
      name: "Platform & App Cloud",
      href: "/services/salesforce#platform-cloud",
    },
  ],
  "AI & Automation": [
    {
      name: "AI-Powered ERP Enhancements",
      href: "/services/ai-automation#ai-consulting",
    },
    {
      name: "Intelligent Process Automation",
      href: "/services/ai-automation#ipa",
    },
    {
      name: "Predictive Analytics & Reporting",
      href: "/services/ai-automation#predictive",
    },
  ],
};

const industries = [
  { name: "Banking & FSI", href: "/industries#banking" },
  { name: "Retail", href: "/industries#retail" },
  { name: "Manufacturing", href: "/industries#manufacturing" },
  { name: "Energy & Utilities", href: "/industries#energy" },
  { name: "Telecommunication", href: "/industries#telecommunication" },
  { name: "Distribution & Logistics", href: "/industries#logistics" },
  { name: "Healthcare", href: "/industries#healthcare" },
];

const aboutUs = [
  { name: "Vision", href: "/about#vision" },
  { name: "Mission", href: "/about#mission" },
  { name: "Leadership", href: "/about#leadership" },
];

export default function Navbar() {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  const toggleMobileMenu = () => setMobileOpen((s) => !s);
  const toggleExpanded = (menu: string) =>
    setExpandedMenu(expandedMenu === menu ? null : menu);
  const closeMobileMenu = () => {
    setMobileOpen(false);
    setExpandedMenu(null);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 font-sans">
      <nav className="backdrop-blur bg-black/80 text-white shadow-md">
        {/* Top bar: desktop (logo left • menu center • CTA right), mobile (burger • centered logo • phone) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 relative flex items-center justify-between">
          {/* MOBILE: left hamburger */}
          <button
            onClick={toggleMobileMenu}
            className="p-2 md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* MOBILE: right phone/contact */}
          <Link href="/contact" className="p-2 md:hidden" aria-label="Contact">
            <Phone size={22} />
          </Link>

          {/* MOBILE: centered logo (absolute) */}
          <Link
            href="/"
            className="md:hidden absolute left-1/2 -translate-x-1/2 h-10 w-[160px] sm:h-12 sm:w-[200px] inline-block"
            aria-label="Go to home"
          >
            <Image
              src={LogoGreen}
              alt="Company Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>

          {/* DESKTOP: left logo */}
          <Link
            href="/"
            className="hidden md:inline-block relative h-10 w-[160px] sm:h-12 sm:w-[200px]"
            aria-label="Go to home"
          >
            <Image
              src={LogoGreen}
              alt="Company Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>

          {/* DESKTOP: centered menu */}
          <ul className="hidden md:flex gap-8 items-center text-[16px] font-medium mx-auto">
            <li className="px-2 py-1">
              <Link href="/" className="hover:text-[#34eb40] transition">
                Home
              </Link>
            </li>

            {/* SERVICES */}
            <li
              className="relative group px-2 py-1"
              onMouseEnter={() => setHoveredMenu("services")}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <button className="flex items-center gap-1 transition">
                Services
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    hoveredMenu === "services" ? "rotate-180" : ""
                  }`}
                  size={14}
                />
              </button>
              <div
                className={`absolute left-1/2 -translate-x-1/2 top-full bg-[#2E2E37]/70 text-white py-6 shadow-xl transition-all duration-300 ease-out z-50 w-[min(95vw,70rem)] max-w-7xl rounded-sm ${
                  hoveredMenu === "services"
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 px-8">
                  {Object.entries(services).map(([category, items]) => (
                    <div key={category} className="min-w-[12rem]">
                      <h4 className="text-[#34eb40] font-semibold mb-3">
                        <Link
                          href={CATEGORY_ROUTES[category] ?? "#"}
                          onClick={() => setHoveredMenu(null)}
                          className="hover:underline"
                        >
                          {category}
                        </Link>
                      </h4>
                      <ul className="space-y-2">
                        {items.map((item) => (
                          <li key={item.href} className="block w-full text-sm">
                            <Link
                              href={item.href}
                              onClick={() => setHoveredMenu(null)}
                              className="relative inline-block after:block after:h-[1px] after:bg-[#34eb40] after:w-0 hover:after:w-full after:transition-all after:duration-200"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </li>

            {/* INDUSTRIES */}
            <li
              className="relative group px-2 py-1"
              onMouseEnter={() => setHoveredMenu("industries")}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <button className="flex items-center gap-1 transition">
                Industries
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    hoveredMenu === "industries" ? "rotate-180" : ""
                  }`}
                  size={14}
                />
              </button>

              <div
                className={`absolute left-1/2 -translate-x-1/2 top-full
                  bg-[#2E2E37]/70 text-white py-6 shadow-xl
                  transition-all duration-300 ease-out z-50
                  w-[min(88vw,26rem)] rounded-sm
                  ${
                    hoveredMenu === "industries"
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
              >
                <div className="px-8">
                  <Link
                    href="/industries"
                    className="block text-sm font-semibold text-[#34eb40] mb-3 hover:underline"
                  >
                    Industries We Serve
                  </Link>

                  <ul className="space-y-2 max-h-[50vh] overflow-auto pr-2">
                    {industries.map((item) => (
                      <li key={item.href} className="block w-full text-sm">
                        <Link
                          href={item.href}
                          className="relative inline-block after:block after:h-[1px] after:bg-[#34eb40] after:w-0 hover:after:w-full after:transition-all after:duration-200"
                          onClick={() => setHoveredMenu(null)}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>

            {/* ABOUT (Careers removed) */}
            <li
              className="relative group px-2 py-1"
              onMouseEnter={() => setHoveredMenu("about")}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <Link
                href="/about"
                className="flex items-center gap-1 transition"
                onClick={() => setHoveredMenu(null)}
              >
                About
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    hoveredMenu === "about" ? "rotate-180" : ""
                  }`}
                  size={14}
                />
              </Link>

              <div
                className={`absolute left-1/2 -translate-x-1/2 top-full bg-[#2E2E37]/70 text-white py-6 shadow-xl transition-all duration-300 ease-out z-50 w-[min(88vw,16rem)] rounded-sm ${
                  hoveredMenu === "about"
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                <ul className="space-y-2 px-8">
                  {/* NEW: green header link */}
                  <li className="block w-full text-sm">
                    <Link
                      href="/about"
                      className="font-semibold text-[#34eb40] hover:underline"
                    >
                      About Us
                    </Link>
                  </li>

                  {/* NEW: Who we are */}
                  <li className="block w-full text-sm">
                    <Link
                      href="/about#who-we-are"
                      className="relative inline-block after:block after:h-[1px] after:bg-[#34eb40] after:w-0 hover:after:w-full after:transition-all after:duration-200"
                    >
                      Who we are
                    </Link>
                  </li>

                  {/* Existing 3 items from aboutUs (Vision, Mission, Leadership) */}
                  {aboutUs.map((item) => (
                    <li key={item.name} className="block w-full text-sm">
                      <Link
                        href={item.href}
                        className="relative inline-block after:block after:h-[1px] after:bg-[#34eb40] after:w-0 hover:after:w-full after:transition-all after:duration-200"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>

          {/* DESKTOP: right CTA */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              href="/contact"
              className="bg-white rounded-sm text-[#2E2E37] px-4 py-2 hover:bg-[#34eb40] hover:text-[#2E2E37] transition"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile flyout */}
        <div className={`md:hidden ${mobileOpen ? "block" : "hidden"}`}>
          <ul className="bg-[#2E2E37]/70 text-white py-2 space-y-1 px-2">
            {/* Home */}
            <li>
              <Link
                href="/"
                onClick={closeMobileMenu}
                className="block w-full text-left py-3 px-2 text-[16px] font-medium"
              >
                Home
              </Link>
            </li>

            {/* Service (top-level categories only) */}
            <li>
              <button
                onClick={() => toggleExpanded("Services")}
                className="flex items-center justify-between w-full text-left py-3 px-2 text-[16px] font-medium"
              >
                <span>Service</span>
                <ChevronDown
                  size={16}
                  className={`${
                    expandedMenu === "Services" ? "rotate-180" : ""
                  } transition-transform`}
                />
              </button>
              {expandedMenu === "Services" && (
                <ul className="pl-4 pb-2 space-y-2">
                  {(
                    ["SAP", "Oracle", "Salesforce", "AI & Automation"] as const
                  ).map((cat) => (
                    <li key={cat}>
                      <Link
                        href={CATEGORY_ROUTES[cat]}
                        onClick={closeMobileMenu}
                        className="block py-2"
                      >
                        {cat}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Industries */}
            <li>
              <button
                onClick={() => toggleExpanded("Industries")}
                className="flex items-center justify-between w-full text-left py-3 px-2 text-[16px] font-medium"
              >
                <span>Industries</span>
                <ChevronDown
                  size={16}
                  className={`${
                    expandedMenu === "Industries" ? "rotate-180" : ""
                  } transition-transform`}
                />
              </button>
              {expandedMenu === "Industries" && (
                <ul className="pl-4 pb-2 space-y-2 max-h-[55vh] overflow-auto pr-1">
                  {industries.map((i) => (
                    <li key={i.href}>
                      <Link
                        href={i.href}
                        onClick={closeMobileMenu}
                        className="block py-2"
                      >
                        {i.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* About (no Careers) */}
            <li>
              <button
                onClick={() => toggleExpanded("About")}
                className="flex items-center justify-between w-full text-left py-3 px-2 text-[16px] font-medium"
              >
                <span>About</span>
                <ChevronDown
                  size={16}
                  className={`${
                    expandedMenu === "About" ? "rotate-180" : ""
                  } transition-transform`}
                />
              </button>
              {expandedMenu === "About" && (
                <ul className="pl-4 pb-2 space-y-2">
                  {aboutUs.map((a) => (
                    <li key={a.name}>
                      <Link
                        href={a.href}
                        onClick={closeMobileMenu}
                        className="block py-2"
                      >
                        {a.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Contact */}
            <li>
              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="block w-full text-left py-3 px-2 text-[16px] font-medium"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

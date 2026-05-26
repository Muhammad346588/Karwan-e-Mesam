import { useState, useEffect } from "react";
import { Phone, Mail, MapPin, MessageCircle, ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = ["Home", "Packages", "About", "Gallery", "Contact"];
  const services = [
    "Premium Umrah Packages",
    "Economy Umrah",
    "Ziyarat Tours",
    "Flight Bookings",
    "Hotel Reservations",
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 font-sans border-t border-emerald-900/30">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand Profile */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-500 flex items-center justify-center shadow-md shadow-emerald-900/40">
                <span className="text-white font-bold text-base tracking-wider">
                  K
                </span>
              </div>
              <div>
                <h2 className="text-lg font-bold text-white tracking-tight leading-none">
                  Karwan-e-Mesam
                </h2>
                <p className="text-[10px] uppercase tracking-widest text-emerald-400 font-semibold mt-1">
                  Umrah • Ziyarat • Travel
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed pt-2">
              Providing premium and spiritually fulfilling Umrah and Ziyarat
              journeys with absolute comfort and trust. Your sacred journey is
              our highest commitment.
            </p>

            {/* Social Icons using Clean SVGs to avoid bundle/export issues */}
            <div className="flex items-center gap-3 pt-2">
              {/* Facebook */}
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all duration-300"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all duration-300"
              >
                <svg
                  className="w-4 h-4 stroke-current fill-none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              {/* Youtube */}
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all duration-300"
              >
                <svg
                  className="w-4 h-4 stroke-current fill-none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white border-l-2 border-emerald-500 pl-3 mb-6">
              Quick Navigation
            </h3>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((item, i) => (
                <li key={i}>
                  <a
                    href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                    className="text-slate-400 hover:text-emerald-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-0 h-[1px] bg-emerald-500 group-hover:w-2 transition-all mr-0 group-hover:mr-2"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white border-l-2 border-emerald-500 pl-3 mb-6">
              Our Services
            </h3>
            <ul className="space-y-3 text-sm">
              {services.map((service, i) => (
                <li
                  key={i}
                  className="text-slate-400 flex items-center gap-1.5"
                >
                  <div className="w-1 h-1 rounded-full bg-emerald-600"></div>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Urgent Contact/CTA */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white border-l-2 border-emerald-500 pl-3 mb-6">
              Contact & Support
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                <span>78-M Zainab Tower Lahore, Punjab, Pakistan</span>
              </div>

              <div className="flex items-center gap-3 text-slate-400">
                <Mail className="w-4 h-4 text-emerald-500 shrink-0" />
                <a
                  href="mailto:info@karwanemesam.com"
                  className="hover:text-emerald-400 transition"
                >
                  karwanemesam6@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3 text-slate-400">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <a
                  href="tel:+923016143561"
                  className="hover:text-emerald-400 transition"
                >
                  +92 301 6143561
                </a>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/923016143561"
                  target="_blank"
                  rel="noreferrer"
                  className="block"
                >
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center gap-2 rounded-xl py-5 transition-all shadow-lg shadow-emerald-950/50">
                    <MessageCircle className="w-4 h-4 fill-white/10" />
                    <span>Chat on WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Traditional Thin Divider */}
        <hr className="border-slate-900 my-10" />

        {/* Copyright section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} Karwan-e-Mesam. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>Designed with excellence</span>
            <span className="w-1 h-1 rounded-full bg-slate-700"></span>
            <span>Umrah & Ziyarat Experts</span>
          </p>
        </div>
      </div>

      {/* Modern Thanks Message Running Ticker Tape */}
      <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-900 text-white overflow-hidden py-3 border-t border-emerald-700/30 shadow-inner select-none">
        <div className="whitespace-nowrap flex items-center animate-[marquee_25s_linear_infinite] hover:[animation-play-state:paused] cursor-pointer">
          <span className="text-sm font-medium tracking-wide mx-4 flex items-center gap-3">
            ✨ Thank you for choosing{" "}
            <strong className="text-emerald-200">Karwan-e-Mesam</strong> for
            your sacred journey! 🕋 May Allah accept your prayers and bless your
            travels. 🕌 For elite customer care, bookings, or customized private
            packages, feel free to contact us 24/7.
          </span>

          <span className="text-sm font-medium tracking-wide mx-4 flex items-center gap-3">
            ✨ Thank you for choosing{" "}
            <strong className="text-emerald-200">Karwan-e-Mesam</strong> for
            your sacred journey! 🕋 May Allah accept your prayers and bless your
            travels. 🕌 For elite customer care, bookings, or customized private
            packages, feel free to contact us 24/7.
          </span>

          <span className="text-sm font-medium tracking-wide mx-4 flex items-center gap-3">
            ✨ Thank you for choosing{" "}
            <strong className="text-emerald-200">Karwan-e-Mesam</strong> for
            your sacred journey! 🕋 May Allah accept your prayers and bless your
            travels. 🕌 For elite customer care, bookings, or customized private
            packages, feel free to contact us 24/7.
          </span>
        </div>
      </div>

      {/* Tailwind Custom Marquee Animation Injection */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-\\[marquee_25s_linear_infinite\\] {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;

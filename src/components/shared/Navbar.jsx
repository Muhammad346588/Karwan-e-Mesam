import { useState, useEffect } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { Button } from "../ui/button";
import { toast } from "sonner";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll depth detect karne ke liye hook
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "Packages", "About", "Gallery", "Contact"];

  const handleCallToast = () => {
    toast.success("📞 Call us: +92 301 6143561", {
      description: "We are available 24/7 for your travel bookings",
      duration: 5000,
    });
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl shadow-md border-b border-emerald-100/40 py-3"
          : "bg-gradient-to-b from-black/40 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-500 flex items-center justify-center shadow-lg transform group-hover:rotate-6 transition-transform duration-300">
              <span className="text-white font-bold text-lg tracking-wider">
                K
              </span>
            </div>

            <div>
              <h1
                className={`text-xl font-extrabold tracking-tight transition-colors duration-300 ${
                  scrolled
                    ? "bg-gradient-to-r from-emerald-800 to-teal-700 bg-clip-text text-transparent"
                    : "text-white drop-shadow-sm"
                }`}
              >
                Karwan-e-Mesam
              </h1>
              <p
                className={`text-[10px] uppercase tracking-widest font-semibold mt-0.5 transition-colors duration-300 ${
                  scrolled ? "text-emerald-600" : "text-emerald-300/90"
                }`}
              >
                Umrah • Ziyarat • Travel
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav
            className={`hidden md:flex items-center gap-1 p-1.5 rounded-full border transition-all duration-300 ${
              scrolled
                ? "bg-slate-100/80 backdrop-blur-sm border-slate-200/50"
                : "bg-white/10 backdrop-blur-md border-white/20"
            }`}
          >
            {navItems.map((item, i) => {
              const isHome = item.toLowerCase() === "home";
              return (
                <a
                  key={i}
                  href={`/${isHome ? "" : item.toLowerCase()}`}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    scrolled
                      ? "text-slate-600 hover:text-emerald-700 hover:bg-white"
                      : "text-white/90 hover:text-emerald-400 hover:bg-white/10"
                  }`}
                >
                  {item}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* WhatsApp */}
            <a
              href="https://wa.me/923016143561"
              target="_blank"
              rel="noreferrer"
              className="transform hover:-translate-y-0.5 transition-transform duration-200"
            >
              <Button
                className={`font-medium flex items-center gap-2 px-4 py-2 rounded-full shadow-sm border transition-all duration-300 ${
                  scrolled
                    ? "bg-emerald-50 text-emerald-700 border-emerald-200/60 hover:bg-emerald-100/80"
                    : "bg-white/10 text-white border-white/20 backdrop-blur-sm hover:bg-white/20"
                }`}
              >
                <MessageCircle
                  className={`w-4 h-4 ${scrolled ? "fill-emerald-700/10" : "fill-white/10"}`}
                />
                <span>WhatsApp</span>
              </Button>
            </a>

            {/* Call Now */}
            <Button
              onClick={handleCallToast}
              className={`font-medium px-5 py-2 rounded-full shadow-md transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2 ${
                scrolled
                  ? "bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-emerald-600/20"
                  : "bg-emerald-600 hover:bg-emerald-500 text-white border border-emerald-500/30 shadow-black/20"
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className={`md:hidden p-2.5 rounded-xl border transition-all duration-300 ${
              scrolled
                ? "bg-emerald-50 text-emerald-700 border-emerald-100 hover:bg-emerald-100/50"
                : "bg-white/10 text-white border-white/20 backdrop-blur-sm hover:bg-white/20"
            }`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown Panel */}
      <div
        className={`fixed inset-x-0 top-[68px] bottom-0 bg-slate-950/40 backdrop-blur-md z-40 transition-all duration-300 md:hidden ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      >
        <div
          className={`bg-white w-full max-h-[85vh] overflow-y-auto rounded-b-3xl shadow-2xl px-6 py-6 space-y-6 transition-all duration-300 transform ${
            open ? "translate-y-0" : "-translate-y-4"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col gap-1">
            {navItems.map((item, i) => {
              const isHome = item.toLowerCase() === "home";
              return (
                <a
                  key={i}
                  href={`/${isHome ? "" : item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="p-3 rounded-xl text-slate-700 font-medium hover:bg-emerald-50 hover:text-emerald-700 transition-all"
                >
                  {item}
                </a>
              );
            })}
          </div>

          <hr className="border-slate-100" />

          <div className="flex flex-col gap-3">
            <a
              href="https://wa.me/923016143561"
              target="_blank"
              rel="noreferrer"
              className="w-full"
            >
              <Button className="w-full bg-emerald-50 text-emerald-700 border border-emerald-200/50 flex items-center justify-center gap-2 py-5 rounded-xl text-base font-medium">
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </Button>
            </a>

            <Button
              onClick={() => {
                setOpen(false);
                handleCallToast();
              }}
              className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white flex items-center justify-center gap-2 py-5 rounded-xl text-base font-medium shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

import { useEffect, useRef, useState } from "react";
import bgVideo from "../../assets/videos/hero2.mp4";
import { Button } from "../ui/button";
import { Phone, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const HeroSection = () => {
  const videoRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    package: "Umrah",
  });

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1;
    }
  }, []);

  // WhatsApp Submit Function
  const handleSubmit = () => {
    const number = "923016143561";

    const message = `
🕋 New Booking Inquiry

👤 Name: ${formData.name}
📞 Phone: ${formData.phone}
📦 Package: ${formData.package}

Please contact me for details.
    `;

    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* 🎥 BACKGROUND VIDEO */}
      <video
        ref={videoRef}
        src={bgVideo}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover scale-105"
      />

      {/* 🌑 OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>

      {/* 💎 CONTENT */}
      <div className="relative z-10 w-full min-h-screen flex items-center justify-center px-4 py-20">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* LEFT CONTENT */}
          <div className="text-white space-y-6 text-center md:text-left">
            <h1 className="heading-font text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
              Begin Your Spiritual Journey with{" "}
              <span className="text-emerald-400">Trust & Comfort</span>
            </h1>

            <p className="text-slate-200 text-sm sm:text-base max-w-lg mx-auto md:mx-0">
              Premium Umrah, Iraq & Iran Ziyarat packages from Pakistan. We
              provide safe, guided and comfortable spiritual journeys.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="https://wa.me/923016143561" target="_blank">
                <Button className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full flex items-center justify-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Booking
                </Button>
              </a>

              <Button
                onClick={() => {
                  toast.success("📞 Call Now", {
                    description: "📱 +92 301 6143561",
                    duration: 4000,
                  });
                }}
                className="w-full sm:w-auto bg-white/10 border border-white/30 text-white hover:bg-white/20 px-6 py-3 rounded-full flex items-center justify-center gap-2 backdrop-blur-md"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </Button>
            </div>

            <div className="flex flex-wrap gap-3 pt-4 text-xs text-slate-200 justify-center md:justify-start">
              <span className="bg-white/10 px-3 py-1 rounded-full backdrop-blur-md">
                ⭐ 1,000+ Pilgrims
              </span>

              <span className="bg-white/10 px-3 py-1 rounded-full backdrop-blur-md">
                🕋 7+ Years Experience
              </span>

              <span className="bg-white/10 px-3 py-1 rounded-full backdrop-blur-md">
                📞 24/7 Support
              </span>
            </div>
          </div>

          <div className="w-full flex justify-center md:justify-end">
            <div className="w-full max-w-sm bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 sm:p-6 shadow-2xl space-y-4">
              <h2 className="text-white text-lg sm:text-xl font-semibold heading-font text-center">
                Quick Booking Inquiry
              </h2>

              {/* NAME */}
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-slate-300 outline-none text-sm sm:text-base"
              />

              <input
                type="text"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-slate-300 outline-none text-sm sm:text-base"
              />

              <select
                value={formData.package}
                onChange={(e) =>
                  setFormData({ ...formData, package: e.target.value })
                }
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white outline-none text-sm sm:text-base"
              >
                <option className="text-black">Umrah Package</option>
                <option className="text-black">Iraq Ziyarat</option>
                <option className="text-black">Iran Ziyarat</option>
                <option className="text-black">
                  Iran + Iraq Combined Ziyarat
                </option>
              </select>

              {/* SUBMIT */}
              <Button
                onClick={handleSubmit}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg"
              >
                Send
              </Button>

              <p className="text-xs text-slate-300 text-center">
                We will contact you on WhatsApp within 10 minutes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

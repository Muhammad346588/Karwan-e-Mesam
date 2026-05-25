import { useState } from "react";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

import {
  Sparkles,
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  User,
  ArrowUpRight,
  CheckCircle2,
  Loader2,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const [showSuccess, setShowSuccess] = useState(false);

  // 🔥 Premium Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSending(true);

    try {
      const whatsappNumber = "923016143561";

      const message = `
🌙 *New Contact Query — Karwan e Mesam*

👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Phone:* ${formData.phone}

💬 *Message:* 
${formData.message}
      `;

      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        message,
      )}`;

      // Small delay for premium UX
      setTimeout(() => {
        window.open(whatsappURL, "_blank");

        setShowSuccess(true);

        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });

        setIsSending(false);

        // Hide success popup after 4 sec
        setTimeout(() => {
          setShowSuccess(false);
        }, 4000);
      }, 1200);
    } catch (error) {
      console.log(error);

      alert("Something went wrong. Please try again.");

      setIsSending(false);
    }
  };

  const contactDetails = [
    {
      id: 1,
      icon: <Phone className="w-5 h-5 text-emerald-600" />,
      title: "Call Direct",
      value: "+92 301 6143561",
      subText: "Mon-Sat • 9:00 AM - 6:00 PM",
      link: "tel:+923016143561",
    },

    {
      id: 2,
      icon: <Mail className="w-5 h-5 text-emerald-600" />,
      title: "Official Email",
      value: "karwanemesam6@gmail.com",
      subText: "Drop us a line anytime",
    },

    {
      id: 3,
      icon: <MapPin className="w-5 h-5 text-emerald-600" />,
      title: "Main Office",
      value: "78-M Zainab Tower Lahore, Pakistan",
      subText: "Visit for premium tour bookings",
      link: "#map",
    },
  ];

  return (
    <>
      <Navbar />

      {/* ✅ Success Popup */}
      {showSuccess && (
        <div className="fixed top-6 right-6 z-[9999] animate-in slide-in-from-right duration-500">
          <div className="bg-white border border-emerald-200 shadow-2xl rounded-2xl p-5 flex items-start gap-4 w-[320px]">
            <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-6 h-6 text-emerald-600" />
            </div>

            <div>
              <h4 className="text-sm font-black text-slate-900">
                Message Ready Successfully
              </h4>

              <p className="text-xs text-slate-500 font-medium leading-relaxed mt-1">
                WhatsApp has been opened successfully. Please press send inside
                WhatsApp to deliver your message.
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="bg-slate-50 py-24 md:py-32 relative overflow-hidden min-h-screen">
        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/20 rounded-full blur-3xl pointer-events-none" />

        <div className="absolute bottom-20 left-0 w-96 h-96 bg-amber-100/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 md:mb-24">
            <div className="inline-flex items-center gap-1.5 bg-white border border-slate-200/60 px-3 py-1 rounded-full shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />

              <span className="text-[10px] font-black uppercase tracking-widest text-slate-600">
                Get In Touch
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Connect With Our <br />
              <span className="bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-600 bg-clip-text text-transparent">
                Spiritual Journey Experts
              </span>
            </h1>

            <p className="text-slate-500 text-sm md:text-base font-medium max-w-xl mx-auto">
              Have questions regarding Umrah packages, Ziyarat dates, or
              customized luxury tours? Reach out to us instantly.
            </p>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-black text-slate-900">
                  Contact Information
                </h2>

                <p className="text-slate-500 text-xs font-semibold">
                  Reach out via our official lines or visit the corporate desk
                  directly.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 pt-4">
                {contactDetails.map((info) => (
                  <a
                    key={info.id}
                    href={info.link}
                    className="bg-white border border-slate-200/60 p-5 rounded-[24px] shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex items-center gap-5 group"
                  >
                    <div className="w-12 h-12 rounded-[16px] bg-emerald-50 border border-emerald-100 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shrink-0">
                      {info.icon}
                    </div>

                    <div className="space-y-0.5 flex-1 min-w-0">
                      <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                        {info.title}
                      </span>

                      <h4 className="text-sm font-black text-slate-900 group-hover:text-emerald-600 transition-colors">
                        {info.value}
                      </h4>

                      <p className="text-xs font-bold text-slate-400">
                        {info.subText}
                      </p>
                    </div>

                    <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-500 transition-colors" />
                  </a>
                ))}
              </div>

              {/* Timing Box */}
              <div className="bg-slate-900 text-white rounded-[24px] p-6 shadow-xl relative overflow-hidden mt-8">
                <div className="absolute right-0 bottom-0 translate-x-6 translate-y-6 w-32 h-32 bg-emerald-500/10 rounded-full blur-xl pointer-events-none" />

                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />

                  <div className="space-y-1">
                    <h4 className="text-sm font-black tracking-wide uppercase text-amber-400">
                      Operational Hours
                    </h4>

                    <p className="text-xs text-slate-300 font-medium leading-relaxed">
                      Our support team remains active 24/7 during seasonal
                      pilgrimage operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-slate-200/60 rounded-[32px] p-6 sm:p-10 shadow-xl">
                <div className="mb-8">
                  <h3 className="text-xl font-black text-slate-900">
                    Send A Direct Message
                  </h3>

                  <p className="text-xs font-bold text-slate-400 mt-1">
                    Fill the form and connect directly on WhatsApp instantly.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-wider text-slate-500">
                        Full Name
                      </label>

                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />

                        <input
                          type="text"
                          required
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              name: e.target.value,
                            })
                          }
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-11 pr-4 text-xs font-bold outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/5"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-wider text-slate-500">
                        Phone Number
                      </label>

                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />

                        <input
                          type="tel"
                          required
                          placeholder="+92 300 1234567"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              phone: e.target.value,
                            })
                          }
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-11 pr-4 text-xs font-bold outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/5"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-wider text-slate-500">
                      Email Address
                    </label>

                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />

                      <input
                        type="email"
                        required
                        placeholder="example@domain.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            email: e.target.value,
                          })
                        }
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-11 pr-4 text-xs font-bold outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/5"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-wider text-slate-500">
                      Your Message
                    </label>

                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-slate-400" />

                      <textarea
                        rows="5"
                        required
                        placeholder="Type your custom requirements or package questions here..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            message: e.target.value,
                          })
                        }
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-11 pr-4 text-xs font-bold resize-none outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/5"
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full bg-slate-900 hover:bg-emerald-600 disabled:opacity-70 text-white flex items-center justify-center gap-2 py-4 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300"
                  >
                    {isSending ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Opening WhatsApp...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Via WhatsApp
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* MAP */}
          {/* MAP */}
          <div id="map" className="mt-20 md:mt-28">
            <div className="bg-white border border-slate-200/60 p-3 rounded-[32px] shadow-sm overflow-hidden h-[350px] md:h-[450px]">
              <div className="w-full h-full rounded-[22px] overflow-hidden relative group">
                <iframe
                  title="Karwan e Mesam Office Location"
                  src="https://www.google.com/maps?q=Model+Town+Link+Rd,+Phase+3+GECH+Society,+Lahore,+54600,+Pakistan&output=embed"
                  className="w-full h-full border-0 grayscale contrast-[1.05] opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;

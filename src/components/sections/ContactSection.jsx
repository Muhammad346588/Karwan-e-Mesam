import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    destination: "Iraq",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, phone, destination, message } = formState;

    const whatsappNumber = "923016143561";

    const text = `
📌 New Inquiry Received

👤 Name: ${name}
📱 Phone: ${phone}
🕌 Destination: ${destination}
📝 Message: ${message}
  `;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");

    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: "", phone: "", destination: "Iraq", message: "" });
    }, 4000);
  };

  return (
    <section className="relative w-full overflow-hidden py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 font-sans text-slate-800">
      {/* Premium Light Ambient Background Orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000000_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 border border-slate-200 bg-white px-4 py-1.5 rounded-full text-emerald-600 text-xs md:text-sm font-semibold tracking-wide uppercase shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
            Get In Touch With Experts
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl sm:text-5xl font-black tracking-tight text-slate-900 leading-tight"
          >
            Start Your Spiritual Journey <br />
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-600 bg-clip-text text-transparent">
              Connect With Karwan-e-Mesam
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-600 text-base md:text-lg max-w-2xl mx-auto font-medium"
          >
            Have questions about group departures, visa requirements, or luxury
            packages? Drop us a message or call our support line directly.
          </motion.p>
        </div>

        {/* MAIN CONTENT GRID */}
        <div className="mt-16 md:mt-24 grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* LEFT COLUMN: QUICK CONTACT CARDS */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Phone Card */}
              <motion.div
                whileHover={{
                  y: -4,
                  borderColor: "#10b981",
                  boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.05)",
                }}
                className="bg-white border border-slate-200 rounded-3xl p-6 transition-all duration-300 flex items-start gap-4 shadow-sm"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                    Call 24/7 Support
                  </span>
                  <h4 className="text-lg font-bold text-slate-900 mt-0.5">
                    +92 301 6143561
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Direct line for booking status, custom pricing, and quick
                    enrollment inquiries.
                  </p>
                </div>
              </motion.div>

              {/* WhatsApp Card (Highly Interactive CTA) */}
              <motion.a
                href="https://wa.me/923016143561"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  y: -4,
                  borderColor: "#10b981",
                  boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.05)",
                }}
                className="bg-gradient-to-br from-emerald-50/60 via-white to-white border border-slate-200 rounded-3xl p-6 transition-all duration-300 flex items-start gap-4 shadow-sm relative group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-emerald-500/20 font-black">
                  <MessageSquare className="w-5 h-5 fill-current" />
                </div>
                <div className="flex-1">
                  <span className="text-[10px] uppercase font-bold text-emerald-600 tracking-wider flex items-center gap-1.5">
                    Live Chat Available
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  </span>
                  <h4 className="text-lg font-bold text-slate-900 mt-0.5 flex items-center gap-1.5 group-hover:text-emerald-600 transition-colors">
                    Chat on WhatsApp
                    <ArrowUpRight className="w-4 h-4 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Instantly receive detailed PDFs of our latest Iraq Ziyarat
                    and Umrah itineraries.
                  </p>
                </div>
              </motion.a>

              {/* Location Card */}
              <motion.div
                whileHover={{
                  y: -4,
                  borderColor: "#f59e0b",
                  boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.05)",
                }}
                className="bg-white border border-slate-200 rounded-3xl p-6 transition-all duration-300 flex items-start gap-4 shadow-sm"
              >
                <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                    Main Hub Office
                  </span>
                  <h4 className="text-lg font-bold text-slate-900 mt-0.5">
                    78-M Zainab Tower Link Road Lahore, Punjab
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Pakistan Core Operations Station. Drop by for secure
                    physical document handovers and group briefings.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Timing / Reliability Badge footer info */}
            <div className="bg-slate-100/70 border border-slate-200/80 rounded-2xl p-4 flex items-center gap-3 text-xs text-slate-600 font-medium inner-shadow">
              <Clock className="w-4 h-4 text-amber-600 flex-shrink-0" />
              <span>
                Response Window:{" "}
                <strong className="text-slate-900">Under 15 minutes</strong>{" "}
                during active operation hours.
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN: HEAVY INTERACTIVE FORM CONTAINER */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 rounded-[2.5rem] p-6 md:p-10 shadow-xl shadow-slate-100/50 relative overflow-hidden">
              {/* Decorative accent top line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-emerald-500 via-teal-500 to-amber-500" />

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        Send Direct Inquiry
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">
                        Fill out this quick briefing sheet and an agent will
                        build your custom breakdown.
                      </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {/* Name Input */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formState.name}
                          onChange={(e) =>
                            setFormState({ ...formState, name: e.target.value })
                          }
                          placeholder="Zaireen Name"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all shadow-sm"
                        />
                      </div>

                      {/* Phone Input */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">
                          WhatsApp / Phone
                        </label>
                        <input
                          type="tel"
                          required
                          value={formState.phone}
                          onChange={(e) =>
                            setFormState({
                              ...formState,
                              phone: e.target.value,
                            })
                          }
                          placeholder="e.g., 03016143561"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all shadow-sm"
                        />
                      </div>
                    </div>

                    {/* Destination Choice Dropdown */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">
                        Select Spiritual Destination
                      </label>
                      <select
                        value={formState.destination}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            destination: e.target.value,
                          })
                        }
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all cursor-pointer shadow-sm font-semibold"
                      >
                        <option value="Iraq" className="bg-white">
                          Iraq Ziyarat — Karbala / Najaf / Samarra
                        </option>
                        <option value="Saudi Arabia" className="bg-white">
                          Saudi Arabia — Umrah / Hajj Luxury Tours
                        </option>
                        <option value="Iran" className="bg-white">
                          Iran Ziyarat — Mashhad / Qom / Tehran
                        </option>
                      </select>
                    </div>

                    {/* Custom Message input */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">
                        Special Request / Package Requirements
                      </label>
                      <textarea
                        rows={4}
                        value={formState.message}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            message: e.target.value,
                          })
                        }
                        placeholder="Tell us about the number of passengers, preferred luxury hotel rating, or dates of departure..."
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all resize-none shadow-sm leading-relaxed"
                      />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      whileHover={{ scale: 1.01, filter: "brightness(1.05)" }}
                      whileTap={{ scale: 0.99 }}
                      type="submit"
                      className="w-full bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-500 text-white font-extrabold text-sm py-4 rounded-xl shadow-md shadow-emerald-600/10 flex items-center justify-center gap-2 tracking-wide cursor-pointer uppercase"
                    >
                      <span>Forward Details to Admin</span>
                      <Send className="w-4 h-4 fill-current" />
                    </motion.button>
                  </motion.form>
                ) : (
                  /* HIGH-END CONGRATS STATE WHEN SUBMITTED */
                  <motion.div
                    key="success-card"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex flex-col items-center justify-center text-center py-16 px-4 space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-50 border-2 border-emerald-500 text-emerald-600 flex items-center justify-center shadow-[0_0_24px_rgba(16,185,129,0.15)] animate-bounce">
                      <CheckCircle2 className="w-8 h-8 overflow-auto" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                      Inquiry Lodged Safely!
                    </h3>
                    <p className="text-slate-600 text-sm max-w-sm leading-relaxed font-medium">
                      Thank you for choosing{" "}
                      <strong className="text-slate-900">Karwan-e-Mesam</strong>
                      . Your inquiry has been successfully received by our core
                      operations team. Our travel specialists are reviewing your
                      requirements and will contact you shortly to finalize your
                      itinerary.
                    </p>
                    <div className="w-32 h-1.5 bg-slate-100 rounded-full overflow-hidden relative">
                      <motion.div
                        initial={{ left: "-100%" }}
                        animate={{ left: "100%" }}
                        transition={{
                          duration: 3.5,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute w-1/2 h-full bg-gradient-to-r from-emerald-500 to-amber-500 rounded-full"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

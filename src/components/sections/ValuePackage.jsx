import { ShieldCheck, Heart, Award, HeartHandshake } from "lucide-react";

const ValuePackage = () => {
  // Real-world value indicators for Karwan-e-Mesam
  const coreValues = [
    {
      id: 1,
      icon: ShieldCheck,
      title: "100% Authorized & Secure",
      description:
        "Fully registered with official ministries, ensuring legitimate visa approvals, secure hotel bookings, and authentic legal processing.",
    },
    {
      id: 2,
      icon: Heart,
      title: "Spiritual Mentorship",
      description:
        "Accompanied by experienced scholars and native guides who provide proper step-by-step training for Umrah and Ziyarat rituals.",
    },
    {
      id: 3,
      icon: Award,
      title: "Zero Hidden Charges",
      description:
        "Complete transparent contract pricing policy. What we commit in our structural sheets is exactly what you get without a single rupee extra.",
    },
    {
      id: 4,
      icon: HeartHandshake,
      title: "24/7 Ground Assistance",
      description:
        "Dedicated operational staff present on-ground in Makkah, Madinah, Najaf, and Karbala to assist you in any emergency situations.",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 border-t border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Text */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200/60 px-3 py-1 rounded-full">
            <span className="text-[10px] font-black uppercase tracking-widest text-amber-700">
              The Karwan-e-Mesam Advantage
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Why Hundreds of Families <br />
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Trust Our Sacred Services
            </span>
          </h2>

          <p className="text-sm text-slate-500 font-medium max-w-xl mx-auto">
            Beyond premium accommodations and transport, we provide absolute
            commitment to your spiritual peace of mind throughout the holy land.
          </p>
        </div>

        {/* Value Core Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((item) => {
            const IconComponent = item.icon;

            return (
              <div
                key={item.id}
                className="bg-slate-50/60 border border-slate-100 p-6 rounded-3xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-slate-100 hover:border-emerald-500/20 group text-left"
              >
                {/* Minimal Luxury Floating Icon Block */}
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-200/40 flex items-center justify-center text-emerald-600 mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                  <IconComponent className="w-5 h-5" />
                </div>

                {/* Content Mapping */}
                <h3 className="text-base font-black text-slate-800 tracking-tight group-hover:text-emerald-700 transition-colors duration-200">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-500 font-medium leading-relaxed mt-2.5">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuePackage;

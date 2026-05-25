import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const PackageFAQ = () => {
  // Global state to track active open accordion index (null means all closed)
  const [openIndex, setOpenIndex] = useState(null);

  // Dynamic real-world authentic agency questions
  const faqData = [
    {
      id: 1,
      question:
        "What specific documents are required to process the Ziyarat or Umrah Visa?",
      answer:
        "For standard processing, we require your original passport (with minimum 6 months validity), a valid CNIC copy, and recent passport-sized photographs with a white background. For certain packages like Ashura Special, registration must be locked 30 days prior due to limited border approvals.",
    },
    {
      id: 2,
      question:
        "Are quad-sharing or family rooms available in your Economy Packages?",
      answer:
        "Yes, absolutely! Our economy structures offer flexible room configurations including Double (2 persons), Triple (3 persons), and Quad (4 persons) sharing options. Prices vary accordingly. If you prefer separate family privacy, you can easily upgrade to customized configurations.",
    },
    {
      id: 3,
      question: "What does the 'Ground Package' include vs the 'Full Package'?",
      answer:
        "The 'Full Package' covers everything from complete return air tickets, visas, hotel stays, 3-time catering meals, to local transport. The 'Ground Package' ($550 for Ashura) is strictly for travelers who wish to buy their own airline tickets independently, but want Karwan-e-Mesam to manage their complete hotel stays, meals, and secure transport on-ground.",
    },
    {
      id: 4,
      question:
        "Do you provide an experienced religious scholar or guide along with the groups?",
      answer:
        "Yes. Every single multi-city or special Ziyarat tour (like Iraq & Iran Mix) is legally and spiritually accompanied by an experienced local guide and a recognized religious scholar. They ensure all historical walkthroughs and spiritual rituals (Aamaal) are performed completely and authentically.",
    },
    {
      id: 5,
      question:
        "What is your refund policy if a passenger cancels their booking due to emergencies?",
      answer:
        "Visa processing fees and confirmed airline reservation blocks are non-refundable as per airline policies. However, hotel accommodation stakes and transport bookings can be partially refunded or rescheduled if requested well before the specific registration deadline (e.g., before May 28 for Ashura tours).",
    },
  ];

  // Logic to toggle open/close smoothly
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-700">
              Got Questions?
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Frequently Asked Queries
          </h2>
          <p className="text-sm text-slate-500 font-medium max-w-md mx-auto">
            Clear, transparent answers to help you organize your upcoming sacred
            journey without complications.
          </p>
        </div>

        {/* Custom Hand-Crafted Accordions List */}
        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.id}
                className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden transition-all duration-300 hover:border-emerald-500/20"
              >
                {/* Accordion Trigger Header Button */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-5 text-left transition-colors duration-300 bg-white"
                >
                  <span
                    className={`text-sm sm:text-base font-black tracking-tight pr-4 transition-colors duration-200 ${
                      isOpen ? "text-emerald-700" : "text-slate-800"
                    }`}
                  >
                    {faq.question}
                  </span>

                  {/* Rotating Chevron Icon Indicator */}
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "bg-emerald-600 text-white rotate-180"
                        : "bg-slate-50 text-slate-400 group-hover:bg-slate-100"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Smooth Max-Height Transition Content Area */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen
                      ? "max-h-[500px] opacity-100 border-t border-slate-50"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-5 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed bg-slate-50/50">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PackageFAQ;

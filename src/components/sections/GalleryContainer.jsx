import { useState, useEffect } from "react";
import {
  Sparkles,
  Layers,
  Image as ImageIcon,
  Video,
  MapPin,
  Calendar,
  Play,
  X,
} from "lucide-react";

// Local Assets Imports
import Kaba from "../../assets/images/Web/Kaba.jpg";
import Ashoora from "../../assets/images/Web/Ashoora.jpg";
import ImamHussainShrine from "../../assets/images/Web/Imam Hussain Shrine(A.S).jpg";
import CEO from "../../assets/videos/CEO Video.mp4";

const GalleryContainer = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedMedia, setSelectedMedia] = useState(null);

  // Background scroll freeze lock logic when modal is active
  useEffect(() => {
    if (selectedMedia) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedMedia]);

  const galleryItems = [
    {
      id: 1,
      title: "The Holy Kaaba - Sanctuary of Peace",
      category: "makkah-madinah",
      type: "image",
      location: "Masjid al-Haram, Makkah Mukarramah",
      date: "Umrah Season",
      mediaUrl: Kaba,
    },
    {
      id: 2,
      title: "The Golden Dome of Imam Hussain (A.S)",
      category: "iraq-iran",
      type: "image",
      location: "Holy Shrine of Karbala, Iraq",
      date: "Arbaeen Live",
      mediaUrl: ImamHussainShrine,
    },
    {
      id: 3,
      title: "Spiritual Reflection & Devotion Landscape",
      category: "moments",
      type: "image",
      location: "Holy Karbala Sanctuary, Iraq",
      date: "Ashoora Period",
      mediaUrl: Ashoora,
    },
    {
      id: 4,
      title: "Executive Message & Spiritual Guidance",
      category: "moments",
      type: "video",
      location: "Karwan-e-Mesam Leadership",
      date: "Corporate Message",
      mediaUrl: CEO,
      thumbnailUrl: ImamHussainShrine,
    },
  ];

  const filterTabs = [
    { id: "all", label: "All Media", icon: <Layers className="w-3.5 h-3.5" /> },
    {
      id: "makkah-madinah",
      label: "Makkah & Madinah",
      icon: <MapPin className="w-3.5 h-3.5" />,
    },
    {
      id: "iraq-iran",
      label: "Iraq & Iran",
      icon: <MapPin className="w-3.5 h-3.5" />,
    },
    {
      id: "moments",
      label: "Zaireen Experience",
      icon: <Video className="w-3.5 h-3.5" />,
    },
  ];

  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <div className="bg-slate-50 py-24 md:py-32 relative overflow-hidden min-h-screen">
      {/* Decorative Background Ambient Glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-100/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-amber-100/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Master Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 bg-white border border-slate-200/60 px-3 py-1 rounded-full shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-600">
              Verified Archives
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Documenting Sacred <br />
            <span className="bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-600 bg-clip-text text-transparent">
              Glimpses Of Devotion
            </span>
          </h1>
          <p className="text-slate-500 text-sm md:text-base font-medium max-w-xl mx-auto">
            Explore authentic media logs, structural landmarks, and real-time
            operational clips from our official premium tours.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-16 max-w-4xl mx-auto">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-black tracking-wide transition-all duration-300 border ${
                activeFilter === tab.id
                  ? "bg-slate-900 border-slate-900 text-white shadow-xl shadow-slate-900/10 scale-105"
                  : "bg-white border-slate-200/60 text-slate-600 hover:text-slate-900 hover:border-slate-300 hover:bg-slate-50"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Masonry Media Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedMedia(item)}
              className="break-inside-avoid bg-white border border-slate-200/60 p-3 rounded-[24px] shadow-sm hover:shadow-2xl hover:border-slate-300 transition-all duration-500 cursor-pointer group relative overflow-hidden text-left"
            >
              <div className="w-full rounded-[16px] overflow-hidden bg-slate-100 relative aspect-[4/3] sm:aspect-auto">
                <img
                  src={
                    item.type === "video" ? item.thumbnailUrl : item.mediaUrl
                  }
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {item.type === "video" ? (
                  <div className="absolute inset-0 bg-slate-950/30 flex items-center justify-center transition-colors duration-300 group-hover:bg-slate-950/40">
                    <div className="w-14 h-14 rounded-full bg-white text-emerald-600 flex items-center justify-center shadow-xl transform scale-100 group-hover:scale-110 transition-transform duration-300 border border-slate-100/50">
                      <Play className="w-5 h-5 fill-emerald-600 ml-0.5" />
                    </div>
                  </div>
                ) : (
                  <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" />
                )}

                <span className="absolute top-3 left-3 bg-white/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[9px] font-black uppercase text-slate-800 tracking-wider border border-white/20 shadow-sm">
                  {item.type}
                </span>
              </div>

              <div className="mt-4 px-2 pb-1 space-y-2">
                <h3 className="text-sm font-black text-slate-900 tracking-tight group-hover:text-emerald-600 transition-colors duration-300 line-clamp-1">
                  {item.title}
                </h3>
                <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 border-t border-slate-50 pt-2">
                  <div className="flex items-center gap-1 text-slate-500">
                    <MapPin className="w-3 h-3 text-emerald-500" />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 🎬 100% IMMERSIVE CINEMATIC FULLSCREEN LIGHTBOX */}
        {selectedMedia && (
          <div
            className="fixed inset-0 w-screen h-screen bg-black z-[99999] flex items-center justify-center"
            onClick={() => setSelectedMedia(null)}
          >
            {/* Premium Absolute Floating Close Button */}
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute top-6 right-6 z-[100000] bg-white/10 hover:bg-white/20 text-white backdrop-blur-md w-12 h-12 rounded-full flex items-center justify-center shadow-2xl transition-all duration-200 border border-white/10 group"
              aria-label="Close fullscreen"
            >
              <X className="w-5 h-5 stroke-[2.5] group-hover:scale-110 transition-transform" />
            </button>

            {/* True Full-Bleed Media Stage */}
            <div
              className="w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedMedia.type === "video" ? (
                <video
                  src={selectedMedia.mediaUrl}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              ) : (
                <img
                  src={selectedMedia.mediaUrl}
                  alt={selectedMedia.title}
                  className="w-full h-full object-contain"
                />
              )}
            </div>

            {/* Minimalist Floating Captions (Overlayed elegant bottom bar) */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 pt-20 text-left pointer-events-none">
              <div className="max-w-4xl mx-auto space-y-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 bg-emerald-950/50 backdrop-blur-md px-2.5 py-1 rounded-md border border-emerald-500/20 inline-block">
                  {selectedMedia.category.replace("-", " ")}
                </span>
                <h2 className="text-lg md:text-xl font-black text-white tracking-tight dynamic-text shadow-sm">
                  {selectedMedia.title}
                </h2>
                <p className="text-xs font-medium text-slate-300">
                  {selectedMedia.location} • {selectedMedia.date}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryContainer;

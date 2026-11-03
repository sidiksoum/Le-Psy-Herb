import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Download, Share2, Clock, CheckCircle2, X, MessageCircle, FileText, CheckSquare, Sparkles } from 'lucide-react';
import { PRACTICAL_GUIDES, PracticalGuide } from '../data/psyHerbData';

export const AstucesGuidesSection: React.FC = () => {
  const [selectedTheme, setSelectedTheme] = useState<string>('all');
  const [activeGuide, setActiveGuide] = useState<PracticalGuide | null>(null);
  const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);

  const themes = [
    { id: 'all', label: 'Toutes les fiches' },
    { id: 'parents', label: 'Parents et enfants' },
    { id: 'couple', label: 'Couple et famille' },
    { id: 'stress', label: 'Stress et émotions' },
    { id: 'handicap', label: 'Polyhandicap' },
    { id: 'maladies', label: 'Maladies chroniques' },
    { id: 'entreprise', label: 'Entreprise et conflits' },
  ];

  const filteredGuides = selectedTheme === 'all'
    ? PRACTICAL_GUIDES
    : PRACTICAL_GUIDES.filter((g) => g.theme === selectedTheme);

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  const shareViaWhatsApp = (guide: PracticalGuide) => {
    const text = encodeURIComponent(`Découvrez cette ressource du cabinet Le Psy Herb : "${guide.title}" - ${guide.summary}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <section id="astuces" className="py-12 sm:py-16 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white text-[#059669] mb-3 shadow-sm border border-emerald-200">
            <BookOpen className="w-3.5 h-3.5 text-[#059669]" />
            <span>Espace éducatif et ressources pratiques</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-[#0D1B3E] tracking-tight">
            Astuces et guides pratiques
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#1E293B] font-medium leading-relaxed">
            Des fiches concrètes rédigées par le psychologue clinicien : clés éducatives, désamorçage de conflits et soutien aux aidants.
          </p>
        </div>

        {/* Filters */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {themes.map((t) => {
            const isSelected = selectedTheme === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setSelectedTheme(t.id)}
                className={`px-3.5 py-2 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${isSelected
                    ? 'bg-[#0D1B3E] text-white shadow-sm scale-105'
                    : 'bg-white/90 hover:bg-white text-[#1E293B] border border-white/80 shadow-sm'
                  }`}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        {/* Guides Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          <AnimatePresence>
            {filteredGuides.map((guide) => (
              <motion.div
                key={guide.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-white/95 backdrop-blur-md rounded-3xl p-5 border border-white/80 shadow-soft-sm hover:shadow-soft-md transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Thumbnail */}
                  <div className="relative h-44 rounded-2xl overflow-hidden mb-3.5 bg-emerald-100">
                    <img
                      src={guide.image}
                      alt={guide.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-2.5 left-2.5">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/95 text-[#059669] shadow-sm">
                        {guide.themeLabel}
                      </span>
                    </div>

                    <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-xl bg-[#0D1B3E]/90 text-white text-[10px] font-bold flex items-center gap-1 backdrop-blur-sm">
                      <Clock className="w-3 h-3 text-[#8EE061]" />
                      <span>{guide.readTime}</span>
                    </div>
                  </div>

                  {/* Type badge */}
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#059669] bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                      {guide.type === 'Check-list' ? <CheckSquare className="w-3 h-3" /> : <FileText className="w-3 h-3" />}
                      <span>{guide.type}</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold font-display text-[#0D1B3E] group-hover:text-[#059669] transition-colors mb-2 leading-snug">
                    {guide.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs text-[#334155] leading-relaxed mb-3.5 line-clamp-2">
                    {guide.summary}
                  </p>

                  {/* 2 Key Takeaways */}
                  <div className="space-y-1.5 mb-4 p-2.5 rounded-2xl bg-emerald-50/60 border border-emerald-100 text-xs">
                    {guide.points.slice(0, 2).map((pt, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-[#334155]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0 mt-0.5" />
                        <span className="line-clamp-1 text-[11px]">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-2.5 border-t border-emerald-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setActiveGuide(guide)}
                    className="flex-1 py-2 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-[#059669] text-xs font-bold transition-colors cursor-pointer text-center"
                  >
                    Lire la fiche
                  </button>

                  <button
                    onClick={() => shareViaWhatsApp(guide)}
                    className="p-2 rounded-xl border border-emerald-200 text-emerald-800 hover:bg-emerald-50 transition-colors"
                    title="Partager sur WhatsApp"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Guide Detail Modal */}
      <AnimatePresence>
        {activeGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0D1B3E]/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-7 shadow-soft-lg border border-emerald-200 relative max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setActiveGuide(null)}
                className="absolute top-4 right-4 p-2 rounded-xl text-slate-500 hover:bg-emerald-50 text-lg font-bold"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-[#059669]">
                  {activeGuide.themeLabel}
                </span>
                <span className="text-xs text-[#334155] font-medium">
                  • {activeGuide.readTime}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold font-display text-[#0D1B3E] mb-3">
                {activeGuide.title}
              </h3>

              <div className="relative h-44 rounded-2xl overflow-hidden mb-4">
                <img
                  src={activeGuide.image}
                  alt={activeGuide.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-[#334155]">
                <p className="text-sm text-[#0D1B3E] font-medium leading-relaxed">
                  {activeGuide.summary}
                </p>

                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-2">
                  <h4 className="font-bold text-[#0D1B3E] flex items-center gap-1.5 text-xs">
                    <Sparkles className="w-4 h-4 text-[#059669]" />
                    Conseils et points clés du psychologue :
                  </h4>
                  {activeGuide.points.map((p, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-[#059669] text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <p className="leading-relaxed text-xs">{p}</p>
                    </div>
                  ))}
                </div>

                {downloadSuccess && (
                  <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-800 text-xs font-bold text-center">
                    ✓ La fiche PDF est prête pour impression ou consultation !
                  </div>
                )}
              </div>

              <div className="mt-5 pt-3 border-t border-emerald-100 flex flex-col sm:flex-row gap-2.5 justify-end">
                <button
                  onClick={() => shareViaWhatsApp(activeGuide)}
                  className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-emerald-300 text-emerald-900 font-bold text-xs hover:bg-emerald-50 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Partager sur WhatsApp</span>
                </button>

                <button
                  onClick={handleDownload}
                  className="flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#059669] hover:bg-[#047857] text-white font-bold text-xs shadow-sm transition-colors cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Télécharger la fiche (PDF)</span>
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

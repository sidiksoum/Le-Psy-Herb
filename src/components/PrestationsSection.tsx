import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Building2, MessageCircleHeart, Wind, ClipboardCheck,
  TrendingUp, Accessibility, HeartPulse, Users, HeartHandshake,
  ArrowRight, MessageCircle, Calendar, Check, X, Clock, MapPin, Sparkles
} from 'lucide-react';
import { PRESTATIONS_DATA, Prestation } from '../data/psyHerbData';

interface PrestationsSectionProps {
  onSelectPrestationForBooking: (prestationTitle: string) => void;
}

export const PrestationsSection: React.FC<PrestationsSectionProps> = ({
  onSelectPrestationForBooking,
}) => {
  const [selectedPrestation, setSelectedPrestation] = useState<Prestation | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Building2': return <Building2 className="w-5 h-5" />;
      case 'MessageCircleHeart': return <MessageCircleHeart className="w-5 h-5" />;
      case 'Wind': return <Wind className="w-5 h-5" />;
      case 'ClipboardCheck': return <ClipboardCheck className="w-5 h-5" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5" />;
      case 'Accessibility': return <Accessibility className="w-5 h-5" />;
      case 'HeartPulse': return <HeartPulse className="w-5 h-5" />;
      case 'Users': return <Users className="w-5 h-5" />;
      case 'HeartHandshake': return <HeartHandshake className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  const getWhatsAppPrestationLink = (title: string) => {
    const text = encodeURIComponent(`Bonjour Dr. KONE, je souhaite me renseigner ou prendre rendez-vous pour la prestation : "${title}".`);
    return `https://wa.me/2250777285102?text=${text}`;
  };

  return (
    <section id="prestations" className="py-12 sm:py-16 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white text-[#059669] mb-3 shadow-sm border border-emerald-200">
            <span className="w-2 h-2 rounded-full bg-[#8EE061]"></span>
            <span>Nos 9 prestations spécialisées</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-[#0D1B3E] tracking-tight">
            Neuf fiches, un parcours clair
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#1E293B] font-medium leading-relaxed">
            De l'écoute ponctuelle à la psychothérapie en profondeur, chaque prise en charge répond à un protocole clinique rigoureux et individualisé.
          </p>
        </div>

        {/* 9 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {PRESTATIONS_DATA.map((prestation, index) => (
            <motion.div
              key={prestation.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              className="bg-white/95 backdrop-blur-md rounded-3xl p-5 border border-white/80 shadow-soft-sm hover:shadow-soft-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>

                {/* Image Thumbnail & Badge */}
                <div className="relative h-44 rounded-2xl overflow-hidden mb-4 bg-emerald-100">
                  <img
                    src={prestation.image}
                    alt={prestation.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B3E]/70 via-transparent to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute top-2.5 left-2.5">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/95 text-[#059669] shadow-sm">
                      {prestation.tag}
                    </span>
                  </div>

                  {/* Number pill */}
                  <div className="absolute bottom-2.5 right-2.5 w-7 h-7 rounded-lg bg-[#059669] text-white flex items-center justify-center font-bold text-xs shadow-sm">
                    {prestation.number}
                  </div>
                </div>

                {/* Card Title & Icon */}
                <div className="flex items-start gap-2.5 mb-2.5">
                  <div className="p-2 rounded-xl bg-emerald-100 text-[#059669] shrink-0 group-hover:bg-[#059669] group-hover:text-white transition-colors">
                    {getIcon(prestation.iconName)}
                  </div>
                  <h3 className="text-base font-bold font-display text-[#0D1B3E] group-hover:text-[#059669] transition-colors leading-snug">
                    {prestation.title}
                  </h3>
                </div>

                {/* Short Description */}
                <p className="text-xs text-[#334155] leading-relaxed mb-3">
                  {prestation.shortDescription}
                </p>

                {/* Public Cible Pill */}
                <div className="p-2.5 rounded-2xl bg-emerald-50/60 border border-emerald-100 text-xs mb-4">
                  <span className="font-bold text-[#0D1B3E] block mb-0.5 text-[10px]">
                    Public concerné :
                  </span>
                  <span className="text-[#334155] leading-tight line-clamp-2 text-[11px]">
                    {prestation.publicCible}
                  </span>
                </div>

              </div>

              {/* Card Footer Actions */}
              <div className="pt-3 border-t border-emerald-100 space-y-2">
                <button
                  onClick={() => setSelectedPrestation(prestation)}
                  className="w-full flex items-center justify-center gap-1.5 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-[#059669] text-xs font-bold transition-colors cursor-pointer"
                >
                  <span>Détails et déroulement</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onSelectPrestationForBooking(prestation.title)}
                    className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl bg-[#059669] hover:bg-[#047857] text-white text-xs font-bold shadow-sm transition-colors cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5 text-emerald-200" />
                    <span>Réserver</span>
                  </button>

                  <a
                    href={getWhatsAppPrestationLink(prestation.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl bg-white hover:bg-emerald-50 text-emerald-800 border border-emerald-300 text-xs font-bold transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#059669]" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Detail Modal for Selected Prestation */}
      <AnimatePresence>
        {selectedPrestation && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0D1B3E]/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-7 shadow-soft-lg border border-emerald-200 relative max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedPrestation(null)}
                className="absolute top-4 right-4 p-2 rounded-xl text-slate-500 hover:bg-emerald-50 text-lg font-bold"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-[#059669]">
                  Prestation {selectedPrestation.number} • {selectedPrestation.tag}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-display text-[#0D1B3E] mb-3">
                {selectedPrestation.title}
              </h3>

              <div className="relative h-48 rounded-2xl overflow-hidden mb-4">
                <img
                  src={selectedPrestation.image}
                  alt={selectedPrestation.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-[#334155]">
                <div>
                  <h4 className="font-bold text-[#0D1B3E] mb-1">Présentation complète :</h4>
                  <p className="leading-relaxed">{selectedPrestation.fullDescription}</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200">
                  <h4 className="font-bold text-[#059669] mb-1 text-xs">
                    Déroulement de la séance :
                  </h4>
                  <p className="leading-relaxed">{selectedPrestation.deroulement}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 rounded-2xl bg-[#FAFDF9] border border-emerald-100 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#059669] shrink-0" />
                    <div>
                      <div className="text-[10px] font-bold text-slate-500">Durée indicative</div>
                      <div className="text-xs font-bold text-[#0D1B3E]">{selectedPrestation.duree}</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-2xl bg-[#FAFDF9] border border-emerald-100 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#059669] shrink-0" />
                    <div>
                      <div className="text-[10px] font-bold text-slate-500">Lieux disponibles</div>
                      <div className="text-xs font-bold text-[#0D1B3E]">{selectedPrestation.lieux.join(', ')}</div>
                    </div>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-emerald-50 text-[11px] text-emerald-900 flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#059669] shrink-0" />
                  <span>Cadre confidentiel, écoute bienveillante et secret médical garanti par Dr. KONE Sionfolo Mohamed.</span>
                </div>
              </div>

              {/* Modal CTAs */}
              <div className="mt-5 pt-3 border-t border-emerald-100 flex flex-col sm:flex-row gap-2.5 justify-end">
                <a
                  href={getWhatsAppPrestationLink(selectedPrestation.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white text-emerald-900 font-bold text-xs border border-emerald-300 hover:bg-emerald-50 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#059669]" />
                  <span>Poser une question sur WhatsApp</span>
                </a>

                <button
                  onClick={() => {
                    const title = selectedPrestation.title;
                    setSelectedPrestation(null);
                    onSelectPrestationForBooking(title);
                  }}
                  className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#059669] hover:bg-[#047857] text-white font-bold text-xs shadow-sm transition-colors cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-emerald-200" />
                  <span>Prendre rendez-vous pour ce soin</span>
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

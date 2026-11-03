import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Building2, MessageCircleHeart, Wind, ClipboardCheck,
  TrendingUp, Accessibility, HeartPulse, Users, HeartHandshake,
  Search, Calendar, MessageCircle, ChevronRight, Clock, MapPin, Check, Sparkles, X, ArrowRight
} from 'lucide-react';
import { PRESTATIONS_DATA, Prestation } from '../data/psyHerbData';
import { DecorativeMotifs } from '../components/DecorativeMotifs';

interface PrestationsPageProps {
  onNavigateTo: (page: string) => void;
  onSelectPrestationForBooking: (prestationTitle: string) => void;
}

export const PrestationsPage: React.FC<PrestationsPageProps> = ({
  onNavigateTo,
  onSelectPrestationForBooking,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'enfant' | 'adulte' | 'entreprise' | 'special'>('all');
  const [activeModalPrestation, setActiveModalPrestation] = useState<Prestation | null>(null);

  const filterTabs = [
    { id: 'all', label: 'Toutes les 9 prestations' },
    { id: 'enfant', label: 'Enfants, couples et famille' },
    { id: 'adulte', label: 'Adultes et psychothérapie' },
    { id: 'entreprise', label: 'Entreprises et cadres' },
    { id: 'special', label: 'Polyhandicap et maladies' },
  ];

  const getFilteredPrestations = () => {
    return PRESTATIONS_DATA.filter((p) => {
      const matchSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.publicCible.toLowerCase().includes(searchQuery.toLowerCase());

      if (!matchSearch) return false;

      if (selectedFilter === 'enfant') {
        return p.id.includes('couple') || p.id.includes('bilan') || p.publicCible.toLowerCase().includes('enfant');
      }
      if (selectedFilter === 'adulte') {
        return p.id.includes('psychotherapie') || p.id.includes('ecoute') || p.id.includes('suivi');
      }
      if (selectedFilter === 'entreprise') {
        return p.id.includes('entreprise') || p.lieux.includes('Entreprise');
      }
      if (selectedFilter === 'special') {
        return p.id.includes('handicap') || p.id.includes('palliatifs');
      }
      return true;
    });
  };

  const filteredList = getFilteredPrestations();

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

  return (
    <div className="bg-psy-gradient min-h-screen">

      {/* Header Banner - Solid background #0B1528, 100% visible */}
      <section
        className="relative py-12 sm:py-16 text-white overflow-hidden"
        style={{ backgroundColor: '#0B1528' }}
      >
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1920&q=80"
            alt="Nos Prestations"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1528] via-[#0B1528]/90 to-[#13284C]/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300 mb-3">
            <button onClick={() => onNavigateTo('home')} className="hover:underline">Accueil</button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">9 prestations</span>
          </div>

          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#48C81B]/20 border border-[#48C81B] text-[#48C81B]">
              <span>Prise en charge clinique structurée</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white">
              Nos 9 prestations : <br />
              <span className="text-[#48C81B]">Un parcours thérapeutique clair</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              Consultez les détails, déroulements et publics concernés pour chaque soin. Réservez directement en ligne ou échangez avec le secrétariat sur WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar Sticky Bar */}
      <div className="border-b border-emerald-200 bg-white/95 backdrop-blur-md sticky top-18 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-[#059669] absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Rechercher une prestation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-xl border border-emerald-200 bg-emerald-50/40 text-xs sm:text-sm font-semibold text-[#13284C] focus:outline-none focus:border-[#059669]"
              />
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto no-scrollbar">
              {filterTabs.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setSelectedFilter(t.id as any)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${selectedFilter === t.id
                    ? 'bg-[#059669] text-white shadow-sm'
                    : 'bg-emerald-50 text-[#334155] hover:bg-emerald-100'
                    }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Prestations Cards Grid */}
      <div className="relative overflow-hidden">
        <DecorativeMotifs />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredList.map((prestation, index) => (
            <motion.div
              key={prestation.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              className="bg-white rounded-3xl p-5 border border-emerald-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Photo & Badge */}
                <div className="relative h-44 rounded-2xl overflow-hidden mb-4 bg-emerald-100">
                  <img
                    src={prestation.image}
                    alt={prestation.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#13284C]/80 via-transparent to-transparent" />

                  <div className="absolute top-2.5 left-2.5">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white text-[#059669] shadow-sm">
                      {prestation.tag}
                    </span>
                  </div>

                  <div className="absolute bottom-2.5 right-2.5 w-7 h-7 rounded-lg bg-[#059669] text-white flex items-center justify-center font-black text-xs shadow-sm">
                    {prestation.number}
                  </div>
                </div>

                {/* Title */}
                <div className="flex items-start gap-2.5 mb-2">
                  <div className="p-2 rounded-xl bg-emerald-50 text-[#059669] shrink-0 group-hover:bg-[#059669] group-hover:text-white transition-colors">
                    {getIcon(prestation.iconName)}
                  </div>
                  <h3 className="text-base font-bold font-display text-[#13284C] leading-snug group-hover:text-[#059669] transition-colors">
                    {prestation.title}
                  </h3>
                </div>

                <p className="text-xs text-[#334155] leading-relaxed mb-3">
                  {prestation.shortDescription}
                </p>

                {/* Public Cible Pill */}
                <div className="p-2.5 rounded-xl bg-[#FAFDF9] border border-emerald-100 text-xs mb-4">
                  <span className="font-bold text-[#13284C] block mb-0.5 text-[10px]">
                    Public concerné :
                  </span>
                  <span className="text-[#334155] leading-tight line-clamp-2 text-[11px]">
                    {prestation.publicCible}
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-3 border-t border-emerald-100 space-y-2">
                <button
                  onClick={() => setActiveModalPrestation(prestation)}
                  className="w-full flex items-center justify-center gap-1.5 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-[#059669] text-xs font-bold transition-colors cursor-pointer"
                >
                  <span>Consulter la fiche complète</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      onSelectPrestationForBooking(prestation.title);
                      onNavigateTo('rendez-vous');
                    }}
                    className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl bg-[#059669] hover:bg-[#047857] text-white text-xs font-bold shadow-sm transition-all cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5 text-emerald-200" />
                    <span>Prendre RDV</span>
                  </button>

                  <a
                    href={`https://wa.me/2250777285102?text=${encodeURIComponent(`Bonjour Dr. KONE, je souhaite me renseigner sur la prestation : ${prestation.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl bg-white hover:bg-emerald-50 text-emerald-900 border border-emerald-300 text-xs font-bold transition-colors"
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
      </div>

      {/* Modal Detail */}
      <AnimatePresence>
        {activeModalPrestation && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A162B]/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-7 shadow-soft-lg border border-emerald-200 relative max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setActiveModalPrestation(null)}
                className="absolute top-4 right-4 p-2 rounded-xl text-[#334155] hover:bg-emerald-50 text-lg font-bold"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-[#059669]">
                Fiche N° {activeModalPrestation.number} • {activeModalPrestation.tag}
              </span>

              <h3 className="text-xl sm:text-2xl font-bold font-display text-[#13284C] mt-2 mb-3">
                {activeModalPrestation.title}
              </h3>

              <div className="relative h-48 rounded-2xl overflow-hidden mb-4">
                <img
                  src={activeModalPrestation.image}
                  alt={activeModalPrestation.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-[#334155]">
                <div>
                  <h4 className="font-bold text-[#13284C] mb-1">Description clinique approfondie :</h4>
                  <p className="leading-relaxed">{activeModalPrestation.fullDescription}</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200">
                  <h4 className="font-bold text-[#059669] mb-1 text-xs">
                    Déroulement des séances :
                  </h4>
                  <p className="leading-relaxed">{activeModalPrestation.deroulement}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 rounded-2xl bg-[#FAFDF9] border border-emerald-100 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#059669] shrink-0" />
                    <div>
                      <div className="text-[10px] font-bold text-slate-500">Durée indicative</div>
                      <div className="text-xs font-bold text-[#13284C]">{activeModalPrestation.duree}</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-2xl bg-[#FAFDF9] border border-emerald-100 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#059669] shrink-0" />
                    <div>
                      <div className="text-[10px] font-bold text-slate-500">Lieux disponibles</div>
                      <div className="text-xs font-bold text-[#13284C]">{activeModalPrestation.lieux.join(', ')}</div>
                    </div>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-emerald-50 text-[11px] text-emerald-900 flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#059669] shrink-0" />
                  <span>Consultations assurées personnellement par Dr. KONE Sionfolo Mohamed.</span>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-emerald-100 flex flex-col sm:flex-row gap-2.5 justify-end">
                <a
                  href={`https://wa.me/2250777285102?text=${encodeURIComponent(`Bonjour Dr. KONE, je souhaite échanger au sujet de la prestation : ${activeModalPrestation.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white text-emerald-900 font-bold text-xs border border-emerald-300 hover:bg-emerald-50 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#059669]" />
                  <span>Poser une question sur WhatsApp</span>
                </a>

                <button
                  onClick={() => {
                    const title = activeModalPrestation.title;
                    setActiveModalPrestation(null);
                    onSelectPrestationForBooking(title);
                    onNavigateTo('rendez-vous');
                  }}
                  className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#059669] hover:bg-[#047857] text-white font-bold text-xs shadow-sm transition-all cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-emerald-200" />
                  <span>Prendre rendez-vous pour ce soin</span>
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

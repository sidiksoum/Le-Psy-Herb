import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Award, ShieldCheck, HeartHandshake, MapPin,
  MessageCircle, Calendar, CheckCircle2, ChevronRight,
  HelpCircle, Sparkles, Building
} from 'lucide-react';
import { CABINET_INFO } from '../data/psyHerbData';

interface CabinetPageProps {
  onNavigateTo: (page: string) => void;
}

export const CabinetPage: React.FC<CabinetPageProps> = ({ onNavigateTo }) => {
  const [activeTab, setActiveTab] = useState<'approche' | 'visite' | 'ethique' | 'faq'>('approche');

  const faqs = [
    {
      q: "Comment se déroule la première consultation au cabinet ?",
      a: "La première séance est un entretien d'accueil et d'écoute bienveillante. Le Dr. KONE prend le temps de comprendre votre situation, vos difficultés et vos attentes, sans aucun jugement, afin de définir ensemble le cadre de suivi le plus adapté."
    },
    {
      q: "Mes échanges sont-ils couverts par le secret professionnel ?",
      a: "Absolument. Conformément au code de déontologie des psychologues, la stricte confidentialité est garantie. Aucune information médicale ou personnelle n'est partagée avec des tiers sans votre consentement explicite."
    },
    {
      q: "Quelle est la durée moyenne d'une thérapie ou d'un accompagnement ?",
      a: "La durée varie selon les objectifs : de quelques séances de ventilation ou de soutien ponctuel (3 à 5 séances) à un suivi psychothérapeutique plus approfondi pour les troubles anxieux ou les bilans complets."
    },
    {
      q: "Le cabinet propose-t-il des consultations en entreprise ou à domicile ?",
      a: "Oui. Dr. KONE intervient régulièrement en milieu professionnel pour la gestion du stress et des conflits, ainsi qu'au domicile des personnes en situation de maladie chronique ou de polyhandicap."
    }
  ];

  return (
    <div className="bg-psy-gradient min-h-screen">

      {/* Page Header Banner - Solid background #0B1528, 100% visible */}
      <section
        className="relative py-12 sm:py-16 text-white overflow-hidden"
        style={{ backgroundColor: '#0B1528' }}
      >
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=1920&q=80"
            alt="Cadre du cabinet"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1528] via-[#0B1528]/90 to-[#13284C]/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300 mb-3">
            <button onClick={() => onNavigateTo('home')} className="hover:underline">Accueil</button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Le cabinet</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#48C81B]/20 border border-[#48C81B] text-[#48C81B]">
                <Award className="w-3.5 h-3.5" />
                <span>Expertise clinique et psychopathologie</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white">
                Cabinet d'expertise psychologique <br />
                <span className="text-[#48C81B]">Le Psy Herb</span>
              </h1>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl">
                Un lieu d'écoute chaleureux et sécurisant à Cocody Riviera 3, dédié à la prise en charge psychologique et psychopathologique de l'enfant et de l'adulte.
              </p>

              {/* Action Buttons - Compact & Proportionnés */}
              <div className="pt-2 flex flex-wrap gap-2.5">
                <button
                  onClick={() => onNavigateTo('rendez-vous')}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#059669] hover:bg-[#047857] text-white font-bold text-xs sm:text-sm shadow-sm transition-all cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-emerald-200" />
                  <span>Prendre un rendez-vous</span>
                </button>
                <a
                  href={CABINET_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs sm:text-sm border border-emerald-400/50 backdrop-blur-md transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp direct</span>
                </a>
              </div>
            </div>

            {/* Doctor Card */}
            <div className="lg:col-span-4">
              <div className="rounded-3xl p-5 bg-white/10 backdrop-blur-md border border-[#48C81B]/40 shadow-soft-lg text-center space-y-2">
                <div className="w-28 h-28 rounded-full mx-auto overflow-hidden border-2 border-[#48C81B] shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80"
                    alt={CABINET_INFO.praticien.nom}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">{CABINET_INFO.praticien.nom}</h3>
                  <p className="text-xs text-[#48C81B] font-semibold">{CABINET_INFO.praticien.titres}</p>
                </div>
                <div className="pt-1 text-xs text-slate-300 flex items-center justify-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#48C81B]" />
                  <span>Cocody, Riviera 3, Abidjan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs navigation */}
      <div className="border-b border-emerald-200 bg-white/95 backdrop-blur-md sticky top-18 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-2.5 no-scrollbar">
            {[
              { id: 'approche', label: 'Démarche thérapeutique', icon: <HeartHandshake className="w-4 h-4" /> },
              { id: 'visite', label: 'Le cadre à Riviera 3', icon: <Building className="w-4 h-4" /> },
              { id: 'ethique', label: 'Déontologie et éthique', icon: <ShieldCheck className="w-4 h-4" /> },
              { id: 'faq', label: 'Questions fréquentes', icon: <HelpCircle className="w-4 h-4" /> },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id as any)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${activeTab === t.id
                  ? 'bg-[#059669] text-white shadow-sm'
                  : 'bg-emerald-50 text-[#334155] hover:bg-emerald-100'
                  }`}
              >
                {t.icon}
                <span>{t.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Approche */}
        {activeTab === 'approche' && (
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-[#13284C] mb-2">
                Une prise en charge intégrative et humaine
              </h2>
              <p className="text-sm text-[#334155] leading-relaxed">
                Le Dr. KONE Sionfolo Mohamed privilégie une approche qui conjugue la rigueur de la psychopathologie clinique et l'écoute psycho-corporelle.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-3xl bg-white border border-emerald-200 shadow-sm space-y-2">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-[#059669] flex items-center justify-center font-bold text-sm">1</div>
                <h3 className="font-bold text-[#13284C] text-base">Compréhension globale</h3>
                <p className="text-xs text-[#334155] leading-relaxed">
                  Chaque symptôme (insomnie, anxiété, échec scolaire, conflit de couple) est replacé dans son histoire singulière et familiale.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-emerald-200 shadow-sm space-y-2">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-[#059669] flex items-center justify-center font-bold text-sm">2</div>
                <h3 className="font-bold text-[#13284C] text-base">Outils pragmatiques</h3>
                <p className="text-xs text-[#334155] leading-relaxed">
                  Entretiens de ventilation, restructuration cognitive, protocoles de désamorçage de conflits et exercices de respiration vagale.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-emerald-200 shadow-sm space-y-2">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-[#059669] flex items-center justify-center font-bold text-sm">3</div>
                <h3 className="font-bold text-[#13284C] text-base">Autonomie durable</h3>
                <p className="text-xs text-[#334155] leading-relaxed">
                  Permettre au patient de développer ses propres ressources de résilience pour éviter la dépendance au suivi psychologique.
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Visite du Cabinet */}
        {activeTab === 'visite' && (
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-[#13284C] mb-2">
                Un environnement conçu pour le calme et la sérénité
              </h2>
              <p className="text-sm text-[#334155] leading-relaxed">
                Situé dans le quartier résidentiel et paisible de Cocody Riviera 3, notre cabinet offre un cocon préservé de l'agitation d'Abidjan.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-[#13284C] text-sm">Discrétion et acoustique isolée</h4>
                    <p className="text-xs text-[#334155]">Une salle de consultation insonorisée pour garantir la liberté totale de parole.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-[#13284C] text-sm">Espace adapté aux enfants</h4>
                    <p className="text-xs text-[#334155]">Coin dessin, jeux symboliques et supports d'expression ludiques.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-[#13284C] text-sm">Stationnement aisé</h4>
                    <p className="text-xs text-[#334155]">Facilité d'accès et parking sécurisé pour nos patients à la Riviera 3.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl overflow-hidden border-2 border-emerald-200 shadow-soft-sm">
                <img
                  src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=800&q=80"
                  alt="Cadre du cabinet Le Psy Herb"
                  className="w-full h-72 object-cover"
                />
              </div>
            </div>
          </motion.div>
        )}

        {/* Éthique */}
        {activeTab === 'ethique' && (
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-[#13284C] mb-2">
                Déontologie et secret professionnel
              </h2>
              <p className="text-sm text-[#334155] leading-relaxed">
                La relation d'aide repose avant tout sur une confiance inaltérable entre le praticien et le patient.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="p-6 rounded-3xl bg-white border border-emerald-200 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-[#059669] font-bold text-sm">
                  <ShieldCheck className="w-5 h-5" />
                  <span>Secret médical inviolable</span>
                </div>
                <p className="text-xs text-[#334155] leading-relaxed">
                  Tout ce qui est formulé en séance reste strictement entre vous et le psychologue.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-emerald-200 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                  <Sparkles className="w-5 h-5" />
                  <span>Bienveillance et non-jugement</span>
                </div>
                <p className="text-xs text-[#334155] leading-relaxed">
                  Chaque histoire de vie est accueillie avec respect, sans préjugé culturel, religieux ou moral.
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* FAQ */}
        {activeTab === 'faq' && (
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <div className="max-w-3xl mb-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-[#13284C] mb-1">
                Foire aux questions du cabinet
              </h2>
              <p className="text-xs sm:text-sm text-[#334155]">
                Tout ce qu'il faut savoir avant de prendre votre premier rendez-vous.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {faqs.map((f, i) => (
                <div key={i} className="p-5 rounded-3xl bg-white border border-emerald-200 shadow-sm space-y-2">
                  <h4 className="font-bold text-[#13284C] text-sm flex items-start gap-2">
                    <span className="text-[#059669] font-black">Q.</span>
                    <span>{f.q}</span>
                  </h4>
                  <p className="text-xs text-[#334155] leading-relaxed pl-5">
                    {f.a}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

      </div>
    </div>
  );
};

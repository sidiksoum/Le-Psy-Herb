import React from 'react';
import { AstucesGuidesSection } from '../components/AstucesGuidesSection';
import { ChevronRight, BookOpen } from 'lucide-react';
import { CABINET_INFO } from '../data/psyHerbData';

interface AstucesPageProps {
  onNavigateTo: (page: string) => void;
}

export const AstucesPage: React.FC<AstucesPageProps> = ({ onNavigateTo }) => {
  return (
    <div className="bg-psy-gradient min-h-screen">

      {/* Header Banner - Solid background #0B1528, 100% visible */}
      <section
        className="relative py-12 sm:py-16 text-white overflow-hidden"
        style={{ backgroundColor: '#0B1528' }}
      >
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1920&q=80"
            alt="Astuces et Guides"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1528] via-[#0B1528]/90 to-[#13284C]/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300 mb-3">
            <button onClick={() => onNavigateTo('home')} className="hover:underline">Accueil</button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Astuces et guides</span>
          </div>

          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#48C81B]/20 border border-[#48C81B] text-[#48C81B]">
              <BookOpen className="w-3.5 h-3.5 text-[#48C81B]" />
              <span>Espace éducatif et fiches pratiques</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white">
              Ressources et guides cliniques <br />
              <span className="text-[#48C81B]">pour vous et vos proches</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              Consultez et téléchargez gratuitement nos fiches thématiques rédigées par le psychologue clinicien : éducation positive, apaisement de l'anxiété, médiation de couple et soutien aux aidants.
            </p>
          </div>
        </div>
      </section>

      {/* Guides Grid & Filter Section */}
      <AstucesGuidesSection />

      {/* Bottom Advice Box */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div
          className="p-6 sm:p-8 rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-soft-sm border border-emerald-400/40"
          style={{ backgroundColor: '#13284C' }}
        >
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-bold font-display text-white">Une situation nécessite un regard personnalisé ?</h3>
            <p className="text-xs text-slate-200">Les guides fournissent des repères, mais l'entretien clinique permet de cibler votre réalité.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5">
            <button
              onClick={() => onNavigateTo('rendez-vous')}
              className="px-5 py-2.5 rounded-xl bg-[#059669] hover:bg-[#047857] text-white font-bold text-xs sm:text-sm shadow-sm transition-all cursor-pointer"
            >
              Prendre un rendez-vous
            </button>
            <a
              href={CABINET_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs sm:text-sm border border-white/30 transition-all text-center"
            >
              WhatsApp (+225 07 77 28 51 02)
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

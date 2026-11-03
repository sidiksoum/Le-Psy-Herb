import React from 'react';
import { HeroCarousel } from '../components/HeroCarousel';
import { CabinetSection } from '../components/CabinetSection';
import { PrestationsSection } from '../components/PrestationsSection';
import { AppointmentWizard } from '../components/AppointmentWizard';
import { AstucesGuidesSection } from '../components/AstucesGuidesSection';
import { BreathingWidget } from '../components/BreathingWidget';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HomePageProps {
  onNavigateTo: (page: string) => void;
  onSelectPrestationForBooking: (prestation: string) => void;
  selectedPrestation: string;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigateTo,
  onSelectPrestationForBooking,
  selectedPrestation,
}) => {
  return (
    <div className="bg-psy-gradient min-h-screen">
      {/* 01. Hero Carousel avec images clairement visibles sans voile bleu et background dégradé vert officiel */}
      <HeroCarousel onNavigateTo={onNavigateTo} />

      {/* 02. Aperçu Cabinet dans le style de la carte de visite (fond vert dégradé & cartes blanches douces) */}
      <div className="relative bg-psy-gradient py-6">
        <CabinetSection />
        <div className="pb-10 text-center">
          <button
            onClick={() => onNavigateTo('cabinet')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-emerald-50 text-[#0D1B3E] font-bold text-xs sm:text-sm shadow-soft-sm hover:shadow-soft-md border border-white/60 transition-all cursor-pointer"
          >
            <span>Découvrir la page complète du cabinet et du Dr. KONE</span>
            <ArrowRight className="w-4 h-4 text-[#059669]" />
          </button>
        </div>
      </div>

      {/* 03. Aperçu 9 Prestations avec bouton vers la page dédiée */}
      <div className="relative bg-psy-gradient py-6 border-t border-white/20">
        <PrestationsSection
          onSelectPrestationForBooking={(title) => {
            onSelectPrestationForBooking(title);
            onNavigateTo('rendez-vous');
          }}
        />
        <div className="pb-10 text-center">
          <button
            onClick={() => onNavigateTo('prestations')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-emerald-50 text-[#059669] font-bold text-xs sm:text-sm shadow-soft-sm hover:shadow-soft-md border border-white/60 transition-all cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#059669]" />
            <span>Explorer toutes les 9 prestations en détail</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 04. Formulaire guidé de Rendez-vous en 4 étapes */}
      <div className="bg-psy-gradient py-6 border-t border-white/20">
        <AppointmentWizard initialPrestation={selectedPrestation} />
      </div>

      {/* 05. Aperçu Astuces & Guides Pratiques */}
      <div className="relative bg-psy-gradient py-6 border-t border-white/20">
        <AstucesGuidesSection />
        <div className="pb-10 text-center">
          <button
            onClick={() => onNavigateTo('astuces')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-emerald-50 text-[#0D1B3E] font-bold text-xs sm:text-sm shadow-soft-sm hover:shadow-soft-md border border-white/60 transition-all cursor-pointer"
          >
            <span>Accéder à l'espace complet des guides et fiches PDF</span>
            <ArrowRight className="w-4 h-4 text-[#059669]" />
          </button>
        </div>
      </div>

      {/* 06. Espace Cohérence Cardiaque 5/5 pour l'apaisement */}
      <div className="bg-psy-gradient py-6 border-t border-white/20">
        <BreathingWidget />
      </div>
    </div>
  );
};

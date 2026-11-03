import React from 'react';
import { AppointmentWizard } from '../components/AppointmentWizard';
import { ChevronRight, Calendar, ShieldCheck, Clock, MessageCircle, CheckCircle2 } from 'lucide-react';
import { CABINET_INFO } from '../data/psyHerbData';

interface RendezVousPageProps {
  onNavigateTo: (page: string) => void;
  selectedPrestation: string;
}

export const RendezVousPage: React.FC<RendezVousPageProps> = ({
  onNavigateTo,
  selectedPrestation,
}) => {
  return (
    <div className="bg-psy-gradient min-h-screen">

      {/* Page Header - Solid background #0B1528, 100% visible */}
      <section
        className="relative py-12 sm:py-16 text-white overflow-hidden"
        style={{ backgroundColor: '#0B1528' }}
      >
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1920&q=80"
            alt="Prise de rendez-vous"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1528] via-[#0B1528]/90 to-[#13284C]/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300 mb-3">
            <button onClick={() => onNavigateTo('home')} className="hover:underline">Accueil</button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Rendez-vous en ligne</span>
          </div>

          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#48C81B]/20 border border-[#48C81B] text-[#48C81B]">
              <Calendar className="w-3.5 h-3.5 text-[#48C81B]" />
              <span>Prise en charge rapide et confidentielle</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white">
              Prendre un rendez-vous <br />
              <span className="text-[#48C81B]">au cabinet Le Psy Herb</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              Remplissez le formulaire guidé ci-dessous. Dès réception, le secrétariat du Dr. KONE Sionfolo Mohamed valide votre créneau par WhatsApp ou appel téléphonique.
            </p>
          </div>
        </div>
      </section>

      {/* Main Wizard Section */}
      <div className="py-6">
        <AppointmentWizard initialPrestation={selectedPrestation} />
      </div>

      {/* Reassurance Grid & Pre-consultation tips */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

          <div className="p-5 rounded-3xl bg-white border border-emerald-200 shadow-sm space-y-2">
            <div className="w-9 h-9 rounded-xl bg-emerald-100 text-[#059669] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-[#13284C] text-sm">Discrétion absolue</h4>
            <p className="text-xs text-[#334155] leading-relaxed">
              Aucun détail médical confidentiel n'est exigé lors de la demande. Vous exposez vos besoins en toute intimité avec le psychologue.
            </p>
          </div>

          <div className="p-5 rounded-3xl bg-white border border-emerald-200 shadow-sm space-y-2">
            <div className="w-9 h-9 rounded-xl bg-emerald-100 text-[#059669] flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-[#13284C] text-sm">Réponse sous 24h</h4>
            <p className="text-xs text-[#334155] leading-relaxed">
              Nous confirmons chaque date avec vous pour convenir de l'horaire précis selon vos disponibilités professionnelles ou scolaires.
            </p>
          </div>

          <div className="p-5 rounded-3xl bg-white border border-emerald-200 shadow-sm space-y-2">
            <div className="w-9 h-9 rounded-xl bg-emerald-100 text-[#059669] flex items-center justify-center">
              <MessageCircle className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-[#13284C] text-sm">Besoin d'urgence ?</h4>
            <p className="text-xs text-[#334155] leading-relaxed">
              Contactez directement le secrétariat sur WhatsApp au <strong className="text-[#059669]">{CABINET_INFO.telephone}</strong> pour les situations nécessitant une écoute prioritaire.
            </p>
          </div>

        </div>

        {/* Preparation advice box */}
        <div className="p-6 rounded-3xl bg-emerald-50/70 border border-emerald-200">
          <h3 className="font-bold text-[#13284C] text-base mb-2 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[#059669]" />
            <span>Conseils pour votre première séance :</span>
          </h3>
          <ul className="space-y-1.5 text-xs text-[#334155]">
            <li>• Prévoyez d'arriver 5 minutes avant l'heure pour vous détendre dans notre espace d'accueil.</li>
            <li>• Pour un bilan psychologique d'enfant, munissez-vous des éventuels livrets scolaires ou bilans antérieurs.</li>
            <li>• Venez tel que vous êtes : aucune préparation particulière n'est requise, la parole se libère naturellement.</li>
          </ul>
        </div>
      </div>

    </div>
  );
};

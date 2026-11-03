import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircleHeart, ClipboardCheck, Users, HeartHandshake, ArrowRight, Zap } from 'lucide-react';

interface QuickAppointmentBannerProps {
  onOpenBookingWithPrestation?: (prestationId: string) => void;
  onOpenBooking: () => void;
}

export const QuickAppointmentBanner: React.FC<QuickAppointmentBannerProps> = ({
  onOpenBookingWithPrestation,
  onOpenBooking,
}) => {
  const quickServices = [
    {
      id: "ecoute-entretien-aide",
      label: "Écoute & Soutien",
      icon: <MessageCircleHeart className="w-5 h-5 text-psy-action" />,
      desc: "Déposer son fardeau"
    },
    {
      id: "bilan-psychologique-complet",
      label: "Bilan Psychologique",
      icon: <ClipboardCheck className="w-5 h-5 text-psy-blue" />,
      desc: "Évaluation complète"
    },
    {
      id: "psychotherapie-individuelle-groupale",
      label: "Psychothérapie",
      icon: <Users className="w-5 h-5 text-psy-action" />,
      desc: "Thérapie par la parole"
    },
    {
      id: "couple-coaching-parental",
      label: "Coaching Parental",
      icon: <HeartHandshake className="w-5 h-5 text-emerald-600" />,
      desc: "Famille & Éducation"
    }
  ];

  return (
    <section className="bg-white py-8 border-b border-sage-100 shadow-soft-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Express Callout strip */}
        <div className="rounded-3xl bg-gradient-to-r from-psy-mintSoft via-white to-psy-paleSkySoft p-4 sm:p-6 border border-psy-mint/40 shadow-soft-sm flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* Left Title */}
          <div className="flex items-center gap-3.5 text-center lg:text-left">
            <div className="w-12 h-12 rounded-2xl bg-psy-action text-white flex items-center justify-center shrink-0 shadow-soft-sm">
              <Zap className="w-6 h-6 fill-current" />
            </div>
            <div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-psy-action bg-white px-2 py-0.5 rounded-md border border-psy-mint/50">
                  Rendez-vous express
                </span>
                <span className="text-xs text-psy-anthracite font-medium">Réponse sous 24h</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-display text-psy-navy mt-0.5">
                Prenez rendez-vous en 2 minutes
              </h3>
            </div>
          </div>

          {/* Quick Buttons selection */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full lg:w-auto">
            {quickServices.map((service) => (
              <motion.button
                key={service.id}
                onClick={() => {
                  if (onOpenBookingWithPrestation) {
                    onOpenBookingWithPrestation(service.id);
                  } else {
                    onOpenBooking();
                  }
                }}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="p-3 rounded-2xl bg-white border border-sage-200/80 hover:border-psy-action hover:shadow-soft-md transition-all text-left flex flex-col gap-1 cursor-pointer group"
              >
                <div className="p-1.5 rounded-lg bg-psy-mintSoft w-fit group-hover:bg-psy-action/10 transition-colors">
                  {service.icon}
                </div>
                <div className="text-xs font-bold text-psy-navy mt-1 group-hover:text-psy-action transition-colors">
                  {service.label}
                </div>
                <div className="text-[10px] text-psy-anthracite/70 font-medium">
                  {service.desc}
                </div>
              </motion.button>
            ))}
          </div>

          {/* Direct CTA */}
          <div className="shrink-0 w-full sm:w-auto">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-psy-action hover:bg-psy-actionHover text-white font-bold text-xs sm:text-sm shadow-soft-sm hover:shadow-glow-action transition-all cursor-pointer"
            >
              <span>Réserver mon créneau</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};


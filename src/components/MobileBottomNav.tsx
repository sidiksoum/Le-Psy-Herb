import React from 'react';
import { motion } from 'framer-motion';
import {
  Home,
  Building,
  Sparkles,
  BookOpen,
  MapPin
} from 'lucide-react';

interface MobileBottomNavProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

interface NavTabItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  badge?: string | number;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  currentPage,
  onNavigate,
}) => {
  const tabs: NavTabItem[] = [
    {
      id: 'home',
      label: 'Accueil',
      icon: <Home className="w-7 h-7" strokeWidth={2.2} />,
    },
    {
      id: 'cabinet',
      label: 'Cabinet',
      icon: <Building className="w-7 h-7" strokeWidth={2.2} />,
    },
    {
      id: 'prestations',
      label: 'Prestations',
      icon: <Sparkles className="w-7 h-7" strokeWidth={2.2} />,
      badge: '9',
    },
    {
      id: 'astuces',
      label: 'Astuces',
      icon: <BookOpen className="w-7 h-7" strokeWidth={2.2} />,
    },
    {
      id: 'contact',
      label: 'Contact',
      icon: <MapPin className="w-7 h-7" strokeWidth={2.2} />,
    },
  ];

  return (
    <nav
      aria-label="Navigation mobile principale"
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/98 backdrop-blur-xl border-t border-emerald-200/90 shadow-[0_-4px_25px_rgba(0,0,0,0.12)] pb-[max(env(safe-area-inset-bottom),0.5rem)] pt-2 px-2"
    >
      <div className="max-w-lg mx-auto grid grid-cols-5 gap-1 items-center">
        {tabs.map((tab) => {
          const isActive = currentPage === tab.id;

          return (
            <motion.button
              key={tab.id}
              onClick={() => onNavigate(tab.id)}
              whileTap={{ scale: 0.92 }}
              className={`flex flex-col items-center justify-center py-1.5 px-1 rounded-2xl transition-all cursor-pointer focus:outline-none relative ${
                isActive ? 'bg-emerald-100/80 shadow-xs' : 'hover:bg-slate-50'
              }`}
              aria-label={tab.label}
            >
              {/* Conteneur de l'icône grand format bien mis en évidence */}
              <div className="relative">
                <div
                  className={`p-1 rounded-xl transition-colors ${
                    isActive
                      ? 'text-[#047857]'
                      : 'text-[#1E293B] group-hover:text-[#059669]'
                  }`}
                >
                  {tab.icon}
                </div>

                {/* Badge (ex: 9 Prestations) */}
                {tab.badge && (
                  <span className="absolute -top-1 -right-2.5 px-1.5 py-0.2 rounded-full bg-[#059669] text-white text-[10px] font-black shadow-xs">
                    {tab.badge}
                  </span>
                )}
              </div>

              {/* Libellé agrandi et bien lisible */}
              <span
                className={`text-[12px] tracking-tight leading-tight mt-0.5 truncate max-w-full ${
                  isActive
                    ? 'font-black text-[#047857]'
                    : 'font-extrabold text-[#334155]'
                }`}
              >
                {tab.label}
              </span>

              {/* Indicateur sous l'onglet actif */}
              {isActive ? (
                <motion.div
                  layoutId="activeBottomNavIndicator"
                  className="w-5 h-1.5 rounded-full bg-[#059669] mt-0.5 shadow-xs"
                />
              ) : (
                <div className="w-5 h-1.5 mt-0.5 opacity-0" />
              )}
            </motion.button>
          );
        })}
      </div>
    </nav>
  );
};

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Calendar, MessageCircle, Home } from 'lucide-react';
import { CABINET_INFO } from '../data/psyHerbData';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Accueil', icon: <Home className="w-3.5 h-3.5" /> },
    { id: 'cabinet', label: 'Le cabinet' },
    { id: 'prestations', label: 'Prestations' },
    { id: 'rendez-vous', label: 'Rendez-vous' },
    { id: 'astuces', label: 'Astuces et guides' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleItemClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-emerald-200/80 shadow-soft-sm">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">

          {/* Logo compact & officiel */}
          <button
            onClick={() => handleItemClick('home')}
            className="flex items-center gap-2.5 group text-left cursor-pointer shrink-0"
          >
            <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-soft-sm group-hover:scale-105 transition-all duration-300 border border-emerald-300 bg-white">
              <img
                src="/logo-psy-herb.png"
                alt="Logo Le Psy Herb"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-xl font-black font-display tracking-tight text-[#13284C]">
                  Le Psy <span className="text-[#059669]">Herb</span>
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.2 rounded text-[9px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                  Expertise
                </span>
              </div>
              <p className="text-[10px] font-bold text-[#059669] tracking-tight">
                pour vous soulager !
              </p>
            </div>
          </button>

          {/* Navigation Links Desktop - Garantis sur une seule ligne sans blocage (whitespace-nowrap) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 mx-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`px-3 py-1.5 text-xs xl:text-sm font-bold whitespace-nowrap rounded-xl transition-all cursor-pointer relative ${isActive
                      ? 'text-[#059669] bg-emerald-50 border border-emerald-300 shadow-sm'
                      : 'text-[#334155] hover:text-[#059669] hover:bg-emerald-50/60'
                    }`}
                >
                  <span className="flex items-center gap-1">
                    {item.icon}
                    <span>{item.label}</span>
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-[17px] left-0 right-0 h-1 bg-[#059669] rounded-t-full"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs Desktop - Compacts, lisibles et élégants */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            {/* WhatsApp CTA */}
            <a
              href={CABINET_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-emerald-900 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 transition-all shadow-sm shrink-0"
              title="Discuter sur WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#059669] fill-emerald-600/20" />
              <span>WhatsApp</span>
            </a>

            {/* Prendre RDV (format compact, pas de bouton trop gros) */}
            <button
              onClick={() => handleItemClick('rendez-vous')}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-[#059669] hover:bg-[#047857] shadow-sm hover:shadow-glow-action transition-all cursor-pointer shrink-0"
            >
              <Calendar className="w-3.5 h-3.5 text-emerald-200" />
              <span>Prendre RDV</span>
            </button>
          </div>

          {/* Mobile hamburger trigger */}
          <div className="flex lg:hidden items-center gap-1.5">
            <a
              href={CABINET_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-emerald-50 text-[#059669] border border-emerald-300 sm:hidden"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-[#059669]" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#13284C] hover:bg-emerald-50 focus:outline-none transition-colors cursor-pointer"
              aria-label="Ouvrir le menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-b border-emerald-200 bg-white px-5 pt-3 pb-6 space-y-3"
          >
            <div className="flex flex-col space-y-1 font-bold text-sm">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`w-full px-4 py-2.5 rounded-xl text-left flex items-center justify-between transition-colors ${currentPage === item.id
                      ? 'bg-emerald-100 text-[#059669] font-black'
                      : 'text-[#334155] hover:bg-emerald-50'
                    }`}
                >
                  <span className="flex items-center gap-2">
                    {item.icon}
                    <span>{item.label}</span>
                  </span>
                  {item.id === 'prestations' && (
                    <span className="text-[10px] bg-[#059669] text-white px-2 py-0.5 rounded-full font-black">
                      9
                    </span>
                  )}
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-emerald-100 flex flex-col gap-2">
              <button
                onClick={() => handleItemClick('rendez-vous')}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#059669] text-white rounded-xl text-xs font-bold shadow-sm"
              >
                <Calendar className="w-4 h-4 text-emerald-200" />
                <span>Prendre un rendez-vous</span>
              </button>

              <a
                href={CABINET_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-50 text-emerald-900 border border-emerald-300 rounded-xl text-xs font-bold"
              >
                <MessageCircle className="w-4 h-4 text-[#059669]" />
                <span>Écrire sur WhatsApp (+225 07 77 28 51 02)</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

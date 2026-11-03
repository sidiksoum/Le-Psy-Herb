import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Calendar, X, Phone, ShieldCheck } from 'lucide-react';
import { CABINET_INFO } from '../data/psyHerbData';

interface FloatingWhatsAppProps {
  onOpenBooking: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenBooking }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-3 sm:right-5 z-50 flex flex-col items-end gap-2">
      
      {/* Quick Pre-filled Chat Preview Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            className="mb-2 w-72 sm:w-80 rounded-2xl bg-white shadow-soft-lg border-2 border-emerald-400 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#059669] p-3 text-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-white text-[#059669] flex items-center justify-center font-black text-sm shadow-sm">
                    Ψ
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#48C81B] border border-white absolute bottom-0 right-0" />
                </div>
                <div>
                  <h4 className="text-xs font-bold leading-tight">Le Psy Herb • Secrétariat</h4>
                  <p className="text-[10px] text-emerald-100">Réponse sous quelques instants</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white p-1"
                aria-label="Fermer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Content */}
            <div className="p-3 bg-[#F0FDF4] space-y-2 text-xs">
              <div className="bg-white p-2.5 rounded-xl rounded-tl-none shadow-sm border border-emerald-200 text-[#334155]">
                <p className="font-bold text-[#13284C] mb-0.5">Bonjour et bienvenue !</p>
                <p className="text-[11px]">Comment pouvons-nous vous soulager aujourd'hui ? Écrivez-nous en toute discrétion.</p>
                <span className="text-[9px] text-emerald-600 font-bold mt-1 block text-right">● En ligne</span>
              </div>

              <div className="flex items-center gap-1.5 text-[10px] text-emerald-900 font-semibold px-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#059669]" />
                <span>Confidentialité et secret médical garantis</span>
              </div>
            </div>

            {/* Actions in popup */}
            <div className="p-3 bg-white border-t border-emerald-100 flex flex-col gap-1.5">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-[#059669] hover:bg-[#047857] text-white font-bold text-xs shadow-sm transition-all cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-emerald-200" />
                <span>Prendre un rendez-vous</span>
              </button>

              <a
                href={CABINET_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-300 font-bold text-xs transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#059669]" />
                <span>Discuter sur WhatsApp (+225 07 77 28 51 02)</span>
              </a>

              <a
                href={`tel:${CABINET_INFO.telephoneRaw}`}
                className="w-full text-center py-1 text-[10px] font-semibold text-[#334155] hover:text-[#059669] transition-colors flex items-center justify-center gap-1"
              >
                <Phone className="w-3 h-3 text-[#059669]" />
                <span>Appel téléphonique direct</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button: WhatsApp Icon bien en évidence pour mobile & desktop */}
      <div className="relative group">
        {/* Subtle pulsing glow */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 blur-sm animate-ping pointer-events-none" />

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-2xl shadow-[#25D366]/40 border-2 border-white transition-all cursor-pointer"
          aria-label="Ouvrir le contact WhatsApp"
          title="Discuter sur WhatsApp (+225 07 77 28 51 02)"
        >
          {/* Logo officiel WhatsApp vectoriel ultra-net */}
          <svg
            viewBox="0 0 24 24"
            className="w-7 h-7 sm:w-8 sm:h-8 fill-current text-white"
            aria-hidden="true"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>

          {/* Pastille verte "En ligne" */}
          <span className="absolute top-0.5 right-0.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#25D366] flex items-center justify-center">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          </span>
        </motion.button>
      </div>

    </div>
  );
};

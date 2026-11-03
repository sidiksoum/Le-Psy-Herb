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

      {/* Floating Bar with BOTH Buttons - Compact & Elegant (pas trop gros) */}
      <div 
        className="flex items-center gap-1.5 p-1 rounded-full shadow-lg border border-emerald-400"
        style={{ backgroundColor: '#0B1528' }}
      >
        {/* Button 1: Prendre un rendez-vous (compact) */}
        <motion.button
          onClick={onOpenBooking}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#059669] hover:bg-[#047857] text-white font-bold text-xs shadow-sm transition-all cursor-pointer"
          title="Planifier une consultation"
        >
          <Calendar className="w-3.5 h-3.5 text-[#48C81B]" />
          <span className="whitespace-nowrap">Prendre RDV</span>
        </motion.button>

        {/* Button 2: WhatsApp */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-all cursor-pointer"
          title="Contacter sur WhatsApp"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-current text-white" />
          <span className="hidden sm:inline whitespace-nowrap">WhatsApp</span>
        </motion.button>
      </div>

    </div>
  );
};

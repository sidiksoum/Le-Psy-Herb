import React from 'react';
import { Phone, MapPin, Mail, Clock } from 'lucide-react';
import { CABINET_INFO } from '../data/psyHerbData';

export const TopBar: React.FC = () => {
  return (
    <div 
      className="text-white text-xs py-2 px-3 sm:px-6 lg:px-8 border-b border-emerald-400/30 hidden md:block"
      style={{ backgroundColor: '#0D1B3E' }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-5">
          <a
            href={CABINET_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-[#8EE061] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#8EE061]" />
            <span>Appel et WhatsApp : <strong>{CABINET_INFO.telephone}</strong></span>
          </a>
          <div className="flex items-center gap-1.5 text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-[#5ECFA7]" />
            <span>{CABINET_INFO.adresse}</span>
          </div>
          <a
            href={`mailto:${CABINET_INFO.email}`}
            className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>{CABINET_INFO.email}</span>
          </a>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-slate-300 text-[11px]">
            <Clock className="w-3 h-3 text-[#8EE061]" />
            <span>Lundi – samedi : 08h – 19h</span>
          </div>
          <span className="w-1 h-1 rounded-full bg-[#8EE061]"></span>
          <span className="text-[11px] font-bold text-[#8EE061]">
            Cabinet ouvert • Consultations sur rendez-vous
          </span>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Heart, ExternalLink, Calendar, MessageCircle } from 'lucide-react';
import { CABINET_INFO } from '../data/psyHerbData';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    } else {
      window.location.hash = page;
    }
  };

  return (
    <footer
      id="contact"
      className="text-white pt-12 pb-10 border-t-4 border-[#059669] relative z-10"
      style={{ backgroundColor: '#0B1528' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Callout Bar : Contact & Localisation Directe with BOTH Buttons */}
        <div
          className="mb-12 p-6 sm:p-7 rounded-3xl text-white border-2 border-[#059669]/60 shadow-soft-lg flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
          style={{ backgroundColor: '#13284C' }}
        >
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#48C81B]/20 text-[#48C81B] border border-[#48C81B]/40">
              <span>Cocody, Riviera 3 • Abidjan</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
              Besoin d'un accompagnement psychologique ?
            </h3>
            <p className="text-xs sm:text-sm text-slate-200">
              Dr. KONE Sionfolo Mohamed et son équipe vous accueillent au cabinet ou interviennent en entreprise et en privé.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            {/* Button 1: Prendre RDV (proportionné, pas trop gros) */}
            <button
              onClick={() => handleNav('rendez-vous')}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#059669] hover:bg-[#047857] text-white font-bold text-xs sm:text-sm shadow-sm transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-emerald-200" />
              <span>Prendre un rendez-vous</span>
            </button>

            {/* Button 2: WhatsApp */}
            <a
              href={CABINET_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span>WhatsApp direct</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 4 Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-white/10 text-xs text-slate-300">

          {/* Col 1: Identity & Brand */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-emerald-400 bg-white shadow-sm">
                <img src="/logo-psy-herb.png" alt="Le Psy Herb" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="text-xl font-black font-display tracking-tight text-white">
                  Le Psy <span className="text-[#48C81B]">Herb</span>
                </span>
                <p className="text-[10px] font-bold text-[#48C81B]">
                  pour vous soulager !
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Cabinet d'expertise psychologique dirigé par le Dr. KONE Sionfolo Mohamed. Prise en charge psychologique et psychopathologique de l'enfant et de l'adulte.
            </p>

            <div className="p-3 rounded-2xl bg-white/5 border border-white/10 space-y-0.5 text-[11px]">
              <div className="font-bold text-white">{CABINET_INFO.praticien.nom}</div>
              <div className="text-[#48C81B] font-medium">{CABINET_INFO.praticien.titres}</div>
            </div>
          </div>

          {/* Col 2: Navigation Pages */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="text-xs font-bold tracking-wider uppercase text-white border-l-2 border-[#48C81B] pl-2">
              Pages du site
            </h4>
            <ul className="space-y-1.5 text-slate-300">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-[#48C81B] transition-colors cursor-pointer text-left">
                  Accueil
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('cabinet')} className="hover:text-[#48C81B] transition-colors cursor-pointer text-left">
                  Le cabinet et psychologue
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('prestations')} className="hover:text-[#48C81B] transition-colors cursor-pointer text-left">
                  Les 9 prestations cliniques
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('rendez-vous')} className="hover:text-[#48C81B] transition-colors cursor-pointer text-left">
                  Prendre rendez-vous en ligne
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('astuces')} className="hover:text-[#48C81B] transition-colors cursor-pointer text-left">
                  Astuces et guides pratiques
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-[#48C81B] transition-colors cursor-pointer text-left">
                  Contact et plan d'accès
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Accès & Horaires */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="text-xs font-bold tracking-wider uppercase text-white border-l-2 border-[#2DD4BF] pl-2">
              Accès et horaires
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#48C81B] shrink-0 mt-0.5" />
                <span>{CABINET_INFO.adresse}</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#2DD4BF] shrink-0 mt-0.5" />
                <span>{CABINET_INFO.horaires}</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <a href={`mailto:${CABINET_INFO.email}`} className="hover:underline text-slate-200">{CABINET_INFO.email}</a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <a href={`tel:${CABINET_INFO.telephoneRaw}`} className="hover:underline font-bold text-white">
                  {CABINET_INFO.telephone}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Éthique & Déontologie */}
          <div className="lg:col-span-2 space-y-2.5">
            <h4 className="text-xs font-bold tracking-wider uppercase text-white border-l-2 border-emerald-400 pl-2">
              Éthique et sécurité
            </h4>
            <div className="space-y-1.5 text-[11px] text-slate-300">
              <div className="flex items-center gap-1.5 text-white font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#48C81B]" />
                <span>Secret médical</span>
              </div>
              <p>Confidentialité stricte garantie sur toutes vos démarches et consultations.</p>
              <div className="pt-1 text-emerald-200 font-medium">
                Cocody Riviera 3, Abidjan
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal / Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-3">
          <p>© {new Date().getFullYear()} Cabinet d'expertise psychologique Le Psy Herb. Tous droits réservés.</p>
          <div className="flex items-center gap-2">
            <span>Déontologie clinique • Cocody, Riviera 3</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              Fait avec rigueur et empathie
              <Heart className="w-3.5 h-3.5 text-[#48C81B] fill-current inline" />
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};

import React, { useState } from 'react';
import {
  ChevronRight, MapPin, Phone, Mail, Clock,
  MessageCircle, Send,
  ExternalLink, Navigation, Calendar
} from 'lucide-react';
import { CABINET_INFO } from '../data/psyHerbData';
import { DecorativeMotifs } from '../components/DecorativeMotifs';

interface ContactPageProps {
  onNavigateTo: (page: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigateTo }) => {
  const [name, setName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !contactInfo || !message) return;
    const whatsappMsg = `Bonjour Dr. KONE (Cabinet Le Psy Herb),\nMessage depuis le site :\n• Nom : ${name}\n• Coordonnées : ${contactInfo}\n• Message : ${message}`;
    window.open(`https://wa.me/2250777285102?text=${encodeURIComponent(whatsappMsg)}`, '_blank');
    setSent(true);
  };

  return (
    <div className="bg-psy-gradient min-h-screen">

      {/* Header Banner - Solid background #0B1528, 100% visible */}
      <section
        className="relative py-12 sm:py-16 text-white overflow-hidden"
        style={{ backgroundColor: '#0B1528' }}
      >
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
            alt="Contact et Accès"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1528] via-[#0B1528]/90 to-[#13284C]/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300 mb-3">
            <button onClick={() => onNavigateTo('home')} className="hover:underline">Accueil</button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Contact et accès</span>
          </div>

          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#48C81B]/20 border border-[#48C81B] text-[#48C81B]">
              <MapPin className="w-3.5 h-3.5 text-[#48C81B]" />
              <span>Cocody, Riviera 3 • Abidjan</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white">
              Nous contacter et <br />
              <span className="text-[#48C81B]">venir au cabinet</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              Dr. KONE Sionfolo Mohamed et son équipe vous répondent avec bienveillance et rapidité pour toute question ou prise de rendez-vous.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="relative overflow-hidden">
        <DecorativeMotifs />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Left Column: Direct Info Cards & Itinerary */}
          <div className="lg:col-span-5 space-y-5">

            {/* Quick Contact Card */}
            <div className="p-6 rounded-3xl bg-white border border-emerald-200 shadow-sm space-y-5">
              <h3 className="text-lg font-bold font-display text-[#13284C]">
                Coordonnées directes
              </h3>

              <div className="space-y-3.5 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-emerald-50 text-[#059669] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-[#13284C] block">Adresse du cabinet :</strong>
                    <span className="text-[#334155]">{CABINET_INFO.adresse}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-emerald-50 text-[#059669] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-[#13284C] block">Appel et WhatsApp :</strong>
                    <a href={`tel:${CABINET_INFO.telephoneRaw}`} className="text-[#059669] font-bold hover:underline">
                      {CABINET_INFO.telephone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-emerald-50 text-[#059669] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-[#13284C] block">Adresse électronique :</strong>
                    <a href={`mailto:${CABINET_INFO.email}`} className="text-[#059669] font-semibold hover:underline">
                      {CABINET_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-emerald-50 text-[#059669] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-[#13284C] block">Horaires de consultation :</strong>
                    <span className="text-[#334155]">{CABINET_INFO.horaires}</span>
                  </div>
                </div>
              </div>

              {/* Direct Buttons: RDV & WhatsApp */}
              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <button
                  onClick={() => onNavigateTo('rendez-vous')}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#059669] hover:bg-[#047857] text-white font-bold text-xs shadow-sm transition-all cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-emerald-200" />
                  <span>Prendre RDV</span>
                </button>

                <a
                  href={CABINET_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-300 font-bold text-xs transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#059669]" />
                  <span>WhatsApp direct</span>
                </a>
              </div>
            </div>

            {/* Access & Directions */}
            <div className="p-5 rounded-3xl bg-white border border-emerald-200 shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-[#059669] font-bold text-xs">
                <Navigation className="w-4 h-4" />
                <span>Accès au cabinet à Riviera 3</span>
              </div>
              <p className="text-xs text-[#334155] leading-relaxed">
                Le cabinet est situé à Cocody Riviera 3, dans un quartier calme, discret et sécurisé.
                Accessible facilement en véhicule personnel (stationnement disponible) ou en VTC / Taxi.
              </p>
              <div className="pt-1 text-[11px] text-[#059669] font-semibold">
                📍 Repère : Proche des axes majeurs de la Riviera 3, plan précis transmis par WhatsApp lors de la confirmation du RDV.
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form & Interactive Map visual */}
          <div className="lg:col-span-7 space-y-5">

            {/* Quick Contact Form */}
            <div className="p-6 rounded-3xl bg-white border border-emerald-200 shadow-sm">
              <h3 className="text-lg font-bold font-display text-[#13284C] mb-1">
                Envoyer un message au Dr. KONE
              </h3>
              <p className="text-xs text-[#334155] mb-5">
                Pour une demande d'information, un devis d'intervention en entreprise ou une question sur nos soins :
              </p>

              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#13284C] mb-1">
                    Votre nom complet *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Koffi Marc"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-emerald-200 bg-white text-xs sm:text-sm font-semibold text-[#13284C] focus:outline-none focus:border-[#059669]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#13284C] mb-1">
                    Numéro de téléphone / WhatsApp ou e-mail *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="+225 ... ou email@example.com"
                    value={contactInfo}
                    onChange={(e) => setContactInfo(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-emerald-200 bg-white text-xs sm:text-sm font-semibold text-[#13284C] focus:outline-none focus:border-[#059669]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#13284C] mb-1">
                    Votre message ou question *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Expliquez brièvement votre demande..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-3.5 rounded-xl border border-emerald-200 bg-white text-xs sm:text-sm text-[#13284C] focus:outline-none focus:border-[#059669]"
                  />
                </div>

                {sent ? (
                  <div className="p-3 rounded-xl bg-emerald-100 text-emerald-800 text-xs font-bold text-center">
                    ✓ Message prêt et ouvert sur WhatsApp pour envoi direct au praticien !
                  </div>
                ) : (
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#059669] hover:bg-[#047857] text-white font-bold text-xs sm:text-sm shadow-sm transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-emerald-200" />
                    <span>Envoyer mon message au secrétariat</span>
                  </button>
                )}
              </form>
            </div>

            {/* Map visual card */}
            <div
              className="rounded-3xl overflow-hidden border border-emerald-200 shadow-sm relative min-h-[220px] flex items-center justify-center text-center p-6 text-white"
              style={{ backgroundColor: '#13284C' }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-30 pointer-events-none"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A162B] via-[#13284C]/80 to-transparent" />

              <div className="relative z-10 space-y-1.5 max-w-sm">
                <div className="w-10 h-10 rounded-full bg-[#48C81B] text-[#13284C] flex items-center justify-center mx-auto font-black text-lg">
                  Ψ
                </div>
                <h4 className="font-bold text-sm sm:text-base text-white">Cabinet Le Psy Herb • Riviera 3</h4>
                <p className="text-xs text-emerald-100">Cocody, Riviera 3, Abidjan — Côte d'Ivoire</p>
                <div className="pt-2">
                  <a
                    href="https://maps.google.com/?q=Cocody+Riviera+3+Abidjan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white text-[#13284C] font-bold text-xs hover:bg-[#48C81B] transition-colors"
                  >
                    <span>Ouvrir sur Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
        </div>
      </div>
    </div>
  );
};

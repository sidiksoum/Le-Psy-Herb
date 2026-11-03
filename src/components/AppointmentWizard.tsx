import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, CheckCircle2, User, Phone, MessageCircle, Send, Sparkles, Building, Home, Briefcase } from 'lucide-react';
import { PRESTATIONS_DATA } from '../data/psyHerbData';
import { DecorativeMotifs } from './DecorativeMotifs';

interface AppointmentWizardProps {
  initialPrestation?: string;
  onSuccess?: () => void;
}

export const AppointmentWizard: React.FC<AppointmentWizardProps> = ({
  initialPrestation = '',
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedPrestation, setSelectedPrestation] = useState<string>(initialPrestation || PRESTATIONS_DATA[0].title);
  const [selectedLocation, setSelectedLocation] = useState<'Cabinet' | 'Entreprise' | 'En privé'>('Cabinet');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedSlot, setSelectedSlot] = useState<'Matin (08h - 12h)' | 'Après-midi (14h - 17h)' | 'Fin de journée (17h - 19h)'>('Matin (08h - 12h)');
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (initialPrestation) {
      setSelectedPrestation(initialPrestation);
    }
  }, [initialPrestation]);

  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const dd = String(tomorrow.getDate()).padStart(2, '0');
    setSelectedDate(`${yyyy}-${mm}-${dd}`);
  }, []);

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;
    setIsSubmitted(true);
    setCurrentStep(4);
  };

  const generateWhatsAppConfirmationLink = () => {
    const message = `Bonjour Dr. KONE (Cabinet Le Psy Herb),\nJe souhaite confirmer ma demande de rendez-vous en ligne :\n\n• Prestation : ${selectedPrestation}\n• Lieu : ${selectedLocation}\n• Date souhaitée : ${selectedDate}\n• Créneau : ${selectedSlot}\n• Nom : ${fullName}\n• Téléphone : ${phone}${notes ? `\n• Précision : ${notes}` : ''}\n\nMerci de me recontacter pour la validation.`;
    return `https://wa.me/2250777285102?text=${encodeURIComponent(message)}`;
  };

  const steps = [
    { num: 1, title: "01. Prestation", desc: "Choisir le soin" },
    { num: 2, title: "02. Lieu et moment", desc: "Cabinet ou privé" },
    { num: 3, title: "03. Coordonnées", desc: "Nom et WhatsApp" },
    { num: 4, title: "04. Confirmation", desc: "Validation" }
  ];

  return (
    <section id="rendez-vous" className="py-12 sm:py-16 bg-transparent relative overflow-hidden">
      {/* Motifs botaniques & santé (Feuilles, Coeur, Lotus, Psi) */}
      <DecorativeMotifs />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white text-[#059669] mb-3 shadow-sm border border-emerald-200">
            <Calendar className="w-3.5 h-3.5 text-[#059669]" />
            <span>Prise de rendez-vous simplifiée</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-[#0D1B3E] tracking-tight">
            Demande de rendez-vous en 4 étapes
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#1E293B] font-medium leading-relaxed">
            Planifiez votre consultation en quelques clics. Recevez un accusé immédiat par WhatsApp ou e-mail, puis un appel de confirmation personnalisé.
          </p>
        </div>

        {/* Wizard Main Card */}
        <div className="rounded-3xl border border-white/80 bg-white/95 backdrop-blur-md p-6 sm:p-8 shadow-soft-md relative">

          {/* Step Progress Tracker */}
          <div className="grid grid-cols-4 gap-2 mb-8 pb-5 border-b border-emerald-100">
            {steps.map((s) => {
              const isActive = currentStep === s.num;
              const isPast = currentStep > s.num;
              return (
                <div key={s.num} className="flex flex-col items-center sm:items-start text-center sm:text-left">
                  <div className="flex items-center gap-2 mb-1">
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-xs transition-colors ${isPast
                        ? 'bg-[#059669] text-white'
                        : isActive
                          ? 'bg-[#0D1B3E] text-white shadow-sm'
                          : 'bg-emerald-100 text-[#334155]'
                        }`}
                    >
                      {isPast ? <CheckCircle2 className="w-4 h-4" /> : s.num}
                    </div>
                    <span className="hidden sm:inline font-bold text-xs text-[#0D1B3E]">
                      {s.title}
                    </span>
                  </div>
                  <span className="text-[10px] sm:text-xs text-[#334155] hidden sm:block">
                    {s.desc}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Form Content Steps */}
          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">

              {/* STEP 1: Choisir la prestation */}
              {currentStep === 1 && (
                <motion.div
                  key="step-1"
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  className="space-y-5"
                >
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold font-display text-[#0D1B3E] mb-1">
                      Étape 1 : choisissez votre prestation
                    </h3>
                    <p className="text-xs text-[#334155]">
                      Sélectionnez la prise en charge la plus adaptée à votre situation :
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-80 overflow-y-auto pr-1">
                    {PRESTATIONS_DATA.map((p) => {
                      const isSelected = selectedPrestation === p.title;
                      return (
                        <div
                          key={p.id}
                          onClick={() => setSelectedPrestation(p.title)}
                          className={`p-3.5 rounded-2xl border-2 transition-all cursor-pointer flex items-start gap-2.5 ${isSelected
                            ? 'border-[#059669] bg-emerald-50 shadow-sm'
                            : 'border-emerald-100 bg-white hover:bg-emerald-50/50'
                            }`}
                        >
                          <div className={`w-4 h-4 rounded-full mt-0.5 border-2 flex items-center justify-center shrink-0 ${isSelected ? 'border-[#059669] bg-[#059669] text-white' : 'border-slate-400'
                            }`}>
                            {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                          </div>
                          <div>
                            <div className="text-xs font-bold text-[#0D1B3E]">{p.title}</div>
                            <div className="text-[11px] text-[#334155] line-clamp-1 mt-0.5">{p.shortDescription}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="pt-3 flex justify-end">
                    <button
                      type="button"
                      onClick={handleNext}
                      className="px-6 py-2.5 rounded-xl bg-[#059669] hover:bg-[#047857] text-white font-bold text-xs sm:text-sm shadow-sm transition-all cursor-pointer"
                    >
                      Continuer vers lieu et moment →
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: Choisir lieu et moment */}
              {currentStep === 2 && (
                <motion.div
                  key="step-2"
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  className="space-y-5"
                >
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold font-display text-[#0D1B3E] mb-1">
                      Étape 2 : lieu d'intervention et date souhaitée
                    </h3>
                    <p className="text-xs text-[#334155]">
                      Définissez vos préférences de cadre de consultation et d'horaire :
                    </p>
                  </div>

                  {/* Lieu selector */}
                  <div>
                    <label className="block text-xs font-bold text-[#0D1B3E] mb-2">
                      Lieu de la consultation :
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {[
                        { id: 'Cabinet', label: 'Au cabinet (Riviera 3)', desc: 'Cadre calme et intime', icon: <Building className="w-4 h-4" /> },
                        { id: 'Entreprise', label: 'En entreprise', desc: 'Gestion du personnel / stress', icon: <Briefcase className="w-4 h-4" /> },
                        { id: 'En privé', label: 'En privé / domicile', desc: 'Déplacement adapté', icon: <Home className="w-4 h-4" /> }
                      ].map((item) => (
                        <button
                          type="button"
                          key={item.id}
                          onClick={() => setSelectedLocation(item.id as any)}
                          className={`p-3 rounded-2xl border-2 text-left transition-all cursor-pointer ${selectedLocation === item.id
                            ? 'border-[#059669] bg-emerald-50 text-[#0D1B3E] font-bold'
                            : 'border-emerald-100 bg-white hover:bg-emerald-50 text-[#334155]'
                            }`}
                        >
                          <div className="flex items-center gap-1.5 mb-1 text-[#059669]">
                            {item.icon}
                            <span className="text-xs font-bold">{item.label}</span>
                          </div>
                          <span className="text-[10px] text-[#334155]">{item.desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Date & Créneau */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0D1B3E] mb-1">
                        Date souhaitée :
                      </label>
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-emerald-200 bg-white text-xs sm:text-sm font-semibold text-[#0D1B3E] focus:outline-none focus:border-[#059669]"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0D1B3E] mb-1">
                        Créneau horaire :
                      </label>
                      <select
                        value={selectedSlot}
                        onChange={(e) => setSelectedSlot(e.target.value as any)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-emerald-200 bg-white text-xs sm:text-sm font-semibold text-[#0D1B3E] focus:outline-none focus:border-[#059669]"
                      >
                        <option value="Matin (08h - 12h)">Matin (08h00 – 12h00)</option>
                        <option value="Après-midi (14h - 17h)">Après-midi (14h00 – 17h00)</option>
                        <option value="Fin de journée (17h - 19h)">Fin de journée (17h00 – 19h00)</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-3 flex justify-between">
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="px-4 py-2 rounded-xl border border-emerald-300 text-[#334155] font-bold text-xs hover:bg-emerald-50 cursor-pointer"
                    >
                      ← Retour
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="px-6 py-2.5 rounded-xl bg-[#059669] hover:bg-[#047857] text-white font-bold text-xs sm:text-sm shadow-sm cursor-pointer"
                    >
                      Vos coordonnées →
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: Coordonnées */}
              {currentStep === 3 && (
                <motion.div
                  key="step-3"
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  className="space-y-4"
                >
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold font-display text-[#0D1B3E] mb-1">
                      Étape 3 : vos coordonnées pour confirmation
                    </h3>
                    <p className="text-xs text-[#334155]">
                      Aucun détail médical confidentiel n'est exigé ici :
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-bold text-[#0D1B3E] mb-1">
                        Nom et prénom *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="text"
                          required
                          placeholder="Ex: Kouamé Sarah"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-emerald-200 bg-white text-xs sm:text-sm font-semibold text-[#0D1B3E] focus:outline-none focus:border-[#059669]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0D1B3E] mb-1">
                        Téléphone / WhatsApp *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="tel"
                          required
                          placeholder="+225 07 ... ou 05 ..."
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-emerald-200 bg-white text-xs sm:text-sm font-semibold text-[#0D1B3E] focus:outline-none focus:border-[#059669]"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0D1B3E] mb-1">
                      Motif ou précision facultative
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Ex: Première consultation pour mon fils de 8 ans..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full p-3 rounded-xl border border-emerald-200 bg-white text-xs text-[#0D1B3E] focus:outline-none focus:border-[#059669]"
                    />
                  </div>

                  <div className="p-2.5 rounded-xl bg-emerald-50 text-[#059669] text-[11px] font-semibold flex items-center gap-2">
                    <Sparkles className="w-4 h-4 shrink-0 text-[#8EE061]" />
                    <span>Vos données restent strictement confidentielles au secrétariat du cabinet.</span>
                  </div>

                  <div className="pt-3 flex justify-between items-center">
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="px-4 py-2 rounded-xl border border-emerald-300 text-[#334155] font-bold text-xs hover:bg-emerald-50 cursor-pointer"
                    >
                      ← Retour
                    </button>

                    <button
                      type="submit"
                      disabled={!fullName || !phone}
                      className="flex items-center gap-1.5 px-6 py-2.5 rounded-xl bg-[#059669] hover:bg-[#047857] text-white font-bold text-xs sm:text-sm shadow-sm transition-all cursor-pointer disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" />
                      <span>Envoyer ma demande de rendez-vous</span>
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 4: Confirmation */}
              {currentStep === 4 && isSubmitted && (
                <motion.div
                  key="step-4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-4 space-y-4"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-[#059669] flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>

                  <div className="max-w-md mx-auto">
                    <h3 className="text-xl font-bold font-display text-[#0D1B3E]">
                      Demande bien enregistrée !
                    </h3>
                    <p className="text-xs text-[#334155] mt-1 leading-relaxed">
                      Merci <strong>{fullName}</strong>. Votre demande pour « <em>{selectedPrestation}</em> » le <strong>{selectedDate}</strong> ({selectedSlot}) a été transmise au <strong>Dr. KONE Sionfolo Mohamed</strong>.
                    </p>
                  </div>

                  <div className="max-w-md mx-auto p-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-left space-y-1">
                    <div className="text-[#0D1B3E] font-bold text-xs mb-1 border-b border-emerald-200 pb-0.5">
                      Récapitulatif :
                    </div>
                    <div><strong>Lieu :</strong> {selectedLocation} (Cocody Riviera 3)</div>
                    <div><strong>Téléphone :</strong> {phone}</div>
                    <div><strong>Délai de rappel :</strong> Moins de 24h ouvrées</div>
                  </div>

                  <div className="pt-2 max-w-md mx-auto space-y-2">
                    <a
                      href={generateWhatsAppConfirmationLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Accélérer la validation sur WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setCurrentStep(1);
                        setFullName('');
                        setPhone('');
                        setNotes('');
                      }}
                      className="text-xs font-semibold text-[#059669] hover:underline cursor-pointer"
                    >
                      Programmer un autre rendez-vous
                    </button>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </form>

        </div>

      </div>
    </section>
  );
};

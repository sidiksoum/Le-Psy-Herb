import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Users, MapPin, ShieldCheck, Phone, MessageCircle, Award, CheckCircle } from 'lucide-react';
import { CABINET_INFO } from '../data/psyHerbData';
import { DecorativeMotifs } from './DecorativeMotifs';

export const CabinetSection: React.FC = () => {
  return (
    <section id="cabinet" className="py-12 sm:py-16 bg-transparent relative overflow-hidden">
      {/* Motifs botaniques & santé (Feuilles, Coeur, Lotus, Psi) */}
      <DecorativeMotifs />

      {/* Decorative subtle ambient circle */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white text-[#059669] mb-3 shadow-sm border border-emerald-200">
            <Award className="w-3.5 h-3.5 text-[#059669]" />
            <span>Cabinet d'expertise psychologique</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-[#0D1B3E] tracking-tight">
            Le cabinet : un visage qui rassure
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#1E293B] font-medium leading-relaxed">
            Un cadre de consultation confidentiel, chaleureux et rigoureusement encadré par la déontologie clinique à Cocody, Riviera 3.
          </p>
        </div>

        {/* Doctor Presentation Card & Credentials */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Left Column: Doctor Profile Visual & Credentials */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <div className="rounded-3xl p-6 sm:p-7 bg-white/95 backdrop-blur-md border border-white/80 shadow-soft-md text-center">

              {/* Doctor Avatar */}
              <div className="relative mx-auto w-32 h-32 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-tr from-[#059669] via-[#8EE061] to-[#5ECFA7] shadow-sm mb-4">
                <div className="w-full h-full rounded-full overflow-hidden bg-white">
                  <img
                    src="https://img.magnific.com/vecteurs-premium/icone-visage-medecin-sexe-masculin-afro-americain-noir-stethoscope_768258-728.jpg"
                    alt="Dr. KONE Sionfolo Mohamed"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 right-1 w-8 h-8 rounded-full bg-[#059669] text-white flex items-center justify-center font-bold text-sm shadow-sm border-2 border-white">
                  Ψ
                </div>
              </div>

              {/* Identity & Titles */}
              <div className="space-y-1">
                <h3 className="text-xl font-bold font-display text-[#0D1B3E]">
                  {CABINET_INFO.praticien.nom}
                </h3>
                <p className="text-xs font-semibold text-[#059669] leading-snug">
                  {CABINET_INFO.praticien.titres}
                </p>
                <div className="pt-1 flex items-center justify-center gap-1.5 text-xs text-[#1E293B] font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#059669]" />
                  <span>{CABINET_INFO.adresse}</span>
                </div>
              </div>

              {/* Bio summary */}
              <p className="mt-4 text-xs text-[#334155] leading-relaxed italic bg-emerald-50/60 p-3.5 rounded-2xl border border-emerald-100">
                « Accueillir chaque patient sans aucun jugement, dénouer la souffrance psychique et restaurer le bien-être durable de la personne et de la famille. »
              </p>

              {/* Contact actions on card */}
              <div className="mt-5 flex gap-2">
                <a
                  href={`tel:${CABINET_INFO.telephoneRaw}`}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-[#0D1B3E] font-bold text-xs border border-emerald-200 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#059669]" />
                  <span>Appeler</span>
                </a>
                <a
                  href={CABINET_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#059669] hover:bg-[#047857] text-white font-bold text-xs shadow-sm transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>

            </div>
          </motion.div>

          {/* Right Column: 4 Pillars from Slide 11 */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">

            {/* Pillar 1: Parcours & Approche */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-5 rounded-3xl bg-white/95 backdrop-blur-md border border-white/80 shadow-soft-sm hover:shadow-soft-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-[#059669] flex items-center justify-center mb-2.5">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold font-display text-[#0D1B3E] mb-1">
                  Présentation du psychologue
                </h4>
                <p className="text-xs text-[#334155] leading-relaxed">
                  Praticien-chercheur, psychopathologue et psychothérapeute. Approche intégrative alliant rigueur scientifique et écoute active.
                </p>
              </div>
              <div className="mt-3 pt-2.5 border-t border-emerald-100 flex items-center gap-1 text-[11px] font-bold text-[#059669]">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Expérience clinique solide</span>
              </div>
            </motion.div>

            {/* Pillar 2: Public Accueilli */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-5 rounded-3xl bg-white/95 backdrop-blur-md border border-white/80 shadow-soft-sm hover:shadow-soft-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-[#059669] flex items-center justify-center mb-2.5">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold font-display text-[#0D1B3E] mb-1">
                  Public accueilli
                </h4>
                <p className="text-xs text-[#334155] leading-relaxed">
                  Prise en charge de l'enfant (retards, colères, scolarité), de l'adolescent, de l'adulte, du couple et des équipes en entreprise.
                </p>
              </div>
              <div className="mt-3 pt-2.5 border-t border-emerald-100 flex items-center gap-1 text-[11px] font-bold text-[#059669]">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Enfant, adulte, famille</span>
              </div>
            </motion.div>

            {/* Pillar 3: Lieux d'Intervention */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-5 rounded-3xl bg-white/95 backdrop-blur-md border border-white/80 shadow-soft-sm hover:shadow-soft-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-[#059669] flex items-center justify-center mb-2.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold font-display text-[#0D1B3E] mb-1">
                  Lieux d'intervention
                </h4>
                <p className="text-xs text-[#334155] leading-relaxed">
                  Au cabinet à Cocody Riviera 3, sur site en entreprise pour la gestion de crise, ou consultations privées à domicile.
                </p>
              </div>
              <div className="mt-3 pt-2.5 border-t border-emerald-100 flex items-center gap-1 text-[11px] font-bold text-[#059669]">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Cabinet, entreprise et privé</span>
              </div>
            </motion.div>

            {/* Pillar 4: Confidentialité & Éthique */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-5 rounded-3xl bg-white/95 backdrop-blur-md border border-white/80 shadow-soft-sm hover:shadow-soft-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-[#059669] flex items-center justify-center mb-2.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold font-display text-[#0D1B3E] mb-1">
                  Confidentialité et éthique
                </h4>
                <p className="text-xs text-[#334155] leading-relaxed">
                  Engagements stricts. secret professionnel absolu. Aucun motif ni détail médical n'est transmis à des tiers.
                </p>
              </div>
              <div className="mt-3 pt-2.5 border-t border-emerald-100 flex items-center gap-1 text-[11px] font-bold text-[#059669]">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Déontologie respectée</span>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};

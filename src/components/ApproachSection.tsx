import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Heart, Stethoscope, Sparkles, CheckCircle2 } from 'lucide-react';

export const ApproachSection: React.FC = () => {
  const pillars = [
    {
      icon: <Brain className="w-6 h-6 text-sage-600" />,
      title: "Régulation du Système Parasympathique",
      description: "Le nerf vague est le frein naturel de l'anxiété. Nos protocoles de respiration guidée et de pleine conscience stimulent l'acétylcholine pour ralentir le rythme cardiaque et désactiver le mode alerte.",
      tag: "Neuro-Anatomie"
    },
    {
      icon: <Sparkles className="w-6 h-6 text-lavender-600" />,
      title: "Phytothérapie Intégrative & Molécules Actives",
      description: "Nous n'utilisons que des extraits botaniques titrés dont les molécules (withanolides, rosavines, flavonoïdes) franchissent la barrière hémato-encéphalique pour soutenir la neurotransmission.",
      tag: "Biologie Cellulaire"
    },
    {
      icon: <Heart className="w-6 h-6 text-amber-600" />,
      title: "Approche Psycho-Corporelle Globale",
      description: "Les tensions psychiques s'incarnent dans la matière corporelle. Réduire le spasme viscéral et détendre la cage thoracique est indispensable pour dénouer les pensées anxieuses récurrentes.",
      tag: "Psychosomatique"
    }
  ];

  return (
    <section id="approach" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading and Context */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-sage-100 text-sage-800">
              <Stethoscope className="w-4 h-4 text-sage-600" />
              <span>Rigueur Scientifique & Bienveillance</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold font-display text-mind-dark tracking-tight leading-tight">
              Une passerelle entre la science de l'esprit et la sagesse végétale.
            </h2>

            <p className="text-base text-mind-muted font-sans leading-relaxed">
              La santé mentale moderne souffre souvent d'une approche fragmentée. PsyHerb réconcilie la psychologie clinique fondée sur les preuves (TCC, pleine conscience, cohérence cardiaque) avec l'herboristerie médicinale de précision.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-sage-600 shrink-0 mt-0.5" />
                <p className="text-sm text-mind-charcoal">
                  <strong>Sans accoutumance :</strong> Des alternatives naturelles respectant vos récepteurs synaptiques sans phénomène de rebond.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-sage-600 shrink-0 mt-0.5" />
                <p className="text-sm text-mind-charcoal">
                  <strong>Respect du rythme circadien :</strong> Dynamisation matinale et sédation vespérale calquées sur la biologie humaine.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-sage-600 shrink-0 mt-0.5" />
                <p className="text-sm text-mind-charcoal">
                  <strong>Application PWA disponible partout :</strong> Fonctionne même en mode avion, dans la nature ou sans réseau.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Pillars Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 gap-6">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="glass-panel p-6 sm:p-7 rounded-3xl border border-sage-200/70 shadow-soft-sm hover:shadow-soft-md transition-all duration-300 flex flex-col sm:flex-row gap-5 items-start"
              >
                <div className="p-3.5 rounded-2xl bg-white shadow-soft-sm border border-sage-100 shrink-0">
                  {pillar.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[10px] font-bold tracking-wider uppercase text-sage-700 bg-sage-50 px-2.5 py-0.5 rounded-md border border-sage-200/50">
                      {pillar.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold font-display text-mind-dark mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-mind-muted leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

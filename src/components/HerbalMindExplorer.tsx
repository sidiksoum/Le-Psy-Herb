import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HERBS_AND_PRACTICES } from '../data/herbsAndPractices';
import { Category, HerbPractice } from '../types';
import { Leaf, Sparkles, Brain, Clock, ChevronRight, Info } from 'lucide-react';

export const HerbalMindExplorer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Category>('all');
  const [selectedHerb, setSelectedHerb] = useState<HerbPractice | null>(null);

  const filteredHerbs = activeTab === 'all' 
    ? HERBS_AND_PRACTICES 
    : HERBS_AND_PRACTICES.filter(herb => herb.category === activeTab);

  const tabs: { id: Category; label: string; icon: string }[] = [
    { id: 'all', label: 'Toutes les Solutions', icon: '✨' },
    { id: 'stress', label: 'Stress & Cortisol', icon: '🌿' },
    { id: 'sommeil', label: 'Sommeil & Ruminations', icon: '🌙' },
    { id: 'focus', label: 'Clarté & Anti-Burnout', icon: '⚡' },
    { id: 'humeur', label: 'Équilibre Émotionnel', icon: '🌸' },
  ];

  return (
    <section id="herbs" className="py-20 bg-warmth-50/70 border-t border-b border-sage-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-lavender-100 text-lavender-800 mb-3 shadow-soft-sm">
            <Leaf className="w-3.5 h-3.5 text-lavender-600" />
            <span>Pharmacognosie & Neuro-Phytothérapie</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-mind-dark tracking-tight">
            L'Herbier Thérapeutique des États Mentaux
          </h2>
          <p className="mt-3 text-base text-mind-muted font-sans leading-relaxed">
            Chaque plante est sélectionnée selon son profil moléculaire (alcaloïdes, flavonoïdes, terpènes) pour soutenir les neurotransmetteurs clés : GABA, sérotonine et dopamine.
          </p>
        </div>

        {/* Category Tabs Filter */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {tabs.map((tab) => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-sage-700 text-white shadow-soft-md scale-105'
                    : 'bg-white hover:bg-sage-50 text-mind-charcoal border border-sage-100'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Cards Grid with Framer Motion AnimatePresence */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredHerbs.map((herb) => (
              <motion.div
                key={herb.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="glass-panel rounded-3xl p-6 sm:p-7 border border-sage-200/80 shadow-soft-sm hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Header: Category & Read Time */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase bg-sage-100 text-sage-800">
                      {herb.badge}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-medium text-mind-muted">
                      <Clock className="w-3 h-3" />
                      {herb.readTime}
                    </span>
                  </div>

                  {/* Title & Latin Name */}
                  <h3 className="text-xl font-bold font-display text-mind-dark group-hover:text-sage-700 transition-colors">
                    {herb.name}
                  </h3>
                  <p className="text-xs font-serif italic text-sage-600 mb-3">
                    {herb.latinName}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-mind-muted leading-relaxed line-clamp-3 mb-4">
                    {herb.description}
                  </p>

                  {/* Scientific Psychological Impact Highlight */}
                  <div className="p-3.5 rounded-2xl bg-sage-50/70 border border-sage-100 text-xs mb-4">
                    <div className="flex items-center gap-1.5 font-bold text-sage-800 mb-1">
                      <Brain className="w-3.5 h-3.5 text-sage-600" />
                      <span>Impact Neuro-Psychologique</span>
                    </div>
                    <p className="text-mind-charcoal text-[12px] leading-snug">
                      {herb.psychologicalImpact}
                    </p>
                  </div>

                  {/* Benefits bullet points */}
                  <div className="space-y-1.5 mb-5">
                    {herb.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-medium text-mind-charcoal">
                        <span className="w-1.5 h-1.5 rounded-full bg-sage-500" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer action button */}
                <div className="pt-4 border-t border-sage-100/80 flex items-center justify-between">
                  <span className="text-[11px] text-mind-muted">Usage clinique documenté</span>
                  <button
                    onClick={() => setSelectedHerb(herb)}
                    className="flex items-center gap-1 text-xs font-bold text-sage-700 hover:text-sage-900 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Posologie & Fiche</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal Detail for Selected Herb */}
        <AnimatePresence>
          {selectedHerb && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-mind-dark/40 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-soft-lg border border-sage-200 relative max-h-[90vh] overflow-y-auto"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-sage-100 text-sage-800">
                      {selectedHerb.categoryLabel}
                    </span>
                    <h3 className="text-2xl font-bold font-display text-mind-dark mt-2">
                      {selectedHerb.name}
                    </h3>
                    <p className="text-sm italic font-serif text-sage-600">
                      {selectedHerb.latinName}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedHerb(null)}
                    className="p-2 rounded-xl text-mind-muted hover:bg-sage-50 text-xl font-bold"
                  >
                    ✕
                  </button>
                </div>

                <div className="mt-6 space-y-4 text-sm text-mind-charcoal">
                  <div>
                    <h4 className="font-semibold text-mind-dark mb-1">Description clinique :</h4>
                    <p className="text-mind-muted leading-relaxed">{selectedHerb.description}</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-lavender-50 border border-lavender-100">
                    <h4 className="font-bold text-lavender-900 flex items-center gap-1.5 mb-1 text-xs uppercase tracking-wide">
                      <Brain className="w-4 h-4 text-lavender-600" />
                      Mécanisme d'action neurochimique
                    </h4>
                    <p className="text-xs text-lavender-950 leading-relaxed">
                      {selectedHerb.psychologicalImpact}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-warmth-50 border border-warmth-200">
                    <h4 className="font-bold text-amber-900 flex items-center gap-1.5 mb-1 text-xs uppercase tracking-wide">
                      <Sparkles className="w-4 h-4 text-amber-600" />
                      Conseils de prise & Posologie
                    </h4>
                    <p className="text-xs text-amber-950 leading-relaxed">
                      {selectedHerb.recommendedUse}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 p-3 rounded-xl bg-sage-50 text-[11px] text-sage-800">
                    <Info className="w-4 h-4 shrink-0 text-sage-600" />
                    <span>Demandez toujours l'avis de votre médecin ou pharmacien en cas de traitement en cours.</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-sage-100 flex justify-end">
                  <button
                    onClick={() => setSelectedHerb(null)}
                    className="px-5 py-2.5 rounded-xl bg-sage-700 hover:bg-sage-800 text-white font-semibold text-xs transition-colors"
                  >
                    Fermer la fiche
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

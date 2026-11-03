import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Brain, Leaf, HeartPulse, ArrowDown, WifiOff, Smartphone } from 'lucide-react';

interface HeroProps {
  onStartBreathing: () => void;
  onExploreHerbs: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartBreathing, onExploreHerbs }) => {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      {/* Background soft ambient blobs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none -z-10">
        <div className="absolute top-0 right-10 w-96 h-96 bg-sage-200/50 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-36 left-10 w-80 h-80 bg-lavender-200/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 left-1/3 w-72 h-72 bg-warmth-200/60 rounded-full blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Core Medical/Psychological Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 text-center lg:text-left space-y-6"
          >
            {/* Pill Tag */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-sage-100/90 text-sage-900 border border-sage-200/80 shadow-soft-sm"
            >
              <Sparkles className="w-4 h-4 text-sage-600" />
              <span>Neurosciences Cliniques & Phytothérapie Médicale</span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display text-mind-dark tracking-tight leading-[1.12]">
              L'alliance de la <span className="text-sage-700 underline decoration-sage-300 decoration-wavy decoration-2">psychologie</span> et des vertus du vivant.
            </h1>

            {/* Clarified Subtitle for Health & Psychology */}
            <p className="text-lg sm:text-xl text-mind-muted font-sans font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Régulez l'anxiété, libérez le sommeil et restaurez votre clarté mentale grâce à des protocoles psycho-corporels scientifiquement documentés et aux bienfaits ciblés des plantes médicinales.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <motion.button
                onClick={onStartBreathing}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-sage-700 hover:bg-sage-800 text-white font-semibold text-base shadow-soft-lg hover:shadow-glow-sage transition-all"
              >
                <HeartPulse className="w-5 h-5 text-sage-200" />
                <span>Apaiser mon esprit maintenant</span>
              </motion.button>

              <motion.button
                onClick={onExploreHerbs}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-white hover:bg-warmth-50 text-mind-dark font-semibold text-base border border-sage-200 shadow-soft-sm transition-all"
              >
                <Leaf className="w-5 h-5 text-sage-600" />
                <span>Explorer l'herbier thérapeutique</span>
              </motion.button>
            </div>

            {/* Reassuring Pillars / Accessibility Badges */}
            <div className="pt-6 grid grid-cols-3 gap-3 sm:gap-4 max-w-lg mx-auto lg:mx-0 border-t border-sage-100 text-left">
              <div className="p-2 sm:p-3 rounded-xl bg-white/70 border border-sage-100/80 shadow-soft-sm">
                <div className="flex items-center gap-1.5 text-sage-700 font-semibold text-xs sm:text-sm">
                  <Brain className="w-4 h-4" />
                  <span>Axe Cerveau</span>
                </div>
                <p className="text-[11px] text-mind-muted mt-1 leading-tight">
                  Approche cognitive & somatique
                </p>
              </div>

              <div className="p-2 sm:p-3 rounded-xl bg-white/70 border border-sage-100/80 shadow-soft-sm">
                <div className="flex items-center gap-1.5 text-sage-700 font-semibold text-xs sm:text-sm">
                  <Leaf className="w-4 h-4" />
                  <span>Herboristerie</span>
                </div>
                <p className="text-[11px] text-mind-muted mt-1 leading-tight">
                  Extraits titrés & adaptogènes
                </p>
              </div>

              <div className="p-2 sm:p-3 rounded-xl bg-white/70 border border-sage-100/80 shadow-soft-sm">
                <div className="flex items-center gap-1.5 text-lavender-700 font-semibold text-xs sm:text-sm">
                  <WifiOff className="w-4 h-4" />
                  <span>100% Hors-Ligne</span>
                </div>
                <p className="text-[11px] text-mind-muted mt-1 leading-tight">
                  PWA prête sur mobile & PC
                </p>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Visual Interactive Showcase Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Visual Glass Container */}
            <div className="relative mx-auto max-w-md rounded-3xl p-6 glass-panel border border-sage-200/90 shadow-soft-lg">

              {/* Header card info */}
              <div className="flex items-center justify-between pb-4 border-b border-sage-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sage-500/15 flex items-center justify-center text-sage-700">
                    <Brain className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-mind-dark">Indice de sérénité</h3>
                    <p className="text-xs text-mind-muted">Synchronisation vago-sympathique</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-sage-100 text-sage-800">
                  Optimal • 88%
                </span>
              </div>

              {/* Central Serenity Graphic representation */}
              <div className="py-6 space-y-4">
                <div className="bg-sage-50/60 rounded-2xl p-4 border border-sage-100">
                  <div className="flex items-center justify-between text-xs text-mind-muted mb-2 font-medium">
                    <span>Réduction du cortisol (stress)</span>
                    <span className="text-sage-700 font-bold">- 34%</span>
                  </div>
                  <div className="w-full bg-sage-200/50 h-2 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '66%' }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="bg-gradient-to-r from-sage-500 to-sage-600 h-full rounded-full"
                    />
                  </div>
                </div>

                <div className="bg-lavender-50/60 rounded-2xl p-4 border border-lavender-100">
                  <div className="flex items-center justify-between text-xs text-mind-muted mb-2 font-medium">
                    <span>Ondes alpha et calme mental</span>
                    <span className="text-lavender-700 font-bold">+ 48%</span>
                  </div>
                  <div className="w-full bg-lavender-200/50 h-2 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '82%' }}
                      transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                      className="bg-gradient-to-r from-lavender-500 to-lavender-600 h-full rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* Quotation card */}
              <div className="p-4 rounded-2xl bg-warmth-50 border border-warmth-200/80">
                <p className="text-xs italic text-mind-charcoal leading-relaxed font-serif">
                  « Le corps et l'esprit ne sont pas deux entités distinctes : apaiser les tensions cellulaires libère l'espace de la pensée. »
                </p>
                <p className="text-[10px] font-semibold text-mind-muted mt-2 uppercase tracking-wider">
                  Recherche en Psycho-neuro-immunologie
                </p>
              </div>

            </div>

            {/* Floating micro-badge top right */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-2 sm:-right-4 glass-panel px-3.5 py-2 rounded-2xl shadow-soft-md border border-sage-200 flex items-center gap-2"
            >
              <Smartphone className="w-4 h-4 text-sage-600" />
              <span className="text-xs font-semibold text-mind-dark">App PWA intuitive</span>
            </motion.div>

          </motion.div>

        </div>
      </div>

      {/* Down anchor indicator */}
      <div className="flex justify-center mt-8">
        <a
          href="#breathing"
          aria-label="Descendre vers l'exercice de cohérence"
          className="p-2.5 rounded-full bg-white/90 border border-sage-100 text-mind-muted hover:text-sage-700 shadow-soft-sm transition-transform hover:translate-y-1"
        >
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};


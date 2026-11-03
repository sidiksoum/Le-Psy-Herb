import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, RotateCcw, Heart, ShieldCheck, Sparkles } from 'lucide-react';
import { DecorativeMotifs } from './DecorativeMotifs';

export const BreathingWidget: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [phase, setPhase] = useState<'inspire' | 'hold' | 'expire'>('inspire');
  const [cycleCount, setCycleCount] = useState<number>(0);
  const [secondsLeftInPhase, setSecondsLeftInPhase] = useState<number>(5);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive) {
      interval = setInterval(() => {
        setSecondsLeftInPhase((prev) => {
          if (prev <= 1) {
            if (phase === 'inspire') {
              setPhase('expire');
              return 5;
            } else {
              setPhase('inspire');
              setCycleCount((c) => c + 1);
              return 5;
            }
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (interval) clearInterval(interval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, phase]);

  const handleReset = () => {
    setIsActive(false);
    setPhase('inspire');
    setCycleCount(0);
    setSecondsLeftInPhase(5);
  };

  return (
    <section id="breathing" className="py-12 sm:py-16 bg-transparent relative overflow-hidden">
      {/* Motifs botaniques & santé (Feuilles, Coeur, Lotus, Psi) */}
      <DecorativeMotifs />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">

        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white text-[#059669] mb-3 shadow-sm border border-emerald-200">
            <Heart className="w-3.5 h-3.5 text-[#059669] fill-[#059669]" />
            <span>Outil thérapeutique psycho-corporel</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-[#0D1B3E] tracking-tight">
            Cohérence cardiaque et régulation vague
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#1E293B] font-medium leading-relaxed">
            5 secondes d'inspiration, 5 secondes d'expiration. En 3 minutes, votre rythme cardiaque s'harmonise et votre stress diminue naturellement.
          </p>
        </div>

        {/* Breathing Card Interactive UI */}
        <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-soft-md border border-white/80 relative overflow-hidden">
          <div className="flex flex-col items-center justify-center">

            {/* Animated Orb Container */}
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 flex items-center justify-center my-3">
              <motion.div
                animate={{
                  scale: isActive ? (phase === 'inspire' ? [1, 1.35] : [1.35, 1]) : 1,
                  opacity: isActive ? (phase === 'inspire' ? [0.3, 0.6] : [0.6, 0.3]) : 0.2,
                }}
                transition={{
                  duration: 5,
                  ease: "easeInOut",
                  repeat: 0,
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-[#8EE061] via-[#72D984] to-[#5ECFA7] blur-lg"
              />

              <motion.div
                animate={{
                  scale: isActive ? (phase === 'inspire' ? 1.25 : 0.9) : 1,
                }}
                transition={{
                  duration: 5,
                  ease: "easeInOut",
                }}
                className={`relative w-40 h-40 sm:w-48 sm:h-48 rounded-full flex flex-col items-center justify-center text-center p-4 transition-colors duration-1000 shadow-soft-sm ${phase === 'inspire'
                    ? 'bg-gradient-to-br from-[#059669] to-[#047857] text-white shadow-glow-action'
                    : 'bg-gradient-to-br from-[#13284C] to-[#0D1B3E] text-white'
                  }`}
              >
                <Sparkles className="w-4 h-4 text-[#8EE061] mb-1 opacity-90" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={phase + (isActive ? '-active' : '-idle')}
                    initial={{ opacity: 0, y: 3 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -3 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center"
                  >
                    <span className="text-base sm:text-lg font-bold font-display">
                      {!isActive ? 'Prêt ?' : (phase === 'inspire' ? 'Inspirez' : 'Expirez')}
                    </span>
                    <span className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-0.5">
                      {isActive ? `${secondsLeftInPhase}s` : '5s / 5s'}
                    </span>
                  </motion.div>
                </AnimatePresence>

                <p className="text-[10px] font-medium text-emerald-100 mt-1">
                  {phase === 'inspire' ? 'Ouvrez le thorax' : 'Relâchez les épaules'}
                </p>
              </motion.div>
            </div>

            {/* Instruction feedback */}
            <div className="text-center mt-2 mb-5">
              <p className="text-xs sm:text-sm font-semibold text-[#0D1B3E]">
                {isActive
                  ? (phase === 'inspire' ? 'Laissez l\'air emplir vos poumons calmement par le nez...' : 'Soufflez doucement et lentement par la bouche...')
                  : 'Cliquez sur démarrer pour synchroniser votre système nerveux.'}
              </p>
              <div className="flex items-center justify-center gap-3 mt-1.5 text-xs text-[#334155] font-medium">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#059669]"></span>
                  Cycles : <strong className="text-[#0D1B3E]">{cycleCount}</strong>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#059669]" />
                  Effet relaxant documenté
                </span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsActive(!isActive)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-sm ${isActive
                    ? 'bg-emerald-100 text-[#0D1B3E] hover:bg-emerald-200 border border-emerald-300'
                    : 'bg-[#059669] hover:bg-[#047857] text-white'
                  }`}
              >
                {isActive ? (
                  <>
                    <Pause className="w-4 h-4" />
                    <span>Mettre en pause</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current" />
                    <span>Démarrer l'exercice</span>
                  </>
                )}
              </button>

              <button
                onClick={handleReset}
                className="p-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-[#0D1B3E] transition-colors border border-emerald-200"
                title="Réinitialiser"
                aria-label="Réinitialiser"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

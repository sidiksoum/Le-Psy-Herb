import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MOOD_OPTIONS } from '../data/herbsAndPractices';
import { MoodEntry } from '../types';
import { X, Sparkles, HeartHandshake, CheckCircle } from 'lucide-react';

interface MoodTrackerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MoodTrackerModal: React.FC<MoodTrackerModalProps> = ({ isOpen, onClose }) => {
  const [selectedMood, setSelectedMood] = useState<MoodEntry | null>(null);
  const [saved, setSaved] = useState<boolean>(false);

  const handleSelect = (mood: MoodEntry) => {
    setSelectedMood(mood);
    setSaved(false);
  };

  const handleConfirm = () => {
    setSaved(true);
    setTimeout(() => {
      onClose();
      setSaved(false);
      setSelectedMood(null);
    }, 1800);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-mind-dark/50 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-soft-lg border border-sage-200 relative overflow-hidden"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-mind-muted hover:bg-sage-50 transition-colors"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-2xl bg-sage-100 text-sage-700 flex items-center justify-center mx-auto mb-3 shadow-soft-sm">
            <HeartHandshake className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold font-display text-mind-dark">
            Bilan Psycho-Émotionnel
          </h3>
          <p className="text-xs sm:text-sm text-mind-muted mt-1">
            Comment vous sentez-vous ici et maintenant ? L'identification consciente de l'émotion amorce déjà sa régulation.
          </p>
        </div>

        {/* Emotion selector options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
          {MOOD_OPTIONS.map((item) => {
            const isChosen = selectedMood?.mood === item.mood;
            return (
              <button
                key={item.mood}
                onClick={() => handleSelect(item)}
                className={`p-3.5 rounded-2xl text-left border transition-all duration-200 flex items-center gap-3 cursor-pointer ${
                  isChosen
                    ? 'border-sage-600 bg-sage-50/90 shadow-soft-sm ring-2 ring-sage-500/20'
                    : 'border-sage-200/80 bg-white hover:bg-sage-50/50'
                }`}
              >
                <span className="text-2xl">{item.emoji}</span>
                <div>
                  <div className="text-xs font-bold text-mind-dark">{item.label}</div>
                  <div className="text-[10px] text-mind-muted font-medium">Auto-évaluation</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic empathetic advice */}
        <AnimatePresence mode="wait">
          {selectedMood && (
            <motion.div
              key={selectedMood.mood}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="p-4 rounded-2xl bg-warmth-50 border border-warmth-200/80 mb-6 text-xs"
            >
              <div className="flex items-center gap-2 font-bold text-mind-dark mb-1">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>Recommandation personnalisée PsyHerb :</span>
              </div>
              <p className="text-mind-charcoal leading-relaxed">
                {selectedMood.advice}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action Button */}
        {saved ? (
          <div className="p-3.5 rounded-2xl bg-sage-600 text-white flex items-center justify-center gap-2 text-sm font-semibold shadow-soft-sm">
            <CheckCircle className="w-5 h-5 text-white" />
            <span>État émotionnel enregistré avec bienveillance !</span>
          </div>
        ) : (
          <button
            onClick={handleConfirm}
            disabled={!selectedMood}
            className={`w-full py-3.5 rounded-2xl font-semibold text-sm transition-all shadow-soft-md ${
              selectedMood
                ? 'bg-sage-700 hover:bg-sage-800 text-white cursor-pointer shadow-glow-sage'
                : 'bg-sage-100 text-mind-muted cursor-not-allowed opacity-60'
            }`}
          >
            {selectedMood ? 'Valider mon bilan du moment' : 'Sélectionnez votre état'}
          </button>
        )}
      </motion.div>
    </div>
  );
};


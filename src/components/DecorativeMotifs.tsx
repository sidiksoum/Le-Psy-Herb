import React from 'react';

interface DecorativeMotifsProps {
  variant?: 'default' | 'hero' | 'minimal' | 'card';
  className?: string;
}

/**
 * Motifs décoratifs combinant Feuilles, Plantes, Coeur et Fleurs de sérénité
 * en rapport avec la psychologie et la santé (Le Psy Herb).
 */
export const DecorativeMotifs: React.FC<DecorativeMotifsProps> = ({
  variant = 'default',
  className = '',
}) => {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 ${className}`}>
      
      {/* 01. Feuille botanique supérieure gauche — Inspirée de la carte officielle Dr. KONE */}
      <svg
        className="absolute -top-6 -left-6 w-36 sm:w-48 lg:w-64 h-36 sm:h-48 lg:h-64 text-emerald-800/15 transition-transform duration-700 transform -rotate-12"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Contour de feuille */}
        <path
          d="M30,170 C40,110 90,40 170,30 C160,90 110,160 30,170 Z"
          stroke="currentColor"
          strokeWidth="3"
          fill="rgba(255,255,255,0.06)"
        />
        {/* Nervure centrale */}
        <path
          d="M30,170 C80,125 125,80 170,30"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Nervures secondaires */}
        <path d="M70,135 Q90,120 100,105" stroke="currentColor" strokeWidth="1.8" />
        <path d="M100,110 Q120,95 130,80" stroke="currentColor" strokeWidth="1.8" />
        <path d="M130,80 Q150,65 155,55" stroke="currentColor" strokeWidth="1.8" />
      </svg>

      {/* 02. Feuille botanique supérieure droite — Inspirée de la carte officielle Dr. KONE */}
      <svg
        className="absolute -top-8 -right-8 w-36 sm:w-48 lg:w-64 h-36 sm:h-48 lg:h-64 text-emerald-800/15 transition-transform duration-700 transform rotate-45"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M170,170 C160,110 110,40 30,30 C40,90 90,160 170,170 Z"
          stroke="currentColor"
          strokeWidth="3"
          fill="rgba(255,255,255,0.06)"
        />
        <path
          d="M170,170 C120,125 75,80 30,30"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path d="M130,135 Q110,120 100,105" stroke="currentColor" strokeWidth="1.8" />
        <path d="M100,110 Q80,95 70,80" stroke="currentColor" strokeWidth="1.8" />
      </svg>

      {/* 03. Coeur & Feuille bienveillante (Santé mentale & écoute empathique) */}
      {variant !== 'minimal' && (
        <svg
          className="absolute top-1/3 -right-10 w-44 sm:w-56 lg:w-72 h-44 sm:h-56 lg:h-72 text-emerald-900/12 transform rotate-12"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Forme du coeur */}
          <path
            d="M100,170 C40,120 20,80 35,45 C50,15 85,25 100,55 C115,25 150,15 165,45 C180,80 160,120 100,170 Z"
            stroke="currentColor"
            strokeWidth="2.8"
            fill="rgba(255,255,255,0.04)"
          />
          {/* Pousse de plante à l'intérieur du coeur */}
          <path
            d="M100,140 Q100,80 120,60 Q135,75 100,95"
            stroke="currentColor"
            strokeWidth="2"
            fill="rgba(255,255,255,0.08)"
          />
          <path
            d="M100,110 Q80,95 75,80 Q90,80 100,95"
            stroke="currentColor"
            strokeWidth="2"
            fill="rgba(255,255,255,0.08)"
          />
        </svg>
      )}

      {/* 04. Fleur de Lotus / Sérénité psychologique (Apaisement, résilience & renouveau) */}
      {variant !== 'minimal' && (
        <svg
          className="absolute -bottom-10 -left-10 w-48 sm:w-60 lg:w-80 h-48 sm:h-60 lg:h-80 text-emerald-900/12 transform -rotate-6"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Pétale central */}
          <path
            d="M100,50 C80,90 70,120 100,150 C130,120 120,90 100,50 Z"
            stroke="currentColor"
            strokeWidth="2.5"
            fill="rgba(255,255,255,0.05)"
          />
          {/* Pétales latéraux gauches */}
          <path
            d="M95,85 C65,95 45,115 70,145 C85,130 92,110 95,85 Z"
            stroke="currentColor"
            strokeWidth="2"
            fill="rgba(255,255,255,0.04)"
          />
          <path
            d="M85,115 C55,120 30,135 60,155 C75,148 82,135 85,115 Z"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          {/* Pétales latéraux droits */}
          <path
            d="M105,85 C135,95 155,115 130,145 C115,130 108,110 105,85 Z"
            stroke="currentColor"
            strokeWidth="2"
            fill="rgba(255,255,255,0.04)"
          />
          <path
            d="M115,115 C145,120 170,135 140,155 C125,148 118,135 115,115 Z"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          {/* Base de la fleur */}
          <path
            d="M60,155 Q100,165 140,155"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      )}

      {/* 05. Symbole Psi Psychologique filigrane (Lettre grecque de la psychologie) */}
      <svg
        className="absolute bottom-12 right-12 w-28 sm:w-36 h-28 sm:h-36 text-emerald-900/10 pointer-events-none"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M50,15 L50,85 M25,25 C25,60 75,60 75,25"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Petites feuilles au sommet du Psi */}
        <path d="M50,15 Q40,5 35,12 Q45,18 50,15" stroke="currentColor" strokeWidth="2" fill="rgba(255,255,255,0.08)" />
        <path d="M50,15 Q60,5 65,12 Q55,18 50,15" stroke="currentColor" strokeWidth="2" fill="rgba(255,255,255,0.08)" />
      </svg>

    </div>
  );
};


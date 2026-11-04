import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Calendar, MessageCircle, Sparkles, Shield, ArrowRight, CheckCircle2 } from 'lucide-react';
import { HERO_SLIDES, CABINET_INFO } from '../data/psyHerbData';
import { DecorativeMotifs } from './DecorativeMotifs';

interface HeroCarouselProps {
  onNavigateTo: (page: string) => void;
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({ onNavigateTo }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // High quality natural illustrations
  const slideBgImages = [
    "https://img.magnific.com/photos-premium/triste-patiente-souffrant-sspt-dans-therapie-cruciale-pour-sante-mentale-psychologue-depression-chagrin-apres-echec-vie-jeune-femme-traumatisee-frustree-parlant-psychologue-emotion-clinique_31965-270910.jpg?semt=ais_hybrid&w=740&q=80",
    "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1920&q=85",
    "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=1920&q=85"
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  const slide = HERO_SLIDES[currentSlide];
  const bgImage = slideBgImages[currentSlide];

  return (
    <section
      className="relative overflow-hidden bg-psy-gradient min-h-[500px] sm:min-h-[480px] lg:min-h-[520px] flex items-center justify-center transition-all"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Image: 100% visible, lumineuse, nette et sans voile blanc flou */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.img
            key={`img-${slide.id}`}
            src={bgImage}
            alt="Illustration Le Psy Herb"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>

      {/* Motifs botaniques & santé délicats (Feuilles, Coeur, Lotus, Psi) */}
      <DecorativeMotifs variant="hero" />

      {/* Main Content at z-10 - Directement sur l'image, sans aucun fond flou */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 w-full">
        <div className="relative min-h-[380px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full"
            >

              {/* Left Column: Textes directement sur l'image avec couleurs fortes & ombrage haute lisibilité */}
              <div className="lg:col-span-9 xl:col-span-8 space-y-4 text-center lg:text-left py-2">

                {/* Pill Tag en vert vif & blanc */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black bg-[#059669] text-white shadow-lg border border-emerald-300">
                  <Sparkles className="w-3.5 h-3.5 text-[#8EE061] fill-current" />
                  <span className="tracking-wide">{slide.tag}</span>
                </div>

                {/* Titre principal à contraste fort (navy profond & vert franc) avec halo blanc net */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black font-display text-[#071329] tracking-tight leading-tight [text-shadow:_0_2px_14px_rgba(255,255,255,0.95),_0_1px_3px_rgba(255,255,255,1)]">
                  {slide.title}{' '}
                  <span className="text-[#047857] [text-shadow:_0_2px_14px_rgba(255,255,255,0.95),_0_1px_3px_rgba(255,255,255,1)]">
                    {slide.highlight}
                  </span>
                </h1>

                {/* Sous-titre à fort contraste */}
                <p className="text-sm sm:text-base md:text-lg text-[#071329] font-black leading-relaxed max-w-2xl mx-auto lg:mx-0 [text-shadow:_0_1px_10px_rgba(255,255,255,0.95),_0_1px_2px_rgba(255,255,255,1)]">
                  {slide.subtitle}
                </p>

                {/* Boutons d'action : nets, contrastés et élégants */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                  {/* Button 1: Prendre un rendez-vous */}
                  <button
                    onClick={() => onNavigateTo('rendez-vous')}
                    className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#059669] hover:bg-[#047857] text-white font-extrabold text-xs sm:text-sm shadow-xl shadow-emerald-950/30 border border-emerald-400 transition-all cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-emerald-200" />
                    <span>Prendre un rendez-vous</span>
                  </button>

                  {/* Button 2: WhatsApp direct */}
                  <a
                    href={CABINET_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-emerald-50 text-[#059669] font-extrabold text-xs sm:text-sm border-2 border-[#059669] shadow-xl shadow-emerald-950/20 transition-all"
                  >
                    <MessageCircle className="w-4 h-4 text-[#059669]" />
                    <span>WhatsApp direct</span>
                  </a>

                  {/* Page link */}
                  <button
                    onClick={() => {
                      if (slide.id === 1) onNavigateTo('prestations');
                      else if (slide.id === 2) onNavigateTo('cabinet');
                      else onNavigateTo('astuces');
                    }}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/95 hover:bg-white text-[#071329] font-black text-xs sm:text-sm border border-emerald-300 shadow-md transition-colors cursor-pointer"
                  >
                    <span>{slide.id === 1 ? 'Voir les 9 prestations' : slide.id === 2 ? 'Découvrir le cabinet' : 'Accéder aux astuces'}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#059669]" />
                  </button>
                </div>

                {/* Badges de réassurance : pastilles individuelles à fond plein et contrasté */}
                <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 text-xs font-black text-[#071329]">
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 border border-emerald-300 shadow-md">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" />
                    <span>Secret médical absolu</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 border border-emerald-300 shadow-md">
                    <Shield className="w-3.5 h-3.5 text-[#059669]" />
                    <span>Dr. KONE Sionfolo Mohamed</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 border border-emerald-300 shadow-md">
                    <span className="w-2 h-2 rounded-full bg-[#059669] animate-ping" />
                    <span>Cocody Riviera 3</span>
                  </div>
                </div>

              </div>

              {/* Right Column: Badge subtil et discret pour laisser la photo 100% visible */}
              <div className="lg:col-span-3 xl:col-span-4 hidden lg:flex flex-col justify-end items-end h-full">
                <div className="rounded-2xl p-3 bg-white/95 border border-emerald-300 shadow-lg flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#059669] text-white flex items-center justify-center font-black text-base shadow-sm">
                    Ψ
                  </div>
                  <div>
                    <div className="text-xs font-black text-[#071329]">{slide.badgeText}</div>
                    <div className="text-[11px] text-[#059669] font-black flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#48C81B] animate-pulse" />
                      <span>{slide.badgeSub} • Cocody Riviera 3</span>
                    </div>
                  </div>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Bottom Indicators & Controls in readable glass pill */}
        <div className="mt-6 flex items-center justify-between p-2.5 sm:p-3 rounded-2xl bg-white/95 border border-emerald-200 shadow-md">
          <div className="flex items-center gap-2.5">
            {HERO_SLIDES.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${currentSlide === idx
                  ? 'w-10 bg-[#059669]'
                  : 'w-2.5 bg-[#0D1B3E]/30 hover:bg-[#0D1B3E]/60'
                  }`}
                aria-label={`Aller au slide ${idx + 1}`}
              />
            ))}
            <span className="text-xs font-bold text-[#0D1B3E] ml-2">
              0{currentSlide + 1} / 0{HERO_SLIDES.length}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={prevSlide}
              className="p-2 rounded-xl bg-white hover:bg-emerald-50 text-[#0D1B3E] border border-emerald-300 transition-all cursor-pointer shadow-sm"
              aria-label="Slide précédent"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-xl bg-white hover:bg-emerald-50 text-[#0D1B3E] border border-emerald-300 transition-all cursor-pointer shadow-sm"
              aria-label="Slide suivant"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

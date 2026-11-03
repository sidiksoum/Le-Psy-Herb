import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Calendar, MessageCircle, Sparkles, Shield, ArrowRight, CheckCircle2 } from 'lucide-react';
import { HERO_SLIDES, CABINET_INFO } from '../data/psyHerbData';

interface HeroCarouselProps {
  onNavigateTo: (page: string) => void;
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({ onNavigateTo }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // High quality natural illustrations
  const slideBgImages = [
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1920&q=85",
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
      {/* Background Image: Clairement visible sans voile bleu lourd */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.img
            key={`img-${slide.id}`}
            src={bgImage}
            alt="Illustration Le Psy Herb"
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 0.85, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Voile très léger pour laisser l'image naturelle apparaître clairement sans teinte bleue envahissante */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/30 lg:from-white/95 lg:via-white/80 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent/30" />
      </div>

      {/* Decorative organic green circle like on the official business card */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-psy-mint/30 blur-2xl pointer-events-none z-0" />

      {/* Main Content at z-10 */}
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

              {/* Left Column: Headlines & Actions on clean readable glass panel */}
              <div className="lg:col-span-8 space-y-4 text-center lg:text-left">

                {/* Pill Tag */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-[#059669]/15 border border-[#059669] text-[#059669] shadow-sm backdrop-blur-md">
                  <Sparkles className="w-3.5 h-3.5 text-[#059669] fill-current" />
                  <span className="tracking-wide">{slide.tag}</span>
                </div>

                {/* Main Headline in official deep navy from the card */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-[#0D1B3E] tracking-tight leading-tight">
                  {slide.title}{' '}
                  <span className="text-[#059669] underline decoration-[#8EE061] decoration-wavy decoration-3">
                    {slide.highlight}
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-sm sm:text-base text-[#1E293B] font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  {slide.subtitle}
                </p>

                {/* Action Buttons: Compacts & Élégants */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                  {/* Button 1: Prendre un rendez-vous */}
                  <button
                    onClick={() => onNavigateTo('rendez-vous')}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#059669] hover:bg-[#047857] text-white font-bold text-xs sm:text-sm shadow-sm transition-all cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-emerald-200" />
                    <span>Prendre un rendez-vous</span>
                  </button>

                  {/* Button 2: WhatsApp Direct */}
                  <a
                    href={CABINET_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-emerald-50 text-[#059669] font-bold text-xs sm:text-sm border-2 border-[#059669] shadow-sm transition-all"
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
                    className="flex items-center gap-1 px-3 py-2 text-xs sm:text-sm text-[#0D1B3E] hover:text-[#059669] font-bold underline underline-offset-4 transition-colors cursor-pointer"
                  >
                    <span>{slide.id === 1 ? 'Voir les 9 prestations' : slide.id === 2 ? 'Découvrir le cabinet' : 'Accéder aux astuces'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Reassurance pills */}
                <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-[#1E293B]">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" />
                    <span>Secret médical absolu</span>
                  </div>
                  <span className="text-slate-400">•</span>
                  <div className="flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-[#059669]" />
                    <span>Dr. KONE Sionfolo Mohamed</span>
                  </div>
                  <span className="text-slate-400">•</span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#059669] animate-ping" />
                    <span>Cocody Riviera 3</span>
                  </div>
                </div>

              </div>

              {/* Right Column: Visual Preview Card */}
              <div className="lg:col-span-4 relative hidden lg:block">
                <div className="rounded-3xl p-5 bg-white/95 backdrop-blur-md border-2 border-emerald-300 shadow-soft-md space-y-3">
                  <div className="flex items-center justify-between border-b border-emerald-100 pb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-[#059669] text-white flex items-center justify-center font-black text-sm">
                        Ψ
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#0D1B3E]">{slide.badgeText}</div>
                        <div className="text-[10px] text-[#059669] font-semibold">{slide.badgeSub}</div>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-[#059669]">
                      Disponible
                    </span>
                  </div>

                  <p className="text-xs text-[#334155] leading-relaxed">
                    « Prise en charge psychologique et psychopathologique de l'enfant et de l'adulte pour vous soulager. »
                  </p>

                  <div className="pt-1 flex items-center justify-between text-[11px] text-[#059669] font-bold">
                    <span>Cocody, Riviera 3</span>
                    <button
                      onClick={() => onNavigateTo('contact')}
                      className="text-[#059669] hover:underline"
                    >
                      Plan d'accès →
                    </button>
                  </div>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Bottom Indicators & Controls */}
        <div className="mt-6 flex items-center justify-between pt-4 border-t border-[#0D1B3E]/15">
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
              className="p-2 rounded-xl bg-white/80 hover:bg-white text-[#0D1B3E] border border-emerald-300 transition-all cursor-pointer shadow-sm"
              aria-label="Slide précédent"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-xl bg-white/80 hover:bg-white text-[#0D1B3E] border border-emerald-300 transition-all cursor-pointer shadow-sm"
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

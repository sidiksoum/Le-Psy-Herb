import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, WifiOff, Wifi, X, Smartphone } from 'lucide-react';

interface PWAInstallPromptProps {
  deferredPrompt: any;
  onInstall: () => void;
  onDismiss: () => void;
}

export const PWAInstallPrompt: React.FC<PWAInstallPromptProps> = ({
  deferredPrompt,
  onInstall,
  onDismiss,
}) => {
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);
  const [showOfflineBadge, setShowOfflineBadge] = useState<boolean>(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setShowOfflineBadge(true);
      setTimeout(() => setShowOfflineBadge(false), 4000);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowOfflineBadge(true);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <>
      {/* Offline / Online Notification Toast */}
      <AnimatePresence>
        {(!isOnline || showOfflineBadge) && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-2xl shadow-soft-lg text-xs font-semibold flex items-center gap-2.5 backdrop-blur-md border ${
              isOnline
                ? 'bg-sage-600/90 text-white border-sage-500'
                : 'bg-amber-700/90 text-white border-amber-600'
            }`}
          >
            {isOnline ? (
              <>
                <Wifi className="w-4 h-4 text-emerald-300" />
                <span>Connexion rétablie — Le Psy Herb synchronisé.</span>
              </>
            ) : (
              <>
                <WifiOff className="w-4 h-4 text-amber-200" />
                <span>Mode hors ligne actif — Vos exercices et guides restent accessibles.</span>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Bottom PWA Install Banner */}
      <AnimatePresence>
        {deferredPrompt && (
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            className="fixed bottom-5 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-40"
          >
            <div className="glass-panel rounded-3xl p-4 sm:p-5 shadow-soft-lg border border-sage-200 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-sage-600 text-white flex items-center justify-center shrink-0 shadow-soft-sm">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-mind-dark">Installer Le Psy Herb</h4>
                  <p className="text-xs text-mind-muted">Accès rapide sur l'écran d'accueil et hors ligne</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={onInstall}
                  className="flex items-center gap-1.5 px-3.5 py-2 bg-sage-700 hover:bg-sage-800 text-white text-xs font-bold rounded-xl shadow-soft-sm transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Installer</span>
                </button>
                <button
                  onClick={onDismiss}
                  className="p-1.5 text-mind-muted hover:text-mind-dark rounded-lg transition-colors"
                  aria-label="Fermer la suggestion"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};


import { useState, useEffect } from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { CabinetPage } from './pages/CabinetPage';
import { PrestationsPage } from './pages/PrestationsPage';
import { RendezVousPage } from './pages/RendezVousPage';
import { AstucesPage } from './pages/AstucesPage';
import { ContactPage } from './pages/ContactPage';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { PWAInstallPrompt } from './components/PWAInstallPrompt';
import { Footer } from './components/Footer';

export function App() {
  const getPageFromHash = () => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    if (['cabinet', 'prestations', 'rendez-vous', 'astuces', 'contact'].includes(hash)) {
      return hash;
    }
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<string>(getPageFromHash());
  const [selectedPrestation, setSelectedPrestation] = useState<string>('');
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const page = getPageFromHash();
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectPrestation = (prestationTitle: string) => {
    setSelectedPrestation(prestationTitle);
  };

  return (
    <div className="min-h-screen flex flex-col bg-psy-gradient text-[#1E293B] font-sans selection:bg-[#059669] selection:text-white">
      {/* 01. Barre supérieure informative */}
      <TopBar />

      {/* 02. Navigation principale avec indicateurs de page active */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* 03. Rendu dynamique de la page sélectionnée */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigateTo={handleNavigate}
            onSelectPrestationForBooking={handleSelectPrestation}
            selectedPrestation={selectedPrestation}
          />
        )}

        {currentPage === 'cabinet' && (
          <CabinetPage onNavigateTo={handleNavigate} />
        )}

        {currentPage === 'prestations' && (
          <PrestationsPage
            onNavigateTo={handleNavigate}
            onSelectPrestationForBooking={handleSelectPrestation}
          />
        )}

        {currentPage === 'rendez-vous' && (
          <RendezVousPage
            onNavigateTo={handleNavigate}
            selectedPrestation={selectedPrestation}
          />
        )}

        {currentPage === 'astuces' && (
          <AstucesPage onNavigateTo={handleNavigate} />
        )}

        {currentPage === 'contact' && (
          <ContactPage onNavigateTo={handleNavigate} />
        )}
      </main>

      {/* 04. Pied de page institutionnel */}
      <Footer onNavigate={handleNavigate} />

      {/* 05. Boutons Flottants : Prendre un RDV + WhatsApp Direct côte à côte */}
      <FloatingWhatsApp
        onOpenBooking={() => handleNavigate('rendez-vous')}
      />

      {/* 06. PWA Native Install Prompt */}
      <PWAInstallPrompt
        deferredPrompt={deferredPrompt}
        onInstall={() => {
          if (deferredPrompt) deferredPrompt.prompt();
        }}
        onDismiss={() => setDeferredPrompt(null)}
      />
    </div>
  );
}

export default App;

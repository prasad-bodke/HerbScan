import React, { useState, useEffect } from 'react';
import { ActiveTab, MedicinalPlant } from './types';
import { HERBAL_DATABASE } from './data/herbalDatabase';
import { AndroidHeader } from './components/AndroidHeader';
import { AndroidBottomNav } from './components/AndroidBottomNav';
import { HomeScreen } from './components/HomeScreen';
import { ScanScreen } from './components/ScanScreen';
import { SearchScreen } from './components/SearchScreen';
import { ResearchIdeaScreen } from './components/ResearchIdeaScreen';
import { QuizScreen } from './components/QuizScreen';
import { FavoritesScreen } from './components/FavoritesScreen';
import { PlantDetailModal } from './components/PlantDetailModal';
import { ShareModal } from './components/ShareModal';
import { NotificationModal } from './components/NotificationModal';
import { ApkDownloadModal } from './components/ApkDownloadModal';
import { InstallBanner } from './components/InstallBanner';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [selectedPlant, setSelectedPlant] = useState<MedicinalPlant | null>(null);
  const [researchTargetPlant, setResearchTargetPlant] = useState<MedicinalPlant | null>(null);
  const [researchFormulationType, setResearchFormulationType] = useState<string | undefined>(undefined);
  const [shareTargetPlant, setShareTargetPlant] = useState<MedicinalPlant | null>(null);

  const [showNotifications, setShowNotifications] = useState(false);
  const [showApkModal, setShowApkModal] = useState(false);

  // Dark Mode State
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('herbscan_dark_mode');
    return saved !== null ? saved === 'true' : true;
  });

  // Favorites State - initialize with 'bael' for instant value
  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem('herbscan_favorites');
    return saved ? JSON.parse(saved) : ['bael', 'tulsi'];
  });

  // Online / Offline Status
  const [isOnline, setIsOnline] = useState(typeof navigator !== 'undefined' ? navigator.onLine : true);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Register Service Worker for offline capability & PWA installability
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js').catch((err) => {
        console.warn('SW registration notice:', err);
      });
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Update HTML body theme class
  useEffect(() => {
    localStorage.setItem('herbscan_dark_mode', String(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.className = 'bg-[#0e1713] text-slate-100 antialiased selection:bg-emerald-500 selection:text-white';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.className = 'bg-[#f4f8f5] text-slate-900 antialiased selection:bg-emerald-600 selection:text-white';
    }
  }, [darkMode]);

  // Sync favorites with localStorage
  useEffect(() => {
    localStorage.setItem('herbscan_favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleToggleFavorite = (plantId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setFavorites((prev) =>
      prev.includes(plantId) ? prev.filter((id) => id !== plantId) : [...prev, plantId]
    );
  };

  const handleOpenPlantDetail = (plant: MedicinalPlant) => {
    setSelectedPlant(plant);
  };

  const handleLaunchResearch = (plant: MedicinalPlant, formulationType?: string) => {
    setSelectedPlant(null);
    setResearchTargetPlant(plant);
    setResearchFormulationType(formulationType);
    setActiveTab('research');
  };

  const handleSharePlant = (plant: MedicinalPlant) => {
    setShareTargetPlant(plant);
  };

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-200 ${darkMode ? 'dark' : ''}`}>
      {/* Native-feeling Android Header */}
      <AndroidHeader
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
        onOpenNotifications={() => setShowNotifications(true)}
        onOpenApkModal={() => setShowApkModal(true)}
        isOnline={isOnline}
      />

      {/* In-App One-Tap Android PWA Install Banner */}
      <InstallBanner onOpenApkModal={() => setShowApkModal(true)} />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-5xl mx-auto">
        {activeTab === 'home' && (
          <HomeScreen
            onNavigate={setActiveTab}
            onSelectPlant={handleOpenPlantDetail}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            onOpenResearch={(plant, e) => {
              if (e) e.stopPropagation();
              handleLaunchResearch(plant);
            }}
            onOpenNotifications={() => setShowNotifications(true)}
            onOpenApkModal={() => setShowApkModal(true)}
          />
        )}

        {activeTab === 'scan' && (
          <ScanScreen
            onPlantIdentified={(plant) => setSelectedPlant(plant)}
            onOpenResearchDirect={(plant) => handleLaunchResearch(plant)}
          />
        )}

        {activeTab === 'search' && (
          <SearchScreen
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            onSelectPlant={handleOpenPlantDetail}
            onOpenResearch={(plant, e) => {
              if (e) e.stopPropagation();
              handleLaunchResearch(plant);
            }}
          />
        )}

        {activeTab === 'research' && (
          <ResearchIdeaScreen
            initialPlant={researchTargetPlant}
            initialFormulationType={researchFormulationType}
            onSelectPlant={handleOpenPlantDetail}
          />
        )}

        {activeTab === 'quiz' && (
          <QuizScreen
            onExplorePlant={(plant) => handleOpenPlantDetail(plant)}
          />
        )}

        {activeTab === 'favorites' && (
          <FavoritesScreen
            favoriteIds={favorites}
            onToggleFavorite={handleToggleFavorite}
            onSelectPlant={handleOpenPlantDetail}
            onOpenResearch={(plant, e) => {
              if (e) e.stopPropagation();
              handleLaunchResearch(plant);
            }}
            onNavigateToSearch={() => setActiveTab('search')}
          />
        )}
      </main>

      {/* Android Bottom Navigation Bar */}
      <AndroidBottomNav
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        favoritesCount={favorites.length}
      />

      {/* Full Plant Result Modal */}
      {selectedPlant && (
        <PlantDetailModal
          plant={selectedPlant}
          onClose={() => setSelectedPlant(null)}
          isFavorite={favorites.includes(selectedPlant.id)}
          onToggleFavorite={handleToggleFavorite}
          onLaunchResearch={handleLaunchResearch}
          onSharePlant={handleSharePlant}
        />
      )}

      {/* Share Modal */}
      {shareTargetPlant && (
        <ShareModal
          plant={shareTargetPlant}
          onClose={() => setShareTargetPlant(null)}
        />
      )}

      {/* Daily Tips & Push Notifications Modal */}
      {showNotifications && (
        <NotificationModal
          onClose={() => setShowNotifications(false)}
        />
      )}

      {/* Android APK Download & PWA Modal */}
      {showApkModal && (
        <ApkDownloadModal
          onClose={() => setShowApkModal(false)}
        />
      )}
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { Download, Smartphone, X } from 'lucide-react';

interface InstallBannerProps {
  onOpenApkModal?: () => void;
}

export const InstallBanner: React.FC<InstallBannerProps> = ({ onOpenApkModal }) => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches || (window.navigator as any).standalone) {
      setIsStandalone(true);
      return;
    }

    // Check if dismissed recently
    const dismissed = sessionStorage.getItem('herbscan_install_dismissed');
    if (dismissed) return;

    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowBanner(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    // Show banner after 3 seconds on mobile browsers if not standalone
    const timer = setTimeout(() => {
      const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
      if (isMobile && !isStandalone && !dismissed) {
        setShowBanner(true);
      }
    }, 2500);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
      clearTimeout(timer);
    };
  }, [isStandalone]);

  if (!showBanner || isStandalone) return null;

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setShowBanner(false);
        setDeferredPrompt(null);
      }
    } else if (onOpenApkModal) {
      onOpenApkModal();
      setShowBanner(false);
    }
  };

  const handleDismiss = () => {
    setShowBanner(false);
    sessionStorage.setItem('herbscan_install_dismissed', 'true');
  };

  return (
    <div className="mx-4 mt-2 p-3 bg-gradient-to-r from-emerald-900/90 to-teal-950/90 border border-emerald-500/40 rounded-2xl shadow-xl flex items-center justify-between gap-3 text-left animate-in slide-in-from-top duration-300">
      <div className="flex items-center gap-2.5 min-w-0">
        <div className="w-9 h-9 rounded-xl bg-emerald-500 text-emerald-950 flex items-center justify-center shrink-0 shadow">
          <Smartphone className="w-5 h-5" />
        </div>
        <div className="min-w-0">
          <p className="text-xs font-bold text-white truncate">Install HerbScan App</p>
          <p className="text-[11px] text-emerald-300/90 truncate">Fast offline access & camera scanner</p>
        </div>
      </div>

      <div className="flex items-center gap-1.5 shrink-0">
        <button
          onClick={handleInstallClick}
          className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 hover:brightness-110 text-emerald-950 text-xs font-bold shadow flex items-center gap-1 active:scale-95 transition-all"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Install</span>
        </button>
        <button
          onClick={handleDismiss}
          className="p-1.5 rounded-lg text-emerald-300/70 hover:text-white hover:bg-emerald-800/40 transition-colors"
          aria-label="Dismiss banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

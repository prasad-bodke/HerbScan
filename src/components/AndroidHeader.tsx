import React from 'react';
import { Leaf, Bell, Moon, Sun, Smartphone } from 'lucide-react';

interface AndroidHeaderProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenNotifications: () => void;
  onOpenApkModal: () => void;
  isOnline: boolean;
}

export const AndroidHeader: React.FC<AndroidHeaderProps> = ({
  darkMode,
  onToggleDarkMode,
  onOpenNotifications,
  onOpenApkModal,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-emerald-950/90 dark:bg-[#0c1813]/95 backdrop-blur-md border-b border-emerald-800/30 text-white select-none transition-colors">
      {/* Main App Bar */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center shadow-md shadow-emerald-950/40">
            <Leaf className="w-5 h-5 text-emerald-950 fill-emerald-950" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h1 className="text-lg font-bold tracking-tight text-white flex items-center gap-1">
                HerbScan
              </h1>
              <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                Ayurveda
              </span>
            </div>
            <p className="text-[11px] text-emerald-300/80 font-medium">
              Scan a plant, learn its value
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5">
          <button
            id="btn-apk-install"
            onClick={onOpenApkModal}
            aria-label="Download Ready Android APK"
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-emerald-800/50 hover:bg-emerald-700/60 active:scale-95 text-emerald-200 border border-emerald-700/40 text-xs font-medium transition-all"
            title="Get Android APK"
          >
            <Smartphone className="w-3.5 h-3.5 text-emerald-300" />
            <span className="hidden sm:inline">Get APK</span>
          </button>

          <button
            id="btn-notification-bell"
            onClick={onOpenNotifications}
            aria-label="Daily herbal wellness tips"
            className="p-2 rounded-lg bg-emerald-900/40 hover:bg-emerald-800/50 active:scale-95 text-emerald-200 border border-emerald-800/40 transition-all relative"
            title="Daily Herbal Tips"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-amber-400 ring-2 ring-emerald-950"></span>
          </button>

          <button
            id="btn-darkmode-toggle"
            onClick={onToggleDarkMode}
            aria-label="Toggle dark mode"
            className="p-2 rounded-lg bg-emerald-900/40 hover:bg-emerald-800/50 active:scale-95 text-emerald-200 border border-emerald-800/40 transition-all"
            title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-emerald-200" />}
          </button>
        </div>
      </div>
    </header>
  );
};

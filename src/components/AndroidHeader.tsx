import React, { useState, useEffect } from 'react';
import { Leaf, Bell, Moon, Sun, Smartphone, Wifi, WifiOff } from 'lucide-react';

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
  isOnline,
}) => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-emerald-950/90 dark:bg-[#0c1813]/95 backdrop-blur-md border-b border-emerald-800/30 text-white select-none transition-colors">
      {/* Android System Status Bar */}
      <div className="flex items-center justify-between px-4 py-1 text-xs font-medium text-emerald-200/70 border-b border-emerald-900/30">
        <span className="font-mono tracking-tight">{time || '12:00'}</span>
        <div className="flex items-center gap-2">
          {isOnline ? (
            <span className="flex items-center gap-1 text-[10px] text-emerald-400">
              <Wifi className="w-3 h-3" />
              <span>Online</span>
            </span>
          ) : (
            <span className="flex items-center gap-1 text-[10px] text-amber-400">
              <WifiOff className="w-3 h-3" />
              <span>Offline DB</span>
            </span>
          )}
          <span className="text-[10px] bg-emerald-800/60 text-emerald-200 px-1.5 py-0.2 rounded font-semibold">5G</span>
          <div className="w-4 h-2 border border-emerald-400/80 rounded-sm p-[1px] flex items-center">
            <div className="w-full h-full bg-emerald-400 rounded-2xs"></div>
          </div>
        </div>
      </div>

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

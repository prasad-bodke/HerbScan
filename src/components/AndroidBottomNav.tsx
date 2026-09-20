import React from 'react';
import { Home, Camera, Search, FlaskConical, Trophy, Bookmark } from 'lucide-react';
import { ActiveTab } from '../types';

interface AndroidBottomNavProps {
  activeTab: ActiveTab;
  onSelectTab: (tab: ActiveTab) => void;
  favoritesCount: number;
}

export const AndroidBottomNav: React.FC<AndroidBottomNavProps> = ({
  activeTab,
  onSelectTab,
  favoritesCount,
}) => {
  const navItems = [
    { id: 'home' as ActiveTab, label: 'Home', icon: Home },
    { id: 'scan' as ActiveTab, label: 'Scan 🌱', icon: Camera, primary: true },
    { id: 'search' as ActiveTab, label: 'Search 🔎', icon: Search },
    { id: 'research' as ActiveTab, label: 'Research 🧪', icon: FlaskConical },
    { id: 'quiz' as ActiveTab, label: 'Quiz 🎯', icon: Trophy },
    { id: 'favorites' as ActiveTab, label: 'Saved ⭐', icon: Bookmark, badge: favoritesCount },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-emerald-950/95 dark:bg-[#0c1813]/98 backdrop-blur-lg border-t border-emerald-800/30 px-2 py-1.5 transition-colors">
      <div className="max-w-md mx-auto flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          if (item.primary) {
            return (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => onSelectTab(item.id)}
                aria-label={item.label}
                className="relative -top-3 flex flex-col items-center group focus:outline-none"
              >
                <div
                  className={`w-13 h-13 rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-200 active:scale-95 ${
                    isActive
                      ? 'bg-gradient-to-tr from-emerald-500 to-teal-300 text-emerald-950 shadow-emerald-600/40 ring-4 ring-emerald-950 dark:ring-[#0c1813]'
                      : 'bg-gradient-to-tr from-emerald-600 to-teal-400 text-emerald-950 shadow-emerald-900/50 ring-4 ring-emerald-950 dark:ring-[#0c1813] hover:brightness-110'
                  }`}
                >
                  <Icon className="w-6 h-6 stroke-[2.5]" />
                </div>
                <span
                  className={`text-[11px] font-bold mt-1 tracking-tight ${
                    isActive ? 'text-emerald-300' : 'text-emerald-400/80'
                  }`}
                >
                  {item.label}
                </span>
              </button>
            );
          }

          return (
            <button
              key={item.id}
              id={`nav-${item.id}`}
              onClick={() => onSelectTab(item.id)}
              aria-label={item.label}
              className={`flex flex-col items-center py-1 px-2 rounded-xl transition-all duration-150 relative ${
                isActive
                  ? 'text-emerald-300 font-semibold'
                  : 'text-emerald-400/60 hover:text-emerald-300/90'
              }`}
            >
              <div className="relative">
                <Icon className={`w-5 h-5 transition-transform ${isActive ? 'scale-110 stroke-[2.4]' : 'stroke-[1.8]'}`} />
                {item.badge !== undefined && item.badge > 0 && (
                  <span className="absolute -top-1.5 -right-2 min-w-4 h-4 px-1 rounded-full bg-amber-500 text-slate-950 text-[10px] font-black flex items-center justify-center shadow-sm">
                    {item.badge}
                  </span>
                )}
              </div>
              <span className={`text-[10px] tracking-tight mt-0.5 whitespace-nowrap ${isActive ? 'font-bold' : 'font-medium'}`}>
                {item.label}
              </span>
              {isActive && (
                <span className="w-1 h-1 rounded-full bg-emerald-400 mt-0.5"></span>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

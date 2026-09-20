import React from 'react';
import {
  Camera,
  Search,
  FlaskConical,
  Trophy,
  Sparkles,
  ArrowRight,
  Bookmark,
  Share2,
  ShieldAlert,
  Leaf,
  Bell,
  Smartphone,
} from 'lucide-react';
import { MedicinalPlant, ActiveTab } from '../types';
import { HERBAL_DATABASE, DAILY_TIPS } from '../data/herbalDatabase';
import { PlantCard } from './PlantCard';

interface HomeScreenProps {
  onNavigate: (tab: ActiveTab) => void;
  onSelectPlant: (plant: MedicinalPlant) => void;
  favorites: string[];
  onToggleFavorite: (id: string, e: React.MouseEvent) => void;
  onOpenResearch: (plant: MedicinalPlant, e: React.MouseEvent) => void;
  onOpenNotifications: () => void;
  onOpenApkModal: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onNavigate,
  onSelectPlant,
  favorites,
  onToggleFavorite,
  onOpenResearch,
  onOpenNotifications,
  onOpenApkModal,
}) => {
  const baelPlant = HERBAL_DATABASE.find((p) => p.id === 'bael')!;
  const todayTip = DAILY_TIPS[0];
  const featuredHerbs = HERBAL_DATABASE.slice(0, 4);

  return (
    <div className="max-w-4xl mx-auto px-4 py-4 space-y-6 pb-24 text-left">
      {/* Hero Action Card */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-emerald-950 via-[#0e271c] to-slate-950 border border-emerald-700/50 p-6 shadow-2xl">
        <div className="relative z-10 space-y-4 max-w-lg">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-800/60 border border-emerald-600/40 text-emerald-300 text-xs font-semibold">
            <Leaf className="w-3.5 h-3.5 text-emerald-400" />
            <span>Ayurvedic Plant Identifier & Research</span>
          </div>

          <div className="space-y-1">
            <h2 className="text-3xl font-black text-white tracking-tight leading-tight">
              Scan a plant,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-300">
                learn its value.
              </span>
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              Identify medicinal plants with English & Marathi names, uncover bioactive markers, and generate publication-ready formulation research ideas.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 pt-1">
            <button
              id="hero-scan-btn"
              onClick={() => onNavigate('scan')}
              className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-400 text-emerald-950 font-bold text-xs shadow-lg shadow-emerald-900/60 hover:brightness-110 active:scale-95 transition-all"
            >
              <Camera className="w-4 h-4" />
              <span>Scan Plant 🌱</span>
            </button>

            <button
              id="hero-research-btn"
              onClick={() => onNavigate('research')}
              className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-slate-900/80 hover:bg-slate-800 text-emerald-300 text-xs font-semibold border border-emerald-700/50 active:scale-95 transition-all"
            >
              <FlaskConical className="w-4 h-4" />
              <span>Research Ideas 🧪</span>
            </button>
          </div>
        </div>

        {/* Decorative background watermark */}
        <div className="absolute -right-8 -bottom-10 opacity-15 pointer-events-none">
          <Leaf className="w-64 h-64 text-emerald-400" />
        </div>
      </div>

      {/* 4 Core App Screen Quick Tiles */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <button
          onClick={() => onNavigate('scan')}
          className="p-4 rounded-2xl bg-slate-900/70 hover:bg-slate-900 border border-emerald-800/40 hover:border-emerald-500/50 text-left space-y-2 transition-all group active:scale-95"
        >
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Camera className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold text-white block">Scan Plant 🌱</span>
            <span className="text-[10px] text-slate-400">Photo identification</span>
          </div>
        </button>

        <button
          onClick={() => onNavigate('search')}
          className="p-4 rounded-2xl bg-slate-900/70 hover:bg-slate-900 border border-emerald-800/40 hover:border-emerald-500/50 text-left space-y-2 transition-all group active:scale-95"
        >
          <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Search className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold text-white block">Search Plant 🔎</span>
            <span className="text-[10px] text-slate-400">Offline Dravyaguna DB</span>
          </div>
        </button>

        <button
          onClick={() => onNavigate('research')}
          className="p-4 rounded-2xl bg-slate-900/70 hover:bg-slate-900 border border-amber-500/40 hover:border-amber-400 text-left space-y-2 transition-all group active:scale-95 ring-1 ring-amber-500/20"
        >
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center group-hover:scale-110 transition-transform">
            <FlaskConical className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold text-amber-300 block">Research 🧪</span>
            <span className="text-[10px] text-slate-400">Formulation matrix</span>
          </div>
        </button>

        <button
          onClick={() => onNavigate('quiz')}
          className="p-4 rounded-2xl bg-slate-900/70 hover:bg-slate-900 border border-emerald-800/40 hover:border-emerald-500/50 text-left space-y-2 transition-all group active:scale-95"
        >
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Trophy className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold text-white block">Quiz 🎯</span>
            <span className="text-[10px] text-slate-400">Test knowledge</span>
          </div>
        </button>
      </div>

      {/* Daily Herbal Wellness Tip Push Banner */}
      <div className="bg-emerald-950/60 border border-emerald-800/40 rounded-3xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1 max-w-xl">
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
              Daily Herbal Wellness Push
            </span>
            <span className="text-xs font-bold text-white">
              {todayTip.plantName}
            </span>
          </div>
          <p className="text-xs text-slate-200 leading-relaxed font-medium">
            "{todayTip.tip}"
          </p>
          <p className="text-[11px] text-emerald-300/80">
            🌱 <strong>How to use:</strong> {todayTip.practicalUse}
          </p>
        </div>

        <button
          onClick={onOpenNotifications}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-800/50 hover:bg-emerald-700/60 text-emerald-200 text-xs font-semibold shrink-0 border border-emerald-700/50 active:scale-95 transition-all"
        >
          <Bell className="w-3.5 h-3.5 text-amber-300" />
          <span>Tip Reminders</span>
        </button>
      </div>

      {/* Featured Bael Formulation Spotlight Card */}
      <div className="bg-slate-900/80 border border-emerald-700/40 rounded-3xl p-5 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-black text-white">🌿 Bael (बेल) Research Focus</span>
            <span className="text-[10px] bg-emerald-900 text-emerald-300 px-2 py-0.5 rounded-full font-mono">
              Aegle marmelos
            </span>
          </div>
          <button
            onClick={() => onSelectPlant(baelPlant)}
            className="text-xs text-amber-300 hover:text-amber-200 font-semibold flex items-center gap-1"
          >
            <span>Full Profile</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <p className="text-xs text-slate-300">
          Targeted formulation pathways: <strong>Herbal Syrup</strong>, <strong>Herbal Gel</strong>, <strong>Herbal Powder</strong>, and <strong>Herbal Tablet</strong> with standardized Marmelosin biomarkers and ICH evaluation parameters.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
          {baelPlant.researchPossibilities.map((res, idx) => (
            <div
              key={idx}
              onClick={() => onOpenResearch(baelPlant, null as any)}
              className="p-3 rounded-xl bg-slate-950/70 border border-emerald-800/30 hover:border-amber-400/60 cursor-pointer transition-all space-y-1 text-left group"
            >
              <span className="font-bold text-emerald-300 group-hover:text-amber-300 block text-xs">
                {res.formulationType}
              </span>
              <span className="text-[10px] text-slate-400 block line-clamp-2">
                {res.rationale}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Ayurvedic Herbs Carousel / Grid */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Ayurvedic Medicinal Database</span>
          </h3>
          <button
            onClick={() => onNavigate('search')}
            className="text-xs text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1"
          >
            <span>View All ({HERBAL_DATABASE.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {featuredHerbs.map((plant) => (
            <PlantCard
              key={plant.id}
              plant={plant}
              isFavorite={favorites.includes(plant.id)}
              onToggleFavorite={onToggleFavorite}
              onSelectPlant={onSelectPlant}
              onOpenResearch={onOpenResearch}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

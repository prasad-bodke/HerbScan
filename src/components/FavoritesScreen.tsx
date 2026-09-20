import React from 'react';
import { Bookmark, Sparkles, ArrowRight } from 'lucide-react';
import { MedicinalPlant } from '../types';
import { HERBAL_DATABASE } from '../data/herbalDatabase';
import { PlantCard } from './PlantCard';

interface FavoritesScreenProps {
  favoriteIds: string[];
  onToggleFavorite: (id: string, e: React.MouseEvent) => void;
  onSelectPlant: (plant: MedicinalPlant) => void;
  onOpenResearch: (plant: MedicinalPlant, e: React.MouseEvent) => void;
  onNavigateToSearch: () => void;
}

export const FavoritesScreen: React.FC<FavoritesScreenProps> = ({
  favoriteIds,
  onToggleFavorite,
  onSelectPlant,
  onOpenResearch,
  onNavigateToSearch,
}) => {
  const favoritePlants = HERBAL_DATABASE.filter((p) => favoriteIds.includes(p.id));

  return (
    <div className="max-w-4xl mx-auto px-4 py-4 space-y-5 pb-24 text-left">
      {/* Header */}
      <div className="space-y-1">
        <h2 className="text-2xl font-black text-white tracking-tight flex items-center gap-2">
          <span>Saved Medicinal Herbs ⭐</span>
          <span className="text-sm font-semibold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
            {favoritePlants.length} Saved
          </span>
        </h2>
        <p className="text-xs text-emerald-300/80">
          Your bookmarked plants stored offline for rapid pharmacognosy reference and formulation design.
        </p>
      </div>

      {favoritePlants.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {favoritePlants.map((plant) => (
            <PlantCard
              key={plant.id}
              plant={plant}
              isFavorite={true}
              onToggleFavorite={onToggleFavorite}
              onSelectPlant={onSelectPlant}
              onOpenResearch={onOpenResearch}
            />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center space-y-4 bg-slate-900/40 rounded-3xl border border-emerald-900/30 p-6">
          <div className="w-14 h-14 mx-auto rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-300">
            <Bookmark className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <p className="text-base font-bold text-slate-200">
              No saved medicinal herbs yet
            </p>
            <p className="text-xs text-slate-400 max-w-sm mx-auto">
              Tap the bookmark icon on any plant (such as Bael or Tulsi) to keep it in your offline quick reference list.
            </p>
          </div>
          <button
            onClick={onNavigateToSearch}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 text-emerald-950 text-xs font-bold shadow-lg shadow-emerald-900/40 active:scale-95 transition-all"
          >
            <span>Explore Herb Database</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </div>
  );
};

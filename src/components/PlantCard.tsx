import React from 'react';
import { Bookmark, Sparkles, FlaskConical, ChevronRight } from 'lucide-react';
import { MedicinalPlant } from '../types';

interface PlantCardProps {
  plant: MedicinalPlant;
  isFavorite: boolean;
  onToggleFavorite: (id: string, e: React.MouseEvent) => void;
  onSelectPlant: (plant: MedicinalPlant) => void;
  onOpenResearch: (plant: MedicinalPlant, e: React.MouseEvent) => void;
}

export const PlantCard: React.FC<PlantCardProps> = ({
  plant,
  isFavorite,
  onToggleFavorite,
  onSelectPlant,
  onOpenResearch,
}) => {
  return (
    <div
      id={`plant-card-${plant.id}`}
      onClick={() => onSelectPlant(plant)}
      className="group bg-slate-900/60 dark:bg-[#12221b]/70 rounded-2xl overflow-hidden border border-emerald-800/30 hover:border-emerald-500/50 shadow-md hover:shadow-xl hover:shadow-emerald-950/30 transition-all duration-200 cursor-pointer flex flex-col active:scale-[0.99]"
    >
      {/* Plant Image Header */}
      <div className="relative h-44 w-full overflow-hidden bg-slate-800">
        <img
          src={plant.image}
          alt={plant.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent"></div>

        {/* Marathi Name Badge */}
        <div className="absolute top-3 left-3 bg-emerald-900/90 backdrop-blur-md border border-emerald-700/50 px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-md">
          <span className="text-xs font-bold text-amber-300 tracking-wide font-sans">
            {plant.marathiName}
          </span>
          <span className="w-1 h-1 rounded-full bg-emerald-400"></span>
          <span className="text-[10px] text-emerald-200 uppercase font-mono">मराठी</span>
        </div>

        {/* Favorite Button */}
        <button
          id={`fav-btn-${plant.id}`}
          onClick={(e) => onToggleFavorite(plant.id, e)}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-md border transition-all ${
            isFavorite
              ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-lg shadow-amber-500/30 scale-105'
              : 'bg-slate-950/60 text-slate-200 border-white/20 hover:bg-slate-900/80 hover:text-amber-300'
          }`}
        >
          <Bookmark className={`w-4 h-4 ${isFavorite ? 'fill-slate-950' : ''}`} />
        </button>

        {/* Plant Name & Botanical Details at bottom of image */}
        <div className="absolute bottom-2.5 left-3 right-3 text-left">
          <h3 className="text-lg font-bold text-white tracking-tight leading-snug drop-shadow-sm flex items-center justify-between">
            <span>{plant.name}</span>
          </h3>
          <p className="text-xs text-emerald-300 italic font-serif tracking-wide truncate">
            {plant.botanicalName} • {plant.family}
          </p>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-3.5 flex-1 flex flex-col justify-between gap-3 text-left">
        <div>
          {/* Part Used Pill */}
          <div className="flex items-center gap-1.5 text-xs text-slate-300 mb-2">
            <span className="text-emerald-400 font-semibold text-[11px] uppercase tracking-wider">
              Part Used:
            </span>
            <span className="text-slate-200 truncate font-medium">
              {plant.partUsed}
            </span>
          </div>

          {/* Primary Traditional Use */}
          <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
            {plant.traditionalUses[0]}
          </p>
        </div>

        {/* Ayurvedic Tag & Quick Actions */}
        <div className="pt-2 border-t border-emerald-900/30 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1 text-[11px] text-amber-300/90 font-medium">
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span className="truncate max-w-[130px]">
              {plant.ayurvedicProperties.prabhava || plant.ayurvedicProperties.doshaKarma}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              id={`research-btn-${plant.id}`}
              onClick={(e) => onOpenResearch(plant, e)}
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-800/40 hover:bg-emerald-700/50 text-emerald-200 text-xs font-semibold border border-emerald-700/40 active:scale-95 transition-all"
              title="Open Research Formulation Ideas"
            >
              <FlaskConical className="w-3.5 h-3.5 text-emerald-300" />
              <span>Research</span>
            </button>
            <span className="text-emerald-400/60 group-hover:text-emerald-300 group-hover:translate-x-0.5 transition-all">
              <ChevronRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

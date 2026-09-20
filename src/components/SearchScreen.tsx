import React, { useState, useMemo } from 'react';
import { Search, X, Filter, Sparkles, Database } from 'lucide-react';
import { MedicinalPlant } from '../types';
import { HERBAL_DATABASE } from '../data/herbalDatabase';
import { PlantCard } from './PlantCard';

interface SearchScreenProps {
  favorites: string[];
  onToggleFavorite: (id: string, e: React.MouseEvent) => void;
  onSelectPlant: (plant: MedicinalPlant) => void;
  onOpenResearch: (plant: MedicinalPlant, e: React.MouseEvent) => void;
}

const FILTER_TAGS = [
  'All',
  'Fruit',
  'Leaves',
  'Root',
  'Bark',
  'Stem',
  'Digestion',
  'Immunity',
  'Respiratory',
  'Skin',
  'Brain',
  'Heart',
  'Liver',
  'Kidney',
  'Women Health',
  'Joints',
];

export const SearchScreen: React.FC<SearchScreenProps> = ({
  favorites,
  onToggleFavorite,
  onSelectPlant,
  onOpenResearch,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTag, setActiveTag] = useState('All');

  const filteredPlants = useMemo(() => {
    return HERBAL_DATABASE.filter((plant) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        plant.name.toLowerCase().includes(q) ||
        plant.marathiName.includes(q) ||
        plant.botanicalName.toLowerCase().includes(q) ||
        plant.family.toLowerCase().includes(q) ||
        plant.partUsed.toLowerCase().includes(q) ||
        plant.phytochemicals.some((phy) => phy.toLowerCase().includes(q)) ||
        plant.traditionalUses.some((u) => u.toLowerCase().includes(q)) ||
        plant.tags.some((t) => t.toLowerCase().includes(q));

      if (!matchesQuery) return false;

      if (activeTag === 'All') return true;

      const tagLower = activeTag.toLowerCase();
      const matchesPart = plant.partUsed.toLowerCase().includes(tagLower);
      const matchesTag = plant.tags.some((t) => t.toLowerCase() === tagLower);

      return matchesPart || matchesTag;
    });
  }, [searchQuery, activeTag]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-4 space-y-5 pb-24 text-left">
      {/* Search Header */}
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-black text-white tracking-tight flex items-center gap-2">
            <span>Search Herbs</span>
            <span className="text-sm font-semibold px-2 py-0.5 rounded-full bg-emerald-900/60 text-emerald-300 border border-emerald-700/40">
              {HERBAL_DATABASE.length} Plants
            </span>
          </h2>
          <span className="text-xs text-emerald-400 font-medium flex items-center gap-1">
            <Database className="w-3.5 h-3.5" />
            <span>100% Offline Ready</span>
          </span>
        </div>
        <p className="text-xs text-emerald-300/80">
          Search by English, Marathi (उदा. बेल, तुळस), Botanical name, chemical marker, or health indication.
        </p>
      </div>

      {/* Search Input Bar */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-emerald-400">
          <Search className="w-4 h-4" />
        </div>
        <input
          id="search-plants-input"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search Bael, बेल, Aegle marmelos, Marmelosin, Digestion..."
          className="w-full pl-10 pr-10 py-3 rounded-2xl bg-slate-900/80 border border-emerald-800/40 text-slate-100 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 shadow-inner transition-all"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-white"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Filter Chips Scrollbar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar text-xs">
        <span className="text-slate-400 shrink-0 flex items-center gap-1 font-medium pl-1">
          <Filter className="w-3 h-3" />
          <span>Filter:</span>
        </span>
        {FILTER_TAGS.map((tag) => {
          const isActive = activeTag === tag;
          return (
            <button
              key={tag}
              id={`filter-${tag.toLowerCase()}`}
              onClick={() => setActiveTag(tag)}
              className={`px-3 py-1.5 rounded-full font-semibold whitespace-nowrap transition-all active:scale-95 ${
                isActive
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-600/30'
                  : 'bg-slate-900/60 text-slate-300 hover:bg-slate-800 border border-emerald-900/40'
              }`}
            >
              {tag}
            </button>
          );
        })}
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs text-slate-400 px-1">
        <span>Showing {filteredPlants.length} medicinal entries</span>
        {activeTag !== 'All' && (
          <button
            onClick={() => setActiveTag('All')}
            className="text-amber-300 hover:underline"
          >
            Clear filter
          </button>
        )}
      </div>

      {/* Grid of Plant Cards */}
      {filteredPlants.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPlants.map((plant) => (
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
      ) : (
        <div className="py-16 text-center space-y-3 bg-slate-900/40 rounded-3xl border border-emerald-900/30">
          <div className="w-12 h-12 mx-auto rounded-full bg-slate-800 flex items-center justify-center text-slate-400">
            <Search className="w-6 h-6" />
          </div>
          <p className="text-base font-semibold text-slate-200">
            No medicinal herbs found matching "{searchQuery}"
          </p>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            Try searching for "Bael", "बेल", "Aegle marmelos", "Fruit", or "Digestion".
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setActiveTag('All');
            }}
            className="px-4 py-2 rounded-xl bg-emerald-800/60 hover:bg-emerald-700/70 text-emerald-200 text-xs font-semibold"
          >
            Reset Search
          </button>
        </div>
      )}
    </div>
  );
};

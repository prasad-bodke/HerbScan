import React, { useState } from 'react';
import {
  X,
  Bookmark,
  Share2,
  AlertTriangle,
  FlaskConical,
  Trophy,
  CheckCircle,
  HelpCircle,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Dna,
  Pill,
  BookOpen,
} from 'lucide-react';
import { MedicinalPlant } from '../types';

interface PlantDetailModalProps {
  plant: MedicinalPlant | null;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string, e: React.MouseEvent) => void;
  onLaunchResearch: (plant: MedicinalPlant, formulationType?: string) => void;
  onSharePlant: (plant: MedicinalPlant) => void;
}

export const PlantDetailModal: React.FC<PlantDetailModalProps> = ({
  plant,
  onClose,
  isFavorite,
  onToggleFavorite,
  onLaunchResearch,
  onSharePlant,
}) => {
  const [selectedQuizAnswer, setSelectedQuizAnswer] = useState<number | null>(null);
  const [showQuizResult, setShowQuizResult] = useState(false);

  if (!plant) return null;

  const handleSelectAnswer = (idx: number) => {
    if (showQuizResult) return;
    setSelectedQuizAnswer(idx);
    setShowQuizResult(true);
  };

  const handleResetQuiz = () => {
    setSelectedQuizAnswer(null);
    setShowQuizResult(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        id="plant-detail-dialog"
        className="relative w-full max-w-2xl bg-[#0f1f18] text-slate-100 rounded-t-3xl sm:rounded-3xl border border-emerald-800/40 shadow-2xl max-h-[92vh] flex flex-col overflow-hidden"
      >
        {/* Top Image Banner */}
        <div className="relative h-60 w-full shrink-0 overflow-hidden bg-slate-900">
          <img
            src={plant.image}
            alt={plant.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f18] via-[#0f1f18]/40 to-transparent"></div>

          {/* Action Bar overlay */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="bg-emerald-950/90 backdrop-blur-md border border-emerald-600/50 text-amber-300 px-3 py-1 rounded-full text-xs font-bold shadow-md">
                मराठी: {plant.marathiName}
              </span>
              <span className="bg-emerald-950/80 backdrop-blur-md border border-emerald-700/40 text-emerald-200 px-2.5 py-1 rounded-full text-xs font-mono">
                {plant.family}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                id="btn-fav-detail"
                onClick={(e) => onToggleFavorite(plant.id, e)}
                className={`p-2.5 rounded-full backdrop-blur-md border transition-all ${
                  isFavorite
                    ? 'bg-amber-500 text-slate-950 border-amber-400'
                    : 'bg-black/40 text-white border-white/20 hover:bg-black/60'
                }`}
                aria-label="Save to favorites"
              >
                <Bookmark className={`w-4 h-4 ${isFavorite ? 'fill-slate-950' : ''}`} />
              </button>

              <button
                id="btn-share-detail"
                onClick={() => onSharePlant(plant)}
                className="p-2.5 rounded-full bg-black/40 hover:bg-black/60 text-white border border-white/20 transition-all backdrop-blur-md"
                aria-label="Share herb details"
              >
                <Share2 className="w-4 h-4" />
              </button>

              <button
                id="btn-close-detail"
                onClick={onClose}
                className="p-2.5 rounded-full bg-black/50 hover:bg-black/70 text-white border border-white/20 transition-all backdrop-blur-md"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Title Header */}
          <div className="absolute bottom-3 left-5 right-5 text-left">
            <div className="flex items-baseline gap-2">
              <h2 className="text-2xl font-black text-white tracking-tight">
                {plant.name}
              </h2>
              <span className="text-lg font-bold text-amber-300 font-sans">
                {plant.marathiName}
              </span>
            </div>
            <p className="text-sm text-emerald-300 italic font-serif mt-0.5">
              Botanical: {plant.botanicalName}
            </p>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-5 overflow-y-auto space-y-6 text-left text-sm text-slate-200 divide-y divide-emerald-900/30">
          {/* Quick Overview Badges */}
          <div className="grid grid-cols-2 gap-3 pt-1">
            <div className="bg-emerald-950/60 p-3 rounded-xl border border-emerald-800/30">
              <span className="text-[11px] text-emerald-400 font-bold uppercase tracking-wider block mb-1">
                🌿 Part Commonly Used
              </span>
              <p className="text-sm font-semibold text-slate-100">
                {plant.partUsed}
              </p>
            </div>
            <div className="bg-emerald-950/60 p-3 rounded-xl border border-emerald-800/30">
              <span className="text-[11px] text-amber-400 font-bold uppercase tracking-wider block mb-1">
                ⭐ Prabhava / Action
              </span>
              <p className="text-sm font-semibold text-amber-200 truncate">
                {plant.ayurvedicProperties.prabhava || plant.ayurvedicProperties.doshaKarma}
              </p>
            </div>
          </div>

          {/* Ayurvedic Properties (Dravyaguna Vigyan) */}
          <div className="pt-5 space-y-3">
            <div className="flex items-center gap-2 text-emerald-400 font-bold">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <h3 className="text-sm uppercase tracking-wider">Ayurvedic Energetics (गुणधर्म)</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
              <div className="bg-slate-900/70 p-2.5 rounded-lg border border-emerald-900/40">
                <span className="text-emerald-400 font-semibold block">Rasa (Taste)</span>
                <span className="text-slate-200">{plant.ayurvedicProperties.rasa}</span>
              </div>
              <div className="bg-slate-900/70 p-2.5 rounded-lg border border-emerald-900/40">
                <span className="text-emerald-400 font-semibold block">Guna (Qualities)</span>
                <span className="text-slate-200">{plant.ayurvedicProperties.guna}</span>
              </div>
              <div className="bg-slate-900/70 p-2.5 rounded-lg border border-emerald-900/40">
                <span className="text-emerald-400 font-semibold block">Virya (Potency)</span>
                <span className="text-slate-200">{plant.ayurvedicProperties.virya}</span>
              </div>
              <div className="bg-slate-900/70 p-2.5 rounded-lg border border-emerald-900/40">
                <span className="text-emerald-400 font-semibold block">Vipaka (Post-Digestive)</span>
                <span className="text-slate-200">{plant.ayurvedicProperties.vipaka}</span>
              </div>
              <div className="bg-slate-900/70 p-2.5 rounded-lg border border-emerald-900/40 col-span-2">
                <span className="text-emerald-400 font-semibold block">Dosha Karma</span>
                <span className="text-slate-200">{plant.ayurvedicProperties.doshaKarma}</span>
              </div>
            </div>
          </div>

          {/* Traditional / Educational Uses */}
          <div className="pt-5 space-y-2.5">
            <div className="flex items-center gap-2 text-emerald-400 font-bold">
              <BookOpen className="w-4 h-4" />
              <h3 className="text-sm uppercase tracking-wider">📖 Traditional & Educational Uses</h3>
            </div>
            <ul className="space-y-2">
              {plant.traditionalUses.map((use, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"></span>
                  <span>{use}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Basic Safety Precautions */}
          <div className="pt-5 space-y-2.5">
            <div className="flex items-center gap-2 text-amber-400 font-bold">
              <AlertTriangle className="w-4 h-4" />
              <h3 className="text-sm uppercase tracking-wider">⚠️ Basic Safety Precautions</h3>
            </div>
            <div className="bg-amber-950/30 border border-amber-800/40 rounded-xl p-3.5 space-y-2">
              {plant.safetyPrecautions.map((precaution, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-amber-200/90 leading-relaxed">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>{precaution}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Important Phytochemicals */}
          <div className="pt-5 space-y-2.5">
            <div className="flex items-center gap-2 text-emerald-400 font-bold">
              <Dna className="w-4 h-4 text-emerald-400" />
              <h3 className="text-sm uppercase tracking-wider">🧪 Important Phytochemicals</h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {plant.phytochemicals.map((chemical, idx) => (
                <span
                  key={idx}
                  className="bg-emerald-950/70 border border-emerald-700/40 text-emerald-200 px-3 py-1 rounded-full text-xs font-mono font-medium"
                >
                  {chemical}
                </span>
              ))}
            </div>
          </div>

          {/* Common Dosage Forms & Formulations */}
          <div className="pt-5 space-y-2.5">
            <div className="flex items-center gap-2 text-emerald-400 font-bold">
              <Pill className="w-4 h-4 text-teal-400" />
              <h3 className="text-sm uppercase tracking-wider">📌 Common Dosage Forms & Formulations</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {plant.dosageForms.map((dose, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-lg bg-slate-900/60 border border-emerald-900/40 text-xs text-slate-200 font-medium flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-teal-400 shrink-0"></span>
                  <span>{dose}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Research Idea Generator Hub (Highlighted feature!) */}
          <div className="pt-5 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-emerald-300 font-bold">
                <FlaskConical className="w-4 h-4 text-emerald-400" />
                <h3 className="text-sm uppercase tracking-wider">💡 Research Idea Generator</h3>
              </div>
              <button
                id="btn-launch-research-top"
                onClick={() => onLaunchResearch(plant)}
                className="text-xs text-amber-300 hover:text-amber-200 font-semibold flex items-center gap-1 underline underline-offset-4"
              >
                <span>Full Protocol Studio</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <p className="text-xs text-slate-300">
              Transform {plant.name} into innovative standardized drug delivery systems with verified evaluation parameters:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {plant.researchPossibilities.map((research, idx) => (
                <div
                  key={idx}
                  className="bg-emerald-950/40 hover:bg-emerald-950/70 border border-emerald-800/40 hover:border-emerald-500/50 rounded-xl p-3.5 transition-all flex flex-col justify-between gap-3 group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="px-2 py-0.5 rounded-md bg-emerald-800/60 text-emerald-200 text-xs font-bold">
                        {research.formulationType}
                      </span>
                      <span className="text-[11px] text-slate-400 font-mono">
                        {research.plantPart}
                      </span>
                    </div>
                    <p className="text-xs text-slate-200 font-medium leading-relaxed mb-2">
                      {research.rationale}
                    </p>
                    <div className="bg-slate-950/50 p-2 rounded-lg text-[11px] text-slate-300">
                      <span className="text-amber-400 font-semibold block mb-0.5">Evaluation:</span>
                      <span className="line-clamp-2">{research.evaluationParameters}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => onLaunchResearch(plant, research.formulationType)}
                    className="w-full py-1.5 px-3 rounded-lg bg-emerald-800/40 hover:bg-emerald-700/60 text-emerald-200 text-xs font-semibold flex items-center justify-center gap-1.5 border border-emerald-700/50 transition-all active:scale-95"
                  >
                    <span>Generate Formulation Dossier</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Plant Quiz */}
          <div className="pt-5 space-y-3 pb-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-amber-300 font-bold">
                <Trophy className="w-4 h-4 text-amber-400" />
                <h3 className="text-sm uppercase tracking-wider">⭐ Plant Knowledge Quiz</h3>
              </div>
              {showQuizResult && (
                <button
                  onClick={handleResetQuiz}
                  className="text-xs text-emerald-400 hover:text-emerald-300 font-medium"
                >
                  Try Again
                </button>
              )}
            </div>

            <div className="bg-slate-900/80 border border-emerald-800/30 rounded-2xl p-4">
              <p className="text-sm font-semibold text-slate-100 mb-3 flex items-start gap-2">
                <HelpCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{plant.quiz.question}</span>
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {plant.quiz.options.map((option, idx) => {
                  let btnStyle = 'bg-slate-800/70 hover:bg-slate-700/70 text-slate-200 border-slate-700';

                  if (showQuizResult) {
                    if (idx === plant.quiz.correctAnswerIndex) {
                      btnStyle = 'bg-emerald-600/40 text-emerald-100 border-emerald-500 font-bold ring-2 ring-emerald-500/50';
                    } else if (idx === selectedQuizAnswer) {
                      btnStyle = 'bg-rose-900/40 text-rose-200 border-rose-600 font-semibold';
                    } else {
                      btnStyle = 'opacity-50 border-slate-800';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectAnswer(idx)}
                      disabled={showQuizResult}
                      className={`p-2.5 rounded-xl border text-xs text-left transition-all flex items-center justify-between ${btnStyle}`}
                    >
                      <span>{option}</span>
                      {showQuizResult && idx === plant.quiz.correctAnswerIndex && (
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 ml-1" />
                      )}
                    </button>
                  );
                })}
              </div>

              {showQuizResult && (
                <div className="mt-3 p-3 rounded-xl bg-emerald-950/70 border border-emerald-700/50 text-xs text-emerald-200 leading-relaxed">
                  <span className="font-bold text-emerald-300 block mb-0.5">
                    {selectedQuizAnswer === plant.quiz.correctAnswerIndex ? '🎉 Correct!' : '💡 Explanation:'}
                  </span>
                  {plant.quiz.explanation}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Fixed Footer Bar */}
        <div className="p-3.5 bg-emerald-950/90 border-t border-emerald-800/40 flex items-center justify-between gap-3 shrink-0">
          <button
            onClick={() => onSharePlant(plant)}
            className="flex-1 py-2.5 px-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-emerald-300 font-semibold text-xs border border-emerald-700/40 flex items-center justify-center gap-2 active:scale-95 transition-all"
          >
            <Share2 className="w-4 h-4" />
            <span>Share Herb</span>
          </button>
          <button
            onClick={() => onLaunchResearch(plant)}
            className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:brightness-110 text-emerald-950 font-bold text-xs shadow-lg shadow-emerald-900/40 flex items-center justify-center gap-2 active:scale-95 transition-all"
          >
            <FlaskConical className="w-4 h-4" />
            <span>Research Ideas</span>
          </button>
        </div>
      </div>
    </div>
  );
};

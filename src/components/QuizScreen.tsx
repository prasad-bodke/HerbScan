import React, { useState } from 'react';
import {
  Trophy,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Sparkles,
  ArrowRight,
  HelpCircle,
  Flame,
  Award,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { HERBAL_DATABASE } from '../data/herbalDatabase';
import { MedicinalPlant } from '../types';

interface QuizScreenProps {
  onExplorePlant: (plant: MedicinalPlant) => void;
}

export const QuizScreen: React.FC<QuizScreenProps> = ({ onExplorePlant }) => {
  // Aggregate quizzes from the database + custom Ayurvedic questions
  const quizList = HERBAL_DATABASE.map((plant) => ({
    plantId: plant.id,
    plantName: plant.name,
    marathiName: plant.marathiName,
    ...plant.quiz,
  }));

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const currentQuiz = quizList[currentIndex];
  const associatedPlant = HERBAL_DATABASE.find((p) => p.id === currentQuiz.plantId);

  const handleSelectOption = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);

    if (index === currentQuiz.correctAnswerIndex) {
      setScore((prev) => prev + 10);
      setStreak((prev) => prev + 1);
      confetti({
        particleCount: 35,
        spread: 60,
        origin: { y: 0.7 },
      });
    } else {
      setStreak(0);
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex + 1 < quizList.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setQuizFinished(true);
      confetti({
        particleCount: 120,
        spread: 90,
        origin: { y: 0.5 },
      });
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setStreak(0);
    setQuizFinished(false);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-4 space-y-6 pb-24 text-left">
      {/* Header */}
      <div className="space-y-1 text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold">
          <Trophy className="w-3.5 h-3.5" />
          <span>Ayurvedic Botanical & Formulation Quiz</span>
        </div>
        <h2 className="text-2xl font-black text-white tracking-tight">
          Quiz 🎯
        </h2>
        <p className="text-xs text-emerald-300/80">
          Master plant identification, Marathi names, active markers, and pharmacognosy.
        </p>
      </div>

      {/* Score & Streak HUD */}
      <div className="flex items-center justify-between bg-slate-900/80 border border-emerald-800/40 rounded-2xl px-5 py-3 shadow-md">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold text-xs">
            ⭐
          </div>
          <div>
            <span className="text-[10px] text-slate-400 font-semibold uppercase block">
              Score
            </span>
            <span className="text-sm font-black text-white">{score} pts</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center font-bold text-xs">
            <Flame className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] text-slate-400 font-semibold uppercase block">
              Streak
            </span>
            <span className="text-sm font-black text-amber-300">{streak} 🔥</span>
          </div>
        </div>

        <div className="text-right">
          <span className="text-[10px] text-slate-400 font-semibold uppercase block">
            Question
          </span>
          <span className="text-xs font-bold text-emerald-300">
            {currentIndex + 1} of {quizList.length}
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-emerald-500 to-amber-400 transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / quizList.length) * 100}%` }}
        ></div>
      </div>

      {/* Quiz Finished State */}
      {quizFinished ? (
        <div className="bg-slate-900/90 border border-emerald-700/50 rounded-3xl p-6 text-center space-y-5 shadow-2xl animate-in zoom-in-95 duration-200">
          <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 flex items-center justify-center mx-auto shadow-lg">
            <Award className="w-8 h-8" />
          </div>
          <div className="space-y-1">
            <h3 className="text-xl font-black text-white">Quiz Completed!</h3>
            <p className="text-sm text-emerald-300 font-semibold">
              Final Score: {score} / {quizList.length * 10} points
            </p>
            <p className="text-xs text-slate-300 max-w-sm mx-auto pt-1">
              You have demonstrated strong grasp of Ayurvedic Dravyaguna, plant biomarkers, and pharmaceutical formulations.
            </p>
          </div>

          <button
            onClick={handleRestart}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-500 text-emerald-950 font-bold text-sm shadow-lg shadow-emerald-900/40 active:scale-95 transition-all"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Play Again</span>
          </button>
        </div>
      ) : (
        /* Active Question Card */
        <div className="bg-slate-900/90 border border-emerald-700/40 rounded-3xl p-5 sm:p-6 space-y-5 shadow-xl">
          {/* Question Plant Tag */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-amber-300 bg-emerald-950/90 px-3 py-1 rounded-full border border-emerald-700/40">
                {currentQuiz.plantName}
              </span>
              <span className="text-xs text-emerald-400 font-mono">
                {currentQuiz.marathiName}
              </span>
            </div>
          </div>

          {/* Question Text */}
          <p className="text-base font-bold text-white leading-snug flex items-start gap-2">
            <HelpCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <span>{currentQuiz.question}</span>
          </p>

          {/* Options */}
          <div className="space-y-2.5">
            {currentQuiz.options.map((option, idx) => {
              let btnStyle =
                'bg-slate-950/70 hover:bg-slate-800 text-slate-200 border-emerald-900/40';

              if (isAnswered) {
                if (idx === currentQuiz.correctAnswerIndex) {
                  btnStyle =
                    'bg-emerald-950/90 text-emerald-100 border-emerald-500 font-bold ring-2 ring-emerald-500/50';
                } else if (idx === selectedOption) {
                  btnStyle = 'bg-rose-950/80 text-rose-200 border-rose-600 font-semibold';
                } else {
                  btnStyle = 'opacity-40 border-transparent';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={isAnswered}
                  className={`w-full p-3.5 rounded-2xl border text-xs sm:text-sm text-left transition-all flex items-center justify-between active:scale-[0.99] ${btnStyle}`}
                >
                  <span className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-lg bg-slate-800/80 text-slate-300 text-xs font-bold flex items-center justify-center shrink-0">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span>{option}</span>
                  </span>

                  {isAnswered && idx === currentQuiz.correctAnswerIndex && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  )}
                  {isAnswered && idx === selectedOption && idx !== currentQuiz.correctAnswerIndex && (
                    <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation & Action footer */}
          {isAnswered && (
            <div className="space-y-4 pt-2 border-t border-emerald-900/40 animate-in fade-in duration-150">
              <div className="p-3.5 rounded-2xl bg-emerald-950/70 border border-emerald-700/40 text-xs text-slate-200 space-y-1">
                <span className="font-bold text-emerald-300 block">
                  {selectedOption === currentQuiz.correctAnswerIndex ? '🎉 Excellent Answer!' : '💡 Botanical Insight:'}
                </span>
                <p className="leading-relaxed">{currentQuiz.explanation}</p>
              </div>

              <div className="flex items-center justify-between gap-3">
                {associatedPlant && (
                  <button
                    onClick={() => onExplorePlant(associatedPlant)}
                    className="text-xs text-amber-300 hover:text-amber-200 font-semibold flex items-center gap-1 underline underline-offset-4"
                  >
                    <span>View {associatedPlant.name} Details</span>
                  </button>
                )}

                <button
                  onClick={handleNextQuestion}
                  className="ml-auto flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:brightness-110 text-emerald-950 font-bold text-xs shadow-md shadow-emerald-900/30 active:scale-95 transition-all"
                >
                  <span>{currentIndex + 1 < quizList.length ? 'Next Question' : 'View Results'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

import React, { useState } from 'react';
import { X, Share2, Copy, Check, MessageCircle, Twitter, Send, Users } from 'lucide-react';
import { MedicinalPlant } from '../types';

interface ShareModalProps {
  plant: MedicinalPlant | null;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ plant, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!plant) return null;

  const shareTitle = `HerbScan: ${plant.name} (${plant.marathiName})`;
  const shareText = `🌿 Discover Ayurvedic Wisdom: ${plant.name} (${plant.marathiName}) - ${plant.botanicalName}.
Part Used: ${plant.partUsed}
Traditional Use: ${plant.traditionalUses[0]}
Key Phytochemicals: ${plant.phytochemicals.slice(0, 3).join(', ')}
Ayurvedic Action: ${plant.ayurvedicProperties.prabhava || plant.ayurvedicProperties.doshaKarma}.
Shared via HerbScan - "Scan a plant, learn its value."`;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: window.location.href,
        });
      } catch (err) {
        console.warn('Share cancelled or failed', err);
      }
    } else {
      handleCopy();
    }
  };

  const handleWhatsAppShare = () => {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
    window.open(url, '_blank');
  };

  const handleTwitterShare = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      `🌿 Discover Ayurvedic Wisdom: ${plant.name} (${plant.marathiName}) with #HerbScan! #Ayurveda #MedicinalPlants #Pharmacognosy`
    )}&url=${encodeURIComponent(window.location.href)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        id="share-dialog"
        className="w-full max-w-md bg-[#0f1f18] text-slate-100 rounded-3xl border border-emerald-800/50 shadow-2xl p-6 space-y-5 text-left"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-emerald-800/50 text-emerald-300 flex items-center justify-center">
              <Share2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Share Health Knowledge</h3>
              <p className="text-[11px] text-emerald-400">Spread herbal wellness with your community</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-all"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Share Preview Card */}
        <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-emerald-800/40 space-y-2">
          <div className="flex items-center gap-2.5">
            <img
              src={plant.image}
              alt={plant.name}
              className="w-12 h-12 rounded-xl object-cover border border-emerald-700/40 shrink-0"
            />
            <div className="min-w-0">
              <h4 className="text-sm font-bold text-white truncate">
                {plant.name} • {plant.marathiName}
              </h4>
              <p className="text-xs text-emerald-300 italic font-serif truncate">
                {plant.botanicalName}
              </p>
            </div>
          </div>
          <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed border-t border-emerald-900/40 pt-2">
            {plant.traditionalUses[0]}
          </p>
        </div>

        {/* Social Share Buttons */}
        <div className="grid grid-cols-2 gap-2.5">
          <button
            onClick={handleWhatsAppShare}
            className="flex items-center justify-center gap-2 p-3 rounded-xl bg-emerald-700/30 hover:bg-emerald-700/50 text-emerald-200 border border-emerald-600/40 text-xs font-bold transition-all active:scale-95"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp</span>
          </button>

          <button
            onClick={handleTwitterShare}
            className="flex items-center justify-center gap-2 p-3 rounded-xl bg-sky-900/30 hover:bg-sky-900/50 text-sky-200 border border-sky-600/40 text-xs font-bold transition-all active:scale-95"
          >
            <Twitter className="w-4 h-4 text-sky-400" />
            <span>X / Twitter</span>
          </button>
        </div>

        {/* Copy & Native Share */}
        <div className="space-y-2">
          <button
            onClick={handleNativeShare}
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:brightness-110 text-emerald-950 text-xs font-bold shadow-lg shadow-emerald-900/40 flex items-center justify-center gap-2 active:scale-95 transition-all"
          >
            <Send className="w-4 h-4" />
            <span>Share via Android Share Sheet</span>
          </button>

          <button
            onClick={handleCopy}
            className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-semibold border border-slate-700 flex items-center justify-center gap-2 active:scale-95 transition-all"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy Summary Text</span>
              </>
            )}
          </button>
        </div>

        <div className="flex items-center gap-2 text-[11px] text-amber-300/80 bg-amber-500/10 p-2.5 rounded-xl border border-amber-500/20">
          <Users className="w-4 h-4 text-amber-400 shrink-0" />
          <span>Together fostering a global community of Ayurvedic wellness enthusiasts!</span>
        </div>
      </div>
    </div>
  );
};

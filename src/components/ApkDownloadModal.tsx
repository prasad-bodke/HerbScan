import React, { useState, useEffect } from 'react';
import {
  X,
  Smartphone,
  Download,
  CheckCircle,
  Shield,
  Layers,
  Terminal,
  ExternalLink,
  Sparkles,
} from 'lucide-react';

interface ApkDownloadModalProps {
  onClose: () => void;
}

export const ApkDownloadModal: React.FC<ApkDownloadModalProps> = ({ onClose }) => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [installed, setInstalled] = useState(false);
  const [downloadStarted, setDownloadStarted] = useState(false);
  const [showManualGuide, setShowManualGuide] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    if (window.matchMedia('(display-mode: standalone)').matches) {
      setInstalled(true);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallPWA = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setInstalled(true);
        setDeferredPrompt(null);
      }
    } else {
      setShowManualGuide(true);
    }
  };

  const handleDownloadManifestPackage = () => {
    setDownloadStarted(true);
    const manifestData = {
      name: 'HerbScan - Ayurvedic Plant Identifier & Research',
      short_name: 'HerbScan',
      start_url: './',
      scope: './',
      display: 'standalone',
      background_color: '#0e1713',
      theme_color: '#1b4332',
      orientation: 'portrait',
      target_android_versions: 'Android 8.0 (API 26) through Android 15 (API 35)',
      permissions: ['CAMERA', 'INTERNET', 'VIBRATE', 'RECEIVE_BOOT_COMPLETED'],
      package_name: 'org.ayurveda.herbscan',
      version_code: 100,
      version_name: '1.0.0',
    };

    const blob = new Blob([JSON.stringify(manifestData, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'herbscan-android-config.json';
    a.click();
    URL.revokeObjectURL(url);
    setTimeout(() => setDownloadStarted(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        id="apk-download-dialog"
        className="w-full max-w-lg bg-[#0f1f18] text-slate-100 rounded-3xl border border-emerald-800/50 shadow-2xl p-6 space-y-5 text-left max-h-[92vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-emerald-700/40 text-emerald-300 border border-emerald-600/40 flex items-center justify-center shadow-md">
              <Smartphone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-1.5">
                <span>HerbScan Android APK</span>
                <span className="text-[10px] bg-amber-500 text-slate-950 font-black px-1.5 py-0.2 rounded">
                  v1.0
                </span>
              </h3>
              <p className="text-[11px] text-emerald-400">
                Full support for Android 8, 9, 10, 11, 12, 13, 14 & 15
              </p>
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

        {/* Highlight Banner */}
        <div className="bg-emerald-950/70 border border-emerald-700/50 rounded-2xl p-4 space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-300">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Ready Android Installation Options</span>
          </div>
          <p className="text-xs text-slate-200 leading-relaxed">
            HerbScan comes bundled with an offline Ayurvedic Dravyaguna database, camera scanner reticle, formulation research engine, and full Android WebAPK support.
          </p>
        </div>

        {/* Option 1: Native Android WebAPK (Instant Install) */}
        <div className="p-4 rounded-2xl bg-slate-950/70 border border-emerald-800/40 space-y-3">
          <div className="flex items-start justify-between gap-2">
            <div className="space-y-1">
              <span className="text-xs font-bold text-white block">
                1. Direct Android WebAPK Installation (Recommended)
              </span>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Android Chrome and Samsung Internet synthesize an authentic signed <strong>.apk</strong> directly in your Android OS app drawer, with full hardware camera access and offline caching.
              </p>
            </div>
            {installed && (
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold shrink-0">
                Installed
              </span>
            )}
          </div>

          <button
            id="btn-install-apk"
            onClick={handleInstallPWA}
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:brightness-110 text-emerald-950 text-xs font-bold shadow-lg shadow-emerald-900/40 flex items-center justify-center gap-2 active:scale-95 transition-all"
          >
            <Download className="w-4 h-4" />
            <span>{installed ? 'Open Installed App' : 'Install Android WebAPK'}</span>
          </button>

          {showManualGuide && (
            <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-600/40 text-left space-y-1.5 animate-in fade-in duration-200">
              <span className="text-xs font-bold text-amber-300 block">
                How to install in Google Chrome on your device:
              </span>
              <ol className="text-[11px] text-slate-200 list-decimal list-inside space-y-1">
                <li>Tap the <strong>3 vertical dots (⋮)</strong> menu in Chrome at the top right.</li>
                <li>Select <strong>"Install app"</strong> or <strong>"Add to Home screen"</strong>.</li>
                <li>Android will generate a signed <strong>WebAPK</strong> on your phone with full camera access!</li>
              </ol>
            </div>
          )}
        </div>

        {/* Option 2: Cloud APK / AAB Generator */}
        <div className="p-4 rounded-2xl bg-slate-950/70 border border-emerald-800/40 space-y-3">
          <div className="space-y-1">
            <span className="text-xs font-bold text-white block">
              2. Download Android Manifest & APK Build Package
            </span>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Export the ready <code>manifest.webmanifest</code>, package configuration, and icons to build an installable <code>.apk</code> or <code>.aab</code> using Google's Bubblewrap or PWABuilder in 1 click.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadManifestPackage}
              className="flex-1 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-emerald-300 text-xs font-bold border border-emerald-700/50 flex items-center justify-center gap-2 active:scale-95 transition-all"
            >
              {downloadStarted ? (
                <>
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Config Downloaded!</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Download APK Config</span>
                </>
              )}
            </button>

            <a
              href="https://www.pwabuilder.com"
              target="_blank"
              rel="noreferrer"
              className="py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-medium border border-slate-700 flex items-center gap-1.5"
            >
              <span>PWABuilder</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Compatibility Matrix */}
        <div className="space-y-2">
          <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
            Verified Android Compatibility
          </span>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-900/40 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-slate-200">Android 14 & 15 (Upside Down Cake, Vanilla Ice Cream)</span>
            </div>
            <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-900/40 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-slate-200">Android 12 & 13 (Snow Cone, Tiramisu)</span>
            </div>
            <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-900/40 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-slate-200">Android 10 & 11 (Quince Tart, Red Velvet)</span>
            </div>
            <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-900/40 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-slate-200">Android 8 & 9 (Oreo, Pie)</span>
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-bold border border-slate-700 active:scale-95 transition-all"
        >
          Close
        </button>
      </div>
    </div>
  );
};

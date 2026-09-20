import React, { useState, useEffect } from 'react';
import { X, Bell, Check, Sparkles, Clock, ShieldCheck, Send } from 'lucide-react';
import { DAILY_TIPS } from '../data/herbalDatabase';

interface NotificationModalProps {
  onClose: () => void;
}

export const NotificationModal: React.FC<NotificationModalProps> = ({ onClose }) => {
  const [permission, setPermission] = useState<NotificationPermission>(
    typeof Notification !== 'undefined' ? Notification.permission : 'default'
  );
  const [reminderTime, setReminderTime] = useState('08:00');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [testSent, setTestSent] = useState(false);

  useEffect(() => {
    const savedTime = localStorage.getItem('herbscan_tip_time');
    if (savedTime) setReminderTime(savedTime);
    const savedToggle = localStorage.getItem('herbscan_tip_enabled');
    if (savedToggle !== null) setNotificationsEnabled(savedToggle === 'true');
  }, []);

  const requestPermission = async () => {
    if (typeof Notification !== 'undefined') {
      try {
        const result = await Notification.requestPermission();
        setPermission(result);
        if (result === 'granted') {
          sendSampleNotification();
        }
      } catch (err) {
        console.warn('Notification permission error:', err);
      }
    }
  };

  const handleToggle = (enabled: boolean) => {
    setNotificationsEnabled(enabled);
    localStorage.setItem('herbscan_tip_enabled', String(enabled));
  };

  const handleSaveTime = (timeStr: string) => {
    setReminderTime(timeStr);
    localStorage.setItem('herbscan_tip_time', timeStr);
  };

  const sendSampleNotification = () => {
    const randomTip = DAILY_TIPS[Math.floor(Math.random() * DAILY_TIPS.length)];
    if (typeof Notification !== 'undefined' && Notification.permission === 'granted') {
      try {
        new Notification(`🌿 HerbScan Daily Tip: ${randomTip.plantName}`, {
          body: randomTip.tip,
          icon: '/icon.svg',
          badge: '/icon.svg',
        });
      } catch (err) {
        console.warn('Native notification failed', err);
      }
    }
    setTestSent(true);
    setTimeout(() => setTestSent(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        id="notification-settings-dialog"
        className="w-full max-w-md bg-[#0f1f18] text-slate-100 rounded-3xl border border-emerald-800/50 shadow-2xl p-6 space-y-5 text-left max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center">
              <Bell className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Daily Herbal Wellness Tips</h3>
              <p className="text-[11px] text-emerald-400">Ayurvedic reminders & tricks</p>
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

        {/* Permission Request State */}
        <div className="p-4 rounded-2xl bg-slate-950/70 border border-emerald-800/40 space-y-3">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="text-xs font-bold text-white block">
                Android Push Notifications
              </span>
              <span className="text-[11px] text-slate-400">
                Receive one uplifting Ayurvedic health insight every morning.
              </span>
            </div>
            <span
              className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${
                permission === 'granted'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                  : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
              }`}
            >
              {permission}
            </span>
          </div>

          {permission !== 'granted' ? (
            <button
              onClick={requestPermission}
              className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-emerald-950 text-xs font-bold shadow-md active:scale-95 transition-all"
            >
              Enable Push Notifications
            </button>
          ) : (
            <div className="flex items-center justify-between pt-2 border-t border-emerald-900/40">
              <span className="text-xs text-emerald-300 flex items-center gap-1">
                <ShieldCheck className="w-4 h-4" />
                <span>Subscribed to daily tips</span>
              </span>
              <button
                onClick={sendSampleNotification}
                className="text-xs text-amber-300 hover:underline font-semibold flex items-center gap-1"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Test Alert</span>
              </button>
            </div>
          )}

          {testSent && (
            <div className="p-2 rounded-lg bg-emerald-900/60 border border-emerald-700/50 text-xs text-emerald-200 text-center animate-in fade-in">
              🔔 Daily wellness alert sent to your device!
            </div>
          )}
        </div>

        {/* Reminder Scheduler */}
        <div className="p-4 rounded-2xl bg-slate-950/70 border border-emerald-800/40 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-white flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span>Preferred Delivery Time</span>
            </span>
            <input
              type="time"
              value={reminderTime}
              onChange={(e) => handleSaveTime(e.target.value)}
              className="bg-slate-900 border border-emerald-800/50 rounded-lg px-2.5 py-1 text-xs text-amber-300 font-mono focus:outline-none"
            />
          </div>
          <p className="text-[11px] text-slate-400">
            Recommended: <strong>07:00 AM - 08:30 AM</strong> to align with the Ayurvedic Kapha morning rhythm and herbal decoction timing.
          </p>
        </div>

        {/* Daily Tip Feed Sample */}
        <div className="space-y-2">
          <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
            Upcoming Daily Herbal Tips
          </span>
          <div className="space-y-2">
            {DAILY_TIPS.slice(0, 3).map((tip, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-900/40 text-xs space-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-emerald-300">{tip.plantName}</span>
                  <span className="text-[10px] text-amber-300 font-mono">{tip.doshaBenefit}</span>
                </div>
                <p className="text-slate-300 leading-relaxed">{tip.tip}</p>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-bold border border-slate-700 active:scale-95 transition-all"
        >
          Done
        </button>
      </div>
    </div>
  );
};

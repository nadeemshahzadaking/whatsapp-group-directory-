
import React, { useState, useEffect } from 'react';
import { getAdForSlot } from '../config/ads-manager';
import { useLanguage } from '../context/LanguageContext';

interface AdInterstitialProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: () => void;
}

const AdInterstitial: React.FC<AdInterstitialProps> = ({ isOpen, onClose, onComplete }) => {
  const { t } = useLanguage();
  const [timer, setTimer] = useState(5);
  const adContent = getAdForSlot('interstitialAd') || getAdForSlot('popupAd');

  useEffect(() => {
    let interval: any;
    if (isOpen && timer > 0) {
      interval = setInterval(() => setTimer((t) => t - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [isOpen, timer]);

  if (!isOpen || !adContent) {
    if (isOpen && !adContent) {
      onComplete();
    }
    return null;
  }

  return (
    <div className="fixed inset-0 z-[300] bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-white rounded-[2rem] max-w-2xl w-full overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-300">
        
        <div className="bg-slate-900 p-4 flex justify-between items-center text-white">
          <span className="text-xs font-bold uppercase tracking-widest opacity-60">
            {t.dir === 'rtl' ? 'اشتہار لوڈ ہو رہا ہے' : 'Advertisement'}
          </span>
          <button 
            disabled={timer > 0}
            onClick={onComplete}
            className={`px-4 py-1 rounded-full font-bold text-sm transition-all ${timer > 0 ? 'bg-slate-800 text-slate-500' : 'bg-[#25D366] text-white hover:bg-[#128C7E]'}`}
          >
            {timer > 0 ? `${t.dir === 'rtl' ? 'انتظار کریں' : 'Wait'} ${timer}s` : (t.dir === 'rtl' ? 'آگے بڑھیں' : 'Continue')}
          </button>
        </div>

        <div className="min-h-[400px] flex flex-col items-center justify-center p-4">
          <div 
            className="w-full h-full flex items-center justify-center"
            dangerouslySetInnerHTML={{ __html: adContent }}
          />
        </div>
        
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
        >✕</button>
      </div>
    </div>
  );
};

export default AdInterstitial;

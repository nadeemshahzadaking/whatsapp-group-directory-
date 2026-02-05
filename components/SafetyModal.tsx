
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface SafetyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SafetyModal: React.FC<SafetyModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl text-center transform transition-all animate-in zoom-in-95 duration-200">
        <div className="w-20 h-20 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
          🛑
        </div>
        <h2 className="text-2xl font-black text-slate-900 mb-4">{t.safetyTitle}</h2>
        <p className="text-slate-600 text-lg mb-8 leading-relaxed whitespace-pre-line">
          {t.safetyMessage}
        </p>
        <button
          onClick={onClose}
          className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all active:scale-95"
        >
          {t.closeBtn}
        </button>
      </div>
    </div>
  );
};

export default SafetyModal;

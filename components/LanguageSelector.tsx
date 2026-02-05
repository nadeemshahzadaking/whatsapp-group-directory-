
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../types';
import { TRANSLATIONS } from '../translations';

const LanguageSelector: React.FC = () => {
  const { setLanguage, setAgreedTerms, language: currentLang, showSelector, setShowSelector } = useLanguage();
  const [showTerms, setShowTerms] = useState(false);
  const [selectedLang, setSelectedLang] = useState<Language | null>(currentLang);
  const [checkedTerms, setCheckedTerms] = useState<boolean[]>([false, false, false, false]);

  if (!showSelector) return null;

  const options: { id: Language; label: string; sub: string }[] = [
    { id: 'en', label: 'English', sub: 'Global' },
    { id: 'ur', label: 'اردو', sub: 'قومی زبان' },
    { id: 'roman', label: 'Roman Urdu', sub: 'Urdu English Script' },
    { id: 'ar', label: 'العربية', sub: 'اللغة الفصحى' },
  ];

  const selectLanguage = (id: Language) => {
    setSelectedLang(id);
    setLanguage(id);
    setShowTerms(true);
  };

  const toggleCheck = (idx: number) => {
    const next = [...checkedTerms];
    next[idx] = !next[idx];
    setCheckedTerms(next);
  };

  const allChecked = checkedTerms.every(v => v === true);
  const t = selectedLang ? TRANSLATIONS[selectedLang] : TRANSLATIONS['ur'];

  return (
    <div className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="max-w-xl w-full relative animate-in zoom-in-95 duration-300">
        <div className="bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-10 relative overflow-hidden">
           
           {/* Close Button if they want to cancel */}
           <button 
             onClick={() => setShowSelector(false)}
             className="absolute top-6 right-6 text-slate-300 hover:text-slate-600 text-2xl"
           >✕</button>

          {!showTerms ? (
            <div>
              <div className="text-center mb-10">
                <div className="w-20 h-20 bg-emerald-50 text-[#25D366] rounded-3xl flex items-center justify-center mx-auto mb-4 text-4xl shadow-inner">
                  💬
                </div>
                <h1 className="text-3xl font-black text-slate-900 mb-2">Select Language</h1>
                <p className="text-slate-500 font-medium">پہلے اپنی زبان منتخب کریں</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {options.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => selectLanguage(opt.id)}
                    className={`p-6 rounded-3xl border-2 transition-all flex flex-col items-center gap-1 hover:border-[#25D366] hover:bg-green-50/30 ${selectedLang === opt.id ? 'border-[#25D366] bg-green-50' : 'border-slate-100'}`}
                  >
                    <div className="text-xl font-black text-slate-800">{opt.label}</div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase">{opt.sub}</div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className={`flex flex-col ${t.dir === 'rtl' ? 'text-right' : 'text-left'}`}>
              <div className="flex items-center gap-4 mb-6">
                 <button onClick={() => setShowTerms(false)} className="p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-all">
                   {t.dir === 'rtl' ? '→' : '←'}
                 </button>
                 <h2 className="text-2xl font-black text-slate-900">{t.termsTitle}</h2>
              </div>

              <p className="text-slate-500 mb-6 font-bold">{t.termsIntro}</p>

              <div className="space-y-3 mb-8">
                {t.termsList.map((item, idx) => (
                  <label key={idx} className={`flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border-2 cursor-pointer transition-all ${checkedTerms[idx] ? 'border-[#25D366] bg-green-50/50' : 'border-transparent'} ${t.dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                    <input 
                      type="checkbox" 
                      checked={checkedTerms[idx]} 
                      onChange={() => toggleCheck(idx)}
                      className="mt-1 w-5 h-5 accent-[#25D366]"
                    />
                    <span className="text-sm font-bold text-slate-700 leading-tight">{item}</span>
                  </label>
                ))}
              </div>

              <button
                disabled={!allChecked}
                onClick={() => setAgreedTerms(true)}
                className="w-full bg-[#25D366] text-white py-5 rounded-2xl font-black text-xl hover:bg-[#128C7E] transition-all disabled:opacity-30 disabled:grayscale disabled:cursor-not-allowed shadow-xl shadow-green-100 active:scale-95"
              >
                {t.agreeBtn}
              </button>
              
              <p className="text-center mt-4 text-[10px] text-slate-400 font-bold uppercase">
                تمام شرائط کو ٹک کرنا لازمی ہے
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;

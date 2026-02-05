
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, Translations } from '../types';
import { TRANSLATIONS } from '../translations';

interface LanguageContextType {
  language: Language | null;
  setLanguage: (lang: Language) => void;
  hasAgreedTerms: boolean;
  setAgreedTerms: (agreed: boolean) => void;
  t: Translations;
  showSelector: boolean;
  setShowSelector: (show: boolean) => void;
  requestAction: (action: () => void) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language | null>(() => {
    const stored = localStorage.getItem('preferred_lang') as Language;
    if (stored) return stored;
    return 'en'; // Changed default to English
  });

  const [hasAgreedTerms, setHasAgreedTermsState] = useState<boolean>(() => {
    return localStorage.getItem('agreed_terms') === 'true';
  });

  const [showSelector, setShowSelector] = useState(false);
  const [pendingAction, setPendingAction] = useState<(() => void) | null>(null);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('preferred_lang', lang);
  };

  const setAgreedTerms = (agreed: boolean) => {
    setHasAgreedTermsState(agreed);
    localStorage.setItem('agreed_terms', agreed ? 'true' : 'false');
    if (agreed && pendingAction) {
      pendingAction();
      setPendingAction(null);
    }
    setShowSelector(false);
  };

  const requestAction = (action: () => void) => {
    if (hasAgreedTerms) {
      action();
    } else {
      setPendingAction(() => action);
      setShowSelector(true);
    }
  };

  useEffect(() => {
    if (language) {
      const currentT = TRANSLATIONS[language];
      document.documentElement.setAttribute('dir', currentT.dir);
      document.documentElement.setAttribute('lang', language);
      document.title = currentT.title;
    }
  }, [language]);

  const t = language ? TRANSLATIONS[language] : TRANSLATIONS['en'];

  return (
    <LanguageContext.Provider value={{ 
      language, setLanguage, hasAgreedTerms, setAgreedTerms, t, 
      showSelector, setShowSelector, requestAction 
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};

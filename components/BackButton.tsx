
import React from 'react';
// Fix: Use named import for useNavigate to resolve type error
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const BackButton: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <button
      onClick={() => navigate(-1)}
      className={`mb-6 flex items-center gap-2 whatsapp-green-text font-bold hover:underline group ${t.dir === 'rtl' ? 'flex-row-reverse' : ''}`}
    >
      <span className={`transform transition-transform group-hover:scale-110 ${t.dir === 'rtl' ? 'rotate-180' : ''}`}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
      </span>
      <span>{t.backBtn}</span>
    </button>
  );
};

export default BackButton;

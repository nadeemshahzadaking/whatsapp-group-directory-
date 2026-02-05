
import React from 'react';
// Fix: Use named imports for Link and useLocation to resolve type errors
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Navbar: React.FC = () => {
  const location = useLocation();
  const { t, setLanguage, language } = useLanguage();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white border-b border-slate-100 sticky top-0 z-50 shadow-sm backdrop-blur-lg bg-white/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-black whatsapp-green-text flex items-center gap-2 hover:scale-105 transition-transform active:scale-95">
              <span className="text-3xl drop-shadow-sm">💬</span>
              <span className="hidden sm:inline tracking-tight">{t.title}</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <div className={`flex items-center gap-6 ${t.dir === 'rtl' ? 'flex-row-reverse' : 'flex-row'}`}>
                <Link
                  to="/"
                  className={`${isActive('/') ? 'text-[#25D366] font-black' : 'text-slate-500 font-bold hover:text-slate-800'} text-sm transition-all`}
                >
                  {t.homeLink}
                </Link>
                <Link
                  to="/groups"
                  className={`${isActive('/groups') ? 'text-[#25D366] font-black' : 'text-slate-500 font-bold hover:text-slate-800'} text-sm transition-all`}
                >
                  {t.viewLink}
                </Link>
                <Link
                  to="/add"
                  className={`${isActive('/add') ? 'text-[#25D366] font-black' : 'text-slate-500 font-bold hover:text-slate-800'} text-sm transition-all`}
                >
                  {t.addLink}
                </Link>
                <Link
                  to="/about"
                  className={`${isActive('/about') ? 'text-[#25D366] font-black' : 'text-slate-500 font-bold hover:text-slate-800'} text-sm transition-all`}
                >
                  {t.aboutLink}
                </Link>
                <Link
                  to="/official"
                  className={`${isActive('/official') ? 'text-[#25D366] font-black' : 'text-slate-500 font-bold hover:text-slate-800'} text-sm transition-all`}
                >
                  {t.officialLink}
                </Link>
                <Link
                  to="/promotion"
                  className={`relative group ${isActive('/promotion') ? 'text-blue-600 font-black' : 'text-slate-500 font-bold hover:text-slate-800'} text-sm transition-all`}
                >
                  <span className="animate-ping absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full opacity-75"></span>
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-blue-600 rounded-full"></span>
                  {t.promoLink}
                </Link>
            </div>

            <div className="flex items-center bg-slate-100 rounded-2xl p-1 gap-1 border border-slate-200">
                <button onClick={() => setLanguage('en')} className={`px-3 py-1.5 text-[10px] rounded-xl transition-all ${language === 'en' ? 'bg-white shadow-sm font-black text-slate-900' : 'text-slate-400 font-bold'}`}>EN</button>
                <button onClick={() => setLanguage('ur')} className={`px-3 py-1.5 text-[10px] rounded-xl transition-all ${language === 'ur' ? 'bg-white shadow-sm font-black text-slate-900' : 'text-slate-400 font-bold'}`}>اردو</button>
                <button onClick={() => setLanguage('roman')} className={`px-3 py-1.5 text-[10px] rounded-xl transition-all ${language === 'roman' ? 'bg-white shadow-sm font-black text-slate-900' : 'text-slate-400 font-bold'}`}>ROM</button>
                <button onClick={() => setLanguage('ar')} className={`px-3 py-1.5 text-[10px] rounded-xl transition-all ${language === 'ar' ? 'bg-white shadow-sm font-black text-slate-900' : 'text-slate-400 font-bold'}`}>عربي</button>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-3">
             <Link to="/official" className="p-3 bg-green-100 text-green-600 rounded-2xl shadow-sm active:scale-95">
                🔗
             </Link>
             <button onClick={() => {
                const langs: any = ['en', 'ur', 'roman', 'ar'];
                const next = langs[(langs.indexOf(language) + 1) % 4];
                setLanguage(next);
             }} className="bg-slate-100 p-3 rounded-2xl text-[10px] font-black w-12 h-12 flex items-center justify-center border border-slate-200 active:scale-90 transition-transform">
                {language?.toUpperCase().substring(0, 2)}
             </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

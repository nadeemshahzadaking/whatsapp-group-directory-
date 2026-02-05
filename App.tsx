
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import GroupsList from './pages/GroupsList';
import AddGroup from './pages/AddGroup';
import Promotion from './pages/Promotion';
import About from './pages/About';
import OfficialLinks from './pages/OfficialLinks';
import LanguageSelector from './components/LanguageSelector';
import FloatingBackButton from './components/FloatingBackButton';
import ProductPromoBox from './components/ProductPromoBox';
import AdSlot from './components/AdSlot';

const AppContent: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col font-sans relative">
      <LanguageSelector />
      <Navbar />
      
      <div className="max-w-7xl mx-auto w-full px-4">
        <AdSlot position="headerAd" />
      </div>

      <FloatingBackButton />
      <ProductPromoBox />
      <AdSlot position="floatingAd" />

      <main className="flex-grow bg-[#fcfdfe]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/groups" element={<GroupsList />} />
          <Route path="/add" element={<AddGroup />} />
          <Route path="/promotion" element={<Promotion />} />
          <Route path="/about" element={<About />} />
          <Route path="/official" element={<OfficialLinks />} />
        </Routes>
      </main>

      <div className="max-w-7xl mx-auto w-full px-4">
        <AdSlot position="footerAd" />
      </div>

      <footer className="bg-white border-t border-slate-200 py-12 text-center text-slate-500">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-sm font-bold text-slate-400">{t.footerLine1}</p>
          <p className="text-xs mt-2 opacity-60 font-medium">{t.footerLine2}</p>
        </div>
      </footer>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Router>
        <AppContent />
      </Router>
    </LanguageProvider>
  );
};

export default App;

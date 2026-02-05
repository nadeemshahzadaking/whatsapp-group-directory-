
import React, { useState, useMemo } from 'react';
// Fix: Use named import for useSearchParams to resolve type error
import { useSearchParams } from 'react-router-dom';
import GroupCard from '../components/GroupCard';
import BackButton from '../components/BackButton';
import SafetyModal from '../components/SafetyModal';
import { MOCK_GROUPS, CATEGORIES, COUNTRIES } from '../constants';
import { useLanguage } from '../context/LanguageContext';
import { containsBannedWords } from '../utils/wordFilter';

const GroupsList: React.FC = () => {
  const { t } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isSafetyOpen, setIsSafetyOpen] = useState(false);
  
  const query = searchParams.get('q') || '';
  const catFilter = searchParams.get('cat') || 'All';
  const countryFilter = searchParams.get('country') || 'All';

  const [searchTerm, setSearchTerm] = useState(query);

  const handleSearchChange = (val: string) => {
    if (containsBannedWords(val)) {
      setSearchTerm('');
      setIsSafetyOpen(true);
      return;
    }
    setSearchTerm(val);
  };

  const filteredGroups = useMemo(() => {
    return MOCK_GROUPS.filter(group => {
      const country = COUNTRIES.find(c => c.code === group.countryCode);
      const matchesSearch = 
        group.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        group.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        country?.name.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = catFilter === 'All' || group.category === catFilter;
      const matchesCountry = countryFilter === 'All' || group.countryCode === countryFilter;
      
      return matchesSearch && matchesCategory && matchesCountry;
    });
  }, [searchTerm, catFilter, countryFilter]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <SafetyModal isOpen={isSafetyOpen} onClose={() => setIsSafetyOpen(false)} />
      <BackButton />
      <div className={`flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10 ${t.dir === 'rtl' ? 'lg:flex-row-reverse' : ''}`}>
        <div className={t.dir === 'rtl' ? 'text-right' : 'text-left'}>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">{t.groupsListTitle}</h1>
          <p className="text-slate-500">{filteredGroups.length} {t.groupsFound}</p>
        </div>

        <div className={`flex flex-col sm:flex-row flex-wrap gap-3 ${t.dir === 'rtl' ? 'sm:flex-row-reverse' : ''}`}>
          <select
            value={countryFilter}
            onChange={(e) => setSearchParams({ q: searchTerm, cat: catFilter, country: e.target.value })}
            className="px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#25D366] outline-none bg-white font-medium"
          >
            <option value="All">{t.allCountries}</option>
            {COUNTRIES.map(c => <option key={c.code} value={c.code}>{c.flag} {c.name}</option>)}
          </select>

          <select
            value={catFilter}
            onChange={(e) => setSearchParams({ q: searchTerm, cat: e.target.value, country: countryFilter })}
            className="px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#25D366] outline-none bg-white font-medium"
          >
            <option value="All">{t.allCategories}</option>
            {CATEGORIES.map(cat => <option key={cat} value={cat}>{t.categories[cat]}</option>)}
          </select>

          <input
            type="text"
            placeholder={t.searchPlaceholder}
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
            className={`px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#25D366] outline-none min-w-[200px] ${t.dir === 'rtl' ? 'text-right' : 'text-left'}`}
          />
        </div>
      </div>

      {filteredGroups.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.map(group => (
            <GroupCard key={group.id} group={group} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-bold text-slate-800 mb-2">{t.noGroups}</h3>
          <p className="text-slate-500">{t.noGroupsSub}</p>
        </div>
      )}
    </div>
  );
};

export default GroupsList;

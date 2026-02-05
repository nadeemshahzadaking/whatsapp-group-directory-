
import React, { useState } from 'react';
import { WhatsAppGroup } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { COUNTRIES } from '../constants';
import AdInterstitial from './AdInterstitial';

interface GroupCardProps {
  group: WhatsAppGroup;
}

const GroupCard: React.FC<GroupCardProps> = ({ group }) => {
  const { t, requestAction } = useLanguage();
  const [showAd, setShowAd] = useState(false);
  
  const country = COUNTRIES.find(c => c.code === group.countryCode);

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'Education': return 'bg-blue-100 text-blue-800';
      case 'Jobs': return 'bg-orange-100 text-orange-800';
      case 'Business': return 'bg-indigo-100 text-indigo-800';
      case 'Islamic': return 'bg-emerald-100 text-emerald-800';
      case 'Hot': return 'bg-red-100 text-red-800';
      case 'Girls': return 'bg-pink-100 text-pink-800';
      case 'Max': return 'bg-purple-100 text-purple-800';
      default: return 'bg-slate-100 text-slate-800';
    }
  };

  const handleJoinClick = (e: React.MouseEvent) => {
    e.preventDefault();
    requestAction(() => {
        setShowAd(true);
    });
  };

  const completeJoin = () => {
    setShowAd(false);
    window.open(group.link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col h-full text-start group">
      <AdInterstitial 
        isOpen={showAd} 
        onClose={() => setShowAd(false)} 
        onComplete={completeJoin} 
      />
      
      <div className={`flex justify-between items-start mb-4 ${t.dir === 'rtl' ? 'flex-row-reverse' : 'flex-row'}`}>
        <div className="flex flex-col">
           <div className={`flex items-center gap-2 ${t.dir === 'rtl' ? 'flex-row-reverse' : 'flex-row'}`}>
             <span className="text-xl" title={country?.name}>{country?.flag || '🌐'}</span>
             <h3 className="text-xl font-bold text-slate-800 leading-tight">{group.name}</h3>
           </div>
           <div className={`mt-1 flex items-center gap-2 text-xs font-medium text-slate-400 ${t.dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
             <span>🖱️ {group.clicks.toLocaleString()} {t.clicksLabel}</span>
           </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${getCategoryColor(group.category)}`}>
          {t.categories[group.category]}
        </span>
      </div>
      
      <p className="text-slate-600 text-sm mb-6 flex-grow">
        {group.description || (t.dir === 'rtl' ? 'اس گروپ کی کوئی تفصیل موجود نہیں ہے۔' : 'No description available for this group.')}
      </p>

      <div className="flex items-center justify-between mt-auto">
        <button
          onClick={handleJoinClick}
          className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white text-center py-2.5 rounded-xl font-bold transition-all flex items-center justify-center gap-2 active:scale-95"
        >
          <span>{t.joinNow}</span>
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.115c1.53.813 3.333 1.243 5.171 1.243 5.582 0 10.124-4.542 10.124-10.125 0-2.705-1.053-5.247-2.966-7.161-1.912-1.912-4.454-2.965-7.16-2.965-5.581 0-10.122 4.542-10.122 10.125-.001 1.884.508 3.723 1.47 5.352l-1.121 4.09 4.197-1.102l-.413-.257zm11.362-3.577c-.312-.156-1.848-.912-2.134-1.017-.286-.104-.494-.156-.703.156-.208.312-.807 1.017-.989 1.223-.182.208-.364.234-.676.078-.312-.156-1.316-.484-2.507-1.545-.927-.827-1.552-1.848-1.734-2.16-.182-.312-.02-.481.136-.636.141-.139.312-.364.468-.546.156-.182.208-.312.312-.52.104-.208.052-.39-.026-.546-.078-.156-.703-1.693-.963-2.316-.252-.605-.51-.522-.703-.532-.182-.008-.39-.011-.598-.011s-.546.078-.832.39c-.286.312-1.092 1.067-1.092 2.601s1.118 3.018 1.274 3.227c.156.208 2.2 3.36 5.33 4.715.745.322 1.327.514 1.78.658.748.237 1.429.204 1.967.123.6-.09 1.848-.755 2.108-1.483.26-.728.26-1.353.182-1.483-.078-.13-.286-.208-.598-.364z"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default GroupCard;

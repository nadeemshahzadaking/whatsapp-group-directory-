
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { OFFICIAL_LINKS } from '../config/official-links';
import BackButton from '../components/BackButton';

// Define interface for LinkCard props
interface LinkCardProps {
  icon: string;
  label: string;
  link: string;
  color: string;
}

const OfficialLinks: React.FC = () => {
  const { t } = useLanguage();

  // Fix: Explicitly typing LinkCard as React.FC to handle React-specific props like 'key' in list rendering
  const LinkCard: React.FC<LinkCardProps> = ({ icon, label, link, color }) => (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`bg-white p-6 rounded-3xl border-2 border-slate-100 shadow-sm hover:shadow-xl hover:border-transparent ${color} transition-all flex flex-col items-center gap-4 group active:scale-95`}
    >
      <span className="text-5xl group-hover:scale-110 transition-transform">{icon}</span>
      <span className="font-black text-slate-800 text-center">{label}</span>
    </a>
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <BackButton />
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">{t.officialTitle}</h1>
        <p className="text-slate-500 font-bold text-lg">{t.officialSub}</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* TikTok */}
        <LinkCard icon="📱" label="TikTok" link={OFFICIAL_LINKS.tiktok} color="hover:bg-black hover:text-white" />
        
        {/* WhatsApp */}
        <LinkCard icon="📞" label="WhatsApp Number" link={OFFICIAL_LINKS.whatsapp.number} color="hover:bg-[#25D366] hover:text-white" />
        <LinkCard icon="📢" label="WhatsApp Channel" link={OFFICIAL_LINKS.whatsapp.channel} color="hover:bg-[#25D366] hover:text-white" />
        <LinkCard icon="👥" label="Official Group" link={OFFICIAL_LINKS.whatsapp.group} color="hover:bg-[#25D366] hover:text-white" />

        {/* Facebook */}
        <LinkCard icon="👤" label="FB Profile" link={OFFICIAL_LINKS.facebook.profile} color="hover:bg-[#1877F2] hover:text-white" />
        <LinkCard icon="📄" label="FB Page" link={OFFICIAL_LINKS.facebook.page} color="hover:bg-[#1877F2] hover:text-white" />
        <LinkCard icon="🛒" label="FB Marketplace" link={OFFICIAL_LINKS.facebook.marketplace} color="hover:bg-[#1877F2] hover:text-white" />

        {/* Telegram */}
        <LinkCard icon="✈️" label="TG Channel" link={OFFICIAL_LINKS.telegram.channel} color="hover:bg-[#0088cc] hover:text-white" />
        <LinkCard icon="🛡️" label="TG Group" link={OFFICIAL_LINKS.telegram.group} color="hover:bg-[#0088cc] hover:text-white" />

        {/* Games */}
        {OFFICIAL_LINKS.games.map((g, i) => (
          <LinkCard key={i} icon="🎮" label={g.name} link={g.link} color="hover:bg-purple-600 hover:text-white" />
        ))}

        {/* Website */}
        <LinkCard icon="🌐" label="My Website" link={OFFICIAL_LINKS.website} color="hover:bg-slate-900 hover:text-white" />
      </div>
    </div>
  );
};

export default OfficialLinks;

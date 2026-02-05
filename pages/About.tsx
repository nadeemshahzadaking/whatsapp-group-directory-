
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import BackButton from '../components/BackButton';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <BackButton />
      <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100">
        <div className="bg-gradient-to-br from-[#25D366] to-[#128C7E] p-12 text-center text-white">
          <div className="text-6xl mb-6">ℹ️</div>
          <h1 className="text-4xl font-black mb-4">{t.aboutTitle}</h1>
        </div>
        
        <div className={`p-8 md:p-12 space-y-8 ${t.dir === 'rtl' ? 'text-right' : 'text-left'}`}>
          <div className="prose prose-slate max-w-none">
            <p className="text-xl text-slate-700 leading-relaxed font-medium">
              {t.aboutContent}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
              <h3 className="font-black text-slate-900 mb-2">🚀 {t.dir === 'rtl' ? 'تیز ترین ڈائریکٹری' : 'Fastest Directory'}</h3>
              <p className="text-slate-500 text-sm">{t.dir === 'rtl' ? 'ہماری ویب سائٹ سیکنڈوں میں لوڈ ہوتی ہے اور موبائل فرینڈلی ہے۔' : 'Our website loads in seconds and is fully mobile friendly.'}</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
              <h3 className="font-black text-slate-900 mb-2">🛡️ {t.dir === 'rtl' ? 'محفوظ مواد' : 'Safe Content'}</h3>
              <p className="text-slate-500 text-sm">{t.dir === 'rtl' ? 'ہمارا جدید فلٹر خودکار طریقے سے فحش الفاظ کو بلاک کرتا ہے۔' : 'Our advanced filter automatically blocks explicit keywords.'}</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
              <h3 className="font-black text-slate-900 mb-2">🌍 {t.dir === 'rtl' ? 'عالمی رسائی' : 'Global Reach'}</h3>
              <p className="text-slate-500 text-sm">{t.dir === 'rtl' ? 'پوری دنیا کے تمام بڑے ممالک کے گروپس یہاں دستیاب ہیں۔' : 'Groups from all major countries are available here.'}</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
              <h3 className="font-black text-slate-900 mb-2">🗣️ {t.dir === 'rtl' ? 'چار زبانیں' : 'Four Languages'}</h3>
              <p className="text-slate-500 text-sm">{t.dir === 'rtl' ? 'آپ اردو، انگلش، رومن اردو اور عربی میں ایپ استعمال کر سکتے ہیں۔' : 'You can use the app in Urdu, English, Roman Urdu, and Arabic.'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;


import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CATEGORIES } from '../constants';
import BackButton from '../components/BackButton';

const Promotion: React.FC = () => {
  const { t } = useLanguage();
  const email = "mrbadshahoftheking@gmail.com";

  const [formData, setFormData] = useState({
    name: '',
    promoType: '',
    customType: '',
    details: ''
  });

  const handleDirectMessage = () => {
    const type = formData.promoType === 'Other' ? formData.customType : formData.promoType;
    const subject = encodeURIComponent(`Promotion Request: ${type}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nPromotion Type: ${type}\nDetails: ${formData.details}`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <BackButton />
      
      <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100">
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-black p-12 text-center text-white relative">
          <div className="text-6xl mb-6 inline-block animate-float">🚀</div>
          <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">{t.promoPageTitle}</h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto font-medium">
            {t.dir === 'rtl' ? 'اپنے کاروبار یا گروپ کو ہزاروں فعال صارفین تک پہنچائیں' : 'Reach thousands of active users today'}
          </p>
        </div>

        <div className={`p-8 md:p-12 space-y-10 ${t.dir === 'rtl' ? 'text-right' : 'text-left'}`}>
          <section className="bg-blue-50/50 p-8 rounded-[2rem] border border-blue-100">
             <h2 className="text-2xl font-black text-blue-900 mb-4">📜 {t.dir === 'rtl' ? 'ہماری پالیسی اور شرائط' : 'Our Policy'}</h2>
             <ul className="space-y-3 text-blue-800 font-bold text-sm">
                <li className="flex items-center gap-2">✅ {t.dir === 'rtl' ? 'صرف صاف ستھرا اور قانونی مواد ہی قبول کیا جاتا ہے۔' : 'Only clean and legal content is accepted.'}</li>
                <li className="flex items-center gap-2">✅ {t.dir === 'rtl' ? 'ایڈلٹ، فحش یا غیر اخلاقی مواد کی پروموشن سختی سے منع ہے۔' : 'Adult or unethical content is strictly prohibited.'}</li>
                <li className="flex items-center gap-2">✅ {t.dir === 'rtl' ? 'یہ ایک پیڈ (Paid) سروس ہے، فری پروموشن دستیاب نہیں ہے۔' : 'This is a paid service, no free promotion.'}</li>
                <li className="flex items-center gap-2">✅ {t.dir === 'rtl' ? 'ہم آپ کی پروموشن کی مکمل ایس ای او (SEO) خود کرتے ہیں۔' : 'We handle the SEO for your promotion.'}</li>
             </ul>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-black text-slate-700 mb-2">{t.dir === 'rtl' ? 'آپ کا نام' : 'Your Name'}</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-6 py-4 rounded-2xl border-2 border-slate-100 outline-none focus:border-[#25D366] transition-all font-bold" 
                  placeholder={t.dir === 'rtl' ? 'اپنا نام لکھیں' : 'Enter your name'}
                />
              </div>

              <div>
                <label className="block text-sm font-black text-slate-700 mb-2">{t.dir === 'rtl' ? 'پروموشن کی قسم' : 'Promotion Type'}</label>
                <select 
                  value={formData.promoType}
                  onChange={(e) => setFormData({...formData, promoType: e.target.value})}
                  className="w-full px-6 py-4 rounded-2xl border-2 border-slate-100 outline-none focus:border-[#25D366] transition-all font-bold bg-white"
                >
                  <option value="">{t.selectCategory}</option>
                  <option value="WhatsApp Group">WhatsApp Group</option>
                  <option value="YouTube Channel">YouTube Channel</option>
                  <option value="Website">Website</option>
                  <option value="Business Service">Business Service</option>
                  <option value="Other">Other (Custom)</option>
                </select>
              </div>

              {formData.promoType === 'Other' && (
                <div className="animate-in slide-in-from-top-2 duration-300">
                  <label className="block text-sm font-black text-slate-700 mb-2">{t.dir === 'rtl' ? 'اپنی کیٹیگری لکھیں' : 'Custom Category'}</label>
                  <input 
                    type="text"
                    value={formData.customType}
                    onChange={(e) => setFormData({...formData, customType: e.target.value})}
                    className="w-full px-6 py-4 rounded-2xl border-2 border-slate-100 outline-none focus:border-[#25D366] transition-all font-bold" 
                  />
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-black text-slate-700 mb-2">{t.descriptionLabel}</label>
              <textarea 
                rows={6}
                value={formData.details}
                onChange={(e) => setFormData({...formData, details: e.target.value})}
                className="w-full px-6 py-4 rounded-2xl border-2 border-slate-100 outline-none focus:border-[#25D366] transition-all font-bold resize-none"
                placeholder={t.dir === 'rtl' ? 'پروموشن کی تفصیل یہاں لکھیں...' : 'Write promotion details here...'}
              ></textarea>
            </div>
          </div>

          <div className="flex flex-col gap-4 items-center justify-center pt-8 border-t border-slate-100">
            <button 
              onClick={handleDirectMessage}
              className="w-full md:w-auto min-w-[300px] bg-[#25D366] text-white px-12 py-5 rounded-3xl font-black text-xl btn-glow btn-bounce flex items-center justify-center gap-3"
            >
              <span>{t.dir === 'rtl' ? 'ڈائریکٹ میسج کریں' : 'Direct Message'}</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
            </button>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">{t.promoEmailLabel}: {email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;

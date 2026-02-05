
import React, { useState, useRef, useEffect } from 'react';
import { PROMO_CONFIG } from '../config/product-box-config';
import { useLanguage } from '../context/LanguageContext';

const ProductPromoBox: React.FC = () => {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [position, setPosition] = useState({ x: window.innerWidth - 100, y: window.innerHeight - 150 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Correct initial position based on screen direction
    setPosition({ x: t.dir === 'rtl' ? 20 : window.innerWidth - 100, y: window.innerHeight - 150 });
  }, [t.dir]);

  if (!PROMO_CONFIG.isVisible) return null;

  const { title, name, description, mediaType, mediaUrl, link, buttonText, hasNewUpdate } = PROMO_CONFIG.data;

  const onStart = (e: any) => {
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    dragStartPos.current = { x: clientX - position.x, y: clientY - position.y };
    setIsDragging(false);
  };

  const onMove = (e: any) => {
    if (e.buttons === 0 && !e.touches) return;
    setIsDragging(true);
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const newX = Math.min(Math.max(0, clientX - dragStartPos.current.x), window.innerWidth - 70);
    const newY = Math.min(Math.max(0, clientY - dragStartPos.current.y), window.innerHeight - 70);
    setPosition({ x: newX, y: newY });
  };

  const handleClick = () => {
    if (!isDragging) setIsModalOpen(true);
  };

  const handleContactClick = () => {
    window.location.href = `mailto:${PROMO_CONFIG.contactEmail}?subject=Promotion Inquiry`;
  };

  return (
    <>
      {/* Draggable Icon */}
      <div
        onMouseDown={onStart}
        onMouseMove={onMove}
        onTouchStart={onStart}
        onTouchMove={onMove}
        onClick={handleClick}
        style={{ left: `${position.x}px`, top: `${position.y}px`, touchAction: 'none' }}
        className="fixed z-[95] w-16 h-16 bg-white border-2 border-[#25D366] shadow-2xl rounded-2xl flex items-center justify-center cursor-move select-none animate-float group hover:scale-110 active:scale-95 transition-transform"
      >
        <div className="text-3xl">🎁</div>
        {hasNewUpdate && (
          <span className="absolute -top-2 -right-2 flex h-6 w-6">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-6 w-6 bg-red-600 border-2 border-white text-[10px] text-white items-center justify-center font-black">1</span>
          </span>
        )}
      </div>

      {/* Media Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
          <div className="bg-white rounded-[2.5rem] max-w-lg w-full overflow-hidden shadow-2xl transform animate-in zoom-in-95 duration-300">
            {/* Header */}
            <div className="bg-slate-900 p-6 flex items-center justify-between text-white">
              <span className="font-black tracking-widest uppercase text-xs opacity-60">{title}</span>
              <button onClick={() => setIsModalOpen(false)} className="text-white/60 hover:text-white text-3xl font-bold transition-colors leading-none">×</button>
            </div>

            {/* Media Area */}
            <div className="bg-slate-50 min-h-[200px] flex items-center justify-center relative border-b border-slate-100">
              {mediaType === 'video' ? (
                <iframe 
                  src={mediaUrl} 
                  className="w-full aspect-video" 
                  title="Promo Video" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              ) : mediaType === 'image' ? (
                <img src={mediaUrl} alt="Promotion" className="w-full h-auto object-cover max-h-[300px]" />
              ) : (
                <div className="p-10 text-6xl">📣</div>
              )}
            </div>

            {/* Content Area */}
            <div className={`p-8 ${t.dir === 'rtl' ? 'text-right' : 'text-left'}`}>
              <h2 className="text-2xl font-black text-slate-900 mb-2">{name}</h2>
              <p className="text-slate-500 font-medium mb-6 leading-relaxed">
                {description}
              </p>
              
              <div className="space-y-4">
                <a 
                  href={link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-[#25D366] text-white text-center py-4 rounded-2xl font-black text-lg hover:bg-[#128C7E] shadow-xl shadow-green-100 transition-all active:scale-95"
                >
                  {buttonText}
                </a>

                {/* Contact Section for Advertisers */}
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3">
                    {t.dir === 'rtl' ? 'پروموشن کے لیے رابطہ کریں' : 'Contact for Promotion'}
                  </p>
                  <button 
                    onClick={handleContactClick}
                    className="w-full flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-200 hover:border-slate-900 transition-all group"
                  >
                    <div className={`flex items-center gap-3 ${t.dir === 'rtl' ? 'flex-row-reverse' : 'flex-row'}`}>
                      <span className="text-xl">📧</span>
                      <span className="font-bold text-slate-700 text-sm truncate max-w-[200px]">{PROMO_CONFIG.contactEmail}</span>
                    </div>
                    <span className="text-slate-400 group-hover:text-slate-900">→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductPromoBox;

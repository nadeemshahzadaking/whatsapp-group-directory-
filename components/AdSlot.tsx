
import React from 'react';
import { getAdForSlot } from '../config/ads-manager';

interface AdSlotProps {
  position: 'headerAd' | 'footerAd' | 'sidebarAd' | 'floatingAd';
}

const AdSlot: React.FC<AdSlotProps> = ({ position }) => {
  const adContent = getAdForSlot(position);

  if (!adContent) return null;

  // Floating ads need fixed positioning
  const isFloating = position === 'floatingAd';

  return (
    <div className={isFloating ? "fixed bottom-4 left-4 z-[90] max-w-[300px]" : "w-full flex justify-center my-6 overflow-hidden"}>
      <div 
        className={`ad-container ${!isFloating ? 'bg-slate-50 border border-slate-100 rounded-lg min-h-[90px]' : ''} w-full flex items-center justify-center text-xs text-slate-300`}
        dangerouslySetInnerHTML={{ __html: adContent }}
      />
    </div>
  );
};

export default AdSlot;

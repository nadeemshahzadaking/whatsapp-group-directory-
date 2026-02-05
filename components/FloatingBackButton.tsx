
import React, { useState, useEffect, useRef } from 'react';
// Fix: Use named import for useNavigate to resolve type error
import { useNavigate } from 'react-router-dom';

const FloatingBackButton: React.FC = () => {
  const navigate = useNavigate();
  const [position, setPosition] = useState({ x: 20, y: window.innerHeight - 100 });
  const [isDragging, setIsDragging] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dragStartPos = useRef({ x: 0, y: 0 });

  const handleBack = (e: React.MouseEvent | React.TouchEvent) => {
    if (isDragging) return;
    navigate(-1);
  };

  const onStart = (e: any) => {
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    
    dragStartPos.current = {
      x: clientX - position.x,
      y: clientY - position.y
    };
    setIsDragging(false);
  };

  const onMove = (e: any) => {
    if (e.buttons === 0 && !e.touches) return;
    
    setIsDragging(true);
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    const newX = Math.min(Math.max(0, clientX - dragStartPos.current.x), window.innerWidth - 60);
    const newY = Math.min(Math.max(0, clientY - dragStartPos.current.y), window.innerHeight - 60);

    setPosition({ x: newX, y: newY });
  };

  const onEnd = () => {
    // Small delay to prevent click fire after drag
    setTimeout(() => setIsDragging(false), 50);
  };

  return (
    <button
      ref={buttonRef}
      onMouseDown={onStart}
      onMouseMove={onMove}
      onMouseUp={onEnd}
      onTouchStart={onStart}
      onTouchMove={onMove}
      onTouchEnd={onEnd}
      onClick={handleBack}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        touchAction: 'none'
      }}
      className="fixed z-[999] w-14 h-14 bg-white border-2 border-slate-200 shadow-2xl rounded-full flex items-center justify-center text-slate-800 hover:scale-110 active:scale-95 transition-transform select-none cursor-move group"
      aria-label="Back"
    >
      <div className="absolute inset-0 bg-[#25D366] opacity-0 group-hover:opacity-10 rounded-full transition-opacity"></div>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
      </svg>
    </button>
  );
};

export default FloatingBackButton;

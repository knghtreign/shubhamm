import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Phone, X, ArrowRight } from 'lucide-react';
import { CLINIC_DETAILS } from '../data/clinicData';
import { playSoftClick } from '../utils/soundEffects';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'ABOUT', href: '#about' },
    { label: 'TREATMENTS', href: '#treatments' },
    { label: 'DOCTOR', href: '#doctor' },
    { label: 'REVIEWS', href: '#reviews' },
    { label: 'CLINIC', href: '#location' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    playSoftClick();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header id="main-nav-header" className="fixed top-0 left-0 right-0 z-40 px-2.5 sm:px-6 lg:px-8 py-2.5 sm:py-4 pointer-events-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto gap-2">
          {/* Logo / Brand badge */}
          <a
            href="#"
            id="nav-logo-btn"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex items-center gap-2 bg-white/95 hover:bg-white backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-slate-200/90 shadow-[0_4px_20px_rgba(15,23,42,0.08)] transition-all duration-300 hover:scale-[1.02] shrink min-w-0"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0D1B2A] flex items-center justify-center text-white shadow-xs font-black text-xs shrink-0 border border-amber-300/40">
              🦷
            </div>
            <div className="text-left min-w-0">
              <span className="block text-[11px] sm:text-xs tracking-widest uppercase font-black text-[#293549] font-['Outfit',sans-serif] truncate">
                WALNUT DENTAL · <span className="text-[#C58B1B]">DR. SHUBHAM ARYA</span>
              </span>
              <span className="hidden sm:block text-[10px] text-slate-500 font-bold tracking-tight truncate">
                Sector 53, Noida · 5.0 ★ (177 Google reviews)
              </span>
            </div>
          </a>

          {/* Minimal Central Capsule Trigger & Action */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <button
              id="center-menu-trigger"
              onClick={() => {
                playSoftClick();
                setIsOpen(!isOpen);
              }}
              className="group relative flex items-center gap-1.5 sm:gap-2 bg-white/95 hover:bg-slate-50 text-[#0F172A] px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-[0_4px_16px_rgba(15,23,42,0.06)] transition-all duration-300 hover:scale-105 active:scale-95 border border-slate-200/90 cursor-pointer"
            >
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E5B544] animate-pulse" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#415A77]" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
              </div>
              <span className="text-[11px] sm:text-xs tracking-widest font-black uppercase font-['Outfit',sans-serif]">
                {isOpen ? 'CLOSE' : 'MENU'}
              </span>
            </button>

            {/* Primary Golden CTA Button matching reference image 2 */}
            <button
              id="nav-book-visit-btn"
              onClick={() => {
                playSoftClick();
                onOpenBooking();
              }}
              className="gold-cta-btn animate-gold-shimmer px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs tracking-wider uppercase shadow-lg transition-all duration-200 flex items-center gap-1.5 cursor-pointer"
            >
              <span>BOOK VISIT</span>
              <span className="text-sm leading-none font-black font-sans">↗</span>
            </button>
          </div>
        </div>
      </header>

      {/* Center-Expanding Minimal Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div id="center-nav-modal" className="fixed inset-0 z-50 flex items-center justify-center px-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-slate-900/50 backdrop-blur-md"
            />

            {/* Expanding Circle / Card from Center */}
            <motion.div
              initial={{ scale: 0, opacity: 0, rotate: -6 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0, opacity: 0, rotate: 6 }}
              transition={{ type: 'spring', damping: 24, stiffness: 300 }}
              className="relative w-full max-w-lg bg-white rounded-[36px] p-8 sm:p-12 shadow-[0_25px_70px_rgba(15,23,42,0.18)] border-2 border-[#293549] overflow-hidden text-[#293549]"
            >
              {/* Decorative subtle background elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-100/50 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-100/40 rounded-full blur-2xl pointer-events-none -ml-12 -mb-12" />

              {/* Close Button */}
              <button
                id="close-menu-btn"
                onClick={() => {
                  playSoftClick();
                  setIsOpen(false);
                }}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center shadow-xs hover:scale-105 active:scale-95 transition-all border border-slate-200 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative z-10 text-center">
                <span className="inline-block text-[11px] font-black tracking-widest text-[#293549] uppercase bg-gradient-to-r from-amber-100 to-amber-200/80 px-3.5 py-1 rounded-full mb-4 shadow-xs font-['Outfit',sans-serif] border border-amber-300/60">
                  Walnut Dental & Implant Clinic · Sector 53, Noida
                </span>
                
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#293549] font-['Outfit',sans-serif] tracking-tight mb-8">
                  Navigate Experience
                </h3>

                {/* Minimalist Menu List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {navItems.map((item, idx) => (
                    <motion.button
                      key={item.label}
                      id={`nav-link-${item.label.toLowerCase()}`}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 * idx, duration: 0.3 }}
                      onClick={() => handleNavClick(item.href)}
                      className="group flex items-center justify-between bg-slate-50 hover:bg-amber-50/60 text-[#0F172A] p-4 rounded-2xl border border-slate-200/90 hover:border-amber-400/80 shadow-xs transition-all duration-300 text-left cursor-pointer"
                    >
                      <span className="text-base font-extrabold font-['Outfit',sans-serif] tracking-wide">
                        {item.label}
                      </span>
                      <ArrowRight className="w-4 h-4 text-amber-600 group-hover:translate-x-1 transition-all" />
                    </motion.button>
                  ))}
                </div>

                {/* Direct Action */}
                <button
                  id="menu-book-btn"
                  onClick={() => {
                    setIsOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full gold-cta-btn animate-gold-shimmer text-sm py-4 px-6 rounded-full shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer tracking-wider uppercase"
                >
                  <Sparkles className="w-4 h-4 text-[#0B1528]" />
                  <span>BOOK YOUR CONSULTATION</span>
                  <span className="text-base font-black">↗</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};


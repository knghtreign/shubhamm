import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Phone, MapPin, Star, ArrowUpRight, Heart, Clock } from 'lucide-react';
import { CLINIC_DETAILS } from '../data/clinicData';
import { PopBadge, StaggerHeading, TextHighlight } from './AnimatedText';
import { playPop, playSoftClick } from '../utils/soundEffects';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer id="contact" className="relative px-2.5 sm:px-6 lg:px-8 pt-6 pb-20 sm:pb-24 z-20 overflow-visible">
      {/* Boxed container matching home page rules */}
      <div className="max-w-7xl mx-auto w-full relative rounded-[28px] sm:rounded-[44px] bg-[#293549] p-6 sm:p-10 lg:p-14 shadow-[0_20px_60px_rgba(15,25,40,0.22)] border-2 border-[#293549] ring-1 ring-white/20 overflow-hidden text-white">
        
        {/* Background soft ambient orbs */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
          className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-0 left-0 w-80 h-80 bg-[#364660]/40 rounded-full blur-3xl pointer-events-none"
        />

        <div className="relative z-10">
          
          {/* Big Impact Callout */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-12 border-b border-white/25">
            <div>
              <PopBadge className="mb-3">
                <span className="text-xs font-black uppercase tracking-widest text-[#0B1528] bg-gradient-to-r from-[#DFAC38] to-[#FDE68A] border border-amber-300 px-3.5 py-1.5 rounded-full inline-block font-['Outfit',sans-serif] shadow-xs">
                  ✨ Appointments & Consultations
                </span>
              </PopBadge>
              
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ type: 'spring', damping: 14, stiffness: 200 }}
                className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-['Outfit',sans-serif] tracking-tight leading-tight text-white"
              >
                Ready for your <br />
                <motion.span
                  animate={{
                    textShadow: [
                      '0 0 0px #DFAC38',
                      '0 0 12px rgba(223,172,56,0.4)',
                      '0 0 0px #DFAC38'
                    ]
                  }}
                  transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                  className="text-[#FDE68A] font-black inline-block"
                >
                  best smile?
                </motion.span>
              </motion.h2>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <motion.button
                id="footer-book-btn"
                onClick={() => {
                  playPop();
                  onOpenBooking();
                }}
                whileHover={{ scale: 1.06, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', damping: 12, stiffness: 300 }}
                className="gold-cta-btn animate-gold-shimmer text-xs sm:text-base px-8 py-4 rounded-full shadow-xl transition-all font-['Outfit',sans-serif] flex items-center justify-center gap-2.5 cursor-pointer uppercase tracking-wider text-[#0B1528] font-black w-full sm:w-auto"
              >
                <span>BOOK APPOINTMENT</span>
                <ArrowUpRight className="w-5 h-5 text-[#0B1528]" />
              </motion.button>

              <motion.a
                id="footer-call-btn"
                href={`tel:${CLINIC_DETAILS.phoneClean}`}
                onClick={() => playSoftClick()}
                whileHover={{ scale: 1.06, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', damping: 12, stiffness: 300 }}
                className="bg-white/20 hover:bg-white/30 text-white font-bold text-xs sm:text-base px-6 py-4 rounded-full border border-white/40 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs w-full sm:w-auto"
              >
                <Phone className="w-4 h-4 text-amber-200" />
                <span>{CLINIC_DETAILS.phone}</span>
              </motion.a>
            </div>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-10 border-b border-white/25 text-blue-50">
            
            {/* Brand Col */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ delay: 0.05, type: 'spring', damping: 14 }}
              className="md:col-span-5 space-y-4"
            >
              <div className="flex items-center gap-2.5">
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  className="w-9 h-9 rounded-full bg-gradient-to-r from-[#DFAC38] to-[#FDE68A] text-[#0B1528] flex items-center justify-center font-bold shadow-xs"
                >
                  <Sparkles className="w-4 h-4 text-[#0B1528]" />
                </motion.div>
                <span className="text-xl font-extrabold text-white font-['Outfit',sans-serif] tracking-wider uppercase">
                  WALNUT DENTAL <span className="text-[#FDE68A]">& IMPLANT CLINIC</span>
                </span>
              </div>
              <p className="text-xs sm:text-sm text-blue-50 leading-relaxed max-w-sm font-medium">
                Premier digital dentistry, orthodontic aligners, dental implants, and compassionate dental care in Sector 53, Noida.
              </p>
              <div className="flex items-center gap-2 text-amber-300 text-xs font-bold pt-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#DFAC38] text-[#DFAC38]" />
                  ))}
                </div>
                <span className="font-['Outfit',sans-serif] font-black text-white">5.0 Verified · 177 Reviews on Google</span>
              </div>
            </motion.div>

            {/* Location & Address */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ delay: 0.1, type: 'spring', damping: 14 }}
              className="md:col-span-4 space-y-2"
            >
              <span className="text-xs font-black text-white uppercase tracking-wider block font-['Outfit',sans-serif]">
                Clinic Address
              </span>
              <p className="text-xs sm:text-sm text-blue-50 leading-relaxed font-medium">
                Pocket A, Kanchanjunga Market, <br />
                Sector 53 (Near Sector 61), <br />
                Noida, Uttar Pradesh 201307
              </p>
              <motion.a
                href={CLINIC_DETAILS.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 4 }}
                className="inline-flex items-center gap-1.5 text-xs text-[#FDE68A] font-bold hover:underline pt-1 cursor-pointer"
              >
                <MapPin className="w-3.5 h-3.5 text-[#FDE68A]" />
                <span>Open in Google Maps →</span>
              </motion.a>
            </motion.div>

            {/* Hours & Contact */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ delay: 0.15, type: 'spring', damping: 14 }}
              className="md:col-span-3 space-y-2"
            >
              <span className="text-xs font-black text-white uppercase tracking-wider block font-['Outfit',sans-serif] flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-200" />
                Clinic Hours
              </span>
              <p className="text-xs text-blue-50 font-medium">
                <strong className="text-white">Monday – Sunday:</strong><br />
                10:00 AM – 8:30 PM (All 7 Days)
              </p>
              <p className="text-xs text-blue-50 font-medium">
                <strong className="text-white">Official Website:</strong><br />
                <a href="https://walnutdentalclinic.com" target="_blank" rel="noopener noreferrer" className="text-amber-200 hover:underline">
                  walnutdentalclinic.com
                </a>
              </p>
              <p className="text-xs text-[#FDE68A] pt-1 font-bold">
                Phone: {CLINIC_DETAILS.phone}
              </p>
            </motion.div>

          </div>

          {/* Bottom copyright */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-blue-100 gap-4">
            <p>© {new Date().getFullYear()} Walnut Dental & Implant Clinic · Sector 53, Noida. All rights reserved.</p>
            <motion.p
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-1 font-medium cursor-default"
            >
              Crafted for healthy smiles with <Heart className="w-3.5 h-3.5 text-rose-300 fill-rose-300 animate-pulse" />
            </motion.p>
          </div>

        </div>
      </div>
    </footer>
  );
};


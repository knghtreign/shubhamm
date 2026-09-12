import React from 'react';
import { motion } from 'motion/react';
import { Compass, ExternalLink, MapPin, Phone } from 'lucide-react';
import { TextHighlight, PopBadge } from './AnimatedText';
import { CLINIC_DETAILS } from '../data/clinicData';

export const LocationSection: React.FC = () => {
  // Exact Google Maps business listing embed for Dr. Shubham Arya Walnut Dental & Implant Clinic
  const embedUrl =
    'https://www.google.com/maps/embed?origin=mfe&pb=!1m4!2m1!1sDr.+Shubham+Arya+Walnut+Dental+%26+Implant+Clinic,+Pocket+A,+Kanchanjunga+Market,+Sector+53,+Noida!5e0!6i17';

  return (
    <section id="location" className="relative py-8 sm:py-14 -mt-4 sm:-mt-6 px-3 sm:px-8 overflow-hidden z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ type: 'spring', damping: 14, stiffness: 200 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-3"
        >
          <div>
            <PopBadge className="mb-2">
              <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-[#293549] bg-amber-100 px-3 py-1 rounded-full shadow-xs font-['Outfit',sans-serif] border border-amber-300/60">
                <Compass className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-600" />
                SECTOR 53, NOIDA
              </span>
            </PopBadge>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#293549] font-['Outfit',sans-serif] tracking-tight leading-tight">
              Visit <TextHighlight color="coral" variant="bracket">Our Clinic</TextHighlight>
            </h2>
          </div>
          <div className="flex flex-col sm:items-end gap-1.5">
            <p className="text-slate-600 text-xs sm:text-sm max-w-sm font-medium leading-relaxed">
              Pocket A, Kanchanjunga Market, Sector 53, Noida (Near Sector 61). Convenient parking & accessible location.
            </p>
            <a
              id="open-google-maps-link"
              href={CLINIC_DETAILS.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-black text-[#C58B1B] hover:text-[#0B1528] bg-amber-50 hover:bg-amber-100/80 px-3 py-1.5 rounded-full border border-amber-300/60 transition-all font-['Outfit',sans-serif] shadow-xs hover:scale-105 active:scale-95"
            >
              <span>Get Directions on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>

        {/* Real Interactive Google Maps Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ delay: 0.1, type: 'spring', damping: 16, stiffness: 180 }}
          className="relative rounded-[24px] sm:rounded-[36px] bg-[#293549] p-2.5 sm:p-4 border-2 border-[#293549] ring-1 ring-white/20 shadow-[0_16px_48px_rgba(15,25,40,0.2)] overflow-hidden"
        >
          {/* Real Google Maps Iframe */}
          <div className="relative w-full h-[320px] sm:h-[460px] rounded-[18px] sm:rounded-[28px] overflow-hidden bg-slate-200 shadow-inner">
            <iframe
              id="google-maps-iframe"
              title="Dr. Shubham Arya Walnut Dental & Implant Clinic Google Maps Location"
              src={embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
            {/* Direct floating link badge on map corner */}
            <a
              href={CLINIC_DETAILS.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-3 right-3 bg-white/95 hover:bg-white text-[#0B1528] px-3 py-1.5 rounded-full shadow-md text-xs font-bold font-['Outfit',sans-serif] flex items-center gap-1.5 border border-slate-200/90 transition-transform hover:scale-105 active:scale-95 z-10"
            >
              <MapPin className="w-3.5 h-3.5 text-amber-600" />
              <span>Open in Maps</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>
          </div>

          {/* Quick Info Bar below map */}
          <div className="mt-3.5 px-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-white">
            <a
              href={CLINIC_DETAILS.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
            >
              <MapPin className="w-4 h-4 text-[#FDE68A] shrink-0 group-hover:scale-110 transition-transform" />
              <span>Pocket A, Kanchanjunga Market, Sector 53, Noida 201307</span>
              <span className="text-[#FDE68A] text-[11px] underline underline-offset-2">Directions →</span>
            </a>
            <div className="flex items-center gap-3">
              <a
                href={`tel:${CLINIC_DETAILS.phoneClean}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FDE68A] hover:underline"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{CLINIC_DETAILS.phone}</span>
              </a>
              <span className="text-slate-400">·</span>
              <span className="text-xs text-emerald-400 font-bold">Open Daily: 10:00 AM – 8:30 PM</span>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'motion/react';
import { Sparkles, X, Check, Calendar, Clock, User, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CLINIC_DETAILS, TREATMENTS } from '../data/clinicData';
import { playSparkle, playPop, playSoftClick } from '../utils/soundEffects';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  defaultTreatment?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  onOpen,
  defaultTreatment = 'Consultation & Checkup'
}) => {
  const [patientName, setPatientName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredTime, setPreferredTime] = useState('Morning (10 AM - 1 PM)');
  const [selectedService, setSelectedService] = useState(defaultTreatment);
  const [preferredDate, setPreferredDate] = useState('Tomorrow');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 12,
    mass: 0.3
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName.trim() || !phone.trim()) return;

    playSparkle();
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#D4C4A8', '#778D7A', '#415A77', '#F4F1DE']
      });
    } catch {
      // ignore
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setPatientName('');
    setPhone('');
    onClose();
  };

  return (
    <>
      {/* 1. The Persistent Floating Booking Pill with Slender Circular Progress Ring */}
      {!isOpen && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: 'spring', damping: 14, stiffness: 180 }}
          className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center justify-center pointer-events-auto max-w-[calc(100vw-24px)]"
        >
          <div className="relative flex items-center">
            
            {/* Circular Progress Indicator Wrapper */}
            <div className="relative group">
              <motion.button
                id="persistent-booking-pill"
                onClick={() => {
                  playPop();
                  onOpen();
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="gold-cta-btn animate-gold-shimmer relative flex items-center gap-2 sm:gap-3 px-3 py-2 sm:pl-4 sm:pr-3 sm:py-3 rounded-full shadow-md transition-all font-['Outfit',sans-serif] z-10 select-none cursor-pointer"
              >
                {/* Left Live Dot */}
                <div className="relative flex items-center justify-center shrink-0">
                  <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#0D1B2A]" />
                  <span className="absolute w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#0D1B2A] animate-ping opacity-60" />
                </div>

                {/* Pill Text - Compact on Mobile */}
                <div className="text-left pr-0.5">
                  <span className="block text-[10px] sm:text-[12px] font-black tracking-wider text-[#0D1B2A] uppercase leading-none">
                    <span className="sm:hidden">TOOTH HURTING? BOOK</span>
                    <span className="hidden sm:inline">TOOTH HURTING? BOOK VISIT</span>
                  </span>
                  <span className="hidden sm:block text-[9px] sm:text-[10px] text-[#0D1B2A]/80 font-bold leading-none mt-1">
                    Sector 53, Noida · Dr. Shubham Arya
                  </span>
                </div>

                {/* Circular Progress Ring Icon Container */}
                <div className="relative w-6 h-6 sm:w-9 sm:h-9 rounded-full flex items-center justify-center bg-[#0D1B2A] shrink-0 border border-[#415A77]">
                  {/* Slender SVG Progress Ring */}
                  <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 36 36">
                    {/* Background faint ring */}
                    <circle
                      cx="18"
                      cy="18"
                      r="15"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-[#415A77]/40"
                    />
                    {/* Active dynamic filled progress ring */}
                    <motion.circle
                      cx="18"
                      cy="18"
                      r="15"
                      fill="none"
                      stroke="#D4C4A8"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      style={{
                        pathLength: smoothProgress,
                      }}
                    />
                  </svg>

                  {/* Arrow Icon in Ring Center */}
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-[#D4C4A8] group-hover:translate-x-0.5 transition-transform" />
                </div>
              </motion.button>
            </div>

          </div>
        </motion.div>
      )}

      {/* 2. Expanding Modal from Center with Spring Animation */}
      <AnimatePresence>
        {isOpen && (
          <div id="booking-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                playSoftClick();
                onClose();
              }}
              className="absolute inset-0 bg-[#0D1B2A]/85 backdrop-blur-xl"
            />

            {/* Panel expanding physically from center */}
            <motion.div
              initial={{ scale: 0.2, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.2, opacity: 0, y: 30 }}
              transition={{ type: 'spring', damping: 14, stiffness: 180 }}
              className="relative w-full max-w-md max-h-[90vh] overflow-y-auto bg-white rounded-[32px] sm:rounded-[36px] p-5 sm:p-8 shadow-2xl border-2 border-[#293549] z-10 text-[#293549]"
            >
              {/* Header Gradient Arc */}
              <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-amber-300 via-amber-200 to-amber-300" />
              
              {/* Close Button */}
              <button
                id="close-booking-modal-btn"
                onClick={() => {
                  playSoftClick();
                  onClose();
                }}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 flex items-center justify-center transition-all cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {!isSubmitted ? (
                <div>
                  <div className="mb-6">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#0F172A] bg-amber-100 px-3 py-1 rounded-full shadow-xs font-['Outfit',sans-serif] border border-amber-300/60">
                      Sector 53, Noida · Pocket A
                    </span>
                    <h3 className="text-2xl font-extrabold text-[#0F172A] font-['Outfit',sans-serif] mt-2.5">
                      BOOK YOUR VISIT
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      Select your preferred timing for Dr. Shubham Arya's clinic.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Patient Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 font-['Outfit',sans-serif]">
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-500" />
                        <input
                          type="text"
                          required
                          value={patientName}
                          onChange={(e) => setPatientName(e.target.value)}
                          placeholder="e.g. Nitin Sharma"
                          className="w-full bg-slate-50 border border-slate-200 focus:border-amber-400 focus:bg-white text-[#0F172A] placeholder:text-slate-400 text-xs sm:text-sm pl-10 pr-4 py-3 rounded-2xl outline-none transition-all font-medium"
                        />
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 font-['Outfit',sans-serif]">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-500" />
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="095608 45609"
                          className="w-full bg-slate-50 border border-slate-200 focus:border-amber-400 focus:bg-white text-[#0F172A] placeholder:text-slate-400 text-xs sm:text-sm pl-10 pr-4 py-3 rounded-2xl outline-none transition-all font-medium"
                        />
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 font-['Outfit',sans-serif]">
                        Treatment Interest
                      </label>
                      <select
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 focus:border-amber-400 focus:bg-white text-[#0F172A] text-xs sm:text-sm px-4 py-3 rounded-2xl outline-none transition-all font-medium cursor-pointer"
                      >
                        <option value="Consultation & General Checkup">Consultation & General Checkup</option>
                        <option value="Laser Teeth Whitening">Laser Teeth Whitening</option>
                        <option value="Custom Porcelain Veneers">Custom Porcelain Veneers</option>
                        <option value="Zirconia Dental Implants">Zirconia Dental Implants</option>
                        <option value="Single-Sitting Root Canal">Single-Sitting Root Canal</option>
                        <option value="Ultrasonic Hydro Cleaning">Ultrasonic Hydro Cleaning</option>
                        <option value="Emergency Toothache Relief">Emergency Toothache Relief</option>
                      </select>
                    </div>

                    {/* Preferred Slot */}
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 mb-1">
                          Date
                        </label>
                        <select
                          value={preferredDate}
                          onChange={(e) => setPreferredDate(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 focus:border-amber-400 focus:bg-white text-[#0F172A] text-xs px-3 py-2.5 rounded-xl outline-none cursor-pointer"
                        >
                          <option value="Today">Today (Urgent)</option>
                          <option value="Tomorrow">Tomorrow</option>
                          <option value="This Weekend">This Weekend</option>
                          <option value="Next Week">Next Week</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 mb-1">
                          Time Slot
                        </label>
                        <select
                          value={preferredTime}
                          onChange={(e) => setPreferredTime(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 focus:border-amber-400 focus:bg-white text-[#0F172A] text-xs px-3 py-2.5 rounded-xl outline-none cursor-pointer"
                        >
                          <option value="Morning (10 AM - 1 PM)">10 AM – 1 PM</option>
                          <option value="Afternoon (2 PM - 5 PM)">2 PM – 5 PM</option>
                          <option value="Evening (5 PM - 8 PM)">5 PM – 8 PM</option>
                        </select>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      id="submit-booking-btn"
                      whileHover={{ scale: 1.03, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ type: 'spring', damping: 12, stiffness: 300 }}
                      className="w-full gold-cta-btn animate-gold-shimmer text-xs sm:text-base py-4 rounded-full shadow-xl transition-all flex items-center justify-center gap-2 mt-2 font-['Outfit',sans-serif] cursor-pointer tracking-wider uppercase"
                    >
                      <span>Confirm Appointment Request</span>
                      <span className="text-base font-black">↗</span>
                    </motion.button>
                  </form>
                </div>
              ) : (
                /* Confirmation Screen */
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#0F172A] font-['Outfit',sans-serif]">
                    Appointment Requested!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium mt-2 mb-6">
                    Thank you <strong className="text-[#C58B1B]">{patientName}</strong>. Dr. Shubham Arya's team at Walnut Dental Clinic will confirm your {selectedService} slot ({preferredDate}, {preferredTime}) shortly at <strong className="text-[#C58B1B]">{phone}</strong>.
                  </p>

                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-left text-xs text-slate-600 space-y-1 mb-6">
                    <p className="font-bold text-[#0F172A]">📍 {CLINIC_DETAILS.name}</p>
                    <p>{CLINIC_DETAILS.address}, Uttar Pradesh 201307</p>
                    <p className="text-[#C58B1B] font-bold">📞 Direct Clinic Line: {CLINIC_DETAILS.phone}</p>
                  </div>

                  <motion.button
                    onClick={handleReset}
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: 'spring', damping: 12, stiffness: 300 }}
                    className="w-full gold-cta-btn animate-gold-shimmer text-xs py-3.5 rounded-full transition-all cursor-pointer tracking-wider uppercase shadow-lg"
                  >
                    Done & Close
                  </motion.button>
                </motion.div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};


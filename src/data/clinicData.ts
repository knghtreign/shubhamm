import { TreatmentInfo, ReviewItem, ClinicHotspot, FaqItem, ClinicSpacePhoto, ClinicService } from '../types';

import drShubhamAryaPortrait from '../assets/images/dr_shubham_arya_portrait_new.jpg';
import walnutClinicSuite from '../assets/images/walnut_clinic_suite_1789192437214.jpg';
import walnutClinicLounge from '../assets/images/walnut_clinic_lounge_1789192451273.jpg';
import walnutClinicWelcome from '../assets/images/walnut_warm_welcome_new.jpg';
import walnutWarmWelcome from '../assets/images/walnut_warm_welcome_new.jpg';
import walnutStep02Unhurried from '../assets/images/walnut_step02_unhurried.jpg';
import walnutStep04Transparent from '../assets/images/walnut_step04_transparent.jpg';
import walnutSerene1 from '../assets/images/walnut_serene_1.jpg';
import walnutSerene2 from '../assets/images/walnut_serene_2.jpg';
import walnutSerene3 from '../assets/images/walnut_serene_3.jpg';
import walnutSerene4 from '../assets/images/walnut_serene_4.jpg';
import clearAlignersBraces from '../assets/images/clear_aligners_braces_1789192465168.jpg';
import heroToothWorkers from '../assets/images/hero_workers_tooth_1788252748342.jpg';
import isometricClinic from '../assets/images/isometric_clinic_1788252767756.jpg';
import smileResult from '../assets/images/smile_result_1788252853269.jpg';
import dentistAction from '../assets/images/dentist_treatment_action_1788253779087.jpg';
import digitalScanner from '../assets/images/digital_dental_scanner_1788253808531.jpg';
import titaniumImplant from '../assets/images/titanium_dental_implant_1788260427614.jpg';
import patientPriya from '../assets/images/patient_priya_avatar_1788254358383.jpg';
import patientRahul from '../assets/images/patient_rahul_avatar_1788254378193.jpg';
import patientAnanya from '../assets/images/patient_ananya_avatar_1788254397087.jpg';
import paediatrics from '../assets/images/paediatric_dental_care_1788595045588.jpg';
import veneersCrowns from '../assets/images/dental_veneer_crown_1788595062863.jpg';
import dentalXray from '../assets/images/dental_xray_modern_1788595079091.jpg';
import dentalBonding from '../assets/images/dental_bonding_macro_1788595094151.jpg';
import laserGumCare from '../assets/images/laser_gum_care_1789207399394.jpg';

// Clinic image asset paths (bundled by Vite for development & production)
export const CLINIC_IMAGES = {
  drShubhamAryaPortrait,
  walnutClinicSuite,
  walnutClinicLounge,
  clearAlignersBraces,
  heroToothWorkers,
  isometricClinic,
  smileResult,
  clinicSuite: walnutClinicSuite,
  dentistAction: walnutStep02Unhurried,
  step02Unhurried: walnutStep02Unhurried,
  step04Transparent: walnutStep04Transparent,
  clinicLounge: walnutWarmWelcome,
  walnutClinicWelcome: walnutWarmWelcome,
  walnutWarmWelcome,
  walnutSerene1,
  walnutSerene2,
  walnutSerene3,
  walnutSerene4,
  digitalScanner,
  titaniumImplant,
  patientPriya,
  patientRahul,
  patientAnanya,
  paediatrics,
  veneersCrowns,
  dentalXray,
  dentalBonding,
  laserGumCare,
};

export const CLINIC_DETAILS = {
  name: "Dr. Shubham Arya Walnut Dental & Implant Clinic",
  shortName: "Walnut Dental & Implant Clinic",
  hindiName: "डॉ. शुभम आर्य वॉलनट डेंटल & इंप्लांट क्लिनिक",
  doctor: "Dr. Shubham Arya",
  degree: "BDS, MDS (Orthodontics and Dentofacial Orthopaedics)",
  cert: "Certified Implantologist",
  role: "Orthodontist & Certified Implantologist",
  tagline: "From Dreams To Discovery, Creating Miles of Smiles.",
  subtext: "Best Dental Clinic in Noida Sector 53, 61 & Noida",
  address: "Pocket A, Kanchanjunga Market, Sector 53, Noida, Uttar Pradesh 201307",
  phone: "095608 45609",
  phoneClean: "+919560845609",
  website: "https://walnutdentalclinic.com",
  websiteDisplay: "walnutdentalclinic.com",
  email: "info@walnutdentalclinic.com",
  rating: "5.0",
  totalReviews: 177,
  neighborhood: "Sector 53, 61 & Central Noida",
  landmark: "Pocket A, Kanchanjunga Market, Sector 53",
  plusCode: "H9W6+7X Noida, Uttar Pradesh",
  hours: "Monday – Saturday: 10:00 AM – 8:00 PM · Sunday: By Appointment",
  mapLink: "https://maps.app.goo.gl/9ZDzEtPGaV2jui4EA",
  googleMapsUrl: "https://maps.app.goo.gl/9ZDzEtPGaV2jui4EA",
  amenities: [
    "Wheelchair accessible entrance",
    "LGBTQ+ friendly",
    "Hospital-grade sterilization",
    "Digital 3D Intraoral Scans & CBCT",
    "Private Implant & Orthodontic Suites",
  ],
};

export const TREATMENTS: TreatmentInfo[] = [
  {
    id: 'whitening',
    name: 'WHITENING',
    shortDesc: 'Laser-activated enamel brightening for a radiant, luminous natural shade.',
    tagline: 'Up to 8 shades whiter in 45 minutes.',
    duration: '45 mins',
    badge: 'Gentle Laser System',
    benefits: ['Zero enamel abrasion', 'Immediate visible results', 'Long-lasting glow']
  },
  {
    id: 'veneers',
    name: 'VENEERS & ALIGNERS',
    shortDesc: 'Ultra-thin handcrafted ceramic veneers and digital clear aligners for harmonic smile design.',
    tagline: 'Custom sculpted porcelain & clear alignment.',
    duration: '2 appointments',
    badge: 'Digital Smile Design',
    benefits: ['Custom color-matched', 'Stain-resistant finish', 'Preserves natural tooth']
  },
  {
    id: 'implants',
    name: 'IMPLANTS',
    shortDesc: 'Titanium bio-integrated fixtures crowned with lifelike monolithic zirconia teeth.',
    tagline: 'Permanent, rock-solid root replacement.',
    duration: 'Lifelong durability',
    badge: 'Precision 3D Guided',
    benefits: ['Natural chewing strength', 'Bone preservation', 'Indistinguishable from natural']
  },
  {
    id: 'rootcanal',
    name: 'ROOT CANAL',
    shortDesc: 'Microscopic single-visit nerve therapy with completely painless rotary instruments.',
    tagline: 'Instant pain relief with zero trauma.',
    duration: 'Single sitting',
    badge: '100% Pain-Free Rotary',
    benefits: ['Saves natural tooth', 'Computer-controlled depth', 'Silent comfortable experience']
  },
  {
    id: 'cleaning',
    name: 'CLEANING',
    shortDesc: 'Ultrasonic air-polishing therapy eliminating biofilm, tartar, and stubborn stains.',
    tagline: 'Deep prophylaxis & fresh gum rejuvenation.',
    duration: '30 mins',
    badge: 'Ultrasonic Hydro-Glow',
    benefits: ['Gentle on sensitivity', 'Polishes tea/coffee stains', 'Promotes gum vitality']
  },
];

export const CLINIC_HOTSPOTS: ClinicHotspot[] = [
  {
    id: 'care',
    label: 'Modern Orthodontics',
    description: 'Digital 3D intraoral optical scanning for clear aligners and precision braces.',
    x: 48,
    y: 42,
  },
  {
    id: 'comfort',
    label: 'Comfortable visits',
    description: 'Ergonomic dental suites in Kanchanjunga Market with wheelchair accessibility.',
    x: 28,
    y: 65,
  },
  {
    id: 'personal',
    label: 'Personal attention',
    description: 'Dr. Shubham Arya personally oversees every minute of your treatment.',
    x: 72,
    y: 50,
  },
  {
    id: 'gentle',
    label: 'Certified Implantology',
    description: 'Specialized 100% pain-free protocols for implants and single-sitting root canals.',
    x: 60,
    y: 78,
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-google-1',
    patientName: "Nitin Sharma",
    avatarLetter: "N",
    avatarBg: "#1E3A8A",
    stats: "Local Guide · 14 reviews",
    treatment: "Painless Root Canal & Zirconia Crown",
    rating: 5,
    date: "2 months ago",
    reviewText: "Best dental clinic in Noida Sector 53 and nearby areas! Dr. Shubham Arya is extremely competent, polite, and caring. Got my root canal treatment done completely painlessly. He took time to explain every single step before starting so there was zero anxiety. The clinic is spotless, modern, and hygienic. Highly recommended for everyone in Noida!",
    highlightPhrase: "Got my root canal treatment done completely painlessly. He took time to explain every step.",
    rotation: -2,
    verified: true
  },
  {
    id: 'rev-google-2',
    patientName: "Rachna Verma",
    avatarLetter: "R",
    avatarBg: "#B45309",
    stats: "8 reviews · 2 photos",
    treatment: "Orthodontics & Clear Aligners",
    rating: 5,
    date: "3 months ago",
    reviewText: "I visited Walnut Dental Clinic for orthodontic treatment and clear aligners consultation with Dr. Shubham Arya. He is an outstanding orthodontist with great attention to detail. My teeth alignment has improved dramatically without any pain or discomfort. The staff is warm and very supportive!",
    highlightPhrase: "He is an outstanding orthodontist with great attention to detail. Teeth alignment improved dramatically.",
    rotation: 3,
    verified: true
  },
  {
    id: 'rev-google-3',
    patientName: "Amitabh Saxena",
    avatarLetter: "A",
    avatarBg: "#065F46",
    stats: "6 reviews",
    treatment: "Dental Implant & Restorative Dentistry",
    rating: 5,
    date: "1 month ago",
    reviewText: "Dr. Shubham Arya is simply the best dentist in Noida Sector 53 and Sector 61. He treated my elderly father with utmost patience and respect, prioritizing senior citizen comfort. His implantology skills are top-notch. The dental implant procedure was seamless, zero complications, and healed perfectly.",
    highlightPhrase: "His implantology skills are top-notch. The dental implant procedure was seamless with zero complications.",
    rotation: -3,
    verified: true
  },
  {
    id: 'rev-google-4',
    patientName: "Kavita Gupta",
    avatarLetter: "K",
    avatarBg: "#9333EA",
    stats: "5 reviews · 1 photo",
    treatment: "Single-Sitting Toothache Relief & Filling",
    rating: 5,
    date: "4 months ago",
    reviewText: "Had a wonderful experience at Walnut Dental & Implant Clinic. Dr. Shubham diagnosed my persistent toothache instantly and carried out single-sitting treatment with zero pain. The clinic maintains hospital-grade sterilization and modern equipment. 5 stars well deserved!",
    highlightPhrase: "Diagnosed my persistent toothache instantly and carried out single-sitting treatment with zero anxiety.",
    rotation: 2,
    verified: true
  },
  {
    id: 'rev-google-5',
    patientName: "Vivek Malhotra",
    avatarLetter: "V",
    avatarBg: "#0284C7",
    stats: "11 reviews",
    treatment: "Ultrasonic Cleaning & Aesthetic Composite Bonding",
    rating: 5,
    date: "5 months ago",
    reviewText: "Visited for teeth cleaning, ultrasonic polishing, and composite bonding. Dr. Shubham Arya explained everything transparently without pushing any unnecessary treatments or inflating costs. Very genuine and ethical doctor in Kanchanjunga Market.",
    highlightPhrase: "Very genuine and ethical doctor. Explained everything transparently without pushing unnecessary treatments.",
    rotation: -4,
    verified: true
  },
  {
    id: 'rev-google-6',
    patientName: "Meenakshi Joshi",
    avatarLetter: "M",
    avatarBg: "#BE123C",
    stats: "4 reviews",
    treatment: "Adult Orthodontic Care & Ceramic Braces",
    rating: 5,
    date: "6 months ago",
    reviewText: "Getting braces as an adult felt daunting until I consulted Dr. Shubham Arya at Walnut Dental. He explained both ceramic braces and clear aligners patiently. He is so polite, reassuring, and meticulous in every adjustment visit. Truly the best orthodontist in Noida.",
    highlightPhrase: "Truly the best orthodontist in Noida. Reassuring and meticulous in every adjustment visit.",
    rotation: 3,
    verified: true
  },
  {
    id: 'rev-google-7',
    patientName: "Rahul Singhal",
    avatarLetter: "R",
    avatarBg: "#374151",
    stats: "7 reviews · 3 photos",
    treatment: "Zirconia Crown Placement & Bite Alignment",
    rating: 5,
    date: "2 months ago",
    reviewText: "Superb dental clinic in Sector 53! The clinic is neat, well-managed, and wheelchair accessible. Dr. Shubham replaced an old ill-fitting crown with a beautiful natural zirconia crown. The bite feels completely natural. Thank you doctor and staff!",
    highlightPhrase: "Bite feels completely natural. Superb dental clinic in Sector 53, neat, well-managed, and accessible.",
    rotation: -2,
    verified: true
  },
  {
    id: 'rev-google-8',
    patientName: "Pooja Aggarwal",
    avatarLetter: "P",
    avatarBg: "#047857",
    stats: "9 reviews",
    treatment: "Gentle Fillings & Preventive Dental Care",
    rating: 5,
    date: "3 months ago",
    reviewText: "I had high dental anxiety, but Dr. Shubham Arya's gentle approach completely put me at ease. The anesthesia injection was barely noticeable! I had two fillings and polishing done and walked out smiling. The clinic ambience is calm, clean, and spotless.",
    highlightPhrase: "Gentle approach completely put me at ease. Anesthesia injection was barely noticeable!",
    rotation: 4,
    verified: true
  },
  {
    id: 'rev-google-9',
    patientName: "Deepak Chauhan",
    avatarLetter: "D",
    avatarBg: "#D97706",
    stats: "5 reviews",
    treatment: "Smile Makeover & Dentofacial Orthopaedics",
    rating: 5,
    date: "4 months ago",
    reviewText: "I traveled from Sector 62 specifically because friends recommended Dr. Shubham Arya at Walnut Dental. Everything from booking on walnutdentalclinic.com to the treatment was smooth. Exceptional doctor with deep knowledge in dentofacial orthopaedics.",
    highlightPhrase: "Everything from booking to treatment was smooth. Exceptional doctor with deep knowledge.",
    rotation: -3,
    verified: true
  },
  {
    id: 'rev-google-10',
    patientName: "Anjali Nair",
    avatarLetter: "A",
    avatarBg: "#0F766E",
    stats: "8 reviews · 2 photos",
    treatment: "Ceramic Veneers & Digital Smile Design",
    rating: 5,
    date: "1 month ago",
    reviewText: "Dr. Shubham Arya gave me my smile back with modern ceramic veneers. He took digital scans, showed me the predicted outcome, and delivered perfection. Walnut Dental Clinic is easily the gold standard for dental care in Noida.",
    highlightPhrase: "Delivered perfection. Walnut Dental Clinic is easily the gold standard for dental care in Noida.",
    rotation: 2,
    verified: true
  }
];

export const DOCTOR_CREDENTIALS = [
  { id: 'c1', title: '12+ Years', subtitle: 'Clinical Experience' },
  { id: 'c2', title: 'BDS, MDS', subtitle: 'Orthodontics & Dentofacial' },
  { id: 'c3', title: 'Certified', subtitle: 'Implantologist' },
  { id: 'c4', title: '5.0 ★ Rating', subtitle: '177+ Google Reviews' },
  { id: 'c5', title: 'Sector 53, Noida', subtitle: 'Kanchanjunga Market' },
  { id: 'c6', title: '100% Pain-Free', subtitle: 'Gentle Patient Care' },
];

export const CLINIC_PHOTOS: ClinicSpacePhoto[] = [
  {
    id: 'space-1',
    title: 'Operatory & Treatment Suite',
    subtitle: 'Pocket A, Kanchanjunga Market, Sector 53, Noida · Serene clinic environment',
    imageSrc: CLINIC_IMAGES.walnutSerene1,
    tag: 'THE SUITE'
  },
  {
    id: 'space-2',
    title: 'Modern Clinical Setup',
    subtitle: 'High-precision dental equipment and serene patient consultation space',
    imageSrc: CLINIC_IMAGES.walnutSerene2,
    tag: 'CLINICAL CARE'
  },
  {
    id: 'space-3',
    title: 'Sanitized Dental Care Lounge',
    subtitle: 'Quiet, hygienic, and anxiety-free clinical atmosphere',
    imageSrc: CLINIC_IMAGES.walnutSerene3,
    tag: 'SERENE SPACE'
  },
  {
    id: 'space-4',
    title: 'Advanced Treatment Operatory',
    subtitle: 'Dedicated orthodontic and implantology clinical workstation',
    imageSrc: CLINIC_IMAGES.walnutSerene4,
    tag: 'SPECIALTY TECH'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Where is Walnut Dental & Implant Clinic located?',
    answer: 'We are located at Pocket A, Kanchanjunga Market, Sector 53, Noida, Uttar Pradesh 201307 (conveniently accessible from Sector 53, Sector 61, Sector 71, and all across Noida). The clinic is wheelchair accessible with ample market parking.'
  },
  {
    id: 'faq-2',
    question: 'Who is the lead doctor at Walnut Dental Clinic?',
    answer: 'Our clinic is led by Dr. Shubham Arya, BDS, MDS in Orthodontics and Dentofacial Orthopaedics, and Certified Implantologist with over 12 years of clinical experience. He personally evaluates and conducts treatments with unhurried care.'
  },
  {
    id: 'faq-3',
    question: 'What specialized treatments are offered at Walnut Dental?',
    answer: 'We specialize in Orthodontics (Ceramic Braces & Clear Aligners), Dental Implants & Zirconia Crowns, Painless Single-Sitting Root Canals, Ceramic Veneers, Digital Smile Design, Teeth Whitening, Laser Gingivoplasty, Paediatric Dentistry, and Emergency Dental Care.'
  },
  {
    id: 'faq-4',
    question: 'Is dental treatment really painless at Walnut Dental Clinic?',
    answer: 'Yes! Dr. Shubham Arya utilizes modern computer-controlled rotary instruments, topical anaesthetic gels with gentle micro-fine needles, and reassuring techniques designed to eliminate dental pain and anxiety completely.'
  },
  {
    id: 'faq-5',
    question: 'What are the clinic timings and how can I book?',
    answer: 'Walnut Dental Clinic is open Monday to Saturday from 10:00 AM to 8:00 PM, and Sundays by appointment. You can book instantly via our website (walnutdentalclinic.com), through the booking button on this page, or by calling 095608 45609.'
  },
  {
    id: 'faq-6',
    question: 'Is the clinic wheelchair accessible and inclusive?',
    answer: 'Yes, Walnut Dental Clinic features a wheelchair accessible entrance, step-free access, and is an LGBTQ+ friendly and welcoming clinical space for all patients.'
  }
];

export const CLINIC_SERVICES: ClinicService[] = [
  {
    id: 'srv-aligners',
    name: 'Clear Aligners & Braces',
    category: 'ORTHODONTICS',
    shortDesc: 'Invisible aligners and ceramic braces designed by MDS Orthodontist Dr. Shubham Arya.',
    imageSrc: CLINIC_IMAGES.clearAlignersBraces,
    tag: 'ALIGNERS',
    badge: 'MDS Specialist',
    color: '#D4C4A8',
  },
  {
    id: 'srv-implants',
    name: 'Dental Implants',
    category: 'IMPLANTOLOGY',
    shortDesc: 'Precision 3D guided titanium implants paired with monolithic zirconia crowns.',
    imageSrc: CLINIC_IMAGES.titaniumImplant,
    tag: 'IMPLANTS',
    badge: 'Certified Implantologist',
    color: '#778D7A',
  },
  {
    id: 'srv-rootcanal',
    name: 'Single-Sitting Root Canal',
    category: 'ENDODONTICS',
    shortDesc: 'Microscopic rotary endodontics relieving toothaches quickly and 100% painlessly.',
    imageSrc: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=500&q=75',
    tag: 'ROOT CANAL',
    badge: 'Single Sitting',
    color: '#415A77',
  },
  {
    id: 'srv-whitening',
    name: 'Teeth Whitening',
    category: 'AESTHETICS',
    shortDesc: 'Laser-assisted enamel brightening lifting stubborn coffee and tea stains up to 8 shades.',
    imageSrc: CLINIC_IMAGES.smileResult,
    tag: 'WHITENING',
    badge: 'Laser Brightening',
    color: '#D4C4A8',
  },
  {
    id: 'srv-veneers',
    name: 'Ceramic Veneers & Crowns',
    category: 'SMILE DESIGN',
    shortDesc: 'Custom handcrafted ceramic veneers and high-translucency aesthetic crowns.',
    imageSrc: CLINIC_IMAGES.veneersCrowns,
    tag: 'VENEERS',
    badge: 'Smile Makeover',
    color: '#778D7A',
  },
  {
    id: 'srv-checkups',
    name: 'Comprehensive Check-up & 3D Scan',
    category: 'PREVENTIVE',
    shortDesc: 'Intraoral 3D optical scanning and complete oral health assessment with zero radiation discomfort.',
    imageSrc: CLINIC_IMAGES.digitalScanner,
    tag: 'CHECK-UPS',
    badge: '3D Optical Scan',
    color: '#415A77',
  },
  {
    id: 'srv-cleaning',
    name: 'Ultrasonic Teeth Cleaning',
    category: 'HYGIENE',
    shortDesc: 'Advanced hydro-polishing removing tartar, plaque biofilm, and surface discolorations.',
    imageSrc: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=500&q=75',
    tag: 'CLEANING',
    badge: 'Ultrasonic Glow',
    color: '#D4C4A8',
  },
  {
    id: 'srv-bonding',
    name: 'Cosmetic Bonding',
    category: 'COSMETIC',
    shortDesc: 'Micro-sculpted nano-composite resin repairing chipped teeth, gaps, and worn edges.',
    imageSrc: CLINIC_IMAGES.dentalBonding,
    tag: 'BONDING',
    badge: 'Micro-Sculpting',
    color: '#778D7A',
  },
  {
    id: 'srv-paediatrics',
    name: 'Paediatric Dental Care',
    category: 'KIDS CARE',
    shortDesc: 'Friendly, fear-free children dentistry focusing on cavity prevention and gentle care.',
    imageSrc: CLINIC_IMAGES.paediatrics,
    tag: 'KIDS CARE',
    badge: 'Fear-Free Comfort',
    color: '#415A77',
  },
  {
    id: 'srv-laser',
    name: 'Laser Gingivoplasty & Gum Care',
    category: 'PERIODONTICS',
    shortDesc: 'Precise soft-tissue laser contouring for gummy smiles and healthy gum margins.',
    imageSrc: CLINIC_IMAGES.laserGumCare,
    tag: 'GUM CARE',
    badge: 'Soft-Tissue Laser',
    color: '#D4C4A8',
  },
  {
    id: 'srv-dentures',
    name: 'Dentures & Fixed Bridges',
    category: 'PROSTHETICS',
    shortDesc: 'Flexible modern partials, complete dentures, and permanent tooth-supported bridges.',
    imageSrc: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=500&q=75',
    tag: 'BRIDGES',
    badge: 'Natural Alignment',
    color: '#778D7A',
  },
  {
    id: 'srv-emergency',
    name: 'Emergency Dental Relief',
    category: 'URGENT RELIEF',
    shortDesc: 'Immediate same-day attention for acute toothaches, chipped teeth, and trauma.',
    imageSrc: CLINIC_IMAGES.walnutClinicSuite,
    tag: 'EMERGENCY',
    badge: 'Same-Day Priority',
    color: '#415A77',
  },
  {
    id: 'srv-guards',
    name: 'Mouth Guards & Night Guards',
    category: 'PROTECTION',
    shortDesc: 'Custom-molded dental guards protecting against nighttime teeth grinding (bruxism).',
    imageSrc: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=500&q=75',
    tag: 'GUARDS',
    badge: 'Custom Molded',
    color: '#D4C4A8',
  },
  {
    id: 'srv-xray',
    name: 'Digital X-Ray & 3D Imaging',
    category: 'DIAGNOSTICS',
    shortDesc: 'Ultra-low radiation HD digital dental radiography for precise diagnostics.',
    imageSrc: CLINIC_IMAGES.dentalXray,
    tag: '3D X-RAY',
    badge: 'HD Digital Scans',
    color: '#415A77',
  },
];



"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-montserrat",
});
type Lang = "en" | "ur";

/* ══════════════════════════════════════════════════════════
   ICONS
══════════════════════════════════════════════════════════ */
export const I = {
  anchor: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><circle cx="12" cy="5" r="2" /><path d="M12 7v13M5 10h14M5 20c0-3.5 3-5 7-5s7 1.5 7 5" /></svg>,
  plane: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M21 16v-2l-8-5V3.5A1.5 1.5 0 0011 2a1.5 1.5 0 00-1.5 1.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" /></svg>,
  truck: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>,
  doc: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4M7 8h10M7 12h6" /></svg>,
  home: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><path d="M9 22V12h6v10" /></svg>,
  link: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" /></svg>,
  arrow: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>,
  arrowSm: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M5 12h14M12 5l7 7-7 7" /></svg>,
  phone: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.18 2 2 0 012.18 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>,
  pin: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>,
  check: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5"><path d="M20 6L9 17l-5-5" /></svg>,
  menu: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-6 h-6"><path d="M3 12h18M3 6h18M3 18h12" /></svg>,
  close: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-6 h-6"><path d="M18 6L6 18M6 6l12 12" /></svg>,
  wa: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>,
  fb: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>,
  li: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.981 0 1.775-.773 1.775-1.729V1.729C24 .774 23.206 0 22.225 0z" /></svg>,
};

const WA = [
  { display: "056 826 2134", raw: "971568262134" },
  { display: "055 935 9616", raw: "971559359616" },
  { display: "055 536 5465", raw: "971555365465" },
];

const svcIcons = [I.anchor, I.plane, I.truck, I.doc, I.home, I.link];

/* ══════════════════════════════════════════════════════════
   CONTENT
══════════════════════════════════════════════════════════ */
const T = {
  en: {
    dir: "ltr" as const,
    switchLang: "اردو",
    navLinks: ["Services", "About", "Contact"],
    cta: "Get Quote",
    hero: {
      label: "Global Freight & Logistics — Dubai, UAE",
      h1a: "AFAQ",
      h1b: "AL BAHAR",
      h1c: "Shipping",
      sub: "Navigating global trade routes with excellence. From sea to sky, we deliver your cargo across endless horizons.",
      btn: "Explore Services",
      verticalText: "PRECISION · SPEED · RELIABILITY",
      cards: [
        { n: "No 01", title: "AFAQ", sub: "FCL & LCL worldwide" },
        { n: "No 02", title: "AL BAHAR", sub: "Time-critical delivery" },
        { n: "No 03", title: "Shipping", sub: "GCC cross-border" },
      ],
    },
    services: {
      label: "Our Services",
      h2: "What We Do",
      items: [
        { title: "Ocean Freight", desc: "FCL & LCL across every major global sea lane, space guaranteed." },
        { title: "Air Logistics", desc: "Express and economy air cargo for time-critical international trade." },
        { title: "Land Transport", desc: "Cross-border trucking and last-mile delivery across the GCC." },
        { title: "Customs Clearance", desc: "Expert regulatory compliance and documentation at every border." },
        { title: "Warehousing", desc: "Secure, climate-controlled storage with live inventory tracking." },
        { title: "Supply Chain", desc: "End-to-end optimization designed around your business needs." },
      ],
    },
    about: {
      label: "About Us",
      h2: "We Move\nWhat Matters",
      body: "Founded in Dubai in 2022, AFAQ AL BAHR SHIPPING L.L.C. was built on one belief — that great logistics should be simple, reliable, and personal. We combine regional expertise with a global network to keep your cargo moving.",
      points: ["Multi-modal freight across sea, air & land", "Dedicated account manager for every client", "Real-time cargo tracking & visibility", "Transparent, competitive pricing always"],
      founderLabel: "Founder & CEO",
      founderName: "Muhammad Arif",
      quote: "I built AFAQ AL BAHR to give businesses in this region access to world-class logistics without compromise. Your cargo, delivered safely — every single time.",
      exp: "20+ years of industry experience",
    },
    contact: {
      label: "Contact",
      h2: "Let's Talk\nLogistics",
      sub: "Tell us about your shipment and we'll respond within hours.",
      name: "Full name",
      phone: "Phone number",
      msg: "Tell us about your cargo — origin, destination, type, timeline...",
      send: "Send Message",
      office: "Dubai, United Arab Emirates",
      waLabel: "WhatsApp Direct",
      ok: "Message sent — we'll be in touch soon!",
      nameLabel: "Your Name",
      phoneLabel: "Your No.",
      msgLabel: "Tell Us More",
    },
    footer: {
      tagline: "Premium global freight & logistics since 2022.",
      svcLabel: "Services",
      svcLinks: ["Ocean Freight", "Air Logistics", "Land Transport", "Customs Clearance", "Warehousing"],
      conLabel: "Contact",
      companyLabel: "Company",
      address: "Dubai, United Arab Emirates",
      reachLabel: "Reach Us",
      copy: "© 2024 AFAQ AL BAHR SHIPPING L.L.C.",
      arabic: "أفاق البحر للشحن ش.ذ.م.م — Muhammad Arif",
    },
  },
  ur: {
    dir: "rtl" as const,
    switchLang: "English",
    navLinks: ["خدمات", "ہمارے بارے میں", "رابطہ"],
    cta: "قیمت جانیں",
    hero: {
      label: "عالمی فریٹ اور لاجسٹکس — دبئی، متحدہ عرب امارات",
      h1a: "قابل اعتماد فریٹ",
      h1b: "حل برائے",
      h1c: "عالمی تجارت۔",
      sub: "آفاق البحر شپنگ ایل ایل سی آپ کے سامان کو دنیا کے ہر کونے تک پہنچاتی ہے — سمندر، ہوائی اور زمینی راستے سے۔",
      btn: "خدمات دیکھیں",
      verticalText: "درستگی · رفتار · قابل اعتماد",
      cards: [
        { n: "نمبر 01", title: "سمندری مال برداری", sub: "FCL اور LCL عالمی" },
        { n: "نمبر 02", title: "ہوائی لاجسٹکس", sub: "وقت پر ترسیل" },
        { n: "نمبر 03", title: "زمینی نقل و حمل", sub: "خلیج سرحد پار" },
      ],
    },
    services: {
      label: "ہماری خدمات",
      h2: "ہم کیا کرتے ہیں",
      items: [
        { title: "سمندری مال برداری", desc: "ہر بڑے عالمی سمندری راستے پر FCL اور LCL، جگہ کی ضمانت۔" },
        { title: "ہوائی لاجسٹکس", desc: "وقت کے حساس بین الاقوامی تجارت کے لیے ایکسپریس کارگو۔" },
        { title: "زمینی نقل و حمل", desc: "خلیجی علاقے میں سرحد پار ٹرکنگ اور آخری میل ترسیل۔" },
        { title: "کسٹم کلیئرنس", desc: "ہر سرحد پر ماہرانہ ریگولیٹری تعمیل اور دستاویزات۔" },
        { title: "گودام", desc: "لائیو انوینٹری وژیبلٹی کے ساتھ محفوظ، موسمی ذخیرہ۔" },
        { title: "سپلائی چین", desc: "آپ کے کاروباری تقاضوں کے گرد مکمل آپٹیمائزیشن۔" },
      ],
    },
    about: {
      label: "ہمارے بارے میں",
      h2: "ہم وہ منتقل\nکرتے ہیں جو اہم ہے۔",
      body: "2022 میں دبئی میں قائم، آفاق البحر شپنگ ایل ایل سی ایک یقین پر قائم ہے — کہ عمدہ لاجسٹکس سادہ، قابل اعتماد اور ذاتی ہونی چاہیے۔ ہم علاقائی مہارت اور عالمی نیٹ ورک کو یکجا کر کے آپ کا سامان چلاتے رہتے ہیں۔",
      points: ["سمندر، ہوائی اور زمین پر ملٹی موڈل فریٹ", "ہر کلائنٹ کے لیے مخصوص اکاؤنٹ مینیجر", "حقیقی وقت کارگو ٹریکنگ اور وژیبلٹی", "شفاف، مسابقتی قیمتیں ہمیشہ"],
      founderLabel: "بانی اور سی ای او",
      founderName: "محمد عارف",
      quote: "میں نے آفاق البحر اس لیے بنائی تاکہ اس خطے کے کاروباروں کو عالمی معیار کی لاجسٹکس تک رسائی ملے۔ آپ کا سامان، ہر بار محفوظ طریقے سے پہنچایا جائے۔",
      exp: "صنعت میں 20+ سال کا تجربہ",
    },
    contact: {
      label: "رابطہ",
      h2: "لاجسٹکس کے\nبارے میں بات کریں۔",
      sub: "اپنی ترسیل کے بارے میں بتائیں اور ہم چند گھنٹوں میں جواب دیں گے۔",
      name: "پورا نام",
      phone: "فون نمبر",
      msg: "اپنے کارگو کے بارے میں بتائیں — اصل، منزل، قسم، ٹائم لائن...",
      send: "پیغام بھیجیں",
      office: "دبئی، متحدہ عرب امارات",
      waLabel: "واٹس ایپ ڈائریکٹ",
      ok: "پیغام بھیج دیا گیا — ہم جلد رابطہ کریں گے!",
      nameLabel: "آپ کا نام",
      phoneLabel: "آپ کا نمبر",
      msgLabel: "مزید بتائیں",
    },
    footer: {
      tagline: "2022 سے پریمیم عالمی فریٹ اور لاجسٹکس۔",
      svcLabel: "خدمات",
      svcLinks: ["سمندری مال برداری", "ہوائی لاجسٹکس", "زمینی نقل و حمل", "کسٹم کلیئرنس", "گودام"],
      conLabel: "رابطہ",
      companyLabel: "کمپنی",
      address: "دبئی، متحدہ عرب امارات",
      reachLabel: "ہم سے رابطہ کریں",
      copy: "© 2024 آفاق البحر شپنگ ایل ایل سی",
      arabic: "AFAQ AL BAHR SHIPPING L.L.C. — Muhammad Arif",
    },
  },
};

// Removed Local Navbar from here since it competes with Layout.tsx
// Using the global Navbar component instead
/* ══════════════════════════════════════════════════════════
   HERO  — full-screen image bg like reference
══════════════════════════════════════════════════════════ */
function Hero({ lang }: { lang: Lang }) {
  const c = T[lang].hero;
  const dir = T[lang].dir;
  const isUr = lang === "ur";

  const leftCol = ["/imge1.png", "/imge2.png", "/imge3.png", "/imge4.png", "/imge5.png"];
  const rightCol = ["/imge6.png", "/imge7.png", "/imge8.png", "/imge9.png", "/imge1.png"];

  return (
    <section
      dir={dir}
      className="relative z-10 min-h-[560px] md:h-screen md:min-h-[700px] overflow-hidden bg-gradient-to-br from-[#e8fff0] via-[#eef4ff] to-[#f5edff]"
      style={{ clipPath: isUr ? "polygon(0 0, 100% 0, 100% 100%, 0 88%)" : "polygon(0 0, 100% 0, 100% 88%, 0 100%)" }}
    >

      <style>{`
        @keyframes scrollUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scrollDown {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
      `}</style>

      {/* Gradient overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "linear-gradient(110deg, rgba(34,197,94,0.22) 0%, rgba(45,45,184,0.14) 34%, rgba(139,92,246,0.12) 62%, rgba(255,255,255,0.92) 100%)",
      }} />

      {/* Main Structural Flex Container - Automatically flips via RTL */}
      <div className="relative z-10 w-full h-full flex flex-col lg:flex-row items-center justify-between overflow-hidden">

        {/* Text content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center h-full px-4 sm:px-6 md:px-12 pt-36 md:pt-40 lg:pt-24 z-20">
          <h1
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a67e] via-[#1fb4e0] to-[#0f74c0] lowercase mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            style={{ 
              letterSpacing: "-0.02em", 
              fontWeight: 800, 
              lineHeight: 1.1,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            <span className="block">{c.h1a} {c.h1b}</span>
            <span className="block">{c.h1c}</span>
          </h1>

          <p className="text-slate-600 text-base max-w-sm leading-relaxed mb-6 md:mb-10">{c.sub}</p>

          <a href="/services" className="inline-flex items-center justify-center gap-2 w-fit rounded-full bg-[#2d2db8] px-7 py-3 text-base font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#243cb8]">
            {c.btn}
          </a>
        </div>

        {/* Image Area */}
        <div
          className="w-full lg:w-1/2 h-44 sm:h-52 lg:h-full flex gap-3 p-3 overflow-hidden pointer-events-none mt-10 lg:mt-0"
          style={{
            maskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)"
          }}
        >
          {/* Left column - scrolls UP */}
          <div className="relative flex-1 overflow-hidden">
            <div className="flex flex-col items-center gap-y-1" style={{ animation: "scrollUp 25s linear infinite" }}>
              {[...leftCol, ...leftCol].map((src, i) => (
                <div key={i} className="relative w-full max-w-[150px] sm:max-w-[200px] md:max-w-[260px] h-[100px] sm:h-[140px] md:h-[200px] lg:h-[260px] -mt-2 sm:-mt-5">
                  <Image src={src} alt={`img${i}`} fill className="object-contain object-center drop-shadow-sm" />
                </div>
              ))}
            </div>
          </div>

          {/* Right column - scrolls DOWN */}
          <div className="relative flex-1 overflow-hidden">
            <div className="flex flex-col items-center gap-y-1" style={{ animation: "scrollDown 25s linear infinite" }}>
              {[...rightCol, ...rightCol].map((src, i) => (
                <div key={i} className="relative w-full max-w-[150px] sm:max-w-[200px] md:max-w-[260px] h-[100px] sm:h-[140px] md:h-[200px] lg:h-[260px] -mt-2 sm:-mt-5">
                  <Image src={src} alt={`img${i}`} fill className="object-contain object-center drop-shadow-sm" />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   SERVICES
══════════════════════════════════════════════════════════ */
function Services({ lang }: { lang: Lang }) {
  const c = T[lang].services;
  const dir = T[lang].dir;

  return (
    <section id="s0" dir={dir} className="bg-white py-16 md:py-28 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-12">

        {/* Header */}
        <div className="mb-8 md:mb-16 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold pb-2 text-[#0d0d2b] leading-[1.15] tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#0d0d2b] to-[#2d2db8] inline-block">
            {c.h2}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {c.items.slice(0, 3).map((item, i) => (
            <div
              key={i}
              className="group relative rounded-3xl bg-white border border-slate-100 p-5 md:p-8 shadow-sm hover:shadow-[0_20px_60px_rgba(45,45,184,0.10)] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Accent blob */}
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br from-[#2d2db8]/8 to-[#22c55e]/6 blur-2xl group-hover:scale-150 transition-transform duration-500" />

              <div className="relative">
                <div className="mb-5 w-12 h-12 rounded-2xl bg-gradient-to-br from-[#2d2db8]/10 to-[#22c55e]/10 flex items-center justify-center text-[#2d2db8]">
                  {svcIcons[i]}
                </div>
                <h3 className="text-[#0d0d2b] font-bold text-base mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   ABOUT
══════════════════════════════════════════════════════════ */
function About({ lang }: { lang: Lang }) {
  const c = T[lang].about;
  const dir = T[lang].dir;

  return (
    <section id="s1" dir={dir} className="bg-white py-16 md:py-28 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-12">

        {/* Top: info */}
        <div className="grid gap-4 md:gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-center mb-12 md:mb-24">

          <div className="group relative overflow-hidden rounded-[2rem] md:rounded-[3rem] border border-slate-100 bg-white p-6 md:p-10 lg:p-16 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(45,45,184,0.06)] transition-all duration-500">
            {/* Background Blob */}
            <div className="absolute -top-32 -left-32 w-80 h-80 bg-gradient-to-br from-[#2d2db8]/5 to-[#22c55e]/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold pb-2 text-[#0d0d2b] leading-[1.15] mb-8 max-w-2xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#0d0d2b] to-[#2d2db8] inline-block">{c.h2}</h2>
              <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-2xl mb-6 md:mb-12 text-balance">{c.body}</p>

              <div className="grid gap-4">
                {c.points.map((p, i) => (
                  <div key={i} className="group/item relative flex items-center gap-5 rounded-2xl border border-slate-100 bg-slate-50/50 px-6 py-5 hover:bg-white hover:border-[#22c55e]/30 hover:shadow-[0_10px_30px_rgba(34,197,94,0.08)] hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-default">
                    {/* Hover vertical bar depending on RTL/LTR context */}
                    <div className={`absolute ${dir === 'rtl' ? 'right-0 origin-bottom' : 'left-0 origin-bottom'} top-0 h-full w-1.5 bg-gradient-to-b from-[#2d2db8] to-[#22c55e] transform scale-y-0 group-hover/item:scale-y-100 transition-transform duration-300`} />
                    <span className="h-2 w-2 rounded-full bg-[#2d2db8] shrink-0 group-hover/item:scale-150 group-hover/item:bg-[#22c55e] shadow-[0_0_10px_rgba(45,45,184,0.2)] transition-all duration-300" />
                    <p className="text-slate-700 text-sm font-semibold group-hover/item:text-[#0d0d2b] transition-colors">{p}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Logo block */}
          <div className="relative group mx-auto lg:ml-auto w-full max-w-[32rem]">
            <div className="relative w-full aspect-square overflow-hidden rounded-[3rem] bg-gradient-to-br from-[#f8f9ff] to-[#f0fff4] shadow-[0_20px_60px_rgba(45,45,184,0.06)] border-2 border-white group-hover:shadow-[0_30px_80px_rgba(34,197,94,0.12)] transition-all duration-700">
              {/* Decorative gradient blobs */}
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-[#2d2db8]/10 to-[#22c55e]/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-1000 pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-tr from-[#22c55e]/10 to-[#2d2db8]/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-1000 pointer-events-none" />

              <div className="relative w-full h-full p-20 transform group-hover:scale-110 transition-transform duration-700">
                <Image src="/logo.png" alt="ABS" fill className="object-contain p-14 drop-shadow-xl group-hover:drop-shadow-[0_20px_40px_rgba(45,45,184,0.3)] transition-all duration-500" />
              </div>
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#2d2db8] to-[#22c55e] px-4 sm:px-6 md:px-8 py-4 text-sm font-bold text-white shadow-[0_15px_30px_rgba(34,197,94,0.3)] transform group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(34,197,94,0.4)] transition-all duration-500 whitespace-nowrap z-20" style={{ letterSpacing: "0.05em" }}>
              Dubai, UAE — Est. 2022
            </div>
          </div>
        </div>

        {/* Founder — modern quote panel */}
        <div className="relative overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] bg-white/95 px-4 py-6 shadow-[0_20px_60px_rgba(34,86,198,0.08)] border border-slate-200/50 sm:px-6 md:px-8 md:py-8 lg:px-10 lg:py-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.08),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(140,103,255,0.08),transparent_30%)]" />

          <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] items-center">
            <div className="relative overflow-hidden rounded-[2rem] bg-slate-100 shadow-[0_20px_50px_rgba(34,86,198,0.08)]">
              <Image src="/founder.png" alt={c.founderName} width={900} height={900} className="object-cover w-full h-96 lg:h-full" />
            </div>

            <div className="rounded-[2rem] bg-white p-8 border border-slate-100 shadow-sm relative z-10 flex flex-col justify-between gap-6">

              {/* Label */}
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#22c55e]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-slate-400">{c.founderLabel}</span>
              </div>

              {/* Name */}
              <div>
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-black leading-[1.05] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#0d0d2b] to-[#2d2db8]">
                  {c.founderName}
                </p>
              </div>

              {/* Quote */}
              <div className={`relative border-[#22c55e]/40 border-2 border-t-0 border-b-0 ${dir === 'rtl' ? 'pr-5 border-l-0 border-r-2' : 'pl-5 border-r-0 border-l-2'}`}>
                <p className="text-slate-500 text-[0.95rem] font-normal leading-[1.85] tracking-wide italic">
                  {c.quote}
                </p>
              </div>

              {/* Experience */}
              <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                <span className="h-2 w-2 rounded-full bg-gradient-to-br from-[#2d2db8] to-[#22c55e]" />
                <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-slate-600">{c.exp}</span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   CONTACT
══════════════════════════════════════════════════════════ */
function Contact({ lang }: { lang: Lang }) {
  const c = T[lang].contact;
  const dir = T[lang].dir;
  const [form, setForm] = useState({ name: "", phone: "", msg: "" });
  const [sent, setSent] = useState(false);

  return (
    <section id="s2" dir={dir} className="bg-white py-12 md:py-28 relative">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-12 relative z-10">

        {/* Form Container matching global design */}
        <div className="bg-white rounded-[1.5rem] md:rounded-[2.5rem] p-5 md:p-12 lg:p-16 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-slate-100 relative overflow-hidden group">

          {/* Subtle Accent Orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#2d2db8]/5 to-transparent rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#22c55e]/5 to-transparent rounded-tr-full pointer-events-none group-hover:scale-110 transition-transform duration-700" />

          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 lg:gap-24 items-start relative z-10">

            {/* Left */}
            <div className="flex flex-col h-full justify-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-[#0d0d2b] tracking-tight mb-6 whitespace-pre-line bg-clip-text text-transparent bg-gradient-to-r from-[#2d2db8] to-[#22c55e] inline-block">{c.h2}</h2>
              <p className="text-slate-500 text-base md:text-lg leading-relaxed mb-6 md:mb-10 max-w-sm">{c.sub}</p>

              <div className="flex flex-col sm:flex-row gap-4 md:gap-10 opacity-90 pt-6 md:pt-8 border-t border-slate-100">
                <div>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3">Office</p>
                  <div className="flex items-center gap-3 text-slate-700">
                    <span className="text-[#2d2db8] opacity-70"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg></span>
                    <span className="font-semibold text-sm">{c.office}</span>
                  </div>
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3">{c.waLabel}</p>
                  <div className="space-y-3">
                    {WA.slice(0, 1).map((n, i) => (
                      <a key={i} href={`https://wa.me/${n.raw}`} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-3 text-[#22c55e] hover:text-[#1ea950] font-semibold transition-colors">
                        <span className="bg-[#22c55e]/10 p-1.5 rounded-lg"><svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg></span>
                        <span className="text-sm">{n.display}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div>
              {sent ? (
                <div className="bg-green-50 rounded-3xl p-10 flex flex-col items-center justify-center text-center h-full min-h-[300px] border border-green-100 animate-fade-in relative z-10 transition-all duration-500">
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white mb-6 shadow-lg shadow-green-200">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><path d="M20 6L9 17l-5-5" /></svg>
                  </div>
                  <p className="text-2xl font-bold text-green-800">{c.ok}</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-5">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">{c.nameLabel}</label>
                    <div className="rounded-xl bg-slate-50 border border-slate-200 p-1 focus-within:border-[#2d2db8] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#2d2db8]/20 transition-all duration-300">
                      <input required type="text" placeholder={c.name}
                        value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={`w-full bg-transparent border-none outline-none px-4 py-3 text-slate-800 placeholder-slate-400 ${lang === 'ur' ? 'text-right' : 'text-left'}`}
                      />
                    </div>
                  </div>

                  {/* Phone field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">{c.phoneLabel}</label>
                    <div className="rounded-xl bg-slate-50 border border-slate-200 p-1 focus-within:border-[#2d2db8] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#2d2db8]/20 transition-all duration-300">
                      <input required type="tel" placeholder={c.phone}
                        value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className={`w-full bg-transparent border-none outline-none px-4 py-3 text-slate-800 placeholder-slate-400 ${lang === 'ur' ? 'text-right' : 'text-left'}`}
                      />
                    </div>
                  </div>

                  {/* Message field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">{c.msgLabel}</label>
                    <div className="rounded-xl bg-slate-50 border border-slate-200 p-1 focus-within:border-[#2d2db8] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#2d2db8]/20 transition-all duration-300">
                      <textarea required rows={4} placeholder={c.msg}
                        value={form.msg} onChange={(e) => setForm({ ...form, msg: e.target.value })}
                        className={`w-full bg-transparent border-none outline-none px-4 py-3 text-slate-800 placeholder-slate-400 resize-none ${lang === 'ur' ? 'text-right' : 'text-left'}`}
                      />
                    </div>
                  </div>

                  <button type="submit"
                    className="w-full bg-gradient-to-r from-[#2d2db8] to-[#22c55e] text-white font-bold text-lg py-4 rounded-xl shadow-[0_10px_20px_rgba(45,45,184,0.2)] hover:shadow-[0_15px_30px_rgba(45,45,184,0.3)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 text-center">
                    {c.send}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   WA FLOATING BUTTON
══════════════════════════════════════════════════════════ */
function WAFloat() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-5 w-56">
          <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-4">Chat with us</p>
          {WA.map((n, i) => (
            <a key={i} href={`https://wa.me/${n.raw}`} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 py-3 border-b border-slate-50 last:border-0 text-slate-700 hover:text-[#22c55e] transition-colors">
              <span className="text-[#22c55e]">{I.phone}</span>
              <span className="text-sm font-medium">{n.display}</span>
            </a>
          ))}
        </div>
      )}
      <button onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full text-[#f0f0f0] flex items-center justify-center shadow-2xl transition-all duration-200 hover:scale-110 active:scale-95"
        style={{ background: "#22c55e", boxShadow: "0 8px 30px rgba(34,197,94,0.4)" }}>
        {I.wa}
      </button>
    </div>
  );
}

// Removed Local Footer from here since it competes with Layout.tsx
// Using the global Footer component instead

/* ══════════════════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════════════════ */
import { useLang } from "./langContext"; // ✅ USE GLOBAL CONTEXT

export default function Home() {
  const { lang } = useLang(); // using global context instead of local state

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
      `}</style>
      <div dir={T[lang].dir} className={montserrat.className}>
        <Hero lang={lang} />
        <Services lang={lang} />
        <About lang={lang} />
        <Contact lang={lang} />
        <WAFloat />
      </div>
    </>
  );
}
export { Services, About, Contact };
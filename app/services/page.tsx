"use client";

import { useLang } from "../langContext";
import Link from "next/link";

const I = {
  anchor: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><circle cx="12" cy="5" r="2" /><path d="M12 7v13M5 10h14M5 20c0-3.5 3-5 7-5s7 1.5 7 5" /></svg>,
  plane: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="M21 16v-2l-8-5V3.5A1.5 1.5 0 0011 2a1.5 1.5 0 00-1.5 1.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" /></svg>,
  truck: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>,
  doc: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4M7 8h10M7 12h6" /></svg>,
  box: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>,
  link: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" /></svg>,
  check: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M20 6L9 17l-5-5" /></svg>,
};

const iconsArray = [I.anchor, I.plane, I.truck, I.doc, I.box, I.link];

const T = {
    en: {
        dir: "ltr" as const,
        heading: "Our Services",
        subHeading: "Comprehensive logistics solutions designed to keep your business moving globally.",
        services: [
            {
                title: "Ocean Freight",
                desc: "Reliable and cost-effective sea transport solutions for global cargo.",
                features: ["FCL & LCL Shipments", "Global Port Networks", "Secure Cargo Handling"]
            },
            {
                title: "Air Logistics",
                desc: "Fastest transit times for your time-sensitive and high-value shipments.",
                features: ["Express Delivery Options", "Priority Space Allocation", "Door-to-Door Service"]
            },
            {
                title: "Land Transport",
                desc: "Extensive road freight networks connecting the entire GCC region.",
                features: ["Cross-Border Trucking", "Last-Mile Delivery", "Real-time Fleet Tracking"]
            },
            {
                title: "Customs Clearance",
                desc: "Navigating complex borders smoothly with precise documentation.",  
                features: ["Rapid Clearance", "Regulatory Compliance", "Tariff & Duties Expertise"]
            },
            {
                title: "Warehousing",
                desc: "Safe, secure, and modern storage facilities for your inventory.",
                features: ["Climate-Controlled Storage", "Live Inventory Tracking", "24/7 Monitored Security"]
            },
            {
                title: "Supply Chain Solutions",
                desc: "End-to-end management ensuring maximum efficiency and cost savings.",
                features: ["Network Optimization", "Inventory Planning", "Consultancy Services"]
            }
        ],
        why: "Why Choose Us",
        whySub: "Our fundamental strengths and commitments to your business.",
        whyPoints: [
            { t: "Uncompromised Speed", d: "Optimized routes to guarantee the fastest delivery times possible." },
            { t: "Absolute Trust", d: "A track record built on transparency and keeping our promises." },
            { t: "Global Network", d: "Strong partnerships across major global shipping hubs." },
            { t: "Tailored Solutions", d: "We mold our logistics around your specific requirements." }
        ],
        ctaTitle: "Ready to move your cargo?",
        ctaSub: "Get in touch with our experts to discuss your logistics needs today.",
        ctaBtn: "Get a Quote"
    },
    ur: {
        dir: "rtl" as const,
        heading: "ہماری خدمات",
        subHeading: "آپ کے کاروبار کو عالمی سطح پر رواں دواں رکھنے کے لیے جامع لاجسٹک حل۔",
        services: [
            {
                title: "سمندری مال برداری",
                desc: "عالمی کارگو کے لیے قابل اعتماد اور کم لاگت سمندری نقل و حمل کے حل۔",
                features: ["FCL اور LCL ترسیل", "عالمی پورٹ نیٹ ورکس", "محفوظ کارگو ہینڈلنگ"]
            },
            {
                title: "ہوائی لاجسٹکس",
                desc: "آپ کی وقت کے لحاظ سے حساس اور اعلیٰ قیمت کی ترسیل کے لیے تیز ترین ٹرانزٹ کے اوقات۔",
                features: ["ایکسپریس ڈیلیوری کے اختیارات", "ترجیحی جگہ کی تخصیص", "ڈور ٹو ڈور سروس"]
            },
            {
                title: "زمینی نقل و حمل",
                desc: "پورے جی سی سی خطے کو جوڑنے والا وسیع روڈ فریٹ نیٹ ورک۔",
                features: ["سرحد پار ٹرکنگ", "آخری میل کی ترسیل", "ریئل ٹائم فلیٹ ٹریکنگ"]
            },
            {
                title: "کسٹم کلیئرنس",
                desc: "عین دستاویزی کارروائی کے ساتھ پیچیدہ سرحدوں پر آسانی سے تشریف لے جانا۔",
                features: ["تیز رفتار کلیئرنس", "ریگولیٹری پابندی", "ٹیرف اور ڈیوٹیز کی مہارت"]
            },
            {
                title: "گودام کی سہولت",
                desc: "آپ کی انوینٹری کے لیے محفوظ اور جدید اسٹوریج کی سہولیات۔",
                features: ["موسمیاتی کنٹرول شدہ ذخیرہ", "لائیو انوینٹری ٹریکنگ", "24/7 نگرانی کی سیکیورٹی"]
            },
            {
                title: "سپلائی چین کے حل",
                desc: "اینڈ ٹو اینڈ مینجمنٹ زیادہ سے زیادہ کارکردگی اور لاگت کی بچت کو یقینی بناتی ہے۔",
                features: ["نیٹ ورک کی اصلاح", "انوینٹری کی منصوبہ بندی", "مشاورتی خدمات"]
            }
        ],
        why: "ہمیں کیوں منتخب کریں",
        whySub: "آپ کے کاروبار کے لیے ہماری بنیادی توانائیاں اور وعدے۔",
        whyPoints: [
            { t: "غیر سمجھوتہ رفتار", d: "ممکنہ تیز ترین ترسیل کے اوقات کی ضمانت دینے کے لیے بہتر روٹس۔" },
            { t: "مطلق اعتماد", d: "شفافیت اور ہمارے وعدوں کو پورا کرنے پر مبنی ایک ٹریک ریکارڈ۔" },
            { t: "عالمی نیٹ ورک", d: "بڑے عالمی شپنگ ہبز میں مضبوط شراکت داری۔" },
            { t: "اپنی مرضی کے مطابق حل", d: "ہم اپنے لاجسٹکس کو آپ کی مخصوص ضروریات کے مطابق ڈھالتے ہیں۔" }
        ],
        ctaTitle: "اپنا کارگو منتقل کرنے کے لیے تیار ہیں؟",
        ctaSub: "آج ہی اپنی لاجسٹک ضروریات پر بات کرنے کے لیے ہمارے ماہرین سے رابطہ کریں۔",
        ctaBtn: "رابطہ کریں"
    }
};

export default function ServicesPage() {
    const { lang } = useLang();
    const c = T[lang as keyof typeof T];

    return (
        <div className="pt-24 md:pt-28">
            <div dir={c.dir} className="bg-[#f8f9ff] min-h-screen pb-24">
            
            {/* Header Area */}
            <div className="pt-16 md:pt-20 pb-10 md:pb-16 bg-white border-b border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#2d2db8]/5 to-[#22c55e]/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
                
                <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-12 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0d0d2b] tracking-tight mb-6">
                        {c.heading}
                    </h1>
                    <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-medium">
                        {c.subHeading}
                    </p>
                </div>
            </div>

            <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-12 mt-10 md:mt-20 space-y-12 md:space-y-24">
                
                {/* Services Grid */}
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {c.services.map((srv, i) => (
                        <div key={i} className="group relative bg-white rounded-3xl p-5 md:p-8 border border-slate-100 shadow-sm hover:shadow-[0_20px_60px_rgba(45,45,184,0.10)] transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col h-full">
                            
                            {/* Decorative background aura on hover */}
                            <div className="absolute -top-20 -right-20 w-48 h-48 bg-gradient-to-br from-[#2d2db8]/10 to-[#22c55e]/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#f0f4ff] to-[#f0fff4] flex items-center justify-center text-[#2d2db8] mb-8 shadow-inner relative z-10">
                                {iconsArray[i]}
                            </div>

                            <h3 className="text-2xl font-bold text-[#0d0d2b] mb-4 relative z-10">
                                {srv.title}
                            </h3>
                            
                            <p className="text-slate-500 mb-8 leading-relaxed relative z-10">
                                {srv.desc}
                            </p>

                            {/* Features block */}
                            <div className="mt-auto pt-6 border-t border-slate-100 relative z-10 space-y-4">
                                {srv.features.map((feature, j) => (
                                    <div key={j} className="flex items-start gap-3">
                                        <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#22c55e]/10 text-[#22c55e] flex items-center justify-center">
                                            {I.check}
                                        </div>
                                        <span className="text-[#334155] font-medium text-sm leading-relaxed">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </section>

                {/* Why Choose Us */}
                <section className="bg-white rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-14 lg:p-16 border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)]">
                    <div className="text-center mb-8 md:mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0d0d2b] mb-4">{c.why}</h2>
                        <p className="text-slate-500 text-lg">{c.whySub}</p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                        {c.whyPoints.map((wp, i) => (
                            <div key={i} className="text-center relative">
                                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-[#2d2db8]/5 to-transparent rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                <div className="w-14 h-14 mx-auto rounded-full bg-slate-50 flex items-center justify-center text-[#2d2db8] font-black text-xl mb-6 shadow-sm border border-slate-100">
                                    0{i + 1}
                                </div>
                                <h3 className="text-lg font-bold text-[#0d0d2b] mb-3">{wp.t}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">{wp.d}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA / Call to Action */}
                <section className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#2d2db8] to-[#22c55e]" />
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0,transparent_50%)] group-hover:scale-150 transition-transform duration-1000" />
                    
                    <div className="relative z-10 px-4 md:px-6 py-10 md:py-20 flex flex-col items-center text-center">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                            {c.ctaTitle}
                        </h2>
                        <p className="text-blue-100 text-lg mb-10 max-w-xl">
                            {c.ctaSub}
                        </p>
                        <Link 
                           href="/contact" 
                           className="bg-white text-[#2d2db8] px-10 py-4 rounded-full font-bold text-lg shadow-[0_10px_30px_rgba(255,255,255,0.2)] hover:shadow-[0_15px_40px_rgba(255,255,255,0.4)] hover:-translate-y-1 transition-all duration-300"
                        >
                           {c.ctaBtn}
                        </Link>
                    </div>
                </section>

            </div>
            </div>
        </div>
    );
}
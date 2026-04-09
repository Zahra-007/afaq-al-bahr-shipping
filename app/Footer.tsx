"use client";

import Image from "next/image";
import { useLang } from "./langContext";

const I = {
  fb: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>,
  li: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.981 0 1.775-.773 1.775-1.729V1.729C24 .774 23.206 0 22.225 0z" /></svg>,
};

const WA = [
  { display: "056 826 2134", raw: "971568262134" },
  { display: "055 935 9616", raw: "971559359616" },
  { display: "055 536 5465", raw: "971555365465" },
];

function Footer() {
    const { lang } = useLang();
    const isUr = lang === "ur";
    const dir = isUr ? "rtl" : "ltr";

    const c = isUr ? {
        svcLabel: "خدمات",
        svcLinks: ["سمندری مال برداری", "ہوائی لاجسٹکس", "زمینی نقل و حمل", "کسٹم کلیئرنس", "گودام"],
        conLabel: "رابطہ",
        companyLabel: "کمپنی",
        address: "دبئی، متحدہ عرب امارات",
        reachLabel: "ہم سے رابطہ کریں",
        copy: "© 2024 آفاق البحر شپنگ ایل ایل سی",
        arabic: "AFAQ AL BAHR SHIPPING L.L.C. — محمد عارف",
    } : {
        svcLabel: "Services",
        svcLinks: ["Ocean Freight", "Air Logistics", "Land Transport", "Customs Clearance", "Warehousing"],
        conLabel: "Contact",
        companyLabel: "Company",
        address: "Dubai, United Arab Emirates",
        reachLabel: "Reach Us",
        copy: "© 2024 AFAQ AL BAHR SHIPPING L.L.C.",
        arabic: "أفاق البحر للشحن ش.ذ.م.م — Muhammad Arif",
    };

    const t = isUr ? 'hover:-translate-x-1' : 'hover:translate-x-1';

    return (
        <footer dir={dir} className="bg-white pt-24 mt-auto border-t border-slate-100 overflow-hidden relative">
            {/* Background Blob */}
            <div className="absolute top-0 right-0 w-[800px] h-[400px] bg-gradient-to-b from-[#2d2db8]/5 to-transparent rounded-bl-full blur-3xl pointer-events-none" />

            <div className="max-w-screen-xl mx-auto px-6 lg:px-12 relative z-10">
                
                <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 lg:gap-16 pb-20">
                    
                    {/* Brand */}
                    <div className="flex flex-col">
                        <div className={`relative w-40 h-20 mb-6 ${isUr ? 'ml-auto mr-0' : 'mr-auto ml-0'}`}>
                            <Image
                                src="/logo.png"
                                alt="Afaq Al Bahr"
                                fill
                                className={`object-contain ${isUr ? 'object-right' : 'object-left'}`}
                            />
                        </div>
                        <p className="text-[14px] text-slate-500 leading-relaxed mb-8 max-w-sm">
                            {isUr ? "بہترین لاجسٹکس کو سادہ، قابل اعتماد اور ذاتی ہونا چاہیے۔ ہم کارگو کو حرکت میں رکھنے کے لیے عالمی نیٹ ورک کے ساتھ علاقائی مہارت کو یکجا کرتے ہیں۔" : "Great logistics should be simple, reliable, and personal. We combine regional expertise with a global network to keep your cargo moving."}
                        </p>
                        <div className="flex items-center gap-3">
                            <a href="https://www.facebook.com/profile.php?id=61582700610000" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-gradient-to-br hover:from-[#2d2db8] hover:to-[#22c55e] hover:border-transparent hover:text-white hover:shadow-[0_10px_20px_rgba(45,45,184,0.2)] transition-all duration-300">
                                {I.fb}
                            </a>
                            <a href="https://www.linkedin.com/company/afaq-al-bahr-shipping-l-l-c/about/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-gradient-to-br hover:from-[#2d2db8] hover:to-[#22c55e] hover:border-transparent hover:text-white hover:shadow-[0_10px_20px_rgba(45,45,184,0.2)] transition-all duration-300">
                                {I.li}
                            </a>
                        </div>
                    </div>

                    {/* Column 1: Company */}
                    <div className="flex flex-col">
                        <h3 className="text-[11px] font-extrabold tracking-[0.2em] text-[#0d0d2b] uppercase mb-6">{c.companyLabel}</h3>
                        <p className="text-[14px] text-slate-500 leading-relaxed font-medium mt-1">
                            {c.address}
                        </p>
                    </div>

                    {/* Column 2: Resources/Services */}
                    <div className="flex flex-col">
                        <h3 className="text-[11px] font-extrabold tracking-[0.2em] text-[#0d0d2b] uppercase mb-6">{c.svcLabel}</h3>
                        <ul className="space-y-4">
                            {c.svcLinks.map((s, i) => (
                                <li key={i}>
                                    <a href={`/services`} className={`text-[14px] text-slate-500 font-medium hover:text-[#2d2db8] ${t} inline-block transition-all duration-300`}>{s}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Reach Us */}
                    <div className="flex flex-col">
                        <h3 className="text-[11px] font-extrabold tracking-[0.2em] text-[#0d0d2b] uppercase mb-6">{c.reachLabel}</h3>
                        <ul className="space-y-4">
                            {WA.map((n, i) => (
                                <li key={i}>
                                    <a href={`https://wa.me/${n.raw}`} target="_blank" rel="noopener noreferrer" className={`text-[14px] text-slate-500 font-medium hover:text-[#22c55e] ${t} transition-all duration-300 flex items-center gap-2`}>
                                        <span className="text-[#22c55e] opacity-80"><svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg></span>
                                        +{n.raw}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <a href="mailto:info@afaqalbahr.ae" className={`text-[14px] text-slate-500 font-medium hover:text-[#2d2db8] ${t} transition-all duration-300 flex items-center gap-2 pt-2`}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4 opacity-80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><path d="M22 6l-10 7L2 6" /></svg>
                                    info@afaqalbahr.ae
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-100 relative z-10 bg-slate-50/50">
                <div className="max-w-screen-xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row justify-between items-center py-6 gap-4">
                    <p className="text-[13px] text-slate-500 font-semibold tracking-wide">
                        {c.copy}
                    </p>
                    <p className="text-[13px] text-slate-500 font-semibold tracking-wide flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#2d2db8] to-[#22c55e]" />
                        {c.arabic}
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
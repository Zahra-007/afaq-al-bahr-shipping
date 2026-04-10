"use client";

import { useLang } from "../langContext";
import { useState } from "react";

const I = {
    mail: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>,
    phone: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.18 2 2 0 012.18 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>,
    pin: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>,
    wa: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>,
    check: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12"><path d="M20 6L9 17l-5-5" /></svg>,
};

const WA_NUM = "971568262134";

const T = {
    en: {
        dir: "ltr" as const,
        heading: "Contact Us",
        intro: "Connect with our logistics experts. We're ready to optimize your supply chain and move your cargo globally.",
        cards: [
            { id: "office", icon: I.pin, title: "Our Office", lines: ["Dubai", "United Arab Emirates"], type: "text" },
            { id: "phone", icon: I.phone, title: "Call Us", lines: ["+971 56 826 2134", "+971 55 935 9616", "+971 55 536 5465"], type: "phone" },
            { id: "mail", icon: I.mail, title: "Email Us", lines: ["info@afaqalbahr.ae"], type: "mail" },
            { id: "wa", icon: I.wa, title: "WhatsApp", lines: ["Chat instantly with our team"], type: "wa" }
        ],
        formLabel: "Send a Message",
        fName: "Full Name",
        fPhone: "Phone Number",
        fMsg: "Tell us about your cargo (origin, destination, weight...)",
        fBtn: "Send Message",
        fSuccess: "Message sent! We'll be in touch shortly.",
        ctaTitle: "Need immediate assistance?",
        ctaSub: "Skip the form and chat with our logistics team on WhatsApp right now.",
        ctaBtn: "Chat on WhatsApp"
    },
    ur: {
        dir: "rtl" as const,
        heading: "رابطہ کریں",
        intro: "ہمارے لاجسٹک ماہرین سے جڑیں۔ ہم آپ کی سپلائی چین کو بہتر بنانے اور آپ کے کارگو کو عالمی سطح پر منتقل کرنے کے لیے تیار ہیں۔",
        cards: [
            { id: "office", icon: I.pin, title: "ہمارا دفتر", lines: ["دبئی", "متحدہ عرب امارات"], type: "text" },
            { id: "phone", icon: I.phone, title: "ہمیں کال کریں", lines: ["+971 56 826 2134", "+971 55 935 9616", "+971 55 536 5465"], type: "phone" },
            { id: "mail", icon: I.mail, title: "ہمیں ای میل کریں", lines: ["info@afaqalbahr.ae"], type: "mail" },
            { id: "wa", icon: I.wa, title: "واٹس ایپ", lines: ["ہماری ٹیم کے ساتھ فوری چیٹ کریں"], type: "wa" }
        ],
        formLabel: "پیغام بھیجیں",
        fName: "پورا نام",
        fPhone: "فون نمبر",
        fMsg: "اپنے کارگو کے بارے میں بتائیں (اصل، منزل، وزن...)",
        fBtn: "پیغام بھیجیں",
        fSuccess: "پیغام بھیج دیا گیا! ہم جلد ہی رابطہ کریں گے۔",
        ctaTitle: "فوری مدد کی ضرورت ہے؟",
        ctaSub: "فارم کو چھوڑیں اور ابھی واٹس ایپ پر ہماری لاجسٹک ٹیم کے ساتھ چیٹ کریں۔",
        ctaBtn: "واٹس ایپ پر چیٹ کریں"
    }
};

export default function ContactPage() {
    const { lang } = useLang();
    const c = T[lang as keyof typeof T];
    const isUr = lang === "ur";

    const [form, setForm] = useState({ name: "", phone: "", msg: "" });
    const [sent, setSent] = useState(false);

    return (
        <div dir={c.dir} className="bg-[#f8f9ff] min-h-screen pb-24">

            {/* Header Area */}
            <div className="pt-16 md:pt-20 pb-10 md:pb-20 bg-white border-b border-slate-100 relative overflow-hidden">
                {/* Decorative blob */}
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#2d2db8]/5 to-[#22c55e]/10 blur-[80px] rounded-full pointer-events-none" />

                <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-12 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0d0d2b] tracking-tight mb-6">
                        {c.heading}
                    </h1>
                    <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                        {c.intro}
                    </p>
                </div>
            </div>

            <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-12 mt-4 md:-mt-10 relative z-20 space-y-10 md:space-y-24">

                {/* Info Cards Grid */}
                <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {c.cards.map((card, i) => (
                        <div key={i} className="bg-white rounded-3xl p-5 md:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-[0_20px_50px_rgba(45,45,184,0.08)] transition-all duration-300 hover:-translate-y-1 group flex flex-col items-center text-center">

                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#f0f4ff] to-[#f0fff4] flex items-center justify-center text-[#2d2db8] mb-6 group-hover:scale-110 transition-transform duration-300">
                                {card.icon}
                            </div>

                            <h3 className="text-base font-bold text-[#0d0d2b] mb-4 uppercase tracking-widest">{card.title}</h3>

                            <div className="space-y-1 mt-auto">
                                {card.lines.map((line, j) => {
                                    if (card.type === "phone") {
                                        return <a key={j} href={`tel:${line.replace(/\s+/g, '')}`} className="block text-slate-500 hover:text-[#2d2db8] transition-colors">{line}</a>
                                    }
                                    if (card.type === "mail") {
                                        return <a key={j} href={`mailto:${line}`} className="block text-[#2d2db8] font-medium hover:underline">{line}</a>
                                    }
                                    if (card.type === "wa") {
                                        return <a key={j} href={`https://wa.me/${WA_NUM}`} target="_blank" rel="noopener noreferrer" className="block text-[#22c55e] font-medium hover:underline">{line}</a>
                                    }
                                    return <p key={j} className="text-slate-500">{line}</p>
                                })}
                            </div>

                        </div>
                    ))}
                </section>

                {/* Form & CTA Split Section */}
                <section className="grid lg:grid-cols-2 gap-4 md:gap-10 items-stretch">

                    {/* Form Container */}
                    <div className="bg-white rounded-[1.5rem] md:rounded-[2.5rem] p-5 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-slate-100 relative overflow-hidden">

                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#2d2db8]/5 to-transparent rounded-bl-[100px] pointer-events-none" />

                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0d0d2b] mb-8 relative z-10">{c.formLabel}</h2>

                        {sent ? (
                            <div className="bg-green-50 rounded-3xl p-10 flex flex-col items-center justify-center text-center h-full min-h-[300px] border border-green-100 animate-fade-in relative z-10">
                                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white mb-6 shadow-lg shadow-green-200">
                                    {I.check}
                                </div>
                                <p className="text-2xl font-bold text-green-800">{c.fSuccess}</p>
                            </div>
                        ) : (
                            <form
                                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                                className="space-y-6 relative z-10"
                            >
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">{c.fName}</label>
                                    <div className="rounded-xl bg-slate-50 border border-slate-200 p-1 focus-within:border-[#2d2db8] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#2d2db8]/20 transition-all duration-300">
                                        <input required type="text"
                                            value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                                            className={`w-full bg-transparent border-none outline-none px-4 py-3 text-slate-800 ${isUr ? 'text-right' : 'text-left'}`}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">{c.fPhone}</label>
                                    <div className="rounded-xl bg-slate-50 border border-slate-200 p-1 focus-within:border-[#2d2db8] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#2d2db8]/20 transition-all duration-300">
                                        <input required type="tel"
                                            value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                                            className={`w-full bg-transparent border-none outline-none px-4 py-3 text-slate-800 ${isUr ? 'text-right' : 'text-left'}`}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Message</label>
                                    <div className="rounded-xl bg-slate-50 border border-slate-200 p-1 focus-within:border-[#2d2db8] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#2d2db8]/20 transition-all duration-300">
                                        <textarea required rows={4} placeholder={c.fMsg}
                                            value={form.msg} onChange={e => setForm({ ...form, msg: e.target.value })}
                                            className={`w-full bg-transparent border-none outline-none px-4 py-3 text-slate-800 resize-none ${isUr ? 'text-right placeholder:text-right' : 'text-left placeholder:text-left'}`}
                                        />
                                    </div>
                                </div>

                                <button type="submit"
                                    className="w-full bg-gradient-to-r from-[#2d2db8] to-[#22c55e] text-white font-bold text-lg py-4 rounded-xl shadow-[0_10px_20px_rgba(45,45,184,0.2)] hover:shadow-[0_15px_30px_rgba(45,45,184,0.3)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200"
                                >
                                    {c.fBtn}
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Quick WhatsApp CTA Card */}
                    <div className="bg-gradient-to-br from-[#101036] to-[#2d2db8] rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-12 relative overflow-hidden flex flex-col justify-center text-center lg:text-left group shadow-2xl">
                        {/* Abstract background rings */}
                        <div className="absolute top-0 right-0 w-96 h-96 border-[40px] border-white/5 rounded-full -translate-y-1/2 translate-x-1/3 group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 border-[30px] border-[#22c55e]/10 rounded-full translate-y-1/3 -translate-x-1/4 group-hover:scale-110 transition-transform duration-700 pointer-events-none" />

                        <div className="relative z-10 flex flex-col items-center lg:items-start h-full justify-center">
                            <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-[#22c55e] mb-8 shadow-inner border border-white/20">
                                {I.wa}
                            </div>

                            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
                                {c.ctaTitle}
                            </h2>
                            <p className="text-blue-100 text-lg leading-relaxed mb-10 max-w-sm">
                                {c.ctaSub}
                            </p>

                            <a href={`https://wa.me/${WA_NUM}`} target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-[#22c55e] hover:bg-[#1ea950] text-white px-4 md:px-8 py-4 rounded-full font-bold text-lg shadow-[0_10px_30px_rgba(34,197,94,0.3)] hover:-translate-y-1 transition-all duration-300"
                            >
                                <span>{c.ctaBtn}</span>
                                <svg className={`w-5 h-5 ${isUr ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            </a>
                        </div>
                    </div>

                </section>

            </div>
        </div>
    );
}
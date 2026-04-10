"use client";

import { useLang } from "../langContext";

const T = {
  en: {
    dir: "ltr" as const,
    heading: "About AFAQ AL BAHR",
    headingSub: "Connecting Markets. Delivering Promises.",
    who: "Who We Are",
    whoText: "AFAQ AL BAHR SHIPPING L.L.C is a premier logistics and shipping company based in Dubai, United Arab Emirates. We specialize in providing end-to-end supply chain solutions, seamless ocean and air freight, and reliable cross-border transport. Founded with a commitment to excellence, we connect your business to global markets with unparalleled precision and unwavering trust.",
    diff: "What Makes Us Different",
    diffPts: [
      { t: "Global Network, Local Expertise", d: "Deep understanding of the GCC market combined with worldwide connections." },
      { t: "End-to-End Visibility", d: "Transparent tracking and constant updates from origin to destination." },
      { t: "Dedicated Account Management", d: "A single point of contact who truly understands your business needs." },
      { t: "Tailored Logistics Strategies", d: "Custom solutions rather than one-size-fits-all approaches." }
    ],
    mv: {
      m: "Our Mission",
      mDesc: "To simplify global trade for businesses in the Middle East and beyond by providing reliable, efficient, and 100% transparent logistics solutions.",
      v: "Our Vision",
      vDesc: "To be the region's most trusted partner in supply chain excellence, setting extraordinary new standards for speed, security, and sustainability."
    },
    founder: "Founder's Message",
    quote: "Our foundation is built on trust and absolute reliability. When you entrust us with your cargo, we treat your business as our own. We don't just move freight; we propel your success.",
    name: "Muhammad Arif",
    role: "Founder & CEO",
    closing: "Your Cargo, Our Commitment. Navigating Global Trade Together."
  },
  ur: {
    dir: "rtl" as const,
    heading: "آفاق البحر کے بارے میں",
    headingSub: "مارکیٹوں کو جوڑنا۔ وعدوں کو پورا کرنا۔",
    who: "ہم کون ہیں",
    whoText: "آفاق البحر شپنگ ایل ایل سی دبئی، متحدہ عرب امارات میں واقع ایک ممتاز لاجسٹکس اور شپنگ کمپنی ہے۔ ہم اینڈ ٹو اینڈ سپلائی چین حل، بغیر کسی رکاوٹ کے سمندری اور ہوائی مال برداری، اور قابل اعتماد سرحد پار نقل و حمل فراہم کرنے میں مہارت رکھتے ہیں۔ ایکسیلنس کے عزم کے ساتھ قائم، ہم آپ کے کاروبار کو بے مثال درستگی اور غیر متزلزل اعتماد کے ساتھ عالمی منڈیوں سے جوڑتے ہیں۔",
    diff: "ہمیں کیا چیز مختلف بناتی ہے",
    diffPts: [
      { t: "عالمی نیٹ ورک، مقامی مہارت", d: "دنیا بھر کے رابطوں کے ساتھ مل کر جی سی سی مارکیٹ کی گہری سمجھ۔" },
      { t: "مکمل وژیبلٹی", d: "آغاز سے منزل تک شفاف ٹریکنگ اور مسلسل اپ ڈیٹس۔" },
      { t: "مخصوص اکاؤنٹ مینجمنٹ", d: "ایک واحد رابطہ جو آپ کی کاروباری ضروریات کو صحیح معنوں میں سمجھتا ہے۔" },
      { t: "اپنی مرضی کے مطابق حکمت عملی", d: "ایک سائز کے تمام نقطہ نظر کے بجائے اپنی مرضی کے حل۔" }
    ],
    mv: {
      m: "ہمارا مشن",
      mDesc: "مڈل ایسٹ اور اس سے باہر کے کاروباروں کے لیے قابل اعتماد، موثر اور 100% شفاف لاجسٹکس سلوشنز فراہم کر کے عالمی تجارت کو آسان بنانا۔",
      v: "ہمارا وژن",
      vDesc: "تیزی، سیکورٹی، اور پائیداری کے لیے غیر معمولی نئے معیارات قائم کرتے ہوئے، سپلائی چین کی فضیلت میں خطے کا سب سے قابل اعتماد پارٹنر بننا۔"
    },
    founder: "بانی کا پیغام",
    quote: "ہماری بنیاد اعتماد اور مطلق اعتبار پر رکھی گئی ہے۔ جب آپ ہم پر اپنے کارگو کے ساتھ بھروسہ کرتے ہیں تو ہم آپ کے کاروبار کو اپنا سمجھتے ہیں۔ ہم صرف مال نہیں منتقل کرتے؛ ہم آپ کی کامیابی کو آگے بڑھاتے ہیں۔",
    name: "محمد عارف",
    role: "بانی اور سی ای او",
    closing: "آپ کا کارگو، ہمارا عزم۔ عالمی تجارت میں مل کر آگے بڑھنا۔"
  }
};

export default function AboutPage() {
    const { lang } = useLang();
    const c = T[lang as keyof typeof T];

    return (
        <div className="pt-24 md:pt-28">
            <div dir={c.dir} className="bg-[#f8f9ff] min-h-screen pb-24">
            
            {/* Header Area */}
            <div className="pt-16 md:pt-20 pb-10 md:pb-16 bg-white border-b border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[300px] bg-gradient-to-r from-[#2d2db8]/5 to-[#22c55e]/10 blur-[80px] rounded-full pointer-events-none" />
                
                <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-12 relative z-10 text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0d0d2b] tracking-tight mb-6">
                        {c.heading}
                    </h1>
                    <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-medium">
                        {c.headingSub}
                    </p>
                </div>
            </div>

            <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-12 mt-8 md:mt-16 space-y-10 md:space-y-20">
                
                {/* Who We Are */}
                <section className="bg-white rounded-[1.5rem] md:rounded-[2.5rem] p-5 md:p-12 lg:p-16 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-slate-100 relative overflow-hidden group">
                    <div className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br from-[#2d2db8]/10 to-[#22c55e]/5 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700" />
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#0d0d2b] mb-6 inline-block relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-[#2d2db8] to-[#22c55e]">
                        {c.who}
                    </h2>
                    <p className="text-slate-600 text-base md:text-lg leading-relaxed text-balance relative z-10">
                        {c.whoText}
                    </p>
                </section>

                {/* Mission and Vision Grid */}
                <section className="grid md:grid-cols-2 gap-8">
                    {/* Mission */}
                    <div className="group relative bg-white rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-10 lg:p-12 border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(45,45,184,0.06)] transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col h-full">
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br from-[#2d2db8]/10 to-[#22c55e]/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#f0f4ff] to-[#f0fff4] flex items-center justify-center text-[#2d2db8] mb-8 shadow-inner relative z-10 group-hover:scale-110 transition-transform duration-300">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
                        </div>
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0d0d2b] mb-4 relative z-10">{c.mv.m}</h3>
                        <p className="text-slate-500 leading-relaxed text-lg relative z-10">{c.mv.mDesc}</p>
                    </div>

                    {/* Vision */}
                    <div className="group relative bg-white rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-10 lg:p-12 border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(34,197,94,0.06)] transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col h-full">
                        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-gradient-to-tr from-[#22c55e]/10 to-[#2d2db8]/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#f0fff4] to-[#f0f4ff] flex items-center justify-center text-[#22c55e] mb-8 shadow-inner relative z-10 group-hover:scale-110 transition-transform duration-300">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="M2 12h3M19 12h3M12 2v3M12 19v3M5 5l2 2M17 17l2 2M19 5l-2 2M5 19l2-2"/><circle cx="12" cy="12" r="4"/></svg>
                        </div>
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0d0d2b] mb-4 relative z-10">{c.mv.v}</h3>
                        <p className="text-slate-500 leading-relaxed text-lg relative z-10">{c.mv.vDesc}</p>
                    </div>
                </section>

                {/* What Makes Us Different */}
                <section>
                    <div className="text-center mb-6 md:mb-12">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0d0d2b]">{c.diff}</h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {c.diffPts.map((pt, i) => (
                            <div key={i} className="bg-white rounded-3xl p-5 md:p-8 shadow-sm border border-slate-100 hover:shadow-lg transition-shadow duration-300 relative overflow-hidden group">
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300
                                  ${i % 2 === 0 ? 'bg-[#2d2db8]/10 text-[#2d2db8]' : 'bg-[#22c55e]/10 text-[#22c55e]'}`}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M20 6L9 17l-5-5" /></svg>
                                </div>
                                <h3 className="text-lg font-bold text-[#0d0d2b] mb-3">{pt.t}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{pt.d}</p>
                                
                                <div className={`absolute bottom-0 left-0 w-full h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 
                                  ${i % 2 === 0 ? 'bg-[#2d2db8] origin-left' : 'bg-[#22c55e] origin-right'}`} />
                            </div>
                        ))}
                    </div>
                </section>

                {/* Founder Message */}
                <section className="bg-gradient-to-r from-[#d1efe1]/40 via-[#dde5f7]/40 to-[#e3dcf8]/40 rounded-[1.5rem] md:rounded-[2.5rem] p-5 md:p-14 border border-white relative overflow-hidden shadow-sm">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.08),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(45,45,184,0.05),transparent_40%)]" />
                    <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
                        <div className="mb-6 opacity-20">
                            <svg className="w-16 h-16 text-[#2d2db8]" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                        </div>
                        <p className="text-xl md:text-2xl font-medium text-slate-700 leading-relaxed mb-8 italic text-balance">
                            "{c.quote}"
                        </p>
                        <div className="flex flex-col items-center">
                            <h4 className="text-lg font-bold text-[#0d0d2b]">{c.name}</h4>
                            <span className="text-[11px] font-bold tracking-widest text-slate-400 uppercase mt-1">{c.role}</span>
                        </div>
                    </div>
                </section>

                {/* Strong Closing Line */}
                <section className="text-center pt-8">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#2d2db8] to-[#22c55e] inline-block">
                        {c.closing}
                    </h2>
                </section>

            </div>
            </div>
        </div>
    );
}
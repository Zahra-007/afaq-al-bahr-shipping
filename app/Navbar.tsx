"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLang } from "./langContext"; // ✅ IMPORTANT

function Navbar() {
    const [open, setOpen] = useState(false);
    const { lang, setLang } = useLang(); // ✅ GLOBAL LANG

    const navLinks =
        lang === "en"
            ? ["Services", "About", "Contact"]
            : ["خدمات", "ہمارے بارے میں", "رابطہ"];

    const switchLang = lang === "en" ? "اردو" : "English";
    const cta = lang === "en" ? "Get Quote" : "قیمت جانیں";

    return (
        <header dir={lang === "ur" ? "rtl" : "ltr"} className="fixed inset-x-0 top-0 z-50">
            <div className="mx-auto max-w-screen-xl px-6 lg:px-12 mt-5">
                <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.16)]">
                    <div className="absolute inset-0 bg-white/20 backdrop-blur-xl border border-white/30" />

                    <div className="relative flex items-center justify-between h-20 px-4 md:px-8">

                        {/* LEFT */}
                        <div className="flex items-center gap-8">
                            <Link href="/" className="flex-shrink-0">
                                <div className="relative w-14 h-14">
                                    <Image src="/logo.png" alt="Logo" fill className="object-contain" />
                                </div>
                            </Link>

                            {/* DESKTOP NAV */}
                            <div className="hidden md:flex items-center gap-8">
                                {navLinks.map((n, i) => (
                                    <Link
                                        key={i}
                                        href={["/services", "/about", "/contact"][i]}
                                        className="tracking-wide font-medium text-slate-950 hover:text-[#2d2db8] transition-colors duration-200 text-sm"
                                    >
                                        {n}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT */}
                        <div className="hidden md:flex items-center gap-6">

                            {/* LANGUAGE BUTTON */}
                            <button
                                onClick={() => setLang(lang === "en" ? "ur" : "en")}
                                className="text-slate-950 hover:text-[#2d2db8] text-sm font-medium"
                            >
                                {switchLang}
                            </button>

                            {/* CTA */}
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2d2db8] to-[#22c55e] text-white text-sm font-bold px-6 py-2.5 rounded-full"
                            >
                                {cta}
                            </Link>

                        </div>

                        {/* MOBILE */}
                        <div className="md:hidden flex items-center gap-3">

                            {/* LANG MOBILE */}
                            <button onClick={() => setLang(lang === "en" ? "ur" : "en")}>
                                {switchLang}
                            </button>

                            {/* MENU */}
                            <button
                                onClick={() => setOpen(!open)}
                                className="text-slate-700 text-xl"
                            >
                                {open ? "✕" : "☰"}
                            </button>

                        </div>

                    </div>
                </div>
            </div>

            {/* MOBILE MENU */}
            {open && (
                <div
                    dir={lang === "ur" ? "rtl" : "ltr"}
                    className="fixed inset-0 top-24 bg-white z-40 md:hidden"
                >
                    <div className="px-6 py-6 space-y-4">

                        {navLinks.map((n, i) => (
                            <Link
                                key={i}
                                href={["/services", "/about", "/contact"][i]}
                                onClick={() => setOpen(false)}
                                className="block text-base py-3 font-medium text-gray-700"
                            >
                                {n}
                            </Link>
                        ))}

                        <Link
                            href="/contact"
                            className="block bg-gradient-to-r from-[#2d2db8] to-[#22c55e] text-white px-6 py-3 text-center rounded-full font-bold"
                        >
                            {cta}
                        </Link>

                    </div>
                </div>
            )}
        </header>
    );
}

export default Navbar;
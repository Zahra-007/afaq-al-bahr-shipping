"use client";

import { createContext, useContext, useState } from "react";

type Lang = "en" | "ur";

const LangContext = createContext<any>(null);

export function LangProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLang] = useState<Lang>("en");

    return (
        <LangContext.Provider value={{ lang, setLang }}>
            {children}
        </LangContext.Provider>
    );
}

export function useLang() {
    return useContext(LangContext);
}
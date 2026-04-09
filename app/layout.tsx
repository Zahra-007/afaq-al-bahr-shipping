import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

import Navbar from "./Navbar";
import Footer from "./Footer";
import { LangProvider } from "./langContext"; // ✅ ADD THIS

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Afaq Al Bahr Shipping",
  description: "Logistics company",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="flex flex-col min-h-screen bg-white">

        {/* Global Context for Language */}
        <LangProvider>

          {/* Persistent Navbar */}
          <Navbar />

          {/* Page Content */}
          <main className="flex-1">
            {children}
          </main>

          {/* Persistent Footer */}
          <Footer />

        </LangProvider>

      </body>
    </html>
  );
}
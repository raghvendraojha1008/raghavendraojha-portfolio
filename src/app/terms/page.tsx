import React from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Rangoli Arrows: Puzzle Game",
  description: "Terms of Service and End-User License Agreement for Rangoli Arrows: Puzzle Game (com.vashudev.rangoliarrows)",
};

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen pt-28 pb-16 px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-10 shadow-sm">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6 mb-8">
            <span className="inline-block px-3 py-1 bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 rounded-full text-xs font-semibold mb-3">
              Application ID: com.vashudev.rangoliarrows
            </span>
            <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Terms of Service
            </h1>
            <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm">
              Rangoli Arrows: Puzzle Game • Official End-User License Agreement
            </p>
          </div>

          <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/40 rounded-xl p-4 mb-8 text-sm text-slate-700 dark:text-slate-300 space-y-1">
            <p><strong>Effective Date:</strong> November 9, 2026</p>
            <p><strong>Developer / Trader:</strong> Raghavendra Ojha (Operating as Vashudev)</p>
            <p><strong>Contact Email:</strong> support@vashudevgames.com | raghavendraojha1008@gmail.com</p>
            <p><strong>Governing Law:</strong> India (Consumer provisions applicable to EEA/UK users under EU Directive 2011/83/EU)</p>
          </div>

          <div className="space-y-6 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
            <section>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                1. Acceptance of Terms
              </h2>
              <p>
                By downloading, installing, accessing, or playing <strong>Rangoli Arrows: Puzzle Game</strong> (&quot;Application&quot;, &quot;Game&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), 
                you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these Terms, please do not use the Application.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                2. Trader Status & Developer Information
              </h2>
              <p>
                In compliance with European Economic Area (EEA) and United Kingdom (UK) consumer protection laws (including the EU Digital Services Act and Directive 2011/83/EU), 
                the developer has declared trader status on Google Play.
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li><strong>Developer:</strong> Raghavendra Ojha / Vashudev</li>
                <li><strong>Official Support:</strong> support@vashudevgames.com</li>
                <li><strong>Website:</strong> https://www.raghavendraojha.dev</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                3. License & Acceptable Use
              </h2>
              <p>
                We grant you a personal, non-exclusive, non-transferable, revocable, limited license to download and play Rangoli Arrows 
                solely for your personal, non-commercial entertainment. You agree not to reverse engineer, decompile, or extract procedural art assets 
                or source code without prior written permission.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                4. Virtual Currency & In-App Items
              </h2>
              <p>
                The game features virtual currency (&quot;Coins&quot;) and power-ups (hints, auto-clears, board themes). 
                Coins and unlocked artwork have no real-world monetary value and cannot be exchanged for cash. 
                Any optional in-app purchases are securely billed via Google Play In-App Billing subject to Google Play refund terms.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                5. In-Game Advertisements (Google AdMob)
              </h2>
              <p>
                Rangoli Arrows displays non-intrusive banner, interstitial, and voluntary rewarded video ads via Google AdMob. 
                In compliance with GDPR and US privacy laws, user consent settings may be updated at any time in the in-app Settings menu.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                6. Intellectual Property & Disclaimers
              </h2>
              <p>
                All procedural mandala generation logic, graphics, animations, code, and logos are the exclusive property of the developer. 
                The application is provided &quot;AS IS&quot; without warranties of any kind.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                7. Contact & Support
              </h2>
              <p>
                For consumer rights requests, inquiries, or support regarding Rangoli Arrows, contact: 
                <a href="mailto:support@vashudevgames.com" className="text-amber-600 dark:text-amber-400 font-semibold ml-1">
                  support@vashudevgames.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

import React from "react";
import Countdown from "./Countdown";
import WaitlistForm from "./WaitlistForm";
import LumaCardTeaser from "./LumaCardTeaser";

export const ComingSoonPage: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#060d19] text-white font-primary overflow-x-hidden selection:bg-[#00b4d8] selection:text-white flex flex-col justify-between">
      {/* Dynamic Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Top cyan atmospheric spotlight */}
        <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[700px] md:w-[1100px] h-[550px] bg-gradient-to-b from-[#00b4d8]/20 via-[#0077b6]/10 to-transparent blur-[120px] rounded-full" />

        {/* Ambient bottom-left orb */}
        <div className="absolute -bottom-[10%] -left-[10%] w-[500px] h-[500px] bg-[#0077b6]/15 blur-[140px] rounded-full" />

        {/* Ambient bottom-right orb */}
        <div className="absolute top-[40%] -right-[15%] w-[600px] h-[600px] bg-[#90e0ef]/10 blur-[150px] rounded-full" />

        {/* Tech Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
            backgroundSize: "36px 36px",
            maskImage: "radial-gradient(ellipse at 50% 40%, black 40%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse at 50% 40%, black 40%, transparent 80%)",
          }}
        />
      </div>

      {/* Top Header Bar */}
      <header className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-6 pb-4 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <img
            src="/images/luma-pay-wordmark.png"
            alt="Luma Pay"
            className="h-8 sm:h-10 w-auto object-contain transition-transform group-hover:scale-105 duration-200"
          />
        </a>

        {/* Status Pill */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#112240]/80 border border-white/10 backdrop-blur-md text-xs font-medium text-slate-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00b4d8] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00b4d8]" />
            </span>
            <span>Private Beta In Progress</span>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-2">
            <a
              href="https://t.me/"
              target="_blank"
              rel="noreferrer"
              aria-label="Telegram"
              className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-[#00b4d8]/50 hover:bg-[#00b4d8]/10 flex items-center justify-center text-slate-300 hover:text-[#00b4d8] transition-all"
            >
              <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.52 2.77-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
              </svg>
            </a>
            <a
              href="https://x.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="X (Twitter)"
              className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-[#00b4d8]/50 hover:bg-[#00b4d8]/10 flex items-center justify-center text-slate-300 hover:text-[#00b4d8] transition-all"
            >
              <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* Main Hero & Content Section */}
      <main className="relative z-10 flex-1 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-8 md:py-12 max-w-6xl mx-auto w-full text-center">
        {/* Announcement Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#00b4d8]/15 via-white/5 to-[#0077b6]/15 border border-[#00b4d8]/30 backdrop-blur-xl mb-6 shadow-sm">
          <span className="text-sm">✨</span>
          <span className="text-xs sm:text-sm font-semibold tracking-wide bg-gradient-to-r from-white via-cyan-100 to-[#90e0ef] bg-clip-text text-transparent">
            THE EVOLUTION OF BORDERLESS FINANCE
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-dmsans max-w-4xl mx-auto leading-[1.1] mb-6">
          Banking Without Limits.{" "}
          <span className="block mt-1 bg-gradient-to-r from-[#00b4d8] via-[#90e0ef] to-white bg-clip-text text-transparent">
            Coming Very Soon.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-8">
          Luma Pay is building the future of money. Seamlessly hold, convert, and spend 40+ fiat currencies and major crypto assets worldwide with zero hidden fees and titanium debit cards.
        </p>

        {/* Live Countdown Timer */}
        <Countdown />

        {/* Early Access / Waitlist Form */}
        <div className="w-full mt-2 mb-12">
          <WaitlistForm />
        </div>

        {/* Interactive 3D Card Showcase & Sneak Peek */}
        <div className="w-full mt-4 pt-6 border-t border-white/10">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-[0.2em] text-[#00b4d8] font-bold">
              Exclusive Sneak Peek
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              One Unified Account. Infinite Possibilities.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
            {/* 3D Holographic Card */}
            <div className="lg:col-span-5 flex justify-center">
              <LumaCardTeaser />
            </div>

            {/* Feature Highlights Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              {/* Feature 1 */}
              <div className="p-5 rounded-2xl bg-[#112240]/60 border border-white/10 hover:border-[#00b4d8]/40 backdrop-blur-md transition-all hover:bg-[#112240]/80 group">
                <div className="w-10 h-10 rounded-xl bg-[#00b4d8]/15 border border-[#00b4d8]/30 flex items-center justify-center text-[#00b4d8] mb-3 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-white mb-1 group-hover:text-[#90e0ef] transition-colors">
                  Global Debit Cards
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Spend fiat and crypto seamlessly at over 80 million merchants worldwide with zero foreign transaction fees.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="p-5 rounded-2xl bg-[#112240]/60 border border-white/10 hover:border-[#00b4d8]/40 backdrop-blur-md transition-all hover:bg-[#112240]/80 group">
                <div className="w-10 h-10 rounded-xl bg-[#00b4d8]/15 border border-[#00b4d8]/30 flex items-center justify-center text-[#00b4d8] mb-3 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-white mb-1 group-hover:text-[#90e0ef] transition-colors">
                  Instant Conversions
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Sub-second swaps between Bitcoin, Ethereum, stablecoins, and major world currencies at institutional interbank rates.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="p-5 rounded-2xl bg-[#112240]/60 border border-white/10 hover:border-[#00b4d8]/40 backdrop-blur-md transition-all hover:bg-[#112240]/80 group">
                <div className="w-10 h-10 rounded-xl bg-[#00b4d8]/15 border border-[#00b4d8]/30 flex items-center justify-center text-[#00b4d8] mb-3 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-white mb-1 group-hover:text-[#90e0ef] transition-colors">
                  Institutional Security
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Regulated custodian protection, Multi-Party Computation (MPC), and biometric hardware-grade wallet security.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="p-5 rounded-2xl bg-[#112240]/60 border border-white/10 hover:border-[#00b4d8]/40 backdrop-blur-md transition-all hover:bg-[#112240]/80 group">
                <div className="w-10 h-10 rounded-xl bg-[#00b4d8]/15 border border-[#00b4d8]/30 flex items-center justify-center text-[#00b4d8] mb-3 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-white mb-1 group-hover:text-[#90e0ef] transition-colors">
                  Local IBANs &amp; Routing
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Dedicated local bank details in USD, EUR, and GBP for instant cross-border wire transfers and payroll.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-20 w-full border-t border-white/10 bg-[#060d19]/90 backdrop-blur-md py-6 px-4 sm:px-6 lg:px-10 mt-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <img
              src="/images/luma-pay-wordmark.png"
              alt="Luma Pay"
              className="h-6 w-auto object-contain opacity-70"
            />
            <span>&copy; {new Date().getFullYear()} Luma Pay. All rights reserved.</span>
          </div>

          <p className="text-center md:text-right max-w-md text-[11px] text-slate-500">
            Luma Pay is a financial technology company. Banking and card issuance services are provided in partnership with licensed financial institutions.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ComingSoonPage;

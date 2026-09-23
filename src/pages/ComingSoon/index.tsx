import React from "react";


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
        {/* <Countdown /> */}

        {/* Early Access / Waitlist Form */}
        {/* <div className="w-full mt-2 mb-12">
          <WaitlistForm />
        </div> */}


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

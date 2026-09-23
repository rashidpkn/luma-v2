import React from "react";

export const AppCtaBanner: React.FC = () => {
  return (
    <section className="font-primary relative overflow-hidden">
      {/* Responsive background */}
      <div
        className="w-full bg-cover bg-center bg-no-repeat min-h-[500px] md:min-h-[600px] flex items-center"
        style={{
          backgroundImage: "url('/images/banner/cta-banner.webp')",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 w-full py-16 md:py-24">
          <div className="max-w-xl lg:max-w-2xl text-left">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter text-white leading-tight">
              Get the App. <br />
              Live on Your Terms.
            </h2>
            <p className="text-lg md:text-xl font-medium tracking-tight text-gray-200 mt-4 max-w-lg leading-relaxed">
              One app. Total control. Tap to send, spend, swap, and stack your money — your way, no limits.
            </p>
            <div className="mt-8">
              <a
                target="_blank"
                rel="noreferrer"
                href="#get-started"
                className="btn-glow-shadow leftglow border border-main-green inline-flex items-center px-8 py-3.5 text-base sm:text-lg text-center tracking-tighter text-[#0f1d16] font-bold bg-main-green rounded-full cursor-pointer transition-transform active:scale-95"
              >
                Download the App
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppCtaBanner;

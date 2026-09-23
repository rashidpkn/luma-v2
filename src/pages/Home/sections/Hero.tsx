import React from "react";
import { heroBadges } from "../../../data/homeData";

export const Hero: React.FC = () => {
  return (
    <section className="relative font-primary max-w-full min-h-[90vh] md:min-h-screen bg-[#0f1d16] flex items-center pt-28 md:pt-36 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover object-center pointer-events-none"
      >
        <source src="/videos/Digitap_Ad.mp4" type="video/mp4" />
        <source src="https://ae7qnpbetnccjd54.public.blob.vercel-storage.com/Digitap_Ad.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65 z-10 pointer-events-none" />

      {/* Hero content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-6 lg:px-10 py-12 md:py-20 w-full">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-[68px] font-extrabold leading-[1.05] tracking-tighter text-white">
            Multi-Currency Accounts, <br />
            Foreign Exchange
          </h1>
          <div className="text-4xl sm:text-5xl lg:text-[68px] font-extrabold leading-[1.05] tracking-tighter text-main-green mt-1">
            & Cross-Border Payments.
          </div>

          <p className="text-lg md:text-2xl text-gray-200 font-semibold tracking-tighter pt-6 pb-6 max-w-2xl leading-snug">
            Luma Pay provides multi-currency accounts, foreign exchange, and remittance services for businesses and individuals, with virtual currency conversion available as an additional capability.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-2">
            <a
              target="_blank"
              rel="noreferrer"
              href="#get-started"
              className="darkbtn border border-main-green bg-[#242a28] px-6 sm:px-9 py-3.5 text-base sm:text-lg text-center tracking-tighter text-main-green font-semibold rounded-full hover:bg-[#242a28]/80 cursor-pointer transition-all"
            >
              Get Started
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="#services"
              className="btn-glow-shadow leftglow border border-main-green px-6 sm:px-9 py-3.5 text-base sm:text-lg text-center tracking-tighter text-[#0f1d16] font-semibold bg-main-green rounded-full cursor-pointer transition-all active:scale-95"
            >
              Explore Services
            </a>
          </div>

          {/* Partner & Trust Badges */}
          <div className="flex flex-wrap items-center gap-3 md:gap-4 mt-8 pt-2">
            {heroBadges.map((badge) => {
              const imgElement = (
                <img
                  key={badge.name}
                  alt={badge.name}
                  src={badge.src}
                  width={badge.width}
                  height={badge.height}
                  className="object-contain max-h-8 md:max-h-10 w-auto hover:opacity-80 transition-opacity"
                />
              );

              if (badge.href) {
                return (
                  <a
                    key={badge.name}
                    href={badge.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    {imgElement}
                  </a>
                );
              }
              return imgElement;
            })}

            {/* X Icon */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://x.com/LumaPay_app"
              className="text-white hover:text-main-green transition-colors"
              aria-label="X (Twitter)"
            >
              <svg stroke="currentColor" fill="currentColor" viewBox="0 0 16 16" className="h-5 w-5 md:h-6 md:w-6">
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
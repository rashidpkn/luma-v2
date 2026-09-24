import React from "react";
import SiteLink from "../../../components/SiteLink";
import { heroBadges } from "../../../data/homeData";

const badgeAlt: Record<string, string> = {
  visa: "Visa",
  "apple-pay": "Apple Pay",
  "google-pay": "Google Pay",
  ethereum: "Ethereum",
  solidproof: "SolidProof",
  Coinsult: "Coinsult",
  discord: "Discord",
  telegram: "Telegram",
};

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative overflow-hidden bg-navy">
      <video
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/Digitap_Ad.mp4" type="video/mp4" />
        <source src="https://ae7qnpbetnccjd54.public.blob.vercel-storage.com/Digitap_Ad.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-navy/80" />

      <div className="relative mx-auto flex min-h-[78vh] max-w-6xl items-center px-4 py-16 md:min-h-[84vh] md:px-6 md:py-24 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Multi-Currency Accounts,
            <br />
            Foreign Exchange
            <br />
            &amp; Cross-Border Payments.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#d5e2ee] md:text-lg">
            Luma Pay provides multi-currency accounts, foreign exchange, and remittance services for businesses and individuals, with virtual currency conversion available as an additional capability.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <SiteLink href="#get-started" className="btn btn-primary">
              Get Started
            </SiteLink>
            <SiteLink href="#services" className="btn btn-secondary-dark">
              Explore Services
            </SiteLink>
          </div>
          <ul className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-3">
            {heroBadges.map((badge) => {
              const image = (
                <img
                  alt={badgeAlt[badge.name] ?? badge.name}
                  src={badge.src}
                  width={badge.width}
                  height={badge.height}
                  className="h-7 w-auto max-h-8 object-contain md:h-8"
                />
              );
              return (
                <li key={badge.name}>
                  {badge.href ? (
                    <a href={badge.href} target="_blank" rel="noreferrer" className="inline-flex items-center">
                      {image}
                    </a>
                  ) : (
                    image
                  )}
                </li>
              );
            })}
            <li>
              <a
                href="https://x.com/LumaPay_app"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-sky"
                aria-label="X (Twitter)"
              >
                <svg viewBox="0 0 16 16" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;

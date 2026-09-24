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
    <section id="hero" className="bg-navy text-[#e8f4fc]">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-6 pt-8 md:px-6 md:pt-14 lg:grid-cols-2 lg:gap-14 lg:pb-10 lg:pt-16">
        <div>
          <h1 className="display text-[2.65rem] sm:text-6xl lg:text-[4.4rem]">
            Multi-Currency Accounts, Foreign Exchange &amp; Cross-Border Payments.
          </h1>
          <p className="lede mt-6 max-w-xl text-base md:text-lg">
            Luma Pay provides multi-currency accounts, foreign exchange, and remittance services for businesses and individuals, with virtual currency conversion available as an additional capability.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <SiteLink href="#get-started" className="btn btn-primary">
              Get Started
            </SiteLink>
            <SiteLink href="#services" className="btn btn-soft">
              Explore Services
            </SiteLink>
          </div>
        </div>
        <div className="overflow-hidden rounded-[1.75rem] bg-blue shadow-[0_16px_40px_rgba(10,37,64,0.08)]">
          <video autoPlay muted loop playsInline aria-hidden="true" className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]">
            <source src="/videos/Digitap_Ad.mp4" type="video/mp4" />
            <source src="https://ae7qnpbetnccjd54.public.blob.vercel-storage.com/Digitap_Ad.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="bg-blue text-navy">
        <ul className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-5 gap-y-3 px-4 py-6 md:px-6">
          {heroBadges.map((badge) => {
            const image = (
              <img
                alt={badgeAlt[badge.name] ?? badge.name}
                src={badge.src}
                width={badge.width}
                height={badge.height}
                className="h-7 w-auto object-contain"
              />
            );
            const needsDarkPlate = badge.name === "apple-pay" || badge.name === "solidproof";
            return (
              <li key={badge.name} className={needsDarkPlate ? "rounded-lg bg-navy px-2 py-1" : undefined}>
                {badge.href ? (
                  <a href={badge.href} target="_blank" rel="noreferrer" className="inline-flex">
                    {image}
                  </a>
                ) : (
                  image
                )}
              </li>
            );
          })}
          <li>
            <a href="https://x.com/LumaPay_app" target="_blank" rel="noreferrer" aria-label="X (Twitter)" className="text-navy">
              <svg viewBox="0 0 16 16" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import SiteLink from "../../../components/SiteLink";

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
    </section>
  );
};

export default Hero;

import React from "react";
import { featureCards } from "../../../data/homeData";

export const FeaturesGrid: React.FC = () => {
  return (
    <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 font-primary">
      {/* Intro split row */}
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-10">
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl sm:text-4xl lg:text-[50px] lg:leading-[56px] text-heading font-extrabold tracking-tighter">
            Complete Crypto Fiat Bank Features for Modern Banking
          </h2>
          <p className="text-base md:text-lg text-heading tracking-tight leading-relaxed pt-5">
            DigiTap offers a comprehensive suite of crypto fiat banking features, designed to redefine how you
            manage your finances in the digital age. Our crypto fiat banking application combines the power of
            traditional banking with blockchain innovation, providing you with access to advanced tools for both
            fiat and cryptocurrency.
            <br />
            <br />
            From instant conversions and multi-currency wallets to global payments and staking, DigiTap provides
            everything you need to stay in control. As a complete crypto fiat bank, it offers reliable, compliant,
            and secure digital asset banking solutions that connect traditional finance with the future of Web3
            banking.
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img
            alt="DigiTap Mobile App Features"
            src="/images/homev3/feature/cryptoMob.png"
            width={700}
            height={700}
            className="max-h-[480px] w-auto object-contain select-none drop-shadow-2xl"
          />
        </div>
      </div>

      {/* 6 Feature cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 md:mt-24">
        {featureCards.map((card) => (
          <div
            key={card.title}
            className="relative bg-black py-8 px-6 md:px-8 rounded-3xl overflow-hidden border border-white/10 group hover:border-main-green/40 transition-all duration-300 flex flex-col justify-end min-h-[440px]"
            style={{
              backgroundImage: `url('${card.bgImage}')`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center top",
              backgroundSize: "cover",
            }}
          >
            {/* Dark gradient for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-0" />

            <div className="relative z-10 pt-48">
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tighter">
                {card.title}
              </h3>
              <p className="text-sm md:text-base text-gray-300 tracking-tight leading-relaxed pt-3">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Presale CTA */}
      <div className="flex justify-center items-center mt-12 md:mt-16 w-full">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://presale.digitap.app/login"
          className="btn-glow-shadow leftglow border border-main-green px-8 py-3.5 text-base sm:text-lg text-center tracking-tighter text-[#0f1d16] font-bold bg-main-green rounded-full cursor-pointer transition-transform active:scale-95"
        >
          Join $TAP Crypto Presale
        </a>
      </div>
    </section>
  );
};

export default FeaturesGrid;

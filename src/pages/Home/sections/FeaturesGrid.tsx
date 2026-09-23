import React from "react";
import { featureCards } from "../../../data/homeData";

export const FeaturesGrid: React.FC = () => {
  return (
    <section className="py-10 md:py-20 max-w-7xl mx-3 2xl:mx-auto font-primary">
      {/* Intro split row */}
      <div className="flex flex-col-reverse lg:flex-row justify-center items-center">
        <div className="w-full xl:w-2/5 mt-10 xl:mt-0">
          <h2 className="text-3xl md:text-[42px] md:leading-[48px] lg:text-5xl lg:leading-[54px] text-heading font-extrabold tracking-tighter xl:pr-6">
            Complete Crypto Fiat Bank Features for Modern Banking
          </h2>
          <p className="text-lg text-heading tracking-tighter leading-[30px] pt-5">
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
        <div className="w-full xl:w-3/5 relative bg-white flex flex-col xl:flex-row justify-center items-center">
          <img
            alt="group"
            src="/images/homev3/feature/cryptoMob.png"
            width={700}
            height={700}
            className="relative z-10 select-none max-h-[500px] w-auto object-contain"
          />
        </div>
      </div>

      {/* 6 Feature cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-24">
        {featureCards.map((card) => (
          <div
            key={card.title}
            className="relative bg-black py-10 px-5 md:px-8 sm:px-10 rounded-[20px] overflow-hidden"
            style={{
              backgroundImage: `url('${card.bgImage}')`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white tracking-tighter pt-52">
                {card.title}
              </h2>
              <p className="text-lg text-gray-300 tracking-tighter leading-[30px] pt-3">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Presale CTA */}
      <div className="flex justify-center items-center mx-auto mt-10 w-full">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://presale.digitap.app/login"
          className="btn-glow-shadow leftglow border border-main-green px-6 md:px-9 py-3.5 text-base sm:text-lg text-center tracking-tighter text-[#0f1d16] font-semibold bg-main-green rounded-full cursor-pointer transition-transform active:scale-95"
        >
          Join $TAP Crypto Presale
        </a>
      </div>
    </section>
  );
};

export default FeaturesGrid;

import React from "react";

export const WhatIsDigiTap: React.FC = () => {
  return (
    <section className="overflow-hidden xl:overflow-visible max-w-7xl mx-auto px-4 font-primary pb-12 md:pb-24">
      {/* Main Title & Lead */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl xl:text-[60px] xl:leading-[68px] text-heading font-bold tracking-tighter pt-6 md:pt-12">
          What is DigiTap Crypto Fiat Bank
        </h2>
        <p className="text-base md:text-lg text-heading tracking-tight leading-relaxed pt-5">
          DigiTap App is a fintech application that combines cryptocurrency and traditional fiat banking in a
          single interface. Launched in 2025, it enables users to hold and manage both digital assets and traditional
          currencies across 20+ fiat denominations and 100+ cryptocurrencies. The platform supports multi-chain
          wallet functionality, covering Solana, Polygon, and other blockchain networks.
          <br />
          <br />
          Swift supported offshore bank accounts through global banking partners with key features including instant
          crypto-to-fiat conversions, physical and virtual debit cards issued through partnerships with major payment
          processors, and real-time currency exchange. DigiTap serves both individual users and global businesses,
          providing a single hub to securely manage, store, and grow their fiat and crypto assets together.
        </p>
      </div>

      {/* Feature 1: Core Value Proposition */}
      <div className="flex flex-col lg:flex-row justify-center items-center pt-12 md:pt-20 gap-8 md:gap-12">
        <div className="w-full text-center lg:text-left">
          <h3 className="text-2xl sm:text-3xl md:text-4xl text-heading font-bold tracking-tighter">
            Core Value Proposition
          </h3>
          <p className="text-base md:text-lg text-heading tracking-tight leading-relaxed pt-3">
            Unlike traditional banks that limit users to fiat currencies, DigiTap{" "}
            <a href="/plans" className="text-green-600 hover:underline">
              crypto fiat bank account plans
            </a>{" "}
            enable complete control of both crypto and fiat money in one unified experience. This integration enables
            users to seamlessly switch between currencies, make global payments, and leverage the best features of both
            financial systems.
          </p>
        </div>
        <div className="w-full flex justify-center items-center">
          <img
            alt="Core Value Proposition"
            src="/images/homev3/poweryYour/crypto.png"
            width={600}
            height={400}
            className="w-full max-w-[550px] object-contain drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Feature 2: Key Capabilities */}
      <div className="flex flex-col-reverse lg:flex-row justify-center items-center pt-12 md:pt-20 gap-8 md:gap-12">
        <div className="w-full flex justify-center items-center">
          <img
            alt="Key Capabilities"
            src="/images/homev3/poweryYour/card.png"
            width={590}
            height={400}
            className="w-full max-w-[550px] object-contain drop-shadow-2xl select-none"
          />
        </div>
        <div className="w-full text-center lg:text-left">
          <h3 className="text-2xl sm:text-3xl md:text-4xl text-heading font-bold tracking-tighter">
            Key Capabilities
          </h3>
          <p className="text-base md:text-lg text-heading tracking-tight leading-relaxed pt-3">
            At its core, DigiTap offers multi-currency fiat accounts, multi-chain crypto wallets, and instant
            crypto-to-fiat conversions supported by Visa connectivity. The{" "}
            <a href="/personal" className="text-green-600 hover:underline">
              personal crypto fiat banking
            </a>{" "}
            application supports global transfers, card payments, and advanced security, giving users everything they
            need to manage modern finances without borders.
          </p>
        </div>
      </div>

      {/* Feature 3: Target Users */}
      <div className="flex flex-col lg:flex-row justify-center items-center pt-12 md:pt-20 gap-8 md:gap-12">
        <div className="w-full text-center lg:text-left">
          <h3 className="text-2xl sm:text-3xl md:text-4xl text-heading font-bold tracking-tighter">
            Target Users
          </h3>
          <p className="text-base md:text-lg text-heading tracking-tight leading-relaxed pt-3">
            DigiTap crypto fiat bank serves a wide range of users, including individuals,{" "}
            <a href="/business" className="text-green-600 hover:underline">
              business crypto fiat bank accounts
            </a>
            , traders, and investors who demand flexibility and speed. It is ideal for global citizens, digital nomads,
            and cross-border enterprises seeking a seamless solution for everyday banking and digital asset management.
          </p>
        </div>
        <div className="w-full flex justify-center items-center">
          <img
            alt="Target Users"
            src="/images/homev3/poweryYour/electric.png"
            width={600}
            height={400}
            className="w-full max-w-[550px] object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatIsDigiTap;

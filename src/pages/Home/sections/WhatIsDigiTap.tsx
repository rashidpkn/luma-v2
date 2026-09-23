import React from "react";

export const WhatIsDigiTap: React.FC = () => {
  return (
    <section className="overflow-hidden xl:overflow-visible max-w-7xl mx-auto px-4 font-primary pb-12 md:pb-24">
      {/* Main Title & Lead */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl xl:text-[60px] xl:leading-[68px] text-heading font-bold tracking-tighter pt-6 md:pt-12">
          What is Luma Pay
        </h2>
        <p className="text-base md:text-lg text-heading tracking-tight leading-relaxed pt-5">
          Luma Pay is a comprehensive financial platform that offers multi-currency accounts, foreign exchange, and cross-border payment services. As a registered Money Services Business, it enables users to seamlessly hold and manage over 30 traditional currencies while also offering virtual currency capabilities.
          <br />
          <br />
          Backed by global banking partners, Luma Pay provides instant currency conversions, domestic and international remittances, and flexible payment cards. We serve both individual users and global businesses, providing a unified hub to securely manage and transfer funds without boundaries.
        </p>
      </div>

      {/* Feature 1: Core Value Proposition */}
      <div className="flex flex-col lg:flex-row justify-center items-center pt-12 md:pt-20 gap-8 md:gap-12">
        <div className="w-full text-center lg:text-left">
          <h3 className="text-2xl sm:text-3xl md:text-4xl text-heading font-bold tracking-tighter">
            Core Value Proposition
          </h3>
          <p className="text-base md:text-lg text-heading tracking-tight leading-relaxed pt-3">
            Unlike traditional platforms that restrict international capabilities, Luma Pay{" "}
            <a href="/plans" className="text-main-blue hover:underline">
              tailored account plans
            </a>{" "}
            enable complete control of your global finances in one unified experience. This integration allows users to seamlessly switch between currencies, execute cross-border payments efficiently, and leverage advanced virtual currency conversions.
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
            src="/home images/Key Capabilities.png"
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
            At its core, Luma Pay offers robust multi-currency accounts, competitive foreign exchange rates, and reliable remittance services. The{" "}
            <a href="/personal" className="text-main-blue hover:underline">
              personal and business
            </a>{" "}
            applications support global transfers, multi-currency holding, and advanced regulatory compliance, giving users everything they need to manage their finances globally.
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
            Luma Pay serves a wide range of users, including individuals,{" "}
            <a href="/business" className="text-main-blue hover:underline">
              businesses
            </a>
            , and international merchants who demand flexible cross-border transactions. It is ideal for expats, freelancers, and enterprises seeking a fast, secure solution for international remittances and multi-currency management.
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

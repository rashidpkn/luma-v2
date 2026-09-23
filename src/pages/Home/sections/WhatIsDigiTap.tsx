import React from "react";

const features = [
  {
    title: "Core Value Proposition",
    image: "/images/homev3/poweryYour/crypto.png",
    imageFirst: false,
    body: (
      <>
        Unlike traditional platforms that restrict international capabilities, Luma Pay{" "}
        <a href="/plans" className="text-main-blue hover:underline">
          tailored account plans
        </a>{" "}
        enable complete control of your global finances in one unified experience. This integration allows users to seamlessly switch between currencies, execute cross-border payments efficiently, and leverage advanced virtual currency conversions.
      </>
    ),
  },
  {
    title: "Key Capabilities",
    image: "/home images/Key Capabilities.png",
    imageFirst: true,
    body: (
      <>
        At its core, Luma Pay offers robust multi-currency accounts, competitive foreign exchange rates, and reliable remittance services. The{" "}
        <a href="/personal" className="text-main-blue hover:underline">
          personal and business
        </a>{" "}
        applications support global transfers, multi-currency holding, and advanced regulatory compliance, giving users everything they need to manage their finances globally.
      </>
    ),
  },
  {
    title: "Target Users",
    image: "/images/homev3/poweryYour/electric.png",
    imageFirst: false,
    body: (
      <>
        Luma Pay serves a wide range of users, including individuals,{" "}
        <a href="/business" className="text-main-blue hover:underline">
          businesses
        </a>
        , and international merchants who demand flexible cross-border transactions. It is ideal for expats, freelancers, and enterprises seeking a fast, secure solution for international remittances and multi-currency management.
      </>
    ),
  },
];

export const WhatIsDigiTap: React.FC = () => {
  return (
    <section className="font-primary px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          What is Luma Pay
        </h2>
        <p className="pt-5 text-base leading-relaxed text-[#c2c7c5] md:text-lg">
          Luma Pay is a comprehensive financial platform that offers multi-currency accounts, foreign exchange, and cross-border payment services. As a registered Money Services Business, it enables users to seamlessly hold and manage over 30 traditional currencies while also offering virtual currency capabilities.
          <br />
          <br />
          Backed by global banking partners, Luma Pay provides instant currency conversions, domestic and international remittances, and flexible payment cards. We serve both individual users and global businesses, providing a unified hub to securely manage and transfer funds without boundaries.
        </p>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-6 md:mt-16 md:gap-8">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="grid items-center gap-8 rounded-3xl border border-white/10 bg-[#112240]/55 p-6 md:p-10 lg:grid-cols-2 lg:gap-12"
          >
            <div className={feature.imageFirst ? "lg:order-2" : undefined}>
              <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
                {feature.title}
              </h3>
              <p className="pt-4 text-base leading-relaxed text-[#c2c7c5] md:text-lg">
                {feature.body}
              </p>
            </div>
            <div className={`flex justify-center ${feature.imageFirst ? "lg:order-1" : ""}`}>
              <div className="w-full rounded-2xl bg-[#0a192f] p-4">
                <img
                  alt={feature.title}
                  src={feature.image}
                  width={600}
                  height={400}
                  className="mx-auto w-full max-w-[480px] object-contain"
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default WhatIsDigiTap;

import React from "react";
import SiteLink from "../../../components/SiteLink";

const features = [
  {
    title: "Core Value Proposition",
    image: "/images/homev3/poweryYour/crypto.png",
    body: (
      <>
        Unlike traditional platforms that restrict international capabilities, Luma Pay{" "}
        <SiteLink href="/plans" className="link-quiet">
          tailored account plans
        </SiteLink>{" "}
        enable complete control of your global finances in one unified experience. This integration allows users to seamlessly switch between currencies, execute cross-border payments efficiently, and leverage advanced virtual currency conversions.
      </>
    ),
  },
  {
    title: "Key Capabilities",
    image: "/home images/Key Capabilities.png",
    body: (
      <>
        At its core, Luma Pay offers robust multi-currency accounts, competitive foreign exchange rates, and reliable remittance services. The{" "}
        <SiteLink href="/personal" className="link-quiet">
          personal and business
        </SiteLink>{" "}
        applications support global transfers, multi-currency holding, and advanced regulatory compliance, giving users everything they need to manage their finances globally.
      </>
    ),
  },
  {
    title: "Target Users",
    image: "/images/homev3/poweryYour/electric.png",
    body: (
      <>
        Luma Pay serves a wide range of users, including individuals,{" "}
        <SiteLink href="/business" className="link-quiet">
          businesses
        </SiteLink>
        , and international merchants who demand flexible cross-border transactions. It is ideal for expats, freelancers, and enterprises seeking a fast, secure solution for international remittances and multi-currency management.
      </>
    ),
  },
];

export const WhatIsDigiTap: React.FC = () => {
  return (
    <section className="bg-navy px-4 py-16 text-[#e8f4fc] md:px-6 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-12 lg:gap-16">
        <h2 className="display text-4xl sm:text-5xl lg:col-span-5">What is Luma Pay</h2>
        <div className="lede space-y-4 text-base md:text-lg lg:col-span-7">
          <p>
            Luma Pay is a comprehensive financial platform that offers multi-currency accounts, foreign exchange, and cross-border payment services. As a registered Money Services Business, it enables users to seamlessly hold and manage over 30 traditional currencies while also offering virtual currency capabilities.
          </p>
          <p>
            Backed by global banking partners, Luma Pay provides instant currency conversions, domestic and international remittances, and flexible payment cards. We serve both individual users and global businesses, providing a unified hub to securely manage and transfer funds without boundaries.
          </p>
        </div>
      </div>
      <div className="mx-auto mt-12 grid max-w-6xl gap-4 md:mt-16 lg:grid-cols-3">
        {features.map((feature) => (
          <article key={feature.title} className="flex flex-col rounded-[1.5rem] bg-blue p-5 text-navy md:p-6">
            <div className="mb-5 flex h-40 items-center justify-center rounded-2xl bg-blue-soft">
              <img alt={feature.title} src={feature.image} className="max-h-32 w-auto max-w-full object-contain" />
            </div>
            <h3 className="text-xl font-semibold tracking-tight text-navy">{feature.title}</h3>
            <p className="lede mt-3 text-sm md:text-base">{feature.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default WhatIsDigiTap;

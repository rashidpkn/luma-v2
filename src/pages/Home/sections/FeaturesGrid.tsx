import React from "react";
import SiteLink from "../../../components/SiteLink";
import { featureCards } from "../../../data/homeData";

const spans = ["md:col-span-4", "md:col-span-2", "md:col-span-2", "md:col-span-2", "md:col-span-2", "md:col-span-6"];

export const FeaturesGrid: React.FC = () => {
  return (
    <section id="services" className="bg-navy px-4 py-16 text-[#e8f4fc] md:px-6 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="display text-4xl sm:text-5xl">Complete Financial Features for Modern Banking</h2>
          <div className="lede mt-5 space-y-4 text-base md:text-lg">
            <p>
              Luma Pay offers a comprehensive suite of financial features, designed to redefine how you manage your finances in the digital age. Our platform combines the power of multi-currency accounts with virtual currency capabilities, providing you with access to advanced tools for seamless cross-border transactions.
            </p>
            <p>
              From instant foreign exchange and multi-currency accounts to global payments, Luma Pay provides everything you need to stay in control. As a registered Money Services Business, it offers reliable, compliant, and secure financial solutions that connect traditional finance with modern digital assets.
            </p>
          </div>
        </div>
        <div className="flex justify-center rounded-[1.75rem] bg-blue p-6">
          <img alt="Luma Pay mobile app" src="/images/homev3/feature/cryptoMob.png" width={700} height={700} className="max-h-[420px] w-auto max-w-full object-contain" />
        </div>
      </div>

      <div className="mx-auto mt-12 grid max-w-6xl gap-4 md:grid-cols-6">
        {featureCards.map((card, index) => (
          <article key={card.title} className={`flex flex-col overflow-hidden rounded-[1.5rem] bg-blue text-navy ${spans[index] ?? ""}`}>
            <div className="flex h-44 items-center justify-center bg-blue-soft">
              <img src={card.bgImage} alt="" className="h-full w-full object-contain" />
            </div>
            <div className="flex flex-1 flex-col p-5 md:p-6">
              <h3 className="text-xl font-semibold tracking-tight text-navy">{card.title}</h3>
              <p className="lede mt-2 text-sm md:text-base">{card.description}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <SiteLink href="#services" className="btn btn-primary">
          Explore Luma Pay Services
        </SiteLink>
      </div>
    </section>
  );
};

export default FeaturesGrid;

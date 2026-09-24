import React from "react";
import SiteLink from "../../../components/SiteLink";
import { featureCards } from "../../../data/homeData";

export const FeaturesGrid: React.FC = () => {
  return (
    <section id="services" className="bg-white px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-navy md:text-4xl lg:text-5xl">
            Complete Financial Features for Modern Banking
          </h2>
          <p className="pt-5 text-base leading-relaxed text-muted md:text-lg">
            Luma Pay offers a comprehensive suite of financial features, designed to redefine how you
            manage your finances in the digital age. Our platform combines the power of
            multi-currency accounts with virtual currency capabilities, providing you with access to advanced tools for seamless cross-border transactions.
            <br />
            <br />
            From instant foreign exchange and multi-currency accounts to global payments, Luma Pay provides
            everything you need to stay in control. As a registered Money Services Business, it offers reliable, compliant,
            and secure financial solutions that connect traditional finance with modern digital assets.
          </p>
        </div>
        <div className="surface-card flex justify-center bg-mist p-6">
          <img
            alt="Luma Pay mobile app"
            src="/images/homev3/feature/cryptoMob.png"
            width={700}
            height={700}
            className="max-h-[420px] w-auto max-w-full object-contain"
          />
        </div>
      </div>

      <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {featureCards.map((card) => (
          <article key={card.title} className="surface-card flex flex-col overflow-hidden">
            <img
              src={card.bgImage}
              alt=""
              className="h-44 w-full object-cover"
            />
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl font-semibold tracking-tight text-navy md:text-2xl">
                {card.title}
              </h3>
              <p className="pt-3 text-base leading-relaxed text-muted">
                {card.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 flex items-center justify-center">
        <SiteLink href="#services" className="btn btn-primary">
          Explore Luma Pay Services
        </SiteLink>
      </div>
    </section>
  );
};

export default FeaturesGrid;

import React from "react";
import { featureCards } from "../../../data/homeData";

export const FeaturesGrid: React.FC = () => {
  return (
    <section className="font-primary px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Complete Financial Features for Modern Banking
          </h2>
          <p className="pt-5 text-base leading-relaxed text-[#c2c7c5] md:text-lg">
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
        <div className="flex justify-center rounded-3xl border border-white/10 bg-[#112240]/40 p-6">
          <img
            alt="group"
            src="/images/homev3/feature/cryptoMob.png"
            width={700}
            height={700}
            className="max-h-[420px] w-auto object-contain"
          />
        </div>
      </div>

      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {featureCards.map((card) => (
          <article
            key={card.title}
            className="relative min-h-[380px] overflow-hidden rounded-3xl border border-white/10"
            style={{
              backgroundImage: `url('${card.bgImage}')`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#071422] via-[#071422]/80 to-[#071422]/20" />
            <div className="relative z-10 flex min-h-[380px] flex-col justify-end p-6 md:p-8">
              <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                {card.title}
              </h2>
              <p className="pt-3 text-base leading-relaxed text-gray-300">
                {card.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 flex items-center justify-center">
        <a
          target="_blank"
          rel="noreferrer"
          href="#services"
          className="btn-glow-shadow leftglow cursor-pointer rounded-full border border-main-blue bg-main-blue px-6 py-3.5 text-center text-base font-semibold tracking-tight text-white transition-transform active:scale-95 md:px-9 sm:text-lg"
        >
          Explore Luma Pay Services
        </a>
      </div>
    </section>
  );
};

export default FeaturesGrid;

import React from "react";
import { whyChooseItems } from "../../../data/homeData";

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="font-primary px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 md:gap-6">
        {whyChooseItems.map((item, index) => (
          <article
            key={item.id}
            className="grid items-center gap-8 rounded-3xl border border-white/10 bg-[#112240]/45 p-6 md:p-8 lg:grid-cols-2 lg:gap-12 lg:p-10"
          >
            <div className={item.imageRight ? "lg:order-1" : "lg:order-2"}>
              <span className="text-sm font-semibold tracking-[0.18em] text-main-blue">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="pt-3 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
                {item.title}
              </h2>
              <p className="max-w-xl pt-4 text-base leading-relaxed text-[#c2c7c5] md:text-lg">
                {item.description}
              </p>
            </div>
            <div className={`flex justify-center ${item.imageRight ? "lg:order-2" : "lg:order-1"}`}>
              <div className="flex w-full items-center justify-center rounded-2xl bg-[#0a192f] px-4 py-6">
                <img
                  alt={item.title}
                  src={item.image}
                  width={850}
                  height={950}
                  className="max-h-[280px] w-auto object-contain md:max-h-[340px]"
                />
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-4 md:mt-16">
        <a
          target="_blank"
          rel="noreferrer"
          href="#services"
          className="btn-glow-shadow leftglow cursor-pointer rounded-full border border-main-blue bg-main-blue px-8 py-3.5 text-center text-base font-bold tracking-tight text-white transition-transform active:scale-95 sm:text-lg"
        >
          Explore Luma Pay Services
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="#get-started"
          className="darkbtn cursor-pointer rounded-full border border-main-blue bg-[#112240] px-8 py-3.5 text-center text-base font-semibold tracking-tight text-main-blue transition-all hover:bg-[#112240]/80 sm:text-lg"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default WhyChooseUs;

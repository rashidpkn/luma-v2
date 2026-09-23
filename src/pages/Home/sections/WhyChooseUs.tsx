import React from "react";
import { whyChooseItems } from "../../../data/homeData";

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-24 font-primary">
      {/* 10 Alternating Rows */}
      <div className="space-y-12 md:space-y-16">
        {whyChooseItems.map((item) => (
          <div
            key={item.id}
            className={`flex flex-col-reverse items-center justify-between gap-8 md:gap-16 py-4 ${
              item.imageRight ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
          >
            {/* Text description */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h2 className="text-3xl md:text-[42px] md:leading-[48px] lg:text-5xl lg:leading-[54px] text-heading font-extrabold tracking-tighter pt-4">
                {item.title}
              </h2>
              <p className="text-lg text-heading tracking-tighter leading-[30px] pt-2 max-w-xl mx-auto lg:mx-0">
                {item.description}
              </p>
            </div>

            {/* Illustration image */}
            <div className="w-full lg:w-1/2 flex justify-center items-center">
              <img
                alt={item.title}
                src={item.image}
                width={850}
                height={950}
                className="max-h-[380px] md:max-h-[460px] w-auto object-contain select-none drop-shadow-2xl hover:scale-102 transition-transform duration-500"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Action CTA row */}
      <div className="flex flex-wrap justify-center items-center gap-4 mt-16 md:mt-24">
        <a
          target="_blank"
          rel="noreferrer"
          href="#services"
          className="btn-glow-shadow leftglow border border-main-green px-8 py-3.5 text-base sm:text-lg text-center tracking-tighter text-[#0f1d16] font-bold bg-main-green rounded-full cursor-pointer transition-transform active:scale-95"
        >
          Explore Luma Pay Services
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="#get-started"
          className="darkbtn border border-main-green bg-[#242a28] px-8 py-3.5 text-base sm:text-lg text-center tracking-tighter text-main-green font-semibold hover:bg-[#242a28]/80 rounded-full cursor-pointer transition-all"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default WhyChooseUs;

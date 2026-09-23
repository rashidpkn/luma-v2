import React from "react";
import { whyChooseItems } from "../../../data/homeData";

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-24 font-primary">
      {/* Title */}
      <div className="max-w-3xl mx-auto mb-10 md:mb-16 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] lg:leading-[64px] font-extrabold tracking-tighter text-heading">
          Why Choose DigiTap as Your Crypto Fiat Banking Application
        </h2>
      </div>

      {/* 10 Alternating Rows */}
      <div className="space-y-16 md:space-y-24">
        {whyChooseItems.map((item) => (
          <div
            key={item.id}
            className={`flex flex-col-reverse items-center justify-between gap-8 md:gap-16 ${
              item.imageRight ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
          >
            {/* Text description */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] lg:leading-[50px] text-heading font-extrabold tracking-tighter">
                {item.title}
              </h3>
              <p className="text-base md:text-lg text-heading tracking-tight leading-relaxed pt-3 max-w-xl mx-auto lg:mx-0">
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
          href="https://presale.digitap.app/login"
          className="btn-glow-shadow leftglow border border-main-green px-8 py-3.5 text-base sm:text-lg text-center tracking-tighter text-[#0f1d16] font-bold bg-main-green rounded-full cursor-pointer transition-transform active:scale-95"
        >
          Join $TAP Crypto Presale
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://my.digitap.app/en/sign-up"
          className="darkbtn border border-main-green bg-[#242a28] px-8 py-3.5 text-base sm:text-lg text-center tracking-tighter text-main-green font-semibold hover:bg-[#242a28]/80 rounded-full cursor-pointer transition-all"
        >
          Download the App
        </a>
      </div>
    </section>
  );
};

export default WhyChooseUs;

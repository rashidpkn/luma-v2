import React from "react";
import { asSeenInLogos } from "../../../data/homeData";

export const AsSeenIn: React.FC = () => {
  return (
    <section className="overflow-hidden xl:overflow-visible max-w-7xl mx-auto px-4 my-10 md:my-16 font-primary relative">
      
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-32 bg-main-blue/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-[1350px] mx-auto relative z-10 bg-[#112240]/40 backdrop-blur-sm border border-white/5 rounded-3xl py-10 px-6">
        <h3 className="text-white text-xl uppercase tracking-widest font-semibold text-center mb-8 opacity-80">
          As Seen In
        </h3>

        {/* Desktop Grid (XL+) */}
        <div className="hidden xl:flex justify-center xl:flex-nowrap flex-wrap gap-4 md:gap-x-14 items-center">
          {asSeenInLogos.map((item) => (
            <a
              key={item.name}
              target="_blank"
              rel="noopener noreferrer"
              href={item.href}
              className="hover:scale-110 transition-transform duration-300"
            >
              <img
                alt={item.name}
                src={item.src}
                width={item.width}
                height={item.height}
                className="select-none max-h-10 w-auto object-contain brightness-0 invert opacity-50 hover:opacity-100 transition-all duration-300"
              />
            </a>
          ))}
        </div>

        {/* Mobile / Tablet Infinite Marquee (< XL) */}
        <div className="xl:hidden relative w-full overflow-hidden py-4">
          <div className="animate-marquee flex items-center gap-10 md:gap-16" style={{ "--duration": "25s" } as React.CSSProperties}>
            {/* First loop */}
            {asSeenInLogos.map((item, idx) => (
              <a
                key={`m1-${idx}`}
                target="_blank"
                rel="noopener noreferrer"
                href={item.href}
                className="shrink-0 flex items-center"
              >
                <img
                  alt={item.name}
                  src={item.src}
                  className="h-8 w-auto max-w-[150px] object-contain brightness-0 invert opacity-50 select-none"
                />
              </a>
            ))}
            {/* Second loop for infinite marquee effect */}
            {asSeenInLogos.map((item, idx) => (
              <a
                key={`m2-${idx}`}
                target="_blank"
                rel="noopener noreferrer"
                href={item.href}
                className="shrink-0 flex items-center"
              >
                <img
                  alt={item.name}
                  src={item.src}
                  className="h-8 w-auto max-w-[150px] object-contain brightness-0 invert opacity-50 select-none"
                />
              </a>
            ))}
          </div>
          
          {/* Fading Edges for Mobile Marquee */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0a192f] to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0a192f] to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default AsSeenIn;

import React from "react";
import { asSeenInLogos } from "../../../data/homeData";

export const AsSeenIn: React.FC = () => {
  return (
    <section className="overflow-hidden xl:overflow-visible max-w-7xl mx-auto px-4 my-10 md:my-16 font-primary">
      <div className="max-w-[1350px] mx-auto">
        <h3 className="text-heading text-2xl font-bold text-center mb-6 tracking-tighter">
          As Seen In
        </h3>

        {/* Desktop Grid (XL+) */}
        <div className="hidden xl:flex justify-center xl:flex-nowrap flex-wrap gap-4 md:gap-x-10 items-center">
          {asSeenInLogos.map((item) => (
            <a
              key={item.name}
              target="_blank"
              rel="noopener noreferrer"
              href={item.href}
              className="hover:scale-105 transition-transform"
            >
              <img
                alt={item.name}
                src={item.src}
                width={item.width}
                height={item.height}
                className="select-none max-h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100"
              />
            </a>
          ))}
        </div>

        {/* Mobile / Tablet Infinite Marquee (< XL) */}
        <div className="xl:hidden relative w-full overflow-hidden py-4">
          <div className="animate-marquee flex items-center gap-8 md:gap-12" style={{ "--duration": "20s" } as React.CSSProperties}>
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
                  className="h-9 w-auto max-w-[150px] object-contain opacity-75 select-none"
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
                  className="h-9 w-auto max-w-[150px] object-contain opacity-75 select-none"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AsSeenIn;

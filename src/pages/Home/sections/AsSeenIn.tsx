import React from "react";
import { asSeenInLogos } from "../../../data/homeData";

export const AsSeenIn: React.FC = () => {
  return (
    <section className="font-primary px-4 py-6 md:px-6 md:py-10">
      <div className="mx-auto max-w-6xl border-y border-white/10 py-8 md:py-10">
        <h3 className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.28em] text-main-blue">
          As Seen In
        </h3>

        <div className="hidden items-center justify-between gap-8 xl:flex">
          {asSeenInLogos.map((item) => (
            <a
              key={item.name}
              target="_blank"
              rel="noopener noreferrer"
              href={item.href}
              className="opacity-70 transition duration-300 hover:opacity-100"
            >
              <img
                alt={item.name}
                src={item.src}
                width={item.width}
                height={item.height}
                className="h-8 w-auto max-w-[160px] select-none object-contain brightness-0 invert"
              />
            </a>
          ))}
        </div>

        <div className="relative w-full overflow-hidden py-2 xl:hidden">
          <div className="animate-marquee flex items-center gap-12" style={{ "--duration": "25s" } as React.CSSProperties}>
            {asSeenInLogos.map((item, idx) => (
              <a
                key={`m1-${idx}`}
                target="_blank"
                rel="noopener noreferrer"
                href={item.href}
                className="flex shrink-0 items-center"
              >
                <img
                  alt={item.name}
                  src={item.src}
                  className="h-7 w-auto max-w-[140px] select-none object-contain brightness-0 invert opacity-70"
                />
              </a>
            ))}
            {asSeenInLogos.map((item, idx) => (
              <a
                key={`m2-${idx}`}
                target="_blank"
                rel="noopener noreferrer"
                href={item.href}
                className="flex shrink-0 items-center"
              >
                <img
                  alt={item.name}
                  src={item.src}
                  className="h-7 w-auto max-w-[140px] select-none object-contain brightness-0 invert opacity-70"
                />
              </a>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#0a192f] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#0a192f] to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default AsSeenIn;

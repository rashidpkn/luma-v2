import React from "react";
import { asSeenInLogos } from "../../../data/homeData";

export const AsSeenIn: React.FC = () => {
  return (
    <section className="bg-white px-4 py-8 md:px-6 md:py-12" aria-labelledby="as-seen-in">
      <div className="mx-auto max-w-6xl border-y border-line py-8 md:py-10">
        <h2 id="as-seen-in" className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.22em] text-accent-dark">
          As Seen In
        </h2>

        <ul className="hidden items-center justify-between gap-8 xl:flex">
          {asSeenInLogos.map((item) => (
            <li key={item.name}>
              <a
                target="_blank"
                rel="noreferrer"
                href={item.href}
                className="opacity-80 hover:opacity-100"
              >
                <img
                  alt={item.name}
                  src={item.src}
                  width={item.width}
                  height={item.height}
                  className="h-8 w-auto max-w-[150px] object-contain"
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="relative w-full overflow-hidden xl:hidden">
          <div className="animate-marquee items-center gap-12" style={{ "--duration": "25s" } as React.CSSProperties}>
            {[0, 1].map((copy) =>
              asSeenInLogos.map((item) => (
                <a
                  key={`${copy}-${item.name}`}
                  target="_blank"
                  rel="noreferrer"
                  href={item.href}
                  className="flex shrink-0 items-center"
                >
                  <img
                    alt={item.name}
                    src={item.src}
                    className="h-7 w-auto max-w-[140px] object-contain"
                  />
                </a>
              )),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AsSeenIn;

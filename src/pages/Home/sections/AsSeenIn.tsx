import React from "react";
import { asSeenInLogos } from "../../../data/homeData";

export const AsSeenIn: React.FC = () => {
  return (
    <section className="bg-white px-4 py-12 md:px-6 md:py-16" aria-labelledby="as-seen-in">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:gap-10">
        <h2 id="as-seen-in" className="shrink-0 text-sm font-semibold text-navy">
          As Seen In
        </h2>
        <ul className="grid flex-1 grid-cols-2 items-center gap-x-6 gap-y-5 sm:grid-cols-3 lg:grid-cols-6">
          {asSeenInLogos.map((item) => (
            <li key={item.name} className="flex justify-center md:justify-start">
              <a href={item.href} target="_blank" rel="noreferrer">
                <img alt={item.name} src={item.src} width={item.width} height={item.height} className="h-7 w-auto max-w-[130px] object-contain" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AsSeenIn;

import React from "react";
import SiteLink from "../../../components/SiteLink";

const columns = [
  {
    title: "Traditional Bank",
    src: "/images/homev3/traditional/Digitap-Bank.png",
    highlight: false,
  },
  {
    title: "Crypto Exchange",
    src: "/images/homev3/traditional/digitapCoin.png",
    highlight: false,
  },
  {
    title: "Luma Pay",
    src: "/home images/Digitap Crypto Fiat Bank.png",
    highlight: true,
  },
];

export const ComparisonSection: React.FC = () => {
  return (
    <section id="compare" className="bg-navy py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="mb-10 text-center text-3xl font-semibold tracking-tight text-white sm:text-4xl md:mb-14 md:text-5xl">
          Traditional Bank vs Crypto Exchange
          <br className="hidden md:inline" /> vs Luma Pay
        </h2>

        <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center md:gap-4">
          {columns.map((column, index) => (
            <React.Fragment key={column.title}>
              {index > 0 && (
                <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-sky">
                  vs
                </p>
              )}
              <article
                className={`flex flex-col items-center rounded-3xl border px-5 py-8 text-center ${
                  column.highlight
                    ? "border-sky bg-[#10243f]"
                    : "border-white/10 bg-navy-deep"
                }`}
              >
                <div className="flex h-44 w-full items-center justify-center md:h-52">
                  <img
                    alt={column.title}
                    src={column.src}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-white">{column.title}</h3>
              </article>
            </React.Fragment>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl text-center md:mt-16">
          <p className="mb-8 text-lg font-medium leading-relaxed text-[#d5e2ee] md:text-2xl">
            Luma Pay is designed to provide exclusive benefits to our users, making global finance simpler, faster, and more rewarding.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <SiteLink href="#services" className="btn btn-primary">
              Explore Services
            </SiteLink>
            <SiteLink href="#get-started" className="btn btn-secondary-dark">
              Get Started
            </SiteLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;

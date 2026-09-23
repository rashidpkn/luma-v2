import React from "react";

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
    <section className="border-y border-white/10 bg-[#071422] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl md:mb-14 md:text-5xl">
          Traditional Bank vs Crypto Exchange
          <br className="hidden md:inline" /> vs Luma Pay
        </h2>

        <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center md:gap-5">
          {columns.map((column, index) => (
            <React.Fragment key={column.title}>
              {index > 0 && (
                <div className="flex items-center justify-center">
                  <span className="text-sm font-semibold tracking-[0.2em] text-[#90e0ef]">vs</span>
                </div>
              )}
              <article
                className={`flex flex-col items-center rounded-3xl border px-5 py-8 text-center ${
                  column.highlight
                    ? "border-main-blue/50 bg-[#112240] shadow-[0_0_40px_rgba(0,180,216,0.12)]"
                    : "border-white/10 bg-[#0a192f]"
                }`}
              >
                <div className="flex h-44 w-full items-center justify-center md:h-52">
                  <img
                    alt={column.title}
                    src={column.src}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="mt-6 text-lg font-semibold text-white">{column.title}</div>
              </article>
            </React.Fragment>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl text-center md:mt-16">
          <p className="mb-8 text-lg font-semibold text-gray-200 md:text-2xl">
            Luma Pay is designed to provide exclusive benefits to our users, making global finance simpler, faster, and more rewarding.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              target="_blank"
              rel="noreferrer"
              href="#services"
              className="btn-glow-shadow leftglow cursor-pointer rounded-full border border-main-blue bg-main-blue px-8 py-3.5 text-center text-base font-bold tracking-tight text-white transition-transform active:scale-95 sm:text-lg"
            >
              Explore Services
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
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;

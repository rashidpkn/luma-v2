import React from "react";
import SiteLink from "../../../components/SiteLink";

const columns = [
  { title: "Traditional Bank", src: "/images/homev3/traditional/Digitap-Bank.png", highlight: false },
  { title: "Crypto Exchange", src: "/images/homev3/traditional/digitapCoin.png", highlight: false },
  { title: "Luma Pay", src: "/home images/Digitap Crypto Fiat Bank.png", highlight: true },
];

export const ComparisonSection: React.FC = () => {
  return (
    <section id="compare" className="bg-white px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="display max-w-3xl text-4xl sm:text-5xl">
          Traditional Bank vs Crypto Exchange vs Luma Pay
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {columns.map((column) => (
            <article key={column.title} className={`rounded-[1.5rem] p-5 text-center md:p-6 ${column.highlight ? "bg-blue" : "bg-blue-soft"}`}>
              <div className="flex h-48 items-center justify-center">
                <img alt={column.title} src={column.src} className="max-h-full max-w-full object-contain" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-navy">{column.title}</h3>
            </article>
          ))}
        </div>
        <p className="lede mx-auto mt-10 max-w-3xl text-lg md:text-xl">
          Luma Pay is designed to provide exclusive benefits to our users, making global finance simpler, faster, and more rewarding.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <SiteLink href="#services" className="btn btn-primary">
            Explore Services
          </SiteLink>
          <SiteLink href="#get-started" className="btn btn-soft">
            Get Started
          </SiteLink>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;

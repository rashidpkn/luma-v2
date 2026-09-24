import React from "react";
import SiteLink from "../../../components/SiteLink";
import { whyChooseItems } from "../../../data/homeData";

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="bg-blue-soft px-4 py-16 text-navy md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        {whyChooseItems.map((item, index) => (
          <article key={item.id} className="grid items-center gap-6 border-t border-line py-10 md:grid-cols-12 md:gap-10 md:py-12">
            <p className="md:col-span-1">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue text-sm font-semibold text-navy">
                {String(index + 1).padStart(2, "0")}
              </span>
            </p>
            <div className="md:col-span-6">
              <h2 className="display text-3xl md:text-4xl">{item.title}</h2>
              <p className="lede mt-4 max-w-xl text-base md:text-lg">{item.description}</p>
            </div>
            <div className="md:col-span-5">
              <div className="flex justify-center rounded-[1.5rem] bg-blue px-4 py-6">
                <img alt={item.title} src={item.image} width={850} height={950} className="max-h-[260px] w-auto max-w-full object-contain" />
              </div>
            </div>
          </article>
        ))}
        <div className="flex flex-wrap gap-3 border-t border-line pt-10">
          <SiteLink href="#services" className="btn btn-primary">
            Explore Luma Pay Services
          </SiteLink>
          <SiteLink href="#get-started" className="btn btn-soft">
            Get Started
          </SiteLink>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

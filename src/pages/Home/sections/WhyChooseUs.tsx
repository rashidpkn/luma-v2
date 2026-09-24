import React from "react";
import SiteLink from "../../../components/SiteLink";
import { whyChooseItems } from "../../../data/homeData";

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="bg-white px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-5">
        {whyChooseItems.map((item, index) => (
          <article
            key={item.id}
            className="surface-card grid items-center gap-8 p-6 md:p-8 lg:grid-cols-2 lg:gap-12 lg:p-10"
          >
            <div className={item.imageRight ? "lg:order-1" : "lg:order-2"}>
              <p className="text-sm font-semibold tracking-[0.16em] text-accent-dark">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="pt-3 text-3xl font-semibold tracking-tight text-navy md:text-4xl">
                {item.title}
              </h2>
              <p className="max-w-xl pt-4 text-base leading-relaxed text-muted md:text-lg">
                {item.description}
              </p>
            </div>
            <div className={`flex justify-center ${item.imageRight ? "lg:order-2" : "lg:order-1"}`}>
              <div className="flex w-full items-center justify-center rounded-2xl bg-mist px-4 py-6">
                <img
                  alt={item.title}
                  src={item.image}
                  width={850}
                  height={950}
                  className="max-h-[260px] w-auto max-w-full object-contain md:max-h-[320px]"
                />
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-3 md:mt-14">
        <SiteLink href="#services" className="btn btn-primary">
          Explore Luma Pay Services
        </SiteLink>
        <SiteLink href="#get-started" className="btn btn-secondary">
          Get Started
        </SiteLink>
      </div>
    </section>
  );
};

export default WhyChooseUs;

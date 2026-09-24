import React from "react";
import SiteLink from "../../../components/SiteLink";

export const AppCtaBanner: React.FC = () => {
  return (
    <section id="get-started" className="bg-blue-soft px-4 py-12 md:px-6 md:py-16">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[1.75rem] bg-navy lg:grid-cols-2">
        <div className="flex flex-col justify-center px-6 py-12 md:px-12 md:py-16">
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Get the App.
            <br />
            Live on Your Terms.
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-[#d5e6f2] md:text-lg">
            One app. Total control. Tap to send, spend, swap, and stack your money — your way, no limits.
          </p>
          <SiteLink href="#get-started" className="btn btn-light mt-8 w-fit">
            Download the App
          </SiteLink>
        </div>
        <img src="/images/banner/cta-banner.webp" alt="" className="h-full min-h-[260px] w-full object-cover" />
      </div>
    </section>
  );
};

export default AppCtaBanner;

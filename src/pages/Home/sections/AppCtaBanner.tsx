import React from "react";
import SiteLink from "../../../components/SiteLink";

export const AppCtaBanner: React.FC = () => {
  return (
    <section id="get-started" className="bg-mist px-4 py-12 md:px-6 md:py-16">
      <div className="relative mx-auto min-h-[420px] max-w-6xl overflow-hidden rounded-3xl md:min-h-[480px]">
        <img
          src="/images/banner/cta-banner.webp"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="relative flex min-h-[420px] items-center p-4 sm:p-8 md:min-h-[480px] md:p-12">
          <div className="max-w-xl rounded-3xl bg-white p-6 md:p-10">
            <h2 className="text-4xl font-semibold leading-tight tracking-tight text-navy sm:text-5xl">
              Get the App. <br />
              Live on Your Terms.
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-muted md:text-lg">
              One app. Total control. Tap to send, spend, swap, and stack your money — your way, no limits.
            </p>
            <div className="mt-8">
              <SiteLink href="#get-started" className="btn btn-primary">
                Download the App
              </SiteLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppCtaBanner;

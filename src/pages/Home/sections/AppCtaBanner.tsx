import React from "react";

export const AppCtaBanner: React.FC = () => {
  return (
    <section className="font-primary relative overflow-hidden px-4 py-10 md:px-6 md:py-16">
      <div
        className="mx-auto flex min-h-[460px] w-full max-w-6xl items-center overflow-hidden rounded-3xl bg-cover bg-center bg-no-repeat md:min-h-[540px]"
        style={{
          backgroundImage: "url('/images/banner/cta-banner.webp')",
        }}
      >
        <div className="w-full px-5 py-12 md:px-12 md:py-16">
          <div className="max-w-xl rounded-3xl border border-white/10 bg-[#0a192f]/70 p-6 backdrop-blur-md md:p-10">
            <h2 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              Get the App. <br />
              Live on Your Terms.
            </h2>
            <p className="mt-4 max-w-lg text-base font-medium leading-relaxed text-gray-200 md:text-lg">
              One app. Total control. Tap to send, spend, swap, and stack your money — your way, no limits.
            </p>
            <div className="mt-8">
              <a
                target="_blank"
                rel="noreferrer"
                href="#get-started"
                className="btn-glow-shadow leftglow inline-flex cursor-pointer items-center rounded-full border border-main-blue bg-main-blue px-8 py-3.5 text-center text-base font-bold tracking-tight text-white transition-transform active:scale-95 sm:text-lg"
              >
                Download the App
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppCtaBanner;

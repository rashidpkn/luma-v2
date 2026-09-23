import React from "react";

export const PresaleBanner: React.FC = () => {
  return (
    <section
      className="relative overflow-hidden border-y border-white/10 bg-[#0b0b0b] bg-cover bg-center bg-no-repeat py-16 text-white md:py-24"
      style={{ backgroundImage: "url('/images/homev3/banner/CryptoPresaleBG.webp')" }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[#071422]/80" />

      <div className="relative z-10 mx-auto max-w-3xl px-4">
        <div className="rounded-3xl border border-white/10 bg-[#0a192f]/75 px-6 py-10 text-center backdrop-blur-md md:px-12 md:py-14">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl">
            Don’t Miss Luma Pay Early Access – Limited Time Opportunity
          </h2>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-gray-300 md:text-lg">
            <p>
              The Luma Pay early access program is live for a short time. Early supporters gain the best entry benefits and maximum rewards before the full public launch.
            </p>
            <p>
              By joining now, you unlock enhanced cashback on international transfers, reduced foreign exchange fees on the Luma Pay
              platform, and early access to premium features. Early members also gain priority support,
              exclusive partner rewards, and special benefits within the Luma Pay ecosystem.
            </p>
            <p className="font-semibold text-white">
              Thousands of users from all over the globe have already secured their Luma Pay early access.
            </p>
          </div>

          <div className="mt-8 flex items-center justify-center">
            <a
              target="_blank"
              rel="noreferrer"
              href="#early-access"
              className="btn-glow-shadow leftglow cursor-pointer rounded-full border border-main-blue bg-main-blue px-8 py-4 text-center text-lg font-bold tracking-tight text-white transition-transform active:scale-95 md:px-10 md:text-xl"
            >
              Join Luma Pay Early Access
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresaleBanner;

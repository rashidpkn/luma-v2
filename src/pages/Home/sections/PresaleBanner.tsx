import React from "react";

export const PresaleBanner: React.FC = () => {
  return (
    <section
      className="relative bg-[#0b0b0b] bg-contain md:bg-cover bg-center bg-no-repeat text-white overflow-hidden py-20 md:py-28 my-10 border-y border-white/5"
      style={{ backgroundImage: "url('/images/homev3/banner/CryptoPresaleBG.webp')" }}
    >
      <div className="absolute inset-0 bg-black/70 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 text-center z-10">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight max-w-4xl mx-auto text-white">
          Don’t Miss Luma Pay Early Access – Limited Time Opportunity
        </h2>

        <div className="mt-6 max-w-3xl mx-auto text-base md:text-lg text-gray-300 space-y-4 leading-relaxed">
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

        <div className="flex items-center justify-center mt-10">
          <a
            target="_blank"
            rel="noreferrer"
            href="#early-access"
            className="btn-glow-shadow leftglow border border-main-blue px-8 md:px-10 py-4 text-lg md:text-xl text-center tracking-tighter text-[#0f1d16] font-bold bg-main-blue rounded-full cursor-pointer transition-transform active:scale-95"
          >
            Join Luma Pay Early Access
          </a>
        </div>
      </div>
    </section>
  );
};

export default PresaleBanner;

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
          Don’t Miss the $TAP Crypto Presale – Limited Time Opportunity
        </h2>

        <div className="mt-6 max-w-3xl mx-auto text-base md:text-lg text-gray-300 space-y-4 leading-relaxed">
          <p>
            The $TAP crypto presale is live for a short time, and each phase brings a higher price and reduced
            bonus allocation. Early supporters gain the best entry price and maximum staking rewards before public
            launch.
          </p>
          <p>
            By joining now, you unlock enhanced crypto fiat bank cashback, reduced transaction fees on the DigiTap
            crypto fiat banking application, and early access to premium features. $TAP holders also gain staking
            rewards, community voting rights, and exclusive benefits within the DigiTap ecosystem.
          </p>
          <p className="font-semibold text-white">
            Thousands of users from all over the globe have already joined the $TAP crypto presale.
          </p>
        </div>

        <div className="flex items-center justify-center mt-10">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://presale.digitap.app/login"
            className="btn-glow-shadow leftglow border border-main-green px-8 md:px-10 py-4 text-lg md:text-xl text-center tracking-tighter text-[#0f1d16] font-bold bg-main-green rounded-full cursor-pointer transition-transform active:scale-95"
          >
            Join $TAP Crypto Presale
          </a>
        </div>
      </div>
    </section>
  );
};

export default PresaleBanner;

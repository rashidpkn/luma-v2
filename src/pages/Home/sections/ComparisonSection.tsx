import React from "react";

export const ComparisonSection: React.FC = () => {
  return (
    <section className="bg-black py-16 md:py-24 border-y border-white/10">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Headline */}
        <h2 className="text-center text-3xl sm:text-4xl xl:text-[54px] xl:leading-[62px] text-white font-bold tracking-tighter mb-12 md:mb-16">
          Traditional Bank vs Crypto Exchange
          <br className="hidden md:inline" /> vs Luma Pay
        </h2>

        {/* 3 Columns Comparison */}
        <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap items-center justify-between gap-6 lg:gap-8">
          {/* Card 1: Traditional Bank */}
          <div className="flex-1 flex flex-col items-center text-center">
            <div className="w-44 h-44 md:w-52 md:h-52 relative flex items-center justify-center">
              <img
                alt="Traditional Bank"
                src="/images/homev3/traditional/Digitap-Bank.png"
                className="max-h-full max-w-full object-contain drop-shadow-xl"
              />
            </div>
            <div className="mt-6 text-lg text-white">Traditional Bank</div>
          </div>

          {/* VS Divider 1 */}
          <div className="flex items-center justify-center w-12 shrink-0">
            <span className="text-3xl text-white font-medium">vs</span>
          </div>

          {/* Card 2: Crypto Exchange */}
          <div className="flex-1 flex flex-col items-center text-center">
            <div className="w-44 h-44 md:w-52 md:h-52 relative flex items-center justify-center">
              <img
                alt="Crypto Exchange"
                src="/images/homev3/traditional/digitapCoin.png"
                className="max-h-full max-w-full object-contain drop-shadow-xl"
              />
            </div>
            <div className="mt-6 text-lg text-white">Crypto Exchange</div>
          </div>

          {/* VS Divider 2 */}
          <div className="flex items-center justify-center w-12 shrink-0">
            <span className="text-3xl text-white font-medium">vs</span>
          </div>

          {/* Card 3: Luma Pay */}
          <div className="flex-1 flex flex-col items-center text-center">
            <div className="w-44 h-44 md:w-52 md:h-52 relative flex items-center justify-center">
              <img
                alt="Luma Pay"
                src="/images/homev3/traditional/DigitapPhone.png"
                className="max-h-full max-w-full object-contain drop-shadow-2xl"
              />
            </div>
            <div className="mt-6 text-lg text-white">Luma Pay</div>
          </div>
        </div>

        {/* Benefits Note & CTAs */}
        <div className="mt-12 md:mt-16 max-w-3xl mx-auto text-center">
          <p className="text-lg md:text-2xl text-gray-200 font-semibold mb-8">
            Luma Pay is designed to provide exclusive benefits to our users, making global finance simpler, faster, and more rewarding.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4">
            <a
              target="_blank"
              rel="noreferrer"
              href="#services"
              className="btn-glow-shadow leftglow border border-main-blue px-8 py-3.5 text-base sm:text-lg text-center tracking-tighter text-white font-bold bg-main-blue rounded-full cursor-pointer transition-transform active:scale-95"
            >
              Explore Services
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="#get-started"
              className="darkbtn border border-main-blue bg-[#112240] px-8 py-3.5 text-base sm:text-lg text-center tracking-tighter text-main-blue font-semibold hover:bg-[#112240]/80 rounded-full cursor-pointer transition-all"
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

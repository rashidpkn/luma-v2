import React from "react";

export const HowItWorks: React.FC = () => {
  return (
    <section className="overflow-hidden xl:overflow-visible max-w-7xl mx-auto px-4 font-primary my-12 md:my-20">
      {/* Section Headline */}
      <h2 className="max-w-5xl mx-auto text-4xl xl:text-[60px] xl:leading-[68px] text-center text-heading font-bold tracking-tighter pt-6 pb-4">
        Multi-Currency Accounts & Foreign Exchange - Your world. One app.
      </h2>

      {/* 1. How It Works Banner (Rocket Background) */}
      <div
        className="flex flex-col lg:flex-row justify-center items-center my-8 rounded-2xl bg-black md:bg-transparent bg-cover bg-center md:gap-10 py-10 xl:py-20 px-4 md:px-10"
        style={{ backgroundImage: "url('/images/homev3/poweryYour/rocketnew.webp')" }}
      >
        <div className="xl:w-3/5 text-center lg:text-left">
          <h2 className="text-3xl leading-[30px] md:text-[40px] md:leading-[46px] text-[#F2F2F2] font-bold tracking-tighter pt-4">
            How it works
          </h2>
          <p className="text-lg text-paragraph-200 tracking-tight leading-[26px] pt-2 md:pr-20">
            Choose a{" "}
            <a className="underline text-main-green hover:underline transition-all duration-300" href="/plans">
              plan
            </a>{" "}
            that suits your lifestyle—Personal or Business—then seamlessly manage both
            fiat and digital currencies from a single application. Enjoy a
            simple interface, perform all operations effortlessly, and handle any cross-border transactions without needing
            multiple platforms and apps.
            <br />
            <br />
            1. Download the app from Google or Apple
            <br />
            2. Choose your account type &amp; plan
            <br />
            3. Add money - Top up via wire, card, or digital transfer
            <br />
            4. Send globally, exchange instantly, pay &amp; earn rewards
          </p>
        </div>
        <div className="hidden xl:block xl:w-2/5" />
      </div>

      {/* 2. Physical & Virtual Debit Cards */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 mt-16">
        <div className="w-full relative bg-white flex xl:block flex-col xl:flex-row justify-center items-center xl:pt-0">
          <img
            alt="fiat"
            src="/images/homev3/poweryYour/wallet.png"
            width={300}
            height={200}
            className="select-none mx-auto max-h-[350px] object-contain"
          />
        </div>
        <div className="w-full text-center lg:text-left">
          <h2 className="text-3xl leading-[30px] md:text-[40px] md:leading-[46px] text-heading font-bold tracking-tighter pt-4">
            Physical &amp; Virtual Debit Cards
          </h2>
          <p className="text-lg text-paragraph tracking-tight leading-[26px] pt-2">
            Spend locally or internationally. Get a virtual card instantly for online shopping. Request a physical card
            to use in shops, ATMs, or anywhere Visa is accepted. Spend from any of your multi-currency accounts, pay in any other currency, and let Luma Pay handle the exchange seamlessly.
          </p>
        </div>
      </div>

      {/* 3. Join the Luma Pay Rewards Program (Arrow Background) */}
      <div
        className="flex flex-col lg:flex-row justify-center items-center mb-8 rounded-2xl bg-black md:bg-transparent bg-cover bg-center md:gap-10 mt-10 py-9 xl:py-32 px-4 md:px-10"
        style={{ backgroundImage: "url('/images/homev3/poweryYour/arrowUpdated.webp')" }}
      >
        <div className="xl:w-3/5 text-center lg:text-left">
          <h2 className="text-3xl leading-[30px] md:text-[40px] md:leading-[46px] text-[#F2F2F2] font-bold tracking-tighter md:pt-4">
            Join the Luma Pay Rewards Program
          </h2>
          <p className="text-lg text-paragraph-200 tracking-tight leading-[26px] pt-2 md:pr-16">
            <a
              target="_blank"
              rel="noreferrer"
              href="#rewards"
              className="underline text-main-green hover:underline transition-all duration-300"
            >
              Our Loyalty Program
            </a>{" "}
            offers exclusive perks to our users. Upgrade your account and get real
            benefits: better exchange rates, lower transfer fees, and cashback on every transaction. Take full advantage of our financial ecosystem to make your money work harder for you.
          </p>
        </div>
        <div className="hidden xl:block xl:w-2/5" />
      </div>
    </section>
  );
};

export default HowItWorks;

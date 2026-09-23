import React from "react";

export const HowItWorks: React.FC = () => {
  return (
    <section className="overflow-hidden xl:overflow-visible max-w-7xl mx-auto px-4 font-primary my-12 md:my-20">
      {/* Section Headline */}
      <h2 className="max-w-5xl mx-auto text-3xl sm:text-4xl xl:text-[60px] xl:leading-[68px] text-center text-heading font-bold tracking-tighter pt-4 pb-12">
        Crypto Fiat Banking - Your money. Your world. One tap.
      </h2>

      {/* 1. How It Works Banner (Rocket Background) */}
      <div
        className="flex flex-col lg:flex-row justify-between items-center my-8 rounded-3xl bg-black md:bg-cover md:bg-center md:gap-10 py-10 xl:py-20 px-6 md:px-12 border border-white/10 shadow-2xl relative overflow-hidden"
        style={{ backgroundImage: "url('/images/homev3/poweryYour/rocketnew.webp')" }}
      >
        <div className="absolute inset-0 bg-black/40 lg:hidden pointer-events-none" />
        <div className="xl:w-3/5 text-center lg:text-left relative z-10">
          <h3 className="text-3xl leading-tight md:text-4xl text-white font-bold tracking-tighter">
            How it works
          </h3>
          <p className="text-base md:text-lg text-gray-300 tracking-tight leading-relaxed pt-3">
            Choose a{" "}
            <a href="/plans" className="underline text-main-green hover:text-white transition-colors">
              plan
            </a>{" "}
            that suits your lifestyle, Wallet, Virtual, Pro, Premium or Business, then seamlessly manage both
            crypto and fiat from a single application supporting bank account numbers and crypto wallets. Enjoy a
            simple interface, perform all operations effortlessly, and handle any transactions without needing
            multiple platforms and apps.
          </p>
          <div className="mt-5 space-y-1.5 text-base md:text-lg text-gray-200 font-medium">
            <p>1. Download the app from Google or Apple</p>
            <p>2. Choose your handle &amp; plan</p>
            <p>3. Add money - Top up with crypto, card or bank wire</p>
            <p>4. Tap it, send it, stack it, pay &amp; earn rewards</p>
          </div>
        </div>
        <div className="xl:w-2/5" />
      </div>

      {/* 2. Physical & Virtual Debit Cards */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 mt-16 md:mt-24">
        <div className="w-full flex justify-center items-center">
          <img
            alt="Physical and Virtual Debit Cards"
            src="/images/homev3/poweryYour/wallet.png"
            width={380}
            height={280}
            className="select-none mx-auto max-h-[350px] object-contain drop-shadow-2xl"
          />
        </div>
        <div className="w-full text-center lg:text-left">
          <h3 className="text-3xl leading-tight md:text-4xl text-heading font-bold tracking-tighter">
            Physical &amp; Virtual Debit Cards
          </h3>
          <p className="text-base md:text-lg text-paragraph tracking-tight leading-relaxed pt-3">
            Spend Crypto or Fiat, anywhere. Get a virtual card instantly for online shopping. Request a physical card
            to use in shops, ATMs, or anywhere Visa is accepted. Spend from any of your currencies, pay in any other,
            the app handles it.
          </p>
        </div>
      </div>

      {/* 3. Join the $TAP Crypto Presale (Arrow Background) */}
      <div
        className="flex flex-col lg:flex-row justify-between items-center my-12 rounded-3xl bg-black md:bg-cover md:bg-center md:gap-10 py-10 xl:py-24 px-6 md:px-12 border border-white/10 shadow-2xl relative overflow-hidden"
        style={{ backgroundImage: "url('/images/homev3/poweryYour/arrowUpdated.webp')" }}
      >
        <div className="absolute inset-0 bg-black/40 lg:hidden pointer-events-none" />
        <div className="xl:w-3/5 text-center lg:text-left relative z-10">
          <h3 className="text-3xl leading-tight md:text-4xl text-white font-bold tracking-tighter">
            Join the $TAP Crypto Presale
          </h3>
          <p className="text-base md:text-lg text-gray-300 tracking-tight leading-relaxed pt-3">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://presale.digitap.app/"
              className="underline text-main-green hover:text-white transition-colors"
            >
              $TAP
            </a>{" "}
            is our utility and loyalty program token, not just a speculative asset. Hold it, and you get real
            benefits: better exchange rates, lower fees, cashback on every transaction. You can stake it for passive
            income or use it to vote on product features. It&apos;s the token that actually does something.
          </p>
        </div>
        <div className="xl:w-2/5" />
      </div>
    </section>
  );
};

export default HowItWorks;

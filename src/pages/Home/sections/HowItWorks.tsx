import React from "react";
import SiteLink from "../../../components/SiteLink";

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="bg-mist px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mx-auto max-w-4xl text-center text-3xl font-semibold tracking-tight text-navy md:text-4xl lg:text-5xl lg:leading-tight">
          Multi-Currency Accounts &amp; Foreign Exchange - Your world. One app.
        </h2>

        <div className="mt-10 overflow-hidden rounded-3xl bg-navy md:mt-12 md:grid md:grid-cols-2">
          <div className="px-5 py-10 sm:px-8 md:py-14 lg:px-12">
            <h3 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              How it works
            </h3>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-[#d5e2ee] md:text-lg">
              <p>
                Choose a{" "}
                <SiteLink href="/plans" className="text-sky underline decoration-sky/60 underline-offset-2">
                  plan
                </SiteLink>{" "}
                that suits your lifestyle—Personal or Business—then seamlessly manage both
                fiat and digital currencies from a single application. Enjoy a
                simple interface, perform all operations effortlessly, and handle any cross-border transactions without needing
                multiple platforms and apps.
              </p>
              <ol className="list-decimal space-y-1 pl-5">
                <li>Download the app from Google or Apple</li>
                <li>Choose your account type &amp; plan</li>
                <li>Add money - Top up via wire, card, or digital transfer</li>
                <li>Send globally, exchange instantly, pay &amp; earn rewards</li>
              </ol>
            </div>
          </div>
          <div className="relative min-h-[220px]">
            <img
              src="/home images/How it works.png"
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-right"
            />
          </div>
        </div>

        <article className="surface-card mt-6 grid items-center gap-8 p-6 md:p-10 lg:grid-cols-2">
          <img
            alt="Physical and virtual Luma Pay debit cards"
            src="/home images/Physical & Virtual Debit Cards.png"
            width={1600}
            height={1386}
            className="mx-auto max-h-[320px] w-auto max-w-full object-contain"
          />
          <div>
            <h3 className="text-3xl font-semibold tracking-tight text-navy md:text-4xl">
              Physical &amp; Virtual Debit Cards
            </h3>
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
              Spend locally or internationally. Get a virtual card instantly for online shopping. Request a physical card
              to use in shops, ATMs, or anywhere Visa is accepted. Spend from any of your multi-currency accounts, pay in any other currency, and let Luma Pay handle the exchange seamlessly.
            </p>
          </div>
        </article>

        <div id="rewards" className="mt-6 overflow-hidden rounded-3xl bg-navy md:grid md:grid-cols-2">
          <div className="px-5 py-10 sm:px-8 md:py-14 lg:px-12">
            <h3 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Join the Luma Pay Rewards Program
            </h3>
            <p className="mt-4 text-base leading-relaxed text-[#d5e2ee] md:text-lg">
              <SiteLink
                href="#rewards"
                className="text-sky underline decoration-sky/60 underline-offset-2"
              >
                Our Loyalty Program
              </SiteLink>{" "}
              offers exclusive perks to our users. Upgrade your account and get real
              benefits: better exchange rates, lower transfer fees, and cashback on every transaction. Take full advantage of our financial ecosystem to make your money work harder for you.
            </p>
          </div>
          <div className="relative min-h-[220px]">
            <img
              src="/home images/Crypto Presale.png"
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-right"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

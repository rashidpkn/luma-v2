import React from "react";
import SiteLink from "../../../components/SiteLink";

const steps = [
  "Download the app from Google or Apple",
  "Choose your account type & plan",
  "Add money - Top up via wire, card, or digital transfer",
  "Send globally, exchange instantly, pay & earn rewards",
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="bg-blue-soft px-4 py-16 text-navy md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="display max-w-4xl text-4xl sm:text-5xl">
          Multi-Currency Accounts &amp; Foreign Exchange - Your world. One app.
        </h2>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-navy md:text-3xl">How it works</h3>
            <p className="lede mt-4 text-base md:text-lg">
              Choose a{" "}
              <SiteLink href="/plans" className="link-quiet">
                plan
              </SiteLink>{" "}
              that suits your lifestyle—Personal or Business—then seamlessly manage both fiat and digital currencies from a single application. Enjoy a simple interface, perform all operations effortlessly, and handle any cross-border transactions without needing multiple platforms and apps.
            </p>
          </div>
          <ol className="grid gap-3 sm:grid-cols-2">
            {steps.map((step, index) => (
              <li key={step} className="rounded-2xl bg-navy p-4 text-[#e8f4fc]">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue text-sm font-semibold text-navy">0{index + 1}</span>
                <p className="mt-2 text-sm font-medium leading-relaxed">{step}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-10 h-64 overflow-hidden rounded-[1.5rem] bg-navy md:h-96">
          <img
            src="/home images/How it works.png"
            alt=""
            className="h-full w-full object-cover object-right"
          />
        </div>

        <article className="mt-6 grid items-center gap-8 rounded-[1.75rem] bg-navy p-5 text-[#e8f4fc] md:p-10 lg:grid-cols-2">
          <div className="rounded-[1.25rem] bg-blue px-4 py-8">
            <img
              alt="Physical and virtual Luma Pay debit cards"
              src="/home images/Physical & Virtual Debit Cards.png"
              width={1600}
              height={1386}
              className="mx-auto max-h-[300px] w-auto max-w-full object-contain"
            />
          </div>
          <div>
            <h3 className="display text-3xl md:text-4xl">Physical &amp; Virtual Debit Cards</h3>
            <p className="lede mt-4 text-base md:text-lg">
              Spend locally or internationally. Get a virtual card instantly for online shopping. Request a physical card to use in shops, ATMs, or anywhere Visa is accepted. Spend from any of your multi-currency accounts, pay in any other currency, and let Luma Pay handle the exchange seamlessly.
            </p>
          </div>
        </article>

        <div id="rewards" className="mt-6 grid items-center gap-8 rounded-[1.75rem] bg-navy p-5 text-[#e8f4fc] md:p-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h3 className="display text-3xl md:text-4xl">Join the Luma Pay Rewards Program</h3>
            <p className="lede mt-4 text-base md:text-lg">
              <SiteLink href="#rewards" className="link-quiet">
                Our Loyalty Program
              </SiteLink>{" "}
              offers exclusive perks to our users. Upgrade your account and get real benefits: better exchange rates, lower transfer fees, and cashback on every transaction. Take full advantage of our financial ecosystem to make your money work harder for you.
            </p>
          </div>
          <img src="/home images/Crypto Presale.png" alt="" className="h-64 w-full rounded-2xl object-cover object-right md:h-80" />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

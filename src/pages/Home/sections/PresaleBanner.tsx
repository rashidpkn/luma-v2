import React from "react";
import SiteLink from "../../../components/SiteLink";

export const PresaleBanner: React.FC = () => {
  return (
    <section id="early-access" className="bg-white px-4 pb-8 md:px-6">
      <div className="mx-auto max-w-6xl rounded-[1.75rem] bg-blue px-5 py-12 md:px-14 md:py-16">
        <div className="max-w-3xl">
          <h2 className="display text-3xl sm:text-4xl md:text-5xl">
            Don’t Miss Luma Pay Early Access – Limited Time Opportunity
          </h2>
          <div className="lede mt-6 space-y-4 text-base md:text-lg">
            <p>
              The Luma Pay early access program is live for a short time. Early supporters gain the best entry benefits and maximum rewards before the full public launch.
            </p>
            <p>
              By joining now, you unlock enhanced cashback on international transfers, reduced foreign exchange fees on the Luma Pay platform, and early access to premium features. Early members also gain priority support, exclusive partner rewards, and special benefits within the Luma Pay ecosystem.
            </p>
            <p className="font-semibold text-navy">
              Thousands of users from all over the globe have already secured their Luma Pay early access.
            </p>
          </div>
          <SiteLink href="#early-access" className="btn btn-primary mt-8">
            Join Luma Pay Early Access
          </SiteLink>
        </div>
      </div>
    </section>
  );
};

export default PresaleBanner;

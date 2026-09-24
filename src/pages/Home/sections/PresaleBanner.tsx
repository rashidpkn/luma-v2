import React from "react";
import SiteLink from "../../../components/SiteLink";

export const PresaleBanner: React.FC = () => {
  return (
    <section id="early-access" className="bg-navy px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white px-6 py-10 text-center md:px-12 md:py-14">
        <h2 className="text-3xl font-semibold leading-tight tracking-tight text-navy md:text-4xl">
          Don’t Miss Luma Pay Early Access – Limited Time Opportunity
        </h2>
        <div className="mt-6 space-y-4 text-base leading-relaxed text-muted md:text-lg">
          <p>
            The Luma Pay early access program is live for a short time. Early supporters gain the best entry benefits and maximum rewards before the full public launch.
          </p>
          <p>
            By joining now, you unlock enhanced cashback on international transfers, reduced foreign exchange fees on the Luma Pay
            platform, and early access to premium features. Early members also gain priority support,
            exclusive partner rewards, and special benefits within the Luma Pay ecosystem.
          </p>
          <p className="font-semibold text-navy">
            Thousands of users from all over the globe have already secured their Luma Pay early access.
          </p>
        </div>
        <div className="mt-8 flex justify-center">
          <SiteLink href="#early-access" className="btn btn-primary">
            Join Luma Pay Early Access
          </SiteLink>
        </div>
      </div>
    </section>
  );
};

export default PresaleBanner;

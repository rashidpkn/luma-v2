import React from "react";
import Hero from "./sections/Hero";
import StatsBar from "./sections/StatsBar";
import AsSeenIn from "./sections/AsSeenIn";
import HowItWorks from "./sections/HowItWorks";
import WhatIsDigiTap from "./sections/WhatIsDigiTap";
import ComparisonSection from "./sections/ComparisonSection";
import SupportedCorridors from "./sections/SupportedCorridors";
import WhyChooseUs from "./sections/WhyChooseUs";
import InterfaceShowcase from "./sections/InterfaceShowcase";
import FeaturesGrid from "./sections/FeaturesGrid";
import PresaleBanner from "./sections/PresaleBanner";
import AppCtaBanner from "./sections/AppCtaBanner";

export const HomePage: React.FC = () => {
  return (
    <div className="w-full flex flex-col">
      {/* 1. Hero Section with Video Background */}
      <Hero />

      {/* 2. Media Partners "As Seen In" Marquee (social proof after the hook) */}
      <AsSeenIn />

      {/* 3. Key Stats Metrics Bar (metrics reinforce credibility) */}
      <StatsBar />

      {/* 4. What is Luma Pay & Core Features */}
      <WhatIsDigiTap />

      {/* 5. Complete Crypto Fiat Bank Features 6-Card Grid */}
      <FeaturesGrid />

      {/* 6. How It Works, Debit Cards, and Presale */}
      <HowItWorks />

      {/* 7. Why Choose Luma Pay 10 Features */}
      <WhyChooseUs />

      {/* 8. Luma Pay App Interface Showcase */}
      <InterfaceShowcase />

      {/* 9. Supported Corridors */}
      <SupportedCorridors />

      {/* 10. Comparison: Traditional Bank vs Crypto Exchange vs Luma Pay */}
      <ComparisonSection />

      {/* 11. Presale Limited Time Opportunity */}
      <PresaleBanner />

      {/* 12. Final CTA Banner to Download App */}
      <AppCtaBanner />
    </div>
  );
};

export default HomePage;

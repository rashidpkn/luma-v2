import React from "react";
import Hero from "./sections/Hero";
import StatsBar from "./sections/StatsBar";
import AsSeenIn from "./sections/AsSeenIn";
import WhatIsDigiTap from "./sections/WhatIsDigiTap";
import HowItWorks from "./sections/HowItWorks";
import FeaturesGrid from "./sections/FeaturesGrid";
import WhyChooseUs from "./sections/WhyChooseUs";
import ComparisonSection from "./sections/ComparisonSection";
import SupportedCorridors from "./sections/SupportedCorridors";
import InterfaceShowcase from "./sections/InterfaceShowcase";
import PresaleBanner from "./sections/PresaleBanner";
import AppCtaBanner from "./sections/AppCtaBanner";

export const HomePage: React.FC = () => {
  return (
    <div className="flex w-full flex-col">
      <Hero />
      <StatsBar />
      <AsSeenIn />
      <WhatIsDigiTap />
      <HowItWorks />
      <FeaturesGrid />
      <WhyChooseUs />
      <ComparisonSection />
      <SupportedCorridors />
      <InterfaceShowcase />
      <PresaleBanner />
      <AppCtaBanner />
    </div>
  );
};

export default HomePage;

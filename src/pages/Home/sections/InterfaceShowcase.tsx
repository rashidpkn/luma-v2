import React from "react";

export const InterfaceShowcase: React.FC = () => {
  return (
    <section
      aria-label="DigiTap App Interface Showcase"
      className="relative bg-[#0b0b0b] bg-cover bg-center bg-no-repeat text-white overflow-hidden h-[400px] sm:h-[550px] md:h-[750px] w-full border-y border-white/5"
      style={{ backgroundImage: "url('/images/homev3/app-interface/bgImageUpdated.webp')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/40 pointer-events-none" />
    </section>
  );
};

export default InterfaceShowcase;

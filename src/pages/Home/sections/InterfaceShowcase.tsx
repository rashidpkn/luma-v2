import React from "react";

export const InterfaceShowcase: React.FC = () => {
  return (
    <section aria-label="Luma Pay App Interface Showcase" className="px-4 py-6 md:px-6 md:py-10">
      <div
        className="mx-auto h-[420px] w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b0b] bg-cover bg-center bg-no-repeat sm:h-[520px] md:h-[680px]"
        style={{ backgroundImage: "url('/images/homev3/app-interface/bgImageUpdated.webp')" }}
      />
    </section>
  );
};

export default InterfaceShowcase;

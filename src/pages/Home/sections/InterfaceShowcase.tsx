import React from "react";

export const InterfaceShowcase: React.FC = () => {
  return (
    <section aria-label="Luma Pay app interface" className="bg-mist px-4 py-6 md:px-6 md:py-10">
      <div className="surface-card mx-auto max-w-6xl overflow-hidden">
        <img
          src="/images/homev3/app-interface/blue-collage.jpg"
          alt="Luma Pay app screens for accounts, cards, exchange, and payments"
          className="h-auto w-full object-contain"
        />
      </div>
    </section>
  );
};

export default InterfaceShowcase;

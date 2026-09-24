import React from "react";

export const InterfaceShowcase: React.FC = () => {
  return (
    <section aria-label="Luma Pay app interface" className="bg-white px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[1.75rem] bg-blue p-3 shadow-[0_16px_40px_rgba(10,37,64,0.06)] md:p-4">
        <img
          src="/images/homev3/app-interface/blue-collage.jpg"
          alt="Luma Pay app screens for accounts, cards, exchange, and payments"
          className="h-auto w-full rounded-[1.25rem] object-contain"
        />
      </div>
    </section>
  );
};

export default InterfaceShowcase;

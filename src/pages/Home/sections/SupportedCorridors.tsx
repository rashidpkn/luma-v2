import React from "react";

const corridors = [
  "Canada",
  "United Kingdom",
  "Germany",
  "Netherlands",
  "Ireland",
  "United States",
  "Australia",
];

export const SupportedCorridors: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#0a192f] px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center">
        <h2 className="mb-5 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          Serving Clients Across Our <br className="hidden md:inline" /> Supported Corridors
        </h2>

        <p className="mb-12 max-w-3xl text-center text-base leading-relaxed text-[#c2c7c5] md:text-lg">
          Luma Pay's planned corridors cover Canada, the United Kingdom, the European Union
          (Germany, the Netherlands and Ireland), the United States and Australia. Additional
          markets will be added only once they are formally assessed, approved and reflected in our
          compliance documentation.
        </p>

        <div className="relative mb-10 w-full max-w-5xl rounded-3xl border border-white/10 bg-[#071422] p-4 md:p-8">
          <img
            src="/corridor-map.svg"
            alt="Supported Corridors Map"
            className="h-auto w-full"
          />
        </div>

        <div className="grid w-full max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {corridors.map((country) => (
            <div
              key={country}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#112240] px-5 py-4 text-white"
            >
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-main-blue shadow-[0_0_8px_#00b4d8]" />
              <span className="font-medium">{country}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportedCorridors;

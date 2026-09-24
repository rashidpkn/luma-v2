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
    <section className="bg-mist px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center">
        <h2 className="mb-5 text-center text-3xl font-semibold tracking-tight text-navy sm:text-4xl md:text-5xl">
          Serving Clients Across Our <br className="hidden md:inline" /> Supported Corridors
        </h2>
        <p className="mb-10 max-w-3xl text-center text-base leading-relaxed text-muted md:text-lg">
          Luma Pay's planned corridors cover Canada, the United Kingdom, the European Union
          (Germany, the Netherlands and Ireland), the United States and Australia. Additional
          markets will be added only once they are formally assessed, approved and reflected in our
          compliance documentation.
        </p>

        <div className="surface-card mb-8 w-full max-w-5xl p-4 md:p-8">
          <img
            src="/corridor-map.svg"
            alt="Map of Luma Pay supported corridors"
            className="h-auto w-full"
          />
        </div>

        <div className="w-full min-w-0 overflow-x-auto" tabIndex={0} aria-label="Supported countries">
          <ul className="mx-auto flex w-max flex-nowrap items-center gap-3">
            {corridors.map((country) => (
              <li
                key={country}
                className="surface-card flex shrink-0 items-center gap-3 px-4 py-3 text-navy"
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-accent" />
                <span className="whitespace-nowrap text-sm font-medium">{country}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SupportedCorridors;

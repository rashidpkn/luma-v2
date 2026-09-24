import React from "react";

const corridors = ["Canada", "United Kingdom", "Germany", "Netherlands", "Ireland", "United States", "Australia"];

export const SupportedCorridors: React.FC = () => {
  return (
    <section className="bg-blue-soft px-4 py-16 text-navy md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 lg:grid-cols-12">
          <h2 className="display text-4xl sm:text-5xl lg:col-span-5">Serving Clients Across Our Supported Corridors</h2>
          <p className="lede text-base md:text-lg lg:col-span-7">
            Luma Pay's planned corridors cover Canada, the United Kingdom, the European Union (Germany, the Netherlands and Ireland), the United States and Australia. Additional markets will be added only once they are formally assessed, approved and reflected in our compliance documentation.
          </p>
        </div>
        <div className="mt-10 overflow-hidden rounded-[1.75rem] bg-navy p-4 md:p-8">
          <img src="/corridor-map.svg" alt="Map of Luma Pay supported corridors" className="h-auto w-full" />
        </div>
        <ul className="mt-6 flex flex-wrap gap-2">
          {corridors.map((country) => (
            <li key={country} className="rounded-full bg-navy px-4 py-2 text-sm font-medium text-[#e8f4fc]">
              {country}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SupportedCorridors;

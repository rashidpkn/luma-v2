import React from "react";

const corridors = [
  "Canada",
  "United Kingdom",
  "Germany",
  "Netherlands",
  "Ireland",
  "United States",
  "Australia"
];

export const SupportedCorridors: React.FC = () => {
  return (
    <section className="bg-[#0a192f] py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col items-center">
        {/* Header */}
        <h2 className="text-center text-3xl sm:text-4xl xl:text-[54px] xl:leading-[62px] text-white font-bold tracking-tighter mb-6">
          Serving Clients Across Our <br className="hidden md:inline" /> Supported Corridors
        </h2>
        
        {/* Description */}
        <p className="text-center text-lg md:text-xl text-[#c2c7c5] max-w-4xl mb-16">
          Luma Pay's planned corridors cover Canada, the United Kingdom, the European Union 
          (Germany, the Netherlands and Ireland), the United States and Australia. Additional 
          markets will be added only once they are formally assessed, approved and reflected in our 
          compliance documentation.
        </p>

        {/* Map */}
        <div className="w-full relative max-w-5xl mx-auto mb-16">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[88%] h-[72%] bg-[#00b4d8]/25 blur-[100px] rounded-full pointer-events-none" />
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#071422] shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,180,216,0.16),transparent_68%)]" />
            <img
              src="/corridor-map.svg"
              alt="World map highlighting Luma Pay corridors in Canada, the United Kingdom, Germany, the Netherlands, Ireland, the United States, and Australia"
              className="relative w-full h-auto"
            />
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-4">
          {corridors.map((country) => (
            <div 
              key={country}
              className="flex items-center gap-3 bg-[#112240] border border-[#0077b6]/30 px-6 py-3 rounded-full text-white font-medium shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl hover:shadow-[#00b4d8]/20"
            >
              <div className="w-3 h-3 rounded-full bg-[#00b4d8] shadow-[0_0_8px_#00b4d8]"></div>
              {country}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportedCorridors;

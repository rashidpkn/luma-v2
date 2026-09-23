import React from "react";

export const StatsBar: React.FC = () => {
  return (
    <section className="w-full bg-[#f5f5f5] py-10 md:py-12 border-b border-gray-200">
      <div className="max-w-7xl px-4 2xl:mx-auto w-full grid grid-cols-2 xl:grid-cols-5 items-center justify-center gap-6 md:gap-y-10 2xl:gap-x-6">
        {/* Stat 1 */}
        <div className="flex justify-center items-center md:flex-row flex-col gap-3 md:items-start text-center md:text-left">
          <div className="text-main-blue shrink-0">
            <svg width="44" height="44" viewBox="0 0 48 48" fill="none" className="text-main-blue-700">
              <circle cx="24" cy="24" r="22" stroke="#00b4d8" strokeWidth="2.5" />
              <path d="M12 24h24M24 12c-4 4-6 8-6 12s2 8 6 12M24 12c4 4 6 8 6 12s-2 8-6 12" stroke="#00b4d8" strokeWidth="2.5" />
            </svg>
          </div>
          <div>
            <div className="text-3xl md:text-4xl 2xl:text-[50px] font-bold text-[#0F1D16] leading-none">
              100+
            </div>
            <div className="text-xs md:text-sm font-semibold text-[#4A534F] mt-1">
              Countries Supported
            </div>
          </div>
        </div>

        {/* Stat 2 */}
        <div className="flex justify-center items-center md:flex-row flex-col gap-3 md:items-start text-center md:text-left">
          <div className="text-main-blue shrink-0">
            <svg width="44" height="44" viewBox="0 0 24 24" fill="#00b4d8">
              <path d="M19.435,4.065H4.565a2.5,2.5,0,0,0-2.5,2.5v10.87a2.5,2.5,0,0,0,2.5,2.5h14.87a2.5,2.5,0,0,0,2.5-2.5V6.565A2.5,2.5,0,0,0,19.435,4.065Zm1.5,9.93h-6.42a2,2,0,0,1,0-4h6.42Zm-6.42-5a3,3,0,0,0,0,6h6.42v2.44a1.5,1.5,0,0,1-1.5,1.5H4.565a1.5,1.5,0,0,1-1.5-1.5V6.565a1.5,1.5,0,0,1,1.5-1.5h14.87a1.5,1.5,0,0,1,1.5,1.5v2.43Z" />
              <circle cx="14.519" cy="11.996" r="1" />
            </svg>
          </div>
          <div>
            <div className="text-3xl md:text-4xl 2xl:text-[50px] font-bold text-[#0F1D16] leading-none">
              100K+
            </div>
            <div className="text-xs md:text-sm font-semibold text-[#4A534F] mt-1">
              Global Users
            </div>
          </div>
        </div>

        {/* Stat 3 */}
        <div className="flex justify-center items-center md:flex-row flex-col gap-3 md:items-start text-center md:text-left">
          <div className="text-main-blue shrink-0">
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#00b4d8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8M12 6v2m0 8v2" />
            </svg>
          </div>
          <div>
            <div className="text-3xl md:text-4xl 2xl:text-[50px] font-bold text-[#0F1D16] leading-none">
              30+
            </div>
            <div className="text-xs md:text-sm font-semibold text-[#4A534F] mt-1">
              Currencies Supported
            </div>
          </div>
        </div>

        {/* Stat 4 */}
        <div className="flex justify-center items-center md:flex-row flex-col gap-3 md:items-start text-center md:text-left">
          <div className="text-main-blue shrink-0">
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#00b4d8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </div>
          <div>
            <div className="text-3xl md:text-4xl 2xl:text-[50px] font-bold text-[#0F1D16] leading-none">
              5M+
            </div>
            <div className="text-xs md:text-sm font-semibold text-[#4A534F] mt-1">
              Transaction Volume
            </div>
          </div>
        </div>

        {/* Stat 5 */}
        <div className="col-span-2 xl:col-span-1 mx-auto xl:mx-0 flex justify-center items-center md:flex-row flex-col gap-3 md:items-start text-center md:text-left">
          <div className="text-main-blue shrink-0">
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#00b4d8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>
          <div>
            <div className="text-3xl md:text-4xl 2xl:text-[50px] font-bold text-[#0F1D16] leading-none">
              24/7/365
            </div>
            <div className="text-xs md:text-sm font-semibold text-[#4A534F] mt-1">
              Customer Support
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsBar;

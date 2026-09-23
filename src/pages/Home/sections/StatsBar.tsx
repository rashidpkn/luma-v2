import React from "react";

export const StatsBar: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto relative group">
        {/* Subtle Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-main-blue/20 via-transparent to-main-blue/20 blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-700" />
        
        {/* Glassmorphic Container */}
        <div className="relative w-full bg-[#112240]/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,180,216,0.15)] rounded-3xl py-10 md:py-14 px-6 md:px-12 grid grid-cols-2 xl:grid-cols-5 items-center justify-center gap-8 md:gap-y-12 2xl:gap-x-8 transition-all duration-500 hover:border-main-blue/30">
          
          {/* Stat 1 */}
          <div className="flex justify-center items-center md:flex-row flex-col gap-4 md:items-start text-center md:text-left group/stat">
            <div className="text-white shrink-0 bg-main-blue/10 p-3 rounded-2xl border border-main-blue/20 group-hover/stat:bg-main-blue group-hover/stat:scale-110 transition-all duration-300">
              <svg width="32" height="32" viewBox="0 0 48 48" fill="none" className="text-white">
                <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="3" />
                <path d="M12 24h24M24 12c-4 4-6 8-6 12s2 8 6 12M24 12c4 4 6 8 6 12s-2 8-6 12" stroke="currentColor" strokeWidth="3" />
              </svg>
            </div>
            <div>
              <div className="text-3xl md:text-4xl 2xl:text-[44px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 leading-none group-hover/stat:to-white transition-colors duration-300">
                100+
              </div>
              <div className="text-sm font-semibold text-main-blue mt-1.5 uppercase tracking-wider">
                Countries
              </div>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex justify-center items-center md:flex-row flex-col gap-4 md:items-start text-center md:text-left group/stat">
            <div className="text-white shrink-0 bg-main-blue/10 p-3 rounded-2xl border border-main-blue/20 group-hover/stat:bg-main-blue group-hover/stat:scale-110 transition-all duration-300">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.435,4.065H4.565a2.5,2.5,0,0,0-2.5,2.5v10.87a2.5,2.5,0,0,0,2.5,2.5h14.87a2.5,2.5,0,0,0,2.5-2.5V6.565A2.5,2.5,0,0,0,19.435,4.065Zm1.5,9.93h-6.42a2,2,0,0,1,0-4h6.42Zm-6.42-5a3,3,0,0,0,0,6h6.42v2.44a1.5,1.5,0,0,1-1.5,1.5H4.565a1.5,1.5,0,0,1-1.5-1.5V6.565a1.5,1.5,0,0,1,1.5-1.5h14.87a1.5,1.5,0,0,1,1.5,1.5v2.43Z" />
                <circle cx="14.519" cy="11.996" r="1.5" />
              </svg>
            </div>
            <div>
              <div className="text-3xl md:text-4xl 2xl:text-[44px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 leading-none group-hover/stat:to-white transition-colors duration-300">
                100K+
              </div>
              <div className="text-sm font-semibold text-main-blue mt-1.5 uppercase tracking-wider">
                Global Users
              </div>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex justify-center items-center md:flex-row flex-col gap-4 md:items-start text-center md:text-left group/stat">
            <div className="text-white shrink-0 bg-main-blue/10 p-3 rounded-2xl border border-main-blue/20 group-hover/stat:bg-main-blue group-hover/stat:scale-110 transition-all duration-300">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8M12 6v2m0 8v2" />
              </svg>
            </div>
            <div>
              <div className="text-3xl md:text-4xl 2xl:text-[44px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 leading-none group-hover/stat:to-white transition-colors duration-300">
                30+
              </div>
              <div className="text-sm font-semibold text-main-blue mt-1.5 uppercase tracking-wider">
                Currencies
              </div>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="flex justify-center items-center md:flex-row flex-col gap-4 md:items-start text-center md:text-left group/stat">
            <div className="text-white shrink-0 bg-main-blue/10 p-3 rounded-2xl border border-main-blue/20 group-hover/stat:bg-main-blue group-hover/stat:scale-110 transition-all duration-300">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <div>
              <div className="text-3xl md:text-4xl 2xl:text-[44px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 leading-none group-hover/stat:to-white transition-colors duration-300">
                5M+
              </div>
              <div className="text-sm font-semibold text-main-blue mt-1.5 uppercase tracking-wider">
                Tx Volume
              </div>
            </div>
          </div>

          {/* Stat 5 */}
          <div className="col-span-2 xl:col-span-1 mx-auto xl:mx-0 flex justify-center items-center md:flex-row flex-col gap-4 md:items-start text-center md:text-left group/stat">
            <div className="text-white shrink-0 bg-main-blue/10 p-3 rounded-2xl border border-main-blue/20 group-hover/stat:bg-main-blue group-hover/stat:scale-110 transition-all duration-300">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <div>
              <div className="text-3xl md:text-4xl 2xl:text-[44px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 leading-none group-hover/stat:to-white transition-colors duration-300">
                24/7
              </div>
              <div className="text-sm font-semibold text-main-blue mt-1.5 uppercase tracking-wider">
                Support
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StatsBar;

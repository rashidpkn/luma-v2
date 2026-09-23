import React, { useState, useEffect } from "react";

export const FloatingStickyBar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const isVisible = true;

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 15,
    minutes: 42,
    seconds: 25,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <div
      className={`fixed bottom-5 left-0 right-0 px-4 z-40 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full pointer-events-none"
      }`}
    >
      <div className="mx-auto max-w-5xl xl:max-w-[940px] rounded-2xl backdrop-blur-md bg-[#101d16]/95 border border-white/10 shadow-2xl gap-3 text-white py-2.5 px-3 md:px-4 flex items-center flex-wrap xl:flex-nowrap flex-col xl:flex-row">
        <div className="flex flex-col lg:flex-row items-center gap-x-3 gap-y-2 w-full overflow-hidden transition-all duration-500 ease-in-out">
          {/* Price pill */}
          <div
            className={`flex justify-between xl:justify-center items-center gap-2 md:gap-3 bg-[#242a28] h-[48px] md:h-[55px] px-3 md:px-4 rounded-lg w-full xl:w-auto transition-all ${
              isCollapsed ? "hidden lg:flex" : "flex"
            }`}
          >
            <div className="flex gap-x-1.5 md:gap-x-2.5 justify-center items-center">
              <span className="text-gray-400 text-xs md:text-sm font-medium">Limited offer</span>
              <span className="font-bold text-xs md:text-sm text-white">0% FX Fees</span>
              <span className="line-through text-xs md:text-sm text-gray-500">1.5% Fees</span>
            </div>
            <div>
              <span className="bg-main-green text-xs md:text-sm text-black font-bold px-2 py-0.5 rounded">
                100% Off
              </span>
            </div>
          </div>

          {/* Timer & Mobile Buy */}
          <div className="flex xl:flex-col flex-row lg:w-auto w-full gap-x-1">
            <div className="flex-1 bg-[#242a28] h-[48px] md:h-[55px] px-3 md:px-4 py-1.5 rounded-lg flex items-center justify-between xl:justify-center gap-2">
              <div className="xl:hidden flex">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="#early-access"
                  className="btn-glow-shadow leftglow border border-main-green px-3 py-1.5 text-xs text-[#0f1d16] font-bold bg-main-green rounded-full whitespace-nowrap"
                >
                  Join Now
                </a>
              </div>

              <div className="flex xl:gap-x-4 gap-x-1 xl:flex-row flex-col xl:justify-start justify-end xl:items-center items-end font-bold text-main-green w-full">
                <span className="text-gray-400 text-[11px] md:text-sm font-semibold whitespace-nowrap">
                  Offer ends in
                </span>
                <div className="flex flex-row gap-x-1 items-center">
                  <div className="flex flex-col items-center justify-center leading-tight w-7">
                    <span className="text-xs md:text-base tabular-nums font-bold text-white">
                      {formatNumber(timeLeft.days)}
                    </span>
                    <span className="text-[9px] uppercase text-gray-400">day</span>
                  </div>
                  <span className="text-gray-400 text-xs">:</span>
                  <div className="flex flex-col items-center justify-center leading-tight w-7">
                    <span className="text-xs md:text-base tabular-nums font-bold text-white">
                      {formatNumber(timeLeft.hours)}
                    </span>
                    <span className="text-[9px] uppercase text-gray-400">hour</span>
                  </div>
                  <span className="text-gray-400 text-xs">:</span>
                  <div className="flex flex-col items-center justify-center leading-tight w-7">
                    <span className="text-xs md:text-base tabular-nums font-bold text-white">
                      {formatNumber(timeLeft.minutes)}
                    </span>
                    <span className="text-[9px] uppercase text-gray-400">min</span>
                  </div>
                  <span className="text-gray-400 text-xs">:</span>
                  <div className="flex flex-col items-center justify-center leading-tight w-7">
                    <span className="text-xs md:text-base tabular-nums font-bold text-white">
                      {formatNumber(timeLeft.seconds)}
                    </span>
                    <span className="text-[9px] uppercase text-gray-400">sec</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile collapse toggle */}
            <div className="lg:hidden flex items-center justify-center bg-[#242a28] px-2 rounded-lg text-main-green">
              <button
                type="button"
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="flex items-center justify-center p-1 cursor-pointer"
                aria-label="Toggle sticky bar details"
              >
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`h-5 w-5 transition-transform duration-300 ${
                    isCollapsed ? "rotate-0" : "rotate-180"
                  }`}
                >
                  <polyline points="18 15 12 9 6 15" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Buy button */}
        <div className="hidden xl:flex items-center w-auto gap-x-2">
          <a
            target="_blank"
            rel="noreferrer"
            href="#early-access"
            className="btn-glow-shadow leftglow border border-main-green px-6 py-3 text-base text-[#0f1d16] font-bold bg-main-green rounded-full whitespace-nowrap cursor-pointer hover:scale-105 transition-transform"
          >
            Join Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default FloatingStickyBar;

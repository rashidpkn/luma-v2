import React, { useEffect, useState } from "react";
import SiteLink from "../components/SiteLink";

export const FloatingStickyBar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
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

  const units = [
    { value: timeLeft.days, label: "day" },
    { value: timeLeft.hours, label: "hour" },
    { value: timeLeft.minutes, label: "min" },
    { value: timeLeft.seconds, label: "sec" },
  ];

  return (
    <div className="fixed inset-x-0 bottom-3 z-40 px-3 md:bottom-4 md:px-4">
      <div className="mx-auto flex max-w-5xl flex-col items-stretch gap-2 rounded-2xl border border-line bg-white px-3 py-2.5 text-navy md:px-4 xl:flex-row xl:items-center">
        <div className={`items-center justify-between gap-3 rounded-xl bg-mist px-3 py-2 md:px-4 ${isCollapsed ? "hidden xl:flex" : "flex"} w-full xl:w-auto`}>
          <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs md:text-sm">
            <span className="text-muted">Limited offer</span>
            <span className="font-semibold">0% FX Fees</span>
            <span className="text-muted line-through">1.5% Fees</span>
          </p>
          <span className="rounded-full bg-accent px-2 py-0.5 text-xs font-semibold text-white">
            100% Off
          </span>
        </div>

        <div className="flex w-full items-center gap-2 xl:w-auto">
          <div className="flex min-h-12 flex-1 items-center justify-between gap-3 rounded-xl bg-mist px-3 py-1.5 md:px-4">
            <SiteLink href="#early-access" className="btn btn-primary btn-sm xl:hidden">
              Join Now
            </SiteLink>
            <div className="ml-auto flex items-center gap-2">
              <span className="text-[11px] font-semibold text-muted md:text-sm">Offer ends in</span>
              <div className="flex items-center gap-1" aria-label="Offer countdown">
                {units.map((unit, index) => (
                  <React.Fragment key={unit.label}>
                    {index > 0 && <span className="text-xs text-muted" aria-hidden="true">:</span>}
                    <span className="flex w-7 flex-col items-center leading-none">
                      <span className="text-sm font-semibold tabular-nums">{formatNumber(unit.value)}</span>
                      <span className="mt-0.5 text-[9px] uppercase text-muted">{unit.label}</span>
                    </span>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="inline-flex h-12 w-10 items-center justify-center rounded-xl bg-mist text-accent-dark xl:hidden"
            aria-label="Toggle sticky bar details"
            aria-expanded={!isCollapsed}
          >
            <svg
              viewBox="0 0 24 24"
              className={`h-5 w-5 transition-transform duration-200 ${isCollapsed ? "" : "rotate-180"}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 14l6-6 6 6" />
            </svg>
          </button>
        </div>

        <SiteLink href="#early-access" className="btn btn-primary hidden xl:inline-flex">
          Join Now
        </SiteLink>
      </div>
    </div>
  );
};

export default FloatingStickyBar;

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
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
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
      <div className="mx-auto flex max-w-4xl flex-col gap-2 rounded-2xl border border-line bg-white px-3 py-2.5 text-navy shadow-[0_10px_30px_rgba(10,37,64,0.08)] sm:flex-row sm:items-center sm:justify-between">
        <p className={`flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm ${isCollapsed ? "hidden sm:flex" : "flex"}`}>
          <span className="text-muted">Limited offer</span>
          <span className="font-semibold">0% FX Fees</span>
          <span className="text-muted line-through">1.5% Fees</span>
          <span className="rounded-full bg-blue px-2 py-0.5 text-[11px] font-semibold text-navy">100% Off</span>
        </p>
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2" aria-label="Offer countdown">
            <span className="text-[11px] font-semibold text-muted">Offer ends in</span>
            <span className="flex items-center gap-2 text-sm font-semibold tabular-nums">
              {units.map((unit) => (
                <span key={unit.label}>
                  {formatNumber(unit.value)}
                  <span className="ml-0.5 text-[10px] font-medium uppercase text-muted">{unit.label}</span>
                </span>
              ))}
            </span>
          </div>
          <button
            type="button"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue-soft text-navy sm:hidden"
            aria-label="Toggle sticky bar details"
            aria-expanded={!isCollapsed}
          >
            <svg viewBox="0 0 24 24" className={`h-4 w-4 transition-transform duration-200 ${isCollapsed ? "" : "rotate-180"}`} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path strokeLinecap="round" d="M6 14l6-6 6 6" />
            </svg>
          </button>
          <SiteLink href="#early-access" className="btn btn-primary btn-sm">
            Join Now
          </SiteLink>
        </div>
      </div>
    </div>
  );
};

export default FloatingStickyBar;

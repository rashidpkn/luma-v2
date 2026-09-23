import React, { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Countdown: React.FC = () => {
  // Target date: 30 days from project creation timestamp (fixed reference for consistent countdown)
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => {
    // Default to 28 days, 14 hours, 32 minutes, 15 seconds
    const target = new Date("2026-10-25T00:00:00Z").getTime();
    const now = new Date().getTime();
    const diff = Math.max(0, target - now);

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  });

  useEffect(() => {
    const target = new Date("2026-10-25T00:00:00Z").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = Math.max(0, target - now);

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINUTES", value: timeLeft.minutes },
    { label: "SECONDS", value: timeLeft.seconds },
  ];

  return (
    <div className="w-full max-w-xl mx-auto my-8">
      <div className="text-center mb-3">
        <span className="text-xs uppercase tracking-[0.25em] text-[#00b4d8] font-semibold">
          Estimated Public Launch In
        </span>
      </div>

      <div className="grid grid-cols-4 gap-2.5 sm:gap-4">
        {timeUnits.map((unit) => (
          <div
            key={unit.label}
            className="group relative flex flex-col items-center justify-center p-3 sm:p-5 rounded-2xl bg-[#112240]/80 border border-white/10 backdrop-blur-md shadow-[0_4px_24px_rgba(0,180,216,0.08)] hover:border-[#00b4d8]/40 transition-all duration-300"
          >
            {/* Top subtle highlight */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#00b4d8]/40 to-transparent" />

            <div className="text-2xl sm:text-4xl md:text-5xl font-black font-dmsans text-white tracking-tight group-hover:text-[#90e0ef] transition-colors">
              {String(unit.value).padStart(2, "0")}
            </div>

            <div className="text-[10px] sm:text-xs tracking-wider text-slate-400 mt-1 font-medium group-hover:text-[#00b4d8] transition-colors">
              {unit.label}
            </div>

            {/* Subtle glow dot */}
            <div className="absolute -bottom-1 w-1.5 h-1.5 rounded-full bg-[#00b4d8]/30 group-hover:bg-[#00b4d8] transition-colors" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;

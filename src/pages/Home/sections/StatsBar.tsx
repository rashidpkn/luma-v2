import React from "react";

const stats = [
  {
    value: "100+",
    label: "Countries",
    icon: (
      <svg width="28" height="28" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="3" />
        <path d="M12 24h24M24 12c-4 4-6 8-6 12s2 8 6 12M24 12c4 4 6 8 6 12s-2 8-6 12" stroke="currentColor" strokeWidth="3" />
      </svg>
    ),
  },
  {
    value: "100K+",
    label: "Global Users",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19.435,4.065H4.565a2.5,2.5,0,0,0-2.5,2.5v10.87a2.5,2.5,0,0,0,2.5,2.5h14.87a2.5,2.5,0,0,0,2.5-2.5V6.565A2.5,2.5,0,0,0,19.435,4.065Zm1.5,9.93h-6.42a2,2,0,0,1,0-4h6.42Zm-6.42-5a3,3,0,0,0,0,6h6.42v2.44a1.5,1.5,0,0,1-1.5,1.5H4.565a1.5,1.5,0,0,1-1.5-1.5V6.565a1.5,1.5,0,0,1,1.5-1.5h14.87a1.5,1.5,0,0,1,1.5,1.5v2.43Z" />
        <circle cx="14.519" cy="11.996" r="1.5" />
      </svg>
    ),
  },
  {
    value: "30+",
    label: "Currencies",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8M12 6v2m0 8v2" />
      </svg>
    ),
  },
  {
    value: "5M+",
    label: "Tx Volume",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    value: "24/7",
    label: "Support",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

export const StatsBar: React.FC = () => {
  return (
    <section className="w-full px-4 py-14 md:px-6 md:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5">
        {stats.map((stat) => (
          <article
            key={stat.label}
            className="flex flex-col items-start gap-4 rounded-2xl border border-white/10 bg-[#112240]/70 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-0.5 hover:border-main-blue/40 sm:p-6"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-main-blue/10 text-main-blue">
              {stat.icon}
            </div>
            <div>
              <div className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{stat.value}</div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-main-blue">
                {stat.label}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default StatsBar;

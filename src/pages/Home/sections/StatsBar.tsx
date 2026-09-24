import React from "react";

const stats = [
  { value: "100+", label: "Countries" },
  { value: "100K+", label: "Global Users" },
  { value: "30+", label: "Currencies" },
  { value: "5M+", label: "Tx Volume" },
  { value: "24/7", label: "Support" },
];

export const StatsBar: React.FC = () => {
  return (
    <section className="bg-navy px-4 pb-16 md:px-6" aria-label="Luma Pay at a glance">
      <div className="mx-auto grid max-w-6xl grid-cols-2 overflow-hidden rounded-[1.5rem] bg-blue text-navy sm:grid-cols-3 lg:grid-cols-5">
        {stats.map((stat) => (
          <article key={stat.label} className="border-b border-line px-5 py-6 last:border-b-0 sm:[&:nth-child(3)]:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0">
            <p className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">{stat.value}</p>
            <p className="mt-1 text-sm text-muted">{stat.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default StatsBar;

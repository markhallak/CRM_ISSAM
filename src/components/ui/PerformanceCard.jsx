import React from "react";

export default function PerformanceCard({ title, value }) {
  return (
    <div className="bg-[#0C3C78] text-white p-4 rounded shadow">
      <p className="text-sm font-medium uppercase">{title}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}

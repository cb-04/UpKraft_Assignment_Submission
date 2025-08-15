import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
ChartJS.register(ArcElement, Tooltip);

export default function PerformanceCard({ title, value10, ringColor }) {
  // animate from 0 -> value
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setCurrent(value10), 250);
    return () => clearTimeout(t);
  }, [value10]);

  const data = {
    datasets: [
      {
        data: [current, 10 - current],
        backgroundColor: [ringColor, "#e5e7eb"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "70%",
    animation: { animateRotate: true, duration: 900 },
    plugins: { tooltip: { enabled: false } },
  };

  return (
    <div className="ring-card flex flex-col items-center relative">
      <p className="text-gray-600">{title}</p>
      <div className="w-28 h-28 relative">
        <Doughnut data={data} options={options} />
        <div className="absolute inset-0 flex items-center justify-center font-bold">
          {value10}/10
        </div>
      </div>
    </div>
  );
}

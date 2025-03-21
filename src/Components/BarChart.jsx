import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const BarChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy(); // Prevent duplicate charts
    }

    const ctx = chartRef.current.getContext("2d");

    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Revenue",
            data: [3000, 4500, 3500, 5000, 7000, 8000],
            backgroundColor: [
              "#3b82f6", // Blue
              "#8b5cf6", // Purple
              "#ec4899", // Pink
              "#f43f5e", // Red
              "#f59e0b", // Yellow
              "#10b981", // Green
            ],
            borderRadius: 12, // Rounded corners
            barThickness: 40, // Custom bar thickness
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false, // Hide legend for a cleaner look
          },
          tooltip: {
            backgroundColor: "#111827", // Dark tooltip
            titleColor: "#fff",
            bodyColor: "#d1d5db",
            cornerRadius: 6,
          },
        },
        scales: {
          x: {
            grid: {
              display: false, // Hide vertical grid lines
            },
            ticks: {
              color: "#6b7280", // Gray color for labels
              font: {
                weight: "500",
              },
            },
          },
          y: {
            beginAtZero: true,
            grid: {
              color: "rgba(255, 255, 255, 0.1)", // Soft grid lines
            },
            ticks: {
              color: "#6b7280",
            },
          },
        },
      },
    });

    return () => chartInstance.current.destroy();
  }, []);

  return (
    <div className="border border-neutral-700 shadow-lg rounded-lg p-6 w-full max-w-md">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Monthly Revenue</h2>
      <div className="relative h-64">
        <canvas ref={chartRef} />
      </div>
    </div>
  );
};

export default BarChart;

// modify this accordingly with the relevant data.
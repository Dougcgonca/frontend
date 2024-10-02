import React from "react";
import { Line } from "react-chartjs-2";

export default function PopulationChart({ populationData }) {
  const data = {
    labels: populationData.map((item) => item.year), // Anos
    datasets: [
      {
        label: "Population",
        data: populationData.map((item) => item.population), // População
        fill: false,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2>Population Over Time</h2>
      <Line data={data} options={options} />
    </div>
  );
}

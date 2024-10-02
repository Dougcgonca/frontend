import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default function PopulationChart({ populationData }) {
  const [dataChart, setDataChart] = useState(null);

  useEffect(() => {
    if (Array.isArray(populationData) && populationData.length > 0) {
      const data = {
        labels: populationData.map((item) => item.year),
        datasets: [
          {
            label: "Population",
            data: populationData.map((item) => item.value),
            fill: false,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
          },
        ],
      };
      setDataChart(data);
    }
  }, [populationData]);

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
      {dataChart ? (
        <Line data={dataChart} options={options} />
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

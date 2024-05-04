import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
        align: "end" as const,
      },
      title: {
        display: true,
        position: "top" as const,
        text: "Inventory",
        align: "start" as const,
        font: {
          size: 20,
        },
        padding: {
          top: 20,
          left: 10,
        },
      },
    },
  };
  //   const options = {
  //     responsive: true,
  //     plugins: {
  //       legend: {
  //         position: "top" as const,
  //       },
  //       title: {
  //         display: true,
  //         text: "Inventory",
  //         position: "bottom" as const,
  //         align: "start",
  //         font: {
  //           size: 16,
  //         },
  //         padding: {
  //           top: 10,
  //           left: 10,
  //         },
  //       },
  //     },
  //   };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Available",
        data: [100],
        backgroundColor: "rgba(233, 118, 1, 1)",
      },

      {
        label: "Buffer In",
        data: [90],
        backgroundColor: "rgba(4, 120, 87, 1)",
      },
      {
        label: "Order Out",
        data: [80],
        backgroundColor: "rgba(0, 103, 166, 1)",
      },
    ],
  };

  return <Bar options={options} data={data} />;
};

export default Chart;

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
import InputFilter from "../InputFilter/InputFilter";
import { FilterOptions } from "../../../shared/config/constaints";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const VerticalChart = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "",
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [1220],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: [200],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return (
    <div className="w-full bg-solidWhite  rounded-md ">
      <div className="grid grid-cols-5 py-3 pr-5 relative top-0">
        <h1 className="text-left py-2 pl-5 font-semibold  text-xl">Usage</h1>
        <InputFilter placeholder="Monitor" Filter={FilterOptions} />
        <InputFilter placeholder="Acer" Filter={FilterOptions} />
        <InputFilter placeholder="From date" Filter={FilterOptions} />
        <InputFilter placeholder="To date" Filter={FilterOptions} />
      </div>
      <div className="px-5 pb-5">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
};

export default VerticalChart;

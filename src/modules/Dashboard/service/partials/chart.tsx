import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

import { useGetChartDataQuery } from "../../../../redux/features/api/others";
import { authKey } from "../../../../shared/config/constaints";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";
import { labels } from "../config/constants";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {
  const [chartData, setChartData] = useState([]);
  const token = getFromLocalStorage(authKey);
  const {
    data: Chart,
    isError: ChartsError,
    isLoading: ChartsLoading,
  } = useGetChartDataQuery({
    token,
  });

  useEffect(() => {
    if (!ChartsLoading && !ChartsError) {
      setChartData(Chart?.result);
    }
  }, [ChartsError, ChartsLoading, Chart]);

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

  const data = {
    labels,
    datasets: [
      {
        label: "QC passed",
        data: chartData?.map((data) => data?.Product_QC_OK),
        backgroundColor: "rgba(4, 120, 87, 1)",
      },
      {
        label: "Product repair difficulty",
        data: chartData?.map((data) => data?.Product_Repair_Difficulty),
        backgroundColor: "#fff3a8",
      },
      {
        label: "Product Not Repairable",
        data: chartData?.map((data) => data?.Product_Not_Repairable),
        backgroundColor: "#000000",
      },
      {
        label: "Product Repaired",
        data: chartData?.map((data) => data?.Product_Repaired),
        backgroundColor: "#007a3d",
      },
      {
        label: "Product QC Failded",
        data: chartData?.map((data) => data?.Product_QC_Failed),
        backgroundColor: "#e28c05",
      },
      {
        label: "Product Cancal",
        data: chartData?.map(
          (data) => data?.Product_Cancel + data?.Product_Reject
        ),
        backgroundColor: "#ae0c0c",
      },
    ],
  };

  return (
    <>
      <Bar options={options} data={data} />
    </>
  );
};

export default Chart;

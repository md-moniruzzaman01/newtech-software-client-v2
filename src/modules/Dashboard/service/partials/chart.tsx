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

import { useGetChartDataForServiceQuery } from "../../../../redux/features/api/others";
import { authKey } from "../../../../shared/config/constaints";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";
import { labels } from "../config/constants";
import ErrorShow from "../../../../common/components/Error Show/ErrorShow";
import ComponentLoading from "../../../../common/components/Component Loading/ComponentLoading";

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
    error,
  } = useGetChartDataForServiceQuery({
    token,
  });

  useEffect(() => {
    if (!ChartsLoading && !ChartsError) {
      setChartData(Chart?.data);
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
        backgroundColor: "rgba(40, 167, 69, 1)", // Green
      },
      {
        label: "Product repair difficulty",
        data: chartData?.map((data) => data?.Product_Repair_Difficulty),
        backgroundColor: "#FFD700", // Gold
      },
      {
        label: "Product Not Repairable",
        data: chartData?.map((data) => data?.Product_Not_Repairable),
        backgroundColor: "#333333", // Dark Gray
      },
      {
        label: "Product Repaired",
        data: chartData?.map((data) => data?.Product_Repaired),
        backgroundColor: "#5BC0DE", // Light Blue
      },
      {
        label: "Product QC Failed",
        data: chartData?.map((data) => data?.Product_QC_Failed),
        backgroundColor: "#FFA500", // Orange
      },
      {
        label: "Product Cancel",
        data: chartData?.map(
          (data) => data?.Product_Cancel + data?.Product_Reject
        ),
        backgroundColor: "#D9534F", // Dark Red
      },
    ],
  };

  if (ChartsLoading) {
    return <ComponentLoading className="min-h-96" height="100" width="100" />;
  }

  if (ChartsError) {
    return <ErrorShow error={error} />;
  }

  return (
    <>
      <Bar options={options} data={data} />
    </>
  );
};

export default Chart;

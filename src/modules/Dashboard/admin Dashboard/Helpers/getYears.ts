export async function GetYears():Promise<string[]>{
    const years= []
    const currentYear = (new Date()).getFullYear();
    for (let i = currentYear; i >= 2020; i--) {
      years.push(i)
    }
return years
}

// const [chartData,setChartData]=useState<IChartData[] | []>([])
// const token = getFromLocalStorage(authKey)
// const {
//     data: Chart,
//     isError: ChartsError,
//     isLoading: ChartsLoading,
//   } = useGetChartDataQuery({
//     token,
//   });

//   useEffect(() => {
//     if (!ChartsLoading && !ChartsError) {
//         setChartData(Chart?.result);
//     }
//   }, [ChartsError, ChartsLoading]);








//     const transformedData = [];

// // Iterate over the API response
// chartData.forEach(item => {
//   const { month, Product_Buffer, Product_Reject, Product_Completed } = item;

//   const monthData = {
//     month,
//     labels: ["Available", "Buffer In", "Order Out"],
//     datasets: [
//       {
//         label: "Available",
//         data: [100],
//         backgroundColor: "rgba(233, 118, 1, 1)",
//       },
//       {
//         label: "Buffer In",
//         data: [Product_Buffer],
//         backgroundColor: "rgba(4, 120, 87, 1)",
//       },
//       {
//         label: "Order Out",
//         data: [Product_Reject + Product_Completed],
//         backgroundColor: "rgba(0, 103, 166, 1)",
//       },
//     ],
//   };

//   // Push the transformed data for this month to the array
//   transformedData.push(monthData);
// });

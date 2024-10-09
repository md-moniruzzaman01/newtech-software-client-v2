export const handleFilter = ({ event, startDate, endDate, navigate }) => {
  event.preventDefault();
  const form = event.currentTarget;
  const brand = (form.elements.namedItem("brand") as HTMLInputElement)?.value;
  const branch = (form.elements.namedItem("branch") as HTMLInputElement)?.value;
  // const category = (
  //   form.elements.namedItem("category_name") as HTMLInputElement
  // )?.value;
  // Constructing the query parameters
  const queryParams = new URLSearchParams(window?.location?.search);

  if (brand) {
    queryParams.delete("brand_name");
    queryParams.append("brand_name", brand);
  }
  if (branch) {
    queryParams.delete("branch");
    queryParams.append("branch", branch);
  }

  if (startDate) {
    const day = startDate?.getDate();
    const month = startDate?.getMonth() + 1; // Month is zero-indexed, so we add 1 to get the correct month number
    const year = startDate?.getFullYear();
    queryParams.delete("start_Date");
    queryParams.append("start_Date", `${day}-${month}-${year}`);
  }
  if (endDate) {
    const day = endDate.getDate();
    const month = endDate.getMonth() + 1; // Month is zero-indexed, so we add 1 to get the correct month number
    const year = endDate.getFullYear();
    queryParams.delete("end_Date");
    queryParams.append("end_Date", `${day}-${month}-${year}`);
  }

  navigate(`?${queryParams.toString()}`);
};

export const handleClearQueryParams = ({
  formRef,
  setStartDate,
  setEndDate,
  navigate,
}) => {
  // Reset the form values
  if (formRef.current) {
    formRef.current.reset();
    // Manually reset the DatePicker component
    setStartDate(null);
    setEndDate(null);
    navigate("");
  }
};

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
    queryParams.delete("brandId");
    queryParams.append("brandId", brand);
  }
  if (branch) {
    queryParams.delete("branch");
    queryParams.append("branch", branch);
  }

  if (startDate) {
    const day = startDate?.getDate();
    const month = startDate?.getMonth() + 1;
    const year = startDate?.getFullYear();
    queryParams.delete("startDate");
    queryParams.append("startDate", `${year}-${month}-${day}`);
  }
  if (endDate) {
    const day = endDate.getDate();
    const month = endDate.getMonth() + 1;
    const year = endDate.getFullYear();
    queryParams.delete("endDate");
    queryParams.append("endDate", `${year}-${month}-${day}`);
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

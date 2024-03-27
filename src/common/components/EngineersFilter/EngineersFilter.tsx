import { ChangeEvent } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
interface engineersFilterProps {
  Filter: {
    value: string;
    _id: string;
    name?: { firstName?: string; middleName?: string; lastName?: string };
  }[];
  label?: string;
  IsDisabled?: boolean;
  placeholder?: string;
  className?: string;
  defaultValue?: string;
  required?: boolean;
  inputName?: string;
  value?: string;
  setSelectEngineer?: any;
  //   selectEngineer?: { id?: string[]; qc_checker_id?: string } | null;
}

const EngineersFilter: React.FC<engineersFilterProps> = ({
  Filter = [],
  label,
  IsDisabled = false,
  placeholder,
  className,
  required = false,
  inputName,
  defaultValue = "",
  setSelectEngineer,
}) => {
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    // Find the selected item
    const selectedItem = Filter.find((item) => item._id === selectedValue);

    // Ensure setSelectPartner is defined before calling it
    if (setSelectEngineer && selectedItem !== undefined) {
      setSelectEngineer(selectedItem?._id);
    }
  };

  return (
    <div className={`${label && "space-y-1"}`}>
      {label && <label className="text-lg font-semibold ">{label}</label>}
      <select
        name={inputName}
        required={required}
        disabled={IsDisabled}
        className={`${className} py-2  rounded-sm w-full border-2 text-shadeOfGray border-gray-200 shadow-sm ml-0 `}
        defaultValue={defaultValue}
        // Set the value attribute to the id of selectPartner
        onChange={handleSelectChange}
      >
        <option value={defaultValue || ""} disabled>
          {defaultValue || placeholder}
        </option>
        {Filter &&
          Filter?.map((item, i) => (
            <option key={i} value={item?._id}>
              {(item?.name?.firstName ? item?.name?.firstName : "") +
                " " +
                (item?.name?.middleName ? item?.name?.middleName : "") +
                " " +
                (item?.name?.lastName ? item?.name?.lastName : "")}
            </option>
          ))}
      </select>
    </div>
  );
};

export default EngineersFilter;

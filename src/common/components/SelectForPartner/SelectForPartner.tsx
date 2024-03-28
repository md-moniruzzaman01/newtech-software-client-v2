import { ChangeEvent } from "react";
import { SelectForPartnerProps } from "./config/types";

const SelectForPartner: React.FC<SelectForPartnerProps> = ({
  Filter = [],
  label,
  IsDisabled = false,
  className,
  required = false,
  inputName,
  placeholder,
  setSelectPartner,
  selectPartner,
  defaultValue,
}) => {
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    // Find the selected item
    const selectedItem = Filter.find((item) => item._id === selectedValue);

    // Ensure setSelectPartner is defined before calling it
    if (setSelectPartner && selectedItem !== undefined) {
      setSelectPartner(selectedItem);
    }
  };

  return (
    <div className={`${label && "space-y-1"}`}>
      {label && <label className="text-lg font-semibold ">{label}</label>}
      <select
        name={inputName}
        required={required}
        disabled={IsDisabled}
        className={` ${className} py-2  rounded-sm w-full border-2 text-shadeOfGray border-gray-200 shadow-sm ml-0 `}
        value={selectPartner?._id || ""} // Set the value attribute to the id of selectPartner
        onChange={handleSelectChange}
        // defaultValue={defaultValue}
      >
        <option value={""} disabled>
          {defaultValue || placeholder}
        </option>
        {Filter &&
          Filter?.map((item, i) => (
            <option key={i} value={item?._id}>
              {item?.contact_person + ` (${item?.company})`}
            </option>
          ))}
      </select>
    </div>
  );
};

export default SelectForPartner;

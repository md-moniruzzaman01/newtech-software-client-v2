import { SelectForPartnerProps } from "./config/types";

const SelectForPartner: React.FC<SelectForPartnerProps> = ({
  Filter = [],
  label,
  IsDisabled = false,
  placeholder,
  className,
  required = false,
  inputName,
}) => {
  return (
    <div className={`${label && "space-y-1"}`}>
      {label && <label className="text-lg font-semibold ">{label}</label>}
      <select
        name={inputName}
        required={required}
        disabled={IsDisabled}
        className={` ${className} py-2  rounded-sm w-full border-2 text-shadeOfGray border-gray-200 shadow-sm ml-0 `}
        defaultValue={placeholder}
      >
        <option value={placeholder} disabled>
          {placeholder}
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

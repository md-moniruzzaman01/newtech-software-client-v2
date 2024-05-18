import { ChangeEventHandler } from "react";

interface InputFilterProps {
  Filter?: { id: string; value: string }[];
  label?: string;
  isDisabled?: boolean;
  placeholder?: string;
  className?: string;
  defaultValue?: string;
  required?: boolean;
  inputName?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
}

const SelectForOnchange: React.FC<InputFilterProps> = ({
  Filter = [],
  label,
  isDisabled = false,
  placeholder = "Select",
  className,
  required = false,
  inputName,
  defaultValue = "",
  onChange,
}) => {
  return (
    <div className={`${label && "space-y-1"}`}>
      {label && <label className="text-lg font-semibold ">{label}</label>}
      <select
        name={inputName}
        required={required}
        disabled={isDisabled}
        className={`${className} py-2  rounded-sm w-full border-2 text-shadeOfGray border-gray-200 shadow-sm ml-0 `}
        defaultValue={defaultValue}
        onChange={onChange}
      >
        <option value={""} disabled>
          {placeholder}
        </option>
        {Filter?.map((item, i) => (
          <option key={i} value={item.id}>
            {item.value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectForOnchange;

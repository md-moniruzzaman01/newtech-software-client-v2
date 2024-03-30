import { useState } from "react";

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
  onChange?: (value: string) => void;
}

const InputFilter: React.FC<InputFilterProps> = ({
  Filter = [],
  label,
  isDisabled = false,
  placeholder = "Write here...",
  className,
  required = false,
  inputName,
  defaultValue = "",
  onChange,
}) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedIndex = event.target.selectedIndex;
    const selectedOption = Filter[selectedIndex - 1]; // -1 to adjust for the disabled option
    const value = selectedOption ? selectedOption.value : "";
    setSelectedValue(value);
    if (onChange) {
      return onChange(value);
    }
  };
  return (
    <div className={`${label && "space-y-1"}`}>
      {label && <label className="text-lg font-semibold ">{label}</label>}
      <select
        name={inputName}
        required={required}
        disabled={isDisabled}
        className={`${className} py-2  rounded-sm w-full border-2 text-shadeOfGray border-gray-200 shadow-sm ml-0 `}
        value={selectedValue}
        onChange={handleSelectChange}
      >
        <option value="" disabled>
          {defaultValue || placeholder}
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

export default InputFilter;

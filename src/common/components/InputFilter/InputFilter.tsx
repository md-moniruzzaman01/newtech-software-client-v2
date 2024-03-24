interface inputFilterProps {
  Filter: { label: string; value: string }[];
  label?: string;
  IsDisabled?: boolean;
  placeholder?: string;
  className?: string;
  defaultValue?: string;
  required?: boolean;
  inputName?: string;
  id?: string;
}

const InputFilter: React.FC<inputFilterProps> = ({
  Filter = [],
  label,
  IsDisabled = false,
  placeholder,
  className,
  required = false,
  inputName,
  id,
}) => {
  return (
    <div className={`${label && "space-y-1"}`}>
      {label && <label className="text-lg font-semibold ">{label}</label>}
      <select
        id={id}
        name={inputName}
        required={required}
        disabled={IsDisabled}
        className={` ${className} py-2  rounded-sm w-full border-2 text-shadeOfGray border-gray-200 shadow-sm ml-0 `}
        defaultValue={""}
      >
        <option value={""} disabled>
          {placeholder}
        </option>
        {Filter &&
          Filter?.map((item, i) => (
            <option key={i} value={item?.value}>
              {item?.value}
            </option>
          ))}
      </select>
    </div>
  );
};

export default InputFilter;

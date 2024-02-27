interface inputFilterProps {
  Filter: { label: string; value: string }[];
  label?: string;
  IsDisabled?: boolean;
  placeholder?: string;
}

const InputFilter: React.FC<inputFilterProps> = ({
  Filter = [],
  label,
  IsDisabled = false,
  placeholder = "All",
}) => {
  return (
    <div className={`${label && "space-y-1"}`}>
      <label className="text-lg font-semibold ">{label}</label>
      <select
        disabled={IsDisabled}
        className="py-2  rounded-sm w-full border-2 border-gray-200 shadow-sm ml-0 "
        defaultValue={"all"}
      >
        <option value="all" disabled>
          {placeholder}
        </option>
        {Filter &&
          Filter.map((item, i) => (
            <option key={i} value={item?.value}>
              {item?.label}
            </option>
          ))}
      </select>
    </div>
  );
};

export default InputFilter;

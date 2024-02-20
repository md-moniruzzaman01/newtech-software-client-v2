interface inputFilterProps {
  Filter: { label: string; value: string }[];
  label?: string;
}

const InputFilter: React.FC<inputFilterProps> = ({
  Filter = [],
  label = "hello",
}) => {
  return (
    <div>
      <label className="text-lg font-semibold ">{label}</label>
      <select
        className="py-2  rounded-sm w-full border-2 border-gray-200 shadow-sm ml-0 mt-2"
        defaultValue={"all"}
      >
        <option value="all" disabled>
          All
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

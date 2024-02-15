interface inputFilterProps {
  Filter: { label: string; value: string }[];
}

const InputFilter: React.FC<inputFilterProps> = ({ Filter = [] }) => {
  return (
    <div>
      <select
        className="select select-bordered join-item w-full ml-0"
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

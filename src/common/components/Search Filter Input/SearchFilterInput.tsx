/* eslint-disable @typescript-eslint/no-explicit-any */
import Select from "react-select";
import makeAnimated from "react-select/animated";

interface SearchFilterInput {
  options?: { value?: string; id?: string }[];
  labelName?: string;
  filterName?: string;
  data: string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setData: any;
  required?: boolean;
}

const SearchFilterInput: React.FC<SearchFilterInput> = ({
  options = [],
  labelName,
  filterName,
  data,
  setData,
  required = false,
}) => {
  const animatedComponents = makeAnimated();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChangeArray = (e: any[]) => {
    setData(Array.isArray(e) ? e.map((x) => x.value) : []);
  };

  const transformedOptions = options?.length
    ? (options as { value?: string; id?: string }[])?.map((option) => ({
        value: option?.id,
        label: option?.value,
      }))
    : [];

  return (
    <div className="space-y-1">
      <div className="label">
        <label className="text-lg font-semibold">{labelName}</label>
      </div>
      <Select
        required={required}
        name={filterName}
        styles={{
          control: (provided) => ({
            ...provided,
            padding: "2px", // Adjust padding value as needed
          }),
        }}
        closeMenuOnSelect={false}
        components={animatedComponents}
        defaultValue={[transformedOptions[2]]}
        isMulti
        options={transformedOptions}
        value={transformedOptions.filter((obj) =>
          data.includes(obj.value as string)
        )}
        onChange={(e: any) => handleChangeArray(e)}
      />
    </div>
  );
};

export default SearchFilterInput;

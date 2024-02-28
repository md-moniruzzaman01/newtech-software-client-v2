import { FilterOptions } from "../../../shared/config/constaints";
import { InventoryTableFilterProps } from "../../../shared/config/types";
import InputFilter from "../InputFilter/InputFilter";

const InventoryTableFilter: React.FC<InventoryTableFilterProps> = ({
  header,
}) => {
  return (
    <div className="flex justify-between items-center py-4 px-2 ">
      <div className="space-y-2">
        <h1 className="font-semibold">{header}</h1>
        <hr className="w-52 border-t-2" />
      </div>

      <div className="grid grid-cols-4 gap-2">
        <InputFilter
          className="h-10 w-32"
          placeholder="Monitor"
          Filter={FilterOptions}
        />
        <InputFilter
          className="h-10 w-32"
          placeholder="Acer"
          Filter={FilterOptions}
        />
        <InputFilter
          className="h-10 w-32"
          placeholder="From date"
          Filter={FilterOptions}
        />
        <InputFilter
          className="h-10 w-32"
          placeholder="To date"
          Filter={FilterOptions}
        />
      </div>
    </div>
  );
};

export default InventoryTableFilter;

import { useEffect, useState } from "react";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setToLocalStorage,
} from "../../../shared/helpers/local_storage";
import InputWithValue from "../../../common/components/InputWithValue/InputWithValue";
import Button from "../../../common/components/Button";
import { handleDeleteSingleItem } from "./helpers/handleDeleteSingleItem";
import { handleAllDelete } from "./helpers/handleDeleteAll";

const BadPartsSubmit = () => {
  const [checkedRows, setCheckedRows] = useState([]);
  const [formData, setFormData] = useState({
    hwab: "",
    weight: "",
    destination: "",
    rate: "",
    fsc: "",
    vat: "",
  });

  useEffect(() => {
    const storedData = getFromLocalStorage("selectedItem");
    if (storedData) {
      setCheckedRows(JSON.parse(storedData));
    }
  }, []);

  // Save checked rows to local storage
  useEffect(() => {
    if (checkedRows.length > 0) {
      setToLocalStorage("selectedItem", JSON.stringify(checkedRows));
    } else {
      removeFromLocalStorage("selectedItem");
    }
  }, [checkedRows]);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
    // Add any further submit functionality here
  };

  return (
    <div className="p-8 bg-white shadow-lg rounded-lg space-y-8">
      <h2 className="text-2xl font-semibold text-gray-800">Submit Bad Parts</h2>

      <div className="flex justify-between gap-5">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputWithValue
            labelName="HWAB"
            inputName="hwab"
            value={formData.hwab}
            onChange={handleInputChange}
          />
          <InputWithValue
            labelName="Weight"
            inputName="weight"
            value={formData.weight}
            onChange={handleInputChange}
          />
          <InputWithValue
            labelName="Destination"
            inputName="destination"
            value={formData.destination}
            onChange={handleInputChange}
          />
          <InputWithValue
            labelName="Rate"
            inputName="rate"
            value={formData.rate}
            onChange={handleInputChange}
          />
          <InputWithValue
            labelName="FSC"
            inputName="fsc"
            value={formData.fsc}
            onChange={handleInputChange}
          />
          <InputWithValue
            labelName="VAT"
            inputName="vat"
            value={formData.vat}
            onChange={handleInputChange}
          />
        </div>

        <div className="w-2/3 bg-lightGray rounded-lg p-6 shadow-inner">
          <h3 className="flex justify-between items-center text-lg font-semibold mb-4">
            <span>Selected Items</span>
            <span>Total: {checkedRows.length}</span>
            <Button
              disabled={checkedRows.length <= 0}
              danger
              small
              onClick={() => handleAllDelete({ setCheckedRows })}
            >
              Delete All
            </Button>
          </h3>

          <div className="max-h-80 overflow-y-auto space-y-2">
            {checkedRows.length > 0 ? (
              checkedRows.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between bg-white p-4 rounded-lg shadow-md border border-gray-200"
                >
                  <div>
                    <p className="text-sm">
                      <strong>ID:</strong> {item.id}
                    </p>
                    <p className="text-sm">
                      <strong>Serial No:</strong> {item.serial_number || "N/A"}
                    </p>
                  </div>
                  <div>
                    <Button
                      danger
                      small
                      onClick={() =>
                        handleDeleteSingleItem({ setCheckedRows, id: item?.id })
                      }
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">No items selected.</p>
            )}
          </div>
        </div>
      </div>

      <Button primary onClick={handleSubmit} className="w-full">
        Submit
      </Button>
    </div>
  );
};

export default BadPartsSubmit;

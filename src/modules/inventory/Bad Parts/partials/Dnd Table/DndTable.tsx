/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setToLocalStorage,
} from "../../../../../shared/helpers/local_storage";
import { emptyData } from "../../../../../shared/config/constaints";

const DndTable = ({ data }: { data: any }) => {
  const [checkedRows, setCheckedRows] = useState<any[]>([]);

  // Load checked rows from localStorage on component mount
  useEffect(() => {
    const storedData = getFromLocalStorage("selectedItem");
    if (storedData) {
      setCheckedRows(JSON.parse(storedData));
    }
  }, []);

  // Update localStorage whenever the checked rows change
  useEffect(() => {
    if (checkedRows.length > 0) {
      setToLocalStorage("selectedItem", JSON.stringify(checkedRows));
    } else {
      removeFromLocalStorage("selectedItem");
    }
  }, [checkedRows]);

  // Function to handle selecting all rows on the page
  const handleSelectAll = () => {
    const allIdsOnPage = data.map((item: any) => ({
      id: item?.id || item?._id,
      serial_number: item?.products?.serial_number,
    }));

    const isAllChecked = allIdsOnPage.every((item) =>
      checkedRows.some(
        (row) => row.id === item.id && row.serial_number === item.serial_number
      )
    );

    const newCheckedRows = isAllChecked
      ? checkedRows.filter(
          (row) =>
            !allIdsOnPage.some(
              (item) =>
                item.id === row.id && item.serial_number === row.serial_number
            )
        )
      : [
          ...checkedRows,
          ...allIdsOnPage.filter(
            (item) =>
              !checkedRows.some(
                (row) =>
                  row.id === item.id && row.serial_number === item.serial_number
              )
          ),
        ];

    setCheckedRows(newCheckedRows);
  };

  // Function to handle individual row selection
  const handleRowSelect = (item: any) => {
    const itemId = {
      id: item?.id || item?._id,
      serial_number: item?.products?.serial_number,
    };

    const isAlreadyChecked = checkedRows.some(
      (row) =>
        row.id === itemId.id && row.serial_number === itemId.serial_number
    );

    const newCheckedRows = isAlreadyChecked
      ? checkedRows.filter(
          (row) =>
            row.id !== itemId.id || row.serial_number !== itemId.serial_number
        )
      : [...checkedRows, itemId];

    setCheckedRows(newCheckedRows);
  };

  // Get selected items' details
  const getSelectedItems = () => {
    return checkedRows;
  };

  return (
    <div className="flex justify-between gap-5 w-full">
      {/* table start here */}
      <div className="overflow-x-auto w-2/3">
        <table className="min-w-full bg-white border-collapse border border-gray-200 shadow-md">
          <thead>
            <tr className="text-center shadow-md">
              <th>
                <label>
                  <input
                    type="checkbox"
                    className="checkbox form-checkbox h-5 w-5"
                    checked={
                      data.length > 0 &&
                      data.every((item: any) =>
                        checkedRows.some(
                          (row) =>
                            row.id === (item.id || item._id) &&
                            row.serial_number === item?.products?.serial_number
                        )
                      )
                    }
                    onChange={handleSelectAll}
                  />
                </label>
              </th>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Serial No</th>
              <th className="py-2 px-4 border-b">Customer</th>
              <th className="py-2 px-4 border-b">Update Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item: any) => (
              <tr key={item.id} className="text-center">
                <td className="border">
                  <label>
                    <input
                      type="checkbox"
                      className="checkbox form-checkbox h-5 w-5"
                      checked={checkedRows.some(
                        (row) =>
                          row.id === item.id &&
                          row.serial_number === item?.products?.serial_number
                      )}
                      onChange={() => handleRowSelect(item)}
                    />
                  </label>
                </td>
                <td className="py-2 px-4 border">{item.id}</td>
                <td className="py-2 px-4 border">
                  {item?.products?.serial_number || "N/A"}
                </td>
                <td className="py-2 px-4 border">
                  {item?.customer?.contact_person ||
                    item?.Nonwarrentycustomer?.name ||
                    "N/A"}
                </td>
                <td className="py-2 px-4 border">
                  {item?.received_date?.toString()?.slice(0, 10)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* table end here */}
      <div className="w-1/3">
        <h3 className="flex justify-between text-center  bg-white rounded-md p-2 shadow-md">
          <span className="font-medium text-xl">Selected Item</span>
          <span>Total: {checkedRows.length}</span>
        </h3>
        <div className="mt-4 max-h-screen overflow-y-auto">
          {getSelectedItems().length > 0 ? (
            getSelectedItems().map((item: any) => (
              <div
                key={item.id}
                className="mb-2 bg-white rounded-md p-2 shadow-md"
              >
                <p>
                  <strong>ID:</strong> {item.id}
                </p>
                <p>
                  <strong>Serial No:</strong> {item.serial_number || "N/A"}
                </p>
              </div>
            ))
          ) : (
            <p className="text-center">{emptyData} Selected</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DndTable;

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { DndProvider, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setToLocalStorage,
} from "../../../../../shared/helpers/local_storage";
import Button from "../../../../../common/components/Button";
import { handleAllDelete } from "./helpers/handleDeleteAll";
import { handleDeleteSingleItem } from "./helpers/handleDeleteSingleItem";
import { emptyData } from "../../../../../shared/config/constaints";
import { handleDrop } from "./helpers/handleDrop";
import { handleSelectAll } from "./helpers/handleSelectAll";
import { handleRowSelect } from "./helpers/handleSelectRow";
import { ITEM_TYPE } from "../../config/constants";
import DraggableRow from "./partials/DraggableRow/DraggableRow";
import { DndTableProps } from "../../config/type";

const DndTable = ({ data, checkedRows, setCheckedRows }: DndTableProps) => {
  // Function to handle individual row selection

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

  const [, drop] = useDrop({
    accept: ITEM_TYPE,
    drop: (item: { index: number; id: string }) =>
      handleDrop({ item, setCheckedRows, data }),
  });

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex justify-between gap-5 w-full">
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
                        data.every((item) =>
                          checkedRows.some((row) => row.id === item.id)
                        )
                      }
                      onChange={() =>
                        handleSelectAll({ data, checkedRows, setCheckedRows })
                      }
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
              {data.map((item, index) => (
                <DraggableRow
                  key={item.id}
                  index={index}
                  item={item}
                  // moveRow={moveRow}
                  checked={checkedRows.some((row) => row.id === item.id)}
                  handleRowSelect={() =>
                    handleRowSelect({ item, checkedRows, setCheckedRows })
                  }
                />
              ))}
            </tbody>
          </table>
        </div>

        <div ref={drop} className="w-1/3 border border-grayForBorder  pb-4">
          <h3 className="flex justify-between text-center bg-white rounded-md p-2 shadow-md">
            <span className="font-medium text-xl">Selected Item</span>
            <span>Total: {checkedRows.length}</span>
            <span>
              <Button
                disabled={checkedRows?.length <= 0}
                danger
                small
                onClick={() => handleAllDelete({ setCheckedRows })}
              >
                Delete All
              </Button>
            </span>
          </h3>
          <div className="mt-2 max-h-[2000px] overflow-y-auto px-3">
            {checkedRows.length > 0 ? (
              checkedRows.map((item) => (
                <div
                  key={item.id}
                  className="mb-2 bg-white rounded-md p-2 shadow-md flex justify-between"
                >
                  <div>
                    <p>
                      <strong>ID: </strong>
                      <span className="text-sm">{item.id}</span>
                    </p>
                    <p>
                      <strong>Serial No:</strong>
                      <span className="text-sm">
                        {item.serial_number || "N/A"}
                      </span>
                    </p>
                  </div>
                  <div>
                    <Button
                      onClick={() =>
                        handleDeleteSingleItem({ setCheckedRows, id: item?.id })
                      }
                      danger
                      small
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center py-44">{emptyData} Available</p>
            )}
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default DndTable;

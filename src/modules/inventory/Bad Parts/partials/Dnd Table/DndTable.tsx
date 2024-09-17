/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { DndProvider, useDrop, useDrag } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ITEM_TYPE } from "../../config/constants";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setToLocalStorage,
} from "../../../../../shared/helpers/local_storage";

interface Item {
  id: string;
  serial_number: any;
  products?: { serial_number: any };
  customer?: { contact_person: string };
  Nonwarrentycustomer?: { name: string };
  received_date?: Date;
}

interface DndTableProps {
  data: Item[];
}

interface DraggableRowProps {
  item: Item;
  index: number;
  checked: boolean;
  handleRowSelect: (item: Item) => void;
}

const DraggableRow = ({
  item,
  index,
  checked,
  handleRowSelect,
}: DraggableRowProps) => {
  const [{ isDragging }, drag] = useDrag({
    type: ITEM_TYPE,
    item: { index, id: item.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: ITEM_TYPE,
    hover: () => {},
  });

  return (
    <tr
      ref={(node) => drag(drop(node))} // Combine drag and drop refs
      key={item.id}
      className={`text-center ${isDragging ? "opacity-50" : ""}`}
    >
      <td className="border">
        <label>
          <input
            type="checkbox"
            className="checkbox form-checkbox h-5 w-5"
            checked={checked}
            onChange={() =>
              handleRowSelect({
                id: item?.id,
                serial_number: item.products?.serial_number,
              })
            }
          />
        </label>
      </td>
      <td className="py-2 px-4 border">{item.id}</td>
      <td className="py-2 px-4 border">
        {item.products?.serial_number || "N/A"}
      </td>
      <td className="py-2 px-4 border">
        {item.customer?.contact_person ||
          item.Nonwarrentycustomer?.name ||
          "N/A"}
      </td>
      <td className="py-2 px-4 border">
        {item.received_date?.toString()?.slice(0, 10)}
      </td>
    </tr>
  );
};

const DndTable = ({ data }: DndTableProps) => {
  const [checkedRows, setCheckedRows] = useState<Item[]>([]);

  // Function to handle individual row selection
  const handleRowSelect = (item: any) => {
    console.log("hello world", item);
    const itemId = {
      id: item?.id,
      serial_number: item?.serial_number,
    };

    const isAlreadyChecked = checkedRows.some((row) => row.id === itemId.id);

    const newCheckedRows = isAlreadyChecked
      ? checkedRows.filter((row) => row.id !== itemId.id)
      : [...checkedRows, itemId];

    setCheckedRows(newCheckedRows);
  };

  const handleSelectAll = () => {
    const allIdsOnPage = data.map((item: any) => ({
      id: item?.id,
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
  console.log("checkedRows", checkedRows);
  const handleDrop = (item: { index: number; id: string }) => {
    const droppedItem = data[item.index];
    setCheckedRows((prevCheckedRows) => {
      if (!prevCheckedRows.find((row) => row.id === droppedItem.id)) {
        return [...prevCheckedRows, droppedItem];
      }
      return prevCheckedRows;
    });
  };

  const [, drop] = useDrop({
    accept: ITEM_TYPE,
    drop: (item: { index: number; id: string }) => handleDrop(item),
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
              {data.map((item, index) => (
                <DraggableRow
                  key={item.id}
                  index={index}
                  item={item}
                  // moveRow={moveRow}
                  checked={checkedRows.some((row) => row.id === item.id)}
                  handleRowSelect={handleRowSelect}
                />
              ))}
            </tbody>
          </table>
        </div>

        <div ref={drop} className="w-1/3 border border-grayForBorder p-4">
          <h3 className="flex justify-between text-center bg-white rounded-md p-2 shadow-md">
            <span className="font-medium text-xl">Selected Item</span>
            <span>Total: {checkedRows.length}</span>
          </h3>
          <div className="mt-4 max-h-screen overflow-y-auto">
            {checkedRows.length > 0 ? (
              checkedRows.map((item) => (
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
              <p className="text-center">No items selected</p>
            )}
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default DndTable;

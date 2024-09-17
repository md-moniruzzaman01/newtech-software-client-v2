/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { DndProvider, useDrop, useDrag } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ITEM_TYPE } from "../../config/constants";

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
    hover: () => {
      // if (draggedItem.index !== index) {
      //   moveRow(draggedItem.index, index);
      //   draggedItem.index = index; // Update the drag index
      // }
    },
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
            onChange={() => handleRowSelect(item)}
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

  const handleRowSelect = (item: Item) => {
    setCheckedRows((prevCheckedRows) => {
      const isChecked = prevCheckedRows.some(
        (row) => row.id === item.id && row.serial_number === item.serial_number
      );
      if (isChecked) {
        return prevCheckedRows.filter(
          (row) =>
            row.id !== item.id || row.serial_number !== item.serial_number
        );
      } else {
        return [...prevCheckedRows, item];
      }
    });
  };

  const handleSelectAll = () => {
    setCheckedRows(
      data.length > 0 &&
        data.every((item) =>
          checkedRows.some(
            (row) =>
              row.id === item.id && row.serial_number === item.serial_number
          )
        )
        ? []
        : data
    );
  };

  // const moveRow = useCallback(
  //   (dragIndex: number, hoverIndex: number) => {
  //     const updatedData = [...tableData];
  //     const [draggedRow] = updatedData.splice(dragIndex, 1);
  //     updatedData.splice(hoverIndex, 0, draggedRow);
  //     setTableData(updatedData);
  //   },
  //   [tableData]
  // );

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
                          checkedRows.some(
                            (row) =>
                              row.id === item.id &&
                              row.serial_number === item.serial_number
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
              {data.map((item, index) => (
                <DraggableRow
                  key={item.id}
                  index={index}
                  item={item}
                  // moveRow={moveRow}
                  checked={checkedRows.some(
                    (row) =>
                      row.id === item.id &&
                      row.serial_number === item.serial_number
                  )}
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

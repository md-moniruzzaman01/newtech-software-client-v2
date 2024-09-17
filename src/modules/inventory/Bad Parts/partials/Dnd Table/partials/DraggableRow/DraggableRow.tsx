import { useDrag, useDrop } from "react-dnd";
import { DraggableRowProps } from "./config/type";
import { ITEM_TYPE } from "./config/constants";

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

export default DraggableRow;

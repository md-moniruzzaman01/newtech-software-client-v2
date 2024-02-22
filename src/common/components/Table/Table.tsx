import { FC } from "react";
import { TableBodyProps, TableProps } from "../../../shared/config/types";
import { NavLink } from "react-router-dom";

const Table: FC<TableProps> = ({
  HeaderData,
  view = false,
  Link,
  itemData,
}) => {
  let DataCol;
  if (view && itemData.length > 0) {
    DataCol = itemData.map((item: TableBodyProps, index) => (
      <tr key={index}>
        <td className=" border border-gray-800">
          <label className="flex justify-center items-center">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-indigo-600"
            />
          </label>
        </td>
        <td className="border border-gray-800">{item.order_id}</td>
        <td className="border border-gray-800">12/12/2023</td>
        <td className="border border-gray-800">12/12/2023</td>
        <td className="border border-gray-800">John doe</td>
        <td className="border border-gray-800">Monitor</td>
        <td className="border border-gray-800">No display</td>
        <td className="border border-gray-800">Acer</td>
        <td className="border border-gray-800">No Assign</td>
        <td className="border border-gray-800">Progress</td>
        <td className="border border-gray-800 ">
          {Link && (
            <NavLink className=" !text-black" to={`${Link}/${item.id}`}>
              view
            </NavLink>
          )}
        </td>
      </tr>
    ));
  } else {
    DataCol = itemData.map((item: TableBodyProps, index) => (
      <tr key={index}>
        <td className=" border border-gray-800">
          <label className="flex justify-center items-center">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-indigo-600"
            />
          </label>
        </td>
        <td className="border border-gray-800">{item.order_id}</td>
        <td className="border border-gray-800">12/12/2023</td>
        <td className="border border-gray-800">12/12/2023</td>
        <td className="border border-gray-800">John doe</td>
        <td className="border border-gray-800">Monitor</td>
        <td className="border border-gray-800">No display</td>
        <td className="border border-gray-800">Acer</td>
        <td className="border border-gray-800">No Assign</td>
        <td className="border border-gray-800">Progress</td>
      </tr>
    ));
  }
  return (
    <>
      <div className="flex justify-center w-full">
        <div className="overflow-x-auto w-full">
          <table className="table text-center w-full border border-collapse border-gray-800">
            {/* head */}
            <thead className="bg-[#D9D9D9]">
              <tr>
                <th>
                  <label className="flex justify-center items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-indigo-600"
                    />
                  </label>
                </th>
                {HeaderData &&
                  HeaderData.map((title: string, index: number) => (
                    <th key={index}>{title}</th>
                  ))}
              </tr>
            </thead>
            <tbody>{DataCol}</tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Table;

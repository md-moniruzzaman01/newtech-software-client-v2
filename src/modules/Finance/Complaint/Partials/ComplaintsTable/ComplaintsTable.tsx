import { FC } from "react";
import { NavLink } from "react-router-dom";
import { IoMdEye } from "react-icons/io";
import { ComplaintsTableProps, TableBodyProps } from "../../config/types";

const ComplaintTable: FC<ComplaintsTableProps> = ({
  HeaderData,
  Link,
  itemData,
}) => {
  return (
    <>
      <div className="flex justify-center w-full">
        <div className="overflow-x-auto w-full">
          <table className="table text-center w-full border border-collapse border-gray-800">
            {/* head */}
            <thead className="bg-[#D9D9D9]">
              <tr>
                <td className=" border border-gray-800">
                  <label className="flex justify-center items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-indigo-600"
                    />
                  </label>
                </td>
                {HeaderData &&
                  HeaderData.map((title: string, index: number) => (
                    <th key={index}>{title}</th>
                  ))}
              </tr>
            </thead>
            <tbody>
              {itemData.map((item: TableBodyProps, index) => (
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
                  <td className="border border-gray-800">
                    {Link && (
                      <NavLink
                        className=" !text-black flex justify-center"
                        to={`${Link}`}
                      >
                        <IoMdEye />
                      </NavLink>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ComplaintTable;

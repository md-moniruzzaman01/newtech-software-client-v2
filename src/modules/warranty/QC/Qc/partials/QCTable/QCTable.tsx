import { FC } from "react";
import { NavLink } from "react-router-dom";
import { IoMdEye } from "react-icons/io";
import { QCTableBodyProps, QCTableProps } from "../../config/types";

const QCTable: FC<QCTableProps> = ({
  HeaderData,
  Link,
  itemData = [],
  checkedRows = [], // Add a default value for checkedRows
  handleCheckboxChange,
  handleAllCheckboxChange,
}) => {
  return (
    <>
      <div className="flex justify-center w-full">
        <div className="overflow-x-auto w-full">
          <table className="table text-center w-full border border-collapse border-gray-800 text-xs">
            {/* head */}
            <thead>
              <tr>
                <td>
                  <label>
                    <input
                      type="checkbox"
                      className="checkbox form-checkbox h-5 w-5 "
                      checked={checkedRows.length === itemData?.length}
                      onChange={handleAllCheckboxChange}
                    />
                  </label>
                </td>
                {HeaderData &&
                  HeaderData?.map((title: string, index: number) => (
                    <th key={index}>{title}</th>
                  ))}
              </tr>
            </thead>
            <tbody>
              {itemData?.map((item: QCTableBodyProps, index) => (
                <tr key={index}>
                  <td className=" border border-gray-800">
                    <label>
                      <input
                        type="checkbox"
                        className="checkbox form-checkbox h-5 w-5 "
                        checked={checkedRows.includes(item?.repair && item.repair.length > 0 && item.repair[item.repair.length - 1].id || "")}
                        onChange={() => handleCheckboxChange( item?.repair && item.repair.length > 0 && item.repair[item.repair.length - 1].id || "")}
                      />
                    </label>
                  </td>

                  <td className="border border-gray-800">
                  {item?.repair && item.repair.length > 0 && item.repair[item.repair.length - 1].order_number}
                  </td>
                  <td className="border border-gray-800">
                    {item?.model_number}
                  </td>
                  <td className="border border-gray-800">
                    {item?.serial_number}
                  </td>
                  <td className="border border-gray-800">
                    {item?.problems}
                  </td>
                  <td className="border border-gray-800">
                    {item?.attachments}
                  </td>
                  <td className="border border-gray-800">
                    {item?.category_name}
                  </td>
                  <td className="border border-gray-800">
                    {item?.category}
                  </td>
                  <td className="border border-gray-800">{item?.brand_name}</td>
                  <td className="border border-gray-800">{item?.repair_count}</td>
                  <td className="border border-gray-800">{item?.repair && item.repair.length > 0 && item.repair[item.repair.length - 1].branch}</td>

                  <td className="border border-gray-800">
                    {item?.repair_status}
                  </td>
                  <td className="border border-gray-800">
                    {item?.turnaround_time?.toString().slice(0, 10)}
                  </td>
                  <td className="border border-gray-800">
                    {Link && (
                      <NavLink
                        className=" !text-black flex justify-center"
                        to={`${Link}/${item?.id}`}
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

export default QCTable;

import { FC } from "react";
import { NavLink } from "react-router-dom";
import { IoMdEye } from "react-icons/io";
import { MyQCTableBodyProps, QAAllTableProps } from "../config/types";

const QAAllTable: FC<QAAllTableProps> = ({
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
              {itemData?.map((item: MyQCTableBodyProps, index: number) => (
                <tr key={index}>
                  <td className=" border border-gray-800">
                    <label>
                      <input
                        type="checkbox"
                        className="checkbox form-checkbox h-5 w-5 "
                        checked={checkedRows.includes(
                          (item?.repair && item?.repair?.id) || ""
                        )}
                        onChange={() =>
                          handleCheckboxChange(
                            (item?.repair && item?.repair?.id) || ""
                          )
                        }
                      />
                    </label>
                  </td>

                  <td className="border border-gray-800">{item?.id}</td>
                  <td className="border border-gray-800">
                    {item?.repair && item.repair?.order_number}
                  </td>
                  <td className="border border-gray-800">
                    {item?.serial_number}
                  </td>
                  <td className="border border-gray-800">{item?.user_name}</td>
                  <td className="border border-gray-800">{item?.status}</td>
                  <td className="border border-gray-800">
                    {item?.createdAt?.toString().slice(0, 10)}
                  </td>
                  <td className="border border-gray-800">
                    {item?.repair?.received_date?.toString().slice(0, 10)}
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

export default QAAllTable;

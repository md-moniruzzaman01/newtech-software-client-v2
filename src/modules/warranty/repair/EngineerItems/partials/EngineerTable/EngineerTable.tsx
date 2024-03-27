import { FC } from "react";
import { NavLink } from "react-router-dom";
import { IoMdEye } from "react-icons/io";
import { EngineerTableBodyProps, EngineerTableProps } from "../../config/types";

const EngineerTable: FC<EngineerTableProps> = ({
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
              {itemData?.map((item: EngineerTableBodyProps, index) => (
                <tr key={index}>
                  <td className=" border border-gray-800">
                    <label>
                      <input
                        type="checkbox"
                        className="checkbox form-checkbox h-5 w-5 "
                        checked={checkedRows.includes(index)}
                        onChange={() => handleCheckboxChange(index)}
                      />
                    </label>
                  </td>
                  <td className="border border-gray-800"></td>
                  <td className="border border-gray-800"></td>
                  <td className="border border-gray-800"></td>
                  <td className="border border-gray-800"></td>
                  <td className="border border-gray-800"></td>
                  <td className="border border-gray-800">{""}</td>
                  <td className="border border-gray-800">{""}</td>
                  <td className="border border-gray-800"></td>
                  <td className="border border-gray-800"></td>
                  <td className="border border-gray-800"></td>
                  <td className="border border-gray-800">
                    {Link && (
                      <NavLink
                        className=" !text-black flex justify-center"
                        to={`${Link}/${item}`}
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

export default EngineerTable;

import { FC } from "react";
import { NavLink } from "react-router-dom";
import { IoMdEye } from "react-icons/io";
import { QATableBodyProps, QATableProps } from "../../config/types";

const QATable: FC<QATableProps> = ({
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
              {itemData?.map((item: QATableBodyProps, index) => (
                <tr key={index}>
                  <td className=" border border-gray-800">
                    <label>
                      <input
                        type="checkbox"
                        className="checkbox form-checkbox h-5 w-5 "
                        checked={checkedRows.includes(item?._id || "")}
                        onChange={() => handleCheckboxChange(item?._id || "")}
                      />
                    </label>
                  </td>

                  <td className="border border-gray-800">
                    {item?.order_number}
                  </td>
                  <td className="border border-gray-800">
                    {item?.products?.model_number}
                  </td>
                  <td className="border border-gray-800">
                    {item?.products?.serial_number}
                  </td>
                  <td className="border border-gray-800">
                    {item?.customer?.contact_person ||
                      item?.Nonwarrentycustomer?.name ||
                      "N/A"}
                  </td>
                  <td className="border border-gray-800">
                    {item?.category_name}
                  </td>
                  <td className="border border-gray-800">{item?.brand_name}</td>
                  <td className="border border-gray-800">
                    {item.Qc?.user_name}
                  </td>
                  <td className="border border-gray-800">
                    {item?.RepairItem?.user_name}
                  </td>
                  <td className="border border-gray-800">
                    {item?.Qa?.user_name}
                  </td>
                  <td className="border border-gray-800">
                    {item?.repair_status}
                  </td>
                  <td className="border border-gray-800">
                    {item?.received_date?.toString().slice(0, 10)}
                  </td>
                  <td className="border border-gray-800">
                    {Link && (
                      <NavLink
                        className=" !text-black flex justify-center"
                        to={`${Link}/${item?._id}`}
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

export default QATable;

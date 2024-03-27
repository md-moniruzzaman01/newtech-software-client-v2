import { FC } from "react";
import { NavLink } from "react-router-dom";
import { IoMdEye } from "react-icons/io";
import { ComplaintsTableProps, TableBodyProps } from "../../config/types";

const ComplaintTable: FC<ComplaintsTableProps> = ({
  HeaderData,
  Link,
  itemData = [],
}) => {
  return (
    <>
      <div className="flex justify-center w-full">
        <div className="overflow-x-auto w-full">
          <table className="table text-center w-full border border-collapse border-gray-800 text-xs">
            {/* head */}
            <thead>
              <tr>
                <td className=" border border-gray-800">
                  <label className="flex justify-center items-center">
                    <input type="checkbox" className="form-checkbox h-5 w-5 " />
                  </label>
                </td>
                {HeaderData &&
                  HeaderData?.map((title: string, index: number) => (
                    <th key={index}>{title}</th>
                  ))}
              </tr>
            </thead>
            <tbody>
              {itemData?.map((item: TableBodyProps, index) => (
                <tr key={index}>
                  <td className=" border border-gray-800">
                    <label className="flex justify-center items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-indigo-600"
                      />
                    </label>
                  </td>
                  <td className="border border-gray-800">
                    {item?.order_number}
                  </td>
                  <td className="border border-gray-800">
                    {item?.products?.serial_number}
                  </td>
                  <td className="border border-gray-800">
                    {item?.customer?.contact_person}
                  </td>
                  <td className="border border-gray-800">{item?.brand_name}</td>
                  <td className="border border-gray-800">
                    {item?.products?.model_number}
                  </td>
                  <td className="border border-gray-800">{""}</td>
                  <td className="border border-gray-800">{""}</td>
                  <td className="border border-gray-800">
                    {item?.partrequest?.length}
                  </td>
                  <td className="border border-gray-800">
                    {item?.repair_status}
                  </td>
                  <td className="border border-gray-800">
                    {item?.received_date}
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

export default ComplaintTable;

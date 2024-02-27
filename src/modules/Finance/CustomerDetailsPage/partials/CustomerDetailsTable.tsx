import { CustomerDetailsTableProps } from "../../../../shared/config/types";
import { NavLink } from "react-router-dom";
import { IoMdEye } from "react-icons/io";

const CustomerDetailsTable: React.FC<CustomerDetailsTableProps> = ({
  HeaderData,
  link,
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="table border w-full">
        {/* head */}
        <thead className="bg-[#D9D9D9] text-black border text-center">
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            {HeaderData &&
              HeaderData.map((title: string, index: number) => (
                <th key={index}>{title}</th>
              ))}
          </tr>
        </thead>
        <tbody className="text-center">
          {/* row 1 */}
          <tr>
            <td className="border">
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </td>
            <td className="border">56456461</td>
            <td className="border">10/12/2022</td>
            <td className="border">10/12/2022</td>
            <td className="border">Monitor</td>
            <td className="border">10</td>

            <td className="border">Progress</td>

            <td className="flex justify-center items-center py-1 ">
              <NavLink to={`${link}`}>
                <IoMdEye className="!text-black" />
              </NavLink>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CustomerDetailsTable;

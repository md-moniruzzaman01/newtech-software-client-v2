import { IoMdEye } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { CustomerInfoTableProps } from "../../../../shared/config/types";
import { BsThreeDotsVertical } from "react-icons/bs";

const CustomerInfoTable: React.FC<CustomerInfoTableProps> = ({
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
            <th className="text-xl">
              <BsThreeDotsVertical />
            </th>
          </tr>
        </thead>
        <tbody className="text-center">
          {/* row 1 */}
          <tr>
            <th className="border">
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td className="border">1554541</td>
            <td className="border">12/12/2023</td>

            <td className="border">
              <div className="flex justify-center items-center relative">
                <div className="avatar">
                  <div className="w-6">
                    <img
                      className="rounded-full"
                      src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    />
                  </div>
                </div>
              </div>
            </td>
            <td className="border">John doe</td>
            <td className="border">fahimkhandakar01@gamil.com</td>
            <td className="border">210561456464</td>
            <td className="border">Manager</td>
            <td className="border">Acer</td>

            <td className="border">QC</td>
            <td className="pl-2">
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

export default CustomerInfoTable;

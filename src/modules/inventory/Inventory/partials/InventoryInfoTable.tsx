import { IoMdEye } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import { InventoryInfoTableProps } from "../../../../shared/config/types";

const InventoryInfoTable: React.FC<InventoryInfoTableProps> = ({
  HeaderData,
  link,
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="table border-y w-full">
        {/* head */}
        <thead className=" text-black border-y text-center">
          <tr>
            <th className="py-2">#</th>
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
            <td className="border-y py-2">1554541</td>
            <td className="border-y py-2">12/12/2023</td>

            <td className="border-y py-2">
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
            <td className="border-y py-2">John doe</td>
            <td className="border-y py-2">fahimkhandakar01@gamil.com</td>
            <td className="border-y py-2">210561456464</td>
            <td className="border-y py-2">Manager</td>
            <td className="border-y py-2">Acer</td>

            <td>
              <NavLink to={`${link}`}>
                <IoMdEye className="!text-shadeOfRed" />
              </NavLink>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default InventoryInfoTable;

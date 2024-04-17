import { IoMdEye } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import { InventoryInfoTableProps } from "../config/types";

const InventoryInfoTable: React.FC<InventoryInfoTableProps> = ({
  HeaderData,
  link,
  itemData,
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
          {itemData?.map((item, index) => (
            <tr key={index}>
              <td className="border-y py-2">{item?.id}</td>
              <td className="border-y py-2">{item?.user?.id}</td>

              <td className="border-y py-2">{item?.user?.branch}</td>
              <td className="border-y py-2">{item?.parts?.toString()}</td>
              <td className="border-y py-2">{item?.serial_number}</td>
              <td className="border-y py-2">{item?.status}</td>
              <td className="border-y py-2">
                {item?.createdAt?.toString().slice(0, 10)}
              </td>
              <td className="border-y py-2">{item?.note}</td>

              <td>
                <NavLink to={`${link}/${item?.id}`}>
                  <IoMdEye className="!text-shadeOfRed" />
                </NavLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryInfoTable;

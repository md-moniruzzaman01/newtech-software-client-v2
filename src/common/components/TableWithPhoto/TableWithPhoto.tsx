import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdEye } from "react-icons/io";
import { TableWithPhotoProps } from "../../../shared/config/types";
import { NavLink } from "react-router-dom";

const TableWithPhoto: React.FC<TableWithPhotoProps> = ({
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
            <th className="border">Branch 1</th>
            <td className="border">Cy Ganderton</td>
            <td className="border">Quality Control Specialist</td>
            <td className="border">Blue</td>
            <th className="border">1</th>
            <td className="border">Cy Ganderton</td>
            <td className="border">Quality Control</td>
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

export default TableWithPhoto;

/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";
import { IoMdEye } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { handleAllCheckboxChange, handleCheckboxChange } from "../../../shared/helpers/handleCheckbox";


interface CommonTableProps {
  headerData: string[];
  itemData: Record<string, any>[];
  dataLayout: string[];
  link?: string;
  checkbox?:boolean;
  checkedRows?:any;
  setCheckedRows?:any
}



// type TableData = Record<string, any>; 

const CommonTable: FC<CommonTableProps> = ({ headerData,checkedRows,setCheckedRows, link,checkbox, itemData = [], dataLayout }) => {

  return (
    <>
      <div className="flex justify-center w-full">
        <div className="overflow-x-auto w-full ">
          <table className="table text-center w-full border border-collapse border-gray-800">
            {/* head */}
            <thead className="bg-[#D9D9D9] text-black border text-center">
              <tr>
                {checkbox && <td className=" border border-gray-800">
                  <label>
                    <input
                      type="checkbox"
                      className="checkbox form-checkbox h-5 w-5 "
                      checked={checkedRows.length === itemData?.length}
                      onChange={()=>handleAllCheckboxChange(checkedRows,setCheckedRows,itemData)}
                    />
                  </label>
                </td>

                }
                
                {headerData &&
                  headerData?.map((title: string, index: number) => (
                    <th key={index}>{title}</th>
                  ))}
              </tr>
            </thead>
            <tbody className="text-center">

              {itemData.map((item, index) => (
                <tr key={index}>
                  {
                    checkbox && <td className="border">
                    <label>
                      <input
                        type="checkbox"
                        className="checkbox form-checkbox h-5 w-5 "
                        checked={checkedRows.includes(item?.id || "")}
                        onChange={() => handleCheckboxChange(item?.id || "",checkedRows,setCheckedRows)}
                      />
                    </label>
                  </td>
                  }
                  

                  {dataLayout.map((layout, idx) => (
                    <td key={idx} className="border">{eval(layout) }</td>

                  ))}
                  {link && (
                   <td>
                     <NavLink
                      className=" !text-black flex justify-center"
                      to={`${link}/${item?.id}`}
                    >
                      <IoMdEye />
                    </NavLink>
                   </td>
                  )}
                </tr>

              ))}

            </tbody>
          </table>
        </div>
      </div>




    </>
  );
};

export default CommonTable;

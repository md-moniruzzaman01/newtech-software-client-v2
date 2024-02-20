import { FC } from "react";
import { TableBodyProps, TableProps } from "../../../shared/config/types";


const Table:FC<TableProps> = ({HeaderData,itemData}) => {
  return (
    <>
      <div className="flex justify-center">
        <div className="overflow-x-auto w-full px-[50px]">
          <table className="table text-center  border border-collapse border-gray-800">
            {/* head */}
            <thead className="bg-[#D9D9D9]">
              <tr>
                <th>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-indigo-600"
                    />
                  </label>
                </th>
                {
                 HeaderData && HeaderData.map((title: string,index:number) => (
                    <th key={index}>{title}</th>
                  ))
                }
              </tr>
            </thead>
            <tbody>
             {
              itemData && itemData.map((item : TableBodyProps,index:number)=>(
                <tr key={index}>
                <td className="border border-gray-800">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-indigo-600"
                    />
                  </label>
                </td>
                <td className="border border-gray-800">{item.order_id}</td>
                <td className="border border-gray-800">12/12/2023</td>
                <td className="border border-gray-800">12/12/2023</td>
                <td className="border border-gray-800">John doe</td>
                <th className="border border-gray-800">Monitor</th>
                <th className="border border-gray-800">No display</th>
                <th className="border border-gray-800">Acer</th>
                <th className="border border-gray-800">No Assign</th>
                <th className="border border-gray-800">Progress</th>
              </tr>
              ))
             }
             
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Table;

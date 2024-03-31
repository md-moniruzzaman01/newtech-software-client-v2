import{ FC } from "react";


interface CommonTableProps {
    headerData : string[];
  itemData: Record<string, any>[]; 
  dataLayout: string[];
}


type TableData = Record<string, any>; 

const CommonTable: FC<CommonTableProps> = ({ headerData, itemData = [], dataLayout }) => {
    const renderTableCell = (item: TableData, layout: string) => {
        const keys = layout.split(".");
        let value: any = item;
        for (const key of keys) { 
            console.log(key)
          value = value[key];
        }
        return value;
      };

  return (
    <div className="flex justify-center w-full">
      <div className="overflow-x-auto w-full">
        <table className="table text-center w-full border border-collapse border-gray-800 text-xs">
          <thead>
            <tr>
              <td>
                <label>
                  <input type="checkbox" className="checkbox form-checkbox h-5 w-5 " />
                </label>
              </td>
              {headerData.map((title, index) => (
                <th key={index}>{title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {itemData.map((item, index) => (
              <tr key={index}>
                {dataLayout.map((layout, idx) => (
                     <td key={idx}>{eval(layout)}</td>
                //   <td key={idx} className="border border-gray-800">{renderTableCell(item, layout)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CommonTable;
import { InventoryRequestInfoDetailsProps } from "../../../../shared/config/types";

const InventoryRequestInfoDetails: React.FC<
  InventoryRequestInfoDetailsProps
> = ({ headerData }) => {
  return (
    <div className="border border-shadeOfLightBlue w-full p-5 bg-grayWhite">
      <h2 className="pb-3 font-semibold text-lg">Requisitions Info</h2>
      <table className="w-full">
        <thead className="">
          <tr>
            {headerData &&
              headerData.map((title: string, index: number) => (
                <th className="border-b border-grayForBorder py-3" key={index}>
                  {title}
                </th>
              ))}
          </tr>
        </thead>

        <tbody className="text-center">
          <tr>
            <td className="py-3">12/02/24</td>
            <td className="py-3">Monitor</td>
            <td className="py-3">120224</td>
            <td className="py-3">MSI</td>
            <td className="py-3">2</td>
            <td className="py-3">25</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default InventoryRequestInfoDetails;

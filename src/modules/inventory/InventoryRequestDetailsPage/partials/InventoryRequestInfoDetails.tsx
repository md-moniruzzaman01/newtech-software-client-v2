import { InventoryRequestInfoDetailsProps } from "../config/types";

const InventoryRequestInfoDetails: React.FC<
  InventoryRequestInfoDetailsProps
> = ({ headerData, itemData }) => {
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
            <td className="py-3">
              {itemData?.createdAt?.toString()?.slice(0, 10)}
            </td>
            <td className="py-3">{itemData?.parts?.toString()}</td>
            <td className="py-3">{itemData?.id}</td>
            <td className="py-3">{itemData?.repair?.brand_name}</td>
            <td className="py-3">{itemData?.repairItem?.id}</td>
            <td className="py-3">{itemData?.status}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default InventoryRequestInfoDetails;

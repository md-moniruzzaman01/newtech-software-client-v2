/* eslint-disable @typescript-eslint/no-explicit-any */

const FormOfRecipe = ({ products }: { products: any }) => {
  return (
    <div className=" mt-4">
      <table className="w-full text-center border  border-primary border-collapse ">
        <thead className="text-xs">
          <tr>
            <th scope="col" className="px-6 py-1.5 border border-primary">
              BRAND
            </th>
            <th scope="col" className="px-6 py-1.5 border border-primary">
              PRODUCT
            </th>
            <th scope="col " className="px-6 py-1.5 border border-primary">
              SERIAL
            </th>

            <th scope="col" className="px-6 py-1.5 border border-primary">
              PROBLEMS/ISSUES
            </th>
            <th scope="col" className="px-6 py-1.5 border border-primary">
              REMARKS
            </th>
          </tr>
        </thead>
        <tbody className=" ">
          <tr key={products?._id} className="text-sm">
            <td className="px-4 py-2 border border-primary">
              {products?.brand_name}
            </td>
            <td className="px-4 py-2 border border-primary">
              {products?.model_number}
            </td>
            <td scope="row" className="px-6 py-2 border border-primary">
              {products?.serial_number}{" "}
            </td>
            <td className="px-4 py-2 border border-primary">
              {products?.problems}
            </td>
            <td className="px-4 py-2 border border-primary">
              {products?.attachments}
            </td>
          </tr>
        </tbody>
      </table>
      <div className="pt-2 text-xs flex gap-10">
        <p className="flex items-center gap-1.5">
          <input type="checkbox" checked={products?.isWindowsInstallations} />
          Windows installation 'C' Drive
        </p>
        <p className="flex items-center gap-1.5">
          <input type="checkbox" checked={products?.isSSDOrHDDFullFormat} />
          SSD/HDD Full Format
        </p>
      </div>
    </div>
  );
};

export default FormOfRecipe;

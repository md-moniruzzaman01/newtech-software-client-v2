import React from "react";
import { productPropsForRecipe } from "src/shared/Recipe page/type";

const FormOfRecipe = ({ product }: { product: productPropsForRecipe }) => {
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
          <tr key={product?._id} className="text-sm">
            <td className="px-4 py-2 border border-primary">
              {product?.brand_name}
            </td>
            <td className="px-4 py-2 border border-primary">
              {product?.model_number}
            </td>
            <td scope="row" className="px-6 py-2 border border-primary">
              {product?.serial_number}{" "}
            </td>
            <td className="px-4 py-2 border border-primary">
              {product?.versions[0]?.problems}
            </td>
            <td className="px-4 py-2 border border-primary">
              {product?.versions[0]?.attachments}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FormOfRecipe;

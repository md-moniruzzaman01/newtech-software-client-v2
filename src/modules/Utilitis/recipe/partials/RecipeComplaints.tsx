/* eslint-disable @typescript-eslint/no-explicit-any */
import HeaderOfRecipe from "./Header";
import FooterOfRecipe from "./footer";
import FormOfRecipe from "./form";

const RecipeComplaints = ({
  copy,
  products,
  info,
}: {
  copy: string;
  products?: any;
  info?: any;
}) => {
  return (
    <div className="min-h-[500px] relative">
      <HeaderOfRecipe copy={copy} info={info} />
      <div>
        <FormOfRecipe products={products} />
      </div>
      <FooterOfRecipe />
    </div>
  );
};

export default RecipeComplaints;

import HeaderOfRecipe from "./partials/Header";
import FooterOfRecipe from "./partials/footer";
import FormOfRecipe from "./partials/form";

/* eslint-disable @typescript-eslint/no-explicit-any */
interface RecipeProps {
  copy: string;
  product: productPropsForRecipe;
  orderInfo: any;
}

const Recipe = ({ copy, product, orderInfo }: RecipeProps) => {
  return (
    <div className="min-h-[47vh] relative">
      <HeaderOfRecipe copy={copy} orderInfo={orderInfo} />
      <div>
        <FormOfRecipe product={product} />
      </div>
      <FooterOfRecipe />
    </div>
  );
};

export default Recipe;

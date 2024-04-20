import MainCategoryPage from "../modules/Utilitis/Main Category/MainCategory";
import CategoryList from "../modules/warranty/category/CategoryList";
import WarrantyCategoryAddPage from "../modules/warranty/category/WarrantyCategoryAddPage";

export const category = [
  {
    path: "/category",
    element: <CategoryList />,
  },
  {
    path: "/add-category",
    element: <WarrantyCategoryAddPage />,
  },
  {
    path: "/add-main-category",
    element: <MainCategoryPage />,
  },
];

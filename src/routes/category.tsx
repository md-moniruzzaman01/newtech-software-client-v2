import MainCategoryPage from "../modules/Utilitis/Main Category/MainCategory";
import WarrantyCategoryEditPage from "../modules/warranty/category/Category Edit/WarrantyCategoryEditPage";
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
    path: "/category-edit/:id",
    element: <WarrantyCategoryEditPage />,
  },
  {
    path: "/add-main-category",
    element: <MainCategoryPage />,
  },
];

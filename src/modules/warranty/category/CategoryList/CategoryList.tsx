import Navbar from "../../../../common/widgets/Navbar/Navbar";
import { NavLink } from "react-router-dom";
import Button from "../../../../common/components/Button";
import TableStatus from "../../../../common/components/TableStatus/TableStatus";
import {
  btnValues,
  headerDataForCategory,
  headerDataForCategoryWarranty,
  tableLayout,
  tableLayoutForWarranty,
} from "./config/constants";
import Pagination from "../../../../common/widgets/Pagination/Pagination";
import CommonTable from "../../../../common/components/Common Table/CommonTable";
import LoadingPage from "../../../../common/components/LoadingPage/LoadingPage";
import {
  useGetCategoryAllQuery,
  useGetServiceCategoryAllQuery,
} from "../../../../redux/features/api/Category";
import { useEffect, useState } from "react";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";

const CategoryList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [limit, setLimit] = useState(50);
  const [activeRoute, setActiveRoute] = useState(true);

  const { data: categories, isLoading: categoriesLoading } =
    useGetServiceCategoryAllQuery({});

  const {
    data: categoriesForWarranty,
    isLoading: categoriesForWarrantyLoading,
  } = useGetCategoryAllQuery({});

  useEffect(() => {
    const activeRouteValue = getFromLocalStorage("activeRoute");
    if (activeRouteValue) {
      setActiveRoute(JSON.parse(activeRouteValue));
    }
  }, []);

  useEffect(() => {
    if (categories) {
      setTotalItems(categories.meta.total);
      setLimit(categories.meta.limit);
      setCurrentPage(categories?.meta?.page);
    } else if (categoriesForWarranty) {
      setTotalItems(categoriesForWarranty.meta.total);
      setLimit(categoriesForWarranty.meta.limit);
      setCurrentPage(categoriesForWarranty?.meta?.page);
    }
  }, [categories, categoriesForWarranty]);

  if (categoriesLoading || categoriesForWarrantyLoading) {
    return <LoadingPage />;
  }
  return (
    <div className="px-5 relative h-full">
      <Navbar name="Category List" />

      <div className="flex gap-2 justify-end py-5">
        <NavLink to="/add-category">
          <Button mini primary>
            + Add Category
          </Button>
        </NavLink>
        <NavLink to="/add-main-category">
          <Button mini primary>
            + Add Main Category
          </Button>
        </NavLink>
      </div>

      {/* table start here  */}
      <div className="bg-solidWhite p-3">
        <div className="py-2">
          <TableStatus btnValues={btnValues} />
        </div>
        <div>
          <CommonTable
            itemData={
              activeRoute ? categoriesForWarranty?.data : categories?.data
            }
            dataLayout={activeRoute ? tableLayoutForWarranty : tableLayout}
            headerData={
              activeRoute
                ? headerDataForCategoryWarranty
                : headerDataForCategory
            }
          />
        </div>
      </div>

      <div className="fixed bottom-2 right-5">
        <Pagination
          limit={limit}
          currentPage={currentPage}
          totalItems={totalItems}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default CategoryList;

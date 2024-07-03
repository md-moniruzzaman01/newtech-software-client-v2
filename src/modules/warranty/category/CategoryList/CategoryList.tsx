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
  useDeleteCategoryForServiceMutation,
  useDeleteCategoryForWarrantyMutation,
  useGetCategoryAllQuery,
  useGetServiceCategoryAllQuery,
} from "../../../../redux/features/api/Category";
import { useEffect, useState } from "react";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";
import { showSwal } from "../../../../shared/helpers/SwalShower.ts";
import { authKey } from "../../../../shared/config/constaints";
import swal from "sweetalert";
import { isUserAdmin } from "../../../../services/auth.service";
import ErrorShow from "../../../../common/components/Error Show/ErrorShow";

const CategoryList = () => {
  const token = getFromLocalStorage(authKey);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [limit, setLimit] = useState(50);
  const [activeRoute, setActiveRoute] = useState(true);

  const {
    data: categories,
    isLoading: categoriesLoading,
    isError,
    error,
  } = useGetServiceCategoryAllQuery({ token });
  const {
    data: categoriesForWarranty,
    isLoading: categoriesForWarrantyLoading,
    isError: categoriesForWarrantyIsError,
    error: categoriesForWarrantyError,
  } = useGetCategoryAllQuery({ token });

  const [deleteWarrantyCategory] = useDeleteCategoryForWarrantyMutation();
  const [deleteServiceCategory] = useDeleteCategoryForServiceMutation();

  useEffect(() => {
    const activeRouteValue = getFromLocalStorage("activeRoute");
    if (activeRouteValue) {
      setActiveRoute(JSON.parse(activeRouteValue));
    }
  }, []);

  useEffect(() => {
    if (!activeRoute) {
      setTotalItems(categories?.meta?.total);
      setLimit(categories?.meta?.limit);
      setCurrentPage(categories?.meta?.page);
    } else if (activeRoute) {
      setTotalItems(categoriesForWarranty?.meta?.total);
      setLimit(categoriesForWarranty?.meta?.limit);
      setCurrentPage(categoriesForWarranty?.meta?.page);
    }
  }, [activeRoute, categoriesForWarranty, categories]);

  const deleteForWarrantyCategory = async (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this category !",
      icon: "warning",
      buttons: ["Cancel", "OK"], // Set button labels
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        const result = await deleteWarrantyCategory({ id, token });

        showSwal(result);
      } else {
        swal("Your category  is safe!");
      }
    });
  };
  const deleteForServiceCategory = async (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this category !",
      icon: "warning",
      buttons: ["Cancel", "OK"], // Set button labels
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        const result = await deleteServiceCategory({ id, token });

        showSwal(result);
      } else {
        swal("Your category  is safe!");
      }
    });
  };

  if (categoriesLoading || categoriesForWarrantyLoading) {
    return <LoadingPage />;
  }

  if (isError || categoriesForWarrantyIsError) {
    return <ErrorShow error={categoriesForWarrantyError || error} />;
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
            deleteBtn={isUserAdmin()}
            deleteFn={
              isUserAdmin() &&
              (activeRoute
                ? deleteForWarrantyCategory
                : deleteForServiceCategory)
            }
            itemData={
              activeRoute ? categoriesForWarranty?.data : categories?.data
            }
            dataLayout={activeRoute ? tableLayoutForWarranty : tableLayout}
            headerData={
              activeRoute
                ? headerDataForCategoryWarranty
                : headerDataForCategory
            }
            editPageLink="/category-edit"
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

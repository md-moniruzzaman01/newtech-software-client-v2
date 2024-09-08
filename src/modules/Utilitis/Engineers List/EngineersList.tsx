import { useSearchParams } from "react-router-dom";
import Navbar from "../../../common/widgets/Navbar/Navbar";
import CommonTable from "../../../common/components/Common Table/CommonTable";
import Pagination from "../../../common/widgets/Pagination/Pagination";
import {
  useDeleteEngineerMutation,
  useGetEngineersListQuery,
} from "../../../redux/features/api/engineers";
import { getFromLocalStorage } from "../../../shared/helpers/local_storage";
import { authKey } from "../../../shared/config/constaints";
import {
  fields,
  headerForEngineersTable,
  keys,
  tableLayout,
} from "./config/constant";
import LoadingPage from "../../../common/components/LoadingPage/LoadingPage";
import ErrorShow from "../../../common/components/Error Show/ErrorShow";
import { useEffect, useState } from "react";
import { constructQuery } from "../../../shared/helpers/constructQuery";
import SearchBar from "../../../common/components/SearchBar/SearchBar";
import swal from "sweetalert";
import { showSwal } from "../../../shared/helpers/SwalShower.ts";

const EngineersList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [limit, setLimit] = useState(50);
  const [searchParams] = useSearchParams();
  const query = constructQuery(searchParams, fields, keys, currentPage, limit);

  const token = getFromLocalStorage(authKey);
  const {
    data: engineers,
    isLoading,
    isError,
    error,
  } = useGetEngineersListQuery({ token, query });

  const [deleteEngineer] = useDeleteEngineerMutation();

  useEffect(() => {
    if (!isLoading && !isError) {
      setTotalItems(engineers.meta.total);
      setLimit(engineers.meta.limit);
      setCurrentPage(engineers?.meta?.page);
    }
  }, [engineers, isError, isLoading]);

  const handleDelete = async (id: string) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this engineer details!",
      icon: "warning",
      buttons: ["Cancel", "OK"], // Set button labels
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        const result = await deleteEngineer({ id, token });
        showSwal(result);
      } else {
        swal("Your engineer details is safe!");
      }
    });
  };

  if (isLoading) {
    return <LoadingPage />;
  }
  if (isError) {
    return <ErrorShow error={error} />;
  }

  return (
    <div className="px-5 h-full">
      <Navbar name="Engineers List" />

      <div className="py-5">
        <SearchBar link linkBtn="+ Add Engineer" linkValue="/add-engineer" />
      </div>

      {/* <div className="flex gap-2 justify-end py-5">
        <NavLink to="/add-engineer">
          <Button mini primary>
            + Add Engineer
          </Button>
        </NavLink>
      </div> */}

      {/* table start here  */}
      <div className="bg-solidWhite p-3">
        <div>
          <CommonTable
            dataLayout={tableLayout}
            headerData={headerForEngineersTable}
            itemData={engineers?.data}
            deleteBtn
            deleteFn={handleDelete}
            editPageLink="/engineer-edit-page"
            user
            link={"/engineers-list/engineer-details"}
          />
        </div>
      </div>

      <div className="fixed bottom-2  right-5">
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

export default EngineersList;

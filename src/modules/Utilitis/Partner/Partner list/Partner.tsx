import { useEffect, useState } from "react";
import CommonTable from "../../../../common/components/Common Table/CommonTable";
import Navbar from "../../../../common/widgets/Navbar/Navbar";
import Pagination from "../../../../common/widgets/Pagination/Pagination";
import { authKey } from "../../../../shared/config/constaints";
import {
  HeaderForCustomerTable,
  PartnerData,
  fields,
  keys,
} from "./config/constants";
import { useSearchParams } from "react-router-dom";
import {
  useDeletePartnerMutation,
  useGetPartnersQuery,
} from "../../../../redux/features/api/Partner";
import LoadingPage from "../../../../common/components/LoadingPage/LoadingPage";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";
import { constructQuery } from "../../../../shared/helpers/constructQuery";
import SearchBar from "../../../../common/components/SearchBar/SearchBar";
import { showSwal } from "../../../../shared/helpers/SwalShower.ts";
import swal from "sweetalert";
import ErrorShow from "../../../../common/components/Error Show/ErrorShow";

const Partner = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [limit, setLimit] = useState(50);
  const [searchParams] = useSearchParams();
  const query = constructQuery(searchParams, fields, keys, currentPage, limit);
  const token = getFromLocalStorage(authKey);

  const [deletePartner, { isLoading: partnerDeleteLoading }] =
    useDeletePartnerMutation();

  const { data, isError, isLoading, error } = useGetPartnersQuery({
    token,
    query,
  });

  useEffect(() => {
    if (!isLoading && !isError) {
      setTotalItems(data?.meta.total);
      setLimit(data?.meta.limit);
      setCurrentPage(data?.meta?.page);
    }
  }, [data, isError, isLoading]);

  const handleDelete = async (id: string) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this partner details!",
      icon: "warning",
      buttons: ["Cancel", "OK"], // Set button labels
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        const result = await deletePartner({ id, token });
        showSwal(result);
      } else {
        swal("Your partner details is safe!");
      }
    });
  };

  if (isLoading || partnerDeleteLoading) {
    return <LoadingPage />;
  }
  if (isError) {
    return <ErrorShow error={error} />;
  }
  return (
    <div className="px-5 relative h-full">
      <Navbar name="Partner Info" />

      <div className="py-5">
        <SearchBar link linkBtn="+ Add Partner" linkValue="/partner-add" />
      </div>

      {/* table start here  */}
      <div className="bg-solidWhite p-3">
        <div>
          <CommonTable
            headerData={HeaderForCustomerTable}
            itemData={data?.data}
            dataLayout={PartnerData}
            link="/partner/order-details"
            deleteBtn
            deleteFn={handleDelete}
          ></CommonTable>
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

export default Partner;

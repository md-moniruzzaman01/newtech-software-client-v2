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
import { useGetPartnersQuery } from "../../../../redux/features/api/Partner";
import LoadingPage from "../../../../common/components/LoadingPage/LoadingPage";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";
import { constructQuery } from "../../../../shared/helpers/constructQuery";
import SearchBar from "../../../../common/components/SearchBar/SearchBar";

const Partner = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [limit, setLimit] = useState(10);
  const [searchParams] = useSearchParams();
  const query = constructQuery(searchParams, fields, keys, currentPage, limit);
  const token = getFromLocalStorage(authKey);
  const { data, isError, isLoading } = useGetPartnersQuery({
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
  if (isLoading) {
    return <LoadingPage />;
  }
  if (isError) {
    return (
      <div>
        <div>
          <h1>Somethings Wrong</h1>
          <p>Please contact to Developer.</p>
        </div>
      </div>
    );
  }
  return (
    <div className="px-5 relative h-full">
      <Navbar name="Partner Info" />

      <div className="py-5">
        <SearchBar link linkBtn="+ Add Partner" linkValue="/partner/add" />
      </div>

      {/* table start here  */}
      <div className="bg-solidWhite p-3">
        <div>
          <CommonTable
            headerData={HeaderForCustomerTable}
            itemData={data?.data}
            dataLayout={PartnerData}
            link="/partner/order-details"
          ></CommonTable>
        </div>
      </div>

      <div className="absolute bottom-0 right-5">
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

import { useState } from "react";
import Button from "../../../../common/components/Button";
import CommonTable from "../../../../common/components/Common Table/CommonTable";
import Navbar from "../../../../common/widgets/Navbar/Navbar";
import Pagination from "../../../../common/widgets/Pagination/Pagination";
import { authKey } from "../../../../shared/config/constaints";
import { HeaderForCustomerTable, PartnerData, fields, keys } from "./config/constants";
import { NavLink, useSearchParams } from "react-router-dom";
import { useGetPartnersQuery } from "../../../../redux/features/api/Partner";
import LoadingPage from "../../../../common/components/LoadingPage/LoadingPage";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";
import { constructQuery } from "../../../../shared/helpers/constructQuery";

const Partner = () => {
  const [searchParams] = useSearchParams();
  const [checkedRows, setCheckedRows] = useState<string[]>([]);
  const query = constructQuery(searchParams, fields, keys);
  const token = getFromLocalStorage(authKey);
  const {
    data,
    isError,
    isLoading,
  } = useGetPartnersQuery({
    token, query
  });

  if (isLoading) {
    return <LoadingPage />
  }
  if (isError) {
    return <div>
      <div>
        <h1>Somethings Wrong</h1>
        <p>Please contact to Developer.</p>
      </div>
    </div>
  }
  return (
    <div className="px-5 relative h-full">
      <Navbar name="Partner Info" />

      <div className="flex justify-end py-5">
        <NavLink to="/partner/add">
          <Button primary>+ Add Partner</Button>
        </NavLink>
      </div>

      {/* table start here  */}
      <div className="bg-solidWhite p-3">
        <div className="space-x-3  pb-2">
          <Button className="bg-transparent !text-solidBlack shadow">
            All
          </Button>
          <Button className="bg-transparent !text-solidBlack shadow">
            Active
          </Button>
          <Button className="bg-transparent !text-solidBlack shadow">
            Deactivate
          </Button>
        </div>
        <div>
          <CommonTable
            headerData={HeaderForCustomerTable}
            itemData={data?.data}
            dataLayout={PartnerData}
            link="/partner/order-details"
            setCheckedRows={setCheckedRows}
            checkedRows={checkedRows}
            checkbox
          >

          </CommonTable>
        </div>
      </div>

      <div className="absolute bottom-0 right-5">
        <Pagination></Pagination>
      </div>
    </div>
  );
};

export default Partner;

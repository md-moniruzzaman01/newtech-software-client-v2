import { NavLink } from "react-router-dom";
// internal
import Navbar from "../../../../common/widgets/Navbar/Navbar";
import Button from "../../../../common/components/Button";
import TableStatus from "../../../../common/components/TableStatus/TableStatus";
import {
  HeaderForPrincipleTable,
  PrincipleData,
  btnValues,
} from "./config/constants";

import Pagination from "../../../../common/widgets/Pagination/Pagination";
import CommonTable from "../../../../common/components/Common Table/CommonTable";
import { useState } from "react";
import { useGetPrinciplesQuery } from "../../../../redux/features/api/principle";
import LoadingPage from "../../../../common/components/LoadingPage/LoadingPage";

const Principle = () => {
  const [checkedRows, setCheckedRows] = useState<string[]>([]);

  const { data, isLoading, isError } = useGetPrinciplesQuery({});
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
      <Navbar name="Principle Info" />

      <div className="flex justify-end py-5">
        <NavLink to="/partner/add">
          <Button primary>+ Add Partner</Button>
        </NavLink>
      </div>

      {/* table start here  */}
      <div className="bg-solidWhite p-3">
        <div className="py-2">
          <TableStatus btnValues={btnValues} />
        </div>
        <div>
          <CommonTable
            headerData={HeaderForPrincipleTable}
            itemData={data?.data}
            dataLayout={PrincipleData}
            link="/partner/order-details"
            setCheckedRows={setCheckedRows}
            checkedRows={checkedRows}
            checkbox
          />
        </div>
      </div>

      <div className="fixed bottom-2  right-5">
        <Pagination></Pagination>
      </div>
    </div>
  );
};

export default Principle;

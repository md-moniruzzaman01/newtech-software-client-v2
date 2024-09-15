import { useSearchParams } from "react-router-dom";
import { authKey } from "../../../shared/config/constaints";
import { getFromLocalStorage } from "../../../shared/helpers/local_storage";
import { constructQuery } from "../../../shared/helpers/constructQuery";
import {
  complaintsTableHeader,
  fields,
  keys,
  tableLayout,
} from "./config/constants";
import { useEffect, useState } from "react";
import Navbar from "../../../common/widgets/Navbar/Navbar";
import SearchBar from "../../../common/components/SearchBar/SearchBar";
import StatusGroup from "../../../common/components/Status Group";
import CommonTable from "../../../common/components/Common Table/CommonTable";
import Pagination from "../../../common/widgets/Pagination/Pagination";
import { useGetSwapQuery } from "../../../redux/features/api/inventory";
import LoadingPage from "../../../common/components/LoadingPage/LoadingPage";
import ErrorShow from "../../../common/components/Error Show/ErrorShow";
import Modal from "../../../common/components/Modal/Modal";
import Input from "../../../common/components/Input";
import InputWithValue from "../../../common/components/InputWithValue/InputWithValue";
import Button from "../../../common/components/Button";

const Swap = () => {
  const [searchParams] = useSearchParams();
  const token = getFromLocalStorage(authKey);
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(50);
  const [totalItems, setTotalItems] = useState(0);
  const query = constructQuery(searchParams, fields, keys, currentPage, limit);
  const [checkedRows, setCheckedRows] = useState([]);

  const {
    data: swapData,
    isLoading: swapIsLoading,
    isError,
    error,
  } = useGetSwapQuery({ token, query });

  useEffect(() => {
    if (!isError && !swapIsLoading) {
      setTotalItems(swapData?.meta?.total);
      setLimit(swapData?.meta.limit);
      setCurrentPage(swapData?.meta?.page);
    }
  }, [swapData, swapIsLoading, isError]);

  if (swapIsLoading) {
    return <LoadingPage />;
  }

  if (isError) {
    return <ErrorShow error={error} />;
  }
  return (
    <div className=" px-5">
      <Navbar name="Swap" />
      <div className="pt-5">
        <SearchBar />
      </div>
      <div className="mt-5 p-3 bg-solidWhite">
        <div>
          <StatusGroup />
          <div className="pt-5">
            <CommonTable
              itemData={swapData?.data}
              headerData={complaintsTableHeader}
              dataLayout={tableLayout}
              modal
              setIsOpen={setIsOpen}
              checkedRows={checkedRows}
              setCheckedRows={setCheckedRows}
              checkbox
            />
          </div>
        </div>
        <div className="fixed bottom-2  right-5">
          <Pagination
            currentPage={currentPage}
            totalItems={totalItems}
            limit={limit}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
      <Modal header="Request Part" setIsOpen={setIsOpen} isOpen={isOpen}>
        <div className="space-y-2">
          <InputWithValue labelName="Find Parts" />
          <Input labelName="Problem" />
          <Input labelName="Note" />
          <div>
            <Button>Submit</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Swap;

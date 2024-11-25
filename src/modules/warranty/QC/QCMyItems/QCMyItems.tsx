import { useEffect, useState } from "react";
import LoadingPage from "../../../../common/components/LoadingPage/LoadingPage";
import SearchBar from "../../../../common/components/SearchBar/SearchBar";
import StatusGroup from "../../../../common/components/Status Group";
import Navbar from "../../../../common/widgets/Navbar/Navbar";
import Pagination from "../../../../common/widgets/Pagination/Pagination";

import { authKey } from "../../../../shared/config/constaints";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";

import { QCTableHeader, fields, keys, tableLayout } from "./config/constants";
import {
  useGetOldQcsQuery,
  useUpdateStatusQCMutation,
} from "../../../../redux/features/api/qc";
import CommonTable from "../../../../common/components/Common Table/CommonTable";
import { useSearchParams } from "react-router-dom";
import { constructQuery } from "../../../../shared/helpers/constructQuery";
import ErrorShow from "../../../../common/components/Error Show/ErrorShow";
import { getUserInfo } from "../../../../services/auth.service";
import Modal from "../../../../common/components/Modal/Modal";
import Button from "../../../../common/components/Button";
import { handleAddRMA } from "./helpers/handleAddRMA";
import Input from "../../../../common/components/Input";

const QCMyItems = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [limit, setLimit] = useState(50);
  const [isOpen, setIsOpen] = useState(false);
  const [rma, setRma] = useState("");
  const [id, setId] = useState("");

  const [searchParams] = useSearchParams();
  const query = constructQuery(searchParams, fields, keys, currentPage, limit);

  const token = getFromLocalStorage(authKey);
  const user = getUserInfo();
  const [addRMA, { isLoading: rmaLoading }] = useUpdateStatusQCMutation();
  const { data, isError, isLoading, error } = useGetOldQcsQuery({
    id: user._id,
    token,
    query,
  });

  const handleModal = (id) => {
    setIsOpen(true);
    setId(id);
  };
  console.log();
  useEffect(() => {
    if (data) {
      setTotalItems(data.meta.total);
      setLimit(data.meta.limit);
      setCurrentPage(data?.meta?.page);
    }
  }, [data]);
  if (isLoading) {
    return <LoadingPage />;
  }
  if (isError) {
    return <ErrorShow error={error} />;
  }

  return (
    <div className=" px-5">
      <Navbar name="My QC Items"></Navbar>
      <div className="pt-5">
        <SearchBar />
      </div>
      <div className="mt-5 p-3 bg-solidWhite">
        <div>
          <StatusGroup />
          <div className="pt-5">
            <CommonTable
              itemData={data?.data}
              headerData={QCTableHeader}
              dataLayout={tableLayout}
              modalFunc={handleModal}
              modalDisabled={
                "item?.rma === 'null' || item?.rma === 'N/A' || item?.rma === '123' || item?.rma === '0' || item?.rma === 'n/a'"
              }
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
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} header={"Add RMA"}>
        <div className="space-y-4">
          <Input
            defaultValue={data?.data?.find((value) => value?.id === id)?.rma}
            required
            labelName="RMA"
            inputName="rma"
            onChange={(e) => setRma(e.target.value)}
          />
          <Button
            loading={rmaLoading}
            onClick={() => handleAddRMA(rma, id, addRMA, setIsOpen)}
            mini
          >
            Submit
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default QCMyItems;

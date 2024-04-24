import BranchCommonHeader from "../../../common/components/BranchCommonHeader/BranchCommonHeader";
import { FilterOptions, authKey } from "../../../shared/config/constaints";
import RepairCompleteCard from "../../../common/components/RepairCompleteCard/RepairCompleteCard";
import Pagination from "../../../common/widgets/Pagination/Pagination";
import Button from "../../../common/components/Button";
import Input from "../../../common/components/Input";
import InputFilter from "../../../common/components/InputFilter/InputFilter";
import { getFromLocalStorage } from "../../../shared/helpers/local_storage";
import {
  useCreateWithdrawMutation,
  useGetWithdrawQuery,
} from "../../../redux/features/api/withdraw";
import CommonTable from "../../../common/components/Common Table/CommonTable";
import { TableHeader, tableLayout, withdrawOption } from "./config/constants";
import { useEffect, useState } from "react";
import LoadingPage from "../../../common/components/LoadingPage/LoadingPage";
import swal from "sweetalert";

const Withdraw = () => {
  const token = getFromLocalStorage(authKey);
  const [createWithdraw] = useCreateWithdrawMutation();
  const { data, isLoading } = useGetWithdrawQuery({ token });
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(50);
  const limit = 10;

  useEffect(() => {
    if (data?.success) {
      setCurrentPage(data?.meta?.page);
      setTotalItems(data?.meta?.total);
    }
  }, [data, currentPage]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const withdraw = (form.elements.namedItem("withdraw") as HTMLInputElement)
      ?.value;
    const amount = parseInt(
      (form.elements.namedItem("amount") as HTMLInputElement)?.value,
      10
    );
    const note = (form.elements.namedItem("note") as HTMLInputElement)?.value;

    const fullData = {
      withdraw,
      amount,
      note,
    };

    console.log(fullData);

    const result = createWithdraw({ fullData, token });

    if ("data" in result) {
      swal("Withdraw successful.", {
        icon: "success",
      });
      form.reset();
    } else if ("error" in result) {
      swal("Something went wrong!", {
        icon: "error",
      });
    }
  };

  if (isLoading) {
    return <LoadingPage />;
  }
  return (
    <div className=" px-5">
      <BranchCommonHeader
        selectItems={FilterOptions}
        title="Withdraw"
      ></BranchCommonHeader>
      <div className="grid grid-cols-2 gap-3 pt-5  ">
        <RepairCompleteCard
          bgColor="lightGreen"
          headerTitle="Total Repair warranty"
          branchTitle="2,500"
          isWithdraw={true}
        ></RepairCompleteCard>
        <RepairCompleteCard
          bgColor="lightBlueColor"
          headerTitle="Total Repair Non Warranty"
          branchTitle="$ 5,500"
          isWithdraw={true}
        ></RepairCompleteCard>
      </div>
      <div className=" pt-5">
        <div className="grid grid-cols-3 gap-5">
          <div className="overflow-x-auto pb-3 col-span-2 bg-[#FBFBFB] rounded-md">
            <h2 className="text-xl p-5 font-medium">Withdraw Overview</h2>
            <div className="px-5">
              <CommonTable
                dataLayout={tableLayout}
                itemData={data?.data}
                headerData={TableHeader}
              />
            </div>
            <div className="flex justify-end pt-10 pr-5">
              <Pagination
                currentPage={currentPage}
                limit={limit}
                setCurrentPage={setCurrentPage}
                totalItems={totalItems}
              />
            </div>
          </div>
          <div className="col-span-1 bg-[#FBFBFB] rounded-md text-center">
            <h2 className="text-xl font-medium  py-5">Withdraw Method</h2>
            <hr className="mx-10" />
            <h2 className="font-bold text-xl pt-5 pb-2">$ 5,0000</h2>
            <p>Show Branch Amount</p>
            <div className="  my-5 w-10/12 mx-auto">
              <form className="space-y-3" onSubmit={handleSubmit}>
                <InputFilter
                  required
                  Filter={withdrawOption}
                  inputName="withdraw"
                />

                {/* Regular input components */}
                <Input required inputName="amount" inputType="number" />
                <Input inputName="note" />
                <div>
                  <Button
                    type="submit"
                    className=" !bg-btn_secondary text-white w-full"
                  >
                    Continue
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;

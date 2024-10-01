import BranchCommonHeader from "../../../common/components/BranchCommonHeader/BranchCommonHeader";
import {
  FilterOptions,
  authKey,
  branches,
} from "../../../shared/config/constaints";
import RepairCompleteCard from "../../../common/components/RepairCompleteCard/RepairCompleteCard";
import Pagination from "../../../common/widgets/Pagination/Pagination";
import Button from "../../../common/components/Button";
import Input from "../../../common/components/Input";
import InputFilter from "../../../common/components/InputFilter/InputFilter";
import { getFromLocalStorage } from "../../../shared/helpers/local_storage";
import {
  useCreateWithdrawMutation,
  useGetTotalAmountQuery,
  useGetWithdrawQuery,
} from "../../../redux/features/api/withdraw";
import CommonTable from "../../../common/components/Common Table/CommonTable";
import {
  TableHeader,
  fields,
  keys,
  tableLayout,
  withdrawOption,
} from "./config/constants";
import { useEffect, useState } from "react";
import LoadingPage from "../../../common/components/LoadingPage/LoadingPage";
import swal from "sweetalert";
import ErrorShow from "../../../common/components/Error Show/ErrorShow";
import { getUserInfo } from "../../../services/auth.service";
import { constructQuery } from "../../../shared/helpers/constructQuery";
import { useSearchParams } from "react-router-dom";

const Withdraw = () => {
  const [searchParams] = useSearchParams();

  const [totalAmount, setTotalAmount] = useState(0);
  const [branchAmount, setbranchAmount] = useState(0);
  const [availableAmountInBranch, setAvailableAmountInBranch] = useState(0);
  const [withdrawHistory, setSwithdrawHistory] = useState<object[] | []>();
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setlimit] = useState(10);
  const [totalItems, setTotalItems] = useState(50);
  const query = constructQuery(searchParams, fields, keys, currentPage, limit);
  const token = getFromLocalStorage(authKey);
  const user = getUserInfo();
  const [createWithdraw, { isError, error }] = useCreateWithdrawMutation();

  const {
    data: totalData,
    isError: totalError,
    isLoading: totalLoading,
  } = useGetTotalAmountQuery({
    token,
  });

  const { data: withdrowData, isLoading: withdrowLoading } =
    useGetWithdrawQuery({
      query,
      token,
    });

  useEffect(() => {
    if (withdrowData) {
      setSwithdrawHistory(withdrowData.data);
      setTotalItems(withdrowData.meta.total);
      setlimit(withdrowData.meta.limit);
      setCurrentPage(withdrowData?.meta?.page);
    }
  }, [withdrowData]);

  useEffect(() => {
    if (!totalLoading && !totalError) {
      const totalAvailable = totalData?.data?.reduce(
        (acc, curr) => acc + curr.total,
        0
      );
      setTotalAmount(totalAvailable);
      if (user.role === "engineer") {
        const branchData = totalData?.data?.find(
          (data) => data.branch === user.branch
        );
        setbranchAmount(branchData?.total);
      } else {
        const branchData = totalData?.data?.find(
          (data) => data.branch === "05"
        );
        setbranchAmount(branchData?.total);
      }
    }
  }, [totalData, totalError, totalLoading]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const HandleInputChange = (event: any) => {
    const branchSelect = branches.find((branch) => branch.value === event);
    const branchData = totalData?.data?.find(
      (data) => data.branch === branchSelect.id
    );
    if (branchData) {
      setAvailableAmountInBranch(branchData.total);
    } else {
      setAvailableAmountInBranch(0);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const branch = (form.elements.namedItem("branch") as HTMLInputElement)
      ?.value;
    const withdraw = (form.elements.namedItem("withdraw") as HTMLInputElement)
      ?.value;
    const amount = parseInt(
      (form.elements.namedItem("amount") as HTMLInputElement)?.value,
      10
    );
    const note = (form.elements.namedItem("note") as HTMLInputElement)?.value;

    const fullData = {
      branch,
      withdraw,
      amount,
      note,
    };

    const result = await createWithdraw({ fullData, token });

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

  if (withdrowLoading || totalLoading) {
    return <LoadingPage />;
  }
  if (isError) {
    return <ErrorShow error={error} />;
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
          headerTitle="Total Available"
          branchTitle={`${totalAmount}`}
          isWithdraw={true}
        ></RepairCompleteCard>
        <RepairCompleteCard
          bgColor="lightBlueColor"
          headerTitle={`Total in Branch ${
            user.role === "engineer" ? user?.branch : ""
          }`}
          branchTitle={`${branchAmount}`}
          isWithdraw={true}
        ></RepairCompleteCard>
      </div>
      <div className=" pt-5">
        <div className="grid grid-cols-3 gap-5">
          <div className="overflow-x-auto pb-3 col-span-2 bg-[#FBFBFB] rounded-md relative">
            <h2 className="text-xl p-5 font-medium">Withdraw Overview</h2>
            <div className="px-5">
              <CommonTable
                dataLayout={tableLayout}
                itemData={withdrawHistory}
                headerData={TableHeader}
              />
            </div>
            <div className="absolute bottom-2  right-5">
              <Pagination
                currentPage={currentPage}
                limit={limit}
                setCurrentPage={setCurrentPage}
                totalItems={totalItems}
              />
            </div>
          </div>
          <div className="col-span-1 bg-[#FBFBFB] rounded-md">
            <div className=" text-center">
              <h2 className="text-xl font-medium  py-5">Withdraw Method</h2>
              <hr className="mx-10" />
              <h2 className="font-bold text-xl pt-5 pb-2">
                {availableAmountInBranch}
              </h2>
              <p>Show Branch Amount</p>
            </div>
            <div className="  my-5 w-10/12 mx-auto">
              <form className="space-y-3" onSubmit={handleSubmit}>
                <InputFilter
                  required
                  label="Branch"
                  Filter={branches}
                  inputName="branch"
                  onChange={(e) => {
                    HandleInputChange(e);
                  }}
                />
                <InputFilter
                  required
                  label="Type "
                  Filter={withdrawOption}
                  inputName="withdraw"
                />

                {/* Regular input components */}
                <Input
                  labelName="Amount"
                  required
                  inputName="amount"
                  inputType="number"
                />
                <Input labelName="Note" inputName="note" required />
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

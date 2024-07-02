import { useNavigate, useParams } from "react-router-dom";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";
import { authKey } from "../../../../shared/config/constaints";
import {
  useComplaintEditMutation,
  useGetComplaintByIdQuery,
} from "../../../../redux/features/api/complaints";
import { useEffect, useState } from "react";
import { ProductsProps } from "../ComplaintOrderDetails/config/types";
import Button from "../../../../common/components/Button";
import TextArea from "../../../../common/components/TextArea/TextArea";
import Input from "../../../../common/components/Input";
import Navbar from "../../../../common/widgets/Navbar/Navbar";
import { useGetBrandsQuery } from "../../../../redux/features/api/Brand";
import { useGetMainCategoryQuery } from "../../../../redux/features/api/Category";
import LoadingPage from "../../../../common/components/LoadingPage/LoadingPage";
import { showSwal } from "../../../../shared/helpers/SwalShower";

const ComplaintsEditPage = () => {
  const token = getFromLocalStorage(authKey);
  const navigate = useNavigate();
  const { id } = useParams();
  const [complaintsSingleData, setComplaintsSingleData] =
    useState<ProductsProps | null>(null);

  //redux
  const [editComplaints, { isLoading }] = useComplaintEditMutation();

  // console.log(complaintsSingleData);

  const {
    data: complaintsData,
    isError: complaintsError,
    isLoading: complaintsLoading,
  } = useGetComplaintByIdQuery({ id, token });

  const {
    data: brandData,
    isError: brandsError,
    isLoading: brandsLoading,
  } = useGetBrandsQuery({ token });

  const {
    data: mainCategoryData,
    isError: mainCategoryError,
    isLoading: mainCategoryLoading,
  } = useGetMainCategoryQuery({ token });

  useEffect(() => {
    if (!complaintsError && !complaintsLoading) {
      setComplaintsSingleData(complaintsData?.data?.products);
    }
  }, [
    brandData,
    brandsError,
    brandsLoading,

    mainCategoryData,
    mainCategoryError,
    mainCategoryLoading,
    complaintsData,
    complaintsError,
    complaintsLoading,
  ]);

  const handleAddItem = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget; // Use currentTarget for the form element
    // const partner_id = (
    //   form.elements.namedItem("partner_id") as HTMLInputElement
    // ).value;
    // const contactNo = selectPartner?.contactNo;
    // const contact_number = (
    //   form.elements.namedItem("contact_number") as HTMLInputElement
    // )?.value;
    // const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;
    // const address = (form.elements.namedItem("address") as HTMLInputElement)
    //   ?.value;

    const model_number = (
      form.elements.namedItem("model_number") as HTMLInputElement
    ).value;
    const serial_number = (
      form.elements.namedItem("serial_number") as HTMLInputElement
    ).value;

    const attachments = (form.elements.namedItem("remark") as HTMLInputElement)
      .value;

    const problems = (form.elements.namedItem("problems") as HTMLInputElement)
      .value;

    const fullData = {
      model_number,
      serial_number,
      attachments,
      problems,
    };
    const result = await editComplaints({ id, fullData, token });
    const isSwalTrue = showSwal(result);
    if (isSwalTrue) {
      navigate(`/complaints/order-details/${id}`);
    }
    console.log(result);
    // form.reset();
  };

  if (complaintsLoading) {
    return <LoadingPage />;
  }

  return (
    <div className="px-5">
      <Navbar name={"Complaint's Update"} />
      <div className="  mt-10 ">
        <div className="py-5  rounded-md bg-[#FBFBFB] px-5 relative">
          <div className=" absolute right-5 top-5"></div>
          <form onSubmit={handleAddItem}>
            <div className="grid grid-cols-3  gap-8 mt-20">
              <div className="col-span-3 grid grid-cols-3 gap-8"></div>

              {/* Model Number   */}
              <div>
                <Input
                  defaultValue={complaintsSingleData?.model_number}
                  required
                  inputName="model_number"
                  labelName="Model Number"
                ></Input>
              </div>
              {/* Serial Number  */}
              <div>
                <Input
                  defaultValue={complaintsSingleData?.serial_number}
                  required
                  inputName="serial_number"
                  labelName="Serial Number"
                ></Input>
              </div>

              {/* Remark  */}
              <div>
                <Input
                  defaultValue={complaintsSingleData?.attachments}
                  required
                  inputName="remark"
                  labelName="Remark"
                />
              </div>
              {/* Problem  */}
              <div className="col-span-3">
                <TextArea
                  defaultValue={complaintsSingleData?.problems
                    ?.map((item) => item)
                    .join(",")}
                  name="problems"
                  label="Problems"
                  placeholder="Write here..."
                />
              </div>
            </div>
            <div className="flex justify-center  pt-7 pb-5">
              <div className="w-1/2">
                <Button loading={isLoading} className="w-full" primary>
                  Update
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ComplaintsEditPage;

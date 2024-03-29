import { useParams } from "react-router-dom";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";
import { authKey } from "../../../../shared/config/constaints";
import { useGetComplaintByIdQuery } from "../../../../redux/features/api/complaints";
import { useEffect, useState } from "react";
import { ProductsProps } from "../ComplaintOrderDetails/config/types";
import Button from "../../../../common/components/Button";
import TextArea from "../../../../common/components/TextArea/TextArea";
import Input from "../../../../common/components/Input";
import InputFilter from "../../../../common/components/InputFilter/InputFilter";
import Navbar from "../../../../common/widgets/Navbar/Navbar";
import { useGetBrandsQuery } from "../../../../redux/features/api/Brand";
import {
  useGetCategoryQuery,
  useGetMainCategoryQuery,
} from "../../../../redux/features/api/Category";
import LoadingPage from "../../../../common/components/LoadingPage/LoadingPage";

const ComplaintsEditPage = () => {
  const { id } = useParams();
  const [complaintsSingleData, setComplaintsSingleData] =
    useState<ProductsProps | null>(null);
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [mainCategories, setMainCategories] = useState([]);
  const [brandValue, setBrandValue] = useState("");
  const [mainCategoryValue, setMainCategoryValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");
  const token = getFromLocalStorage(authKey);
  const {
    data: complaintsData,
    isError: complaintsError,
    isLoading: complaintsLoading,
  } = useGetComplaintByIdQuery({ id, token });

  const {
    data: brandData,
    isError: brandsError,
    isLoading: brandsLoading,
  } = useGetBrandsQuery({});

  const {
    data: categoryData,
    isError: categoryError,
    isLoading: categoryLoading,
  } = useGetCategoryQuery({});

  const {
    data: mainCategoryData,
    isError: mainCategoryError,
    isLoading: mainCategoryLoading,
  } = useGetMainCategoryQuery({});

  useEffect(() => {
    if (!brandsError && !brandsLoading) {
      setBrands(brandData?.data);
    }
    if (!categoryLoading && !categoryError) {
      setCategories(categoryData?.data);
    }
    if (!mainCategoryLoading && !mainCategoryError) {
      setMainCategories(mainCategoryData?.data);
    }
    if (!complaintsError && !complaintsLoading) {
      setComplaintsSingleData(complaintsData?.data?.products);
    }
  }, [
    brandData,
    brandsError,
    brandsLoading,
    categoryData,
    categoryError,
    categoryLoading,
    mainCategoryData,
    mainCategoryError,
    mainCategoryLoading,
    complaintsData,
    complaintsError,
    complaintsLoading,
  ]);

  const handleAddItem = (event: React.FormEvent<HTMLFormElement>) => {
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

    const brand_name = (
      form.elements.namedItem("brand_name") as HTMLInputElement
    ).value;
    // const category_name = (
    //   form.elements.namedItem("main_category") as HTMLInputElement
    // ).value;

    const category = (form.elements.namedItem("category") as HTMLInputElement)
      .value;
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

    const data = {
      model_number,
      serial_number,
      attachments,
      problems,
      category,
      category_name: mainCategoryValue,
      brand_name,
    };

    console.log(data);
    // form.reset();
  };

  if (complaintsLoading) {
    return <LoadingPage />;
  }

  return (
    <div className="px-5">
      <Navbar name={"Complaint's Update"} />
      <div className="grid grid-cols-[auto,320px] gap-1  mt-10 ">
        <div className="py-5  rounded-md bg-[#FBFBFB] px-5 relative">
          <div className=" absolute right-5 top-5"></div>
          <form onSubmit={handleAddItem}>
            <div className="grid grid-cols-3  gap-8 mt-20">
              <div className="col-span-3 grid grid-cols-3 gap-8">
                {/* Brand Name  */}
                {/* <div>
                    <Input
                      defaultValue={""}
                      inputName="brand_name"
                      inputPlaceholder="Brand Name"
                      labelName="Brand Name"
                    ></Input>
                  </div> */}

                {/* Partner Name  */}
                {/* <div>
                    <Input
                      defaultValue={""}
                      required
                      inputName="partner_id"
                      labelName="Partner Name"
                      inputPlaceholder="Partner Name"
                    />
                  </div> */}
                {/* Contact Number  */}
                {/* <div>
                    <Input
                      defaultValue={""}
                      required
                      inputPlaceholder="Contact Number"
                      labelName="Contact Number"
                      inputName="contact_number"
                    ></Input>
                  </div> */}
                {/* Email  */}
                {/* <div>
                    <Input
                      defaultValue={""}
                      required
                      inputPlaceholder="Email"
                      inputName="email"
                      labelName="Email"
                    ></Input>
                  </div> */}
                {/* Address  */}
                {/* <div>
                    <Input
                      defaultValue={""}
                      required
                      inputName="address"
                      inputPlaceholder="Address"
                      labelName="Address"
                    ></Input>
                  </div> */}
              </div>

              <div className="col-span-1 gap-8">
                {/* Brand Name  */}
                <div>
                  <InputFilter
                    Filter={brands}
                    defaultValue={
                      (complaintsSingleData &&
                        complaintsSingleData?.brand_name) ||
                      ""
                    }
                    required
                    inputName="brand_name"
                    placeholder="Brand Name"
                    label="Brand Name"
                    onChange={(value) => setBrandValue(value)}
                  />
                </div>

                {/* Partner Name  */}
                {/* <div>
                    <SelectForPartner
                      selectPartner={selectPartner}
                      setSelectPartner={setSelectPartner}
                      defaultValue={defaultPartnerName}
                      IsDisabled={warrantyAddedItem?.length > 0 ? true : false}
                      required
                      inputName="partner_id"
                      placeholder="Partner Name"
                      label="Partner Name"
                      Filter={partners}
                    />
                  </div> */}
                {/* Contact Number  */}
                {/* <div>
                    <Input
                      defaultValue={`${
                        selectPartner || partnerInfo?.contactNo
                          ? selectPartner?.contactNo || partnerInfo?.contactNo
                          : ""
                      }`}
                      IsDisabled
                      required
                      inputPlaceholder="Contact Number"
                      labelName="Contact Number"
                      inputName="contact_number"
                    />
                  </div> */}
              </div>

              {/* main category  */}
              <div>
                <InputFilter
                  defaultValue={
                    (complaintsSingleData &&
                      complaintsSingleData?.category_name) ||
                    ""
                  }
                  required
                  inputName="main_category"
                  placeholder="Main Category"
                  label="Main Category"
                  Filter={mainCategories}
                  onChange={(value) => setMainCategoryValue(value)}
                />
              </div>
              {/* category  */}
              <div>
                <InputFilter
                  defaultValue={
                    (complaintsSingleData && complaintsSingleData?.category) ||
                    ""
                  }
                  required
                  inputName="category"
                  placeholder="Category"
                  label="Category"
                  Filter={categories}
                  onChange={(value) => setCategoryValue(value)}
                />
              </div>

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
                <Button className="w-full" primary>
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

import { useEffect, useState } from "react";
import {
  PartnerProps,
  warrantyPartnerProps,
  warrantyUpdateAddedItemProps,
} from "./config/types";
import { useComplaintAddMutation } from "../../../../redux/features/api/complaints";
import { useGetPartnersQuery } from "../../../../redux/features/api/Partner";
import { useGetBrandsQuery } from "../../../../redux/features/api/Brand";
import {
  useGetCategoryQuery,
  useGetMainCategoryQuery,
} from "../../../../redux/features/api/Category";
import Navbar from "../../../../common/widgets/Navbar/Navbar";
import Button from "../../../../common/components/Button";
import Input from "../../../../common/components/Input";
import InputFilter from "../../../../common/components/InputFilter/InputFilter";
import SelectForPartner from "../../../../common/components/SelectForPartner/SelectForPartner";
import TextArea from "../../../../common/components/TextArea/TextArea";

import { defaultPartnerInfoStatic } from "./config/constants";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";
import { defaultPartner } from "./helpers/findDefaultPartner";
import { handleDataSubmit } from "./helpers/submitData";
import { deleteAll, deleteData } from "./helpers/deleteProducts";

const ComplaintAddForWarranty = () => {
  // other state
  const [warrantyAddedItem, setWarrantyAddedItem] = useState<
    warrantyUpdateAddedItemProps[]
  >([]);
  const [selectPartner, setSelectPartner] = useState<PartnerProps | null>(null);

  const [selectData, setSelectData] =
    useState<warrantyUpdateAddedItemProps | null>(null);
  const [isNewPartner, setIsNewPartner] = useState(false);
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [partners, setPartners] = useState([]);
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [mainCategories, setMainCategories] = useState([]);
  const [partnerInfo, setPartnerInfo] = useState<warrantyPartnerProps>(
    defaultPartnerInfoStatic
  );
  // redux
  const [addComplaint, { isLoading }] = useComplaintAddMutation();
  const {
    data: partnersData,
    isLoading: partnerLoading,
    isError: partnerError,
  } = useGetPartnersQuery({});
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
    if (!partnerLoading && !partnerError) {
      setPartners(partnersData?.data);
    }
    if (!brandsError && !brandsLoading) {
      setBrands(brandData?.data);
    }
    if (!categoryLoading && !categoryError) {
      setCategories(categoryData?.data);
    }
    if (!mainCategoryLoading && !mainCategoryError) {
      setMainCategories(mainCategoryData?.data);
    }
  }, [
    partnerLoading,
    partnerError,
    partnersData,
    brandData,
    brandsError,
    brandsLoading,
    categoryData,
    categoryError,
    categoryLoading,
    mainCategoryData,
    mainCategoryError,
    mainCategoryLoading,
  ]);

  useEffect(() => {
    const storedAddedItem = getFromLocalStorage("warrantyAddedItem");
    const storedPartnerInfo = getFromLocalStorage("partnerInfo");
    const storedNewCustomer = getFromLocalStorage("newCustomer");
    if (storedAddedItem) {
      setWarrantyAddedItem(JSON.parse(storedAddedItem));
    }
    if (storedPartnerInfo) {
      setPartnerInfo(JSON.parse(storedPartnerInfo));
      setIsNewPartner(false);
    }
    if (storedNewCustomer) {
      setPartnerInfo(JSON.parse(storedNewCustomer));
      setIsNewPartner(true);
    } else {
      setIsNewPartner(false);
    }
  }, []);

  const handleAddItem = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget; // Use currentTarget for the form element
    const partner_id = (
      form.elements.namedItem("partner_id") as HTMLInputElement
    ).value;
    const contactNo = selectPartner?.contactNo;
    const contact_number = (
      form.elements.namedItem("contact_number") as HTMLInputElement
    )?.value;
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;
    const address = (form.elements.namedItem("address") as HTMLInputElement)
      ?.value;

    const brand_name = (
      form.elements.namedItem("brand_name") as HTMLInputElement
    ).value;
    const category_name = (
      form.elements.namedItem("main_category") as HTMLInputElement
    ).value;
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
    const newCustomer = {
      partner_id,
      contact_number,
      email: email,
      address: address,
      brand_name,
    };
    const partner = {
      partner_id,
      contactNo,
      brand_name,
    };

    if (isNewPartner) {
      setPartnerInfo(newCustomer);
      localStorage.setItem("newCustomer", JSON.stringify(newCustomer));
    }

    if (!isNewPartner && warrantyAddedItem?.length <= 0) {
      setPartnerInfo(partner);
      localStorage.setItem("partnerInfo", JSON.stringify(partner));
    }

    const data = {
      model_number,
      serial_number,
      attachments,
      problems,
      category,
      category_name,
    };

    let updatedAddedItem: warrantyUpdateAddedItemProps[];

    if (!Array.isArray(warrantyAddedItem)) {
      updatedAddedItem = [data];
    } else if (selectedItem !== null) {
      updatedAddedItem = [
        ...warrantyAddedItem.slice(0, selectedItem),
        data,
        ...warrantyAddedItem.slice(selectedItem + 1),
      ];
      setSelectedItem(null);
      setSelectData(null);
    } else {
      updatedAddedItem = [...warrantyAddedItem, data];
    }

    setWarrantyAddedItem(updatedAddedItem);
    localStorage.setItem("warrantyAddedItem", JSON.stringify(updatedAddedItem));
    form.reset();
  };

  const updateData = (index: number) => {
    const selectedItemData: warrantyUpdateAddedItemProps =
      warrantyAddedItem[index];

    setSelectedItem(index);
    setSelectData(selectedItemData);
  };

  const { brand_name, partner_id } = partnerInfo;
  const fullData = {
    partner_id,
    brand_name,
    inputFields: warrantyAddedItem,
  };
  const defaultPartnerInfo =
    partnerInfo && defaultPartner(partnerInfo, partners);

  const defaultPartnerName =
    defaultPartnerInfo &&
    `${defaultPartnerInfo?.contact_person} (${defaultPartnerInfo?.company})`;

  console.log(selectPartner, partnerInfo);
  return (
    <div className="px-5">
      <Navbar name={"Complaint's Add"}></Navbar>
      <div className="grid grid-cols-[auto,320px] gap-1  mt-10 ">
        <div className="py-5  rounded-md bg-[#FBFBFB] px-5 relative">
          <div className=" absolute right-5 top-5">
            <Button
              disabled={warrantyAddedItem?.length > 0 ? true : false}
              onClick={() => setIsNewPartner(!isNewPartner)}
              primary
              className="text-xs !px-2 !py-1"
            >
              {isNewPartner ? "Partner" : "New Walk In Customer"}
            </Button>
          </div>
          <form onSubmit={handleAddItem}>
            <div className="grid grid-cols-3  gap-8 mt-20">
              {isNewPartner ? (
                <div className="col-span-3 grid grid-cols-3 gap-8">
                  {/* Brand Name  */}
                  <div>
                    <Input
                      defaultValue={`${
                        partnerInfo ? partnerInfo?.brand_name : ""
                      }`}
                      IsDisabled={warrantyAddedItem?.length > 0 ? true : false}
                      inputName="brand_name"
                      inputPlaceholder="Brand Name"
                      labelName="Brand Name"
                    ></Input>
                  </div>

                  {/* Partner Name  */}
                  <div>
                    <Input
                      defaultValue={`${
                        partnerInfo ? partnerInfo?.partner_id : ""
                      }`}
                      IsDisabled={warrantyAddedItem?.length > 0 ? true : false}
                      required
                      inputName="partner_id"
                      labelName="Partner Name"
                      inputPlaceholder="Partner Name"
                    />
                  </div>
                  {/* Contact Number  */}
                  <div>
                    <Input
                      defaultValue={`${
                        partnerInfo ? partnerInfo?.contact_number : ""
                      }`}
                      IsDisabled={warrantyAddedItem?.length > 0 ? true : false}
                      required
                      inputPlaceholder="Contact Number"
                      labelName="Contact Number"
                      inputName="contact_number"
                    ></Input>
                  </div>
                  {/* Email  */}
                  <div>
                    <Input
                      defaultValue={`${
                        warrantyAddedItem?.length > 0 ? partnerInfo?.email : ""
                      }`}
                      IsDisabled={warrantyAddedItem?.length > 0 ? true : false}
                      required
                      inputPlaceholder="Email"
                      inputName="email"
                      labelName="Email"
                    ></Input>
                  </div>
                  {/* Address  */}
                  <div>
                    <Input
                      defaultValue={`${
                        warrantyAddedItem?.length > 0
                          ? partnerInfo?.address
                          : ""
                      }`}
                      IsDisabled={warrantyAddedItem?.length > 0 ? true : false}
                      required
                      inputName="address"
                      inputPlaceholder="Address"
                      labelName="Address"
                    ></Input>
                  </div>
                </div>
              ) : (
                <div className="col-span-3 grid grid-cols-3 gap-8">
                  {/* Brand Name  */}
                  <div>
                    <InputFilter
                      IsDisabled={warrantyAddedItem?.length > 0 ? true : false}
                      Filter={brands}
                      defaultValue={`${
                        partnerInfo ? partnerInfo?.brand_name : ""
                      }`}
                      required
                      inputName="brand_name"
                      placeholder="Brand Name"
                      label="Brand Name"
                    />
                  </div>

                  {/* Partner Name  */}
                  <div>
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
                  </div>
                  {/* Contact Number  */}
                  <div>
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
                  </div>
                </div>
              )}

              {/* main category  */}
              <div>
                <InputFilter
                  defaultValue={`${
                    selectData ? selectData?.category_name : ""
                  }`}
                  required
                  inputName="main_category"
                  placeholder="Main Category"
                  label="Main Category"
                  Filter={mainCategories}
                />
              </div>
              {/* category  */}
              <div>
                <InputFilter
                  defaultValue={`${selectData ? selectData?.category : ""}`}
                  required
                  inputName="category"
                  placeholder="Category"
                  label="Category"
                  Filter={categories}
                />
              </div>

              {/* Model Number   */}
              <div>
                <Input
                  defaultValue={`${selectData ? selectData?.model_number : ""}`}
                  required
                  inputName="model_number"
                  labelName="Model Number"
                ></Input>
              </div>
              {/* Serial Number  */}
              <div>
                <Input
                  defaultValue={`${
                    selectData ? selectData?.serial_number : ""
                  }`}
                  required
                  inputName="serial_number"
                  labelName="Serial Number"
                ></Input>
              </div>

              {/* Remark  */}
              <div>
                <Input
                  defaultValue={`${selectData ? selectData?.attachments : ""}`}
                  required
                  inputName="remark"
                  labelName="Remark"
                ></Input>
              </div>
              {/* Problem  */}
              <div className="col-span-3">
                <TextArea
                  defaultValue={`${selectData ? selectData?.problems : ""}`}
                  name="problems"
                  label="Problems"
                  placeholder="Write here..."
                />
              </div>
              <div className="col-span-3  justify-end flex items-end pb-5">
                <Button className="!text-solidBlack rounded-sm  !bg-[#D9D9D9]">
                  Add {warrantyAddedItem?.length > 0 ? "More" : "Please"}
                </Button>
              </div>
            </div>
          </form>
          <div className="flex justify-center  pt-7 pb-5">
            <div className="w-1/2">
              <Button
                disabled={warrantyAddedItem?.length <= 0}
                loading={isLoading}
                className="w-full"
                onClick={() =>
                  handleDataSubmit(
                    addComplaint,
                    fullData,
                    setWarrantyAddedItem,
                    setPartnerInfo,
                    setIsNewPartner
                  )
                }
                primary
              >
                Submit {warrantyAddedItem?.length > 0 && "All"}
              </Button>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-center font-semibold text-xl underline">
            Added Item
          </h1>
          {warrantyAddedItem?.length > 0 && (
            <div className="py-5 text-center">
              <Button
                onClick={() =>
                  deleteAll(
                    setPartnerInfo,
                    setWarrantyAddedItem,
                    setIsNewPartner,
                    setSelectPartner
                  )
                }
                danger
                className="px-2 py-1 text-xs"
              >
                Delete All
              </Button>
            </div>
          )}
          <div>
            <div className="mt-5 mx-2 flex flex-col gap-5">
              {warrantyAddedItem.length ? (
                warrantyAddedItem.map((item, index) => (
                  <div
                    key={index}
                    className="p-5 rounded-xl shadow-xl space-y-5 bg-lightGray"
                  >
                    <div className="text-base font-semibold overflow-x-auto">
                      Main Category :
                      <span className="text-sm font-normal ">
                        {item?.category_name}
                      </span>
                    </div>

                    <div className="text-base font-semibold overflow-x-auto">
                      Category :{" "}
                      <span className="text-sm font-normal">
                        {item?.category}
                      </span>
                    </div>
                    <div className="text-base font-semibold overflow-x-auto">
                      Model Number :{" "}
                      <span className="text-sm font-normal">
                        {item?.model_number}
                      </span>
                    </div>
                    <div className="text-base font-semibold overflow-x-auto">
                      Serial Number :{" "}
                      <span className="text-sm font-normal">
                        {item?.serial_number}
                      </span>
                    </div>
                    <div className="text-base font-semibold overflow-x-auto">
                      Remark :{" "}
                      <span className="text-sm font-normal">
                        <span>{item?.attachments}</span>
                      </span>
                    </div>

                    <div className="flex justify-between ">
                      <Button
                        className="px-2 py-1 text-xs"
                        onClick={() =>
                          deleteData(
                            index,
                            warrantyAddedItem,
                            setPartnerInfo,
                            setWarrantyAddedItem,
                            setSelectedItem,
                            setSelectPartner
                          )
                        }
                        danger
                      >
                        Delete
                      </Button>
                      <Button
                        className="px-2 py-1 text-xs"
                        onClick={() => updateData(index)}
                        primary
                      >
                        Update
                      </Button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="font-semibold  text-center mt-20">
                  Emty Data
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplaintAddForWarranty;

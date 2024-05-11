/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import {
  PartnerProps,
  warrantyPartnerProps,
  warrantyUpdateAddedItemProps,
} from "./config/types";
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
import { useComplaintAddMutation } from "../../../../redux/features/api/complaints";
import {
  handleAddItem,
  updateData,
} from "../../../../shared/helpers/WarrantyComplaintsAddItem";
import { partnerProps } from "../../../../shared/config/types";
import {
  fetchData,
  handleChangeInput,
  handleSuggestionClick,
} from "../../../../shared/helpers/Suggestions";
import { authKey, emptyData } from "../../../../shared/config/constaints";

const ComplaintAddForWarranty = () => {
  const token = getFromLocalStorage(authKey);
  const [createComplaints] = useComplaintAddMutation();

  // other state
  const [warrantyAddedItem, setWarrantyAddedItem] = useState<
    warrantyUpdateAddedItemProps[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingSuggestion, setIsLoadingSuggestion] = useState(false);

  const [selectPartner, setSelectPartner] = useState<PartnerProps | null>(null);
  const [searchInput, setSearchInput] = useState<string | null>(null);
  const [suggestions, setSuggestions] = useState<partnerProps[]>([]);

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
  const [brandValue, setBrandValue] = useState("");
  const [mainCategoryValue, setMainCategoryValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");

  const mainCategoryId =
    mainCategories?.length &&
    mainCategories?.find((item) => item?.value === mainCategoryValue);

  const brandId =
    brands?.length && brands?.find((item) => item?.value === brandValue);
  // redux
  // const [addComplaint, { isLoading }] = useComplaintAddMutation();
  const query = `asp=${brandId?.id}&limit=50&sort=-partner_name`;
  const {
    data: partnersData,
    isLoading: partnerLoading,
    isError: partnerError,
  } = useGetPartnersQuery({ token, query });
  const {
    data: brandData,
    isError: brandsError,
    isLoading: brandsLoading,
  } = useGetBrandsQuery({});
  const {
    data: categoryData,
    isError: categoryError,
    isLoading: categoryLoading,
  } = useGetCategoryQuery({ mainCategoryId, brandId });

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

  useEffect(() => {
    if (searchInput) {
      fetchData(searchInput, true, setIsLoadingSuggestion, setSuggestions);
    }
  }, [searchInput]);

  const {
    partner_id,
    partner_name,
    contact_number,
    email,
    address,
    brand_name,
  } = partnerInfo;

  const fullData: any = {
    partner_id,
    contact_number,
    address,
    partner_name,
    email,
    brand_name,
    inputFields: warrantyAddedItem.map(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ({ mainCategoryValue, ...rest }) => ({
        ...rest,
      })
    ),
  };
  console.log(selectData);
  const defaultPartnerInfo =
    partnerInfo && defaultPartner(partnerInfo, partners);
  const defaultPartnerName =
    defaultPartnerInfo &&
    `${defaultPartnerInfo?.contact_person} (${defaultPartnerInfo?.company})`;

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
          <form
            onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
              handleAddItem(
                event,
                selectPartner,
                brandValue,
                isNewPartner,
                warrantyAddedItem,
                mainCategoryValue,
                categoryValue,
                selectedItem,
                setPartnerInfo,
                setSelectedItem,
                setSelectData,
                setWarrantyAddedItem
              )
            }
          >
            <div className="grid grid-cols-3  gap-8 mt-20">
              {isNewPartner ? (
                <div className="col-span-3 grid grid-cols-3 gap-8">
                  {/* Brand Name  */}

                  <div>
                    <InputFilter
                      isDisabled={warrantyAddedItem?.length > 0 ? true : false}
                      Filter={brands}
                      defaultValue={
                        partnerInfo && partnerInfo.brand_name
                          ? partnerInfo.brand_name
                          : ""
                      }
                      required
                      inputName="brand_name_for_new"
                      placeholder="Brand Name"
                      label="Brand Name"
                      onChange={(value) => setBrandValue(value)}
                    />
                  </div>

                  {/* Partner Name  */}
                  <div>
                    <Input
                      defaultValue={`${
                        partnerInfo?.partner_name
                          ? partnerInfo?.partner_name
                          : ""
                      }`}
                      IsDisabled={warrantyAddedItem?.length > 0 ? true : false}
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {
                        setSearchInput(event.target.value);
                        handleChangeInput(event, setPartnerInfo);
                      }}
                      required
                      inputName="partner_name"
                      labelName="Partner Name"
                      inputPlaceholder="Partner Name"
                    />
                    {isLoadingSuggestion && (
                      <p className="bg-slate-300 mx-2 p-2 w-full h-11">
                        Loading...
                      </p>
                    )}
                    {suggestions.length > 0 && (
                      <ul className=" bg-slate-300  rounded   suggestions-list ">
                        {suggestions &&
                          suggestions?.map((suggestion, index) => (
                            <li
                              key={index}
                              onClick={() =>
                                handleSuggestionClick(
                                  suggestion,
                                  setPartnerInfo,
                                  setSearchInput,
                                  setSuggestions
                                )
                              }
                              className="suggestion-item"
                            >
                              {`${suggestion?.name}-${suggestion?.contact_number}`}
                            </li>
                          ))}
                      </ul>
                    )}
                  </div>
                  {/* Contact Number  */}
                  <div>
                    <Input
                      defaultValue={`${
                        partnerInfo?.contact_number
                          ? partnerInfo?.contact_number
                          : ""
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
                      defaultValue={`${partnerInfo ? partnerInfo?.email : ""}`}
                      IsDisabled={warrantyAddedItem?.length > 0 ? true : false}
                      inputPlaceholder="Email"
                      inputName="email"
                      labelName="Email"
                    ></Input>
                  </div>
                  {/* Address  */}
                  <div>
                    <Input
                      defaultValue={`${
                        partnerInfo ? partnerInfo?.address : ""
                      }`}
                      IsDisabled={warrantyAddedItem?.length > 0 ? true : false}
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
                      isDisabled={warrantyAddedItem?.length > 0 ? true : false}
                      Filter={brands}
                      defaultValue={
                        partnerInfo && partnerInfo.brandValue
                          ? partnerInfo.brandValue
                          : ""
                      }
                      required
                      inputName="brand_name"
                      placeholder="Brand Name"
                      label="Brand Name"
                      onChange={(value) => setBrandValue(value)}
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
                  onChange={(value) => setMainCategoryValue(value)}
                />
              </div>
              {/* category  */}
              <div>
                <InputFilter
                  defaultValue={`${
                    selectData ? selectData?.categoryValue : ""
                  }`}
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
                {selectData ? (
                  <Button className="!text-solidBlack rounded-sm  !bg-[#D9D9D9]">
                    Save
                  </Button>
                ) : (
                  <Button className="!text-solidBlack rounded-sm  !bg-[#D9D9D9]">
                    Add {warrantyAddedItem?.length > 0 ? "More" : "Please"}
                  </Button>
                )}
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
                    setIsLoading,
                    fullData,
                    setWarrantyAddedItem,
                    setPartnerInfo,
                    setIsNewPartner,
                    createComplaints
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
                        {item?.categoryValue}
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
                        onClick={() =>
                          updateData(
                            index,
                            warrantyAddedItem,
                            setSelectedItem,
                            setSelectData
                          )
                        }
                        primary
                      >
                        Edit
                      </Button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="font-semibold  text-center mt-20">
                  {emptyData}
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

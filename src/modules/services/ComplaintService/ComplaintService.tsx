/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import Button from "../../../common/components/Button";
import Input from "../../../common/components/Input";
import TextArea from "../../../common/components/TextArea/TextArea";
import Navbar from "../../../common/widgets/Navbar/Navbar";
import { ComplaintServiceProps, updateAddedItemProps } from "./config/types";
import { defaultPartnerValue } from "./config/constants";

import {
  useGetMainCategoryQuery,
  useGetServiceCategoryQuery,
} from "../../../redux/features/api/Category";
import InputFilter from "../../../common/components/InputFilter/InputFilter";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setIds } from "../../../redux/features/slice/Complaints service Ids for payment/ComplaintsServicePaymentIds";
import { deleteAll, deleteData } from "./helpers/deleteProducts";
import { handleDataSubmit } from "./helpers/submitData";

import { handleAddItem, updateData } from "./helpers/addItem";
import {
  fetchData,
  handleChangeInput,
  handleSuggestionClick,
} from "../../../shared/helpers/Suggestions";
import { partnerProps } from "../../../shared/config/types";
import ErrorShow from "../../../common/components/Error Show/ErrorShow";

1;
const ComplaintService: React.FC<ComplaintServiceProps> = () => {
  const [addedItem, setAddedItem] = useState<updateAddedItemProps[]>([]);
  const [categories, setCategories] = useState([]);
  const [mainCategories, setMainCategories] = useState([]);
  const [mainCategoryValue, setMainCategoryValue] = useState("");
  const [selectData, setSelectData] = useState<updateAddedItemProps | null>(
    null
  );
  const [isLoadingSuggestion, setIsLoadingSuggestion] = useState(false);
  const [searchInput, setSearchInput] = useState<string | null>(null);
  const [suggestions, setSuggestions] = useState<partnerProps[]>([]);
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const [partnerInfo, setPartnerInfo] =
    useState<partnerProps>(defaultPartnerValue);
  const [redirectToPayment, setRedirectToPayment] = useState(false);
  const [loading, setloading] = useState(false);
  const [defaultCategory, setDefaultCategory] = useState<any>();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const mainCategoryId =
    mainCategories?.length &&
    mainCategories?.find(
      (item) =>
        item?.value === mainCategoryValue ||
        item.value === selectData?.category_name
    );

  const {
    data: mainCategoryData,
    isError: mainCategoryIsError,
    isLoading: mainCategoryLoading,
    error: mainCategoryError,
  } = useGetMainCategoryQuery({});

  const {
    data: categoryData,
    isError: categoryIsError,
    isLoading: categoryLoading,
    error: categoryError,
  } = useGetServiceCategoryQuery({ mainCategoryId });

  useEffect(() => {
    const storedAddedItem = localStorage.getItem("addedItem");
    const storedPartnerInfo = localStorage.getItem("customerInfo");

    if (storedAddedItem) {
      setAddedItem(JSON.parse(storedAddedItem));
    }
    if (storedPartnerInfo) {
      setPartnerInfo(JSON.parse(storedPartnerInfo));
    }
  }, []);

  const { name: partner_name, contact_number, email, address } = partnerInfo;

  const fullData = {
    partner_name,
    contact_number,
    email,
    address,
    addedItem,
  };

  useEffect(() => {
    if (searchInput) {
      fetchData(searchInput, false, setIsLoadingSuggestion, setSuggestions);
    }
  }, [searchInput]);

  useEffect(() => {
    if (!categoryLoading && !categoryIsError) {
      setCategories(categoryData?.data);
    }

    if (!mainCategoryLoading && !mainCategoryIsError) {
      setMainCategories(mainCategoryData?.data);
    }
  }, [
    categoryData,
    categoryIsError,
    categoryLoading,
    mainCategoryData,
    mainCategoryIsError,
    mainCategoryLoading,
  ]);

  useEffect(() => {
    if (selectData) {
      const defaultCategory =
        categories?.length &&
        categories?.find((item) => item?.id === selectData?.category);
      setDefaultCategory(defaultCategory);
    }
  }, [selectData, categories]);

  if (categoryIsError || mainCategoryIsError) {
    return <ErrorShow error={categoryError || mainCategoryError} />;
  }
  return (
    <div className="px-5">
      <Navbar name={"Complaint's Add"}></Navbar>
      <div className="grid grid-cols-[auto,320px] gap-1  mt-10 ">
        <div className="py-5  rounded-md bg-[#FBFBFB] px-5">
          <form
            onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
              handleAddItem(
                event,
                addedItem,
                mainCategoryValue,
                selectedItem,
                setPartnerInfo,
                setSelectedItem,
                setSelectData,
                setAddedItem
              )
            }
          >
            <div className="grid grid-cols-4 gap-8">
              {/* Customers Name  */}
              <div>
                <Input
                  defaultValue={`${partnerInfo ? partnerInfo?.name : ""}`}
                  IsDisabled={addedItem?.length > 0 ? true : false}
                  required
                  inputName="partner_name"
                  inputPlaceholder="Partner name"
                  labelName="Partner name"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setSearchInput(event.target.value);
                    handleChangeInput(event, setPartnerInfo);
                  }}
                />
                {isLoadingSuggestion && (
                  <p className="bg-slate-300 mx-2 p-2 w-full h-11">
                    Loading...
                  </p>
                )}
                {suggestions.length > 0 && (
                  <ul className=" bg-slate-200 px-2  rounded   suggestions-list ">
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
                          className="suggestion-item cursor-pointer"
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
                    partnerInfo ? partnerInfo?.contact_number : ""
                  }`}
                  IsDisabled={addedItem?.length > 0 ? true : false}
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
                  IsDisabled={addedItem?.length > 0 ? true : false}
                  inputPlaceholder="Email"
                  inputName="email"
                  labelName="Email"
                ></Input>
              </div>
              {/* Address  */}
              <div>
                <Input
                  defaultValue={`${partnerInfo ? partnerInfo?.address : ""}`}
                  IsDisabled={addedItem?.length > 0 ? true : false}
                  inputName="address"
                  inputPlaceholder="Address"
                  labelName="Address"
                ></Input>
              </div>

              {/* Brand Name  */}
              <div>
                <Input
                  defaultValue={`${selectData ? selectData?.brand_name : ""}`}
                  required
                  inputName="brand_name"
                  inputPlaceholder="Brand Name"
                  labelName="Brand Name"
                ></Input>
              </div>
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
                  defaultValue={`${selectData ? defaultCategory?.value : ""}`}
                  required
                  inputName="category"
                  placeholder="Category"
                  label="Category"
                  Filter={categories}
                  // onChange={(value) => setCategoryValue(value)}
                />
              </div>
              {/* Model Number   */}
              <div>
                <Input
                  defaultValue={`${selectData ? selectData?.model_number : ""}`}
                  required
                  inputName="model_number"
                  inputPlaceholder="Model Number"
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
                  inputPlaceholder="Serial Number"
                  labelName="Serial Number"
                ></Input>
              </div>

              {/* Problems  */}
              <div className="col-span-3">
                <Input
                  defaultValue={`${selectData ? selectData?.problems : ""}`}
                  inputName="problem"
                  labelName="Problem"
                  inputPlaceholder="Write Problem"
                ></Input>
              </div>

              {/* attachment  */}
              <div className="col-span-4">
                <TextArea
                  defaultValue={`${selectData ? selectData?.attachments : ""}`}
                  name="attachments"
                  placeholder="Remark"
                  label="Remark"
                />
              </div>
              {/* isWindowsInstallation  */}
              <div className="col-span-2">
                <label
                  className="pr-2 flex items-center space-x-2"
                  htmlFor="isWindowsInstallation"
                >
                  <span>Is Windows Installation?</span>
                  <input
                    defaultChecked={
                      selectData?.isWindowsInstallations ? true : false
                    }
                    className="w-5 h-5"
                    type="checkbox"
                    name="isWindowsInstallations"
                  />
                </label>
              </div>
              {/* is SSD/HDD full Format  */}
              <div className="col-span-2">
                <label
                  className="pr-2 flex items-center space-x-2"
                  htmlFor="isSSDOrHDDFullFormat"
                >
                  <span>Is SSD/HDD full format?</span>
                  <input
                    defaultChecked={
                      selectData?.isSSDOrHDDFullFormat ? true : false
                    }
                    className="w-5 h-5"
                    type="checkbox"
                    name="isSSDOrHDDFullFormat"
                  />
                </label>
              </div>
              <div className="flex justify-end col-span-4">
                {selectData ? (
                  <Button className="!text-solidBlack rounded-sm  !bg-[#D9D9D9]">
                    Save
                  </Button>
                ) : (
                  <Button className="!text-solidBlack rounded-sm  !bg-[#D9D9D9]">
                    Add {addedItem?.length > 0 ? "More" : "Please"}
                  </Button>
                )}
              </div>
            </div>
          </form>
          <div className="flex justify-center  py-10">
            <div className="flex gap-20">
              <Button
                animationLength={addedItem?.length}
                loading={!redirectToPayment && loading}
                onClick={() =>
                  handleDataSubmit(
                    setAddedItem,
                    fullData,
                    dispatch,
                    setPartnerInfo,
                    navigate,
                    setRedirectToPayment,
                    false,
                    setIds,
                    setloading
                  )
                }
                disabled={addedItem?.length <= 0}
                primary
              >
                Skip & Submit
              </Button>

              <Button
                loading={loading && redirectToPayment}
                onClick={() =>
                  handleDataSubmit(
                    setAddedItem,
                    fullData,
                    dispatch,
                    setPartnerInfo,
                    navigate,
                    setRedirectToPayment,
                    true,
                    setIds,
                    setloading
                  )
                }
                disabled={addedItem?.length <= 0}
                primary
              >
                Payment & Submit
              </Button>
            </div>
          </div>
        </div>
        <div className="">
          <h1 className="text-center font-semibold text-xl underline">
            Added Item
          </h1>
          {addedItem?.length > 0 && (
            <div className="py-5 text-center">
              <Button
                onClick={() => deleteAll(setPartnerInfo, setAddedItem)}
                danger
                className="px-2 py-1 text-xs"
              >
                Delete All
              </Button>
            </div>
          )}
          <div>
            <div className="mt-5 mx-2 flex flex-col gap-5">
              {addedItem.length ? (
                addedItem.map((item, index) => (
                  <div
                    key={index}
                    className="p-5 rounded-xl shadow-xl space-y-5 bg-lightGray"
                  >
                    <div className="text-base font-semibold overflow-x-auto">
                      Brand Name :
                      <span className="text-sm font-normal">
                        {item?.brand_name}
                      </span>
                    </div>
                    <div className="text-base font-semibold overflow-x-auto">
                      Model Number :
                      <span className="text-sm font-normal">
                        {item?.model_number}
                      </span>
                    </div>
                    <div className="text-base font-semibold overflow-x-auto">
                      Serial Number :
                      <span className="text-sm font-normal">
                        <span> {item?.serial_number}</span>
                      </span>
                    </div>
                    <div className="text-base font-semibold overflow-x-auto">
                      Remark :
                      <span className="text-sm font-normal">
                        {item?.attachments}
                      </span>
                    </div>

                    <div className="flex justify-between ">
                      <Button
                        className="px-2 py-1 text-xs"
                        onClick={() =>
                          deleteData(
                            index,
                            addedItem,
                            setAddedItem,
                            setSelectedItem
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
                            addedItem,
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
                  Empty Data
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplaintService;

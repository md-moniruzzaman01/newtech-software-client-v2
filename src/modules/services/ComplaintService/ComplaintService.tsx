import { useEffect, useState } from "react";
import Button from "../../../common/components/Button";
import Input from "../../../common/components/Input";
import TextArea from "../../../common/components/TextArea/TextArea";
import Navbar from "../../../common/widgets/Navbar/Navbar";
import {
  ComplaintServiceProps,
  partnerProps,
  updateAddedItemProps,
} from "./config/types";
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
import { fetchData, handleChangeInput, handleSuggestionClick } from "./helpers/suggestion";
import { handleAddItem, updateData } from "./helpers/addItem";

const ComplaintService: React.FC<ComplaintServiceProps> = () => {
  const [addedItem, setAddedItem] = useState<updateAddedItemProps[]>([]);
  const [categories, setCategories] = useState([]);
  const [mainCategories, setMainCategories] = useState([]);
  const [mainCategoryValue, setMainCategoryValue] = useState("");
  const [selectData, setSelectData] = useState<updateAddedItemProps | null>(null);

  const [isLoadingSuggestion, setIsLoadingSuggestion] = useState(false);
  const [searchInput, setSearchInput] = useState<string | null>(null);
  const [suggestions, setSuggestions] = useState<partnerProps[]>([]);
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [partnerInfo, setPartnerInfo] = useState<partnerProps>(defaultPartnerValue);
  const [redirectToPayment, setRedirectToPayment] = useState(false);
  const [loading, setloading] = useState(false);

  const dispatch = useDispatch();


  const navigate = useNavigate();
  const {
    data: mainCategoryData,
    isError: mainCategoryError,
    isLoading: mainCategoryLoading,
  } = useGetMainCategoryQuery({});

  const {
    data: categoryData,
    isError: categoryError,
    isLoading: categoryLoading,
  } = useGetServiceCategoryQuery({});


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


  const { contact_person: partner_name, contactNo: contact_number, email, address } = partnerInfo;

  const fullData = {
    partner_name,
    contact_number,
    email,
    address,
    addedItem,
  };



  useEffect(() => {
    if (searchInput) {
      fetchData(searchInput, setIsLoadingSuggestion, setSuggestions);
    }
  }, [searchInput]);


  useEffect(() => {
    if (!categoryLoading && !categoryError) {
      setCategories(categoryData?.data);
    }

    if (!mainCategoryLoading && !mainCategoryError) {
      setMainCategories(mainCategoryData?.data);
    }
  }, [
    categoryData,
    categoryError,
    categoryLoading,
    mainCategoryData,
    mainCategoryError,
    mainCategoryLoading,
  ]);





  return (
    <div className="px-5">
      <Navbar name={"Complaint's Add"}></Navbar>
      <div className="grid grid-cols-[auto,320px] gap-1  mt-10 ">
        <div className="py-5  rounded-md bg-[#FBFBFB] px-5">
          <form onSubmit={(event: React.FormEvent<HTMLFormElement>) => handleAddItem(event, addedItem, mainCategoryValue, selectedItem, setPartnerInfo, setSelectedItem, setSelectData, setAddedItem)}>
            <div className="grid grid-cols-4 gap-8">
              {/* Customers Name  */}
              <div>
                <Input
                  defaultValue={`${partnerInfo ? partnerInfo?.contact_person : ""
                    }`}
                  IsDisabled={addedItem?.length > 0 ? true : false}
                  required
                  inputName="contact_person"
                  inputPlaceholder="Partner name"
                  labelName="Partner name"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setSearchInput(event.target.value);
                    handleChangeInput(event, setPartnerInfo);
                  }}
                />
                {isLoadingSuggestion && <p className="bg-slate-300 mx-2 p-2 w-full h-11" p-2>Loading...</p>}
                {suggestions.length > 0 && (
                  <ul className=" bg-slate-300  rounded   suggestions-list ">
                    {suggestions && suggestions?.map((suggestion, index) => (
                      <li
                        key={index}
                        onClick={() => handleSuggestionClick(suggestion, setPartnerInfo, setSearchInput, setSuggestions)}
                        className="suggestion-item"
                      >
                        {`${suggestion?.contact_person}-${suggestion?.contactNo}`}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {/* Contact Number  */}
   
              <div>
                <Input
                  defaultValue={`${partnerInfo ? partnerInfo?.contactNo
                    : ""
                    }`}
                  IsDisabled={addedItem?.length > 0 ? true : false}
                  required
                  inputPlaceholder="Contact Number"
                  labelName="Contact Number"
                  inputName="contactNo"
                ></Input>
              </div>
              {/* Email  */}
              <div>
                <Input
                  defaultValue={`${partnerInfo ? partnerInfo?.email : ""}`}
                  IsDisabled={addedItem?.length > 0 ? true : false}
                  required
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
                  required
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
                  defaultValue={`${selectData ? selectData?.category_name : ""
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
                  defaultValue={`${selectData ? selectData?.categoryValue : ""
                    }`}
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
                  defaultValue={`${selectData ? selectData?.serial_number : ""
                    }`}
                  required
                  inputName="serial_number"
                  inputPlaceholder="Serial Number"
                  labelName="Serial Number"
                ></Input>
              </div>

              {/* attachments  */}
              <div className="col-span-2">
                <Input
                  defaultValue={`${selectData ? selectData?.attachments : ""}`}
                  
                  inputName="attachments"
                  inputPlaceholder="Remark"
                  labelName="Remark"
                ></Input>
              </div>

              {/* Problem  */}
              <div className="col-span-3">
                <TextArea
                  defaultValue={`${selectData ? selectData?.problems : ""}`}
                  name="problem"
                  label="Write Problem"
                  placeholder="Write Problem"
                ></TextArea>
                <div className="flex justify-end py-5">
                  <Button className="!text-solidBlack rounded-sm  !bg-[#D9D9D9]">
                    Add More
                  </Button>
                </div>
              </div>
            </div>
          </form>
          <div className="flex justify-center  py-7">
            <div className="flex gap-20">
              <Button
                loading={!redirectToPayment && loading}
                onClick={() => handleDataSubmit(setAddedItem, fullData, dispatch, setPartnerInfo, navigate, setRedirectToPayment, false, setIds, setloading)}
                disabled={addedItem?.length <= 0}
                primary
              >
                Skip & Submit
              </Button>

              <Button
               loading={loading && redirectToPayment}
                onClick={() => handleDataSubmit(setAddedItem, fullData, dispatch, setPartnerInfo, navigate, setRedirectToPayment, true, setIds, setloading)}
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
              <Button onClick={() => deleteAll(setPartnerInfo, setAddedItem)} danger className="px-2 py-1 text-xs">
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
                        onClick={() => deleteData(index, addedItem, setAddedItem, setSelectedItem)}
                        danger
                      >
                        Delete
                      </Button>
                      <Button
                        className="px-2 py-1 text-xs"
                        onClick={() => updateData(index, addedItem, setSelectedItem, setSelectData)}
                        primary
                      >
                        Update
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

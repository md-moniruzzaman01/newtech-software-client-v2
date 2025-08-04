/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import InputFilter from "../../../../../common/components/InputFilter/InputFilter.tsx";
import Input from "../../../../../common/components/Input/Input.tsx";
import SearchFilterInput from "../../../../../common/components/Search Filter Input/SearchFilterInput.tsx";
import Button from "../../../../../common/components/Button/Button.tsx";
import { deleteAll, deleteData } from "../../helpers/deleteProducts.ts";
import { updateData } from "../../helpers/addItem.ts";
import { emptyData } from "../../../../../shared/config/constaints.ts";

const CorporateClientForm = () => {
  // other state
  const [warrantyAddedItem, setWarrantyAddedItem] = useState([]);

  const [selectPartner, setSelectPartner] = useState(null);

  const [selectData, setSelectData] = useState(null);

  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [partners, setPartners] = useState([]);
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [mainCategories, setMainCategories] = useState([]);
  const [partnerInfo, setPartnerInfo] = useState<null | any>(null);
  const [brandValue, setBrandValue] = useState("");
  const [mainCategoryValue, setMainCategoryValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");
  console.log(
    "for remove error",
    selectedItem,
    setPartners,
    setBrands,
    setCategories,
    setMainCategories,
    brandValue,
    mainCategoryValue,
    categoryValue
  );

  return (
    <div>
      <div className="grid grid-cols-[auto,320px] gap-1">
        <div className="px-5">
          <form>
            <div className="grid grid-cols-3  gap-8">
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
                  {/* <SelectForPartner
                      selectPartner={selectPartner}
                      setSelectPartner={setSelectPartner}
                      defaultValue={defaultPartnerName}
                      IsDisabled={warrantyAddedItem?.length > 0 ? true : false}
                      required
                      inputName="partner_id"
                      placeholder="Partner Name"
                      label="Partner Name"
                      Filter={partners}
                    /> */}
                  <SearchFilterInput
                    required
                    isDisabled={warrantyAddedItem?.length > 0 ? true : false}
                    options={partners}
                    labelName="Partner Name"
                    filterName="partner_id"
                    setData={setSelectPartner}
                    data={selectPartner}
                    isMulti={false}
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
                  defaultValue={`${selectData ? selectData?.problems : ""}`}
                  inputName="problems"
                  labelName="Problems"
                  inputPlaceholder="Write here..."
                ></Input>
              </div>

              {/* Problem  */}
              <div className="col-span-3">
                <Input
                  className="pb-7"
                  defaultValue={`${selectData ? selectData?.attachments : ""}`}
                  required
                  inputName="remark"
                  labelName="Remark"
                />
              </div>
              {/* isWindowsInstallation  */}
              <div>
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
              <div>
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

              {/* is doa  */}
              <div>
                <label
                  className="pr-2 flex items-center space-x-2"
                  htmlFor="isDoa"
                >
                  <span>Is DOA?</span>
                  <input
                    defaultChecked={selectData?.isDoa ? true : false}
                    className="w-5 h-5"
                    type="checkbox"
                    name="isDoa"
                  />
                </label>
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
                animationLength={warrantyAddedItem?.length}
                disabled={warrantyAddedItem?.length <= 0}
                className="w-full"
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
                onClick={() => deleteAll(setPartnerInfo, setWarrantyAddedItem)}
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
                            setWarrantyAddedItem
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

export default CorporateClientForm;

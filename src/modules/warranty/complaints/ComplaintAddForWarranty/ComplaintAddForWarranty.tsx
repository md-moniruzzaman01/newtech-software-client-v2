import { useEffect, useState } from "react";
import swal from "sweetalert";
//internal
import { warrantyPartnerProps, warrantyUpdateAddedItemProps } from "./config/types";
import { useComplaintAddMutation } from "../../../../redux/features/api/complaints";
import { useGetPartnersQuery } from "../../../../redux/features/api/Partner";
import { useGetBrandsQuery } from "../../../../redux/features/api/Brand";
import { useGetCategoryQuery, useGetMainCategoryQuery } from "../../../../redux/features/api/Category";
import Navbar from "../../../../common/widgets/Navbar/Navbar";
import Button from "../../../../common/components/Button";
import Input from "../../../../common/components/Input";
import InputFilter from "../../../../common/components/InputFilter/InputFilter";
import SelectForPartner from "../../../../common/components/SelectForPartner/SelectForPartner";
import TextArea from "../../../../common/components/TextArea/TextArea";

const ComplaintAddForWarranty = () => {
  // other state
  const [warrantyAddedItem, setWarrantyAddedItem] = useState<
    warrantyUpdateAddedItemProps[]
  >([]);
  const [selectData, setSelectData] =
    useState<warrantyUpdateAddedItemProps | null>(null);
  const [isNewPartner, setIsNewPartner] = useState(false);
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [partners, setPartners] = useState([]);
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [mainCategories, setMainCategories] = useState([]);
  const [partnerInfo, setPartnerInfo] = useState<warrantyPartnerProps>({
    partner_id: "",
    contact_number: "",
    brand_name: "",
  });

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
    const storedAddedItem = localStorage.getItem("warrantyAddedItem");
    const storedPartnerInfo = localStorage.getItem("partnerInfo");
    const storedNewCustomer = localStorage.getItem("newCustomer");
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
    const contact_number = (
      form.elements.namedItem("contact_number") as HTMLInputElement
    ).value;
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
      contact_number,
      brand_name,
    };

    if (isNewPartner) {
      setPartnerInfo(newCustomer);
      localStorage.setItem("newCustomer", JSON.stringify(newCustomer));
    }

    if (!isNewPartner) {
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
      // Handle the case where addedItem is not an array
      updatedAddedItem = [data];
    } else if (selectedItem !== null) {
      // Update the selected item in the array
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

    // Update state with the new array
    setWarrantyAddedItem(updatedAddedItem);

    // Save the updated array in local storage
    localStorage.setItem("warrantyAddedItem", JSON.stringify(updatedAddedItem));

    form.reset();
  };

  const updateData = (index: number) => {
    const selectedItemData: warrantyUpdateAddedItemProps =
      warrantyAddedItem[index];

    setSelectedItem(index);
    setSelectData(selectedItemData);
  };
  // console.log(partnerInfo, warrantyAddedItem, isNewPartner);

  const deleteData = (index: number) => {
    swal({
      title: "Are you sure?",
      text: "This action will delete all data permanently. Are you sure you want to proceed?",
      icon: "warning",
      buttons: ["Cancel", "Delete"], // Example of custom buttons
      dangerMode: true,
    }).then((willDelete: boolean) => {
      if (willDelete) {
        // Remove the item at the specified index from addedItem state
        const updatedAddedItem = warrantyAddedItem.filter(
          (_, i) => i !== index
        );
        if (updatedAddedItem?.length === 0) {
          localStorage.removeItem("partnerInfo");
          localStorage.removeItem("newCustomer");
          setPartnerInfo({
            partner_id: "",
            contact_number: "",
            brand_name: "",
          });
        }
        // Update state with the new array
        setWarrantyAddedItem(updatedAddedItem);

        // Save the updated array in local storage
        localStorage.setItem(
          "warrantyAddedItem",
          JSON.stringify(updatedAddedItem)
        );

        setSelectedItem(null);
        swal("Your data has been successfully deleted.", {
          icon: "success",
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };

  const deleteAll = () => {
    swal({
      title: "Are you sure?",
      text: "This action will delete all data permanently. Are you sure you want to proceed?",
      icon: "warning",
      buttons: ["Cancel", "Delete"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        setWarrantyAddedItem([]);
        setPartnerInfo({
          partner_id: "",
          contact_number: "",
          brand_name: "",
        });
        localStorage.removeItem("warrantyAddedItem");
        localStorage.removeItem("partnerInfo");
        localStorage.removeItem("newCustomer");
        setIsNewPartner(false);
        swal("Your data has been successfully deleted.", {
          icon: "success",
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };
  const { brand_name } = partnerInfo;
  const partner_id = "65fbed2388dfa2925691c779";
  const fullData = {
    partner_id,
    brand_name,
    inputFields: warrantyAddedItem,
  };

  const handleDataSubmit = async () => {
    console.log("data:", fullData);
    try {
      const result = await addComplaint(fullData);

      if ("data" in result) {
        setWarrantyAddedItem([]);
        setPartnerInfo({
          partner_id: "",
          contact_number: "",
          brand_name: "",
        });
        localStorage.removeItem("warrantyAddedItem");
        localStorage.removeItem("partnerInfo");
        localStorage.removeItem("newCustomer");
        setIsNewPartner(false);
        swal("Your data has been successfully submitted.", {
          icon: "success",
        });
      } else if ("error" in result) {
        swal("Something went wrong!", {
          icon: "error",
        });
      }
    } catch (error) {
      console.error("Error adding complaint:", error);
    }
  };

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
                    ></InputFilter>
                  </div>

                  {/* Partner Name  */}
                  <div>
                    <SelectForPartner
                      defaultValue={`${
                        partnerInfo ? partnerInfo?.partner_id : ""
                      }`}
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
                        partnerInfo ? partnerInfo?.contact_number : ""
                      }`}
                      IsDisabled={warrantyAddedItem?.length > 0 ? true : false}
                      required
                      inputPlaceholder="Contact Number"
                      labelName="Contact Number"
                      inputName="contact_number"
                    ></Input>
                  </div>
                </div>
              )}

              {/* main category  */}
              <div>
                <InputFilter
                  defaultValue={`${
                    selectData ? selectData?.main_category : ""
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

              {/* Product / Items Name  */}

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

              {/* Remark  */}
              <div>
                <Input
                  defaultValue={`${selectData ? selectData?.attachments : ""}`}
                  required
                  inputName="remark"
                  inputPlaceholder="Remark"
                  labelName="Remark"
                ></Input>
              </div>
              {/* Problem  */}
              <div className="col-span-3">
                <TextArea
                  defaultValue={`${selectData ? selectData?.problems : ""}`}
                  name="problems"
                  label="Write Problems"
                  placeholder="Write Problems"
                ></TextArea>
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
                onClick={handleDataSubmit}
                primary
              >
                Submit {warrantyAddedItem?.length > 0 && "All"}
              </Button>
            </div>
          </div>
        </div>
        <div className="">
          <h1 className="text-center font-semibold text-xl underline">
            Added Item
          </h1>
          {warrantyAddedItem?.length > 0 && (
            <div className="py-5 text-center">
              <Button onClick={deleteAll} danger className="px-2 py-1 text-xs">
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
                    className="p-5 rounded-xl shadow-xl space-y-2 bg-paleShadeOfBlue"
                  >
                    <div className="text-base font-semibold flex flex-col">
                      Product Name
                      <span className="text-sm font-normal">
                        : {item?.serial_number}
                      </span>
                    </div>
                    <div className="text-base font-semibold flex flex-col">
                      Model Number
                      <span className="text-sm font-normal">
                        : {item?.model_number}
                      </span>
                    </div>
                    <div className="text-base font-semibold flex flex-col">
                      Serial Number
                      <span className="text-sm font-normal">
                        <span>: {item?.serial_number}</span>
                      </span>
                    </div>

                    <div className="text-base font-semibold flex flex-col">
                      <span className="text-sm font-normal"></span>
                    </div>
                    <div className="flex justify-between ">
                      <Button
                        className="px-2 py-1 text-xs"
                        onClick={() => deleteData(index)}
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

import { useEffect, useState } from "react";
import Button from "../../../common/components/Button";
import HeaderWithCrossBtn from "../../../common/components/HeaderWithCrossBtn/HeaderWithCrossBtn";
import Input from "../../../common/components/Input";
import InputFilter from "../../../common/components/InputFilter/InputFilter";
import {
  WarrantyBrands,
  WarrantyCategoryFilterOption,
} from "./config/constants";
import { addCategoryProps } from "./config/types";
import Navbar from "../../../common/widgets/Navbar/Navbar";
import { handleFormReset } from "../../../common/widgets/FormResetFunction/FormResetFunction";
// import { useComplaintAddMutation } from "../../../redux/features/api/baseApi";

const WarrantyCategoryAddPage = () => {
  const [activeRoute, setActiveRoute] = useState(false);
  const [data, setData] = useState<addCategoryProps>();

  // const [] = useComplaintAddMutation();

  useEffect(() => {
    const storedActiveRoute = localStorage.getItem("activeRoute");
    if (storedActiveRoute !== null) {
      setActiveRoute(JSON.parse(storedActiveRoute));
    }
  }, []);

  const handleAddCategory = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const value = (form.elements.namedItem("value") as HTMLInputElement).value;
    const category = (form.elements.namedItem("category") as HTMLInputElement)
      .value;
    const basicServiceCharge = (
      form.elements.namedItem("basic_service_charge") as HTMLInputElement
    ).value;
    const brand = (form.elements.namedItem("brand") as HTMLInputElement).value;
    const NTF =
      activeRoute && (form.elements.namedItem("NTF") as HTMLInputElement).value;
    const CN =
      activeRoute && (form.elements.namedItem("CN") as HTMLInputElement).value;
    const CID =
      activeRoute && (form.elements.namedItem("CID") as HTMLInputElement).value;
    const swap =
      activeRoute &&
      (form.elements.namedItem("swap") as HTMLInputElement).value;

    const warrantyData = {
      value,
      category,
      basicServiceCharge,
      brand,
      NTF,
      CN,
      CID,
      swap,
    };

    const serviceData = {
      value,
      category,
      basicServiceCharge,
      brand,
    };

    if (activeRoute) {
      setData(warrantyData);
    }
    if (!activeRoute) {
      setData(serviceData);
    }
  };

  console.log(data);
  return (
    <div>
      <div className="py-5 px-5">
        <Navbar
          name={`${
            activeRoute ? "Add Category In Warranty" : "Add Category In Service"
          }`}
        />
      </div>
      <div className="flex items-center h-full">
        <div className="w-2/3 mx-auto bg-solidWhite rounded-md p-8 ">
          <HeaderWithCrossBtn name="Add Category" />
          <form onSubmit={handleAddCategory}>
            <div className="space-y-3 py-5">
              <Input labelName="Value" inputName="value" />
              <InputFilter
                Filter={WarrantyCategoryFilterOption}
                placeholder="Select Category"
                label="Category"
                inputName="category"
              />
              <Input
                labelName="Basic Service Charge"
                inputName="basic_service_charge"
              />
              {activeRoute && (
                <>
                  <InputFilter
                    placeholder="Select Brands"
                    Filter={WarrantyBrands}
                    label="Brand"
                    inputName="brand"
                  />
                  <Input labelName="NTF" inputName="NTF" />
                  <Input labelName="CN" inputName="CN" />
                  <Input labelName="CID Fee" inputName="CID" />
                  <Input labelName="Swap Price" inputName="swap" />
                </>
              )}
            </div>

            <div className="flex justify-center gap-20 items-center pt-8">
              <Button onClick={handleFormReset} danger sizeClass="px-8 py-2">
                Cancel
              </Button>
              <Button primary sizeClass="px-8 py-2">
                Save
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WarrantyCategoryAddPage;

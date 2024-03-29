import { useEffect, useState } from "react";
//internal
import { addCategoryProps } from "./config/types";
import { useCreateCategoryMutation, useGetMainCategoryQuery } from "../../../../redux/features/api/Category";
import { useGetBrandsQuery } from "../../../../redux/features/api/Brand";
import Navbar from "../../../../common/widgets/Navbar/Navbar";
import HeaderWithCrossBtn from "../../../../common/components/HeaderWithCrossBtn/HeaderWithCrossBtn";
import Input from "../../../../common/components/Input";
import InputFilter from "../../../../common/components/InputFilter/InputFilter";
import { handleFormReset } from "../../../../common/widgets/FormResetFunction/FormResetFunction";
import Button from "../../../../common/components/Button";


const WarrantyCategoryAddPage = () => {
  const [activeRoute, setActiveRoute] = useState(false);
  const [fullData, setFullData] = useState<addCategoryProps>();
  const { data: mainCategory } = useGetMainCategoryQuery({});
  const { data: brands } = useGetBrandsQuery({});
  const [createCategory] = useCreateCategoryMutation();

  useEffect(() => {
    const storedActiveRoute = localStorage.getItem("activeRoute");
    if (storedActiveRoute !== null) {
      setActiveRoute(JSON.parse(storedActiveRoute));
    }
  }, []);

  const handleAddCategory = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const value = (form.elements.namedItem("value") as HTMLInputElement).value;
    const category = (form.elements.namedItem("category") as HTMLInputElement)
      .value;
    const basic_service_charge = parseInt(
      (form.elements.namedItem("basic_service_charge") as HTMLInputElement)
        ?.value || "0",
      10
    );
    const brand = (form.elements.namedItem("brand") as HTMLInputElement)?.value;
    const NTF = parseInt(
      (form.elements.namedItem("NTF") as HTMLInputElement)?.value || "0",
      10
    );
    const CN = parseInt(
      (form.elements.namedItem("CN") as HTMLInputElement)?.value || "0",
      10
    );
    const CID = parseInt(
      (form.elements.namedItem("CID") as HTMLInputElement)?.value || "0",
      10
    );
    const swap = parseInt(
      (form.elements.namedItem("swap") as HTMLInputElement)?.value || "0",
      10
    );

    const warrantyData = {
      value,
      category,
      basic_service_charge,
      brand,
      NTF,
      CN,
      CID,
      swap,
    };

    const serviceData = {
      value,
      category,
      basic_service_charge,
    };

    if (activeRoute) {
      setFullData(warrantyData);
    }
    if (!activeRoute) {
      setFullData(serviceData);
    }

    try {
      await createCategory(fullData);
      console.log("Category added successfully");
      form.reset();
    } catch (error) {
      console.error("Error adding brand:", error);
    }
  };

  console.log(fullData);
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
                Filter={mainCategory?.data}
                placeholder="Select Category"
                label="Category"
                inputName="category"
              />
              <Input
                labelName="Basic Service Charge"
                inputName="basic_service_charge"
                inputType="number"
              />
              {activeRoute && (
                <>
                  <InputFilter
                    placeholder="Select Brands"
                    Filter={brands?.data}
                    label="Brand"
                    inputName="brand"
                  />
                  <Input labelName="NTF" inputName="NTF" inputType="number" />
                  <Input labelName="CN" inputName="CN" inputType="number" />
                  <Input
                    labelName="CID Fee"
                    inputName="CID"
                    inputType="number"
                  />
                  <Input
                    labelName="Swap Price"
                    inputName="swap"
                    inputType="number"
                  />
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

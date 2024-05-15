/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
//internal
import {
  useCreateCategoryForServiceMutation,
  useCreateCategoryMutation,
  useGetMainCategoryQuery,
} from "../../../../redux/features/api/Category";
import { useGetBrandsQuery } from "../../../../redux/features/api/Brand";
import Navbar from "../../../../common/widgets/Navbar/Navbar";
import HeaderWithCrossBtn from "../../../../common/components/HeaderWithCrossBtn/HeaderWithCrossBtn";
import Input from "../../../../common/components/Input";
import InputFilter from "../../../../common/components/InputFilter/InputFilter";
import { handleFormReset } from "../../../../common/widgets/FormResetFunction/FormResetFunction";
import Button from "../../../../common/components/Button";
import { showSwal } from "../../../../shared/helpers/SwalShower";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";
import { authKey } from "../../../../shared/config/constaints";
import ErrorShow from "../../../../common/components/Error Show/ErrorShow";

const WarrantyCategoryAddPage = () => {
  const token = getFromLocalStorage(authKey);
  const [activeRoute, setActiveRoute] = useState(false);
  const { data: mainCategory, isError, error } = useGetMainCategoryQuery({});
  const {
    data: brands,
    isError: brandsIsError,
    error: brandsError,
  } = useGetBrandsQuery({});
  const [createCategory, { isLoading }] = useCreateCategoryMutation();
  const [createCategoryForService, { isLoading: categoryLoading }] =
    useCreateCategoryForServiceMutation();
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

    const addCategory = activeRoute ? warrantyData : serviceData;

    const result: any = activeRoute
      ? await createCategory({ addCategory, token })
      : await createCategoryForService({ addCategory, token });

    showSwal(result);
  };

  if (isError || brandsIsError) {
    return <ErrorShow error={error || brandsError} />;
  }

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
              <Button
                loading={isLoading || categoryLoading}
                primary
                sizeClass="px-8 py-2"
              >
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

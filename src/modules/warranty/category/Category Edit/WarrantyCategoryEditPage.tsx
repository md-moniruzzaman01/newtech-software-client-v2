/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
//internal
import {
  useCreateCategoryForServiceMutation,
  useEditCategoryMutation,
  useGetCategoryByIdQuery,
  useGetMainCategoryQuery,
} from "../../../../redux/features/api/Category.ts";
import { useGetBrandsQuery } from "../../../../redux/features/api/Brand.ts";
import Navbar from "../../../../common/widgets/Navbar/Navbar.tsx";
import HeaderWithCrossBtn from "../../../../common/components/HeaderWithCrossBtn/HeaderWithCrossBtn.tsx";
import Input from "../../../../common/components/Input/index.ts";
import InputFilter from "../../../../common/components/InputFilter/InputFilter.tsx";
import { handleFormReset } from "../../../../common/widgets/FormResetFunction/FormResetFunction.ts";
import Button from "../../../../common/components/Button/index.ts";
import { showSwal } from "../../../../shared/helpers/SwalShower.ts";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage.ts";
import { authKey } from "../../../../shared/config/constaints.ts";
import ErrorShow from "../../../../common/components/Error Show/ErrorShow.tsx";
import { useNavigate, useParams } from "react-router-dom";
import LoadingPage from "../../../../common/components/LoadingPage/LoadingPage.tsx";

const WarrantyCategoryEditPage = () => {
  const navigate = useNavigate();
  const token = getFromLocalStorage(authKey);
  const { id } = useParams();

  const [activeRoute, setActiveRoute] = useState(false);
  //redux
  const { data, isLoading: categoryByIdLoading } = useGetCategoryByIdQuery({
    token,
    id,
  });

  const {
    data: mainCategory,
    isError,
    error,
  } = useGetMainCategoryQuery({ token });
  const {
    data: brands,
    isError: brandsIsError,
    error: brandsError,
  } = useGetBrandsQuery({ token });
  const [createCategory, { isLoading }] = useEditCategoryMutation();
  const [createCategoryForService, { isLoading: categoryLoading }] =
    useCreateCategoryForServiceMutation();

  useEffect(() => {
    const storedActiveRoute = localStorage.getItem("activeRoute");
    if (storedActiveRoute !== null) {
      setActiveRoute(JSON.parse(storedActiveRoute));
    }
  }, []);

  const defaultCategory = mainCategory?.data?.find(
    (category) => category?.id === data?.data?.category
  );

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

    const editCategory = activeRoute ? warrantyData : serviceData;
    console.log(editCategory);
    const result: any = activeRoute
      ? await createCategory({ editCategory, token, id })
      : await createCategoryForService({ editCategory, token });
    console.log(result);
    const swalIsTrue = showSwal(result);
    if (swalIsTrue) {
      navigate("/category");
      form?.reset();
    }
  };

  if (isError || brandsIsError) {
    return <ErrorShow error={error || brandsError} />;
  }

  if (categoryByIdLoading) {
    return <LoadingPage />;
  }

  return (
    <div>
      <div className="py-5 px-5">
        <Navbar
          name={`${
            activeRoute
              ? "Edit Category In Warranty"
              : "Edit Category In Service"
          }`}
        />
      </div>
      <div className="flex items-center h-full">
        <div className="w-2/3 mx-auto bg-solidWhite rounded-md p-8 ">
          <HeaderWithCrossBtn name="Add Category" />
          <form onSubmit={handleAddCategory}>
            <div className="space-y-3 py-5">
              <Input
                defaultValue={data?.data?.value}
                labelName="Value"
                inputName="value"
              />
              <InputFilter
                required
                defaultValue={defaultCategory?.value}
                Filter={mainCategory?.data}
                placeholder="Select Category"
                label="Category"
                inputName="category"
              />
              <Input
                defaultValue={data?.data?.basic_service_charge}
                labelName="Basic Service Charge"
                inputName="basic_service_charge"
                inputType="number"
              />
              {activeRoute && (
                <>
                  <InputFilter
                    defaultValue={data?.data?.brand}
                    placeholder="Select Brands"
                    Filter={brands?.data}
                    label="Brand"
                    inputName="brand"
                  />
                  <Input
                    defaultValue={data?.data?.NTF}
                    labelName="NTF"
                    inputName="NTF"
                    inputType="number"
                  />
                  <Input
                    defaultValue={data?.data?.CN}
                    labelName="CN"
                    inputName="CN"
                    inputType="number"
                  />
                  <Input
                    defaultValue={data?.data?.CID}
                    labelName="CID Fee"
                    inputName="CID"
                    inputType="number"
                  />
                  <Input
                    defaultValue={data?.data?.swap}
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

export default WarrantyCategoryEditPage;

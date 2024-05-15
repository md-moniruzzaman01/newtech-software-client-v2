/* eslint-disable @typescript-eslint/no-explicit-any */
import Navbar from "../../../../common/widgets/Navbar/Navbar";
import Input from "../../../../common/components/Input";
import { useGetBrandsQuery } from "../../../../redux/features/api/Brand";
import Button from "../../../../common/components/Button";
import { useCreatePartnerMutation } from "../../../../redux/features/api/Partner";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";
import { authKey } from "../../../../shared/config/constaints";
import { useState } from "react";
import SearchFilterInput from "../../../../common/components/Search Filter Input/SearchFilterInput";
import { showSwal } from "../../../../shared/helpers/SwalShower.ts";
import ErrorShow from "../../../../common/components/Error Show/ErrorShow";

const CustomerAddOrEdit = () => {
  const [brandArr, setBrandArr] = useState([]);
  const token = getFromLocalStorage(authKey);
  const [createPartner, { isLoading }] = useCreatePartnerMutation();
  const {
    data: brands,
    isError: brandIsError,
    error: brandError,
  } = useGetBrandsQuery({});
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget; // Use currentTarget for the form element
    const contact_person = (
      form.elements.namedItem("partner_name") as HTMLInputElement
    ).value;
    const contactNo = (
      form.elements.namedItem("partner_no") as HTMLInputElement
    ).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const address = (form.elements.namedItem("address") as HTMLInputElement)
      .value;
    const company = (
      form.elements.namedItem("company_name") as HTMLInputElement
    ).value;
    const asp = brandArr;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;

    const fullData = {
      password,
      partner: {
        company,
        email,
        contactNo,
        contact_person,
        address,
        asp,
      },
    };
    const result: any = await createPartner({ fullData, token });
    const swalIsTrue = showSwal(result);
    if (swalIsTrue) {
      setBrandArr([]);
      form.reset();
    }
  };

  if (brandIsError) {
    return <ErrorShow error={brandError} />;
  }
  return (
    <div className="px-5">
      <Navbar name="Partner Info" />
      <div className="bg-solidWhite my-5 py-5 px-10">
        <div className="space-y-2">
          <h1 className="text-xl font-semibold">Add/Edit Customer</h1>
          <hr className="border-t-4" />
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-3  py-5 gap-5">
              <Input inputName="partner_name" labelName="Partner Name" />
              <Input inputName="partner_no" labelName="Partner Number" />
              <Input inputName="email" labelName="Email" />
              <Input inputName="address" labelName="Address" />
              <Input inputName="company_name" labelName="Company" />
              <SearchFilterInput
                options={brands?.data}
                labelName="Brand"
                setData={setBrandArr}
                data={brandArr}
              />
              <Input inputName="password" labelName="Password" />
            </div>
            <div>
              <Button loading={isLoading} primary>
                Create a Partner
              </Button>
            </div>
          </form>

          {/* <div className=" py-5 space-y-3">
            <div className="space-y-2">
              <h2 className="font-semibold">Upload Profile Image:</h2>
              <DndProvider backend={HTML5Backend}>
                <PhotoAttach />
              </DndProvider>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CustomerAddOrEdit;

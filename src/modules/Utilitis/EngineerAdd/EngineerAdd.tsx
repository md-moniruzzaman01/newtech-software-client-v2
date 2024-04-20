/* eslint-disable @typescript-eslint/no-explicit-any */
//internal

import Input from "../../../common/components/Input";
import Navbar from "../../../common/widgets/Navbar/Navbar";
import SearchFilterInput from "../../../common/components/Search Filter Input/SearchFilterInput";
import Button from "../../../common/components/Button";
import {
  authKey,
  branches,
  engineerPower,
} from "../../../shared/config/constaints";
import { useGetBrandsQuery } from "../../../redux/features/api/Brand";
import LoadingPage from "../../../common/components/LoadingPage/LoadingPage";
import { useState } from "react";
import { useAddEngineerMutation } from "../../../redux/features/api/engineers";
import { getFromLocalStorage } from "../../../shared/helpers/local_storage";
import swal from "sweetalert";
import InputFilter from "../../../common/components/InputFilter/InputFilter";
import { useGetMainCategoryQuery } from "../../../redux/features/api/Category";

const EngineerAdd = () => {
  const { data: brand, isLoading: brandIsLoading } = useGetBrandsQuery({});
  const [powerArr, setPowerArr] = useState([]);
  const [aspArr, setAspArr] = useState([]);
  const [skillArr, setSkillArr] = useState([]);
  const [addEngineer, { isLoading }] = useAddEngineerMutation();
  const { data: mainCategories, isLoading: mainCategoryLoading } =
    useGetMainCategoryQuery({});
  const token = getFromLocalStorage(authKey);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget; // Use currentTarget for the form element
    const firstName = (form.elements.namedItem("firstName") as HTMLInputElement)
      .value;
    const middleName = (
      form.elements.namedItem("middleName") as HTMLInputElement
    ).value;
    const lastName = (form.elements.namedItem("lastName") as HTMLInputElement)
      .value;
    const contactNo = (
      form.elements.namedItem("contact_no") as HTMLInputElement
    ).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const Skill = skillArr;
    const branch = (form.elements.namedItem("branch") as HTMLInputElement)
      .value;
    const power = powerArr;
    const asp = aspArr;
    const designation = (
      form.elements.namedItem("designation") as HTMLInputElement
    ).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;

    const fullData = {
      password,
      engineer: {
        name: { firstName, middleName, lastName },
        contactNo,
        email,
        branch,
        power,
        Skill,
        asp,
        designation,

        profileImage: "img",
      },
    };
    const result: any = await addEngineer({ fullData, token });
    if (result?.data?.success) {
      swal("success", `${result?.data?.message}`, "success");
      form.reset();
    } else {
      swal("error", `Something went wrong`, "error"); // Show the error with swal
    }
  };

  if (brandIsLoading && mainCategoryLoading) {
    return <LoadingPage />;
  }
  return (
    <div className="px-5">
      <Navbar name="Engineer Add" />
      <div className="bg-solidWhite my-5 py-5 px-10">
        <div className="space-y-2">
          <h1 className="text-xl font-semibold">Create an Engineer</h1>
          <hr className="border-t-4" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-3 gap-5  py-10">
            <Input required labelName="First Name" inputName="firstName" />
            <Input labelName="Middle Name" inputName="middleName" />
            <Input required labelName="Last Name" inputName="lastName" />
            <Input required labelName="Contact Number" inputName="contact_no" />
            <Input required labelName="Email" inputName="email" />
            <SearchFilterInput
              required
              options={mainCategories?.data}
              labelName="skill"
              filterName="skill"
              setData={setSkillArr}
              data={skillArr}
            />
            <InputFilter
              required
              Filter={branches}
              label="Branch"
              inputName="branch"
            />
            <SearchFilterInput
              required
              options={engineerPower}
              labelName="power"
              filterName="power"
              setData={setPowerArr}
              data={powerArr}
            />
            <SearchFilterInput
              required
              options={brand?.data}
              labelName="ASP"
              filterName="asp"
              setData={setAspArr}
              data={aspArr}
            />
            <Input required labelName="Designation" inputName="designation" />
            <Input required labelName="Password" inputName="password" />

            {/* <div className="space-y-2">
              <h2 className="font-semibold">Upload Profile Image:</h2>
              <DndProvider backend={HTML5Backend}>
                <PhotoAttach />
              </DndProvider>
            </div> */}
          </div>
          <div className="flex justify-center">
            <Button loading={isLoading}>Create an Engineer</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EngineerAdd;

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
import {
  useEditEngineerMutation,
  useGetEngineerByIdQuery,
} from "../../../redux/features/api/engineers";
import { getFromLocalStorage } from "../../../shared/helpers/local_storage";
import InputFilter from "../../../common/components/InputFilter/InputFilter";
import { useGetMainCategoryQuery } from "../../../redux/features/api/Category";
import { useParams } from "react-router-dom";
import { showSwal } from "../../../shared/helpers/SwalShower.ts";
import ErrorShow from "../../../common/components/Error Show/ErrorShow";

const EngineerEditPage = () => {
  const token = getFromLocalStorage(authKey);
  const { id } = useParams();

  const { data: engineer, isLoading: engineerLoading } =
    useGetEngineerByIdQuery({ token, id });
  const { data: brand, isLoading: brandIsLoading } = useGetBrandsQuery({});
  const [powerArr, setPowerArr] = useState([]);
  const [aspArr, setAspArr] = useState([]);
  const [skillArr, setSkillArr] = useState([]);
  const [editEngineer, { isLoading }] = useEditEngineerMutation();
  const {
    data: mainCategories,
    isLoading: mainCategoryLoading,
    isError,
    error,
  } = useGetMainCategoryQuery({});

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
    const result: any = await editEngineer({ fullData, token, id });
    const swalIsTrue = showSwal(result);
    if (swalIsTrue) {
      setPowerArr([]);
      setSkillArr([]);
      form.reset();
    }
  };

  if (brandIsLoading || mainCategoryLoading || engineerLoading) {
    return <LoadingPage />;
  }

  if (isError) {
    return <ErrorShow error={error} />;
  }
  return (
    <div className="px-5">
      <Navbar name="Engineer Edit Page" />
      <div className="bg-solidWhite my-5 py-5 px-10">
        <div className="space-y-2">
          <h1 className="text-xl font-semibold">Engineer Details</h1>
          <hr className="border-t-4" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-3 gap-5  py-10">
            <Input
              defaultValue={engineer?.data?.name?.firstName}
              required
              labelName="First Name"
              inputName="firstName"
            />
            <Input
              defaultValue={engineer?.data?.name?.middleName}
              labelName="Middle Name"
              inputName="middleName"
            />
            <Input
              defaultValue={engineer?.data?.name?.lastName}
              required
              labelName="Last Name"
              inputName="lastName"
            />
            <Input
              defaultValue={engineer?.data?.contactNo}
              required
              labelName="Contact Number"
              inputName="contact_no"
            />
            <Input
              defaultValue={engineer?.data?.email}
              required
              labelName="Email"
              inputName="email"
            />
            <SearchFilterInput
              required
              options={mainCategories?.data}
              labelName="skill"
              filterName="skill"
              setData={setSkillArr}
              data={skillArr}
            />
            <InputFilter
              defaultValue={engineer?.data?.branch}
              required
              Filter={branches}
              label="Branch"
              inputName="branch"
            />
            <SearchFilterInput
              options={engineerPower}
              labelName="power"
              filterName="power"
              setData={setPowerArr}
              data={powerArr}
            />
            <SearchFilterInput
              required={!powerArr?.includes("01")}
              options={brand?.data}
              labelName="ASP"
              filterName="asp"
              setData={setAspArr}
              data={aspArr}
            />
            <Input
              defaultValue={engineer?.data?.designation}
              required
              labelName="Designation"
              inputName="designation"
            />
            <Input required labelName="Password" inputName="password" />

            {/* <div className="space-y-2">
              <h2 className="font-semibold">Upload Profile Image:</h2>
              <DndProvider backend={HTML5Backend}>
                <PhotoAttach />
              </DndProvider>
            </div> */}
          </div>
          <div className="flex justify-center w-1/3 mx-auto">
            <Button className="w-full" loading={isLoading}>
              Save
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EngineerEditPage;

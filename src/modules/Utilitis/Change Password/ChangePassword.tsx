/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Button from "../../../common/components/Button";
import HeaderWithCrossBtn from "../../../common/components/HeaderWithCrossBtn/HeaderWithCrossBtn";
import Input from "../../../common/components/Input";
import { useUpdatePasswordMutation } from "../../../redux/features/api/users";
import { authKey } from "../../../shared/config/constaints";
import { showSwal } from "../../../shared/helpers/SwalShower";
import { getFromLocalStorage } from "../../../shared/helpers/local_storage";
import Navbar from "../../../common/widgets/Navbar/Navbar";

const ChangePassword = () => {
  const [isError, setIsError] = useState("");
  const [updatePassword, { isLoading }] = useUpdatePasswordMutation();
  const token = getFromLocalStorage(authKey);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const id = (form.elements.namedItem("id") as HTMLInputElement)?.value;

    const newPassword = (
      form.elements.namedItem("newPassword") as HTMLInputElement
    )?.value;
    const confirmPassword = (
      form.elements.namedItem("confirmPassword") as HTMLInputElement
    )?.value;

    if (newPassword != confirmPassword) {
      setIsError("Passwords do not match");
      return;
    } else {
      setIsError("");
    }

    const fullData = {
      newPassword: confirmPassword,
    };

    const result: any = await updatePassword({ id, fullData, token });
    const swalIsTrue = showSwal(result);
    if (swalIsTrue) {
      form?.reset();
    }
  };
  return (
    <div className="px-5">
      <Navbar />
      <div className="pt-20">
        <div className="w-2/3 mx-auto bg-solidWhite rounded-md p-8 ">
          <HeaderWithCrossBtn name="Change Password" />
          <form onSubmit={handleSubmit} className="space-y-3 py-5">
            <Input required labelName="ID" inputName="id" />
            <Input required labelName="New Password" inputName="newPassword" />
            <Input
              required
              labelName="Confirm Password"
              inputName="confirmPassword"
            />
            {isError && <p className="text-red-500">{isError}</p>}
            <div className="w-1/2 mx-auto pt-8">
              <Button
                loading={isLoading}
                primary
                sizeClass="px-8 py-2"
                className="w-full"
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

export default ChangePassword;

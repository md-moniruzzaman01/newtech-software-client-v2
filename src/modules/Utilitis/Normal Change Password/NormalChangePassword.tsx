/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from "../../../common/components/Button";
import HeaderWithCrossBtn from "../../../common/components/HeaderWithCrossBtn/HeaderWithCrossBtn";
import Input from "../../../common/components/Input";
import { useNormalUserUpdatePasswordMutation } from "../../../redux/features/api/users";
import { authKey } from "../../../shared/config/constaints";
import { showSwal } from "../../../shared/helpers/SwalShower";
import { getFromLocalStorage } from "../../../shared/helpers/local_storage";

const NormalChangePassword = () => {
  const [updatePassword, { isLoading }] = useNormalUserUpdatePasswordMutation();
  const token = getFromLocalStorage(authKey);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    const oldPassword = (
      form.elements.namedItem("oldPassword") as HTMLInputElement
    )?.value;
    const newPassword = (
      form.elements.namedItem("newPassword") as HTMLInputElement
    )?.value;

    const fullData = { oldPassword, newPassword };

    const result: any = await updatePassword({ fullData, token });
    showSwal(result);
    if (result?.data?.success) {
      form?.reset();
    }
  };
  return (
    <div className="pt-20">
      <div className="w-2/3 mx-auto bg-solidWhite rounded-md p-8 ">
        <HeaderWithCrossBtn name="Change Password" />
        <form onSubmit={handleSubmit} className="space-y-3 py-5">
          <Input required labelName="Old Password" inputName="oldPassword" />
          <Input required labelName="New Password" inputName="newPassword" />
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
  );
};

export default NormalChangePassword;

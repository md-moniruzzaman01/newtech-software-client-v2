import Button from "../../../common/components/Button";
import HeaderWithCrossBtn from "../../../common/components/HeaderWithCrossBtn/HeaderWithCrossBtn";
import Input from "../../../common/components/Input";

const ForgetPassword = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    const newPassword = (
      form.elements.namedItem("newPassword") as HTMLInputElement
    )?.value;
    const confirmPassword = (
      form.elements.namedItem("confirmPassword") as HTMLInputElement
    )?.value;
    const fullData = {
      newPassword,
      confirmPassword,
    };
    console.log(fullData);
  };
  return (
    <div className="pt-20">
      <div className="w-2/3 mx-auto bg-solidWhite rounded-md p-8 ">
        <HeaderWithCrossBtn name="Change Password" />
        <form onSubmit={handleSubmit} className="space-y-3 py-5">
          <Input labelName="New Password" inputName="newPassword" />
          <Input labelName="Confirm Password" inputName="confirmPassword" />
          <div className="flex justify-center gap-20 items-center pt-8">
            <Button danger sizeClass="px-8 py-2">
              Cancel
            </Button>
            <Button primary sizeClass="px-8 py-2">
              Save
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;

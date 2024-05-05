import Button from "../../../common/components/Button";
import HeaderWithCrossBtn from "../../../common/components/HeaderWithCrossBtn/HeaderWithCrossBtn";
import Input from "../../../common/components/Input";

const ChangePassword = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;

    const newPassword = (
      form.elements.namedItem("newPassword") as HTMLInputElement
    )?.value;
    const confirmPassword = (
      form.elements.namedItem("confirmPassword") as HTMLInputElement
    )?.value;
    const fullData = {
      email,
      newPassword,
      confirmPassword,
    };
console.log(fullData)
  };
  return (
    <div className="pt-20">
      <div className="w-2/3 mx-auto bg-solidWhite rounded-md p-8 ">
        <HeaderWithCrossBtn name="Change Password" />
        <form onSubmit={handleSubmit} className="space-y-3 py-5">
          <Input labelName="Email" inputName="email" />
          <Input labelName="New Password" inputName="newPassword" />
          <Input labelName="Confirm Password" inputName="confirmPassword" />
          <div className="w-1/2 mx-auto pt-8">
            <Button primary sizeClass="px-8 py-2" className="w-full">
              Save
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;

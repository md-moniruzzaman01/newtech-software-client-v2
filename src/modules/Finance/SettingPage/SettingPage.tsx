import Button from "../../../common/components/Button";
import HeaderWithCrossBtn from "../../../common/components/HeaderWithCrossBtn/HeaderWithCrossBtn";
import Input from "../../../common/components/Input";

const SettingPage = () => {
  return (
    <div className="flex items-center h-full">
      <div className="w-2/3 mx-auto bg-solidWhite rounded-md p-8 ">
        <HeaderWithCrossBtn name="Change Password" />
        <div className="space-y-3 py-5">
          <Input labelName="Old Password" defaultValue="211654" />
          <Input labelName="New Password" defaultValue="213654" />
          <Input labelName="Confirm Password" defaultValue="213654" />
        </div>

        <div className="flex justify-center gap-20 items-center pt-8">
          <Button danger sizeClass="px-8 py-2">
            Cancel
          </Button>
          <Button primary sizeClass="px-8 py-2">
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SettingPage;

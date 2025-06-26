import Button from "../../../common/components/Button";
import HeaderWithCrossBtn from "../../../common/components/HeaderWithCrossBtn/HeaderWithCrossBtn";
import Input from "../../../common/components/Input";
import Navbar from "../../../common/widgets/Navbar/Navbar";

const SendEmailPage = () => {
  return (
    <div className="px-5">
      <Navbar />
      <div className="pt-20">
        <div className="w-2/3 mx-auto bg-solidWhite rounded-md p-8">
          <HeaderWithCrossBtn name="Send Email" />
          <form className="space-y-3 py-5">
            <Input labelName="To" inputName="to" />
            <Input labelName="Subject" inputName="subject" />
            <div className="flex justify-center gap-20 items-center pt-8">
              <Button danger sizeClass="px-8 py-2">
                Cancel
              </Button>
              <Button primary sizeClass="px-8 py-2" type="submit">
                Save
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SendEmailPage;

import Button from "../../../common/components/Button";
import HeaderWithCrossBtn from "../../../common/components/HeaderWithCrossBtn/HeaderWithCrossBtn";
import Input from "../../../common/components/Input";
import Navbar from "../../../common/widgets/Navbar/Navbar";

const SendEmailPage = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    const to = (form.elements.namedItem("to") as HTMLInputElement)?.value;
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;
    const body = (form.elements.namedItem("body") as HTMLInputElement)?.value;
    const fullData = {
      to,
      email,
      body,
    };
    console.log(fullData);
  };
  return (
    <div className="px-5">
      <Navbar />
      <div className="pt-20">
        <div className="w-2/3 mx-auto bg-solidWhite rounded-md p-8 ">
          <HeaderWithCrossBtn name="Send Email" />
          <form onSubmit={handleSubmit} className="space-y-3 py-5">
            <Input labelName="To" inputName="to" />
            <Input labelName="Subject" inputName="subject" />
            <Input labelName="Body" inputName="body" />
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
    </div>
  );
};

export default SendEmailPage;

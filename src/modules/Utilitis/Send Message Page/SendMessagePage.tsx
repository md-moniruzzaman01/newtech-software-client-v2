import Button from "../../../common/components/Button";
import HeaderWithCrossBtn from "../../../common/components/HeaderWithCrossBtn/HeaderWithCrossBtn";
import Input from "../../../common/components/Input";
import TextArea from "../../../common/components/TextArea/TextArea";
import Navbar from "../../../common/widgets/Navbar/Navbar";

const SendMessagePage = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    const number = (form.elements.namedItem("number") as HTMLInputElement)
      ?.value;
    const message = (
      form.elements.namedItem("confirmPassword") as HTMLInputElement
    )?.value;
    const fullData = {
      number,
      message,
    };
    console.log(fullData);
  };
  return (
    <div className="px-5">
      <Navbar />
      <div className="pt-20">
        <div className="w-2/3 mx-auto bg-solidWhite rounded-md p-8 ">
          <HeaderWithCrossBtn name="Send Message" />
          <form onSubmit={handleSubmit} className="space-y-3 py-5">
            <Input labelName="Number" inputName="number" />
            <TextArea label="Message" name="message" />
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

export default SendMessagePage;

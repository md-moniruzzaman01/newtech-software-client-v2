import { useRef } from "react";
import Button from "../../../common/components/Button";
import HeaderWithCrossBtn from "../../../common/components/HeaderWithCrossBtn/HeaderWithCrossBtn";
import Input from "../../../common/components/Input";
import TextArea from "../../../common/components/TextArea/TextArea";
import Navbar from "../../../common/widgets/Navbar/Navbar";

const SendMessagePage = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    const number = (form.elements.namedItem("number") as HTMLInputElement)
      ?.value;
    const message = (form.elements.namedItem("message") as HTMLInputElement)
      ?.value;
    const fullData = {
      number,
      message,
    };
    console.log(fullData);
  };

  const handleCancel = () => {
    formRef.current?.reset();
  };

  return (
    <div className="px-5">
      <Navbar />
      <div className="pt-20">
        <div className="w-2/3 mx-auto bg-solidWhite rounded-md p-8">
          <HeaderWithCrossBtn name="Send Message" />
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-3 py-5"
          >
            <Input labelName="Number" inputName="number" />
            <TextArea label="Message" name="message" />
            <div className="flex justify-center gap-20 items-center pt-8">
              <Button danger sizeClass="px-8 py-2" onClick={handleCancel}>
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

export default SendMessagePage;

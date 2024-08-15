import { useRef } from "react";
import Button from "../../../common/components/Button";
import HeaderWithCrossBtn from "../../../common/components/HeaderWithCrossBtn/HeaderWithCrossBtn";
import Input from "../../../common/components/Input";
import TextArea from "../../../common/components/TextArea/TextArea";
import Navbar from "../../../common/widgets/Navbar/Navbar";

const SendEmailPage = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    const to = (form.elements.namedItem("to") as HTMLInputElement)?.value;
    const subject = (form.elements.namedItem("subject") as HTMLInputElement)
      ?.value;
    const customBody = (
      form.elements.namedItem("customBody") as HTMLInputElement
    )?.value;

    // Construct the email HTML body with the user's message
    const body = `
        <div style="font-family: Arial, sans-serif; color: #333;">
        
          <h1>${subject}</h1>
          <p>${customBody}</p>
        </div>
      `;

    const fullData = {
      to,
      subject,
      body,
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
          <HeaderWithCrossBtn name="Send Email" />
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-3 py-5"
          >
            <Input labelName="To" inputName="to" />
            <Input labelName="Subject" inputName="subject" />
            <TextArea label="Body" name="body" />
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

export default SendEmailPage;

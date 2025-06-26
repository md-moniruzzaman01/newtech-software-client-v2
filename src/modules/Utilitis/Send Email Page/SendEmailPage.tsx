import { useState } from "react";
import Editor from "react-simple-wysiwyg";
import Button from "../../../common/components/Button";
import HeaderWithCrossBtn from "../../../common/components/HeaderWithCrossBtn/HeaderWithCrossBtn";
import Input from "../../../common/components/Input";
import Navbar from "../../../common/widgets/Navbar/Navbar";
import { useSendEmailMutation } from "../../../redux/features/api/others";
import { getFromLocalStorage } from "../../../shared/helpers/local_storage";
import { authKey } from "../../../shared/config/constaints";
import { showSwal } from "../../../shared/helpers/SwalShower";

const SendEmailPage = () => {
  const token = getFromLocalStorage(authKey);

  const [html, setHtml] = useState("");
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");

  const [sendEmail, { isLoading }] = useSendEmailMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const fullData = {
      to,
      subject,
      body: html,
    };

    const result = await sendEmail({ fullData, token });
    showSwal(result);
    console.log("Email Data:", fullData);
  };

  return (
    <div className="px-5">
      <Navbar />
      <div className="pt-20">
        <div className="w-2/3 mx-auto bg-solidWhite rounded-md p-8">
          <HeaderWithCrossBtn name="Send Email" />
          <form className="space-y-3 py-5" onSubmit={handleSubmit}>
            <Input
              labelName="To"
              inputName="to"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
            <Input
              labelName="Subject"
              inputName="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <div className="space-y-1">
              <label htmlFor="email-body" className="text-lg font-semibold">
                Email Body
              </label>
              <Editor value={html} onChange={(e) => setHtml(e.target.value)} />
            </div>

            <div className="flex justify-center gap-20 items-center pt-8">
              <Button danger sizeClass="px-8 py-2" type="button">
                Cancel
              </Button>
              <Button
                loading={isLoading}
                primary
                sizeClass="px-8 py-2"
                type="submit"
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

export default SendEmailPage;

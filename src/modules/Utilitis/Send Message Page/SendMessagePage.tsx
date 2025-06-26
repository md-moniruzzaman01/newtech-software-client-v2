import { useState } from "react";
import Button from "../../../common/components/Button";
import HeaderWithCrossBtn from "../../../common/components/HeaderWithCrossBtn/HeaderWithCrossBtn";
import Input from "../../../common/components/Input";
import TextArea from "../../../common/components/TextArea/TextArea";
import Navbar from "../../../common/widgets/Navbar/Navbar";
import { useSendMessageMutation } from "../../../redux/features/api/others";
import { showSwal } from "../../../shared/helpers/SwalShower";
import { getFromLocalStorage } from "../../../shared/helpers/local_storage";
import { authKey } from "../../../shared/config/constaints";

const SendMessagePage = () => {
  const token = getFromLocalStorage(authKey);
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const [sendMessage, { isLoading }] = useSendMessageMutation();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedNumber = number.trim();
    const trimmedMessage = message.trim();

    const fullData = {
      number: trimmedNumber,
      message: trimmedMessage,
    };
    const result = await sendMessage({ fullData, token });
    const isSwalTrue = showSwal(result);
    if (isSwalTrue) {
      setNumber("");
      setMessage("");
    }
  };

  return (
    <div className="px-5">
      <Navbar />
      <div className="pt-20">
        <div className="w-2/3 mx-auto bg-solidWhite rounded-md p-8">
          <HeaderWithCrossBtn name="Send Message" />
          <form onSubmit={handleSubmit} className="space-y-3 py-5">
            <Input
              labelName="Number"
              inputName="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <TextArea
              label="Message"
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              defaultValue={message}
            />
            <div className="flex justify-center gap-20 items-center pt-8">
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

export default SendMessagePage;

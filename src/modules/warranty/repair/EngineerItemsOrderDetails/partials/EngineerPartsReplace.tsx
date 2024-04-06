/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import TextArea from "../../../../../common/components/TextArea/TextArea";
import Button from "../../../../../common/components/Button";
import { useCreatePartsRequestMutation } from "../../../../../redux/features/api/engineers";
import { getFromLocalStorage } from "../../../../../shared/helpers/local_storage";
import { authKey } from "../../../../../shared/config/constaints";
import { useParams } from "react-router-dom";
import swal from "sweetalert";

const EngineerPartsReplace = () => {
  const { id } = useParams();
  const [createPartsRequest] = useCreatePartsRequestMutation();
  const token = getFromLocalStorage(authKey);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const status = (form.elements.namedItem("parts") as HTMLInputElement).value;
    const note = (form.elements.namedItem("note") as HTMLInputElement).value;
    const fullData = {
      status,
      note,
    };

    const result: any = await createPartsRequest({ id, fullData, token });
    if (result?.data?.success) {
      swal("Success", `${result?.data?.message}`, "success");
    } else {
      swal("Error", `${result?.error?.data?.message}`, "error");
    }

    form.reset();
  };

  return (
    <div className="space-y-2">
      <form onSubmit={handleSubmit}>
        <TextArea
          label="Parts Name"
          name="parts"
          placeholder="write your parts name"
        />
        {/* <InputFilter
            placeholder="No Replacement"
            label="Material status :"
            Filter={replacement}
          /> */}

        <TextArea label="Note" name="note" placeholder="write your note" />
        <Button primary>Submit</Button>
      </form>
    </div>
  );
};

export default EngineerPartsReplace;

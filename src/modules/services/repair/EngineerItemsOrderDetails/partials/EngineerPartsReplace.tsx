import React from "react";
import TextArea from "../../../../../common/components/TextArea/TextArea";
import Button from "../../../../../common/components/Button";
import { shedAndSplit } from "../../../../../shared/helpers/removeShedAndSplit";
import { authKey } from "../../../../../shared/config/constaints";
import { getFromLocalStorage } from "../../../../../shared/helpers/local_storage";
import { useCreatePartsRequestMutation } from "../../../../../redux/features/api/parts";

import { showSwal } from "../../../../../shared/helpers/SwalShower";
import { useNavigate } from "react-router-dom";

const EngineerPartsReplace = ({
  id,
  repairItemId,
}: {
  id: string;
  repairItemId: string;
}) => {
  const navigate = useNavigate();
  const token = getFromLocalStorage(authKey);
  const [createPartsRequest, { isLoading }] = useCreatePartsRequestMutation();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const partname = (form.elements.namedItem("parts") as HTMLInputElement)
      .value;
    const note = (form.elements.namedItem("note") as HTMLInputElement).value;
    const parts = shedAndSplit(partname);

    const fullData = { parts, note, repairItemId };
    const result = await createPartsRequest({ fullData, token, id });
    const swalIsTrue = showSwal(result);
    if (swalIsTrue) {
      navigate("/service-engineer-my-library");
      form.reset();
    }
  };

  return (
    <div className="space-y-2">
      <form onSubmit={handleSubmit}>
        <TextArea
          label="Parts Name"
          name="parts"
          placeholder="write your parts name"
        />

        <TextArea label="Note" name="note" placeholder="write your note" />
        <Button loading={isLoading} primary>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default EngineerPartsReplace;

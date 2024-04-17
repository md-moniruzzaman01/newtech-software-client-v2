/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import Button from "../../../../../common/components/Button";
import InputFilter from "../../../../../common/components/InputFilter/InputFilter";
import TextArea from "../../../../../common/components/TextArea/TextArea";
import { engineerStatus } from "../config/constants";
import { getFromLocalStorage } from "../../../../../shared/helpers/local_storage";
import { authKey } from "../../../../../shared/config/constaints";

import swal from "sweetalert";
import { useUpdateRepairStatusMutation } from "../../../../../redux/features/api/engineers";

const EngineerItemOrderStatus = () => {
  const { id } = useParams();
  const [updateRepairStatus] = useUpdateRepairStatusMutation();
  const token = getFromLocalStorage(authKey);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const status = (form.elements.namedItem("status") as HTMLInputElement)
      .value;
    const note = (form.elements.namedItem("note") as HTMLInputElement).value;
    const fullData = {
      status,
      note,
    };

    const result: any = await updateRepairStatus({ id, fullData, token });
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
        <InputFilter
          placeholder="Select Status"
          label="Engineer status :"
          Filter={engineerStatus}
          inputName="status"
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

export default EngineerItemOrderStatus;

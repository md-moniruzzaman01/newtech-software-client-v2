import { useState } from "react";
import Button from "../../../../../common/components/Button";
import Input from "../../../../../common/components/Input";
import InputFilter from "../../../../../common/components/InputFilter/InputFilter";
import TextArea from "../../../../../common/components/TextArea/TextArea";
import { repairStatus } from "../config/constants";
import { getFromLocalStorage } from "../../../../../shared/helpers/local_storage";
import { authKey } from "../../../../../shared/config/constaints";
import { useUpdateStatusQCMutation } from "../../../../../redux/features/api/qc";

const ComplaintOrderStatusQC = ({ id }: { id: string | undefined }) => {
  const [qcStatusValue, setQcStatusValue] = useState("");
  const [updateStatusQC, { isLoading }] = useUpdateStatusQCMutation();
  const token = getFromLocalStorage(authKey);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget; // Use currentTarget for the form element
    const rma_number = (
      form.elements.namedItem("rma_number") as HTMLInputElement
    ).value;
    const qc_status = qcStatusValue;
    const note = (form.elements.namedItem("note") as HTMLInputElement)?.value;

    const fullData = {
      rma: rma_number,
      note,
      status: qc_status,
      qcImage: [],
    };
    updateStatusQC({ fullData, token, id });

    // const url = `http://16.16.166.48:5000/api/v2/qc/${id}`;
    // console.log(url);
    // fetch(url, {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "application/json",
    //     authorization: `${token}`,
    //   },
    //   // Optional: If you need to send data in the request body, include it here
    //   body: JSON.stringify(fullData),
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));

    form.reset();
  };
  return (
    <div className="space-y-2">
      <form onSubmit={handleSubmit}>
        <Input inputName="rma_number" labelName="RMA Number :" />

        <InputFilter
          inputName="qc_status"
          label="QC Status :"
          Filter={repairStatus}
          onChange={(value) => setQcStatusValue(value)}
        />

        {/* <InputFilter
  IsDisabled
  placeholder="Diagnosis"
  label="Assign Engineer"
  Filter={FilterOptions}
/> */}
        <TextArea name="note" label="Note" placeholder="write your note" />
        <Button loading={isLoading} primary>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ComplaintOrderStatusQC;

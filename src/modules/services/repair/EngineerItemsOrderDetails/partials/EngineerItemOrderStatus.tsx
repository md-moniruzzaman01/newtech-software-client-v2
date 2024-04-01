import { useParams } from "react-router-dom";
import Button from "../../../../../common/components/Button";
import InputFilter from "../../../../../common/components/InputFilter/InputFilter";
import TextArea from "../../../../../common/components/TextArea/TextArea";
import { engineerStatus } from "../config/constants";
import { getFromLocalStorage } from "../../../../../shared/helpers/local_storage";
import { authKey } from "../../../../../shared/config/constaints";

const EngineerItemOrderStatus = () => {
  const {id}=useParams();
  const token = getFromLocalStorage(authKey)
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const status = (form.elements.namedItem("status") as HTMLInputElement)
      .value;
    const note = (form.elements.namedItem("note") as HTMLInputElement).value;
    console.log(note, status);
    const fullData={
      status,
      note,
    }
       const url = `http://localhost:5000/api/v2/repair/${id}`;

    fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `${token}`,
      },
      body: JSON.stringify(fullData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
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

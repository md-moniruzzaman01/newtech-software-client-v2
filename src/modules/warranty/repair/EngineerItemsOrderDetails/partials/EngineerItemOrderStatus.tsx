import Button from "../../../../../common/components/Button";
import InputFilter from "../../../../../common/components/InputFilter/InputFilter";
import TextArea from "../../../../../common/components/TextArea/TextArea";
import { engineerStatus } from "../config/constants";

const EngineerItemOrderStatus = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget; // Use currentTarget for the form element
    const status = (form.elements.namedItem("status") as HTMLInputElement)
      .value;
    const note = (form.elements.namedItem("note") as HTMLInputElement).value;
    console.log(note, status);
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

/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import TextArea from "../../../../../common/components/TextArea/TextArea";
import Button from "../../../../../common/components/Button";

const EngineerPartsReplace = () => {

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const status = (form.elements.namedItem("parts") as HTMLInputElement).value;
    const note = (form.elements.namedItem("note") as HTMLInputElement).value;
    const fullData = {
      status,
      note,
    };


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

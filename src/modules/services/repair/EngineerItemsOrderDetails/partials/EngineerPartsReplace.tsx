import React from 'react';
import TextArea from '../../../../../common/components/TextArea/TextArea';
import Button from '../../../../../common/components/Button';
import { shedAndSplit } from '../../../../../shared/helpers/removeShedAndSplit';
import { authKey } from '../../../../../shared/config/constaints';
import { getFromLocalStorage } from '../../../../../shared/helpers/local_storage';
import { SERVER_URL } from '../../../../../shared/config/secret';

const EngineerPartsReplace = ({id}:{id:string}) => {
  const token = getFromLocalStorage(authKey);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const partname = (form.elements.namedItem("parts") as HTMLInputElement).value;
    const note = (form.elements.namedItem("note") as HTMLInputElement).value;
    const parts = shedAndSplit(partname)
    console.log(note, parts);
    const warranty = false;
    const fullData = {parts,note,warranty}
    // form.reset();
    const url = SERVER_URL + "parts/create-request/"+ id

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `${token}`,
      },
      body: JSON.stringify(fullData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="space-y-2">
      <form onSubmit={handleSubmit}>
        <TextArea label="Parts Name" name="parts" placeholder="write your parts name" />

        <TextArea label="Note" name="note" placeholder="write your note" />
        <Button primary>Submit</Button>
      </form>
    </div>
  );
};

export default EngineerPartsReplace;
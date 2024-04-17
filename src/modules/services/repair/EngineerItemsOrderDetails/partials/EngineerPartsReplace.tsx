import React from 'react';
import TextArea from '../../../../../common/components/TextArea/TextArea';
import Button from '../../../../../common/components/Button';
import { shedAndSplit } from '../../../../../shared/helpers/removeShedAndSplit';

const EngineerPartsReplace = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const partname = (form.elements.namedItem("parts") as HTMLInputElement)
          .value;
        const note = (form.elements.namedItem("note") as HTMLInputElement).value;
      const PartsName=  shedAndSplit(partname)
        console.log(note, PartsName);
        // form.reset();
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
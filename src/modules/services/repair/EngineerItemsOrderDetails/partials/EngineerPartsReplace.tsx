import React from 'react';
import TextArea from '../../../../../common/components/TextArea/TextArea';
import Button from '../../../../../common/components/Button';
import { shedAndSplit } from '../../../../../shared/helpers/removeShedAndSplit';
import { authKey } from '../../../../../shared/config/constaints';
import { getFromLocalStorage } from '../../../../../shared/helpers/local_storage';
import { useCreatePartsRequestMutation } from '../../../../../redux/features/api/parts';
import ErrorShow from '../../../../../common/components/Error Show/ErrorShow';
import LoadingPage from '../../../../../common/components/LoadingPage/LoadingPage';

const EngineerPartsReplace = ({id}:{id:string}) => {
  const token = getFromLocalStorage(authKey);
  const [createPartsRequest,{isLoading,isSuccess,isError,error}]=useCreatePartsRequestMutation()
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const partname = (form.elements.namedItem("parts") as HTMLInputElement).value;
    const note = (form.elements.namedItem("note") as HTMLInputElement).value;
    const parts = shedAndSplit(partname)

    const fullData = {parts,note}
    createPartsRequest({fullData,token,id})
    if (isSuccess) {
      form.reset();
    }
  };
  if (isError) {
    return <ErrorShow error={error}/>
  }
  if (isLoading) {
    return <LoadingPage/>
  }

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
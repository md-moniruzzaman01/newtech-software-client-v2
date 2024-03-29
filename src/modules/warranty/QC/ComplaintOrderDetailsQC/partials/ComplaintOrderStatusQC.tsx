import Button from "../../../../../common/components/Button";
import Input from "../../../../../common/components/Input";
import InputFilter from "../../../../../common/components/InputFilter/InputFilter";
import TextArea from "../../../../../common/components/TextArea/TextArea";
import { FilterOptions } from "../../../../../shared/config/constaints";


const ComplaintOrderStatusQC = () => {
  return (
    <div className="space-y-2">
      <Input
        IsDisabled
        inputPlaceholder="121156464684"
        labelName="Order Number :"
      />

      <Input
        IsDisabled
        inputPlaceholder="121156464684"
        labelName="RMA Number :"
      />

      <InputFilter
        IsDisabled
        placeholder="Working"
        label="Order status :"
        Filter={FilterOptions}
      />
      <InputFilter
        IsDisabled
        placeholder="Diagnosis"
        label="QC Status :"
        Filter={FilterOptions}
      />

      <Input
        IsDisabled
        inputPlaceholder="Delivered/ Complete / Buffer / Good Product"
        labelName="Order Transaction :"
      />

      <InputFilter
        IsDisabled
        placeholder="Diagnosis"
        label="Assign Engineer"
        Filter={FilterOptions}
      />
      <TextArea IsDisabled label="Note" placeholder="write your note" />
      <Button primary>Submit</Button>
    </div>
  );
};

export default ComplaintOrderStatusQC;

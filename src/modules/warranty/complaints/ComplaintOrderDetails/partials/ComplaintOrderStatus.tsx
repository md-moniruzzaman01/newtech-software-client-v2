import Button from "../../../../../common/components/Button";
import Input from "../../../../../common/components/Input";
import InputFilter from "../../../../../common/components/InputFilter/InputFilter";
import TextArea from "../../../../../common/components/TextArea/TextArea";
import { FilterOptions3 } from "../../../../../shared/config/constaints";

const ComplaintOrderStatus = () => {
  return (
    <div className="space-y-2">
      <Input
        IsDisabled
        inputPlaceholder="121156464684"
        labelName="Order Number :"
      />

      <InputFilter
        isDisabled
        placeholder="Working"
        label="Order status :"
        Filter={FilterOptions3}
      />
      <InputFilter
        isDisabled
        placeholder="Delivered/ Complete / Buffer / Good Product"
        label="Order status :"
        Filter={FilterOptions3}
      />

      <TextArea label="Note :" placeholder="lkjoijojpk[ikk" IsDisabled />
      <Button primary>Submit</Button>
    </div>
  );
};

export default ComplaintOrderStatus;

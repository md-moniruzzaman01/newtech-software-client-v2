import Button from "../../../../common/components/Button";
import Input from "../../../../common/components/Input";
import InputFilter from "../../../../common/components/InputFilter/InputFilter";
import PhotoAttach from "../../../../common/components/PhotoAttach/PhotoAttach";
import TextArea from "../../../../common/components/TextArea/TextArea";
import { FilterOptions } from "../../../../shared/config/constaints";
import { HTML5Backend } from "react-dnd-html5-backend"; // or any other backend you prefer
import { DndProvider } from "react-dnd";
import { useState } from "react";

const QAItemOrderStatus = () => {
  const [droppedImage, setDroppedImage] = useState<string>();
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
        placeholder="Testing"
        label="QA Status :"
        Filter={FilterOptions}
      />

      <Input
        IsDisabled
        inputPlaceholder="Delivered/ Complete / Buffer / Good Product"
        labelName="Order Transaction :"
      />

      <div>
        <h1 className="font-medium">Upload Item Image :</h1>
        <DndProvider backend={HTML5Backend}>
          <PhotoAttach
            droppedImage={droppedImage}
            setDroppedImage={setDroppedImage}
          />
        </DndProvider>
        <div className="text-center text-shadeOfBlueLight">
          Browse your computer
        </div>
      </div>
      <TextArea IsDisabled label="Note" placeholder="write your note" />
      <Button primary>Submit</Button>
    </div>
  );
};

export default QAItemOrderStatus;

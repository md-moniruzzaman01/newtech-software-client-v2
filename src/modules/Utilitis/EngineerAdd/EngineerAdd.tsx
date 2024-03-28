import { DndProvider } from "react-dnd";
import PhotoAttach from "../../../common/components/PhotoAttach/PhotoAttach";
import { HTML5Backend } from "react-dnd-html5-backend";
import InputFilter from "../../../common/components/InputFilter/InputFilter";
import Input from "../../../common/components/Input";
import Navbar from "../../../common/widgets/Navbar/Navbar";

const EngineerAdd = () => {
  return (
    <div className="px-5">
      <Navbar name="Engineer Add" />
      <div className="bg-solidWhite my-5 py-5 px-10">
        <div className="space-y-2">
          <h1 className="text-xl font-semibold">Create an Engineer</h1>
          <hr className="border-t-4" />
        </div>
        <div className="flex  gap-5">
          <div className="w-1/2 py-5 space-y-3">
            <Input labelName="Engineer Name" />
            <Input labelName="Engineer Name" />
            <Input
              inputPlaceholder="Contact Number"
              labelName="Contact Number"
            />
            <Input inputPlaceholder="Email" labelName="Email" />
            <Input inputPlaceholder="Address" labelName="Address" />
          </div>
          <div className="w-1/2 py-5 space-y-3">
            <InputFilter
              placeholder="Active / Deactivate"
              // Filter={FilterOptions}
              label="Status"
            />
            <div className="space-y-2">
              <h2 className="font-semibold">Upload Profile Image:</h2>
              <DndProvider backend={HTML5Backend}>
                <PhotoAttach />
              </DndProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngineerAdd;

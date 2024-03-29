
import { HTML5Backend } from "react-dnd-html5-backend"; // or any other backend you prefer
import { DndProvider } from "react-dnd";
import Navbar from "../../../../common/widgets/Navbar/Navbar";
import Input from "../../../../common/components/Input";
import InputFilter from "../../../../common/components/InputFilter/InputFilter";
import { FilterOptions } from "../../../../shared/config/constaints";
import PhotoAttach from "../../../../common/components/PhotoAttach/PhotoAttach";

const CustomerAddOrEdit = () => {
  return (
    <div className="px-5">
      <Navbar name="Customer Info" />
      <div className="bg-solidWhite my-5 py-5 px-10">
        <div className="space-y-2">
          <h1 className="text-xl font-semibold">Add/Edit Customer</h1>
          <hr className="border-t-4" />
        </div>
        <div className="flex  gap-5">
          <div className="w-1/2 py-5 space-y-3">
            <Input inputPlaceholder="Customer Name" labelName="Customer Name" />
            <Input inputPlaceholder="Company Name" labelName="Company Name" />
            <Input inputPlaceholder="Designation" labelName="Designation" />
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
              Filter={FilterOptions}
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

export default CustomerAddOrEdit;

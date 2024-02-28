import Input from "../../../common/components/Input";
import InputFilter from "../../../common/components/InputFilter/InputFilter";
import PhotoAttach from "../../../common/components/PhotoAttach/PhotoAttach";
import Navbar from "../../../common/widgets/Navbar/Navbar";
import { FilterOptions } from "../../../shared/config/constaints";

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
              <PhotoAttach />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerAddOrEdit;

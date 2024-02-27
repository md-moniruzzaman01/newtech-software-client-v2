import Button from "../../../common/components/Button";
import Input from "../../../common/components/Input";
import TextArea from "../../../common/components/TextArea/TextArea";
import Navbar from "../../../common/widgets/Navbar/Navbar";

const ComplaintService = () => {
  return (
    <div className="px-5">
      <Navbar name={"Complaint's Add"}></Navbar>
      <div className=" mt-5 py-5  rounded-t-md bg-[#FBFBFB] px-5">
        <div className="grid grid-cols-4 gap-8">
          {/* Customers Name  */}
          <div>
            <Input
              inputName="customer_Name"
              inputPlaceholder="Customer Name"
              labelName="Customer Name"
            ></Input>
          </div>
          {/* Contact Number  */}
          <div>
            <Input
              inputPlaceholder="Contact Number"
              labelName="Contact Number"
            ></Input>
          </div>
          {/* Email  */}
          <div>
            <Input inputPlaceholder="Email" labelName="Email"></Input>
          </div>
          {/* Address  */}
          <div>
            <Input inputPlaceholder="Address" labelName="Address"></Input>
          </div>
          {/* Product / Items Name  */}
          <div>
            <Input
              inputPlaceholder="Product / Items Name"
              labelName="Product / Items Name"
            ></Input>
          </div>
          {/* Brand Name  */}
          <div>
            <Input inputPlaceholder="Brand Name" labelName="Brand Name"></Input>
          </div>
          {/* Model Number   */}
          <div>
            <Input
              inputPlaceholder="Model Number"
              labelName="Model Number"
            ></Input>
          </div>
          {/* Serial Number  */}
          <div>
            <Input
              inputPlaceholder="Serial Number"
              labelName="Serial Number"
            ></Input>
          </div>
          {/* Warranty Type  */}
          <div>
            <Input
              inputPlaceholder="Warranty Type"
              labelName="Warranty Type"
            ></Input>
          </div>
          {/* Remark  */}
          <div className="col-span-2">
            <Input inputPlaceholder="Remark" labelName="Remark"></Input>
          </div>
          {/* Branch Name  */}
          <div>
            <Input
              inputPlaceholder="Branch Name"
              labelName="Branch Name"
            ></Input>
          </div>
          {/* Problem  */}
          <div className="col-span-3">
            <TextArea
              label="Write Problem"
              placeholder="Write Problem"
            ></TextArea>
            <div className="flex justify-end py-5">
              <Button className="!text-solidBlack rounded-sm  !bg-[#D9D9D9]">
                Add More
              </Button>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-5 pt-10">
          <div>
            <Button primary>Cancel</Button>
          </div>
          <div>
            <Button primary>Save</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplaintService;

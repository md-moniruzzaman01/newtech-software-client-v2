import { useEffect, useState } from "react";
import Button from "../../../common/components/Button";
import Input from "../../../common/components/Input";
import TextArea from "../../../common/components/TextArea/TextArea";
import Navbar from "../../../common/widgets/Navbar/Navbar";
import {
  ComplaintServiceProps,
  partnerProps,
  updateAddedItemProps,
} from "./config/types";
import swal from "sweetalert";
import {
  getFromLocalStorage
} from "../../../shared/helpers/local_storage";
import { authKey } from "../../../shared/config/constaints";
import { useServiceAddMutation } from "../../../redux/features/api/service";
import { defaultPartnerValue } from "./config/constants";

const ComplaintService: React.FC<ComplaintServiceProps> = () => {
  const [addedItem, setAddedItem] = useState<updateAddedItemProps[]>([]);
  const [selectData, setSelectData] = useState<updateAddedItemProps | null>(
    null
  );
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [partnerInfo, setPartnerInfo] =
    useState<partnerProps>(defaultPartnerValue);
  // const [loading, setLoading] = useState(false);

  // const [serviceAdd] = useServiceAddMutation();

  useEffect(() => {
    const storedAddedItem = localStorage.getItem("addedItem");
    const storedPartnerInfo = localStorage.getItem("customerInfo");

    if (storedAddedItem) {
      setAddedItem(JSON.parse(storedAddedItem));
    }
    if (storedPartnerInfo) {
      setPartnerInfo(JSON.parse(storedPartnerInfo));
    }
  }, []);

  const handleAddItem = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget; // Use currentTarget for the form element
    const customer_name = (
      form.elements.namedItem("customer_name") as HTMLInputElement
    ).value;
    const contact_number = (
      form.elements.namedItem("contact_number") as HTMLInputElement
    ).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const address = (form.elements.namedItem("address") as HTMLInputElement)
      .value;

    const brand_name = (
      form.elements.namedItem("brand_name") as HTMLInputElement
    ).value;
    const model_number = (
      form.elements.namedItem("model_number") as HTMLInputElement
    ).value;
    const serial_number = (
      form.elements.namedItem("serial_number") as HTMLInputElement
    ).value;

    const remark = (form.elements.namedItem("remark") as HTMLInputElement)
      .value;

    const problem = (form.elements.namedItem("problem") as HTMLInputElement)
      .value;

    const partner = {
      customer_name,
      contact_number,
      email,
      address,
    };

    setPartnerInfo(partner);

    const data = {
      brand_name,
      model_number,
      serial_number,
      // warranty_type,
      remark,
      problem,
    };

    let updatedAddedItem: updateAddedItemProps[];

    if (!Array.isArray(addedItem)) {
      // Handle the case where addedItem is not an array
      updatedAddedItem = [data];
    } else if (selectedItem !== null) {
      // Update the selected item in the array
      updatedAddedItem = [
        ...addedItem.slice(0, selectedItem),
        data,
        ...addedItem.slice(selectedItem + 1),
      ];
      setSelectedItem(null);
      setSelectData(null);
    } else {
      updatedAddedItem = [...addedItem, data];
    }

    // Update state with the new array
    setAddedItem(updatedAddedItem);

    // Save the updated array in local storage
    localStorage.setItem("addedItem", JSON.stringify(updatedAddedItem));
    localStorage.setItem("customerInfo", JSON.stringify(partner));
    form.reset();
  };

  const updateData = (index: number) => {
    const selectedItemData: updateAddedItemProps = addedItem[index];

    setSelectedItem(index);
    setSelectData(selectedItemData);
  };

  const deleteData = (index: number) => {
    swal({
      title: "Are you sure?",
      text: "This action will delete all data permanently. Are you sure you want to proceed?",
      icon: "warning",
      buttons: ["Cancel", "Delete"], // Example of custom buttons
      dangerMode: true,
    }).then((willDelete: boolean) => {
      if (willDelete) {
        // Remove the item at the specified index from addedItem state
        const updatedAddedItem = addedItem.filter((_, i) => i !== index);

        if (updatedAddedItem?.length === 0) {
          setPartnerInfo(defaultPartnerValue);
          localStorage.removeItem("partnerInfo");
          localStorage.removeItem("customerInfo");
        }

        // Update state with the new array
        setAddedItem(updatedAddedItem);

        // Save the updated array in local storage
        localStorage.setItem("addedItem", JSON.stringify(updatedAddedItem));

        setSelectedItem(null);
        swal("Your data has been successfully deleted.", {
          icon: "success",
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };

  const deleteAll = () => {
    swal({
      title: "Are you sure?",
      text: "This action will delete all data permanently. Are you sure you want to proceed?",
      icon: "warning",
      buttons: ["Cancel", "Delete"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        setAddedItem([]);
        setPartnerInfo(defaultPartnerValue);
        localStorage.removeItem("addedItem");
        localStorage.removeItem("partnerInfo");
        localStorage.removeItem("customerInfo");
        swal("Your data has been successfully deleted.", {
          icon: "success",
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };

  const { customer_name, contact_number, email, address } = partnerInfo;
  const fullData = {
    customer_name,
    contact_number,
    email,
    address,
    addedItem,
  };
  console.log(fullData);

  const handleDataSubmit = async () => {
    const token = getFromLocalStorage(authKey);
    try {
      const result = await serviceAdd({ fullData, token });

      if ("data" in result) {
        setAddedItem([]);
        setPartnerInfo(defaultPartnerValue);
        removeFromLocalStorage("addedItem");
        removeFromLocalStorage("customerInfo");
        swal("Your data has been successfully submitted.", {
          icon: "success",
        });
      } else if ("error" in result) {
        swal("Something went wrong!", {
          icon: "error",
        });
      }
    } catch (error) {
      console.error("Error adding complaint:", error);
    }
  };

  return (
    <div className="px-5">
      <Navbar name={"Complaint's Add"}></Navbar>
      <div className="grid grid-cols-[auto,320px] gap-1  mt-10 ">
        <div className="py-5  rounded-md bg-[#FBFBFB] px-5">
          <form onSubmit={handleAddItem}>
            <div className="grid grid-cols-4 gap-8">
              {/* Customers Name  */}
              <div>
                <Input
                  defaultValue={`${
                    partnerInfo ? partnerInfo?.customer_name : ""
                  }`}
                  IsDisabled={addedItem?.length > 0 ? true : false}
                  required
                  inputName="customer_name"
                  inputPlaceholder="Customer Name"
                  labelName="Customer Name"
                />
              </div>
              {/* Contact Number  */}
              <div>
                <Input
                  defaultValue={`${
                    partnerInfo ? partnerInfo?.contact_number : ""
                  }`}
                  IsDisabled={addedItem?.length > 0 ? true : false}
                  required
                  inputPlaceholder="Contact Number"
                  labelName="Contact Number"
                  inputName="contact_number"
                ></Input>
              </div>
              {/* Email  */}
              <div>
                <Input
                  defaultValue={`${partnerInfo ? partnerInfo?.email : ""}`}
                  IsDisabled={addedItem?.length > 0 ? true : false}
                  required
                  inputPlaceholder="Email"
                  inputName="email"
                  labelName="Email"
                ></Input>
              </div>
              {/* Address  */}
              <div>
                <Input
                  defaultValue={`${partnerInfo ? partnerInfo?.address : ""}`}
                  IsDisabled={addedItem?.length > 0 ? true : false}
                  required
                  inputName="address"
                  inputPlaceholder="Address"
                  labelName="Address"
                ></Input>
              </div>

              {/* Brand Name  */}
              <div>
                <Input
                  defaultValue={`${selectData ? selectData?.brand_name : ""}`}
                  required
                  inputName="brand_name"
                  inputPlaceholder="Brand Name"
                  labelName="Brand Name"
                ></Input>
              </div>
              {/* Model Number   */}
              <div>
                <Input
                  defaultValue={`${selectData ? selectData?.model_number : ""}`}
                  required
                  inputName="model_number"
                  inputPlaceholder="Model Number"
                  labelName="Model Number"
                ></Input>
              </div>
              {/* Serial Number  */}
              <div>
                <Input
                  defaultValue={`${
                    selectData ? selectData?.serial_number : ""
                  }`}
                  required
                  inputName="serial_number"
                  inputPlaceholder="Serial Number"
                  labelName="Serial Number"
                ></Input>
              </div>

              {/* Remark  */}
              <div className="col-span-2">
                <Input
                  defaultValue={`${selectData ? selectData?.remark : ""}`}
                  required
                  inputName="remark"
                  inputPlaceholder="Remark"
                  labelName="Remark"
                ></Input>
              </div>

              {/* Problem  */}
              <div className="col-span-3">
                <TextArea
                  defaultValue={`${selectData ? selectData?.problem : ""}`}
                  name="problem"
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
          </form>
          <div className="flex justify-center  pt-10">
            <div>
              <Button
                onClick={handleDataSubmit}
                disabled={addedItem?.length <= 0}
                primary
              >
                Submit {addedItem?.length > 0 && "All"}
              </Button>
            </div>
          </div>
        </div>
        <div className="">
          <h1 className="text-center font-semibold text-xl underline">
            Added Item
          </h1>
          {addedItem?.length > 0 && (
            <div className="py-5 text-center">
              <Button onClick={deleteAll} danger className="px-2 py-1 text-xs">
                Delete All
              </Button>
            </div>
          )}
          <div>
            <div className="mt-5 mx-2 flex flex-col gap-5">
              {addedItem.length ? (
                addedItem.map((item, index) => (
                  <div
                    key={index}
                    className="p-5 rounded-xl shadow-xl space-y-5 bg-lightGray"
                  >
                    <div className="text-base font-semibold overflow-x-auto">
                      Brand Name :
                      <span className="text-sm font-normal">
                        {item?.brand_name}
                      </span>
                    </div>
                    <div className="text-base font-semibold overflow-x-auto">
                      Model Number :
                      <span className="text-sm font-normal">
                        {item?.model_number}
                      </span>
                    </div>
                    <div className="text-base font-semibold overflow-x-auto">
                      Serial Number :
                      <span className="text-sm font-normal">
                        <span> {item?.serial_number}</span>
                      </span>
                    </div>
                    <div className="text-base font-semibold overflow-x-auto">
                      Remark :
                      <span className="text-sm font-normal">
                        {item?.remark}
                      </span>
                    </div>

                    <div className="flex justify-between ">
                      <Button
                        className="px-2 py-1 text-xs"
                        onClick={() => deleteData(index)}
                        danger
                      >
                        Delete
                      </Button>
                      <Button
                        className="px-2 py-1 text-xs"
                        onClick={() => updateData(index)}
                        primary
                      >
                        Update
                      </Button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="font-semibold  text-center mt-20">
                  Empty Data
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplaintService;

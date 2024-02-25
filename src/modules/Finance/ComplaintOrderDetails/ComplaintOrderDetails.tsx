import ComplaintDetailsCard from "../../../common/components/ComplaintDetailsCard/ComplaintDetailsCard";
import ComplaintHeaderCard from "../../../common/components/ComplaintHeaderCard/ComplaintHeaderCard";
import Navbar from "../../../common/widgets/Navbar/Navbar";
import { ComplaintDetails } from "../../../shared/config/constaints";
import { MdModeEdit } from "react-icons/md";

const ComplaintOrderDetails = () => {
  return (
    <div className="px-5">
      <Navbar name={"Complaint's Order Details"} />

      <div className="grid grid-cols-5 gap-2 pt-8">
        <ComplaintHeaderCard
          headerDetails="25/02/24"
          bgColor="primary"
          headerTitle="Created Date"
        />
        <ComplaintHeaderCard
          headerDetails="25/02/24"
          bgColor="primary"
          headerTitle="Due Date"
        />
        <ComplaintHeaderCard
          headerDetails="25/02/24"
          bgColor="primary"
          headerTitle="Name"
        />
        <ComplaintHeaderCard
          headerDetails="fahimkhandakar1@gmail.com"
          bgColor="primary"
          headerTitle="Email"
        />
        <ComplaintHeaderCard
          headerDetails="25/02/24"
          bgColor="primary"
          headerTitle="Contact No"
        />
      </div>

      <div className="grid grid-cols-3 gap-2 py-5">
        <ComplaintDetailsCard
          headerTitle="Branch Address"
          CardInformation={ComplaintDetails}
        />
        <ComplaintDetailsCard
          headerTitle="Billing Address"
          CardInformation={ComplaintDetails}
        />
        <ComplaintDetailsCard
          headerTitle="Invoice Details"
          CardInformation={ComplaintDetails}
        />

        <div className="col-span-2 bg-[#D9D9D9] px-5">
          <div className="flex justify-between items-center  py-2 ">
            <h2 className="text-xl font-semibold">Order Summery</h2>
            <div>
              <MdModeEdit />
            </div>
          </div>
          <div className="grid grid-cols-5 gap-2  text-center p-2 font-semibold border-b-2 border-black">
            <div>SL Number</div>
            <div>Items</div>
            <div>Problem</div>
            <div>Remark</div>
            <div>Price</div>
          </div>
          <div className="grid grid-cols-5 gap-2  text-center p-2 border-b-2 border-black">
            <div>SL Number</div>
            <div>Items</div>
            <div>Problem</div>
            <div>Remark</div>
            <div>1,00,000.00</div>
          </div>
          <div className="flex justify-between px-10  py-2 border-b-2 border-black">
            <div>Consulting</div>

            <div>1,00,000.00</div>
          </div>
          <div className="flex justify-between px-10  py-2 border-b-2 border-black">
            <div>Materials Replacement: Yes / No</div>

            <div>1,00,000.00</div>
          </div>
          <div className="flex justify-end">
            <div className="col-span-2">
              <div>
                <span className="font-medium">Subtotal:</span>
                <p></p>
              </div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplaintOrderDetails;

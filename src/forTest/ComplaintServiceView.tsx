import ComplaintServiceCard from "../common/components/ComplaintServiceViewCard/ComplaintServiceCard";
import Navbar from "../common/widgets/Navbar/Navbar";
import SideBar from "../common/widgets/SideBar/SideBar";

const ComplaintServiceView = () => {
  return (
    <div className="flex">
      <SideBar></SideBar>
      <div className="flex-1 ">
        <Navbar name={"Complaint's Service View"}></Navbar>
        <div className="mx-[50px] mt-5 py-5 px-5 rounded-t-md ">
          {/* first line  */}
          <div>
            <h1 className="text-[#0074D9] font-semibold py-2">
              Customer Details
            </h1>
            <div className="grid grid-cols-5 gap-5">
              <ComplaintServiceCard
                title="Customer Name"
                details="Jhon doe"
              ></ComplaintServiceCard>
              <ComplaintServiceCard
                title="Customer Name"
                details="Jhon doe"
              ></ComplaintServiceCard>
              <ComplaintServiceCard
                title="Customer Name"
                details="Jhon doe"
              ></ComplaintServiceCard>
              <ComplaintServiceCard
                title="Customer Name"
                details="Jhon doe"
              ></ComplaintServiceCard>
              <ComplaintServiceCard
                title="Customer Name"
                details="Jhon doe"
              ></ComplaintServiceCard>
            </div>
          </div>
          {/* second line */}
          <div className="pt-5">
            <h1 className="text-[#0074D9] font-semibold py-2">
              Product / Items Details
            </h1>
            <div className="grid grid-cols-5 gap-5">
              <ComplaintServiceCard
                title="Customer Name"
                details="Jhon doe"
              ></ComplaintServiceCard>
              <ComplaintServiceCard
                title="Customer Name"
                details="Jhon doe"
              ></ComplaintServiceCard>
              <ComplaintServiceCard
                title="Customer Name"
                details="Jhon doe"
              ></ComplaintServiceCard>
              <ComplaintServiceCard
                title="Customer Name"
                details="Jhon doe"
              ></ComplaintServiceCard>
              <ComplaintServiceCard
                title="Customer Name"
                details="Jhon doe"
              ></ComplaintServiceCard>
            </div>
          </div>
          {/* third line  */}
          <div className="pt-5">
            <div className="grid grid-cols-5 gap-5 cols">
              <ComplaintServiceCard
                styleClass="col-span-2"
                title="Customer Name"
                details="Jhon doe"
              ></ComplaintServiceCard>
              <ComplaintServiceCard
                styleClass="col-span-3"
                title="Customer Name"
                details="Jhon doe"
              ></ComplaintServiceCard>
            </div>
          </div>
          {/* fourth line  */}
          <div className="pt-5">
            <h1 className="text-[#0074D9] font-semibold py-2">
              Receiver Details
            </h1>
            <div className="grid grid-cols-5 gap-5">
              <ComplaintServiceCard
                title="Customer Name"
                details="Jhon doe"
              ></ComplaintServiceCard>
              <ComplaintServiceCard
                title="Customer Name"
                details="Jhon doe"
              ></ComplaintServiceCard>
              <ComplaintServiceCard
                title="Customer Name"
                details="Jhon doe"
              ></ComplaintServiceCard>
              <ComplaintServiceCard
                title="Customer Name"
                details="Jhon doe"
              ></ComplaintServiceCard>
              <ComplaintServiceCard
                title="Customer Name"
                details="Jhon doe"
              ></ComplaintServiceCard>
            </div>
          </div>
        </div>
        <div className="pt-10 flex justify-between mx-[50px]">
          <div>
            <button className="btn text-black  px-8 btn-ghost rounded-sm h-0 min-h-8 bg-[#f3f3f3]">
              Previous
            </button>
          </div>
          <div>
            <button className="btn text-white px-8 btn-ghost rounded-sm h-0 min-h-8 bg-[#0074D9]">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplaintServiceView;

import { useState } from "react";
import CorporateClientForm from "./partials/Corporate Client Form/CorporateClientForm";
import ServiceForm from "./partials/Service Form/ServiceForm";
import Navbar from "../../../common/widgets/Navbar/Navbar";
import Button from "../../../common/components/Button";

const ComplaintService = () => {
  const [activeTab, setActiveTab] = useState(true);

  return (
    <div className="w-full px-5">
      <Navbar name={"Complaint's Add"} />
      <div className="py-5  rounded-md bg-[#FBFBFB] mt-5 ">
        <div className="grid grid-cols-[auto,320px] mb-5">
          <div className="flex justify-end px-6">
            <Button
              onClick={() => setActiveTab(!activeTab)}
              primary
              className="text-xs !px-2 !py-1"
            >
              {activeTab ? "Service Form" : "Corporate client Form"}
            </Button>
          </div>
        </div>

        {/* Tab Content */}
        <div>{activeTab ? <ServiceForm /> : <CorporateClientForm />}</div>
      </div>
    </div>
  );
};

export default ComplaintService;

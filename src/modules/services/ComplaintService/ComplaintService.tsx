import { useState } from "react";
import CorporateClientForm from "./partials/Corporate Client Form/CorporateClientForm";
import ServiceForm from "./partials/Service Form/ServiceForm";
import Navbar from "../../../common/widgets/Navbar/Navbar";

const tabs = [
  { name: "Service Form", key: "service" },
  { name: "Corporate Client Form", key: "corporate" },
];

const ComplaintService = () => {
  const [activeTab, setActiveTab] = useState("service");

  return (
    <div className="w-full px-5">
      <Navbar name={"Complaint's Add"} />
      <div className="py-5  rounded-md bg-[#FBFBFB] mt-5">
        <div className="flex justify-center border-b border-gray-300 mb-7 ">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 text-sm font-medium transition-all duration-200 ${
                activeTab === tab.key
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500 hover:text-blue-500"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="">
          {activeTab === "service" && <ServiceForm />}
          {activeTab === "corporate" && <CorporateClientForm />}
        </div>
      </div>
    </div>
  );
};

export default ComplaintService;

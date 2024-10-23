import { NavLink } from "react-router-dom";
import Button from "../../../../../common/components/Button";
import { icons } from "../../../../../shared/libs/Icons";
import { getPowerName } from "../../../../../shared/helpers/getPowerName";
import { getBranchName } from "../../../../../shared/helpers/getBranchName";
import Summary from "./Summary";
import CommonTable from "../../../../../common/components/Common Table/CommonTable";
import {
  headerForBill,
  headerForDiscount,
  headerForQa,
  headerForQc,
  headerForRepair,
  tableLayoutForBill,
  tableLayoutForDiscount,
  tableLayoutForQa,
  tableLayoutForQc,
  tableLayoutForRepair,
} from "../config/constants";

const UserInfo = ({ data }) => {
  const { user, QaItems, QcItems, repairItems, discountItems, BillItems } =
    data.data;
  const { Engineer, needsPasswordChange } = user;
  console.log(QaItems);
  return (
    <div>
      <div className="bg-white pt-2 px-5 pb-3 rounded-lg shadow-lg  mx-auto">
        {/* Password Change Action */}
        {needsPasswordChange && (
          <div className="flex justify-end  pt-3 pr-5">
            <NavLink
              to={`${
                user?.role === "admin"
                  ? "/change-password"
                  : "/user-change-password"
              }`}
            >
              <Button small>Change Password</Button>
            </NavLink>
          </div>
        )}
        {/* Profile Header */}
        <div className="flex flex-col text-center items-center mb-6">
          {Engineer?.profileImage ? (
            <img
              src={Engineer.profileImage}
              alt="Profile"
              className="w-24 h-24 rounded-full border-2 border-blue-500 shadow-lg"
            />
          ) : (
            <div className="w-24 h-24 rounded-full border-2 border-blue-500 flex items-center justify-center text-4xl shadow-lg">
              {icons?.user}
            </div>
          )}
          <h1 className="text-2xl font-bold mt-3 text-gray-800">
            {Engineer.name.firstName} {Engineer.name.lastName}
          </h1>
          <p className="text-gray-600 text-sm">{Engineer.designation}</p>
          <p className="text-gray-700 text-sm">{Engineer.email}</p>
        </div>

        {/* User and Engineer Info */}
        <div className="flex justify-around mb-4 bg-gray-50 p-4 rounded-lg shadow-sm text-sm">
          <div className="space-y-1">
            <h2 className="font-semibold text-gray-800">User Info</h2>
            <p className="text-gray-700">
              <span className="font-medium">ID:</span> {user.id}
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Role:</span> {user.role}
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Branch:</span>{" "}
              {getBranchName(user.branch)}
            </p>

            <p className="text-gray-700">
              <span className="font-medium">Contact:</span> {Engineer.contactNo}
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Created:</span>{" "}
              {new Date(Engineer.createdAt).toLocaleDateString()}
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Updated:</span>{" "}
              {new Date(Engineer.updatedAt).toLocaleDateString()}
            </p>
          </div>
          {/* Skills and Power Levels */}
          <div className="">
            <h2 className="font-semibold text-gray-800">Power Levels</h2>
            <ul className="list-disc pl-5 text-gray-600">
              {Engineer.power.map((power, index) => (
                <li key={index}>{getPowerName(power)}</li>
              ))}
            </ul>
          </div>
          <div className="">
            <h2 className="font-semibold text-gray-800">Skills ID</h2>
            <ul className="list-disc pl-5 text-gray-600">
              {Engineer.Skill.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <Summary
            qaItems={QaItems}
            qcItems={QcItems}
            discountItems={discountItems}
            repairItems={repairItems}
            billItems={BillItems}
          />
        </div>
      </div>
      {repairItems?.length && (
        <div className="bg-solidWhite pt-5 px-5 my-5 rounded-md">
          <h2 className="text-2xl font-semibold pb-5">Repair Details</h2>
          <CommonTable
            headerData={headerForRepair}
            dataLayout={tableLayoutForRepair}
            itemData={repairItems}
          />
        </div>
      )}
      {QcItems?.length && (
        <div className="bg-solidWhite pt-5 px-5 my-5 rounded-md">
          <h2 className="text-2xl font-semibold pb-5">QC Details</h2>
          <CommonTable
            headerData={headerForQc}
            dataLayout={tableLayoutForQc}
            itemData={QcItems}
          />
        </div>
      )}
      {QaItems?.length && (
        <div className="bg-solidWhite pt-5 px-5 my-5 rounded-md">
          <h2 className="text-2xl font-semibold pb-5">QA Details</h2>
          <CommonTable
            headerData={headerForQa}
            dataLayout={tableLayoutForQa}
            itemData={QaItems}
          />
        </div>
      )}
      {discountItems?.length && (
        <div className="bg-solidWhite pt-5 px-5 my-5 rounded-md">
          <h2 className="text-2xl font-semibold pb-5">Discount Details</h2>
          <CommonTable
            headerData={headerForDiscount}
            dataLayout={tableLayoutForDiscount}
            itemData={discountItems}
          />
        </div>
      )}
      {BillItems?.length && (
        <div className="bg-solidWhite pt-5 px-5 my-5 rounded-md">
          <h2 className="text-2xl font-semibold pb-5">Bill Details</h2>
          <CommonTable
            headerData={headerForBill}
            dataLayout={tableLayoutForBill}
            itemData={BillItems}
          />
        </div>
      )}
    </div>
  );
};

export default UserInfo;

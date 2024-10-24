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

import { getUserInfo } from "../../../../../services/auth.service";

const UserInfo = ({ data }) => {
  const userInfo = getUserInfo();
  const { user, QaItems, QcItems, repairItems, discountItems, BillItems } =
    data.data;
  const { Engineer } = user;
  console.log(data, userInfo);
  return (
    <div>
      <div className="bg-white px-5 pb-3 rounded-lg shadow-lg  mx-auto">
        <div className="flex items-center justify-between pt-5">
          {/* <header className="flex justify-between items-center ">
            <h1 className="text-3xl font-bold flex items-center">
              <FontAwesomeIcon icon={faUser} className="mr-2 text-blue-500" />
              Employee's Summary
            </h1>
          </header> */}
        </div>

        {/* Profile Header */}
        <div className="">
          <div className="grid grid-cols-6 gap-5">
            {/* image  */}
            <div className="col-span-1">
              {Engineer?.profileImage ? (
                <img
                  src={Engineer?.profileImage}
                  alt="Profile"
                  className="w-40 h-40  border-2 border-blue-500 shadow-lg"
                />
              ) : (
                <div className="w-40 h-40  border-2 border-blue-500 flex items-center justify-center text-7xl shadow-lg">
                  {icons?.user}
                </div>
              )}
            </div>

            <div className="col-span-4">
              <h1 className="text-4xl font-bold py-2 text-gray-800">
                {Engineer?.name?.firstName} {Engineer?.name?.lastName}
              </h1>
              <p className="text-xl text-blue-500 pb-4 font-medium">
                {Engineer?.designation}
              </p>

              <div className="pt-2">
                {userInfo?.userId === user?.id || userInfo?.role === "admin" ? (
                  <NavLink
                    to={`${
                      user?.role === "admin"
                        ? "/change-password"
                        : "/user-change-password"
                    }`}
                  >
                    <Button small>Change Password</Button>
                  </NavLink>
                ) : (
                  <abbr title="You are not authorized to change the passwords of other users.">
                    <Button small>Change Password</Button>
                  </abbr>
                )}
              </div>
            </div>

            <div className="italic col-span-1">
              <strong>Join Date: </strong>
              <span className="text-blue-500 ">
                {Engineer?.createdAt?.slice(0, 10)}
              </span>
            </div>

            {/* powers  */}
            <div className="pl-3 col-span-1 space-y-5">
              <div>
                <h2 className="font-semibold text-blue-500 text-lg">
                  Power Levels
                </h2>
                <ul className="list-disc pl-5 text-gray-600">
                  {Engineer?.power?.map((power, index) => (
                    <li key={index}>{getPowerName(power)}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-semibold text-blue-500 text-lg">
                  Skills ID
                </h2>
                <ul className="list-disc pl-5 text-gray-600">
                  {Engineer?.Skill?.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* User and Engineer Info */}
            <div className="col-span-5 ">
              <h2 className="font-semibold text-blue-500 text-lg border-b border-grayForBorder pb-2">
                User Info
              </h2>
              <div className="pt-2 text-lg font-semibold">
                <div className="grid grid-cols-3">
                  <div className="col-span-2 space-y-2 ">
                    <p className="text-gray-700 border-b border-grayForBorder pb-2">
                      <span className="font-semibold">ID:</span>
                    </p>
                    <p className="text-gray-700 border-b border-grayForBorder pb-2">
                      <span className="font-semibold">Role:</span>
                    </p>
                    <p className="text-gray-700 border-b border-grayForBorder pb-2">
                      <span className="font-semibold">Branch:</span>
                    </p>
                    <p className="text-gray-700 border-b border-grayForBorder pb-2">
                      <span className="font-semibold">Contact:</span>
                    </p>
                    <p className="text-gray-700 border-b border-grayForBorder pb-2">
                      <span className="font-semibold">Updated:</span>
                    </p>
                  </div>
                  <div className="col-span-1 space-y-2 text-blue-500">
                    <p className="border-b border-grayForBorder pb-2">
                      {user?.id}
                    </p>
                    <p className="border-b border-grayForBorder pb-2">
                      {user?.role}
                    </p>
                    <p className="border-b border-grayForBorder pb-2">
                      {getBranchName(user?.branch)}
                    </p>
                    <p className="border-b border-grayForBorder pb-2">
                      {Engineer?.contactNo}
                    </p>
                    <p className="border-b border-grayForBorder pb-2">
                      {Engineer?.updatedAt?.slice(0, 10)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* user summary cards  */}
        <div className="pt-5">
          <Summary
            qaItems={QaItems}
            qcItems={QcItems}
            discountItems={discountItems}
            repairItems={repairItems}
            billItems={BillItems}
          />
        </div>
      </div>

      {repairItems?.length > 0 && (
        <div className="bg-solidWhite pt-5 px-5 my-5 rounded-md">
          <h2 className="text-2xl font-semibold pb-5">Repair Details</h2>
          <CommonTable
            headerData={headerForRepair}
            dataLayout={tableLayoutForRepair}
            itemData={repairItems}
          />
        </div>
      )}

      {QcItems?.length > 0 && (
        <div className="bg-solidWhite pt-5 px-5 my-5 rounded-md">
          <h2 className="text-2xl font-semibold pb-5">QC Details</h2>
          <CommonTable
            headerData={headerForQc}
            dataLayout={tableLayoutForQc}
            itemData={QcItems}
          />
        </div>
      )}
      {QaItems?.length > 0 && (
        <div className="bg-solidWhite pt-5 px-5 my-5 rounded-md">
          <h2 className="text-2xl font-semibold pb-5">QA Details</h2>
          <CommonTable
            headerData={headerForQa}
            dataLayout={tableLayoutForQa}
            itemData={QaItems}
          />
        </div>
      )}

      {discountItems?.length > 0 && (
        <div className="bg-solidWhite pt-5 px-5 my-5 rounded-md">
          <h2 className="text-2xl font-semibold pb-5">Discount Details</h2>
          <CommonTable
            headerData={headerForDiscount}
            dataLayout={tableLayoutForDiscount}
            itemData={discountItems}
          />
        </div>
      )}

      {BillItems?.length > 0 && (
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

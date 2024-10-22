import { NavLink } from "react-router-dom";
import Button from "../../../../../common/components/Button";
import { UserProfileProps } from "../config/type";
import { icons } from "../../../../../shared/libs/Icons";
import { getPowerName } from "../../../../../shared/helpers/getPowerName";
import { getBranchName } from "../../../../../shared/helpers/getBranchName";

const UserInfo: React.FC<UserProfileProps> = ({ user }) => {
  const { Engineer, needsPasswordChange } = user;
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
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
      <div className="grid grid-cols-2 mb-4 bg-gray-50 p-4 rounded-lg shadow-sm text-sm">
        <div>
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
        </div>

        <div>
          <h2 className="font-semibold text-gray-800">Engineer Info</h2>
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
      </div>

      {/* Skills and Power Levels */}
      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h2 className="font-semibold text-gray-800">Skills</h2>
          <ul className="list-disc pl-5 text-gray-600">
            {Engineer.Skill.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h2 className="font-semibold text-gray-800">Power Levels</h2>
          <ul className="list-disc pl-5 text-gray-600">
            {Engineer.power.map((power, index) => (
              <li key={index}>{getPowerName(power)}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Password Change Action */}
      {needsPasswordChange && (
        <div className="flex justify-center mt-4">
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
    </div>
  );
};

export default UserInfo;

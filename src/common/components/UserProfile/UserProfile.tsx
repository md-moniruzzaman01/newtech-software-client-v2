interface userProfileProps {
  userImg?: string;
  userId?: string;
  userName?: string;
  userPhone?: number;
  userEmail?: string;
  userJoinedDate?: string;
  userDesignation?: string;
  userDepartment?: string;
}

const UserProfile: React.FC<userProfileProps> = ({
  userId,
  userImg,
  userDepartment,
  userDesignation,
  userEmail,
  userJoinedDate,
  userName,
  userPhone,
}) => {
  return (
    <div className="bg-[#D9D9D9] w-[400px]  py-10">
      <h2 className="text-xl font-semibold pl-10">Profile</h2>
      <div className="w-36 mx-auto px-0  pt-5 pb-2">
        <img className="w-full" src={userImg} alt="" />
      </div>
      <div className=" text-center">
        <p>
          <span className="font-semibold">ID:</span> {userId}
        </p>
        <h2 className="text-xl font-bold">{userName}</h2>
      </div>
      <div className="pl-10 pt-5 space-y-5">
        <p>
          <span className="font-semibold">Phone: </span> {userPhone}
        </p>
        <p>
          <span className="font-semibold">Email: </span>
          {userEmail}
        </p>
        <p>
          <span className="font-semibold">Joining Date: </span> {userJoinedDate}
        </p>
        <p>
          <span className="font-semibold">Designation: </span> {userDesignation}
        </p>
        <p>
          <span className="font-semibold">Department: </span> {userDepartment}
        </p>
      </div>
    </div>
  );
};

export default UserProfile;

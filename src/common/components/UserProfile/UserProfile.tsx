interface userProfileProps {
  userImg?: string;
  userId?: string;
  userName?: string;
  userPhone?: number;
  userEmail?: string;
  userJoinedDate?: string;
  userDesignation?: string;
  userDepartment?: string;
  companyName?: string;
  address?: string;
}

const UserProfile: React.FC<userProfileProps> = ({
  userId,
  userImg,
  userDesignation,
  userEmail,
  userJoinedDate,
  userName,
  userPhone,
  companyName,
  address,
}) => {
  return (
    <div className="bg-solidWhite min-w-[400px]  py-10">
      <h2 className="text-xl font-semibold pl-10">Profile</h2>
      {userImg ? (
        <div className="w-36 mx-auto px-0  pt-5 pb-2">
          <img className="w-full" src={userImg} alt="User Image" />
        </div>
      ) : (
        <p className="text-center py-10">User Image Not Found</p>
      )}
      <div className=" text-center space-y-3">
        <p>
          {userId && (
            <>
              <span className="font-semibold">ID : </span> <span>{userId}</span>
            </>
          )}
        </p>
        {userName && <h2 className="text-xl font-medium">{userName}</h2>}
      </div>
      <div className="pl-10 pt-5 space-y-7">
        <p>
          {companyName && <span className="font-semibold">Company : </span>}
          {companyName}
        </p>
        {userPhone && (
          <p>
            <span className="font-semibold">Phone : </span> {userPhone}
          </p>
        )}

        <p>
          {userEmail && <span className="font-semibold">Email : </span>}
          {userEmail}
        </p>
        <p>
          {address && <span className="font-semibold">Address : </span>}
          {address}
        </p>

        <p>
          {userJoinedDate && (
            <span className="font-semibold">Joining Date : </span>
          )}
          {userJoinedDate}
        </p>
        <p>
          {userDesignation && (
            <span className="font-semibold">Designation : </span>
          )}
          {userDesignation}
        </p>
      </div>
    </div>
  );
};

export default UserProfile;

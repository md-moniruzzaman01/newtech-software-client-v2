import UserProfile from "../../../common/components/UserProfile/UserProfile";
import Navbar from "../../../common/widgets/Navbar/Navbar";
import { getUserInfo } from "../../../services/auth.service";
import {
  useGetAdminQuery,
  useGetUserQuery,
} from "../../../redux/features/api/users";
import { authKey } from "../../../shared/config/constaints";
import { getFromLocalStorage } from "../../../shared/helpers/local_storage";
import LoadingPage from "../../../common/components/LoadingPage/LoadingPage";

const MyProfile = () => {
  const { userId } = getUserInfo();
  const token = getFromLocalStorage(authKey);
  const { data: userInfo, isLoading: userLoading } = useGetUserQuery({
    userId,
    token,
  });
  const { data: userAdminInfo, isLoading: adminLoading } = useGetAdminQuery({
    userId,
    token,
  });

  if (userLoading || adminLoading) {
    return <LoadingPage />;
  }
  return (
    <div>
      <div className="py-5 px-5">
        <Navbar name="My Profile" />
      </div>
      <div className=" flex justify-center ">
        <UserProfile
          userPhone={
            userAdminInfo?.data?.contactNo || userInfo?.data?.contactNo
          }
          companyName="Task Technology"
          userDepartment="Software Team"
          userDesignation={
            userAdminInfo?.data?.designation || userInfo?.data?.designation
          }
          userEmail={userAdminInfo?.data?.email || userInfo?.data?.email}
          userId={userAdminInfo?.data?.id || userInfo?.data?.id}
          userJoinedDate={
            userAdminInfo?.data?.createdAt?.toString()?.slice(0, 10) ||
            userInfo?.data?.createdAt?.toString()?.slice(0, 10)
          }
          userName={`${
            (userAdminInfo?.data &&
              userAdminInfo?.data?.name?.firstName +
                " " +
                userAdminInfo?.data?.name?.lastName) ||
            (userInfo?.data &&
              userInfo?.data?.name?.firstName +
                " " +
                userInfo?.data?.name?.lastName)
          }`}
          userImg={
            userAdminInfo?.data?.profileImage || userInfo?.data?.profileImage
          }
        />
      </div>
    </div>
  );
};

export default MyProfile;

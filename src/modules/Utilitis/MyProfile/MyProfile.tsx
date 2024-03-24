import UserProfile from "../../../common/components/UserProfile/UserProfile";
import userImg from "../../../assets/user.jpg";
import Navbar from "../../../common/widgets/Navbar/Navbar";

const MyProfile = () => {
  return (
    <div>
      <div className="py-5 px-5">
        <Navbar name="My Profile" />
      </div>
      <div className=" flex justify-center ">
        <UserProfile
          userPhone={88019039942674}
          companyName="Task Technology"
          userDepartment="Software Team"
          userDesignation="Frontend Developer"
          userEmail="john@doe.gmail.com"
          userId="32213"
          userJoinedDate="22-1-2022"
          userName="John Doe"
          userImg={userImg}
        />
      </div>
    </div>
  );
};

export default MyProfile;

import ComplaintDetailsCard from "../../../../common/components/ComplaintDetailsCard/ComplaintDetailsCard";
import UserProfile from "../../../../common/components/UserProfile/UserProfile";
import Navbar from "../../../../common/widgets/Navbar/Navbar";
import Pagination from "../../../../common/widgets/Pagination/Pagination";
import {
  ComplaintDetails,
  DemoTableHeaderForCustomerDetails,
  authKey,
} from "../../../../shared/config/constaints";
import userImg from "../../../../assets/user.jpg";
import CustomerDetailsTable from "./partials/CustomerDetailsTable";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";
import { useParams } from "react-router-dom";
import LoadingPage from "../../../../common/components/LoadingPage/LoadingPage";
import { useGetPartnerByIdQuery } from "../../../../redux/features/api/Partner";

const CustomerDetailsPage = () => {
  const token = getFromLocalStorage(authKey);
  const { id } = useParams();

  const { data: partner, isLoading: engineerLoading } = useGetPartnerByIdQuery({
    token,
    id,
  });

  console.log(partner);

  if (engineerLoading) {
    return <LoadingPage />;
  }
  return (
    <div className="px-5">
      <Navbar name="Partner Info Details" />
      <div className="grid grid-cols-3 gap-2 py-10">
        <div className="col-span-1">
          <UserProfile
            userId="22334455"
            userName="John Doe"
            userEmail="johndoe123@gmail.com"
            userDesignation="Manager"
            companyName="Acer"
            userImg={userImg}
            userJoinedDate="01/02/2024"
            userPhone={8801903994195}
          />
        </div>
        <div className="col-span-2">
          <div className="grid grid-cols-2 gap-2">
            <div className="h-auto">
              <ComplaintDetailsCard
                headerTitle="Delivery Address"
                CardInformation={ComplaintDetails}
              />
            </div>
            <div className="h-auto">
              <ComplaintDetailsCard
                headerTitle="Billing Address"
                CardInformation={ComplaintDetails}
              />
            </div>
          </div>
          <div className="py-5 relative h-full bg-solidWhite my-2 px-2">
            <CustomerDetailsTable
              HeaderData={DemoTableHeaderForCustomerDetails}
            />
            <div className="fixed bottom-2  right-5">
              <Pagination></Pagination>
            </div>
          </div>
        </div>
        <div className="h-auto"></div>
      </div>
    </div>
  );
};

export default CustomerDetailsPage;

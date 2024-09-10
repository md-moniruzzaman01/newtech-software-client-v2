import ComplaintDetailsCard from "../../../../common/components/ComplaintDetailsCard/ComplaintDetailsCard";
import UserProfile from "../../../../common/components/UserProfile/UserProfile";
import Navbar from "../../../../common/widgets/Navbar/Navbar";
import Pagination from "../../../../common/widgets/Pagination/Pagination";
import {
  ComplaintDetails,
  DemoTableHeaderForCustomerDetails,
  authKey,
} from "../../../../shared/config/constaints";
import CustomerDetailsTable from "./partials/CustomerDetailsTable";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";
import { useParams } from "react-router-dom";
import LoadingPage from "../../../../common/components/LoadingPage/LoadingPage";
import { useGetPartnerByIdQuery } from "../../../../redux/features/api/Partner";
import ErrorShow from "../../../../common/components/Error Show/ErrorShow";

const CustomerDetailsPage = () => {
  const token = getFromLocalStorage(authKey);
  const { id } = useParams();

  const {
    data: partner,
    isLoading: partnerLoading,
    isError,
    error,
  } = useGetPartnerByIdQuery({
    token,
    id,
  });

  if (partnerLoading) {
    return <LoadingPage />;
  }

  if (isError) {
    return <ErrorShow error={error} />;
  }
  return (
    <div className="px-5">
      <Navbar name="Partner Info Details" />
      <div className="grid grid-cols-3 gap-2 py-10">
        <div className="col-span-1">
          <UserProfile
            userPhone={partner?.data?.contactNo}
            companyName={partner?.data?.company}
            userEmail={partner?.data?.email}
            address={partner?.data?.address}
            userId={partner?.data?.id}
            userJoinedDate={partner?.data?.createdAt?.toString()?.slice(0, 10)}
            userName={partner?.data?.contact_person}
            userImg={partner?.data?.profileImage}
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
              <Pagination />
            </div>
          </div>
        </div>
        <div className="h-auto"></div>
      </div>
    </div>
  );
};

export default CustomerDetailsPage;

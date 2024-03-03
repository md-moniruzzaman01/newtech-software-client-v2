import UserProfile from "../../../common/components/UserProfile/UserProfile";
import Navbar from "../../../common/widgets/Navbar/Navbar";
import userImg from "../../../assets/user.jpg";
import ComplaintDetailsCard from "../../../common/components/ComplaintDetailsCard/ComplaintDetailsCard";
import {
  ComplaintDetails,
  DemoTableHeaderForCustomerDetails,
} from "../../../shared/config/constaints";
import CustomerDetailsTable from "./partials/CustomerDetailsTable";
import Pagination from "../../../common/widgets/Pagination/Pagination";

const CustomerDetailsPage = () => {
  // const [currentPage, setCurrentPage] = useState(1);
  // const [totalItems, setTotalItems] = useState(50);
  // const limit = 10;
  return (
    <div className="px-5">
      <Navbar name="Customer Info Details" />
      <div className="grid grid-cols-3 gap-2 py-10">
        <div>
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
            <div className="absolute bottom-5 right-5">
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

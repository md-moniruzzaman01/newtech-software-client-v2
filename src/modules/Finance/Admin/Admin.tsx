import Button from "../../../common/components/Button";
import Navbar from "../../../common/widgets/Navbar/Navbar";
import Pagination from "../../../common/widgets/Pagination/Pagination";
import { authKey } from "../../../shared/config/constaints";
import { NavLink } from "react-router-dom";
import { TableHeaderForAdmin, tableLayout } from "./config/constants";
import { getFromLocalStorage } from "../../../shared/helpers/local_storage";
import { useGetAdminQuery } from "../../../redux/features/api/users";
import CommonTable from "../../../common/components/Common Table/CommonTable";
import { getUserInfo } from "../../../services/auth.service";

const Admin = () => {
  // const [currentPage, setCurrentPage] = useState(1);
  // const [totalItems, setTotalItems] = useState(50);
  // const limit = 10;
  const token = getFromLocalStorage(authKey);
  const { userId } = getUserInfo();
  const { data: adminData } = useGetAdminQuery({ token, userId });
  console.log(adminData);
  return (
    <div className="px-5 relative h-full">
      <Navbar name="Admin Info" />

      <div className="flex justify-end py-5 gap-2">
        <div>
          <NavLink className="!bg-transparent" to={"/add-warranty-complaint"}>
            <Button mini primary>
              + Add Complaints
            </Button>
          </NavLink>
        </div>
        <div>
          <NavLink className="!bg-transparent" to={"/Add-brand"}>
            <Button mini primary>
              + Add Brand
            </Button>
          </NavLink>
        </div>
        <div>
          <NavLink className="!bg-transparent" to={"/add-category"}>
            <Button mini primary>
              + Add Category
            </Button>
          </NavLink>
        </div>
        <div>
          <NavLink className="!bg-transparent" to={"/add-main-category"}>
            <Button mini primary>
              + Add Main Category
            </Button>
          </NavLink>
        </div>
        <NavLink to="/partner/add">
          <Button mini primary>
            + Add Partner
          </Button>
        </NavLink>
        <NavLink to="/add-engineer">
          <Button mini primary>
            + Add Engineer
          </Button>
        </NavLink>
      </div>

      {/* table start here  */}
      <div className="bg-solidWhite p-3">
        <CommonTable
          headerData={TableHeaderForAdmin}
          dataLayout={tableLayout}
          itemData={adminData?.data}
        />
      </div>

      <div className="fixed bottom-2  right-5">
        <Pagination></Pagination>
      </div>
    </div>
  );
};

export default Admin;

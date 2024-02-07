import { useState } from "react";
import BranchHeader from "../common/components/BranchHeader/BranchHeader";
import Pagination from "../common/widgets/Pagination/Pagination";
import SideBar from "../common/widgets/SideBar/SideBar";
import { IoMdEye } from "react-icons/io";

const DiscountAmount = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(50);
  const limit = 10;
  return (
    <div className="flex">
      <SideBar></SideBar>
      <div className="flex-1 ">
        <BranchHeader name={"Discount Amount"}></BranchHeader>
        <div className="mx-[50px] mt-5 py-3 bg-[#FBFBFB]">
          <div className="overflow-x-auto ">
            <table className="table ">
              {/* head */}
              <thead className="bg-[#BDD5E7] text-black">
                <tr>
                  <th>Branch</th>
                  <th>Product ID</th>
                  <th>Issue By</th>
                  <th>Date</th>
                  <th>Items No</th>
                  <th>Price</th>
                  <th>Discount</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>Branch 1</th>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td>Blue</td>
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td className="flex items-center gap-3">
                    Blue <IoMdEye />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="absolute bottom-2 right-[50px]">
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalItems={totalItems}
              limit={limit}
            ></Pagination>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountAmount;

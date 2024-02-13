import Pagination from "../common/widgets/Pagination/Pagination";
import BranchHeader from "../common/components/BranchHeader/BranchHeader";
import SideBar from "../common/widgets/SideBar/SideBar";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const btnStyle = "text-black rounded-md hover:text-black py-2 px-5 text-xl";

const OrderCount = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(50);
  const limit = 10;
  return (
    <div className="flex">
      <SideBar></SideBar>
      <div className="flex-1 ">
        <BranchHeader name={"Order Count"}></BranchHeader>
        <div className="mx-[50px] mt-5 py-3 bg-[#FBFBFB]">
          <div className="overflow-x-auto ">
            <div className="flex gap-2 py-1 my-2">
              <div>
                <NavLink to="/" className={btnStyle}>
                  <span>All</span>
                </NavLink>
              </div>
              <div>
                <NavLink to="/received" className={btnStyle}>
                  <span>Received</span>
                </NavLink>
              </div>
              <div>
                <NavLink to="/pending" className={btnStyle}>
                  <span>Pending</span>
                </NavLink>
              </div>
              <div>
                <NavLink to="/in-progress" className={btnStyle}>
                  <span>In Progress</span>
                </NavLink>
              </div>
              <div>
                <NavLink to="/completed" className={btnStyle}>
                  <span>Completed</span>
                </NavLink>
              </div>
              <div>
                <NavLink to="/delivered" className={btnStyle}>
                  <span>Delivered</span>
                </NavLink>
              </div>
            </div>
            <table className="table ">
              {/* head */}
              <thead className="bg-[#BDD5E7] text-black">
                <tr>
                  <th>Product ID</th>
                  <th>Branch</th>
                  <th>Received By</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>Branch 1</th>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td>
                    <button className="btn btn-xs  bg-yellow-400">value</button>
                  </td>
                  <th>1</th>
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

export default OrderCount;

import { IoMdEye } from "react-icons/io";
import Filter from "../common/components/Filter/Filter";
import SearchBar from "../common/components/SearchBar/SearchBar";
import Navbar from "../common/widgets/Navbar/Navbar";
import SideBar from "../common/widgets/SideBar/SideBar";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";
import Pagination from "../common/widgets/Pagination/Pagination";

const Qc = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(50);
  const limit = 10;
  return (
    <div className="flex">
      <SideBar></SideBar>
      <div className="flex-1 ">
        <Navbar name={"QC"}></Navbar>
        <SearchBar></SearchBar>
        <div className="bg-[#FBFBFB]">
          <Filter></Filter>
          <div className="mx-[50px]  rounded-t-md ">
            <div className="overflow-x-auto">
              <table className="table border">
                {/* head */}
                <thead className="bg-[#D9D9D9] text-black border text-center">
                  <tr>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <th>Order ID</th>
                    <th>Create Date</th>
                    <th>Due Date</th>
                    <th>Customer Name</th>
                    <th>Items</th>
                    <th>Count</th>
                    <th>Problem</th>
                    <th>Brand Name</th>
                    <th>QC</th>
                    <th>Status</th>
                    <th className="text-xl">
                      <BsThreeDotsVertical />
                    </th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {/* row 1 */}
                  <tr>
                    <th className="border">
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <th className="border">Branch 1</th>
                    <td className="border">Cy Ganderton</td>
                    <td className="border">Quality Control Specialist</td>
                    <td className="border">Blue</td>
                    <th className="border">1</th>
                    <td className="border">Cy Ganderton</td>
                    <td className="border">Quality Control Specialist</td>
                    <td className="border">Quality Control Specialist</td>
                    <td className="border">
                      <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                        <div className="avatar">
                          <div className="w-6">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                          </div>
                        </div>
                        <div className="avatar">
                          <div className="w-6">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                          </div>
                        </div>
                        <div className="avatar">
                          <div className="w-6">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                          </div>
                        </div>
                        <div className="avatar">
                          <div className="w-6">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="border">QC</td>
                    <td className="flex items-center gap-3">
                      <IoMdEye />
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
    </div>
  );
};

export default Qc;

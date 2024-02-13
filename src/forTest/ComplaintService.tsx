import Navbar from "../common/widgets/Navbar/Navbar";
import SideBar from "../common/widgets/SideBar/SideBar";

const ComplaintService = () => {
  return (
    <div className="flex">
      <SideBar></SideBar>
      <div className="flex-1 ">
        <Navbar name={"Complaint's / Service"}></Navbar>
        <div className="mx-[50px] mt-5 py-5 px-5 rounded-t-md bg-[#FBFBFB]">
          <div className="grid grid-cols-4 gap-8">
            {/* Customers Name  */}
            <div>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Customer Name</span>
                </div>
                <input
                  type="text"
                  placeholder="Customer Name"
                  className="input input-bordered w-full max-w-xs rounded-sm"
                />
              </label>
            </div>
            {/* Contact Number  */}
            <div>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Contact Number</span>
                </div>
                <input
                  type="text"
                  placeholder="Contact Number"
                  className="input input-bordered w-full max-w-xs rounded-sm"
                />
              </label>
            </div>
            {/* Email  */}
            <div>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Email</span>
                </div>
                <input
                  type="text"
                  placeholder="Email"
                  className="input input-bordered w-full max-w-xs rounded-sm"
                />
              </label>
            </div>
            {/* Address  */}
            <div>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Address</span>
                </div>
                <input
                  type="text"
                  placeholder="Address"
                  className="input input-bordered w-full max-w-xs rounded-sm"
                />
              </label>
            </div>
            {/* Product / Items Name  */}
            <div>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Product / Items Name</span>
                </div>
                <input
                  type="text"
                  placeholder="Product / Items Name"
                  className="input input-bordered w-full max-w-xs rounded-sm"
                />
              </label>
            </div>
            {/* Brand Name  */}
            <div>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Brand Name</span>
                </div>
                <input
                  type="text"
                  placeholder="Brand Name"
                  className="input input-bordered w-full max-w-xs rounded-sm"
                />
              </label>
            </div>
            {/* Model Number   */}
            <div>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Model Number</span>
                </div>
                <input
                  type="text"
                  placeholder="Model Number"
                  className="input input-bordered w-full max-w-xs rounded-sm"
                />
              </label>
            </div>
            {/* Serial Number  */}
            <div>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Serial Number</span>
                </div>
                <input
                  type="text"
                  placeholder="Serial Number"
                  className="input input-bordered w-full max-w-xs rounded-sm"
                />
              </label>
            </div>
            {/* Warranty Type  */}
            <div>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Warranty Type</span>
                </div>
                <input
                  type="text"
                  placeholder="Warranty Type"
                  className="input input-bordered w-full max-w-xs rounded-sm"
                />
              </label>
            </div>
            {/* Remark  */}
            <div className="col-span-2">
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text">Remark</span>
                </div>
                <input
                  type="text"
                  placeholder="Remark"
                  className="input input-bordered w-full  rounded-sm "
                />
              </label>
            </div>
            {/* Branch Name  */}
            <div>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Branch Name</span>
                </div>
                <input
                  type="text"
                  placeholder="Branch Name"
                  className="input input-bordered w-full max-w-xs rounded-sm"
                />
              </label>
            </div>
            {/* Problem  */}
            <div className="col-span-3">
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text">Problem</span>
                </div>
                <textarea
                  placeholder="Write Problem"
                  className="textarea textarea-bordered"
                />
              </label>
              <div className="flex justify-end py-5">
                <button className="btn btn-ghost rounded-sm h-0 min-h-8 bg-[#D9D9D9]">
                  Add More
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-5 pt-10">
            <div>
              <button className="btn btn-ghost rounded-sm h-0 min-h-8 bg-[#D9D9D9]">
                Cancel
              </button>
            </div>
            <div>
              <button className="btn text-white px-8 btn-ghost rounded-sm h-0 min-h-8 bg-[#0074D9]">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplaintService;

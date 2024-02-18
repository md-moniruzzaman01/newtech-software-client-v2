import "./BranchChart.css";

const BranchChart = () => {
  return (
    <div className="px-[50px] py-4">
      <div className="flex justify-center items-center gap-5 px-3">
        <div className="w-1/2 bg-[#FBFBFB]">
          <div>
            <div className="flex justify-between px-8 pt-5">
              <div className="text-xl font-bold  pb-2 pr-5">
                Product <hr className="border-1 w-28 border-black" />
              </div>
              <div>
                <button className="btn btn-outline min-h-6 h-0 rounded-full">
                  view
                </button>
              </div>
            </div>
            {/* left chart start here  */}
          </div>
        </div>
        <div className="w-1/2 bg-[#F7F7F7] rounded-md">
          <div>
            <div className="flex justify-between px-8 pt-5">
              <div className="text-xl font-bold  pb-2 pr-5">
                Order count <hr className="border-1 w-40 border-black" />
              </div>
              <div>
                <button className="btn btn-outline min-h-6 h-0 rounded-full">
                  view
                </button>
              </div>
            </div>
            {/* right chart start here  */}
            <div className="grid grid-cols-1 gap-4 py-4 ">
              {/* Received  */}
              <div className="flex px-8 justify-between items-center">
                <h3 className="w-36 ">Received</h3>
                <progress
                  id="received"
                  className="h-2  w-56  flex-1"
                  value="70"
                  max="100"
                ></progress>
                <p className="w-28 text-end">70</p>
              </div>

              {/* Pending  */}
              <div className="flex px-8 justify-between items-center">
                <h3 className="w-36 ">Pending</h3>
                <progress
                  id="pending"
                  className=" w-56 h-2 flex-1"
                  value="70"
                  max="100"
                ></progress>
                <p className="w-28 text-end">70</p>
              </div>

              {/* In Progress  */}
              <div className="flex px-8 justify-between items-center">
                <h3 className="w-36 ">In Progress</h3>
                <progress
                  id="inProgress"
                  className=" w-56 h-2 flex-1"
                  value="40"
                  max="100"
                ></progress>
                <p className="w-28 text-end">40</p>
              </div>

              {/* Completed  */}
              <div className="flex px-8 justify-between items-center">
                <h3 className="w-36 ">Completed</h3>
                <progress
                  id="completed"
                  className=" w-56 h-2 flex-1"
                  value="10"
                  max="100"
                ></progress>
                <p className="w-28 text-end">10</p>
              </div>

              {/* Delivered  */}
              <div className="flex px-8 justify-between items-center">
                <h3 className="w-36 ">Delivered</h3>
                <progress
                  id="delivered"
                  className=" w-56 h-2 flex-1"
                  value="100"
                  max="100"
                ></progress>
                <p className="w-28 text-end">100</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BranchChart;

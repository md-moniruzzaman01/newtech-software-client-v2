import { emptyData } from "../../../../../shared/config/constaints";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const QAItemOrderDetailsTable = ({ data }: any) => {
  return (
    <div className="w-full ">
      {/* header row start here  */}
      <div className="grid grid-cols-4 gap-5 text-center">
        <div className="">Order Number</div>
        <div className="">SL Number</div>
        <div className="">Category</div>
        <div className="">Brand</div>
      </div>
      <hr className="border-b border-shadeOfGray my-2" />

      <div className="text-center text-xs">
        {/* second row start here  */}
        <div className="grid grid-cols-4  text-center">
          <div className="border py-2 border-gray-400">
            {data?.repair?.order_number || emptyData}
          </div>
          <div className="border py-2 border-gray-400">
            {data?.serial_number || emptyData}
          </div>
          <div className="border py-2 border-gray-400">
            {data?.repair?.category_name || emptyData}
          </div>
          <div className="border py-2 border-gray-400">
            {data?.repair?.brand_name || emptyData}
          </div>
        </div>

        <hr className="border-b border-shadeOfGray my-2" />

        {/* third row start here  */}
        <div className="grid grid-cols-4  text-center">
          <div className="border-l py-2 border-y border-gray-400  font-medium">
            Status : {data?.status}
          </div>
          <div className="border-y border-r  border-gray-400 "></div>
          <div className="border-y border-l border-gray-400 font-medium py-2 col-span-2 text-center">
            Create Date :{" "}
            {data?.createdAt?.toString().slice(0, 10) || emptyData}
          </div>
        </div>

        <div>
          <hr className="border-b border-shadeOfGray my-2" />
        </div>
        {/* <h1 className="text-start font-medium py-3">Item Image</h1>
        <div className="w-1/2 pb-5">
          <DndProvider backend={HTML5Backend}>
            <PhotoAttach
              droppedImage={droppedImage}
              setDroppedImage={setDroppedImage}
            />
          </DndProvider>
        </div> */}
      </div>
      <div className="absolute bottom-5">QA by : {data?.qa_checker_id?.id}</div>
    </div>
  );
};

export default QAItemOrderDetailsTable;

import PhotoAttach from "../../../../common/components/PhotoAttach/PhotoAttach";

const QAItemOrderDetailsTable = () => {
  return (
    <div className="w-full ">
      {/* header row start here  */}
      <div className="grid grid-cols-4 gap-5 text-center">
        <div className="">SL Number</div>
        <div className="">Items</div>
        <div className="">Problem</div>
        <div className="">Remark</div>
      </div>
      <hr className="border-b border-shadeOfGray my-2" />

      <div className="text-center">
        {/* second row start here  */}
        <div className="grid grid-cols-4  text-center">
          <div className="border py-2 border-gray-400">342323232</div>
          <div className="border py-2 border-gray-400">Monitor</div>
          <div className="border py-2 border-gray-400">No Display</div>
          <div className="border py-2 border-gray-400">Bag</div>
        </div>

        <hr className="border-b border-shadeOfGray my-2" />

        {/* third row start here  */}
        <div className="grid grid-cols-4  text-start">
          <div className="border-l py-2 border-y border-gray-400 col-span-2 pl-[60px] font-medium">
            Status : Testing
          </div>
          <div className="border-y border-l border-gray-400 font-medium py-2 text-center">
            Note : Write
          </div>
          <div className="border-y border-r  border-gray-400 "></div>
        </div>

        <div>
          <hr className="border-b border-shadeOfGray my-2" />
        </div>
        <h1 className="text-start font-medium py-3">Item Image</h1>
        <div className="w-1/2 pb-5">
          <PhotoAttach />
        </div>
      </div>
      <div className="absolute bottom-5">QA by : Johnson doe</div>
    </div>
  );
};

export default QAItemOrderDetailsTable;

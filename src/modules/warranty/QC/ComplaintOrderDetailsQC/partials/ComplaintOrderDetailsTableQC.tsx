import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend"; // or any other backend you prefer
import { useState } from "react";
import PhotoAttach from "../../../../../common/components/PhotoAttach/PhotoAttach";

const ComplaintOrderDetailsTableQC = () => {
  const [droppedImage, setDroppedImage] = useState<string>();
  console.log(droppedImage);
  return (
    <div className="w-full">
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

        {/* fourth row start here  */}
        <div className="grid grid-cols-4  text-start">
          <div className="border-l py-2 border-y border-gray-400 col-span-2 pl-[60px]">
            RMA Number : 145641310311
          </div>
          <div className="border-t border-b border-gray-400"></div>
          <div className="border py-2 border-gray-400 text-center">
            Status : Diagnosis
          </div>
        </div>

        <div>
          <hr className="border-b border-shadeOfGray my-2" />
        </div>
        <h1 className="text-start font-medium py-3">Item Image</h1>
        <div className="w-full pb-5">
          <DndProvider backend={HTML5Backend}>
            <PhotoAttach
              droppedImage={droppedImage}
              setDroppedImage={setDroppedImage}
            />
          </DndProvider>
        </div>
      </div>
      <div className="absolute bottom-3">QC by : Johnson doe</div>
    </div>
  );
};

export default ComplaintOrderDetailsTableQC;

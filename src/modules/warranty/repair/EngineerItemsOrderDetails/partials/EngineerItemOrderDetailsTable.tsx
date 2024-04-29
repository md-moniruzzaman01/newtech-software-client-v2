const EngineerItemOrderDetailsTable = ({ data }) => {

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
          <div className="border py-2 border-gray-400">
            {data?.serial_number}
          </div>
          <div className="border py-2 border-gray-400">
            {data?.repair?.products?.category_name}
          </div>
          <div className="border py-2 border-gray-400">
            {data?.repair?.products?.problems?.toString()}
          </div>
          <div className="border py-2 border-gray-400">
            {" "}
            {data?.repair?.products?.attachments}
          </div>
        </div>

        <hr className="border-b border-shadeOfGray my-2" />

        {/* third row start here  */}
        {/* <div className="grid grid-cols-4  text-start">
          <div className="border-l py-2 border-y border-gray-400 col-span-2 pl-[60px]">
            Consulting
          </div>
          <div className="border-t border-b border-gray-400"></div>
          <div className="border py-2 border-gray-400 text-center">
            Status : Diagnosis
          </div>
        </div>
        <hr className="border-b border-shadeOfGray my-2" /> */}
        {/* fourth row start here  */}
        <div className="grid grid-cols-4  text-start">
          <div className="border-l py-2 border-y border-gray-400 col-span-2 pl-[60px]">
            Materials Replacement: Yes / No
          </div>
          <div className="border-t border-b border-gray-400"></div>
          <div className="border py-2 border-gray-400 text-center">
            Status : Diagnosis
          </div>
        </div>

        <div>
          <hr className="border-b border-shadeOfGray my-2" />
        </div>
      </div>
      {/* <div className="absolute bottom-3">QC by: Johnson Doe</div> */}
    </div>
  );
};

export default EngineerItemOrderDetailsTable;

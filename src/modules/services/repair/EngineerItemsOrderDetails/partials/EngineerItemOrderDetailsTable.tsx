// eslint-disable-next-line @typescript-eslint/no-explicit-any
const EngineerItemOrderDetailsTable = ({ product }: { product: any }) => {
  console.log(product);
  return (
    <div className="w-full">
      {/* header row start here  */}
      <div className="grid grid-cols-6 gap-5 text-center">
        <div className="">SL Number</div>
        <div className="">Model No.</div>
        <div className="">Brand</div>
        <div className="">Problem</div>
        <div className="">Remark</div>
        <div className="">Repair count</div>
      </div>
      <hr className="border-b border-shadeOfGray my-2" />

      <div className="text-center">
        {/* second row start here  */}
        <div className="grid grid-cols-6  text-center">
          <div className="border py-2 border-gray-400">
            {product?.serial_number}
          </div>
          <div className="border py-2 border-gray-400">
            {product?.repair?.products?.model_number}
          </div>
          <div className="border py-2 border-gray-400">
            {product?.repair?.products?.brand_name}
          </div>
          <div className="border py-2 border-gray-400">
            {product?.repair?.products?.problems}
          </div>
          <div className="border py-2 border-gray-400">
            {product?.repair?.products?.attachments}
          </div>
          <div className="border py-2 border-gray-400 underline text-blue-500">
            {product?.repair?.products?.repair_count}
          </div>
        </div>

        <hr className="border-b border-shadeOfGray my-2" />

        {/* fourth row start here  */}
        <div className="grid grid-cols-4  text-start">
          <div className="border-l py-2 border-y border-gray-400 col-span-2 pl-[60px]">
            Materials Replacement: <span> Yes </span>/{" "}
            <span className=" text-green-600"> No</span>
          </div>
          <div className="border-t border-b border-gray-400"></div>
          <div className="border py-2 border-gray-400 text-center">
            Status : N/A
          </div>
        </div>

        <div>
          <hr className="border-b border-shadeOfGray my-2" />
        </div>
      </div>
    </div>
  );
};

export default EngineerItemOrderDetailsTable;

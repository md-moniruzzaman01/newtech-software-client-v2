const ComplaintOrderDetailsTable = () => {
  return (
    <div className="w-full ">
      {/* header row start here  */}
      <div className="grid grid-cols-5 gap-5 text-center">
        <div className="">SL Number</div>
        <div className="">Items</div>
        <div className="">Problem</div>
        <div className="">Remark</div>
        <div className="">Price</div>
      </div>
      <hr className="border-b border-shadeOfGray my-2" />

      <div className="text-center">
        {/* second row start here  */}
        <div className="grid grid-cols-5  text-center">
          <div className="border py-2 border-gray-400">342323232</div>
          <div className="border py-2 border-gray-400">Monitor</div>
          <div className="border py-2 border-gray-400">No Display</div>
          <div className="border py-2 border-gray-400">Bag</div>
          <div className="border py-2 border-gray-400">1000000</div>
        </div>

        <hr className="border-b border-shadeOfGray my-2" />
        {/* third row start here  */}
        <div className="grid grid-cols-5  text-center">
          <div className="border-l py-2 border-y border-gray-400">
            Consulting
          </div>
          <div className="border-t py-2 border-b border-gray-400"></div>
          <div className="border-t py-2 border-b border-gray-400"></div>
          <div className="border-t py-2 border-b border-gray-400"></div>
          <div className="border py-2 border-gray-400">1000000</div>
        </div>

        <hr className="border-b border-shadeOfGray my-2" />
        {/* fourth row start here  */}
        <div className="grid grid-cols-5  text-start">
          <div className="border-l  py-2 border-y border-gray-400 col-span-2 pl-9">
            Materials Replacement: Yes / No
          </div>
          <div className="border-t border-b border-gray-400"></div>
          <div className="border-t border-b border-gray-400"></div>
          <div className="border py-2 border-gray-400 text-center">1000000</div>
        </div>

        <div className="flex justify-end">
          <hr className="border-b border-shadeOfGray my-2 w-1/2" />
        </div>
        {/* calculate area start here  */}
        <div className="grid grid-cols-5  text-center">
          <div></div>
          <div></div>
          <div></div>
          <div className="text-end pr-2 my-1 py-2">
            <h3 className="font-semibold">Subtotal:</h3>
          </div>
          <div className="border py-2 border-gray-400 my-1">1,00,000.00</div>
        </div>
        <div className="grid grid-cols-5  text-center">
          <div></div>
          <div></div>
          <div></div>
          <div className="text-end pr-2  py-2">
            <h3 className="font-semibold">Discount:</h3>
          </div>
          <div className="border py-2 border-gray-400 ">1,00,000.00</div>
        </div>
        <div className="grid grid-cols-5  text-center">
          <div></div>
          <div></div>
          <div></div>
          <div className="text-end pr-2 my-1 py-2">
            <h3 className="font-semibold">Tax:</h3>
          </div>
          <div className="border py-2 border-gray-400 my-1">1,00,000.00</div>
        </div>
        <div className="flex justify-end">
          <hr className="border-b border-shadeOfGray my-2 w-1/2" />
        </div>
        {/* total calculate area  */}
        <div className="grid grid-cols-5  text-center">
          <div></div>
          <div></div>
          <div></div>
          <div className="text-end pr-2 py-2">
            <h3 className="font-semibold">Total:</h3>
          </div>
          <div className="py-2 font-semibold">1,00,000.00</div>
        </div>
      </div>
      <div>Create invoice by : Johnson doe</div>
    </div>
  );
};

export default ComplaintOrderDetailsTable;

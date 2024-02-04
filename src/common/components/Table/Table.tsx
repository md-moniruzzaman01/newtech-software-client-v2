const Table = () => {
  return (

    <>
     <div className="flex justify-center">
      <div className="overflow-x-auto w-full px-[50px]">
        <table className="table text-center  border border-collapse border-gray-800">
          {/* head */}
          <thead className="bg-[#D9D9D9]">
            <tr>
              <th>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-indigo-600"
                  />
                </label>
              </th>
              <th >Order Id</th>
              <th >Create Date</th>
              <th >Due Date</th>
              <th >Customer Name</th>
              <th >Items</th>
              <th >Problem</th>
              <th >Brand Name</th>
              <th >Engineers</th>
              <th >Status</th>
            </tr>
            
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td className="border border-gray-800">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-indigo-600"
                  />
                </label>
              </td>
              <td className="border border-gray-800">1554541</td>
              <td className="border border-gray-800">12/12/2023</td>
              <td className="border border-gray-800">12/12/2023</td>
              <td className="border border-gray-800">John doe</td>
              <th className="border border-gray-800">Monitor</th>
              <th className="border border-gray-800">No display</th>
              <th className="border border-gray-800">Acer</th>
              <th className="border border-gray-800">No Assign</th>
              <th className="border border-gray-800">Progress</th>
            </tr>
            <tr>
              <th className="border border-gray-300">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-indigo-600"
                  />
                </label>
              </th>
              <td className="border border-gray-800">1554541</td>
              <td className="border border-gray-800">12/12/2023</td>
              <td className="border border-gray-800">12/12/2023</td>
              <td className="border border-gray-800">John doe</td>
              <th className="border border-gray-800">Monitor</th>
              <th className="border border-gray-800">No display</th>
              <th className="border border-gray-800">Acer</th>
              <th className="border border-gray-800">No Assign</th>
              <th className="border border-gray-800">Progress</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>


    </>
  );
};

export default Table;

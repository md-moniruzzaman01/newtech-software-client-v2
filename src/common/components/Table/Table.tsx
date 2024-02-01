const Table = () => {
  return (
    <div className="flex justify-center">
      <div className="overflow-x-auto w-full px-[50px]">
        <table className="table text-center">
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
              <th>Order Id</th>
              <th>Create Date</th>
              <th>Due Date</th>
              <th>Customer Name</th>
              <th>Items</th>
              <th>Problem</th>
              <th>Brand Name</th>
              <th>Engineers</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-indigo-600"
                  />
                </label>
              </th>
              <td>1554541</td>
              <td>12/12/2023</td>
              <td>12/12/2023</td>
              <td>John doe</td>
              <th>Monitor</th>
              <th>No display</th>
              <th>Acer</th>
              <th>No Assign</th>
              <th>Progress</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;

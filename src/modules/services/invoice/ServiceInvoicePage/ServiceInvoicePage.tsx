import { useSelector } from "react-redux";
import logoImg from "../../../../assets/NT-LOGO.png";
import { useEffect } from "react";
import { RootState } from "../../../../redux/store";

const ServiceInvoicePage = () => {
  const checkedRows = useSelector((state: RootState) => state.data.checkedRows);

  useEffect(() => {
    console.log(checkedRows);
  }, [checkedRows]);
  console.log(checkedRows);
  return (
    <div className="py-10 w-[900px] mx-auto px-5 flex flex-col justify-between">
      {/* header section  */}
      <div>
        <div className="flex justify-center items-center gap-10 ">
          <div className="w-1/3">
            <img src={logoImg} alt="logo" />
          </div>
          <div className="w-2/3">
            <h1 className="text-5xl font-bold">NewTech</h1>
          </div>
        </div>
        {/* subject here  */}
        <div className="flex justify-between  py-10">
          <div className="font-sans text-base leading-6">
            <div className="mb-1">
              <strong className="font-bold">INVOICE:</strong> #INV202402230001
            </div>
            <div className="mb-1">
              <strong className="font-bold">Invoice Status:</strong> Pending
            </div>
            <div className="mb-1">
              <strong className="font-bold">Payment Status:</strong> Due
            </div>
            <div className="mb-1">
              <strong className="font-bold">Issued:</strong> 2024-02-23
            </div>
            <div className="mb-1">
              <strong className="font-bold">Due date:</strong> 2024-02-24
            </div>
          </div>
          <div>
            <p className="mb-1">FIROZ</p>
            <p className="mb-1">admin@tasktechnology.net</p>
            <p className="mb-1">1256835202</p>
            <p className="mb-1">NEC GROUP</p>
          </div>
        </div>
      </div>

      {/* table here  */}
      <div>
        <div className="mb-4">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-grayForBorder">
                <th className="px-4 py-2">Service Name</th>
                <th className=" px-4 py-2">Service Code</th>
                <th className=" px-4 py-2">Price</th>
                <th className=" px-4 py-2">Tax</th>
                <th className=" px-4 py-2">Discount</th>
                <th className=" px-4 py-2">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className=" px-4 py-2">DOMESTIC ATD</td>
                <td className=" px-4 py-2">1</td>
                <td className=" px-4 py-2">4500.00 BDT</td>
                <td className=" px-4 py-2">0.00 %</td>
                <td className=" px-4 py-2">0.00 %</td>
                <td className=" px-4 py-2">4500.00 BDT</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex justify-end ">
          <div className="font-sans text-base leading-6">
            <div>
              <strong className="font-bold">Sub Total:</strong> 232344{" "}
              <span>BDT</span>
            </div>
            <div>
              <strong className="font-bold">Tax:</strong> 0.00%
            </div>
            <div>
              <strong className="font-bold">Discount:</strong> 0.00%
            </div>
            <div>
              <strong className="font-bold">Total Amount:</strong> 34545{" "}
              <span>BDT</span>
            </div>
          </div>
        </div>
      </div>

      {/* last content  */}
      <div>
        <div className="flex justify-between py-10">
          <div>
            <p className="mb-1">
              <strong>Transaction details:</strong> Midland Bank:
              0011-1050002705
            </p>
            <p className="mb-1">
              <strong>Note:</strong>{" "}
            </p>
            <p className="mb-1">
              <strong>Terms:</strong>{" "}
            </p>
          </div>
          <div>
            <p className="mb-1">
              <strong>Authorized Signature</strong>
            </p>
            <p className="mb-1">MD Feroz Ahmed</p>
            <p className="mb-1">Chief Finance Officer</p>
            <p className="mb-1">Tel No: +8801714339091</p>
          </div>
        </div>

        {/* footer  */}
        <div className="text-center">
          <div className="mb-1">
            <p>
              <strong>Head Office:</strong> House - 77, Road - 7, Block - H,
              Banani, Dhaka - 1213, Bangladesh
            </p>
            <p></p>
          </div>
          <div>
            <p>Tel: +880255742588, E-mail: info@necgroupbd.com,</p>
            <p>
              Web:{" "}
              <a
                className="text-solidBlack hover:underline"
                href="http://www.necgroupbd.com"
              >
                www.necgroupbd.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceInvoicePage;

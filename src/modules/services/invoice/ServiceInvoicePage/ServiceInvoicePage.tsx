/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import logoImg from "../../../../assets/NT-LOGO.png";
import { useGetBillByIdQuery } from "../../../../redux/features/api/service";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";
import { authKey } from "../../../../shared/config/constaints";
import LoadingPage from "../../../../common/components/LoadingPage/LoadingPage";

const ServiceInvoicePage = () => {
  const { id } = useParams();
  const token = getFromLocalStorage(authKey);
  const { data: billData, isLoading } = useGetBillByIdQuery({ id, token });


  if (isLoading) {
    return <LoadingPage />;
  }
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
              <strong className="font-bold">INVOICE: </strong>
              {billData?.data?.id}
            </div>
            <div className="mb-1">
              <strong className="font-bold">Invoice Status: </strong>
              {billData?.data?.status}
            </div>
            <div className="mb-1">
              <strong className="font-bold">Payment Status: </strong>
              {billData?.data?.due > 0 ? "Unpaid" : "Paid"}
            </div>
            <div className="mb-1">
              <strong className="font-bold">Issued: </strong>
              {billData?.data?.createdAt?.toString()?.slice(0, 10)}
            </div>
            <div className="mb-1">
              <strong className="font-bold">Updated date: </strong>
              {billData?.data?.updatedAt?.toString()?.slice(0, 10)}
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
                <th className="px-4 py-2">Order No</th>
                <th className=" px-4 py-2">Serial No</th>
                <th className=" px-4 py-2">Model No</th>
                <th className=" px-4 py-2">Problem</th>
                <th className=" px-4 py-2">Discount</th>
                <th className=" px-4 py-2">Total</th>
              </tr>
            </thead>
            <tbody>
              {billData?.data?.repair?.length > 0 &&
                billData?.data?.repair?.map((item: any, index: number) => (
                  <tr key={index}>
                    <td className=" px-4 py-2">{item?.order_number}</td>
                    <td className=" px-4 py-2">
                      {item?.products?.serial_number}
                    </td>
                    <td className=" px-4 py-2">
                      {item?.products?.model_number}
                    </td>
                    <td className=" px-4 py-2">
                      {item?.products?.problems?.toString()}
                    </td>
                    <td className=" px-4 py-2">0.00 %</td>
                    <td className=" px-4 py-2">{item?.total_charge}</td>
                  </tr>
                ))}
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

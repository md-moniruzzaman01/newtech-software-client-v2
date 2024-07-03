/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import logoImg from "../../../../assets/NT-LOGO.png";
import { useGetBillByIdQuery } from "../../../../redux/features/api/service";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";
import { authKey } from "../../../../shared/config/constaints";
import LoadingPage from "../../../../common/components/LoadingPage/LoadingPage";
import { getUserInfo } from "../../../../services/auth.service";
import {
  useGetAdminQuery,
  useGetUserQuery,
} from "../../../../redux/features/api/users";
import { useRef } from "react";
import ReactToPrint from "react-to-print";
import Button from "../../../../common/components/Button";

const ServiceInvoicePage = () => {
  const invoice = useRef(null);
  const { id } = useParams();
  const token = getFromLocalStorage(authKey);
  const { data: billData, isLoading: billDataLoading } = useGetBillByIdQuery({
    id,
    token,
  });

  const { userId } = getUserInfo();
  const { data: fullUserInfo, isLoading: userIsLoading } = useGetUserQuery({
    token,
    userId,
  });
  const { data: adminUser, isLoading: adminIsLoading } = useGetAdminQuery({
    userId,
    token,
  });

  if (userIsLoading || billDataLoading || adminIsLoading) {
    return <LoadingPage />;
  }
  return (
    <div>
      <div
        ref={invoice}
        className="py-10 w-[900px] mx-auto px-5 flex flex-col justify-between"
      >
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
          <div className="flex justify-between gap-5  py-10">
            <div className="font-sans text-base leading-6 w-1/2 ">
              <div className="mb-1">
                <strong>INVOICE: </strong>
                {billData?.data?.id}
              </div>
              <div className="mb-1">
                <strong>Invoice Status: </strong>
                {billData?.data?.status}
              </div>
              <div className="mb-1">
                <strong>Payment Status: </strong>
                {billData?.data?.due > 0 ? "Unpaid" : "Paid"}
              </div>
              <div className="mb-1">
                <strong>Issued: </strong>
                {billData?.data?.createdAt?.toString()?.slice(0, 10)}
              </div>
              <div className="mb-1">
                <strong>Updated date: </strong>
                {billData?.data?.updatedAt?.toString()?.slice(0, 10)}
              </div>
            </div>
            <div className="space-y-1  ">
              <p>
                <strong>Customer: </strong>
                {billData?.data?.customer?.name}
              </p>
              <p>
                <strong>
                  Brand
                  {billData?.data?.customer?.brand_name?.length > 0 ? "s" : ""}:
                </strong>{" "}
                {billData?.data?.customer?.brand_name?.join(", ")}
              </p>
              <p>
                <strong>Contact: </strong>
                {billData?.data?.customer?.contact_number}
              </p>
              <p>
                <strong>Address: </strong>
                {billData?.data?.customer?.address}
              </p>
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
                  {/* <th className=" px-4 py-2">Discount</th> */}
                  <th className=" px-4 py-2">Total</th>
                </tr>
              </thead>
              <tbody className="text-center">
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
                      {/* <td className=" px-4 py-2">0.00 %</td> */}
                      <td className=" px-4 py-2">{item?.total_charge}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-end ">
            <div className="font-sans text-base leading-6">
              <div>
                <strong>Total Paid:</strong> {billData?.data?.total_paid}
                <span> BDT</span>
              </div>
              <div>
                <strong>Due:</strong> {billData?.data?.due}
              </div>
              {/* <div>
              <strong >Discount:</strong> 0.00%
            </div> */}
              <div>
                <strong>Total Amount:</strong> {billData?.data?.total_amount}
                <span> BDT</span>
              </div>
            </div>
          </div>
        </div>

        {/* last content  */}
        <div>
          <div className="flex justify-between py-10">
            {/* <div>
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
          </div> */}
            <div>
              <p className="mb-1">
                <strong>Authorized Signature</strong>
              </p>
              <p className="mb-1">
                {adminUser?.data
                  ? adminUser?.data?.name?.firstName +
                    " " +
                    adminUser?.data?.name?.lastName
                  : fullUserInfo?.data &&
                    fullUserInfo?.data?.name?.firstName +
                      " " +
                      fullUserInfo?.data?.name?.lastName}
              </p>
              <p className="mb-1">
                {adminUser?.data
                  ? adminUser?.data?.designation
                  : fullUserInfo?.data && fullUserInfo?.data?.designation}
              </p>
              <p className="mb-1">
                Tel No:{" "}
                {adminUser?.data
                  ? adminUser?.data?.contactNo
                  : fullUserInfo?.data && fullUserInfo?.data?.contactNo}
              </p>
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
      <ReactToPrint
        content={() => invoice.current}
        trigger={() => (
          <div className="absolute top-10 right-10">
            <Button primary>Print</Button>
          </div>
        )}
      />
    </div>
  );
};

export default ServiceInvoicePage;

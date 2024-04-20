import { useParams } from "react-router-dom";

const ComplaintsServicePaymentsInvoice = () => {
  const { id } = useParams();
  console.log(id);
  return <div>hello</div>;
};

export default ComplaintsServicePaymentsInvoice;

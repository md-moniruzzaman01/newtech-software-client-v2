import { useParams } from "react-router-dom";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";
import { authKey } from "../../../../shared/config/constaints";
import { useGetEngineerDetailsByIdQuery } from "../../../../redux/features/api/engineers";

const EngineerDetailsPage = () => {
  const { id } = useParams();
  const token = getFromLocalStorage(authKey);
  const { data } = useGetEngineerDetailsByIdQuery({ id, token });
  console.log(data);
  return <div>hello world</div>;
};

export default EngineerDetailsPage;

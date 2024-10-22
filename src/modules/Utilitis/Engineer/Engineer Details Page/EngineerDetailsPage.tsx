import { useParams } from "react-router-dom";
import { getFromLocalStorage } from "../../../../shared/helpers/local_storage";
import { authKey } from "../../../../shared/config/constaints";
import { useGetEngineerDetailsByIdQuery } from "../../../../redux/features/api/engineers";
import UserInfo from "./partials/UserInfo";
import LoadingPage from "../../../../common/components/LoadingPage/LoadingPage";
import ErrorShow from "../../../../common/components/Error Show/ErrorShow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const EngineerDetailsPage = () => {
  const { id } = useParams();
  const token = getFromLocalStorage(authKey);
  const { data, isLoading, isError, error } = useGetEngineerDetailsByIdQuery({
    id,
    token,
  });
  console.log(data?.data);
  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError) {
    return <ErrorShow error={error} />;
  }
  return (
    <section className="p-5">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold flex items-center">
          <FontAwesomeIcon icon={faUser} className="mr-2 text-blue-500" />
          Employee's Summary
        </h1>
      </header>
      <div>
        <div>
          <UserInfo data={data} />
        </div>
      </div>
    </section>
  );
};

export default EngineerDetailsPage;

import InputFilter from "../../../../../common/components/InputFilter/InputFilter";
import TextArea from "../../../../../common/components/TextArea/TextArea";
import Button from "../../../../../common/components/Button";
import { RepairStatus } from "../config/constants";
import swal from "sweetalert";
import { authKey } from "../../../../../shared/config/constaints";
import { getFromLocalStorage } from "../../../../../shared/helpers/local_storage";
import { useNavigate, useParams } from "react-router-dom";
import LoadingPage from "../../../../../common/components/LoadingPage/LoadingPage";
import ErrorShow from "../../../../../common/components/Error Show/ErrorShow";
import { useUpdateStatusQAMutation } from "../../../../../redux/features/api/qa";

const QAItemOrderStatus = () => {
  // const [droppedImage, setDroppedImage] = useState<string>();
  const token = getFromLocalStorage(authKey);
  const { id } = useParams();
  const navigate = useNavigate();
  const [updateStatusQA, { isLoading, isError, isSuccess, error }] =
    useUpdateStatusQAMutation();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const status = (form.elements.namedItem("status") as HTMLInputElement)
      .value;
    const note = (form.elements.namedItem("note") as HTMLInputElement).value;

    const fullData = {
      status,
      note,
      qa_image: [],
    };
    const result = await updateStatusQA({ id, fullData, token });
    if (isLoading) {
      return <LoadingPage />;
    }
    if (isError || "error" in result) {
      swal("Something went wrong!", {
        icon: "error",
      });
      return <ErrorShow error={error} />;
    }
    if (isSuccess || "success" in result) {
      swal("Your data has been successfully Updated.", {
        icon: "success",
      });
      navigate("/service-qa-my-library");
      form.reset();
    }
  };

  return (
    <div className="space-y-2">
      <form onSubmit={handleSubmit}>
        <InputFilter
          placeholder="Select Status"
          label="QA Status :"
          Filter={RepairStatus}
          inputName="status"
        />

        <TextArea name="note" label="Note" placeholder="write your note" />
        <Button loading={isLoading} primary>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default QAItemOrderStatus;

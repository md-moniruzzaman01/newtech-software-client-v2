/* eslint-disable @typescript-eslint/no-explicit-any */
import InputFilter from "../../../../../common/components/InputFilter/InputFilter";
import TextArea from "../../../../../common/components/TextArea/TextArea";
import Button from "../../../../../common/components/Button";
import { RepairStatus } from "../config/constants";
import { authKey } from "../../../../../shared/config/constaints";
import { getFromLocalStorage } from "../../../../../shared/helpers/local_storage";
import { useUpdateStatusQAMutation } from "../../../../../redux/features/api/qa";
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";

const QAItemOrderStatus = () => {
  // const [droppedImage, setDroppedImage] = useState<string>();
  const token = getFromLocalStorage(authKey);
  const { id } = useParams();
  const navigate = useNavigate();
  const [updateStatusQA, { isLoading }] = useUpdateStatusQAMutation();

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
    const result: any = await updateStatusQA({ id, fullData, token });

    if (result?.data?.success) {
      swal("Success", `${result?.data?.message}`, "success");
      navigate("/qa-my-library");
      form.reset();
    } else {
      swal("Error", `${result?.error?.data?.message}`, "error");
    }

    form.reset();
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

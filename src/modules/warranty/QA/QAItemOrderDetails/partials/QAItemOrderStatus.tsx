/* eslint-disable @typescript-eslint/no-explicit-any */
import InputFilter from "../../../../../common/components/InputFilter/InputFilter";
import TextArea from "../../../../../common/components/TextArea/TextArea";
import Button from "../../../../../common/components/Button";
import { orderStatus } from "../config/constants";
import { getFromLocalStorage } from "../../../../../shared/helpers/local_storage";
import { authKey } from "../../../../../shared/config/constaints";
import { useNavigate, useParams } from "react-router-dom";
import { useUpdateStatusQAMutation } from "../../../../../redux/features/api/qa";
import { showSwal } from "../../../../../shared/helpers/SwalShower";

const QAItemOrderStatus = () => {
  // const [droppedImage, setDroppedImage] = useState<string>();
  const token = getFromLocalStorage(authKey);
  const { id } = useParams();
  const navigate = useNavigate();
  const [updateStatusQA, { isLoading }] = useUpdateStatusQAMutation();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget; // Use currentTarget for the form element
    const status = (form.elements.namedItem("status") as HTMLInputElement)
      .value;
    const note = (form.elements.namedItem("note") as HTMLInputElement).value;

    const fullData = {
      status,
      note,
      qa_image: [],
    };

    const result: any = await updateStatusQA({ id, fullData, token });
    const isSwalTrue = showSwal(result);
    if (isSwalTrue) {
      navigate("/qa-my-library");
      form.reset();
    }
  };

  return (
    <div className="space-y-2">
      <form onSubmit={handleSubmit}>
        <InputFilter
          placeholder="Select Status"
          label="QA Status :"
          Filter={orderStatus}
          inputName="status"
        />

        {/* <div>
        <h1 className="font-medium">Upload Item Image :</h1>
        <DndProvider backend={HTML5Backend}>
          <PhotoAttach
            droppedImage={droppedImage}
            setDroppedImage={setDroppedImage}
          />
        </DndProvider>
      </div> */}
        <TextArea name="note" label="Note" placeholder="write your note" />
        <Button loading={isLoading} primary>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default QAItemOrderStatus;

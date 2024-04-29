import InputFilter from "../../../../../common/components/InputFilter/InputFilter";
import TextArea from "../../../../../common/components/TextArea/TextArea";
import Button from "../../../../../common/components/Button";
import { orderStatus } from "../config/constants";

const QAItemOrderStatus = () => {
  // const [droppedImage, setDroppedImage] = useState<string>();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget; // Use currentTarget for the form element
    const status = (form.elements.namedItem("status") as HTMLInputElement)
      .value;
    const note = (form.elements.namedItem("note") as HTMLInputElement).value;
    form.reset();
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
        <Button primary>Submit</Button>
      </form>
    </div>
  );
};

export default QAItemOrderStatus;

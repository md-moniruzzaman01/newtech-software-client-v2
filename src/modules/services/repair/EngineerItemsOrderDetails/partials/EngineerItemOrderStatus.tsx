import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../../../common/components/Button";
import InputFilter from "../../../../../common/components/InputFilter/InputFilter";
import TextArea from "../../../../../common/components/TextArea/TextArea";
import { engineerStatus } from "../config/constants";
import { getFromLocalStorage } from "../../../../../shared/helpers/local_storage";
import { authKey } from "../../../../../shared/config/constaints";
import { useUpdateRepairStatusMutation } from "../../../../../redux/features/api/engineers";
import swal from "sweetalert";

const EngineerItemOrderStatus = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [updateRepair] = useUpdateRepairStatusMutation();
  const token = getFromLocalStorage(authKey);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const status = (form.elements.namedItem("status") as HTMLInputElement)
      .value;
    const note = (form.elements.namedItem("note") as HTMLInputElement).value;
    const fullData = {
      status,
      note,
    };

    const result = await updateRepair({ id, fullData, token });

    if ("data" in result) {
      swal("Your data has been successfully Updated.", {
        icon: "success",
      });
      navigate("/service/engineer-my-library");
      form.reset();
    } else if ("error" in result) {
      swal("Something went wrong!", {
        icon: "error",
      });
    }
  };

  return (
    <div className="space-y-2">
      <form onSubmit={handleSubmit}>
        <InputFilter
          placeholder="Select Status"
          label="Engineer status :"
          Filter={engineerStatus}
          inputName="status"
        />
        {/* <InputFilter
        placeholder="No Replacement"
        label="Material status :"
        Filter={replacement}
      /> */}

        <TextArea label="Note" name="note" placeholder="write your note" />
        <Button primary>Submit</Button>
      </form>
    </div>
  );
};

export default EngineerItemOrderStatus;

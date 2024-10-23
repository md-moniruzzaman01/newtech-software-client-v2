import { useNavigate } from "react-router-dom";
import { getFromLocalStorage } from "../../../../../../shared/helpers/local_storage";
import { authKey } from "../../../../../../shared/config/constaints";
import { useCreatePartsRequestMutation } from "../../../../../../redux/features/api/parts";
import { shedAndSplit } from "../../../../../../shared/helpers/removeShedAndSplit";
import ErrorShow from "../../../../../../common/components/Error Show/ErrorShow";
import Input from "../../../../../../common/components/Input";
import Button from "../../../../../../common/components/Button";
import { showSwal } from "../../../../../../shared/helpers/SwalShower";

const Calibration = () => {
  const token = getFromLocalStorage(authKey);
  const [createPartsRequest, { isLoading, isError, error }] =
    useCreatePartsRequestMutation();
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const motherboardName = (
      form.elements.namedItem("motherboardName") as HTMLInputElement
    ).value;
    const partsName = (form.elements.namedItem("partsName") as HTMLInputElement)
      .value;
    const parts = shedAndSplit(partsName);

    const fullData = { motherboardName, parts };

    const result = await createPartsRequest({ fullData, token });
    const swalIsTrue = showSwal(result);
    if (swalIsTrue) {
      navigate("/engineer-my-library");
      form.reset();
    }
  };

  if (isError) {
    return <ErrorShow error={error} />;
  }

  return (
    <div className="pt-2">
      <form onSubmit={handleSubmit} className="space-y-2">
        <Input
          inputName="motherboardName"
          labelName="Motherboard Name"
          required
        />
        <Input inputName="partsName" labelName="Parts Name" required />
        <Button loading={isLoading} primary>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Calibration;

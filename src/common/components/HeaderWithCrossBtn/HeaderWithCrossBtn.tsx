import { icons } from "../../../shared/libs/Icons";
import Button from "../Button";
import { HeaderWithCrossBtnProps } from "./type";

const HeaderWithCrossBtn: React.FC<HeaderWithCrossBtnProps> = ({ name }) => {
  const previous = () => {
    window.history.back();
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="font-medium text-2xl">{name}</h1>
        <Button onClick={previous} transparent>
          {icons.cross}
        </Button>
      </div>
      <hr className="border-b bg-borderColor mt-3" />
    </div>
  );
};

export default HeaderWithCrossBtn;

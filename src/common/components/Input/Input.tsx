interface InputProps {
  labelName?: string;
  inputPlaceholder?: string;
  inputType?: string;
  inputName?: string;
  IsDisabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  labelName,
  inputPlaceholder,
  inputType = "text",
  inputName,
  IsDisabled = false,
}) => {
  return (
    <div>
      <div>
        <div className="form-control w-full space-y-1">
          <div className="label">
            <label className="text-lg font-semibold">{labelName}</label>
          </div>
          <input
            name={inputName}
            type={inputType}
            disabled={IsDisabled}
            placeholder={inputPlaceholder}
            className="border-2 w-full rounded-sm  py-2 pl-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Input;

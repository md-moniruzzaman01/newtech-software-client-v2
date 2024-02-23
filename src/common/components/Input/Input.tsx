interface InputProps {
  labelName?: string;
  inputPlaceholder?: string;
  inputType?: string;
  inputName?: string;
}

const Input: React.FC<InputProps> = ({
  labelName,
  inputPlaceholder,
  inputType = "text",
  inputName,
}) => {
  return (
    <div>
      <div>
        <label className="form-control w-full ">
          <div className="label">
            <span className="text-lg font-semibold">{labelName}</span>
          </div>
          <input
            name={inputName}
            type={inputType}
            placeholder={inputPlaceholder}
            className="border-2 w-full rounded-sm  py-2 pl-2"
          />
        </label>
      </div>
    </div>
  );
};

export default Input;

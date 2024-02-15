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
            <span className="label-text">{labelName}</span>
          </div>
          <input
            name={inputName}
            type={inputType}
            placeholder={inputPlaceholder}
            className="input input-bordered w-full  rounded-sm"
          />
        </label>
      </div>
    </div>
  );
};

export default Input;

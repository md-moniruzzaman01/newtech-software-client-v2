interface InputProps {
  labelName?: string;
  inputPlaceholder?: string;
  inputType?: string;
  inputName?: string;
  IsDisabled?: boolean;
  defaultValue?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void | undefined;
}

const Input: React.FC<InputProps> = ({
  labelName,
  inputPlaceholder = "Write here...",
  inputType = "text",
  inputName,
  IsDisabled = false,
  defaultValue,
  required = false,
  value,
  onChange,
}) => {
  return (
    <div>
      <div>
        <div className={`form-control w-full ${labelName && "space-y-1"}`}>
          <div className="label">
            <label className="text-lg font-semibold">{labelName}</label>
          </div>
          <input
            value={value}
            required={required}
            onChange={onChange} // Added onChange event handler
            name={inputName}
            type={inputType}
            disabled={IsDisabled}
            placeholder={inputPlaceholder}
            defaultValue={defaultValue}
            className="border-2 w-full rounded-sm  py-2 pl-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Input;

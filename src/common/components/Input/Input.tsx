/* eslint-disable @typescript-eslint/no-explicit-any */
interface InputProps {
  labelName?: string;
  className?: string;
  inputPlaceholder?: string;
  inputType?: string;
  inputName?: string;
  IsDisabled?: boolean;
  defaultValue?: string | number;
  required?: boolean;
  value?: string;
  onChange?: any;
  minValue?: number | string;
}

const Input: React.FC<InputProps> = ({
  labelName,
  className,
  inputPlaceholder = "Write here...",
  inputType = "text",
  inputName,
  IsDisabled = false,
  defaultValue = "",
  required = false,
  minValue,
  // value,
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
            min={minValue}
            required={required}
            onChange={onChange} // Added onChange event handler
            name={inputName}
            type={inputType}
            disabled={IsDisabled}
            placeholder={inputPlaceholder}
            defaultValue={defaultValue}
            className={`${className} border-2 w-full rounded-sm  py-2 pl-2`}
            step={`${inputType === "number" && "any"}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Input;

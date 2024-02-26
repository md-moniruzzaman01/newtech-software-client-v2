interface textAreaProps {
  label?: string;
  placeholder?: string;
  name?: string;
  IsDisabled?: boolean;
}

const TextArea: React.FC<textAreaProps> = ({
  label,
  placeholder,
  name,
  IsDisabled = false,
}) => {
  return (
    <div>
      <label className=" w-full ">
        <div>
          <span className="text-lg font-semibold">{label}</span>
        </div>
        <textarea
          disabled={IsDisabled}
          name={name}
          placeholder={placeholder}
          className=" border-2 mt-2   w-full pl-2 pt-2"
        />
      </label>
    </div>
  );
};

export default TextArea;

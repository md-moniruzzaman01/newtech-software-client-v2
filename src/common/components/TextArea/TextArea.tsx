interface textAreaProps {
  label?: string;
  placeholder?: string;
  name?: string;
}

const TextArea: React.FC<textAreaProps> = ({ label, placeholder, name }) => {
  return (
    <div>
      <label className=" w-full ">
        <div>
          <span className="text-lg font-semibold">{label}</span>
        </div>
        <textarea
          name={name}
          placeholder={placeholder}
          className=" border-2 mt-2   w-full pl-2 pt-2"
        />
      </label>
    </div>
  );
};

export default TextArea;

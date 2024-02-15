interface textAreaProps {
  label?: string;
  placeholder?: string;
  name?: string;
}

const TextArea: React.FC<textAreaProps> = ({ label, placeholder, name }) => {
  return (
    <div>
      <label className="form-control w-full ">
        <div className="label">
          <span className="label-text">{label}</span>
        </div>
        <textarea
          name={name}
          placeholder={placeholder}
          className="textarea textarea-bordered"
        />
      </label>
    </div>
  );
};

export default TextArea;

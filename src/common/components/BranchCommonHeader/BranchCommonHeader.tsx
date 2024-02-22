import InputFilter from "../InputFilter/InputFilter";

interface BranchCommonHeaderProps {
  title?: string;
  selectItems: { label: string; value: string }[];
}

const BranchCommonHeader: React.FC<BranchCommonHeaderProps> = ({
  title,
  selectItems,
}) => {
  return (
    <div className="flex justify-between items-center mt-8 pb-5">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <div className="flex items-center justify-center gap-5">
        <InputFilter Filter={selectItems}></InputFilter>
      </div>
    </div>
  );
};

export default BranchCommonHeader;

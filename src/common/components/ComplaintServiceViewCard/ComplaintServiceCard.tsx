interface ComplaintServiceCardProps {
  title?: string;
  details?: string;
  styleCol?: string;
}

const ComplaintServiceCard: React.FC<ComplaintServiceCardProps> = ({
  title = "",
  details = "",
  styleCol = "",
}) => {
  return (
    <div className={`bg-[#ededed] p-5 rounded-sm ${styleCol} space-y-1`}>
      <h4>{title}</h4>
      <h3 className="font-semibold">{details}</h3>
    </div>
  );
};

export default ComplaintServiceCard;

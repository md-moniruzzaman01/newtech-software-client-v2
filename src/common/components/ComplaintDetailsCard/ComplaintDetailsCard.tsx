interface complaintDetailsCardProps {
  headerTitle?: string;
  title1?: string;
  title2?: string;
  title3?: string;
  details1?: string;
  details2?: string;
  details3?: string;
}

const ComplaintDetailsCard: React.FC<complaintDetailsCardProps> = ({
  headerTitle,
  title1,
  title2,
  title3,
  details1,
  details2,
  details3,
}) => {
  return (
    <div className="bg-[#D9D9D9] px-14 space-y-5 py-5 rounded-sm">
      <h1 className="text-xl font-semibold">{headerTitle}</h1>
      <div className="flex justify-between ">
        <div className="font-medium space-y-2">
          <h4>{title1}</h4>
          <h4>{title2}</h4>
          <h4>{title3}</h4>
        </div>
        <div className="space-y-2">
          <p>{details1}</p>
          <p>{details2}</p>
          <p>{details3}</p>
        </div>
      </div>
    </div>
  );
};

export default ComplaintDetailsCard;

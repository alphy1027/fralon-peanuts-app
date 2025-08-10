type SummaryProps = {
  label: string;
  amount: number;
  bold?: boolean;
};

const SummaryItem = ({ label, amount, bold }: SummaryProps) => {
  return (
    <div className={`${bold ? "text-heading-5 font-bold" : "text-body text-body-default"} flex items-center justify-between`}>
      <p>{label}</p>
      <p>Ksh {amount}</p>
    </div>
  );
};

export default SummaryItem;

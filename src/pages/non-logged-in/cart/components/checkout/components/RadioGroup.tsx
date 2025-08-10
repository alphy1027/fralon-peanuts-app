import { PaymentMethod } from "./CheckoutForm";

type RadioOption = {
  value: PaymentMethod;
  label: string;
};

type RadioProps = {
  items: RadioOption[];
  name: string;
  value: string | null;
  onChange: (value: PaymentMethod) => void;
};

const RadioGroup = ({ items, name, value, onChange }: RadioProps) => {
  return (
    <>
      {items.map((item) => (
        <label
          key={item.value}
          htmlFor={item.value}
          className={`${value === item.value ? "border-primary border-2" : "border-outline border"} flex cursor-pointer items-center gap-x-4 rounded-md px-4 py-4`}
        >
          <input
            type="radio"
            name={name}
            id={item.value}
            value={item.value}
            onChange={(e) => onChange(e.target.value as PaymentMethod)}
            checked={value === item.value}
            className="accent-primary scale-125"
          />
          <span className="font-semibold">{item.label}</span>
        </label>
      ))}
    </>
  );
};

export default RadioGroup;

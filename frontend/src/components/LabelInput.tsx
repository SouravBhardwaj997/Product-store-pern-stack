import { ShoppingBag, type LucideIcon } from "lucide-react";

const LabelInput = ({
  data,
}: {
  data: { label: string; placeholder: string; icon: LucideIcon };
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="" className="text-lg font-semibold ms-2">
        {data.label}
      </label>
      <div className="input w-full">
        {data.icon && <data.icon />}
        <input type="search" required placeholder={data.placeholder} />
      </div>
    </div>
  );
};

export default LabelInput;

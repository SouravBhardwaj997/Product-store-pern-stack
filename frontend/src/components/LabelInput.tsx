import { type LucideIcon } from "lucide-react";

const LabelInput = ({
  data,
  formData,
  setForm,
}: {
  data: {
    label: string;
    placeholder: string;
    icon: LucideIcon;
    type: string;

    name: "name" | "image" | "price";
  };
  formData: { name: string; image: string; price: number };
  setForm: (formData: { name: string; image: string; price: number }) => void;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="" className="text-lg font-semibold ms-2">
        {data.label}
      </label>
      <div className="input w-full">
        {data.icon && <data.icon />}
        <input
          type={data.type}
          required
          placeholder={data.placeholder}
          value={formData[data.name]}
          onChange={(e) => {
            setForm({
              ...formData,
              [data.name]: e.target.value,
            });
          }}
        />
      </div>
    </div>
  );
};

export default LabelInput;

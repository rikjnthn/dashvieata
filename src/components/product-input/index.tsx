import { useId } from "react";

const ProductInput = ({ label }: ProductInputType) => {
  const id = useId();

  return (
    <div className="flex w-full flex-col px-2.5 py-2.5">
      <label className="px-4 py-1 font-medium" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        className="border-grey-200-50 w-full rounded-md border px-4 py-2.5 text-sm outline-0"
        type="text"
        placeholder={label}
      />
    </div>
  );
};

export default ProductInput;

interface ProductInputType {
  label: string;
}

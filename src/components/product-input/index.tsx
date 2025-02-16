import { useId } from "react";

import { useSetting } from "../../context/setting-context";

const ProductInput = ({ label }: ProductInputPropsType) => {
  const id = useId();

  const { fontSize } = useSetting();

  return (
    <div className="flex w-full flex-col px-2.5 py-2.5 dark:text-white">
      <label
        className="px-4 py-1 font-medium"
        htmlFor={id}
        style={{
          fontSize: fontSize.bigger,
          lineHeight: "1.56",
        }}
      >
        {label}
      </label>
      <input
        id={id}
        className="border-grey-200/50 placeholder:text-grey-400 w-full rounded-md border px-4 py-2.5 outline-0 dark:text-white"
        type="text"
        placeholder={label}
        style={{
          fontSize: fontSize.normal,
          lineHeight: "1.56",
        }}
      />
    </div>
  );
};

export default ProductInput;

interface ProductInputPropsType {
  label: string;
}

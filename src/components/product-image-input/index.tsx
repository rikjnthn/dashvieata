import { useEffect, useId, useRef } from "react";

import { useSetting } from "../../context/setting-context";

const ProductImageInput = () => {
  const id = useId();

  const imgRef = useRef<HTMLImageElement>(null);
  const { fontSize } = useSetting();

  useEffect(() => {
    const imgEl = imgRef.current;
    imgEl?.classList.add("hidden");
    return () => {
      URL.revokeObjectURL(imgEl?.src ?? "");
    };
  }, []);

  return (
    <div className="bg-grey-100 product-image-input rounded-md">
      <label
        htmlFor={id}
        className="grid w-full place-items-center text-white opacity-0 select-none hover:bg-black/50 hover:opacity-100"
        style={{
          fontSize: fontSize.bigger,
          lineHeight: "1.56",
        }}
      >
        Add image
      </label>
      <img
        className="hidden"
        ref={imgRef}
        src="#"
        alt="Product image"
        style={{
          fontSize: fontSize.normal,
          lineHeight: "1.56",
        }}
      />
      <input
        onInput={(e) => {
          const file = e.currentTarget.files?.[0];

          if (!file) return;
          if (!imgRef.current) return;

          imgRef.current.src = URL.createObjectURL(file);
          imgRef.current.classList.remove("hidden");
        }}
        id={id}
        type="file"
        accept="image/*"
        style={{ display: "none" }}
      />
    </div>
  );
};

export default ProductImageInput;

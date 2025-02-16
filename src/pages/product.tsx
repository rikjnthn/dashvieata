import ProductDetail from "../components/product-detail";
import { useSetting } from "../context/setting-context";

function Product() {
  const { fontSize } = useSetting();

  return (
    <div className="flex py-4">
      <div className="w-2/3 max-w-100 self-start">
        <img
          className="max-h-100 w-full rounded-md object-contain"
          src="/nice-t-shirt.jpg"
          alt="Nice T-shirt"
          style={{
            fontSize: fontSize.biggest,
            lineHeight: "1.56",
          }}
        />
      </div>

      <ProductDetail />
    </div>
  );
}

export default Product;

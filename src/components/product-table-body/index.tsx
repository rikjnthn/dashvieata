import { useSetting } from "../../context/setting-context";
import ProductTableRow from "../product-table-row";

const ProductTableBody = () => {
  const { fontSize } = useSetting();

  return (
    <tbody
      className="product-table-body dark:text-white"
      style={{
        fontSize: fontSize.normal,
        lineHeight: "1.56",
      }}
    >
      <ProductTableRow
        number="1"
        imageSrc="/nice-t-shirt.jpg"
        imageAlt="Nice T-shirt"
        price="20.00"
        productId="uxjyebgrf"
        productName="Nice T-shirt"
        stock="10"
      />
    </tbody>
  );
};

export default ProductTableBody;

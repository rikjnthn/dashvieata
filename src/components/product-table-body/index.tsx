import { useSetting } from "../../context/setting-context";
import ProductTableRow from "../product-table-row";

const products = [
  {
    imageSrc: new URL("/nice-t-shirt.jpg", import.meta.url).href,
    imageAlt: "Nice T-shirt",
    price: "20.00",
    productId: "uxjyebgrf",
    productName: "Nice T-shirt",
    stock: "10",
  },
];

const ProductTableBody = ({ search }: ProductTableBodyPropsType) => {
  const { fontSize } = useSetting();

  return (
    <tbody
      className="product-table-body dark:text-white"
      style={{
        fontSize: fontSize.normal,
        lineHeight: "1.56",
      }}
    >
      {products
        .filter((product) => {
          const normalizeSearch = search.toLowerCase();

          return (
            product.productId.toLowerCase().startsWith(normalizeSearch) ||
            product.productName.toLowerCase().startsWith(normalizeSearch)
          );
        })
        .map((product, idx) => {
          return (
            <ProductTableRow
              key={product.productId}
              number={`${idx + 1}`}
              {...product}
            />
          );
        })}
    </tbody>
  );
};

export default ProductTableBody;

interface ProductTableBodyPropsType {
  search: string;
}

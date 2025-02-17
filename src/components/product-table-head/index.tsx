import { useSetting } from "../../context/setting-context";

const ProductTableHead = () => {
  const { fontSize } = useSetting();

  return (
    <thead
      className="product-table-head dark:text-white"
      style={{
        fontSize: fontSize.bigger,
        lineHeight: "1.56",
      }}
    >
      <tr>
        <th scope="col">No.</th>
        <th scope="col">Image</th>
        <th scope="col">Product Id</th>
        <th scope="col">Name</th>
        <th scope="col">Price</th>
        <th scope="col">Stock</th>
      </tr>
    </thead>
  );
};

export default ProductTableHead;

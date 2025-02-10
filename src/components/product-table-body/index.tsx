import ProductTableRow from "../product-table-row";

const ProductTableBody = () => {
  return (
    <tbody className="product-table-body">
      <ProductTableRow
        number="1"
        imageSrc=""
        imageAlt=""
        price="20.00"
        productId="product id 1"
        productName="Nice T-shirt"
        stock="10"
      />
    </tbody>
  );
};

export default ProductTableBody;

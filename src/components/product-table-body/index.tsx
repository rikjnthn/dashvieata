import ProductTableRow from "../product-table-row";

const ProductTableBody = () => {
  return (
    <tbody className="product-table-body">
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

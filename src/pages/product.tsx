import ProductDetail from "../components/product-detail";

function Product() {
  return (
    <div className="flex py-4">
      <div className="w-2/3 max-w-100 self-start">
        <img
          className="max-h-100 w-full object-contain"
          src="/nice-t-shirt.jpg"
          alt="Nice T-shirt"
        />
      </div>

      <ProductDetail />
    </div>
  );
}

export default Product;

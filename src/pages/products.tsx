import ProductTableBody from "../components/product-table-body";
import ProductTableHead from "../components/product-table-head";

function Products() {
  return (
    <div className="products-page">
      <table className="flex w-full flex-col gap-2.5 overflow-auto p-2.5">
        <ProductTableHead />
        <ProductTableBody />
      </table>
    </div>
  );
}

export default Products;

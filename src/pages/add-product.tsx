import ProductImageInput from "../components/product-image-input";
import ProductInput from "../components/product-input";

function AddProduct() {
  return (
    <div className="flex h-full gap-2.5 pt-4">
      <form className="flex w-full">
        <ProductImageInput />

        <div className="flex w-full flex-col px-4">
          <div className="flex flex-col gap-2.5">
            <ProductInput label="Product Name" />
            <ProductInput label="Product Description" />
            <ProductInput label="Product Price" />
            <ProductInput label="Product Stock" />
          </div>

          <button
            className="active:bg-dark-cyan-600 mx-2.5 mt-10 ml-auto rounded-md bg-blue-300 p-4 text-white hover:bg-blue-200"
            type="submit"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;

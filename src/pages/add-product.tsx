import { Link } from "react-router";
import BackIcon from "../components/back-icon";
import NotificationOverlay from "../components/notification-overlay";
import ProductImageInput from "../components/product-image-input";
import ProductInput from "../components/product-input";
import { useSetting } from "../context/setting-context";
import HeaderNav from "../components/header-nav";

function AddProduct() {
  const { fontSize } = useSetting();

  return (
    <div className="dark:bg-grey-900 flex w-full min-w-0 flex-col gap-2.5 px-4 py-12">
      <HeaderNav>
        <Link to="/products">
          <BackIcon />
        </Link>
        <NotificationOverlay />
      </HeaderNav>

      <div className="flex h-full gap-2.5 pt-4">
        <form onSubmit={(e) => e.preventDefault()} className="flex w-full">
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
              style={{
                fontSize: fontSize.bigger,
                lineHeight: "1.56",
              }}
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;

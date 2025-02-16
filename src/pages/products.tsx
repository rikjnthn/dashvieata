import HeaderNav from "../components/header-nav";
import NotificationOverlay from "../components/notification-overlay";
import PlusIcon from "../components/plus-icon";
import ProductTableBody from "../components/product-table-body";
import ProductTableHead from "../components/product-table-head";

function Products() {
  return (
    <div className="dark:bg-grey-900 flex w-full min-w-0 flex-col gap-2.5 px-4 py-12">
      <HeaderNav>
        <div className="ml-auto flex items-center">
          <PlusIcon />
          <NotificationOverlay />
        </div>
      </HeaderNav>

      <div className="products-page">
        <table className="flex w-full flex-col gap-2.5 overflow-auto p-2.5">
          <ProductTableHead />
          <ProductTableBody />
        </table>
      </div>
    </div>
  );
}

export default Products;

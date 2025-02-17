import { useState } from "react";

import HeaderNav from "../components/header-nav";
import NotificationOverlay from "../components/notification-overlay";
import PlusIcon from "../components/plus-icon";
import ProductTableBody from "../components/product-table-body";
import ProductTableHead from "../components/product-table-head";
import SearchBar from "../components/search-bar";

function Products() {
  const [search, setSearch] = useState<string>("");

  return (
    <div className="dark:bg-grey-900 flex w-full min-w-0 flex-col gap-2.5 px-4 py-12">
      <HeaderNav>
        <SearchBar setSearch={setSearch} />

        <div className="ml-auto flex items-center">
          <PlusIcon />
          <NotificationOverlay />
        </div>
      </HeaderNav>

      <div className="products-page">
        <table className="flex w-full flex-col gap-2.5 overflow-auto p-2.5">
          <ProductTableHead />
          <ProductTableBody search={search} />
        </table>
      </div>
    </div>
  );
}

export default Products;

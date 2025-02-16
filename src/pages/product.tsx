import { Link } from "react-router";
import BackIcon from "../components/back-icon";
import NotificationOverlay from "../components/notification-overlay";
import ProductDetail from "../components/product-detail";
import { useSetting } from "../context/setting-context";
import HeaderNav from "../components/header-nav";

function Product() {
  const { fontSize } = useSetting();

  return (
    <div className="dark:bg-grey-900 flex w-full min-w-0 flex-col gap-2.5 px-4 py-12">
      <HeaderNav>
        <Link to="/products">
          <BackIcon />
        </Link>
        <NotificationOverlay />
      </HeaderNav>

      <div className="flex py-4">
        <div className="w-2/3 max-w-100 self-start">
          <img
            className="max-h-100 w-full rounded-md object-contain"
            src="/nice-t-shirt.jpg"
            alt="Nice T-shirt"
            style={{
              fontSize: fontSize.biggest,
              lineHeight: "1.56",
            }}
          />
        </div>

        <ProductDetail />
      </div>
    </div>
  );
}

export default Product;

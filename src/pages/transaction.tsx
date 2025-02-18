import { Link, useParams } from "react-router";

import { transactions } from "../data/transactions";
import InformationSection from "../components/information-section";
import BackIcon from "../components/back-icon";
import NotificationOverlay from "../components/notification-overlay";
import HeaderNav from "../components/header-nav";
import NotFound from "./not-found";

function Transaction() {
  const id = useParams().id;

  if (!id) return;

  const transaction = transactions.find((v) => v.id === id);

  if (!transaction) return <NotFound />;

  return (
    <div className="dark:bg-grey-900 flex w-full min-w-0 flex-col gap-2.5 px-4 py-12">
      <HeaderNav>
        <Link to="/transactions">
          <BackIcon />
        </Link>
        <NotificationOverlay />
      </HeaderNav>

      <div className="flex max-md:flex-col">
        <div className="flex w-full">
          <div className="w-full">
            <InformationSection
              label="Transaction Id"
              message={transaction.id}
            />
            <InformationSection label="Status" message={transaction.status} />
            <InformationSection
              label="Product Name"
              message={transaction.productName}
            />
            <InformationSection
              label="Product Id"
              message={transaction.productId}
            />
            <InformationSection
              label="Buyer Name"
              message={transaction.buyerName}
            />
          </div>
        </div>

        <div className="w-full">
          <InformationSection
            label="Product Price"
            message={"$ " + transaction.productPrice}
          />
          <InformationSection
            label="Product Quantity"
            message={transaction.quantity}
          />
          <InformationSection
            label="Total Price"
            message={
              "$ " +
              (
                parseInt(transaction.productPrice) *
                parseInt(transaction.quantity)
              ).toFixed(2)
            }
          />
          <InformationSection label="Shipping Cost" message={"$ 10.00"} />
          <InformationSection
            label="Total Price + Shipping Cost"
            message={"$ " + transaction.totalPrice}
          />
        </div>
      </div>
    </div>
  );
}

export default Transaction;

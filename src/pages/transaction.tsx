import { useParams } from "react-router";

import { transactions } from "../data/transactions";
import InformationSection from "../components/information-section";

function Transaction() {
  const id = useParams().id;

  if (!id) return;

  const transaction = transactions.find((v) => v.id === id);

  if (!transaction) return;

  return (
    <div className="flex w-full">
      <div className="w-full">
        <InformationSection label="Transaction Id" message={transaction.id} />
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
  );
}

export default Transaction;

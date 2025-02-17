import { useSetting } from "../../context/setting-context";

const TransactionsTableHead = () => {
  const { fontSize } = useSetting();

  return (
    <thead
      className="transaction-table-head dark:text-white"
      style={{
        fontSize: fontSize.bigger,
        lineHeight: "1.56",
      }}
    >
      <tr>
        <th>No.</th>
        <th>Transaction Id</th>
        <th>Buyer Name</th>
        <th>Product Name</th>
        <th>Quantity</th>
        <th>Total Price</th>
        <th>Status</th>
      </tr>
    </thead>
  );
};

export default TransactionsTableHead;

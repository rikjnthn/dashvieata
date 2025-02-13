const TransactionsTableHead = () => {
  return (
    <thead className="transaction-table-head">
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

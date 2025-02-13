import TransactionTableRow from "../transaction-table-row";

const TransactionsTableBody = () => {
  return (
    <tbody className="transaction-table-body cursor-pointer">
      <TransactionTableRow
        no="1"
        id="irufhabsd"
        buyerName="James"
        productName="Nice T-shirt"
        quantity="1"
        totalPrice="30.00"
        status="Payment"
      />
      <TransactionTableRow
        no="2"
        id="ituchdbfg"
        buyerName="Amanda"
        productName="Nice T-shirt"
        quantity="2"
        totalPrice="50.00"
        status="Payment"
      />
      <TransactionTableRow
        no="3"
        id="fleovkdjg"
        buyerName="Jessica"
        productName="Nice T-shirt"
        quantity="4"
        totalPrice="90.00"
        status="Payment"
      />
    </tbody>
  );
};

export default TransactionsTableBody;

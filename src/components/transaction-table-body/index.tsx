import { transactions } from "../../data/transactions";
import TransactionTableRow from "../transaction-table-row";

const TransactionsTableBody = () => {
  return (
    <tbody className="transaction-table-body cursor-pointer">
      {transactions.map((data, idx) => (
        <TransactionTableRow no={`${idx + 1}`} {...data} />
      ))}
    </tbody>
  );
};

export default TransactionsTableBody;

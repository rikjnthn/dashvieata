import { useSetting } from "../../context/setting-context";
import { transactions } from "../../data/transactions";
import TransactionTableRow from "../transaction-table-row";

const TransactionsTableBody = () => {
  const { fontSize } = useSetting();

  return (
    <tbody
      className="transaction-table-body cursor-pointer dark:text-white"
      style={{
        fontSize: fontSize.normal,
        lineHeight: "1.56",
      }}
    >
      {transactions.map((data, idx) => (
        <TransactionTableRow no={`${idx + 1}`} {...data} />
      ))}
    </tbody>
  );
};

export default TransactionsTableBody;

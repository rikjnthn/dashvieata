import { useSetting } from "../../context/setting-context";
import { transactions } from "../../data/transactions";
import { TransactionStatusType } from "../../interface";
import TransactionTableRow from "../transaction-table-row";

const TransactionsTableBody = ({
  status,
  search,
}: TransactionsTableBodyPropsType) => {
  const { fontSize } = useSetting();

  return (
    <tbody
      className="transaction-table-body cursor-pointer dark:text-white"
      style={{
        fontSize: fontSize.normal,
        lineHeight: "1.56",
      }}
    >
      {transactions
        .filter((transaction) => {
          if (status === "All") return true;
          return transaction.status === status;
        })
        .filter((transaction) => {
          if (!search) return true;

          const normalizeSearch = search.toLocaleLowerCase();

          return (
            transaction.id.toLocaleLowerCase().startsWith(normalizeSearch) ||
            transaction.buyerName
              .toLocaleLowerCase()
              .startsWith(normalizeSearch) ||
            transaction.productName
              .toLocaleLowerCase()
              .startsWith(normalizeSearch)
          );
        })
        .map((data, idx) => (
          <TransactionTableRow key={data.id} no={`${idx + 1}`} {...data} />
        ))}
    </tbody>
  );
};

export default TransactionsTableBody;

interface TransactionsTableBodyPropsType {
  status: TransactionStatusType;
  search?: string;
}

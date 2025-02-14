import TransactionsTableBody from "../components/transaction-table-body";
import TransactionsTableHead from "../components/transaction-table-head";

function TransactionsPage() {
  return (
    <div className="flex h-full flex-col p-2.5 pt-5">
      <table className="flex h-full w-full flex-col gap-2.5 overflow-auto">
        <TransactionsTableHead />
        <TransactionsTableBody />
      </table>
    </div>
  );
}

export default TransactionsPage;

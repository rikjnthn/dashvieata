import { useNavigate } from "react-router";
import clsx from "clsx";

import GotoIcon from "../go-to-icon";
import TransactionsTableHead from "../transaction-table-head";
import TransactionsTableBody from "../transaction-table-body";

const Transactions = () => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/transactions")}
      className={clsx(
        "border-grey-200-50 flex h-full max-h-full flex-col border p-2.5",
      )}
    >
      <div className="flex items-center justify-between px-1.5 py-2.5">
        <div className="text-lg font-medium">Transactions</div>
        <GotoIcon />
      </div>

      <div className="flex h-full w-full p-2.5">
        <table className="flex w-full flex-col gap-2.5 overflow-x-auto">
          <TransactionsTableHead />
          <TransactionsTableBody />
        </table>
      </div>
    </div>
  );
};

export default Transactions;

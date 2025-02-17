import { useState } from "react";

import { TransactionStatusType } from "../interface";
import { STATUS } from "../constant/setting";

function getDefaultTransactionStatus(): TransactionStatusType {
  if (typeof localStorage === "undefined") return "All";

  const status = localStorage.getItem(
    "transaction-status",
  ) as TransactionStatusType;

  if (!status) return "All";
  if (!STATUS.includes(status)) return "All";

  return status;
}

export default function useTransactionStatus() {
  const [transactionStatus, s] = useState<TransactionStatusType>(
    getDefaultTransactionStatus,
  );

  const setTransactionStatus = (option: TransactionStatusType) => {
    s(option);

    if (typeof localStorage === "undefined") return;

    localStorage.setItem("transaction-status", option);
  };

  return { transactionStatus, setTransactionStatus };
}

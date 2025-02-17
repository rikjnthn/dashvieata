import { useNavigate } from "react-router";

const TransactionTableRow = ({
  buyerName,
  id,
  no,
  productName,
  quantity,
  status,
  totalPrice,
}: TransactionsTableRowPropsType) => {
  const navigate = useNavigate();

  return (
    <tr
      onClick={(e) => {
        navigate("/transaction/" + id);
        e.stopPropagation();
      }}
      className="transaction-table-body-row"
    >
      <td>{no}</td>
      <td>{id}</td>
      <td>{buyerName}</td>
      <td>{productName}</td>
      <td>{quantity}</td>
      <td>$ {totalPrice}</td>
      <td>{status}</td>
    </tr>
  );
};

export default TransactionTableRow;

interface TransactionsTableRowPropsType {
  no: string;
  id: string;
  buyerName: string;
  productName: string;
  quantity: string;
  totalPrice: string;
  status: "Payment" | "Shipping" | "Arrived";
}

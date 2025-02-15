import { useNavigate } from "react-router";

const ProductTableRow = ({
  imageSrc,
  number,
  imageAlt,
  price,
  productId,
  productName,
  stock,
}: ProductTableRowPropsType) => {
  const navigate = useNavigate();

  return (
    <tr
      onClick={() => navigate("/product/" + productId)}
      className="product-table-body-row cursor-pointer"
    >
      <td>{number}</td>
      <td className="py-4">
        <img
          className="h-18.75 w-18.75 rounded-md object-cover"
          src={imageSrc}
          alt={imageAlt}
        />
      </td>
      <td>{productId}</td>
      <td>{productName}</td>
      <td>$ {price}</td>
      <td>{stock}</td>
    </tr>
  );
};

export default ProductTableRow;

interface ProductTableRowPropsType {
  number: string;
  imageSrc: string;
  imageAlt: string;
  productId: string;
  productName: string;
  price: string;
  stock: string;
}

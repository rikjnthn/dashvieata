import { useNavigate } from "react-router";

const PlusIcon = () => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate("/add-product")} title="Add product">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.1421 10.1421V30.1421M10.1421 20.1421H30.1421"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default PlusIcon;

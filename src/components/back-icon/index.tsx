import { useLocation, useNavigate } from "react-router";

import { useSetting } from "../../context/setting-context";

const BackIcon = () => {
  const navigate = useNavigate();
  const pathname = useLocation().pathname;
  const { colorScheme } = useSetting();

  const pathnameSplit = pathname.split("/");

  return (
    <div
      onClick={() => {
        if (pathname === "/add-product" || pathnameSplit[1] === "product")
          navigate("/products");
        else if (pathnameSplit[1] === "transaction") navigate("/transactions");
      }}
      className="hover:bg-grey-200/50 rounded-full"
      title="Back"
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.29289 19.2929C8.90237 19.6834 8.90237 20.3166 9.29289 20.7071L15.6569 27.0711C16.0474 27.4616 16.6805 27.4616 17.0711 27.0711C17.4616 26.6805 17.4616 26.0474 17.0711 25.6569L11.4142 20L17.0711 14.3431C17.4616 13.9526 17.4616 13.3195 17.0711 12.9289C16.6805 12.5384 16.0474 12.5384 15.6569 12.9289L9.29289 19.2929ZM30 21C30.5523 21 31 20.5523 31 20C31 19.4477 30.5523 19 30 19V21ZM10 21L30 21V19L10 19V21Z"
          fill={colorScheme === "Dark" ? "#ffffff" : "#000000"}
        />
      </svg>
    </div>
  );
};

export default BackIcon;

import logo from "../../assets/logo.svg";
import DashboardIcon from "../dashboard-icon";
import SettingIcon from "../setting-icon";
import NavOption from "../nav-option";
import TransactionIcon from "../transaction-icon";
import ProductIcon from "../product-icon";
import ChatIcon from "../chat-icon";
import { useSetting } from "../../context/setting-context";

const Navigation = () => {
  const { fontSize } = useSetting();

  return (
    <div className="border-grey-200/50 dark:bg-grey-900 dark:border-grey-400/50 flex h-full min-w-80 flex-col gap-2.5 border-r p-9">
      <div>
        <img
          title="DashVieata"
          src={logo}
          alt="DashVieata"
          style={{ fontSize: fontSize.normal, lineHeight: "1.56" }}
        />
      </div>

      <nav className="h-full py-2.5">
        <NavOption to={"/"} label="Dashboard" icon={<DashboardIcon />} />
        <NavOption to={"/products"} label="Products" icon={<ProductIcon />} />
        <NavOption
          to={"/transactions"}
          label="Transactions"
          icon={<TransactionIcon />}
        />
        <NavOption to={"/messages"} label="Messages" icon={<ChatIcon />} />
        <NavOption to={"/settings"} label="Setting" icon={<SettingIcon />} />
      </nav>

      <div className="text-grey-400 text-xs dark:text-white">
        &#169; 2025 all right reserved
      </div>
    </div>
  );
};

export default Navigation;

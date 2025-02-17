import clsx from "clsx";

import logo from "../../assets/logo.svg";
import DashboardIcon from "../dashboard-icon";
import SettingIcon from "../setting-icon";
import NavOption from "../nav-option";
import TransactionIcon from "../transaction-icon";
import ProductIcon from "../product-icon";
import ChatIcon from "../chat-icon";
import { useSetting } from "../../context/setting-context";
import { SetStateType } from "../../interface";
import CloseIcon from "../close-icon";

const Navigation = ({
  isHamburgerOpen,
  setIsHamburgerOpen,
}: NavigationPropsType) => {
  const { fontSize } = useSetting();

  return (
    <>
      <div
        className={clsx(
          "border-grey-200/50 nav-transition-slide dark:bg-grey-900 dark:border-grey-400/50 z-30 flex h-full min-w-80 flex-col gap-2.5 border-r bg-white p-9 pt-12.75 max-xl:absolute",
          { "max-xl:-translate-x-full": !isHamburgerOpen },
        )}
      >
        <div className="flex items-center justify-between">
          <img
            title="DashVieata"
            src={logo}
            alt="DashVieata"
            style={{ fontSize: fontSize.normal, lineHeight: "1.56" }}
          />

          <div
            onClick={() => {
              setIsHamburgerOpen(false);
            }}
            className="stroke-black xl:hidden dark:stroke-white"
          >
            <CloseIcon title="Close" />
          </div>
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

      <div
        onClick={() => setIsHamburgerOpen(false)}
        className={clsx("absolute top-0 left-0 z-20 h-full w-full xl:hidden", {
          hidden: !isHamburgerOpen,
        })}
      />
    </>
  );
};

export default Navigation;

interface NavigationPropsType {
  isHamburgerOpen: boolean;
  setIsHamburgerOpen: SetStateType<boolean>;
}

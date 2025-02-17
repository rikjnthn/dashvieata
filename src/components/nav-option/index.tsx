import React from "react";
import { NavLink, To } from "react-router";
import clsx from "clsx";

import { useSetting } from "../../context/setting-context";

const NavOption = ({ icon, label, to }: NavOptionPropsType) => {
  const { fontSize } = useSetting();

  return (
    <NavLink
      className={({ isActive }) =>
        clsx(
          "nav-transition-fade flex w-full items-center gap-2.5 rounded-md py-2.5 pr-2.5 font-medium hover:bg-blue-200 hover:stroke-white hover:text-white active:bg-blue-800 dark:stroke-white dark:text-white",
          isActive
            ? "stroke-black text-black"
            : "text-grey-300 stroke-grey-300",
        )
      }
      to={to}
      style={{
        fontSize: fontSize.bigger,
        lineHeight: "1.56",
      }}
    >
      <div>{icon}</div>
      <span>{label}</span>
    </NavLink>
  );
};

export default NavOption;

interface NavOptionPropsType {
  label: string;
  to: To;
  icon: React.ReactElement;
}

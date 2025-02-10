import React from "react";
import { NavLink, To } from "react-router";
import clsx from "clsx";

const NavOption = ({ icon, label, to }: NavOptionType) => {
  return (
    <NavLink
      className={({ isActive }) =>
        clsx(
          "nav-transition-fade flex w-full items-center gap-2.5 rounded-md py-2.5 pr-2.5 font-medium hover:bg-blue-200 hover:stroke-white hover:text-white active:bg-blue-800",
          isActive
            ? "stroke-black text-black"
            : "text-grey-300 stroke-grey-300",
        )
      }
      to={to}
    >
      <div>{icon}</div>
      <span>{label}</span>
    </NavLink>
  );
};

export default NavOption;

interface NavOptionType {
  label: string;
  to: To;
  icon: React.ReactElement;
}

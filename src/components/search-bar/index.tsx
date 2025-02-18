import React from "react";

import { useSetting } from "../../context/setting-context";
import SearchIcon from "../search-icon";
import { SetStateType } from "../../interface";

const SearchBar = ({ setSearch }: SearchBarPropsType) => {
  const { fontSize } = useSetting();

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="inset-ring-grey-200/50 dark:inset-ring-grey-400/50 flex w-full max-w-94.5 rounded-full py-1.25 pr-4 pl-6.5 inset-ring"
    >
      <input
        onInput={(e) => setSearch(e.currentTarget.value)}
        className="input-dynamic-font-size placeholder:text-grey-400 w-full text-black outline-0 dark:text-white"
        placeholder="Search..."
        style={
          {
            fontSize: fontSize.bigger,
            lineHeight: "1.56",
            "--font-size": fontSize.bigger,
          } as React.CSSProperties
        }
      />
      <SearchIcon />
    </form>
  );
};

export default SearchBar;

interface SearchBarPropsType {
  setSearch: SetStateType<string>;
}

import SearchIcon from "../search-icon";

const SearchBar = () => {
  return (
    <form className="inset-ring-grey-200-50 flex max-w-94.5 rounded-full py-1.25 pr-4 pl-6.5 inset-ring">
      <input
        className="text-grey-400 placeholder:text-grey-400 outline-0"
        placeholder="Search..."
      />
      <SearchIcon />
    </form>
  );
};

export default SearchBar;

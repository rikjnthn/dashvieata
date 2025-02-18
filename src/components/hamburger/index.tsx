const Hamburger = ({ onClick }: HamburgerPropsType) => {
  return (
    <div
      onClick={onClick}
      className="hover:bg-grey-200/50 rounded-full"
      title="Hamburger"
    >
      <svg
        className="fill-inherit"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="10" y="11.85" width="20.369" height="2.8" rx="1.4" />
        <rect x="10" y="18.65" width="20.369" height="2.8" rx="1.4" />
        <rect x="10" y="25.45" width="20.369" height="2.8" rx="1.4" />
      </svg>
    </div>
  );
};

export default Hamburger;

interface HamburgerPropsType {
  onClick: React.MouseEventHandler;
}

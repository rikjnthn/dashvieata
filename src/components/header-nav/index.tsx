const HeaderNav = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-17.5 w-full items-center justify-between px-2.5 max-xl:pl-16">
      {children}
    </div>
  );
};

export default HeaderNav;

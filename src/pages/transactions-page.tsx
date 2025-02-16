import HeaderNav from "../components/header-nav";
import NotificationOverlay from "../components/notification-overlay";
import SearchBar from "../components/search-bar";
import SliderOverlay from "../components/slider-overlay";
import TransactionsTableBody from "../components/transaction-table-body";
import TransactionsTableHead from "../components/transaction-table-head";

function TransactionsPage() {
  return (
    <div className="dark:bg-grey-900 flex w-full min-w-0 flex-col gap-2.5 px-4 py-12">
      <HeaderNav>
        <div>
          <SearchBar />
        </div>

        <div className="flex items-center gap-2.5">
          <SliderOverlay />
          <NotificationOverlay />
        </div>
      </HeaderNav>

      <div className="flex h-full flex-col p-2.5 pt-5">
        <table className="flex h-full w-full flex-col gap-2.5 overflow-auto">
          <TransactionsTableHead />
          <TransactionsTableBody />
        </table>
      </div>
    </div>
  );
}

export default TransactionsPage;

import { Expense } from "../../expense/pages/Expense";
import { DashboardHeader } from "../sections/DashboardHeaderSection";
import { DashboardResentTransactionList } from "../sections/DashboardRecentTransactionsList";

export const DashboradPage = () => {
  return (
    <>
      <div className="pb-12 relative">
        <DashboardHeader />
        <DashboardResentTransactionList />
        <Expense />
      </div>
    </>
  );
}

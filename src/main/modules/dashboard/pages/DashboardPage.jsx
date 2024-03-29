import { useState } from "react";
import { DashboardHeader } from "../sections/DashboardHeaderSection";
import { DashboardResentTransactionList } from "../sections/DashboardRecentTransactionsList";
import AddExpense from "../../expense/components/AddExpense";

export const DashboradPage = () => {
  const [isExpensePopUpActive, setIsExpensePopUpActive] = useState(false)

  const togleExpensePopUp = () => {
    setIsExpensePopUpActive(!isExpensePopUpActive)
  }

  return (
    <>
      <div className="pb-12 relative">
        <DashboardHeader handleClick={togleExpensePopUp} />
        <DashboardResentTransactionList />
        <AddExpense handleClick={togleExpensePopUp} isExpensePopUpActive ={ isExpensePopUpActive} />
      </div>
    </>
  );
}

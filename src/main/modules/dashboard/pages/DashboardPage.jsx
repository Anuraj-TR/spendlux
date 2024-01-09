import { useState } from "react";
import { DashboardHeader } from "../sections/DashboardHeaderSection";
import { DashboardResentTransactionList } from "../sections/DashboardRecentTransactionsList";
import ExpensePage from "../../expense/pages/ExpensePage";

export const DashboradPage = () => {
  const [isExpensePopUpActive, setIsExpensePopUpActive] = useState(false)

  const togleExpensePopUp = () => {
    setIsExpensePopUpActive(!isExpensePopUpActive)
    console.log(isExpensePopUpActive);
  }

  return (
    <>
      <div className="pb-12 relative">
        <DashboardHeader handleClick={togleExpensePopUp} />
        <DashboardResentTransactionList />
        <ExpensePage handleClick={togleExpensePopUp} isExpensePopUpActive ={ isExpensePopUpActive} />
      </div>
    </>
  );
}

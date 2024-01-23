import { useState } from "react";
import ExpenseHeader from "../sections/ExpenseHeader";
import ExpenseTileList from "../sections/ExpenseTileList";
import AddExpense from "../components/AddExpense";

const ExpensePage = () => {
  const [isExpensePopUpActive, setIsExpensePopUpActive] = useState(false);

  const togleExpensePopUp = () => {
    setIsExpensePopUpActive(!isExpensePopUpActive);
  };
  return (
    <>
      <ExpenseHeader handleClick={togleExpensePopUp} />
      <ExpenseTileList />
      <AddExpense
        handleClick={togleExpensePopUp}
        isExpensePopUpActive={isExpensePopUpActive}
      />
    </>
  );
}

export default ExpensePage;

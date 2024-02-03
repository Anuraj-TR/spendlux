import { useState } from "react";
import BudgetCard from "../components/BudgetCard";
import BudgetPopUp from "../components/BudgetPopUp";
import BudgetList from "../sections/BudgetList";
import BudgetHeader from "../sections/BudgetHeader";

const BudgetPage = () => {
    const [isBudgetPopUpActive, setIsExpensePopUpActive] = useState(false);

    const togleBudgetPopUp = () => {
      setIsExpensePopUpActive(!isBudgetPopUpActive);
      console.log(isBudgetPopUpActive);
    };

  return (
    <>
      <BudgetCard handleClick={togleBudgetPopUp} />
      <BudgetHeader handleClick={togleBudgetPopUp}/>
      <BudgetList />
      <BudgetPopUp handleClick={togleBudgetPopUp} isBudgetPopUpActive={isBudgetPopUpActive}/>
    </>
  );
}

export default BudgetPage;

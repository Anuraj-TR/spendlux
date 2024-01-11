import { useState } from "react";
import BudgetCard from "../components/BudgetCard";
import BudgetPopUp from "../components/BudgetPopUp";

const BudgetPage = () => {
    const [isBudgetPopUpActive, setIsExpensePopUpActive] = useState(false);

    const togleBudgetPopUp = () => {
      setIsExpensePopUpActive(!isBudgetPopUpActive);
      console.log(isBudgetPopUpActive);
    };

  return (
    <>
      <BudgetCard handleClick={togleBudgetPopUp} />
      <BudgetPopUp handleClick={togleBudgetPopUp} isBudgetPopUpActive={isBudgetPopUpActive}/>
    </>
  );
}

export default BudgetPage;

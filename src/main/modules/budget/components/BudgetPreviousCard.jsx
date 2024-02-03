import { useEffect, useState } from "react";

import moment from "moment";

const BudgetPreviousCard = ({ budget }) => {
  const [saved, setSaved] = useState(false);
  const [month, setMonth] = useState();
  const [savings, setSavings] = useState(0);

  useEffect(() => {
    setMonth(() => moment(budget.fullDate, "DD/MM/YYYY").format("MMMM"));
    setSavings(() => {
      const currentBudget = budget.budget;
      currentBudget > budget.current_spend ? setSaved(true) : setSaved(false)
      return currentBudget - budget.current_spend
    })
  }, [budget])
  
  return (
    <>
      <div
        className={`${
          saved
            ? "bg-primary border-primary text-primary"
            : "bg-orange border-orange text-orange"
        } bg-opacity-15 p-3 rounded-md border border-solid border-opacity-15 w-full mb-4 md:w-[calc(50%-16px)] md:mx-2 lg:w-[calc(33.33%-32px)] lg:mx-4 lg:p-6`}
      >
        <div className="text-sm font-medium text-right capitalize mb-3">
          {month + ' ' + budget.year}
        </div>
        <div className="text-xl font-medium text-center capitalize mb-4">
          <span className="inline-block w-full">{savings}</span>
          <span className="inline-block w-full text-base font-normal">
            saved!
          </span>
        </div>
        <div className="flex items-center justify-between text-base font-medium  text-center capitalize">
          <div className="w-1/2">
            <span className="inline-block w-full">{budget.budget}</span>
            <span className="inline-block w-full text-xs font-normal">
              budget
            </span>
          </div>

          <div className="w-1/2">
            <span className="inline-block w-full">{budget.current_spend}</span>
            <span className="inline-block w-full text-xs font-normal">
              spend
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default BudgetPreviousCard;

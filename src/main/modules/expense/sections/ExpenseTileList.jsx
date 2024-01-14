import { useEffect, useState } from "react";
import { getCollectionData } from "../../../../service/firebase/expense.service";
import { COLLECTIONS } from "../../../firebase";
import ExpenseTileWrap from "../components/ExpenseTileWrap";

const ExpenseTileList = () => {
  const [expense, setExpense] = useState([]);

  useEffect(() => {
    getCollectionData(COLLECTIONS.expense).then((res) => setExpense(res));
  }, []);

  const groupedExpenses = expense.reduce((result, expence) => {
    const date = expence.fullDate;

    if (result[date] == null) result[date] = [];
    result[date].push(expence);

    return result;
  }, {});
  return (
    <>
      {Object.entries(groupedExpenses).map(([date, group]) => {
        return <ExpenseTileWrap key={date} expense={group} />;
      })}
    </>
  );
}

export default ExpenseTileList;

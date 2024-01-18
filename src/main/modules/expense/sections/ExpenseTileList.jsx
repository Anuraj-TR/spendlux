import { useEffect, useState } from "react";
import { queryCollection } from "../../../../service/firebase/expense.service";
import { COLLECTIONS } from "../../../firebase";
import ExpenseTileWrap from "../components/ExpenseTileWrap";
import { useAuth } from "../../../../hooks/useAuth";

const ExpenseTileList = () => {
  const { user } = useAuth();
  const [expense, setExpense] = useState([]);
  const [number, setNumber] = useState(1);
  useEffect(() => {
    queryCollection(COLLECTIONS.expense, user.userId, number, 2023).then(
      (res) => setExpense(res)
    );
  }, [number, user.userId]);

  // grouping expenses
  const groupedExpenses = expense.reduce((result, expence) => {
    const date = expence.fullDate;

    if (result[date] == null) result[date] = [];
    result[date].push(expence);
    return result;
  }, {});

  // directly comparing and creating a sorted array fromm object
  const sortedGroupedExpenceTwo = Object.entries(groupedExpenses).sort((a,b)=>a[0].localeCompare(b[0]))

  return (
    <>
      <div onClick={() => setNumber(number + 1)}>test{number}</div>
      {sortedGroupedExpenceTwo.map(([date, group]) => {
        return <ExpenseTileWrap key={date} expense={group} />;
      })}
    </>
  );
}

export default ExpenseTileList;

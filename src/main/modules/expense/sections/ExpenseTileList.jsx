import { useEffect, useState } from "react";
import { getUserCollectionData } from "../../../../service/firebase/expense.service";
import { COLLECTIONS } from "../../../firebase";
import ExpenseTileWrap from "../components/ExpenseTileWrap";
import { useAuth } from "../../../../hooks/useAuth";

const ExpenseTileList = () => {
  const { user } = useAuth();
  const [expense, setExpense] = useState([]);

  useEffect(() => {
    getUserCollectionData(COLLECTIONS.expense,user.userId).then((res) => setExpense(res));
  }, []);

  const groupedExpenses = expense.reduce((result, expence) => {
    const date = expence.date;

    if (result[date] == null) result[date] = [];
    result[date].push(expence);

    return result;
  }, {});
  return (
    <>
      {Object.entries(groupedExpenses).map(([date, group]) => {
        return <ExpenseTileWrap key={date} date={date} expense={group} />;
      })}
    </>
  );
}

export default ExpenseTileList;

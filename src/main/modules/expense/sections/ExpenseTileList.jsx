import { useEffect, useState } from "react";
import { queryCollection } from "../../../../service/firebase/expense.service";
import { COLLECTIONS } from "../../../firebase";
import ExpenseTileWrap from "../components/ExpenseTileWrap";
import { useAuth } from "../../../../hooks/useAuth";
import MonthSelectorButton from "../components/MonthSelector";

const ExpenseTileList = () => {
  const { user } = useAuth();
  const [expense, setExpense] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [month, setmonth] = useState(new Date(selectedDate))

  useEffect(() => {
    setmonth(selectedDate.getMonth() + 1);
    queryCollection(COLLECTIONS.expense, user.userId, month, selectedDate.getFullYear()).then(
      (res) => setExpense(res)
    );
  }, [month,selectedDate, user.userId]);

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
      <MonthSelectorButton selectedDate={ selectedDate} setSelectedDate={setSelectedDate} />
      {sortedGroupedExpenceTwo.map(([date, group]) => {
        return <ExpenseTileWrap key={date} expense={group} />;
      })}
    </>
  );
}

export default ExpenseTileList;

import { useEffect, useState } from "react";
import TransactionTileWrap from "../components/TransactionTileWrap";
import { getCollectionData } from "../../../../service/firebase/expense.service";
import { COLLECTIONS } from "../../../firebase";

const TransactionTileList = () => {
  const [expense, setExpense] = useState([]);

  useEffect(() => {
    getCollectionData(COLLECTIONS.expense).then(res => setExpense(res))
  },[])
  const groupedExpenses = expense.reduce((result, expence) => {
    const date = expence.date

    if (result[date] == null) result[date] = []
    result[date].push(expence);

    return result
  }, {})
  return (
    <>
      {
        Object.entries(groupedExpenses).map(
          ([date, group]) => {
            return <TransactionTileWrap key={date} date={date} expense={group} />
          }
        )
      }
    </>
  );
}

export default TransactionTileList;

import { useEffect, useState } from "react";
import { getCollectionData } from "../../../../service/firebase/expense.service";
import { COLLECTIONS } from "../../../firebase";
import { DashboardTransactionTile } from "../components/DashboardTransactionTile";

export const DashboardResentTransactionList = () => {
  const [expenses, setExpenses] = useState();
  
  useEffect(() => {
    getCollectionData(COLLECTIONS.expense).then((data) => setExpenses(data));
  },[]);

  return (
    <>
      <section className="md:flex justify-between flex-wrap md:space-x-1">
        {expenses?.map((expence, index) => {
          return <DashboardTransactionTile expense={expence} key={index} />;
        })}
      </section>
    </>
  );
};

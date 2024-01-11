import { useEffect, useState } from "react";
import { getUserCollectionData } from "../../../../service/firebase/expense.service";
import { COLLECTIONS } from "../../../firebase";
import { DashboardTransactionTile } from "../components/DashboardTransactionTile";
import { useAuth } from "../../../../hooks/useAuth";

export const DashboardResentTransactionList = () => {
  const { user } = useAuth();
  const [expenses, setExpenses] = useState();
  
  useEffect(() => {
    getUserCollectionData(COLLECTIONS.expense,user.userId).then((data) =>
      setExpenses(data)
    );
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

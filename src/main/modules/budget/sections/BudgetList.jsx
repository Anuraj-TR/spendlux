import { useEffect, useState } from "react";
import { useAuth } from "../../../../hooks/useAuth";
import { COLLECTIONS } from "../../../firebase";
import { getUserCollectionData } from "../../../../service/firebase/expense.service";
import BudgetPreviousCard from "../components/BudgetPreviousCard";

const BudgetList = () => {
  const [budgets, setBudgets] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    getUserCollectionData(COLLECTIONS.budget, user.userId).then((data) =>
      setBudgets(data)
    );
  }, [user.userId]);

  return (
    <>
      <section className="flex items-center justify-start flex-wrap md:-mx-2 py-6">
        {budgets?.length > 0 ? (
          budgets?.map((budget, index) => {
            return <BudgetPreviousCard key={index} budget={budget} />;
          })
        ) : (
          <div className="px-4 text-lg font-medium text-primary text-center w-full">Nothing Found</div>
        )}
      </section>
    </>
  );
};

export default BudgetList;

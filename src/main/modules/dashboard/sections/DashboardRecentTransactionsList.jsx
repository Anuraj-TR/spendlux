import { DashboardTransactionTile } from "../components/DashboardTransactionTile";
import { expenses } from "../consts";

export const DashboardResentTransactionList = () => {
  return (
    <>
      <div className="md:flex justify-between flex-wrap md:space-x-1">
        {expenses.map((expence, index) => {
          return <DashboardTransactionTile expense={expence} key={index} />;
        })}
      </div>
    </>
  );
};

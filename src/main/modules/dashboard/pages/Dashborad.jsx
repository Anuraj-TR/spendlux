import { Expense } from "../../expense/pages/Expense";
import { DashboardReasentTransaction } from "../components/DashboardReasentTransaction";

export const Dashborad = () => {
  return (
    <>
      <DashboardReasentTransaction />
      <Expense />
    </>
  );
}

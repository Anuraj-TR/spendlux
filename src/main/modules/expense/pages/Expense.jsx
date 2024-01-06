import { SubTitle } from "../../../../styledComponents";
import { ExpenseForm } from "../components/ExpenseForm";

export const Expense = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-start fixed bottom-[50px] left-0 w-full max-w-[500px] md:min-h-[630px] py-4 bg-white transition-all duration-300 ease-in-out md:bottom-0 md:top-1/2 md:left-2/3 md:-translate-x-2/3 md:-translate-y-1/2 md:p-6 md:rounded-2xl lg:left-1/2  lg:-translate-x-1/2 shadow-md shadow-tertiary ">
        <SubTitle className="text-center">Add new Expense</SubTitle>
        <ExpenseForm />
      </div>
    </>
  );
}

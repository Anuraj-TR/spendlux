import { DashbordLink, SubTitle } from "../../../../styledComponents";

const BudgetHeader = ({ handleClick }) => {
  return (
    <>
      <section className="flex items-center justify-between mb-2 sticky top-0 left-0 right-0 w-full bg-white py-4">
        <SubTitle>Previous Budgets</SubTitle>
        <DashbordLink small className="" onClick={handleClick}>
          Add new Budget
        </DashbordLink>
      </section>
    </>
  );
};

export default BudgetHeader;

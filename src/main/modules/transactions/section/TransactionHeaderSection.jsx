import { DashbordLink, SubTitle } from "../../../../styledComponents";

export const TransactionHeaderSection = ({ handleClick }) => {
  return (
    <>
      <section className="flex items-center justify-between mb-2 sticky top-0 left-0 right-0 w-full bg-white py-4">
        <SubTitle>Expense transactions</SubTitle>
        <DashbordLink small className="" onClick={handleClick}>
          Add new Expense
        </DashbordLink>
      </section>
    </>
  );
};

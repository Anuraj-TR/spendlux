import { DashbordLink, SubTitle } from "../../../../styledComponents";

export const DashboardHeader = ({ handleClick }) => {
  return (
    <>
      <section className="flex items-center justify-between mb-4 sticky top-0 left-0 right-0 w-full bg-white py-4">
        <SubTitle>Recent transactions</SubTitle>
        <div className="inline-flex px-2 items-center justify-between">
          <DashbordLink className="mr-2" onClick={handleClick}>
            Add new Expense
          </DashbordLink>
          <DashbordLink>view all</DashbordLink>
        </div>
      </section>
    </>
  );
};

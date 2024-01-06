import { DashbordLink, SubTitle } from "../../../../styledComponents";

export const DashboardHeader = () => {
  return (
    <>
      <section className="flex items-center justify-between mb-4 sticky top-0 left-0 right-0 w-full bg-white py-4">
        <SubTitle>Recent transactions</SubTitle>
        <DashbordLink>view all</DashbordLink>
      </section>
    </>
  );
}

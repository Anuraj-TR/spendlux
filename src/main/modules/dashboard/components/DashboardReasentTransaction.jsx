import { DashbordLink } from "../../../../styledComponents/atom/DashboardLink";
import { SubTitle } from "../../../../styledComponents/atom/Title";
import { ExpenseTile } from "../../expense/components/ExpenseTile";

export const DashboardReasentTransaction = () => {

  const expenses = [
    {
      title: "Mandi",
      amount: 769,
      notes: "birthday treat",
      category: "food",
      time: "2:52",
      id: Date.now(),
    },
    {
      title: "Watch",
      amount: 3000,
      notes: "birthday gift",
      category: "Gift",
      time: "2:52",
      id: Date.now(),
    },
    {
      title: "Mandi",
      amount: 769,
      notes: "birthday treat",
      category: "food",
      time: "2:52",
      id: Date.now(),
    },
    {
      title: "Watch",
      amount: 3000,
      notes: "birthday gift",
      category: "Gift",
      time: "2:52",
      id: Date.now(),
    },
    {
      title: "Mandi",
      amount: 769,
      notes: "birthday treat",
      category: "food",
      time: "2:52",
      id: Date.now(),
    },
    {
      title: "Watch",
      amount: 3000,
      notes: "birthday gift",
      category: "Gift",
      time: "2:52",
      id: Date.now(),
    },
    {
      title: "Mandi",
      amount: 769,
      notes: "birthday treat",
      category: "food",
      time: "2:52",
      id: Date.now(),
    },
    {
      title: "Watch",
      amount: 3000,
      notes: "birthday gift",
      category: "Gift",
      time: "2:52",
      id: Date.now(),
    },
    {
      title: "Mandi",
      amount: 769,
      notes: "birthday treat",
      category: "food",
      time: "2:52",
      id: Date.now(),
    },
    {
      title: "Watch",
      amount: 3000,
      notes: "birthday gift",
      category: "Gift",
      time: "2:52",
      id: Date.now(),
    },
    {
      title: "Mandi",
      amount: 769,
      notes: "birthday treat",
      category: "food",
      time: "2:52",
      id: Date.now(),
    },
    {
      title: "Watch",
      amount: 3000,
      notes: "birthday gift",
      category: "Gift",
      time: "2:52",
      id: Date.now(),
    },
  ];

  return (
    <>
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <SubTitle>Recent transactions</SubTitle>
          <DashbordLink>view all</DashbordLink>
        </div>
        <div className="md:flex justify-between flex-wrap md:space-x-1">
          {expenses.map((expence, index) => {
            return <ExpenseTile expense={expence} key={index} />;
          })}
        </div>
      </div>
    </>
  );
};

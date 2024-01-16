import { useEffect, useState } from "react";
import { useAuth } from "../../../../hooks/useAuth";
import { StyledButton } from "../../../../styledComponents";
import { getUserCollectionData } from "../../../../service/firebase/expense.service";
import { COLLECTIONS } from "../../../firebase";

const BudgetCard = ({ handleClick }) => {
  const { user } = useAuth();
  const [budgetData, setBudgetData] = useState();
  useEffect(() => {
    getUserCollectionData(COLLECTIONS.budget, user.userId).then(data => {
      console.log(data);
      setBudgetData(data);
    })
  },[])
  return (
    <>
      {
        budgetData
          ? 
      <div className="w-full min-h-[300px] bg-primary rounded-lg flex flex-col items-center justify-start p-3 md:flex-row-reverse lg:max-w-[60%]">
        <div className="w-full md:w-2/5 flex items-center justify-center">
          <img
            src="/assets/images/budget.svg"
            alt=""
            className="max-h-[300px]"
          />
        </div>
        <div className="p-2 mt-2 flex-1">
          <div className="w-full capitalize text-center text-2xl lg:text-3xl font-bold text-white mb-2">
            Hi {user.firstName}
          </div>
          <div className="text-center text-base lg:text-lg font-medium text-white">
            Improve your savings by creating a budget and track your progress
          </div>
          <div className="flex mt-3 md:mt-4">
            <StyledButton $white className="m-auto" onClick={handleClick}>
              Add new Budget
            </StyledButton>
          </div>
        </div>
      </div>
          : null
      }
    </>
  );
};

export default BudgetCard;

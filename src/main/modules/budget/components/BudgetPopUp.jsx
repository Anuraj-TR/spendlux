import { IoMdClose } from "react-icons/io";

import { SubTitleWhite } from "../../../../styledComponents";
import BudgetForm from "./BudgetForm";

const BudgetPopUp = ({ handleClick, isBudgetPopUpActive }) => {
  return (
    <>
      <div
        className={`w-screen h-screen bg-tertiary bg-opacity-70 fixed top-0 left-0 z-[999] flex items-center justify-center ${
          isBudgetPopUpActive ? "block" : "hidden"
        }`}
        onClick={(e) =>
          e.target.classList.contains("w-screen") ? handleClick() : ""
        }
      >
        <div className="w-full max-w-[500px] bg-primary h-auto min-h-[500px] rounded-lg p-4">
          <div className="w-full h-autoflex items-end justify-center relative py-2">
            <SubTitleWhite className="text-center capitalize">
              Add New Budget
            </SubTitleWhite>
            <div className="flex flex-col">
              <div className="flex items-center justify-center">
                <img src="/assets/images/budget.svg" alt="" className="max-h-[250px]"/>
              </div>
              <div className="text-lg text-white font-medium text-center">
                Great things start from small! 
              </div>
            </div>
            <div
              className="w-[25px] h-[25px] cursor-pointer flex items-center justify-center absolute right-0 top-0"
              onClick={handleClick}
            >
              <IoMdClose size={25} className="text-white" />
            </div>
          </div>
          <BudgetForm />
        </div>
      </div>
    </>
  );
};

export default BudgetPopUp;

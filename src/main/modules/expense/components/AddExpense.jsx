import { IoMdClose } from "react-icons/io";
import { SubTitleWhite } from "../../../../styledComponents";
import AddExpenseForm from "./AddExpenseForm";

const AddExpense = ({ handleClick, isExpensePopUpActive }) => {
  return (
    <>
      <div
        className={`w-screen h-screen bg-tertiary bg-opacity-70 fixed top-0 left-0 z-[999] flex items-center justify-center ${
          isExpensePopUpActive ? "block" : "hidden"
        }`}
        onClick={(e) =>
          e.target.classList.contains("w-screen") ? handleClick() : null
        }
      >
        <div className="w-full max-w-[500px] bg-primary h-auto min-h-[500px] rounded-lg p-4">
          <div className="w-full h-autoflex items-end justify-center relative py-2">
            <SubTitleWhite className="text-center">
              Add New transaction
            </SubTitleWhite>
            <div
              className="w-[25px] h-[25px] cursor-pointer flex items-center justify-center absolute right-0 top-0"
              onClick={handleClick}
            >
              <IoMdClose size={25} className="text-white" />
            </div>
          </div>
          <AddExpenseForm />
        </div>
      </div>
    </>
  );
};

export default AddExpense;

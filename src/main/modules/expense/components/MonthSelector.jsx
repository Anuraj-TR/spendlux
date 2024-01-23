import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";

const MonthSelectorButton = (props) => {

  const handlePrevMonth = () => {
    props.setSelectedDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() - 1);
      return newDate;
    });
  };

  const handleNextMonth = () => {
    props.setSelectedDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() + 1);
      return newDate;
    });
  };

  return (
    <div className="inline-flex items-center justify-start text-white text-base font-medium mb-4">
      <button
        className="w-8 h-8 flex items-center justify-center  bg-primary rounded-md mx-1"
        onClick={handlePrevMonth}
      >
        <GrCaretPrevious />
      </button>
      <DatePicker
        selected={props.selectedDate}
        onChange={props.setSelectedDate}
        dateFormat="MMMM"
        showMonthYearPicker
        className="w-28 text-center text-primary"
      />
      <button
        className="w-8 h-8 flex items-center justify-center  bg-primary rounded-md mx-1"
        onClick={handleNextMonth}
      >
        <GrCaretNext />
      </button>
    </div>
  );
};

export default MonthSelectorButton;

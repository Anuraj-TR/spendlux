import { Formik, Form } from "formik";
import * as Yup from "yup";
import { GiPiggyBank } from "react-icons/gi";
import { FaRegCalendarXmark } from "react-icons/fa6";

import { FormInputField } from "../../../../components/forms/atom/FormFields";
import { COLLECTIONS } from "../../../firebase";
import { addCollectionData } from "../../../../service/firebase/expense.service";
import { StyledButton } from "../../../../styledComponents";
import { useAuth } from "../../../../hooks/useAuth";

const BudgetForm = () => {
  const { user } = useAuth();
  const setDates = (dateData) => {
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const date = new Date(dateData);
    const currentDate = date.getDate();
    const currentDay = weekday[date.getDay()];
    const currentMonth = parseInt(date.getMonth()) + 1;
    const currentYear = date.getFullYear();

    return {
      currentDate,
      currentDay,
      currentMonth,
      currentYear,
    };
  };
  return (
    <>
      <Formik
        initialValues={{
          budget: "",
        }}
        validationSchema={Yup.object({
          budget: Yup.number().required("Enter a valid number"),
          date: Yup.date().required("Required"),
        })}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          const dates = setDates(values.date);

          addCollectionData(COLLECTIONS.budget, {
            ...values,
            current_spend: 0,
            day: dates.currentDay,
            date: dates.currentDate,
            month: dates.currentMonth,
            year: dates.currentYear,
            fullDate: values.date,
            userId: user.userId,
          });
          resetForm();
          setSubmitting(false);
        }}
      >
        <Form>
          <FormInputField
            label="Budget"
            name="budget"
            id="budget"
            type="text"
            placeholder="Budget"
            icon={<GiPiggyBank />}
          />

          <FormInputField
            label="Target Date"
            name="date"
            id="date"
            type="date"
            placeholder="26-10-2023"
            icon={<FaRegCalendarXmark />}
          />

          <div className="flex">
            <StyledButton $white type="submit" className="mx-auto my-3">
              Submit
            </StyledButton>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default BudgetForm;

import { Formik, Form } from "formik";
import * as Yup from "yup";
import { GiPiggyBank } from "react-icons/gi";
import { FaRegCalendarXmark } from "react-icons/fa6";

import {
  FormFieldDate,
  FormInputField,
} from "../../../../components/forms/atom/FormFields";
import { COLLECTIONS } from "../../../firebase";
import {
  addCollectionData,
  queryCollection,
} from "../../../../service/firebase/expense.service";
import { StyledButton } from "../../../../styledComponents";
import { useAuth } from "../../../../hooks/useAuth";
import { Bounce, ToastContainer, toast } from "react-toastify";

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
          date: new Date(),
        }}
        validationSchema={Yup.object({
          budget: Yup.number().required("Enter a valid number"),
          date: Yup.date()
            .max(new Date(), "please check the date you enterd")
            .required("Required"),
        })}

        onSubmit={(values, { resetForm, setSubmitting }) => {
          const dates = setDates(values.date);

          toast
            .promise(
              () =>
                queryCollection(
                  COLLECTIONS.budget,
                  user.userId,
                  dates.currentMonth,
                  dates.currentYear
                ),
              {
                pending: "Checking Budget",
                error: "Try again 🤯",
              }
            )
            .then((data) => {
              if (data.length > 0) {
                toast.error("Budget Already Exists for this month", {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                  transition: Bounce,
                });
              } else {
                toast
                  .promise(
                    () =>
                      addCollectionData(COLLECTIONS.budget, {
                        ...values,
                        day: dates.currentDay,
                        date: dates.currentDate,
                        month: dates.currentMonth,
                        year: dates.currentYear,
                        userId: user.userId,
                        current_spend: 0,
                        fullDate: values.date.toLocaleDateString(),
                      }),
                    {
                      pending: "Adding New Budget",
                      success: "Budget added 👌",
                      error: "Try again 🤯", 
                    }
                  )
                  .then(() => {
                    resetForm();
                    setSubmitting(false);
                  })
                  .catch((error) => {
                    console.error("Error adding budget:", error);
                    toast.error("Error adding budget. Please try again.");
                    setSubmitting(false);
                  });
              }
            });
        }}
      >
        <Form>
          <FormInputField
            label="Budget"
            name="budget"
            id="budget"
            type="text"
            placeholder="Eg: 20000"
            icon={<GiPiggyBank />}
          />

          <FormFieldDate
            label="Date"
            name="date"
            id="date"
            dateFormat="MMMM yyyy"
            showMonthYearPicker
            icon={<FaRegCalendarXmark />}
          />

          <div className="flex">
            <StyledButton
              $white
              type="submit"
              disabled={Formik.isSubmitting}
              className="mx-auto my-3"
            >
              Submit
            </StyledButton>
          </div>
        </Form>
      </Formik>
      <ToastContainer autoClose={1500} />
    </>
  );
};

export default BudgetForm;

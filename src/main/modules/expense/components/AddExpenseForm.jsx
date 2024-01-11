import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FormInputField, FormSelectField } from "./atom/FormFields";

import { FaMoneyBillWave } from "react-icons/fa6";
import { CgNotes } from "react-icons/cg";
import { LiaPenAltSolid } from "react-icons/lia";
import { FaRegCalendarXmark } from "react-icons/fa6";

import { StyledButton } from "../../../../styledComponents";
import { addCollectionData } from "../../../../service/firebase/expense.service";
import { COLLECTIONS } from "../../../firebase";
import { useAuth } from "../../../../hooks/useAuth";

const AddExpenseFormm = () => {
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
          name: "",
          amount: "",
          notes: "",
          date: "",
          category: "", // added for our select
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          amount: Yup.number().required("Required"),
          date: Yup.date()
            .max(new Date(), 'please check the date you enterd'),
          notes: Yup.string().max(30, "Must be 30 characters or less"),
          category: Yup.string()
            // .oneOf(
            //   ["designer", "development", "product", "other"],
            //   "Invalid Job Type"
            // )
            .required("Required"),
        })}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          const dates = setDates(values.date);

          addCollectionData(COLLECTIONS.expense, {
            ...values,
            day: dates.currentDay,
            date: dates.currentDate,
            month: dates.currentMonth,
            year: dates.currentYear,
            userId: user.userId,
            fullDate: values.date,
          });
          resetForm();
          setSubmitting(false);
        }}
      >
        <Form>
          <FormInputField
            label="Name"
            name="name"
            id="name"
            type="text"
            placeholder="Name"
            icon={<LiaPenAltSolid />}
          />

          <FormInputField
            label="Amount"
            name="amount"
            id="amount"
            type="text"
            placeholder="1000"
            icon={<FaMoneyBillWave />}
          />

          <FormInputField
            label="Date"
            name="date"
            id="date"
            type="date"
            placeholder="26-10-2023"
            icon={<FaRegCalendarXmark />}
          />

          <FormInputField
            label="Notes"
            name="notes"
            id="notes"
            type="text"
            placeholder="Notes"
            icon={<CgNotes />}
          />

          <FormSelectField label="Category" name="category">
            <option value="" hidden>
              Select a category type
            </option>
            <option value="designer" className="text-primary">
              Designer
            </option>
            <option value="development" className="text-primary">
              Developer
            </option>
            <option value="product" className="text-primary">
              Product Manager
            </option>
            <option value="other" className="text-primary">
              Other
            </option>
          </FormSelectField>

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

export default AddExpenseFormm;

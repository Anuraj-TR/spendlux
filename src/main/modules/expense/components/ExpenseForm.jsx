import { FaMoneyBillWave } from "react-icons/fa6";
import { CgNotes } from "react-icons/cg";
import { LiaPenAltSolid } from "react-icons/lia";
import { FaRegCalendarXmark } from "react-icons/fa6";

import * as Yup from "yup";
import { useFormik } from "formik";

import { StyledButton } from "../../../../styledComponents";

export const ExpenseForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      amount: "",
      notes: "",
      date: "",
      category: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .max(30, "must be under 30 characters")
        .required("Required"),
      amount: Yup.number().required("Required"),
      notes: Yup.string().max(50, "must be under 50 characters"),
      date: Yup.date().required("Required"),
      category: Yup.string().required("Required"),
    }),

    onSubmit: () => {

    },
  });

  const options = ["food", "test1", "test2", "test3"];

  return (
    <>
        <form action="" className="p-3 w-full" onSubmit={formik.handleSubmit}>
          <div className="w-full mb-2">
            <label
              htmlFor="name"
              className="text-base font-medium inline-block mb-2"
            >
              name
            </label>
            <div className="flex items-center overflow-hidden justify-center  border border-solid border-grey rounded-md px-3">
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="inline-block flex-1 outline-none border-none py-2 mr-2"
              />
              <div className="w-[25px] h-[25px] flex items-center justify-center text-grey">
                <LiaPenAltSolid />
              </div>
            </div>
            {formik.touched.name && formik.errors.name ? (
              <p className="text-orange pt-1 text-sm">{formik.errors.name}</p>
            ) : null}
          </div>

          <div className="w-full mb-2">
            <label
              htmlFor="amount"
              className="text-base font-medium inline-block mb-2"
            >
              Amount
            </label>
            <div className="flex items-center overflow-hidden justify-center  border border-solid border-grey rounded-md px-3">
              <input
                id="amount"
                name="amount"
                type="text"
                placeholder="Amount"
                value={formik.values.amount}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="inline-block flex-1 outline-none border-none py-2 mr-2"
              />
              <div className="w-[25px] h-[25px] flex items-center justify-center text-grey">
                <FaMoneyBillWave />
              </div>
            </div>
            {formik.touched.amount && formik.errors.amount ? (
              <p className="text-orange pt-1 text-sm">{formik.errors.amount}</p>
            ) : null}
          </div>

          <div className="w-full mb-2">
            <label
              htmlFor="notes"
              className="text-base font-medium inline-block mb-2"
            >
              Notes
            </label>
            <div className="flex items-center overflow-hidden justify-center  border border-solid border-grey rounded-md px-3">
              <input
                id="notes"
                name="notes"
                type="text"
                placeholder="Notes"
                value={formik.values.notes}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="inline-block flex-1 outline-none border-none py-2 mr-2"
              />
              <div className="w-[25px] h-[25px] flex items-center justify-center text-grey">
                <CgNotes />
              </div>
            </div>
            {formik.touched.notes && formik.errors.notes ? (
              <p className="text-orange pt-1 text-sm">{formik.errors.notes}</p>
            ) : null}
          </div>

          <div className="w-full mb-2">
            <label
              htmlFor="date"
              className="text-base font-medium inline-block mb-2"
            >
              Date
            </label>
            <div className="flex items-center overflow-hidden justify-center  border border-solid border-grey rounded-md px-3">
              <input
                id="date"
                name="date"
                type="date"
                placeholder=" "
                value={formik.values.date}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="inline-block  flex-1 outline-none border-none py-2 mr-2"
              />
              <div className="w-[25px] hidden h-[25px] items-center justify-center text-grey">
                <FaRegCalendarXmark />
              </div>
            </div>
            {formik.touched.date && formik.errors.date ? (
              <p className="text-orange pt-1 text-sm">{formik.errors.date}</p>
            ) : null}
          </div>

          <div className="text-base font-medium inline-block mb-2 mt-2">
            Category
          </div>
          <select
            name="category"
            id="category"
            className="w-full bg-white border border-grey rounded-md py-2 px-3"
            value={formik.values.category}
            onChange={formik.handleChange}
          >
            <option value="category" hidden>
              category
            </option>
            {options.map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </select>
          {formik.touched.category && formik.errors.category ? (
            <p className="text-orange pt-1 text-sm">{formik.errors.category}</p>
          ) : null}

          <div className="flex">
            <StyledButton type="submit" className="mx-auto my-3">
              Submit
            </StyledButton>
          </div>
        </form>
    </>
  );
}

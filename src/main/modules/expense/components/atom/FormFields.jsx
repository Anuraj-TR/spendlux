import { useField } from "formik";
import './style.scss'

export const FormInputField = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <>
      <div className="w-full flex flex-col items-start justify-between mb-2">
        <label
          htmlFor={props.id || props.name}
          className="text-body text-base font-medium inline-block mb-1"
        >
          {label}
        </label>
        <div className="flex items-center justify-between bg-white bg-opacity-20 border border-solid border-secondry rounded-md w-full py-2 px-3">
          <input
            className="flex-1 text-white bg-white bg-opacity-0  placeholder:text-white"
            {...field}
            {...props}
          />
          <div className="w-[25px] h-[25px] flex items-center justify-center text-white">
            {props.icon}
          </div>
        </div>
        {meta.touched && meta.error ? (
          <div className="text-body pt-1 text-sm font-semibold">
            {meta.error}
          </div>
        ) : null}
      </div>
    </>
  );
};

export const FormSelectField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="w-full flex flex-col items-start justify-between mb-2">
      <label
        htmlFor={props.id || props.name}
        className="text-body text-base font-medium inline-block mb-1"
      >
        {label}
      </label>
      <select
        {...field}
        {...props}
        className="flex text-white items-center justify-between border border-solid border-secondry bg-white bg-opacity-20 rounded-md w-full py-2 px-3"
      />
      {meta.touched && meta.error ? (
        <div className="text-body pt-1 text-sm font-semibold">{meta.error}</div>
      ) : null}
    </div>
  );
};

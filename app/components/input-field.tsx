import React from "react";
import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { FormFields } from "../validationSchemas";

const InputField = ({
  name,
  errors,
  restProps,
}: {
  name: keyof FormFields;
  errors: FieldErrors<FormFields>;
  restProps: UseFormRegister<FormFields>;
}) => {
  return (
    <label className="form-control">
      <input
        type="text"
        placeholder={name}
        className="input input-bordered"
        {...restProps(name)}
      />
      <div className="label">
        <span className="label-text-alt text-error">
          {errors[name]?.message}
        </span>
      </div>
    </label>
  );
};

export default InputField;

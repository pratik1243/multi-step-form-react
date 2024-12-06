import React from "react";

const InputField = ({
  label,
  name,
  value,
  placeholder,
  validationSchema,
  required,
  setValue,
}) => {
  return (
    <div className="input-field-sec">
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        className="input-field"
        required={required}
        onChange={(e) => {
          setValue((prev) => {
            return { ...prev, [name]: e.target.value };
          });
        }}
      />
      <label htmlFor={name} className="input-label">
        {label} <span className="required">*</span>
      </label>
      <span className="input-field-error">{"kkkkkkkkkkk"}</span>
    </div>
  );
};

export default InputField;

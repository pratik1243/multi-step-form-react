import React, { useEffect } from "react";

const InputField = ({
  type = "text",
  label,
  name,
  value,
  placeholder,
  required,
  onChange,
  validationSchema,
  setValue,
  errorProps,
}) => {
  const onFieldChange = (e) => {
    const { value } = e.target;

    if (value == "") {
      errorProps?.setErrors((prev) => {
        return {
          ...prev,
          [name]: validationSchema?.errors[name]?.message[0],
        };
      });
    } else if (!validationSchema?.errors[name]?.regex.test(value)) {
      errorProps?.setErrors((prev) => {
        return {
          ...prev,
          [name]: validationSchema?.errors[name].optional ? { optional: true, message: validationSchema?.errors[name]?.message[1], } : validationSchema?.errors[name]?.message[1],
        };
      });
    } else {
      errorProps?.setErrors((prev) => {
        return {
          ...prev,
          [name]: "",
        };
      });
    }
    
    setValue((prev)=>{
      return {...prev, [name]: value}
    })
    onChange && onChange(e);
  };

  return (
    <div className="input-field-sec">
      <input
        type={type}
        id={name}
        autocomplete="off"
        value={value}
        name={name}
        placeholder={placeholder}
        className="input-field"
        required={required}
        onChange={(e) => onFieldChange(e)}
      />
      <label htmlFor={name} className="input-label">
        {label} {required && <span className="required">*</span>}
      </label>
      {errorProps?.errors[name] && (
        <span className="input-field-error">
          {errorProps?.errors[name]?.optional ? errorProps?.errors[name].message : errorProps?.errors[name]}
        </span>
      )}
    </div>
  );
};

export default InputField;

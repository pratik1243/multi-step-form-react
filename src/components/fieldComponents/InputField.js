import React from "react";

const InputField = ({
  type = "text",
  label,
  name,
  placeholder,
  required,
  onChange,
  validationSchema,
  setValue,
  errorProps
}) => {
  const onFieldChange = (e) => {
    const { value } = e.target;

    if (value == "") {
      setValue((prev) => {
        return {
          ...prev,
          isFormValid: false,
        };
      });
      errorProps?.setErrors((prev) => {
        return {
          ...prev,
          [name]: validationSchema?.errors[name]?.message[0],
        };
      });
    } else if (!validationSchema?.errors[name]?.regex.test(value)) {
      setValue((prev) => {
        return {
          ...prev,
          isFormValid: false,
        };
      });
      errorProps?.setErrors((prev) => {
        return {
          ...prev,
          [name]: validationSchema?.errors[name]?.message[1],
        };
      });
    } else {
      setValue((prev) => {
        return {
          ...prev,
          isFormValid: true,
        };
      });
      errorProps?.setErrors((prev) => {
        return {
          ...prev,
          [name]: "",
        };
      });
    }
    setValue((prev) => {
      return {
        ...prev,
        values: {
          ...prev.values,
          [name]: value,
        },
      };
    });
    onChange && onChange(e);
  };

  return (
    <div className="input-field-sec">
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className="input-field"
        required={required}
        onChange={(e) => onFieldChange(e)}
      />
      <label htmlFor={name} className="input-label">
        {label} {required && <span className="required">*</span>}
      </label>
       {errorProps?.errors[name] && <span className="input-field-error">{errorProps?.errors[name]}</span>}
    </div>
  );
};

export default InputField;

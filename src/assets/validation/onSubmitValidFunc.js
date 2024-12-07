export const formAction = (currentform, setErrors, errors, onSubmit) => {
  const obj = {};

  console.log(
    "errors",
    Object.entries(errors).filter(([key, value]) => {
      if (value.optional) {
        return key;
      }
    })
  );

  Object.keys(currentform?.values).map(
    (key) =>
      currentform?.values[key] == "" && (obj[key] = "This is field required")
  );
  setErrors(obj);
  if (!Object.keys(obj).length) {
    onSubmit(currentform?.values);
  }
};

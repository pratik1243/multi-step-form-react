export const formAction = (currentform, setErrors, errors, onSubmit) => {
  let obj = {};
  let validField = true;
  Object.keys(currentform).map((key) => {
    if (typeof currentform[key] === "string") {
      if (errors[key]?.optional) {
        obj = { ...obj, [key]: { optional: true, message: "" } };
      } else if (currentform[key] == "") {
        obj[key] = "This is field required";
      } else if (!errors[key]?.regex.test(currentform[key])) {
        validField = false;
        obj[key] = errors[key]?.message[1];
      } else {
        validField = true;
      }
    }
  });
  setErrors(obj);

  if (!Object.values(obj).filter((el) => !el?.optional).length && validField) {
    onSubmit(currentform);
  }
};

export const formatFileSize = (bytes) => {
  if (bytes === 0) return "0 Bytes";
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  const formattedSize = (bytes / Math.pow(1024, i)).toFixed(2);
  return `${formattedSize} ${sizes[i]}`;
};

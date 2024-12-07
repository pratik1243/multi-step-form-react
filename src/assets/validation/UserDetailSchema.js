import { formAction } from "./onSubmitValidFunc";

export const UserDetailSchema = {
  fields: {
    values: {
      name: "",
      email: "",
      phone: "",
    },
    errors: {
      name: {
        regex: /^[A-Za-z0-9-]{3,}$/,
        message: ["This field is required", "Full name is not valid"],
      },
      email: {
        regex: /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/,
        message: ["This field is required", "Email address is not valid"],
      },
      phone: {
        regex: /^[+]?[0-9]{1,4}[-\s]?[0-9]{1,15}$/,
        message: ["This field is required", "Phone number is not valid"],
      },
    },
  },

};

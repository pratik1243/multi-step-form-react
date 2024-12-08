
export const UserDetailSchema = {
  fields: {
    values: {
      name: "",
      email: "",
      phone: "",
    },
    errors: {
      name: {
        regex: /^[A-Za-z ]{3,}$/,
        message: ["This field is required", "Full name is not valid"],
      },
      email: {
        regex: /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/,
        message: ["This field is required", "Email address is not valid"],
      },
      phone: {
        regex: /^(\+91[\s]?)?(\d{10})$/,
        message: ["This field is required", "Phone number is not valid"],
      },
    },
  },

};

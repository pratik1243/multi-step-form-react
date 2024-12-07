import { formAction } from "./onSubmitValidFunc";

export const AddressDetailSchema = {
  fields: {
    values: {
      addressLine1: "",
      addressLine2: "",
      city: "",
      zipCode: "",
    },
    errors: {
      addressLine1: {
        regex: /^[a-zA-Z0-9]+$/,
        message: ["This field is required", "Address is not valid"],
      },
      addressLine2: {
        optional: true,
        regex: /^[a-zA-Z0-9]+$/,
        message: ["This field is required", "Address is not valid"],
      },
      city: {
        regex: /^[a-zA-Z0-9]+$/,
        message: ["This field is required", "City is not valid"],
      },
      zipCode: {
        regex: /^[0-9]{5,6}$/,
        message: ["This field is required", "Zip code is not valid"],
      },
    },
  },
 
};

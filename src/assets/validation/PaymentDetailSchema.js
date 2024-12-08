export const PaymentDetailSchema = {
  fields: {
    values: {
      cardHolderName: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    },
    errors: {
      cardHolderName: {
        regex: /^[a-z][a-zA-Z]+( [a-z][a-zA-Z]+)*$/,
        message: ["This field is required", "Card holder name is not valid"],
      },
      cardNumber: {
        regex: /^(?:\d{4}[ -]?)\d{4}[ -]?\d{4}[ -]?\d{4}$/,
        message: ["This field is required", "Card number is not valid"],
      },
      expiryDate: {
        regex: /^(?!\s*$).+/,
        message: ["This field is required", "Expiry date is not valid"],
      },
      cvv: {
        regex: /^[0-9]{3,4}$/,
        message: ["This field is required", "CVV is not valid"],
      },
    },
  },

};

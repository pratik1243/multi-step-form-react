import React, { useContext, useState } from "react";
import InputField from "./fieldComponents/InputField";
import { PaymentDetailSchema } from "../assets/validation/PaymentDetailSchema";
import NavigationBtn from "./NavigationBtn";
import { FormProvider } from "./FormSection";
import { formAction } from "../assets/validation/onSubmitValidFunc";

const PaymentDetails = () => {
  const { setCurrentStep, formDetails } = useContext(FormProvider);
  const [paymentDetails, setPaymentDetails] = useState(PaymentDetailSchema.fields);
  const [errors, setErrors] = useState(PaymentDetailSchema.fields.values);

  return (
    <div>
      <div className="form-field-sec">
        <div>
          <InputField
            label={"Cardholder Name"}
            name={"cardHolderName"}
            placeholder={"Enter card holder name"}
            required
            setValue={setPaymentDetails}
            errorProps={{ errors, setErrors }}
            validationSchema={PaymentDetailSchema.fields}
          />
        </div>
        <div>
          <InputField
            label={"Card Number"}
            name={"cardNumber"}
            placeholder={"Enter card number"}
            required
            setValue={setPaymentDetails}
            errorProps={{ errors, setErrors }}
            validationSchema={PaymentDetailSchema.fields}
          />
        </div>
        <div>
          <InputField
            label={"Expiry Date"}
            type={"date"}
            name={"expiryDate"}
            placeholder={"Select expiry date"}
            required
            setValue={setPaymentDetails}
            errorProps={{ errors, setErrors }}
            validationSchema={PaymentDetailSchema.fields}
          />
        </div>
        <div>
          <InputField
            label={"CVV"}
            name={"cvv"}
            placeholder={"Enter cvv"}
            required
            setValue={setPaymentDetails}
            errorProps={{ errors, setErrors }}
            validationSchema={PaymentDetailSchema.fields}
          />
        </div>
      </div>

      <NavigationBtn
        handleNext={() => {
          formAction(
            paymentDetails,
            setErrors,
            (values) => {
              setCurrentStep(3);
            }
          );
        }}
        handleBack={() => {
          setCurrentStep(1);
        }}
      />
    </div>
  );
};

export default PaymentDetails;

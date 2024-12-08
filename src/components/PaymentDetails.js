import React, { useContext, useEffect, useState } from "react";
import InputField from "./fieldComponents/InputField";
import { PaymentDetailSchema } from "../assets/validation/PaymentDetailSchema";
import NavigationBtn from "./NavigationBtn";
import { FormProvider } from "./FormSection";
import { formAction } from "../assets/validation/onSubmitValidFunc";

const PaymentDetails = () => {
  const { setCurrentStep, formDetails, setFormDetails } = useContext(FormProvider);
  const [paymentDetails, setPaymentDetails] = useState(PaymentDetailSchema.fields.values);
  const [errors, setErrors] = useState(PaymentDetailSchema.fields.values);

  useEffect(() => {
    if (Object.keys(formDetails?.paymentDetails).length) {
      setPaymentDetails(formDetails?.paymentDetails);
    }
  }, []);

  return (
    <div>
      <h3 className="form-heading">Payment Details</h3>
      <div className="form-field-sec">
        <div>
          <InputField
            label={"Cardholder Name"}
            name={"cardHolderName"}
            placeholder={"Enter card holder name"}
            required
            value={paymentDetails?.cardHolderName}
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
            value={paymentDetails?.cardNumber}
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
            value={paymentDetails?.expiryDate}
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
            value={paymentDetails?.cvv}
            setValue={setPaymentDetails}
            errorProps={{ errors, setErrors }}
            validationSchema={PaymentDetailSchema.fields}
          />
        </div>
      </div>

      <NavigationBtn
        handleNext={() => {
          formAction(paymentDetails, setErrors, PaymentDetailSchema.fields.errors, (values) => {
            setFormDetails({...formDetails, paymentDetails: values});            
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

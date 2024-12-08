import React, { useEffect, useState } from "react";
import UserDetails from "./UserDetails";
import AddressDetails from "./AddressDetails";
import PaymentDetails from "./PaymentDetails";
import Preview from "./Preview";
import Stepper from "./Stepper";
import { createContext } from "react";

export const FormProvider = createContext();

const FormSection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formDetails, setFormDetails] = useState(() => {
    const savedData = sessionStorage.getItem('formDetails');
    return savedData ? JSON.parse(savedData) : {
      userDetails: {},
      addressDetails: {},
      paymentDetails: {},
    };
  });

  useEffect(() => {
    sessionStorage.setItem('formDetails', JSON.stringify(formDetails));
  }, [formDetails]);

  return (
    <div>
      <FormProvider value={{ currentStep, setCurrentStep, formDetails, setFormDetails }}>
        <div className="mobile-stepper-sec"><Stepper /></div>      
        <div className="form-section">
          <Stepper />
          <div className="step-content">
            {currentStep == 0 && <UserDetails />}
            {currentStep == 1 && <AddressDetails />}
            {currentStep == 2 && <PaymentDetails />}
            {currentStep == 3 && <Preview />}
          </div>
        </div>
      </FormProvider>
    </div>
  );
};

export default FormSection;

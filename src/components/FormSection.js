import React, { useState } from "react";
import UserDetails from "./UserDetails";
import AddressDetails from "./AddressDetails";
import PaymentDetails from "./PaymentDetails";
import Preview from "./Preview";
import Stepper from "./Stepper";

const FormSection = () => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div>
      <div className="form-section">
        <Stepper step={currentStep} />
        <div className="step-content">
        {currentStep == 0 && <UserDetails />}
        {currentStep == 1 && <AddressDetails />}
        {currentStep == 2 && <PaymentDetails />}
        {currentStep == 3 && <Preview />}
        </div>
      </div>

      <button onClick={() => setCurrentStep(currentStep - 1)}>Back</button>
      <button onClick={() => setCurrentStep(currentStep + 1)}>Next</button>
    </div>
  );
};

export default FormSection;

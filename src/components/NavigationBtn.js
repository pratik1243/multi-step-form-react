import React, { useContext } from "react";
import { FormProvider } from "./FormSection";

const NavigationBtn = ({ handleBack, handleNext }) => {
  const { currentStep } = useContext(FormProvider);
  return (
    <div className="navigation-btn-sec">
      {currentStep !== 0 && (
        <button onClick={handleBack} className="back-btn">
          Back
        </button>
      )}
      {currentStep !== 3 && (
        <button onClick={handleNext} className="next-btn">
          Next
        </button>
      )}
    </div>
  );
};

export default NavigationBtn;

import React, { useContext } from "react";
import { FormProvider } from "./FormSection";

const NavigationBtn = ({ handleBack, handleNext }) => {
  const { currentStep } = useContext(FormProvider);
  return (
    <div className="navigation-btn-sec">
      {currentStep !== 0 && (
        <button onClick={handleBack} className="back-btn back-full-btn">
          Back
        </button>
      )}

      {currentStep == 3 ? (
        <button className="next-btn next-full-btn">
          Submit
        </button>
      ) : (
        <button onClick={handleNext} className="next-btn next-full-btn">
          Next
        </button>
      )}
    </div>
  );
};

export default NavigationBtn;

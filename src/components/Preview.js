import React, { useContext } from "react";
import { FormProvider } from "./FormSection";

const Preview = () => {
  const { setCurrentStep, setFormDetails, formDetails } = useContext(FormProvider);

  return (
    <div>
      {Object.entries(formDetails).map(([key, value],index) => {
        return (
          <div className="preview-detail-sec">
            <h4>{key}</h4>
            <div className="preview-form-details" key={index}>
              {Object.entries(value).map(([key, value], ind) => {
                return (
                  <div className="preview-inner-detail" key={ind}>
                    <span className="detail-key">{key}</span>
                    <span className="detail-value">{value}</span>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Preview;

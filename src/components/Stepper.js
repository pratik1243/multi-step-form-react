import React, { useEffect, useState, useContext } from "react";
import { FormProvider } from "./FormSection";

const Stepper = () => {
  const { currentStep } = useContext(FormProvider);
  const [steppers, setSteppers] = useState([
    "User Details",
    "Address Details",
    "Payment Details",
    "Preview",
  ]);
  const [stepsArr, setStepsArr] = useState([]);

  // const stepCount = (stepcount) => {
  //   let stepNum = 32 * stepcount;
  //   return stepNum;
  // };

  // useEffect(() => {
  //   let stepArr = [];
  //   for (let index = 0; index < currentStep; index++) {
  //     stepArr.push(index);
  //   }
  //   setStepsArr(stepArr);
  // }, []);

  useEffect(() => {
    if (stepsArr.length - 1 > currentStep) {
      setStepsArr(stepsArr.filter((el) => el !== currentStep + 1));
    } else {
      setStepsArr([...stepsArr, currentStep]);
    }
  }, [currentStep]);

  return (
    <div className="stepper-sec">
      <div className="indicator-line"></div>
      {/* <div
        className="active-indicator-line"
        style={{ width: `${stepCount(step)}%` }}
      ></div> */}
      <div className="progress-stepper-sec">
        {steppers.map((ele, index) => {
          return (
            <div key={index} className="progress-inner-step">
              {index == 0 && <div className="step-line-left"></div>}
              {steppers.length - 1 === index && (
                <div className="step-line-right"></div>
              )}
              <div
                className={`pointer-sec ${
                  currentStep == index
                    ? "step-active"
                    : stepsArr.includes(index)
                    ? "step-completed"
                    : ""
                }`}
              >
                <span>
                  {currentStep == index
                    ? index + 1
                    : stepsArr.includes(index)
                    ? ""
                    : index + 1}
                </span>
              </div>
              <span
                className={`step-txt ${
                  currentStep == index
                    ? "step-txt-active"
                    : stepsArr.includes(index)
                    ? "step-txt-completed"
                    : ""
                }`}
              >
                {ele}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stepper;

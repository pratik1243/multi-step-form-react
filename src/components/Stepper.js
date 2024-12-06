import React, { useEffect, useState } from "react";

const Stepper = ({ step }) => {
  const [steppers, setSteppers] = useState([
    "User Details",
    "Address Details",
    "Payment Details",
    "Preview Details",
  ]);
  const [stepsArr, setStepsArr] = useState([]);

  // const stepCount = (stepcount) => {
  //   let stepNum = 32 * stepcount;
  //   return stepNum;
  // };

  useEffect(() => {
    if (stepsArr.length - 1 > step) {
      setStepsArr(stepsArr.filter((el) => el !== step + 1));
    } else {
      setStepsArr([...stepsArr, step]);
    }
  }, [step]);

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
                  step == index
                    ? "step-active"
                    : stepsArr.includes(index)
                    ? "step-completed"
                    : ""
                }`}
              >
                <span>{step == index ? (index + 1) : stepsArr.includes(index) ? "" : (index + 1)}</span>
              </div>
              <span className="step-txt">{ele}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stepper;

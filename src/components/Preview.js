import React, { useContext } from "react";
import { FormProvider } from "./FormSection";
import fileImgIcon from "../assets/images/file-img-icon.png";
import NavigationBtn from "./NavigationBtn";

const Preview = () => {
  const { setFormDetails, formDetails, setCurrentStep } = useContext(FormProvider);

  return (
    <div className="preview-main-sec">
      <h3 className="form-heading">Preview Details</h3>
      {Object.entries(formDetails).map(([key, value], index) => {
        return (
          <div className="preview-detail-sec">
            <h4 style={{ textTransform: "capitalize" }}>
              {key.replace(/([a-z])([A-Z])/g, "$1 $2").split(" ").join(" ").toString()}
            </h4>
            <div className="preview-form-details" key={index}>
              {Object.entries(value).map(([key, value], ind) => {
                if (typeof value == "object") {
                  return (
                    <div className="preview-fileupload-sec">
                      <span className="file-detail-key">{key.replace(/([a-z])([A-Z])/g, "$1 $2").split(" ").join(" ").toString()}</span>
                      <div className="file-uploaded-section">
                        <div className="file-upload-inner-sec">
                          <img src={fileImgIcon} className="file-img-icon" />
                          <div>
                            <span className="file-name">{value?.name}</span>
                            <span className="file-size">{value?.size}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div className="preview-inner-detail" key={ind}>
                      <span className="detail-key">{key.replace(/([a-z])([A-Z])/g, "$1 $2").split(" ").join(" ").toString()}</span>
                      <span className="detail-value">{value}</span>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        );
      })}
      <NavigationBtn
        handleBack={() => {
          setCurrentStep(2);
        }}
      />
    </div>
  );
};

export default Preview;

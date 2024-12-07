import React, { useContext, useEffect, useState } from "react";
import InputField from "./fieldComponents/InputField";
import { UserDetailSchema } from "../assets/validation/UserDetailSchema";
import NavigationBtn from "./NavigationBtn";
import { FormProvider } from "./FormSection";
import FileUpload from "./fieldComponents/FileUpload";
import { formAction } from "../assets/validation/onSubmitValidFunc";

const UserDetails = () => {
  const { setCurrentStep, formDetails } = useContext(FormProvider);
  const [userDetails, setUserDetails] = useState(UserDetailSchema.fields);
  const [errors, setErrors] = useState(UserDetailSchema.fields.values);
  const [fileUpload, setFileUpload] = useState({
    file_name: "",
    file_size: "",
    file_uploaded: false,
    file_uploaded_error: false,
  });

  // useEffect(() => {
  //   let formData = localStorage.getItem("formDetails");
  //   if (formData) {
  //     setUserDetails(JSON.parse(formData));
  //   }
    
  // }, []);


  return (
    <div>
      <div className="form-field-sec">
        <div>
          <InputField
            label={"Full Name"}
            name={"name"}
            placeholder={"Enter full name"}
            required
            setValue={setUserDetails}
            errorProps={{ errors, setErrors }}
            validationSchema={UserDetailSchema.fields}
          />
        </div>
        <div>
          <InputField
            label={"Email"}
            name={"email"}
            placeholder={"Enter email address"}
            required
            setValue={setUserDetails}
            errorProps={{ errors, setErrors }}
            validationSchema={UserDetailSchema.fields}
          />
        </div>
        <div>
          <InputField
            label={"Phone Number"}
            name={"phone"}
            placeholder={"Enter phone number"}
            required
            setValue={setUserDetails}
            errorProps={{ errors, setErrors }}
            validationSchema={UserDetailSchema.fields}
          />
        </div>
      </div>
      <div>
        <FileUpload
          fileLabel="Upload Photo"
          fileTypes={["image/png", "image/jpeg", "image/jpg"]}
          filesProps={{ fileUpload, setFileUpload }}
        />
      </div>
      <NavigationBtn
        handleNext={() => {
          formAction(userDetails, setErrors, UserDetailSchema.fields.errors, (values) => {
            setCurrentStep(1);
          });
        }}
        handleBack={() => {
          setCurrentStep(0);
        }}
      />
    </div>
  );
};

export default UserDetails;

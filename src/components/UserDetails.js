import React, { useContext, useEffect, useState } from "react";
import InputField from "./fieldComponents/InputField";
import { UserDetailSchema } from "../assets/validation/UserDetailSchema";
import NavigationBtn from "./NavigationBtn";
import { FormProvider } from "./FormSection";
import FileUpload from "./fieldComponents/FileUpload";
import { formAction } from "../assets/validation/onSubmitValidFunc";

const UserDetails = () => {
  const { setCurrentStep, formDetails, setFormDetails } = useContext(FormProvider);
  const [userDetails, setUserDetails] = useState(UserDetailSchema.fields.values);
  const [errors, setErrors] = useState(UserDetailSchema.fields);
  const [fileUpload, setFileUpload] = useState({
    file_name: "",
    file_size: "",
    file_uploaded: false,
    file_uploaded_error: false,
  });

  useEffect(() => {
    if (Object.keys(formDetails?.userDetails).length) {
      setUserDetails(formDetails?.userDetails);

      if (formDetails?.userDetails?.photo) {
        setFileUpload({
          ...fileUpload,
          file_name: formDetails?.userDetails.photo?.name,
          file_size: formDetails?.userDetails.photo.size,
          file_uploaded: true,
          file_uploaded_error: false,
        });
      }
    }
  }, []);

  return (
    <div>
      <h3 className="form-heading">User Details</h3>
      <div className="form-field-sec">
        <div>
          <InputField
            label={"Full Name"}
            name={"name"}
            placeholder={"Enter full name"}
            required
            value={userDetails?.name}
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
            value={userDetails?.email}
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
            value={userDetails?.phone}
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
          onChange={(files) => {
            setUserDetails({
              ...userDetails,
              photo: {
                name: files?.name,
                size: files?.size,
              },
            });
          }}
          onRemoveFiles={() => {
            setUserDetails((current) => {
              const { photo, ...rest } = current;
              return rest;
            });
          }}
        />
      </div>
      <NavigationBtn
        handleNext={() => {
          formAction(
            userDetails,
            setErrors,
            UserDetailSchema.fields.errors,
            (values) => {
              setFormDetails({
                ...formDetails,
                userDetails: {
                  ...values,
                  ...(fileUpload.file_uploaded && {
                    photo: {
                      name: fileUpload.file_name,
                      size: fileUpload.file_size,
                    },
                  }),
                },
              });

              setCurrentStep(1);
            }
          );
        }}
        handleBack={() => {
          setCurrentStep(0);
        }}
      />
    </div>
  );
};

export default UserDetails;

import React, { useContext, useEffect, useState } from "react";
import InputField from "./fieldComponents/InputField";
import { AddressDetailSchema } from "../assets/validation/AddressDetailSchema";
import NavigationBtn from "./NavigationBtn";
import { FormProvider } from "./FormSection";
import { formAction } from "../assets/validation/onSubmitValidFunc";

const AddressDetails = () => {
  const { setCurrentStep, formDetails, setFormDetails } = useContext(FormProvider);
  const [addressDetails, setAddressDetails] = useState(AddressDetailSchema.fields.values);
  const [errors, setErrors] = useState(AddressDetailSchema.fields.values);

  useEffect(() => {
    if (Object.keys(formDetails?.addressDetails).length) {
      setAddressDetails(formDetails?.addressDetails);
    }
  }, []);

  return (
    <div>
      <h3 className="form-heading">Address Details</h3>
      <div className="form-field-sec">
        <div>
          <InputField
            label={"Address Line 1"}
            name={"addressLine1"}
            placeholder={"Enter full address"}
            required
            value={addressDetails?.addressLine1}
            setValue={setAddressDetails}
            errorProps={{ errors, setErrors }}
            validationSchema={AddressDetailSchema.fields}
          />
        </div>
        <div>
          <InputField
            label={"Address Line 2"}
            name={"addressLine2"}
            value={addressDetails?.addressLine2}
            placeholder={"Enter full address"}
            setValue={setAddressDetails}
            errorProps={{ errors, setErrors }}
            validationSchema={AddressDetailSchema.fields}
          />
        </div>
        <div>
          <InputField
            label={"City"}
            name={"city"}
            placeholder={"Enter current city"}
            required
            value={addressDetails?.city}
            setValue={setAddressDetails}
            errorProps={{ errors, setErrors }}
            validationSchema={AddressDetailSchema.fields}
          />
        </div>
        <div>
          <InputField
            label={"Zip Code"}
            name={"zipCode"}
            placeholder={"Enter zip code"}
            required
            value={addressDetails?.zipCode}
            setValue={setAddressDetails}
            errorProps={{ errors, setErrors }}
            validationSchema={AddressDetailSchema.fields}
          />
        </div>
      </div>

      <NavigationBtn
        handleNext={() => {
          formAction(
            addressDetails,
            setErrors,
            AddressDetailSchema.fields.errors,
            (values) => {
              setFormDetails({ ...formDetails, addressDetails: values });
              setCurrentStep(2);
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

export default AddressDetails;

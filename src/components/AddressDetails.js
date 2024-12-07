import React, { useContext, useState } from "react";
import InputField from "./fieldComponents/InputField";
import { AddressDetailSchema } from "../assets/validation/AddressDetailSchema";
import NavigationBtn from "./NavigationBtn";
import { FormProvider } from "./FormSection";
import { formAction } from "../assets/validation/onSubmitValidFunc";

const AddressDetails = () => {
  const { setCurrentStep, formDetails } = useContext(FormProvider);
  const [addressDetails, setAddressDetails] = useState(AddressDetailSchema.fields);
  const [errors, setErrors] = useState(AddressDetailSchema.fields.values);

  return (
    <div>
      <div className="form-field-sec">
        <div>
          <InputField
            label={"Address Line 1"}
            name={"addressLine1"}
            placeholder={"Enter full address"}
            required
            setValue={setAddressDetails}
            errorProps={{ errors, setErrors }}
            validationSchema={AddressDetailSchema.fields}
          />
        </div>
        <div>
          <InputField
            label={"Address Line 2"}
            name={"addressLine2"}
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
            setValue={setAddressDetails}
            errorProps={{ errors, setErrors }}
            validationSchema={AddressDetailSchema.fields}
          />
        </div>
      </div>

      <NavigationBtn
        handleNext={() => {
          formAction(addressDetails, setErrors, AddressDetailSchema.fields.errors, (values) => {
              setCurrentStep(2);
            });
        }}
        handleBack={() => {
          setCurrentStep(0);
        }}
      />
    </div>
  );
};

export default AddressDetails;

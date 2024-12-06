import React, { useState } from "react";
import InputField from "./InputField";

const UserDetails = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
  });


  console.log('userDetails', userDetails);

  return (
    <div>
      <div className="form-field-sec">
        <div>
          <InputField
            label={"Name"}
            name={"name"}
            value={userDetails.name}
            placeholder={"Enter full name"}
            required
            setValue={setUserDetails}
          />
        </div>
        <div>
          <InputField
            label={"Email"}
            name={"email"}
            value={userDetails.email}
            placeholder={"Enter email address"}
            required
            setValue={setUserDetails}
          />
        </div>
        <div>
          <InputField
            label={"Phone Number"}
            name={"phone"}
            value={userDetails.phone}
            placeholder={"Enter phone number"}
            required
            setValue={setUserDetails}
          />
        </div>
        {/* <div>
          <InputField label={"Name"} placeholder={"Enter full name"} required />
        </div> */}
      </div>
    </div>
  );
};

export default UserDetails;

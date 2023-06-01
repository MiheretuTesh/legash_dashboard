import React, { useState } from "react";
import { AssumtionFormValues } from "../../types";
import SideLabelFormField from "../SideLabelFormField";
import SideLabelFormSelectField from "../SideLabelFormSelectField";
import { useStyles } from "./index.style";
import ImageUpload from "../ImageUpload";
import { CITIES, STATES, COUNTRIES } from "../../constants/constant";

interface HospitalsDataFormProps {
  formikChangeHandler: {
    (e: React.ChangeEvent<any>): void;
    <T = string | React.ChangeEvent<any>>(
      field: T
    ): T extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
  assumptionFormValues?: AssumtionFormValues;
}

const HospitalsDataForm = ({
  formikChangeHandler,
  assumptionFormValues,
}: HospitalsDataFormProps) => {
  const [imageUrlGenerated, setImageUrlGenerated] = useState(false);
  const [imgUploadUrl, setImagUploadUrl] = useState("");
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <div className={styles.fieldsContainer}>
        <ImageUpload
          setImageUrlGenerated={setImageUrlGenerated}
          setImagUploadUrl={setImagUploadUrl}
        />
        <SideLabelFormField
          fieldLabel="Name"
          fieldName="name"
          fieldPlaceholder="Menilike"
        />
        <SideLabelFormField
          fieldLabel="Address"
          fieldName="address"
          fieldPlaceholder="Mexico"
        />
        <SideLabelFormSelectField
          formikChangeHandler={formikChangeHandler}
          fieldLabel="City"
          fieldName="city"
          initialValue={
            assumptionFormValues?.developmentState !== ""
              ? assumptionFormValues?.developmentState
              : "none"
          }
          fieldPlaceholder="Select a city"
          options={CITIES}
          isFormName="hospital_create"
        />
        <SideLabelFormSelectField
          formikChangeHandler={formikChangeHandler}
          fieldLabel="State"
          fieldName="state"
          initialValue={
            assumptionFormValues?.capexBudget !== ""
              ? assumptionFormValues?.capexBudget
              : "none"
          }
          fieldPlaceholder="Select a state"
          options={STATES}
          isFormName="hospital_create"
        />
        <SideLabelFormSelectField
          formikChangeHandler={formikChangeHandler}
          fieldLabel="Country"
          fieldName="country"
          initialValue={
            assumptionFormValues?.capexBudget !== ""
              ? assumptionFormValues?.capexBudget
              : "none"
          }
          fieldPlaceholder="Select a Country"
          options={COUNTRIES}
          isFormName="hospital_create"
        />
        <SideLabelFormField
          fieldLabel="Phone Number"
          fieldName="phone"
          fieldPlaceholder="0912345678"
        />
        <SideLabelFormField
          fieldLabel="Email"
          fieldName="email"
          fieldPlaceholder="example@gmail.com"
        />
        <SideLabelFormField
          fieldLabel="Website"
          fieldName="website"
          fieldPlaceholder="www.menilike.com"
        />
        <SideLabelFormField
          fieldLabel="Bank Account"
          fieldName="bankAccounts"
          fieldPlaceholder="1000255788983"
        />
      </div>
    </div>
  );
};

export default HospitalsDataForm;

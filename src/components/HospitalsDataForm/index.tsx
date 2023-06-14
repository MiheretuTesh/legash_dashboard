import React, { useState } from "react";
import { AssumtionFormValues } from "../../types";
import SideLabelFormField from "../SideLabelFormField";
import SideLabelFormSelectField from "../SideLabelFormSelectField";
import { useStyles } from "./index.style";
import ImageUpload from "../ImageUpload";
import {
  CITIES,
  STATES,
  COUNTRIES,
  AM_CITIES,
  AM_COUNTRY,
  AM_STATE,
} from "../../constants/constant";

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
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <div className={styles.container}>
        <div className={styles.fieldsContainer}>
          <h3>English</h3>
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
      <div className={styles.container}>
        <div className={styles.fieldsContainer}>
          <h3>Amharic</h3>
          <SideLabelFormField
            fieldLabel="ስም"
            fieldName="am_name"
            fieldPlaceholder="ሚኒልክ"
          />
          <SideLabelFormField
            fieldLabel="አድራሻ"
            fieldName="am_address"
            fieldPlaceholder="ሜክሲኮ"
          />
          <SideLabelFormSelectField
            formikChangeHandler={formikChangeHandler}
            fieldLabel="ከተማ"
            fieldName="am_city"
            initialValue={
              assumptionFormValues?.developmentState !== ""
                ? assumptionFormValues?.developmentState
                : "none"
            }
            fieldPlaceholder="ከተማ ይምረጡ"
            options={AM_CITIES}
            isFormName="hospital_create"
          />
          <SideLabelFormSelectField
            formikChangeHandler={formikChangeHandler}
            fieldLabel="ክልል"
            fieldName="am_state"
            initialValue={
              assumptionFormValues?.capexBudget !== ""
                ? assumptionFormValues?.capexBudget
                : "none"
            }
            fieldPlaceholder="ክልል ይምረጡ"
            options={AM_STATE}
            isFormName="hospital_create"
          />
          <SideLabelFormSelectField
            formikChangeHandler={formikChangeHandler}
            fieldLabel="ሀገር"
            fieldName="am_country"
            initialValue={
              assumptionFormValues?.capexBudget !== ""
                ? assumptionFormValues?.capexBudget
                : "none"
            }
            fieldPlaceholder="ሀገር"
            options={AM_COUNTRY}
            isFormName="hospital_create"
          />
        </div>
      </div>
    </div>
  );
};

export default HospitalsDataForm;

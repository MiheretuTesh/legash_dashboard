import React, { useState } from "react";
import { AssumtionFormValues } from "../../types";
import SideLabelFormField from "../SideLabelFormField";
import SideLabelFormSelectField from "../SideLabelFormSelectField";
import { useStyles } from "./index.style";
import { CITIES, BANKS, COUNTRIES } from "../../constants/constant";

interface HospitalAdminFormProps {
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

const HospitalAdminForm = ({
  formikChangeHandler,
  assumptionFormValues,
}: HospitalAdminFormProps) => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <div className={styles.fieldsContainer}>
        <SideLabelFormField
          fieldLabel="Bank Account"
          fieldName="accountNumber"
          fieldPlaceholder="1000255788983"
        />
        <SideLabelFormField
          fieldLabel="Account Holder Name"
          fieldName="accountHolderName"
          fieldPlaceholder="Yekatit 12"
        />
        <SideLabelFormSelectField
          formikChangeHandler={formikChangeHandler}
          fieldLabel="Bank Name"
          fieldName="bankName"
          initialValue={
            assumptionFormValues?.developmentState !== ""
              ? assumptionFormValues?.developmentState
              : "none"
          }
          fieldPlaceholder="Select a bank"
          options={BANKS}
          isFormName="hospital_create"
        />
        <SideLabelFormSelectField
          formikChangeHandler={formikChangeHandler}
          fieldLabel="country"
          fieldName="bankCountry"
          initialValue={
            assumptionFormValues?.developmentState !== ""
              ? assumptionFormValues?.developmentState
              : "none"
          }
          fieldPlaceholder="Select a country"
          options={COUNTRIES}
          isFormName="hospital_create"
        />
      </div>
    </div>
  );
};

export default HospitalAdminForm;

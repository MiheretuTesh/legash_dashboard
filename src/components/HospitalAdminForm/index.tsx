import React, { useState } from "react";
import { AssumtionFormValues } from "../../types";
import SideLabelFormField from "../SideLabelFormField";
import SideLabelFormSelectField from "../SideLabelFormSelectField";
import { useStyles } from "./index.style";
import { CITIES, STATES, COUNTRIES } from "../../constants/constant";

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
        {/* <SideLabelFormField
          fieldLabel="Bank Account"
          fieldName="bankAccounts"
          fieldPlaceholder="1000255788983"
        /> */}
      </div>
    </div>
  );
};

export default HospitalAdminForm;

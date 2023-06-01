import React from "react";
import { AssumtionFormValues } from "../../types";
import SideLabelFormField from "../SideLabelFormField";
import SideLabelFormSelectField from "../SideLabelFormSelectField";
import { useStyles } from "./index.style";

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
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <div className={styles.fieldsContainer}>
        <SideLabelFormField
          fieldLabel="Name"
          fieldName="buildingName"
          isDisabled
        />
        <SideLabelFormField
          fieldLabel="Hold Period"
          fieldName="holdPeriod"
          type="number"
          unit="years"
        />
        <SideLabelFormField
          fieldLabel="Exit Yield"
          fieldName="exitYield"
          type="number"
          unit="%"
        />
        {/*<SideLabelFormField*/}
        {/*  fieldLabel="Premium for Tech"*/}
        {/*  fieldName="premiumForTechEnabledBuilding"*/}
        {/*  type="number"*/}
        {/*  unit="bips"*/}
        {/*/>*/}
        {/*<SideLabelFormField*/}
        {/*  fieldLabel="Coordinates N/S"*/}
        {/*  fieldName="coordinatesNS"*/}
        {/*  type="number"*/}
        {/*/>*/}
        {/*<SideLabelFormField*/}
        {/*  fieldLabel="Coordinates E/W"*/}
        {/*  fieldName="coordinatesEW"*/}
        {/*  type="number"*/}
        {/*/>*/}
        {/*<SideLabelFormField*/}
        {/*  fieldLabel="Construction year"*/}
        {/*  fieldName="constructionYear"*/}
        {/*  type="number"*/}
        {/*/>*/}
        <SideLabelFormField
          fieldLabel="Climate Zone"
          fieldName="climateZone"
          type="number"
        />
        <SideLabelFormField
          fieldLabel="Start year"
          fieldName="startYear"
          type="number"
        />
        <SideLabelFormSelectField
          formikChangeHandler={formikChangeHandler}
          fieldLabel="New Development or major refurbishment?"
          fieldName="developmentState"
          initialValue={
            assumptionFormValues?.developmentState !== ""
              ? assumptionFormValues?.developmentState
              : "none"
          }
          fieldPlaceholder="Select"
          options={["Yes", "No"]}
        />
        <SideLabelFormSelectField
          formikChangeHandler={formikChangeHandler}
          fieldLabel="Is there capex budget?"
          fieldName="capexBudget"
          initialValue={
            assumptionFormValues?.capexBudget !== ""
              ? assumptionFormValues?.capexBudget
              : "none"
          }
          fieldPlaceholder="Select"
          options={["Yes", "No"]}
        />
        <SideLabelFormField
          fieldLabel="Building storeys"
          fieldName="buildingStoreys"
          type="number"
        />
        <SideLabelFormField
          fieldLabel="Total number of lifts"
          fieldName="totalNumberOfLifts"
          type="number"
        />
        <SideLabelFormField
          fieldLabel="Number of lifts per core"
          fieldName="numberOfLiftsPerCore"
          type="number"
        />
      </div>
    </div>
  );
};

export default HospitalsDataForm;

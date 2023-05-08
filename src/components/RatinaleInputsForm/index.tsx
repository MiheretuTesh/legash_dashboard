import React, { useEffect } from "react";
import { AssumtionFormValues } from "../../types";
import SideLabelFormField from "../SideLabelFormField";
import SideLabelFormSelectField from "../SideLabelFormSelectField";
import { useStyles } from "./index.style";

interface RatinaleInputsFormProps {
  assumptionFormValues: AssumtionFormValues;
  assumptionFormSetFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => void;
  formikChangeHandler: {
    (e: React.ChangeEvent<any>): void;
    <T = string | React.ChangeEvent<any>>(
      field: T
    ): T extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
}

const RationaleInputsForm = ({
  assumptionFormSetFieldValue,
  assumptionFormValues,
  formikChangeHandler,
}: RatinaleInputsFormProps) => {
  const styles = useStyles();

  useEffect(() => {
    assumptionFormSetFieldValue(
      "buildingSize",
      Math.fround(+assumptionFormValues.totalBuildingAreaSQM / 1000)
    );
  }, [assumptionFormValues.totalBuildingAreaSQM, assumptionFormSetFieldValue]);

  useEffect(() => {
    let value = "";
    if (
      +assumptionFormValues.opexSQM <=
      +assumptionFormValues.inBetweenLowMediumPSM
    ) {
      value = "Low";
    } else if (
      +assumptionFormValues.opexSQM >= +assumptionFormValues.mediumPSMLevel &&
      +assumptionFormValues.opexSQM <=
        +assumptionFormValues.inBetweenMediumHighPSM
    ) {
      value = "Middle";
    } else {
      value = "High";
    }
    assumptionFormSetFieldValue("opexInefficiency", value);
  }, [
    assumptionFormSetFieldValue,
    assumptionFormValues.opexSQM,
    assumptionFormValues.inBetweenLowMediumPSM,
    assumptionFormValues.mediumPSMLevel,
    assumptionFormValues.inBetweenMediumHighPSM,
  ]);

  useEffect(() => {
    let value = "";
    if (
      assumptionFormValues.developmentState === "No" &&
      assumptionFormValues.capexBudget === "No"
    ) {
      value = "No";
    } else if (
      assumptionFormValues.developmentState === "No" &&
      assumptionFormValues.capexBudget === "Yes"
    ) {
      value = "Low/Med";
    } else if (
      assumptionFormValues.developmentState === "Yes" &&
      assumptionFormValues.capexBudget === "Yes"
    ) {
      value = "Error";
    } else {
      value = "High/New dev";
    }
    assumptionFormSetFieldValue("capex", value);
  },
      [
          assumptionFormSetFieldValue,
        assumptionFormValues.developmentState,
        assumptionFormValues.capexBudget
  ]);

  useEffect(() => {
    let value;
    if (
      +assumptionFormValues.numberOfLiftsPerCore > 2 &&
      +assumptionFormValues.buildingStoreys > 4
    ) {
      value = "Yes";
    } else {
      value = "No";
    }
    assumptionFormSetFieldValue("isLiftManagementSystemRequired", value);
  }, [
    assumptionFormSetFieldValue,
    assumptionFormValues.numberOfLiftsPerCore,
    assumptionFormValues.buildingStoreys,
  ]);

  return (
    <div className={styles.container}>
      <h2 className={styles.headerTxt}>Rational Inputs</h2>
      <div className={styles.fieldsContainer}>
        {/*<SideLabelFormField*/}
        {/*  customFieldStyle={styles.field}*/}
        {/*  fieldLabel="Building size"*/}
        {/*  fieldName="buildingSize"*/}
        {/*  isDisabled*/}
        {/*/>*/}
        {/*<SideLabelFormField*/}
        {/*  customFieldStyle={styles.field}*/}
        {/*  fieldLabel="Opex inefficiency"*/}
        {/*  fieldName="opexInefficiency"*/}
        {/*  isDisabled*/}
        {/*/>*/}
        {/*<SideLabelFormField*/}
        {/*  customFieldStyle={styles.field}*/}
        {/*  fieldLabel="Capex"*/}
        {/*  fieldName="capex"*/}
        {/*  isDisabled*/}
        {/*/>*/}
        {/*<SideLabelFormField*/}
        {/*  customFieldStyle={styles.field}*/}
        {/*  fieldLabel="Is a lift management system required?"*/}
        {/*  fieldName="isLiftManagementSystemRequired"*/}
        {/*  isDisabled*/}
        {/*/>*/}
        <SideLabelFormSelectField
          formikChangeHandler={formikChangeHandler}
          customFieldStyle={styles.field}
          fieldLabel="Is it feasible to install PV?"
          fieldName="isItFeasibleToInstallPV"
          initialValue={
            assumptionFormValues.isItFeasibleToInstallPV !== ""
              ? assumptionFormValues.isItFeasibleToInstallPV
              : "none"
          }
          fieldPlaceholder="Select"
          options={["Yes", "No"]}
        />
        <SideLabelFormSelectField
          formikChangeHandler={formikChangeHandler}
          customFieldStyle={styles.field}
          fieldLabel="Do safety regulations recommend that security systems are stand alone? "
          fieldName="securitySystemsStandAlone"
          initialValue={
            assumptionFormValues.securitySystemsStandAlone !== ""
              ? assumptionFormValues.securitySystemsStandAlone
              : "none"
          }
          fieldPlaceholder="Select"
          options={["Yes", "No"]}
        />
        <SideLabelFormSelectField
          formikChangeHandler={formikChangeHandler}
          customFieldStyle={styles.field}
          fieldLabel="Is there Domestic Hot Water (DHW) production on site or is DHW provided through boilers to the tenants?"
          fieldName="dhw"
          initialValue={
            assumptionFormValues.dhw !== "" ? assumptionFormValues.dhw : "none"
          }
          fieldPlaceholder="Select"
          options={["Yes", "No"]}
        />
        <SideLabelFormField
          customFieldStyle={styles.field}
          fieldLabel="How many car places are there on site?"
          fieldName="carPlacesNo"
          type="number"
        />
        <SideLabelFormField
          customFieldStyle={styles.field}
          fieldLabel="Required percentage of spaces covered by EV"
          fieldName="spacesCoveredbyEVPercentage"
          type="number"
          unit="%"
        />
        <SideLabelFormSelectField
          formikChangeHandler={formikChangeHandler}
          customFieldStyle={styles.field}
          fieldLabel="Are there more than one fiber / network connections?"
          fieldName="diversityOfNetworkConnections"
          initialValue={
            assumptionFormValues.diversityOfNetworkConnections !== ""
              ? assumptionFormValues.diversityOfNetworkConnections
              : "none"
          }
          fieldPlaceholder="Select"
          options={["Yes", "No"]}
        />
        <SideLabelFormSelectField
          formikChangeHandler={formikChangeHandler}
          customFieldStyle={styles.field}
          fieldLabel="Is there carbon footprint engagement program for the asset?"
          fieldName="carbonFootprintEngagement"
          initialValue={
            assumptionFormValues.carbonFootprintEngagement !== ""
              ? assumptionFormValues.carbonFootprintEngagement
              : "none"
          }
          fieldPlaceholder="Select"
          options={["Yes", "No"]}
        />
        <SideLabelFormSelectField
          formikChangeHandler={formikChangeHandler}
          customFieldStyle={styles.field}
          fieldLabel="Is there a cybersecurity consultant on the building? (standing asset)"
          fieldName="cybersecurityConsultant"
          initialValue={
            assumptionFormValues.cybersecurityConsultant !== ""
              ? assumptionFormValues.cybersecurityConsultant
              : "none"
          }
          fieldPlaceholder="Select"
          options={["Yes", "No"]}
        />
        <SideLabelFormSelectField
          formikChangeHandler={formikChangeHandler}
          customFieldStyle={styles.field}
          fieldLabel="Is there an IT / data engineer on the building? (standing asset)"
          fieldName="ITDataEngineer"
          initialValue={
            assumptionFormValues.ITDataEngineer !== ""
              ? assumptionFormValues.ITDataEngineer
              : "none"
          }
          fieldPlaceholder="Select"
          options={["Yes", "No"]}
        />
        <SideLabelFormSelectField
          formikChangeHandler={formikChangeHandler}
          customFieldStyle={styles.field}
          fieldLabel="Is there a cybersecurity consultant on the design team (new development or major refurb)?"
          fieldName="cybersecurityConsultantOnDesignTeam"
          initialValue={
            assumptionFormValues.cybersecurityConsultantOnDesignTeam !== ""
              ? assumptionFormValues.cybersecurityConsultantOnDesignTeam
              : "none"
          }
          fieldPlaceholder="Select"
          options={["Yes", "No"]}
        />
        <SideLabelFormSelectField
          formikChangeHandler={formikChangeHandler}
          customFieldStyle={styles.field}
          fieldLabel="Is there an IT / data engineer on the building? (new development or major refurb)?"
          fieldName="ITDataEngineerDesignTeam"
          initialValue={
            assumptionFormValues.ITDataEngineerDesignTeam !== ""
              ? assumptionFormValues.ITDataEngineerDesignTeam
              : "none"
          }
          fieldPlaceholder="Select"
          options={["Yes", "No"]}
        />
        <SideLabelFormSelectField
          formikChangeHandler={formikChangeHandler}
          customFieldStyle={styles.field}
          fieldLabel="Is there a smart building strategy in place?"
          fieldName="smartStrategy"
          initialValue={
            assumptionFormValues.smartStrategy !== ""
              ? assumptionFormValues.smartStrategy
              : "none"
          }
          fieldPlaceholder="Select"
          options={["Yes", "No"]}
        />
        <SideLabelFormSelectField
          formikChangeHandler={formikChangeHandler}
          customFieldStyle={styles.field}
          fieldLabel="Approach"
          fieldName="approach"
          initialValue={
            assumptionFormValues.approach !== ""
              ? assumptionFormValues.approach
              : "none"
          }
          fieldPlaceholder="Select"
          options={["Minimum", "Optimum"]}
        />
        {/*<SideLabelFormField
            customFieldStyle={styles.field}
            fieldLabel="Total user stories"
            fieldName="TotalUserStories"
            type="number"
        />*/}
        {/*<SideLabelFormField*/}
        {/*    customFieldStyle={styles.field}*/}
        {/*    fieldLabel="User stories with 2 levels (rather than 3)"*/}
        {/*    fieldName="UserStoriesWithTwolevelsNotThree"*/}
        {/*    type="number"*/}
        {/*/>*/}
      </div>
    </div>
  );
};

export default RationaleInputsForm;

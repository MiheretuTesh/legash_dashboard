import React, { useEffect } from "react";
import { AssumtionFormValues } from "../../types";
import SideLabelFormField from "../SideLabelFormField";
import SideLabelFormSelectField from "../SideLabelFormSelectField";
import { useStyles } from "./index.style";

interface VariableInputsFormProp {
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
const VariableInputsForm = ({
  assumptionFormValues,
  assumptionFormSetFieldValue,
  formikChangeHandler,
}: VariableInputsFormProp) => {
  const styles = useStyles();

  useEffect(() => {
    assumptionFormSetFieldValue(
      "capacityInstalled",
      Math.fround(
        +assumptionFormValues.opexAssumptionTotalSQM /
          +assumptionFormValues.outputPSM
      )
    );
  }, [
    assumptionFormSetFieldValue,
    assumptionFormValues.opexAssumptionTotalSQM,
    assumptionFormValues.outputPSM,
  ]);

  useEffect(() => {
    assumptionFormSetFieldValue(
      "maintenanceCosts",
      Math.fround((+assumptionFormValues.buildingTotalSQM / 5) * 5.5)
    );
  }, [
      assumptionFormSetFieldValue,
      assumptionFormValues.buildingTotalSQM
  ]);

  return (
    <div className={styles.container}>
      <h2 className={styles.headerTxt}>Solar PV installation</h2>
      <div className={styles.fieldsContainer}>
        <SideLabelFormSelectField
          formikChangeHandler={formikChangeHandler}
          customFieldStyle={styles.field}
          fieldLabel="Asset class"
          fieldName="assetClass"
          initialValue={
            assumptionFormValues.assetClass !== ""
              ? assumptionFormValues.assetClass
              : "none"
          }
          fieldPlaceholder="Select the class"
          options={["Residential", "Office", "Hotels", "Retail", "Logistics"]}
        />
        <SideLabelFormSelectField
          formikChangeHandler={formikChangeHandler}
          customFieldStyle={styles.field}
          fieldLabel="Country"
          fieldName="country"
          initialValue={
            assumptionFormValues.country !== ""
              ? assumptionFormValues.country
              : "none"
          }
          fieldPlaceholder="Select the country"
          options={["Germany", "France", "Italy", "Austria", "UK"]}
        />
        <SideLabelFormField
          customFieldStyle={styles.field}
          fieldLabel="Total PV installation area"
          fieldName="TotalSqm"
          type="number"
        />
        {/*<SideLabelFormField*/}
        {/*  customFieldStyle={styles.field}*/}
        {/*  fieldLabel="PPA Supplier"*/}
        {/*  fieldName="ppaSupplier"*/}
        {/*/>*/}
        {/*<SideLabelFormField*/}
        {/*  customFieldStyle={styles.field}*/}
        {/*  fieldLabel="Building: 1KW plant annual output"*/}
        {/*  fieldName="plantAnnualOutput"*/}
        {/*  type="number"*/}
        {/*/>*/}
        {/*<SideLabelFormField*/}
        {/*  customFieldStyle={styles.field}*/}
        {/*  fieldLabel="Building: Total SQM"*/}
        {/*  fieldName="buildingTotalSQM"*/}
        {/*  type="number"*/}
        {/*/>*/}
        {/*<SideLabelFormField*/}
        {/*    customFieldStyle={styles.field}*/}
        {/*    fieldLabel="Total Sqm"*/}
        {/*    fieldName="TotalSqm"*/}
        {/*    type="number"*/}
        {/*/>*/}
        {/*<SideLabelFormField
          customFieldStyle={styles.field}
          fieldLabel="Opex Assumptions: Year 1 PV decay"
          fieldName="year1PvDecay"
          type="number"
          unit="%"
        />
        <SideLabelFormField
          customFieldStyle={styles.field}
          fieldLabel="Opex Assumptions: PV degradation rate p.a."
          fieldName="degradationRate"
          type="number"
          unit="%"
        />*/}
        {/*<SideLabelFormField*/}
        {/*  customFieldStyle={styles.field}*/}
        {/*  fieldLabel="Opex Assumptions: Total SQM"*/}
        {/*  fieldName="opexAssumptionTotalSQM"*/}
        {/*  type="number"*/}
        {/*/>*/}
        {/*<SideLabelFormField*/}
        {/*  customFieldStyle={styles.field}*/}
        {/*  fieldLabel="Opex Assumptions: KW output PSM"*/}
        {/*  fieldName="outputPSM"*/}
        {/*  type="number"*/}
        {/*/>*/}
        {/*<SideLabelFormField*/}
        {/*  customFieldStyle={styles.field}*/}
        {/*  fieldLabel="Opex Assumptions: Capacity installed (KW)"*/}
        {/*  fieldName="capacityInstalled"*/}
        {/*  isDisabled*/}
        {/*/>*/}
        {/*<SideLabelFormField*/}
        {/*  customFieldStyle={styles.field}*/}
        {/*  fieldLabel="Opex Assumptions: Maintenance costs p.a."*/}
        {/*  fieldName="maintenanceCosts"*/}
        {/*  isDisabled*/}
        {/*/>*/}

        {/*<SideLabelFormField*/}
        {/*    customFieldStyle={styles.field}*/}
        {/*    fieldLabel="Maintenance costs p.a."*/}
        {/*    fieldName="MaintenanceCcostspa"*/}
        {/*    type="number"*/}
        {/*/>*/}
        {/*<SideLabelFormField*/}
        {/*    customFieldStyle={styles.field}*/}
        {/*    fieldLabel="Total Sqm"*/}
        {/*    fieldName="TotalSQM2"*/}
        {/*    type="number"*/}
        {/*/>*/}
        {/*<SideLabelFormField*/}
        {/*    customFieldStyle={styles.field}*/}
        {/*    fieldLabel="Total tarrif (euros)"*/}
        {/*    fieldName="TotalTarrifeuros"*/}
        {/*    type="number"*/}
        {/*/>*/}
        {/*<SideLabelFormField*/}
        {/*    customFieldStyle={styles.field}*/}
        {/*    fieldLabel="Energy price (cents)"*/}
        {/*    fieldName="EnergyPricecents"*/}
        {/*    type="number"*/}
        {/*/>*/}
        <SideLabelFormField
            customFieldStyle={styles.field}
            fieldLabel="Inflation Rate"
            fieldName="inflationRate"
            type="number"
            unit="%"
        />
        {/*<SideLabelFormField*/}
        {/*    customFieldStyle={styles.field}*/}
        {/*    fieldLabel="kwh per annum per square foot (new)"*/}
        {/*    fieldName="kwhPerAnnumPerSquareFootNew"*/}
        {/*    type="number"*/}
        {/*/>*/}
        {/*<SideLabelFormField*/}
        {/*    customFieldStyle={styles.field}*/}
        {/*    fieldLabel="kwh per annum per square foot (existing)"*/}
        {/*    fieldName="kwhPerAnnumPerSquareFootExisting"*/}
        {/*    type="number"*/}
        {/*/>*/}
        {/*<SideLabelFormField*/}
        {/*  customFieldStyle={styles.field}*/}
        {/*  fieldLabel="Financing Assumptions: Debt percentage"*/}
        {/*  fieldName="debtPercentage"*/}
        {/*  type="number"*/}
        {/*  unit="%"*/}
        {/*/>*/}
        {/*<SideLabelFormField*/}
        {/*  customFieldStyle={styles.field}*/}
        {/*  fieldLabel="Financing Assumptions: Interest percentage"*/}
        {/*  fieldName="interestPercentage"*/}
        {/*  type="number"*/}
        {/*  unit="%"*/}
        {/*/>*/}
        {/*<SideLabelFormField*/}
        {/*  customFieldStyle={styles.field}*/}
        {/*  fieldLabel="Financing Assumptions: Amortization"*/}
        {/*  fieldName="amortization"*/}
        {/*  type="number"*/}
        {/*/>*/}
        {/*<SideLabelFormField*/}
        {/*  customFieldStyle={styles.field}*/}
        {/*  fieldLabel="Financing Assumptions: Duration"*/}
        {/*  fieldName="duration"*/}
        {/*  type="number"*/}
        {/*/>*/}
        {/*<SideLabelFormSelectField*/}
        {/*  formikChangeHandler={formikChangeHandler}*/}
        {/*  customFieldStyle={styles.field}*/}
        {/*  fieldLabel="Exit Assumptions: Exit Method"*/}
        {/*  fieldName="exitMethod"*/}
        {/*  initialValue={*/}
        {/*    assumptionFormValues.exitMethod !== ""*/}
        {/*      ? assumptionFormValues.exitMethod*/}
        {/*      : "none"*/}
        {/*  }*/}
        {/*  fieldPlaceholder="Select method"*/}
        {/*  options={["Sale", "Hold"]}*/}
        {/*/>*/}
        {/*<SideLabelFormField*/}
        {/*  customFieldStyle={styles.field}*/}
        {/*  fieldLabel="Exit Assumptions: Exit Year"*/}
        {/*  fieldName="exitYear"*/}
        {/*  type="number"*/}
        {/*/>*/}
        {/*<SideLabelFormField*/}
        {/*  customFieldStyle={styles.field}*/}
        {/*  fieldLabel="Exit Assumptions: Plant Value Residual Percentage"*/}
        {/*  fieldName="plantValueResidualPercentage"*/}
        {/*  type="number"*/}
        {/*  unit="%"*/}
        {/*/>*/}
        {/*<SideLabelFormField*/}
        {/*  customFieldStyle={styles.field}*/}
        {/*  fieldLabel="Exit Assumptions: Battery Value Residual Percentage"*/}
        {/*  fieldName="batteryValueResidualPercentage"*/}
        {/*  type="number"*/}
        {/*  unit="%"*/}
        {/*/>*/}
        {/*<SideLabelFormField*/}
        {/*    customFieldStyle={styles.field}*/}
        {/*    fieldLabel="Days of battery autonomy autonomy"*/}
        {/*    fieldName="DaysOfBatteryAutonomyAutonomy"*/}
        {/*    type="number"*/}
        {/*/>*/}
        <SideLabelFormField
            customFieldStyle={styles.field}
            fieldLabel="kWh per year ouput (IMPUT FROM WEBSITE)"
            fieldName="kWhPerYearOuputIMPUTFROMWEBSITE"
            type="number"
        />

      </div>
    </div>
  );
};

export default VariableInputsForm;

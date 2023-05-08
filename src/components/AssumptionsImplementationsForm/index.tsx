/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { AssumtionFormValues } from "../../types";
import FormField from "../FormField";
import { useStyles } from "./index.style";

interface AssumptionsImplementationsFormProps {
  assumptionFormValues: AssumtionFormValues;
  assumptionFormSetFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => void;
}

const AssumptionsImplementationsForm = ({
  assumptionFormValues,
  assumptionFormSetFieldValue,
}: AssumptionsImplementationsFormProps) => {
  const styles = useStyles();

  useEffect(() => {
    assumptionFormSetFieldValue(
      "phaseOneEndYear",
      +assumptionFormValues.phaseOneYears + +assumptionFormValues.startYear
    );
  }, [assumptionFormValues.phaseOneYears, assumptionFormValues.startYear]);

  useEffect(() => {
    assumptionFormSetFieldValue(
      "phaseTwoEndYear",
      +assumptionFormValues.phaseTwoYears + +assumptionFormValues.startYear
    );
  }, [assumptionFormValues.phaseTwoYears, assumptionFormValues.startYear]);

  useEffect(() => {
    assumptionFormSetFieldValue(
      "phaseThreeEndYear",
      +assumptionFormValues.phaseThreeYears + +assumptionFormValues.startYear
    );
  }, [assumptionFormValues.phaseThreeYears, assumptionFormValues.startYear]);

  useEffect(() => {
    assumptionFormSetFieldValue(
      "totalYears",
      +assumptionFormValues.phaseOneYears +
        +assumptionFormValues.phaseTwoYears +
        +assumptionFormValues.phaseThreeYears
    );
  }, [
    assumptionFormValues.phaseOneYears,
    assumptionFormValues.phaseTwoYears,
    assumptionFormValues.phaseThreeYears,
  ]);

  useEffect(() => {
    assumptionFormSetFieldValue(
      "totalRentIncreasePercentage",
      +assumptionFormValues.phaseOneRentIncreasePercentage +
        +assumptionFormValues.phaseTwoRentIncreasePercentage +
        +assumptionFormValues.phaseThreeRentIncreasePercentage
    );
  }, [
    assumptionFormValues.phaseOneRentIncreasePercentage,
    assumptionFormValues.phaseTwoRentIncreasePercentage,
    assumptionFormValues.phaseThreeRentIncreasePercentage,
  ]);

  useEffect(() => {
    assumptionFormSetFieldValue(
      "totalRentRollcoveredPercentage",
      +assumptionFormValues.phaseOneRentRollcoveredPercentage +
        +assumptionFormValues.phaseTwoRentRollcoveredPercentage +
        +assumptionFormValues.phaseThreeRentRollcoveredPercentage
    );
  }, [
    assumptionFormValues.phaseOneRentRollcoveredPercentage,
    assumptionFormValues.phaseTwoRentRollcoveredPercentage,
    assumptionFormValues.phaseThreeRentRollcoveredPercentage,
  ]);
  return (
    <div className={styles.container}>
      <h2 className={styles.headerTxt}>Assumptions Implementations</h2>
      <div className={styles.tableContainer}>
        <table style={{ width: "100%" }}>
          <thead>
          <tr className={styles.labelsContainer}>
            <td className={`${styles.label}`}>Features</td>
            <td className={`${styles.label}`}>Years</td>
            <td className={`${styles.label}`}>End Year</td>
            <td className={`${styles.label}`}>% Rent Increase</td>
            <td className={`${styles.label}`}>% Rent roll covered</td>
          </tr>
          </thead>
          <thead>
          <tr className={styles.rowContainer}>
            <td className={styles.propertyName}>Phase 1</td>
            <td>
              <FormField
                fieldName="phaseOneYears"
                customStyle={styles.rowField}
                type="number"
              />
            </td>
            <td>
              <FormField
                fieldName="phaseOneEndYear"
                customStyle={styles.rowField}
                isDisabled
              />
            </td>
            <td>
              <FormField
                fieldName="phaseOneRentIncreasePercentage"
                customStyle={styles.rowField}
                type="number"
              />
            </td>
            <td>
              <FormField
                fieldName="phaseOneRentRollcoveredPercentage"
                customStyle={styles.rowField}
                type="number"
              />
            </td>
          </tr>
          </thead>
          <thead>
          <tr className={styles.rowContainer}>
            <td className={styles.propertyName}>Phase 2</td>
            <td>
              <FormField
                fieldName="phaseTwoYears"
                customStyle={styles.rowField}
                type="number"
              />
            </td>
            <td>
              <FormField
                fieldName="phaseTwoEndYear"
                customStyle={styles.rowField}
                isDisabled
              />
            </td>
            <td>
              <FormField
                fieldName="phaseTwoRentIncreasePercentage"
                customStyle={styles.rowField}
                type="number"
              />
            </td>
            <td>
              <FormField
                fieldName="phaseTwoRentRollcoveredPercentage"
                customStyle={styles.rowField}
                type="number"
              />
            </td>
          </tr>
          </thead>
          <thead>
          <tr className={styles.rowContainer}>
            <td className={styles.propertyName}>Phase 3</td>
            <td>
              <FormField
                fieldName="phaseThreeYears"
                customStyle={styles.rowField}
                type="number"
              />
            </td>
            <td>
              <FormField
                fieldName="phaseThreeEndYear"
                customStyle={styles.rowField}
                isDisabled
              />
            </td>
            <td>
              <FormField
                fieldName="phaseThreeRentIncreasePercentage"
                customStyle={styles.rowField}
                type="number"
              />
            </td>
            <td>
              <FormField
                fieldName="phaseThreeRentRollcoveredPercentage"
                customStyle={styles.rowField}
                type="number"
              />
            </td>
          </tr>
          </thead>
          <thead>
          <tr className={styles.rowContainer}>
            <td className={styles.propertyName}>Total</td>
            <td>
              <FormField
                fieldName="totalYears"
                customStyle={styles.rowField}
                isDisabled
              />
            </td>
            <td>
              <FormField
                fieldName="none"
                customStyle={styles.rowField}
                isDisabled
              />
            </td>
            <td>
              <FormField
                fieldName="totalRentIncreasePercentage"
                customStyle={styles.rowField}
                isDisabled
              />
            </td>
            <td>
              <FormField
                fieldName="totalRentRollcoveredPercentage"
                customStyle={styles.rowField}
                isDisabled
              />
            </td>
          </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default AssumptionsImplementationsForm;

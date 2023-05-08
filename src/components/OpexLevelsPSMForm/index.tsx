/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { AssumtionFormValues } from "../../types";
import FormField from "../FormField";
import SideLabelFormField from "../SideLabelFormField";
import { useStyles } from "./index.style";

interface OpexLevelsPSMFormProps {
  assumptionFormValues: AssumtionFormValues;
  assumptionFormSetFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => void;
}

const OpexLevelsPSMForm = ({
  assumptionFormValues,
  assumptionFormSetFieldValue,
}: OpexLevelsPSMFormProps) => {
  const styles = useStyles();

  useEffect(() => {
    assumptionFormSetFieldValue(
      "inBetweenLowMediumPSM",
      +assumptionFormValues.minLowPSMLevel + +assumptionFormValues.psmInterval
    );
  }, [assumptionFormValues.minLowPSMLevel, assumptionFormValues.psmInterval]);

  useEffect(() => {
    assumptionFormSetFieldValue(
      "mediumPSMLevel",
      +assumptionFormValues.inBetweenLowMediumPSM + 0.05
    );
  }, [assumptionFormValues.inBetweenLowMediumPSM]);

  useEffect(() => {
    assumptionFormSetFieldValue(
      "inBetweenMediumHighPSM",
      +assumptionFormValues.mediumPSMLevel + +assumptionFormValues.psmInterval
    );
  }, [assumptionFormValues.mediumPSMLevel, assumptionFormValues.psmInterval]);

  useEffect(() => {
    assumptionFormSetFieldValue(
      "highPSMLevel",
      +assumptionFormValues.inBetweenMediumHighPSM + 0.05
    );
  }, [assumptionFormValues.inBetweenMediumHighPSM]);

  return (
    <div className={styles.container}>
      <h2 className={styles.headerTxt}>Opex Levels PSM</h2>
      <div className={styles.tableContainer}>
        <table style={{ width: "100%" }}>
          <thead>
          <tr className={styles.labelsContainer}>
            <td className={`${styles.label}`}>Min/Low</td>
            <td className={`${styles.label}`}> </td>
            <td className={`${styles.label}`}>Medium</td>
            <td className={`${styles.label}`}> </td>
            <td className={`${styles.label}`}>High</td>
            <td className={`${styles.label}`}>Max</td>
          </tr>
          </thead>
          <thead>
          <tr className={styles.rowContainer}>
            <td>
              <FormField
                fieldName="minLowPSMLevel"
                customStyle={styles.rowField}
                type="number"
              />
            </td>
            <td>
              <FormField
                fieldName="inBetweenLowMediumPSM"
                customStyle={styles.rowField}
                isDisabled
              />
            </td>
            <td>
              <FormField
                fieldName="mediumPSMLevel"
                customStyle={styles.rowField}
                isDisabled
              />
            </td>
            <td>
              <FormField
                fieldName="inBetweenMediumHighPSM"
                customStyle={styles.rowField}
                isDisabled
              />
            </td>
            <td>
              <FormField
                fieldName="highPSMLevel"
                customStyle={styles.rowField}
                isDisabled
              />
            </td>
            <td>
              <FormField
                fieldName="maxPSMLevel"
                customStyle={styles.rowField}
                type="number"
              />
            </td>
          </tr>
          </thead>
        </table>
        <SideLabelFormField
          customStyle={styles.intervalField}
          fieldName="psmInterval"
          fieldLabel="Interval"
          type="number"
        />
      </div>
    </div>
  );
};

export default OpexLevelsPSMForm;

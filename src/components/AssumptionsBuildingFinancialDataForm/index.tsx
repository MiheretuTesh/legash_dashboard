/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { AssumtionFormValues } from "../../types";
import FormField from "../FormField";
import { useStyles } from "./index.style";

interface AssumptionsBuildingFinancialDataFormProps {
  assumptionFormValues: AssumtionFormValues;
  assumptionFormSetFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => void;
}

const AssumptionsBuildingFinancialDataForm = ({
  assumptionFormValues,
  assumptionFormSetFieldValue,
}: AssumptionsBuildingFinancialDataFormProps) => {
  const styles = useStyles();

  const onTotalLettableAreaSQMBlur = () => {
    assumptionFormSetFieldValue(
      "totalLettableAreaSQFT",
      parseFloat((+assumptionFormValues.totalLettableAreaSQM * 10.764).toFixed(2))
    );
    assumptionFormSetFieldValue(
      "totalBuildingAreaSQM",
      +assumptionFormValues.commonAreaSQM +
        +assumptionFormValues.totalLettableAreaSQM
    );
  };

  const onTotalLettableAreaSQFTBlur = () => {
    assumptionFormSetFieldValue(
      "totalLettableAreaSQM",
      parseFloat((+assumptionFormValues.totalLettableAreaSQFT / 10.764).toFixed(2))
    );
    assumptionFormSetFieldValue(
      "totalBuildingAreaSQFT",
      parseFloat((+assumptionFormValues.commonAreaSQFT +
          +assumptionFormValues.totalLettableAreaSQFT).toFixed(2))
    );
  };

  const onCommonAreaSQMBlur = () => {
    assumptionFormSetFieldValue(
      "commonAreaSQFT",
      parseFloat((+assumptionFormValues.commonAreaSQM * 10.764).toFixed(2))
    );
    assumptionFormSetFieldValue(
      "totalBuildingAreaSQM",
      +assumptionFormValues.commonAreaSQM +
        +assumptionFormValues.totalLettableAreaSQM
    );
  };

  const onCommonAreaSQFTBlur = () => {
    assumptionFormSetFieldValue(
      "commonAreaSQM",
      parseFloat((+assumptionFormValues.commonAreaSQFT / 10.764).toFixed(2))
    );
    assumptionFormSetFieldValue(
      "totalBuildingAreaSQFT",
      +assumptionFormValues.commonAreaSQFT +
        +assumptionFormValues.totalLettableAreaSQFT
    );
  };

  const onERVUponStabilizationTotalBlur = () => {
    assumptionFormSetFieldValue(
      "ervUponStabilizationSQM",
      parseFloat((
          +assumptionFormValues.ervUponStabilizationTotal /
          +assumptionFormValues.totalLettableAreaSQM
      ).toFixed(2))
    );
    assumptionFormSetFieldValue(
      "ervUponStabilizationSQFT",
      parseFloat((
          +assumptionFormValues.ervUponStabilizationTotal /
          +assumptionFormValues.totalLettableAreaSQFT
      ).toFixed(2))
    );
  };

  const onOpexSQMBlur = () => {
    assumptionFormSetFieldValue(
      "opexTotal",
      parseFloat((
          +assumptionFormValues.opexSQM *
          +assumptionFormValues.totalBuildingAreaSQM
      ).toFixed(2))
    );
    assumptionFormSetFieldValue(
      "opexSQFT",
      parseFloat((
          (+assumptionFormValues.opexSQM *
              +assumptionFormValues.totalBuildingAreaSQM) /
          +assumptionFormValues.totalBuildingAreaSQFT
      ).toFixed(2))
    );
  };

  // const onNewBuildCostsSQMBlur = () => {
  //   assumptionFormSetFieldValue(
  //     "newBuildCostsSQFT",
  //     (+assumptionFormValues.newBuildCostsSQM * 10.764).toFixed(2)
  //   );
  //   assumptionFormSetFieldValue(
  //     "newBuildCostsTotal",
  //     (
  //       +assumptionFormValues.newBuildCostsSQM *
  //       +assumptionFormValues.totalBuildingAreaSQM
  //     ).toFixed(2)
  //   );
  // };

  return (
    <div className={styles.container}>
      <h2 className={styles.headerTxt}>Assumptions Building Financial Data</h2>
      <div className={styles.tableContainer}>
        <table style={{ width: "100%" }}>
          <thead>
          <tr className={styles.labelsContainer}>
            <td className={`${styles.label}`}>Item</td>
            <td className={`${styles.label}`}/>
            <td className={`${styles.label}`}/>
            <td className={`${styles.label}`}>Total</td>
          </tr>
          </thead>
          <thead>
          <tr className={styles.rowContainer}>
            <td className={styles.propertyName}>Total Lettable Area</td>
            <td>
              <FormField
                fieldName="totalLettableAreaSQM"
                customStyle={styles.rowField}
                type="number"
                unit="SQM"
                onBlurHandler={onTotalLettableAreaSQMBlur}
              />
            </td>
            <td>
              <FormField
                fieldName="totalLettableAreaSQFT"
                customStyle={styles.rowField}
                type="number"
                unit="SQ.FT"
                onBlurHandler={onTotalLettableAreaSQFTBlur}
              />
            </td>
            <td>
              <FormField
                fieldName="none"
                customStyle={styles.rowField}
                isDisabled
              />
            </td>
          </tr>
          </thead>
          <thead>
          <tr className={styles.rowContainer}>
            <td className={styles.propertyName}>Common Area</td>
            <td>
              <FormField
                fieldName="commonAreaSQM"
                customStyle={styles.rowField}
                type="number"
                unit="SQM"
                onBlurHandler={onCommonAreaSQMBlur}
              />
            </td>
            <td>
              <FormField
                fieldName="commonAreaSQFT"
                customStyle={styles.rowField}
                type="number"
                unit="SQ.FT"
                onBlurHandler={onCommonAreaSQFTBlur}
              />
            </td>
            <td>
              <FormField
                fieldName="none"
                customStyle={styles.rowField}
                isDisabled
              />
            </td>
          </tr>
          </thead>
          <thead>
          <tr className={styles.rowContainer}>
            <td className={styles.propertyName}>Total Building Area</td>
            <td>
              <FormField
                fieldName="totalBuildingAreaSQM"
                customStyle={styles.rowField}
                type="number"
                unit="SQM"
                isDisabled
              />
            </td>
            <td>
              <FormField
                fieldName="totalBuildingAreaSQFT"
                customStyle={styles.rowField}
                type="number"
                unit="SQ.FT"
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
          </tr>
          </thead>
          <thead>
          <tr className={styles.rowContainer}>
            <td className={styles.propertyName}>Total ERV upon stabilization or passing rent</td>
            <td>
              <FormField
                fieldName="ervUponStabilizationSQM"
                customStyle={styles.rowField}
                isDisabled
              />
            </td>
            <td>
              <FormField
                fieldName="ervUponStabilizationSQFT"
                customStyle={styles.rowField}
                isDisabled
              />
            </td>
            <td>
              <FormField
                fieldName="ervUponStabilizationTotal"
                customStyle={styles.rowField}
                type="number"
                onBlurHandler={onERVUponStabilizationTotalBlur}
              />
            </td>
          </tr>
          </thead>
          
          <thead>
          <tr className={styles.rowContainer}>
            <td className={styles.propertyName}>Total building operating costs</td>
            <td>
              <FormField
                fieldName="opexSQM"
                customStyle={styles.rowField}
                type="number"
                onBlurHandler={onOpexSQMBlur}
              />
            </td>
            <td>
              <FormField
                fieldName="opexSQFT"
                customStyle={styles.rowField}
                isDisabled
              />
            </td>
            <td>
              <FormField
                fieldName="opexTotal"
                customStyle={styles.rowField}
                isDisabled
              />
            </td>
          </tr>
          </thead>
          {/*<tr className={styles.rowContainer}>*/}
          {/*  <td className={styles.propertyName}>New Build Costs</td>*/}
          {/*  <td>*/}
          {/*    <FormField*/}
          {/*      fieldName="newBuildCostsSQM"*/}
          {/*      customStyle={styles.rowField}*/}
          {/*      type="number"*/}
          {/*      onBlurHandler={onNewBuildCostsSQMBlur}*/}
          {/*    />*/}
          {/*  </td>*/}
          {/*  <td>*/}
          {/*    <FormField*/}
          {/*      fieldName="newBuildCostsSQFT"*/}
          {/*      customStyle={styles.rowField}*/}
          {/*      isDisabled*/}
          {/*    />*/}
          {/*  </td>*/}
          {/*  <td>*/}
          {/*    <FormField*/}
          {/*      fieldName="newBuildCostsTotal"*/}
          {/*      customStyle={styles.rowField}*/}
          {/*      isDisabled*/}
          {/*    />*/}
          {/*  </td>*/}
          {/*</tr>*/}
        </table>
      </div>
    </div>
  );
};

export default AssumptionsBuildingFinancialDataForm;

import React from "react";
import FormField from "../FormField";
import { useStyles } from "../../styles/NewOnsiteChecklistFormsStyle.style";
import FormSelectField from "../FormSelectField";
import { NewOnSiteChecklistFormProps } from "../../types";
import ImageUploadButton from "../ImageUploadButton";

const DigitalServicesCheckListForm = ({
  formikChangeHandler,
  initialValue,
  placeholder,
  formValues,
}: NewOnSiteChecklistFormProps) => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <h2 className={styles.headerTxt}>Health and Wellbeing</h2>
      <div className={styles.tableContainer}>
        <table style={{ width: "100%", tableLayout: "fixed" }}>
          <thead>
          <tr className={styles.labelsContainer}>
            <td className={`${styles.label}`}>Question</td>
            <td className={`${styles.label}`}>Answer</td>
            <td className={`${styles.label}`}>
              Make/Type/Year of installation
            </td>
            <td className={`${styles.label}`}>
              What is the equipment connected to?
            </td>
            <td className={`${styles.label}`}>Who are the Users?</td>
            <td className={`${styles.label}`}/>
          </tr>
          </thead>

          <thead>
          <tr className={styles.rowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              {/* <p className={styles.typeTxt}>
                Building Users Application Functionality
              </p> */}
              <p className={styles.questionTxt}>
                Do you have a web/phone app for management of site?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormSelectField
                  fieldName="digitalServices1"
                  initialValue={
                  formValues.digitalServices1 !== ""
                    ? formValues.digitalServices1
                    : initialValue
                }
                placeholder={placeholder}
                formikChangeHandler={formikChangeHandler}
                isForm
                customStyle={styles.rowField}
                customDropDownMenuContainerStyle={styles.fieldDropDownContainer}
                options={[
                  "No Building/occupier mobile app",
                  'App has no building systems integration, only "soft" features such as information, events / space booking, etc.',
                  'App is integrated with building systems to provide "core" functionalities such as access control',
                  "App is integrated with Facility and Property Management with a ticketing system",
                ]}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="digitalServicesInstallation1"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="digitalServicesEquipment1"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="digitalServicesUsers1"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <ImageUploadButton
                customStyle={styles.uploadBtn}
                // icon={<UploadIcon />}
                onClick={() => {}}
                fieldName="digitalServices1Img"
                formValue={formValues["digitalServices1Img"]}
              >
                Upload photo
              </ImageUploadButton>
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                Is it a building system integrated app?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="digitalServices1Q1"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                Are there soft features such as space booking, giving information etc?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="digitalServices1Q2"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                Does it provide functionalities such as access control?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="digitalServices1Q3"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                Is it used by both building management and tenants?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="digitalServices1Q4"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                Is it centrally linked with facility
                management for ticketing system to
                solve issues/problems faced by
                tenants for maintenance?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="digitalServices1Q5"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default DigitalServicesCheckListForm;

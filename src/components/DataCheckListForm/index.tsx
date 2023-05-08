import React from "react";
import FormField from "../FormField";
import { useStyles } from "../../styles/NewOnsiteChecklistFormsStyle.style";
import FormSelectField from "../FormSelectField";
import { NewOnSiteChecklistFormProps } from "../../types";
import ImageUploadButton from "../ImageUploadButton";

const DataCheckListForm = ({
  formikChangeHandler,
  initialValue,
  placeholder,
  formValues,
}: NewOnSiteChecklistFormProps) => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <h2 className={styles.headerTxt}>Data</h2>
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
            <td className={`${styles.label}`}></td>
          </tr>
          </thead>

          <thead>
          <tr className={styles.rowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              {/* <p className={styles.typeTxt}>
                Cloud / Data - Certificates Functionality
              </p> */}
              <p className={styles.questionTxt}>
                How do you manage your security compliance of the data?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormSelectField
                  fieldName="data1"
                  initialValue={
                  formValues.data1 !== "" ? formValues.data1 : initialValue
                }
                placeholder={placeholder}
                formikChangeHandler={formikChangeHandler}
                isForm
                customStyle={styles.rowField}
                customDropDownMenuContainerStyle={styles.fieldDropDownContainer}
                options={[
                  "No Data Security Report",
                  "No GDPR compliance",
                  "N/A",
                  "All smart building equipment/system have GDPR compliance, with report and analysis",
                ]}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="dataInstallation1"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="dataEquipment1"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="dataUsers1"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <ImageUploadButton
                customStyle={styles.uploadBtn}
                // icon={<UploadIcon />}
                onClick={() => {}}
                fieldName="data1Img"
                formValue={formValues["data1Img"]}
              >
                Upload photo
              </ImageUploadButton>
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                Is there a data security report? Is it GDPR compliant?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="data1Q1"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                Do all your systems have compliance with relevant report and
                analytics?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="data1Q2"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          </thead>

          <thead>
          <tr className={styles.rowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              {/* <p className={styles.typeTxt}>
                Building Data Storage Functionality
              </p> */}
              <p className={styles.questionTxt}>
                How do you store and manage your data?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormSelectField
                  fieldName="data2"
                  initialValue={
                  formValues.data2 !== "" ? formValues.data2 : initialValue
                }
                placeholder={placeholder}
                formikChangeHandler={formikChangeHandler}
                isForm
                customStyle={styles.rowField}
                customDropDownMenuContainerStyle={styles.fieldDropDownContainer}
                options={[
                  "No data storage",
                  "No data storage, only monitoring the status",
                  "BMS stores the data from sensors and equipment with limited (1-month) history",
                  "Fully cloud-based BOS with API data connectivity",
                ]}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="dataInstallation2"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="dataEquipment2"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="dataUsers2"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <ImageUploadButton
                customStyle={styles.uploadBtn}
                onClick={() => {}}
                fieldName="data2Img"
                formValue={formValues["data2Img"]}
              >
                Upload photo
              </ImageUploadButton>
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>Does your BMS store data?</p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="data2Q1"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                If yes, What kind of data and for how long?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="data2Q2"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>Is it cloud based storage?</p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="data2Q3"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          </thead>

          <thead>
          <tr className={styles.rowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              {/* <p className={styles.typeTxt}>
                Building Information Modelling (BIM) Functionality
              </p> */}
              <p className={styles.questionTxt}>
                Do you have a digital twin or a BIM model of the building?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormSelectField
                  fieldName="data3"
                  initialValue={
                  formValues.data3 !== "" ? formValues.data3 : initialValue
                }
                placeholder={placeholder}
                formikChangeHandler={formikChangeHandler}
                isForm
                customStyle={styles.rowField}
                customDropDownMenuContainerStyle={styles.fieldDropDownContainer}
                options={[
                  "No BIM/Digital Twin available (Existing Building)",
                  "No BIM/Digital Twin available (Development Project)",
                  "Implementation of BIM/Digital Twin in use",
                  "Full BIM/Digital Twin on the project",
                ]}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="dataInstallation3"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="dataEquipment3"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="dataUsers3"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <ImageUploadButton
                customStyle={styles.uploadBtn}
                onClick={() => {}}
                fieldName="data3Img"
                formValue={formValues["data3Img"]}
              >
                Upload photo
              </ImageUploadButton>
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                Is it for a existing building or a development project?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="data3Q1"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>Is BIM/digital twin in use?</p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="data3Q2"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                Is BIM/digital twin for the full project?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="data3Q3"
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

export default DataCheckListForm;

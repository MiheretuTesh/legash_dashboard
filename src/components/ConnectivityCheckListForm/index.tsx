import React from "react";
import FormField from "../FormField";
import { useStyles } from "../../styles/NewOnsiteChecklistFormsStyle.style";
import FormSelectField from "../FormSelectField";
import { NewOnSiteChecklistFormProps } from "../../types";
import ImageUploadButton from "../ImageUploadButton";

const ConnectivityCheckListForm = ({
  formikChangeHandler,
  initialValue,
  placeholder,
  formValues,
}: NewOnSiteChecklistFormProps) => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <h2 className={styles.headerTxt}>Connectivity</h2>
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
              {/* <p className={styles.typeTxt}>Cellular Network Coverage</p> */}
              <p className={styles.questionTxt}>
                How is the network coverage? Are phone antennas is place?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormSelectField
                  fieldName="connectivity1"
                  initialValue={
                  formValues.connectivity1 !== ""
                    ? formValues.connectivity1
                    : initialValue
                }
                placeholder={placeholder}
                formikChangeHandler={formikChangeHandler}
                isForm
                customStyle={styles.rowField}
                customDropDownMenuContainerStyle={styles.fieldDropDownContainer}
                options={[
                  "No cellular network coverage",
                  "No additional antennas",
                  "Antennas on common spaces, 4G",
                  "Antennas everywhere, 4G, 5G",
                ]}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="connectivityInstallation1"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="connectivityEquipment1"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="connectivityUsers1"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <ImageUploadButton
                customStyle={styles.uploadBtn}
                // icon={<UploadIcon />}
                onClick={() => {}}
                fieldName="connectivity1Img"
                formValue={formValues["connectivity1Img"]}
              >
                Upload photo
              </ImageUploadButton>
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                How is the network and data coverage on your phone across
                floors, basement
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="connectivity1Q1"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          </thead>

          <thead>
          <tr className={styles.rowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              {/* <p className={styles.typeTxt}>Wi-Fi Coverage</p> */}
              <p className={styles.questionTxt}>
                Do you have Wi-Fi coverage in the building? If yes, where?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormSelectField
                  fieldName="connectivity2"
                  initialValue={
                  formValues.connectivity2 !== ""
                    ? formValues.connectivity2
                    : initialValue
                }
                placeholder={placeholder}
                formikChangeHandler={formikChangeHandler}
                isForm
                customStyle={styles.rowField}
                customDropDownMenuContainerStyle={styles.fieldDropDownContainer}
                options={[
                  "No wifi coverage",
                  "Wifi on common areas - upper floors only",
                  "Wifi on all common areas",
                  "Wifi on common areas and tenant areas",
                ]}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="connectivityInstallation2"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="connectivityEquipment2"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="connectivityUsers2"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <ImageUploadButton
                customStyle={styles.uploadBtn}
                onClick={() => {}}
                fieldName="connectivity2Img"
                formValue={formValues["connectivity2Img"]}
              >
                Upload photo
              </ImageUploadButton>
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                Does building Wi-Fi cover all common spaces?
                Or does it partially cover common spaces?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="connectivity2Q1"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                Is building Wi-Fi also available in tenant areas?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="connectivity2Q2"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          </thead>

          <thead>
          <tr className={styles.rowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              {/* <p className={styles.typeTxt}>Fiber Coverage</p> */}
              <p className={styles.questionTxt}>
                Do you have fiber connection?
                Is it with redundancy?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormSelectField
                  fieldName="connectivity3"
                  initialValue={
                  formValues.connectivity3 !== ""
                    ? formValues.connectivity3
                    : initialValue
                }
                placeholder={placeholder}
                formikChangeHandler={formikChangeHandler}
                isForm
                customStyle={styles.rowField}
                customDropDownMenuContainerStyle={styles.fieldDropDownContainer}
                options={[
                  "No fiber connection",
                  "One fiber, no redundancy",
                  "N/A",
                  "Two fiber, redundancy",
                ]}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="connectivityInstallation3"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="connectivityEquipment3"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="connectivityUsers3"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <ImageUploadButton
                customStyle={styles.uploadBtn}
                onClick={() => {}}
                fieldName="connectivity3Img"
                formValue={formValues["connectivity3Img"]}
              >
                Upload photo
              </ImageUploadButton>
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                Which fiber connection? Colt/BT/Vodafone etc.
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="connectivity3Q1"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                Is it one fiber connection or two? If two,
                are these from two different companies and
                two different route in the building for
                their point of entry?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="connectivity3Q2"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          </thead>

          <thead>
          <tr className={styles.rowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              {/* <p className={styles.typeTxt}>IoT Data Outlet Infrastructure</p> */}
              <p className={styles.questionTxt}>
                Where are the data outlets in place?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormSelectField
                  fieldName="connectivity4"
                  initialValue={
                  formValues.connectivity4 !== ""
                    ? formValues.connectivity4
                    : initialValue
                }
                placeholder={placeholder}
                formikChangeHandler={formikChangeHandler}
                isForm
                customStyle={styles.rowField}
                customDropDownMenuContainerStyle={styles.fieldDropDownContainer}
                options={[
                  "None",
                  "Consolidation points / data outlets" +
                  "available to all common areas",
                  "Consolidation points / data outlets available to all common areas and technical rooms (electrical subpanels, BMS cabinets, BMS Controllers) 1 per 150 m2",
                  "Consolidation points / data outlets available to all common areas and technical rooms (electrical subpanels, BMS cabinets, BMS Controllers) 1 per 100 m2 with redundant backbone",
                ]}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="connectivityInstallation4"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="connectivityEquipment4"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="connectivityUsers4"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <ImageUploadButton
                customStyle={styles.uploadBtn}
                onClick={() => {}}
                fieldName="connectivity4Img"
                formValue={formValues["connectivity4Img"]}
              >
                Upload photo
              </ImageUploadButton>
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                From IoT data points infrastructure, what type of equipment is
                in place (Cat 5/6/7/8) and where are they available?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="connectivity4Q1"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                Are these data points available to all common areas?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="connectivity4Q2"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                Is it available in all technical rooms with a
                coverage of say 1 per 100sq.m?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="connectivity4Q3"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                Is there a redundant backbone in place for resiliency?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="connectivity4Q4"
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

export default ConnectivityCheckListForm;

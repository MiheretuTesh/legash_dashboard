import React from "react";
import FormField from "../FormField";
import { useStyles } from "../../styles/NewOnsiteChecklistFormsStyle.style";
import FormSelectField from "../FormSelectField";
import { NewOnSiteChecklistFormProps } from "../../types";
import ImageUploadButton from "../ImageUploadButton";

const HealthAndWellbeingCheckListForm = ({
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
            <td className={`${styles.label}`}></td>
          </tr>
          </thead>

          <thead>
          <tr className={styles.rowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              {/* <p className={styles.typeTxt}>
                Outdoor Air Quality Infrastructure
              </p> */}
              <p className={styles.questionTxt}>
                Do you control outdoor air quality?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormSelectField
                  fieldName="healthAndWellbeing1"
                  initialValue={
                  formValues.healthAndWellbeing1 !== ""
                    ? formValues.healthAndWellbeing1
                    : initialValue
                }
                placeholder={placeholder}
                formikChangeHandler={formikChangeHandler}
                isForm
                customStyle={styles.rowField}
                customDropDownMenuContainerStyle={styles.fieldDropDownContainer}
                options={[
                  "No Outdoor Air Monitoring in-place",
                  "System measures outdoor air pollution (No2 and Co2), VOCs and microbiological components",
                  "System measures outdoor air pollution (No2 and Co2), VOCs and microbiological components; sensors are connected with photovoltaics power and batteries, linked with Wifi to the BMS/BOS",
                  "System measures outdoor air pollution (No2 and Co2), VOCs and microbiological components; sensors are connected with photovoltaics power and batteries, linked with Wifi to the BMS/BOS and connected outdoor air sensors to central supervisory system.",
                ]}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="healthAndWellbeingInstallation1"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="healthAndWellbeingEquipment1"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="healthAndWellbeingUsers1"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <ImageUploadButton
                customStyle={styles.uploadBtn}
                // icon={<UploadIcon />}
                onClick={() => {}}
                fieldName="healthAndWellbeing1Img"
                formValue={formValues["healthAndWellbeing1Img"]}
              >
                Upload photo
              </ImageUploadButton>
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                If yes, What does the system measures? NO2, CO2, VOC's?
                Microbiological components?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="healthAndWellbeing1Q1"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                Is there a dashboard reporting in place?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="healthAndWellbeing1Q2"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          </thead>

          <thead>
          <tr className={styles.rowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              {/* <p className={styles.typeTxt}>IndoorAir Quality Infrastructure</p> */}
              <p className={styles.questionTxt}>
                Do you control indoor air quality? If yes, which sensors?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormSelectField
                  fieldName="healthAndWellbeing2"
                  initialValue={
                  formValues.healthAndWellbeing2 !== ""
                    ? formValues.healthAndWellbeing2
                    : initialValue
                }
                placeholder={placeholder}
                formikChangeHandler={formikChangeHandler}
                isForm
                customStyle={styles.rowField}
                customDropDownMenuContainerStyle={styles.fieldDropDownContainer}
                options={[
                  "No Indoor Air Monitoring in-place",
                  "CO2 and temperature sensors",
                  "CO2, temperature, O2 and humidity, PM2.5",
                  "CO2, temperature, O2, humidity, VOCs, PM2.5 and noise sensors",
                ]}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="healthAndWellbeingInstallation2"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="healthAndWellbeingEquipment2"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="healthAndWellbeingUsers2"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <ImageUploadButton
                customStyle={styles.uploadBtn}
                onClick={() => {}}
                fieldName="healthAndWellbeing2Img"
                formValue={formValues["healthAndWellbeing2Img"]}
              >
                Upload photo
              </ImageUploadButton>
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                If yes, What do they measure (CO2, temperature, humidity, PM2.5, VOC's, noise)?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="healthAndWellbeing2Q1"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                Is there a dashboard reporting in place?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="healthAndWellbeing2Q2"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          </thead>

          <thead>
          <tr className={styles.rowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              {/* <p className={styles.typeTxt}>IndoorAir Quality Coverage</p> */}
              <p className={styles.questionTxt}>
                Are there indoor air quality sensors?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormSelectField
                  fieldName="healthAndWellbeing3"
                  initialValue={
                  formValues.healthAndWellbeing3 !== ""
                    ? formValues.healthAndWellbeing3
                    : initialValue
                }
                placeholder={placeholder}
                formikChangeHandler={formikChangeHandler}
                isForm
                customStyle={styles.rowField}
                customDropDownMenuContainerStyle={styles.fieldDropDownContainer}
                options={[
                  "No Indoor Air Monitoring in-place",
                  "Coverage of air handling unit or other air equipment only",
                  "Coverage of common area, main distribution and air handling unit or other air equipment",
                  "Coverage on common and tenanted area, main distribution and air handling unit or other air equipment",
                ]}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="healthAndWellbeingInstallation3"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="healthAndWellbeingEquipment3"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="healthAndWellbeingUsers3"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <ImageUploadButton
                customStyle={styles.uploadBtn}
                onClick={() => {}}
                fieldName="healthAndWellbeing3Img"
                formValue={formValues["healthAndWellbeing3Img"]}
              >
                Upload photo
              </ImageUploadButton>
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                If yes, is it only for the AHU/air equipment?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="healthAndWellbeing3Q1"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                Is indoor air quality also measured in common areas?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="healthAndWellbeing3Q2"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                Is indoor air quality also measured in tenanted areas?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="healthAndWellbeing3Q3"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          </thead>

          <thead>
          <tr className={styles.rowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              {/* <p className={styles.typeTxt}>IndoorAir Quality Functionality</p> */}
              <p className={styles.questionTxt}>
                How is the air quality documented and reported for monitoring/tracking?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormSelectField
                  fieldName="healthAndWellbeing4"
                  initialValue={
                  formValues.healthAndWellbeing4 !== ""
                    ? formValues.healthAndWellbeing4
                    : initialValue
                }
                placeholder={placeholder}
                formikChangeHandler={formikChangeHandler}
                isForm
                customStyle={styles.rowField}
                customDropDownMenuContainerStyle={styles.fieldDropDownContainer}
                options={[
                  "No Indoor Air Quality System in-place",
                  "A dashboard which is not connected to main system",
                  "A supervisory system (BMS) with manual optimization.",
                  "A supervisory system (BMS) with automatic optimization.",
                ]}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="healthAndWellbeingInstallation4"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="healthAndWellbeingEquipment4"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="healthAndWellbeingUsers4"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <ImageUploadButton
                customStyle={styles.uploadBtn}
                onClick={() => {}}
                fieldName="healthAndWellbeing4Img"
                formValue={formValues["healthAndWellbeing4Img"]}
              >
                Upload photo
              </ImageUploadButton>
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                Does it have automatic or manual optimisation functionality?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="healthAndWellbeing4Q1"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                Is there a dashboard reporting in place?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="healthAndWellbeing4Q2"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          </thead>

          <thead>
          <tr className={styles.rowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              {/* <p className={styles.typeTxt}>Blinds control Functionality</p> */}
              <p className={styles.questionTxt}>
                Do you have motorized blinds? If yes, how are they controlled?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormSelectField
                  fieldName="healthAndWellbeing5"
                  initialValue={
                  formValues.healthAndWellbeing5 !== ""
                    ? formValues.healthAndWellbeing5
                    : initialValue
                }
                placeholder={placeholder}
                formikChangeHandler={formikChangeHandler}
                isForm
                customStyle={styles.rowField}
                customDropDownMenuContainerStyle={styles.fieldDropDownContainer}
                options={[
                  "Manually or electrically controlled blinds, with no connection to a central system",
                  "Blinds connected to a central supervisory system to optimize heating and cooling and sun hours",
                  "Blinds connected to a central supervisory system to optimize heating and cooling and sun hours with adaptation to daylight",
                  "Blinds connected to a central supervisory system to optimize heating and cooling, occupancy and sun hours with adaptation to daylight and predictive maintenance",
                ]}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="healthAndWellbeingInstallation5"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="healthAndWellbeingEquipment5"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="healthAndWellbeingUsers5"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <ImageUploadButton
                customStyle={styles.uploadBtn}
                onClick={() => {}}
                fieldName="healthAndWellbeing5Img"
                formValue={formValues["healthAndWellbeing5Img"]}
              >
                Upload photo
              </ImageUploadButton>
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                Are the motorized blinds controlled manually or automatically?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="healthAndWellbeing5Q1"
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

export default HealthAndWellbeingCheckListForm;

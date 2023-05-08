import React from "react";
import FormField from "../FormField";
import { useStyles } from "../../styles/NewOnsiteChecklistFormsStyle.style";
import FormSelectField from "../FormSelectField";
import { NewOnSiteChecklistFormProps } from "../../types";
import ImageUploadButton from "../ImageUploadButton";

const SafetyAndSecurityCheckListForm = ({
  formikChangeHandler,
  initialValue,
  placeholder,
  formValues,
}: NewOnSiteChecklistFormProps) => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <h2 className={styles.headerTxt}>Safety and Security</h2>
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
              {/* <p className={styles.typeTxt}>Access controls Coverage</p> */}
              <p className={styles.questionTxt}>
                Which areas have access controls in place?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormSelectField
                  fieldName="safetyAndSecurity1"
                  initialValue={
                  formValues.safetyAndSecurity1 !== ""
                    ? formValues.safetyAndSecurity1
                    : initialValue
                }
                placeholder={placeholder}
                formikChangeHandler={formikChangeHandler}
                isForm
                customStyle={styles.rowField}
                customDropDownMenuContainerStyle={styles.fieldDropDownContainer}
                options={[
                  "No access control systems",
                  "Main entrance door and Facility management spaces",
                  "Main entrance door, Facility Management and common spaces",
                  "Main entrance door, Facility Management, common and tenanted spaces",
                ]}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="safetyAndSecurityInstallation1"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="safetyAndSecurityEquipment1"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="safetyAndSecurityUsers1"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <ImageUploadButton
                customStyle={styles.uploadBtn}
                // icon={<UploadIcon />}
                onClick={() => {}}
                fieldName="safetyAndSecurity1Img"
                formValue={formValues["safetyAndSecurity1Img"]}
              >
                Upload photo
              </ImageUploadButton>
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                Is the main door access controlled?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="safetyAndSecurity1Q1"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                Are the facility management areas access controlled?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="safetyAndSecurity1Q2"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                Are common spaces access controlled?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="safetyAndSecurity1Q3"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                Are the tenant spaces access controlled by landlord?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="safetyAndSecurity1Q4"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          </thead>

          <thead>
          <tr className={styles.rowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              {/* <p className={styles.typeTxt}>Access controls Infrastructure</p> */}
              <p className={styles.questionTxt}>
                What kind of access control system is in place?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormSelectField
                  fieldName="safetyAndSecurity2"
                  initialValue={
                  formValues.safetyAndSecurity2 !== ""
                    ? formValues.safetyAndSecurity2
                    : initialValue
                }
                placeholder={placeholder}
                formikChangeHandler={formikChangeHandler}
                isForm
                customStyle={styles.rowField}
                customDropDownMenuContainerStyle={styles.fieldDropDownContainer}
                options={[
                  "Physical key only",
                  "Badges, cards, fobs",
                  "Mobile access control",
                  "Mobile access control, facial recognition, guest management and integration with third party systems",
                ]}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="safetyAndSecurityInstallation2"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="safetyAndSecurityEquipment2"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="safetyAndSecurityUsers2"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <ImageUploadButton
                customStyle={styles.uploadBtn}
                onClick={() => {}}
                fieldName="safetyAndSecurity2Img"
                formValue={formValues["safetyAndSecurity2Img"]}
              >
                Upload photo
              </ImageUploadButton>
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                Does the access control help to allocate number of users in the
                premises?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="safetyAndSecurity2Q1"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          </thead>

          <thead>
          <tr className={styles.rowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              {/* <p className={styles.typeTxt}>
                Video surveillance Infrastructure
              </p> */}
              <p className={styles.questionTxt}>
                Do you have video/CCTV surveillance?
                If yes, does CCTV have facial recognition?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormSelectField
                  fieldName="safetyAndSecurity3"
                  initialValue={
                  formValues.safetyAndSecurity3 !== ""
                    ? formValues.safetyAndSecurity3
                    : initialValue
                }
                placeholder={placeholder}
                formikChangeHandler={formikChangeHandler}
                isForm
                customStyle={styles.rowField}
                customDropDownMenuContainerStyle={styles.fieldDropDownContainer}
                options={[
                  "No CCTV",
                  "CCTV without facial recognition.",
                  "CCTV with facial recognition.",
                  "N/A",
                ]}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="safetyAndSecurityInstallation3"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="safetyAndSecurityEquipment3"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="safetyAndSecurityUsers3"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <ImageUploadButton
                customStyle={styles.uploadBtn}
                onClick={() => {}}
                fieldName="safetyAndSecurity3Img"
                formValue={formValues["safetyAndSecurity3Img"]}
              >
                Upload photo
              </ImageUploadButton>
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                What is the storage of the CCTV data eg: 30days/ 3months/ 1year?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="safetyAndSecurity3Q1"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          </thead>

          <thead>
          <tr className={styles.rowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              {/* <p className={styles.typeTxt}>Video surveillance Functionality</p> */}
              <p className={styles.questionTxt}>
                How do you control your video surveillance system?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormSelectField
                  fieldName="safetyAndSecurity4"
                  initialValue={
                  formValues.safetyAndSecurity4 !== ""
                    ? formValues.safetyAndSecurity4
                    : initialValue
                }
                placeholder={placeholder}
                formikChangeHandler={formikChangeHandler}
                isForm
                customStyle={styles.rowField}
                customDropDownMenuContainerStyle={styles.fieldDropDownContainer}
                options={[
                  "No CCTV",
                  "Standalone video surveillance system",
                  "Report and control of video surveillance system " +
                  "integrated in central supervisory system",
                  "Report and control of video surveillance " +
                  "system integrated in central supervisory " +
                  "system with predictive safety and fault detection",
                ]}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="safetyAndSecurityInstallation4"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="safetyAndSecurityEquipment4"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="safetyAndSecurityUsers4"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <ImageUploadButton
                customStyle={styles.uploadBtn}
                onClick={() => {}}
                fieldName="safetyAndSecurity4Img"
                formValue={formValues["safetyAndSecurity4Img"]}
              >
                Upload photo
              </ImageUploadButton>
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                Is the reporting automatically via the central system?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="safetyAndSecurity4Q1"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                Does it have predictive safety and fault detection?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="safetyAndSecurity4Q2"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          </thead>

          <thead>
          <tr className={styles.rowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              {/* <p className={styles.typeTxt}>Security System Functionality</p> */}
              <p className={styles.questionTxt}>
                Do the security systems communicate with the centralised
                system such as BMS?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormSelectField
                  fieldName="safetyAndSecurity5"
                  initialValue={
                  formValues.safetyAndSecurity5 !== ""
                    ? formValues.safetyAndSecurity5
                    : initialValue
                }
                placeholder={placeholder}
                formikChangeHandler={formikChangeHandler}
                isForm
                customStyle={styles.rowField}
                customDropDownMenuContainerStyle={styles.fieldDropDownContainer}
                options={[
                  "Security systems are not interconnected",
                  "Security systems communicate with a centralised system (BMS)",
                  "Security systems communicate with centralised system (BMS) that " +
                  "provides analytics and reporting",
                  "Security systems communicate with centralised system (BMS) that " +
                  "provides analytics and reporting and predictive maintenance",
                ]}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="safetyAndSecurityInstallation5"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="safetyAndSecurityEquipment5"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="safetyAndSecurityUsers5"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <ImageUploadButton
                customStyle={styles.uploadBtn}
                onClick={() => {}}
                fieldName="safetyAndSecurity5Img"
                formValue={formValues["safetyAndSecurity5Img"]}
              >
                Upload photo
              </ImageUploadButton>
            </td>
          </tr>
          </thead>
          {/*<tr className={styles.subRowContainer}>*/}
          {/*  <td className={styles.typeAndQuestionContainer}>*/}
          {/*    <p className={styles.questionTxt}>*/}
          {/*      Is the intruder alarm linked to the BMS?*/}
          {/*    </p>*/}
          {/*  </td>*/}
          {/*  <td className={styles.rowCellContainer}>*/}
          {/*    <FormField*/}
          {/*      fastField*/}
          {/*      fieldName="safetyAndSecurity5Q1"*/}
          {/*      customStyle={styles.rowField}*/}
          {/*    />*/}
          {/*  </td>*/}
          {/*</tr>*/}

          <thead>
          <tr className={styles.rowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              {/* <p className={styles.typeTxt}>Occupancy Monitoring Coverage</p> */}
              <p className={styles.questionTxt}>
                For which areas occupancy monitoring is in place?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormSelectField
                  fieldName="safetyAndSecurity6"
                  initialValue={
                  formValues.safetyAndSecurity6 !== ""
                    ? formValues.safetyAndSecurity6
                    : initialValue
                }
                placeholder={placeholder}
                formikChangeHandler={formikChangeHandler}
                isForm
                customStyle={styles.rowField}
                customDropDownMenuContainerStyle={styles.fieldDropDownContainer}
                options={[
                  "No occupancy monitoring.",
                  "Overview of building level",
                  "Breakdown by rooms or zones in the building / space",
                  "Breakdown by desk or place",
                ]}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="safetyAndSecurityInstallation6"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="safetyAndSecurityEquipment6"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="safetyAndSecurityUsers6"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <ImageUploadButton
                customStyle={styles.uploadBtn}
                onClick={() => {}}
                fieldName="safetyAndSecurity6Img"
                formValue={formValues["safetyAndSecurity6Img"]}
              >
                Upload photo
              </ImageUploadButton>
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.typeTxt}>
                If occupancy monitoring is in place:
              </p>
              <p className={styles.questionTxt}>
                Does it provide building level occupancy?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="safetyAndSecurity6Q1"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                Does it provide breakdown by space wise/room wise?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="safetyAndSecurity6Q2"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                Does it provide desk wise split as well?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="safetyAndSecurity6Q3"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          </thead>

          <thead>
          <tr className={styles.rowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              {/* <p className={styles.typeTxt}>
                Occupancy Monitoring Functionality
              </p> */}
              <p className={styles.questionTxt}>
                Do you have occupancy monitoring? If yes, how is it done?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormSelectField
                  fieldName="safetyAndSecurity7"
                  initialValue={
                  formValues.safetyAndSecurity7 !== ""
                    ? formValues.safetyAndSecurity7
                    : initialValue
                }
                placeholder={placeholder}
                formikChangeHandler={formikChangeHandler}
                isForm
                customStyle={styles.rowField}
                customDropDownMenuContainerStyle={styles.fieldDropDownContainer}
                options={[
                  "No occupancy monitoring",
                  "Total number of people in the building or in a given space",
                  "Management of overcrowding, peak occupancy or COVID related measures, etc.",
                  "Enables workforce optimization, facility management optimization, headcount management",
                ]}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="safetyAndSecurityInstallation7"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="safetyAndSecurityEquipment7"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="safetyAndSecurityUsers7"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <ImageUploadButton
                customStyle={styles.uploadBtn}
                onClick={() => {}}
                fieldName="safetyAndSecurity7Img"
                formValue={formValues["safetyAndSecurity7Img"]}
              >
                Upload photo
              </ImageUploadButton>
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.typeTxt}>
                If occupancy monitoring is in place:
              </p>
              <p className={styles.questionTxt}>
                Is it used to manage overcrowding, COVID measures etc?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="safetyAndSecurity7Q1"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                Does it enable workforce and facility management optimisation?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="safetyAndSecurity7Q2"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                Is it used for headcount management?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="safetyAndSecurity7Q3"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          </thead>

          <thead>
          <tr className={styles.rowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              {/* <p className={styles.typeTxt}>
                Smoke detection system Infrastructure
              </p> */}
              <p className={styles.questionTxt}>
                Do you have a fire system for smoke detection?
                Is it standalone or is it centrally connected?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormSelectField
                  fieldName="safetyAndSecurity8"
                  initialValue={
                  formValues.safetyAndSecurity8 !== ""
                    ? formValues.safetyAndSecurity8
                    : initialValue
                }
                placeholder={placeholder}
                formikChangeHandler={formikChangeHandler}
                isForm
                customStyle={styles.rowField}
                customDropDownMenuContainerStyle={styles.fieldDropDownContainer}
                options={[
                  "Standalone fire system for smoke detection",
                  "Standalone fire system for smoke and carbon monoxyde detection.",
                  "Fire system for smoke and carbon monoxyde detection that is connected to central BMS",
                  "Fire system for smoke and carbon monoxyde detection, with optical and thermal detection, connected to central BMS.",
                ]}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="safetyAndSecurityInstallation8"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="safetyAndSecurityEquipment8"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="safetyAndSecurityUsers8"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <ImageUploadButton
                customStyle={styles.uploadBtn}
                onClick={() => {}}
                fieldName="safetyAndSecurity8Img"
                formValue={formValues["safetyAndSecurity8Img"]}
              >
                Upload photo
              </ImageUploadButton>
            </td>
          </tr>
          </thead>

          <thead>
          <tr className={styles.rowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              {/* <p className={styles.typeTxt}>Fire System Functionality</p> */}
              <p className={styles.questionTxt}>
                How do you control your fire system with emergency lighting?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormSelectField
                  fieldName="safetyAndSecurity9"
                  initialValue={
                  formValues.safetyAndSecurity9 !== ""
                    ? formValues.safetyAndSecurity9
                    : initialValue
                }
                placeholder={placeholder}
                formikChangeHandler={formikChangeHandler}
                isForm
                customStyle={styles.rowField}
                customDropDownMenuContainerStyle={styles.fieldDropDownContainer}
                options={[
                  "A standalone fire system for emergency lighting",
                  "A fire system for emergency lighting connected to BMS with manual testing",
                  "A fire system for emergency lighting connected to BMS with automatic testing",
                  "A fire system for emergency lighting connected to BMS with automatic testing and error localisation",
                ]}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="safetyAndSecurityInstallation9"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="safetyAndSecurityEquipment9"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="safetyAndSecurityUsers9"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <ImageUploadButton
                customStyle={styles.uploadBtn}
                onClick={() => {}}
                fieldName="safetyAndSecurity9Img"
                formValue={formValues["safetyAndSecurity9Img"]}
              >
                Upload photo
              </ImageUploadButton>
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                Is the testing manual or automatic?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="safetyAndSecurity9Q1"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                If automatic, is there error localisation in place?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="safetyAndSecurity9Q2"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          </thead>

          <thead>
          <tr className={styles.rowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              {/* <p className={styles.typeTxt}>
                Uninterruptible Power System (UPS) Coverage
              </p> */}
              <p className={styles.questionTxt}>
                Is there any redundant power/UPS in place, for which equipments?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormSelectField
                  fieldName="safetyAndSecurity10"
                  initialValue={
                  formValues.safetyAndSecurity10 !== ""
                    ? formValues.safetyAndSecurity10
                    : initialValue
                }
                placeholder={placeholder}
                formikChangeHandler={formikChangeHandler}
                isForm
                customStyle={styles.rowField}
                customDropDownMenuContainerStyle={styles.fieldDropDownContainer}
                options={[
                  "No redundant power system in place",
                  "Redundant power only for security and safety equipment",
                  "Redundant power for all equipment",
                  "n/a",
                ]}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="safetyAndSecurityInstallation10"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="safetyAndSecurityEquipment10"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="safetyAndSecurityUsers10"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <ImageUploadButton
                customStyle={styles.uploadBtn}
                onClick={() => {}}
                fieldName="safetyAndSecurity10Img"
                formValue={formValues["safetyAndSecurity10Img"]}
              >
                Upload photo
              </ImageUploadButton>
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                Is the UPS for only safety and security equipments
                or is UPS in place for all equipments?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="safetyAndSecurity10Q1"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                What kind of UPS is in place?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="safetyAndSecurity10Q2"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                Are there any diesel generators?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="safetyAndSecurity10Q3"
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

export default SafetyAndSecurityCheckListForm;

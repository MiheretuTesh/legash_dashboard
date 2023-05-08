import React from "react";
import { useStyles } from "../../styles/NewOnsiteChecklistFormsStyle.style";
import { NewOnSiteChecklistFormProps } from "../../types";
import FormField from "../FormField";
import FormSelectField from "../FormSelectField";
import ImageUploadButton from "../../components/ImageUploadButton";

const SystemsCheckListForm = ({
  formikChangeHandler,
  initialValue,
  placeholder,
  formValues,
}: NewOnSiteChecklistFormProps) => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <h2 className={styles.headerTxt}>Systems</h2>
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
                Building Management System (BMS) Functionality
              </p> */}
              <p className={styles.questionTxt}>
                Do you have a central management system?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormSelectField
                formikChangeHandler={formikChangeHandler}
                fieldName="systems1"
                initialValue={
                formValues.systems1 !== ""
                  ? formValues.systems1
                  : "none"
                }
                placeholder={placeholder}
                isForm
                // fastField
                customStyle={styles.rowField}
                customDropDownMenuContainerStyle={styles.fieldDropDownContainer}
                options={[
                  "No central system/existing system needs upgrade",
                  "Building Management System (BMS) contolling the HVAC",
                  "An advanced BMS (controlling other items such as lifts, CCTV, air quality etc on top of HVAC)",
                  "Advanced BMS + datalake + analytics (Building Operating System)",
                ]}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="systemsInstallation1"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="systemsEquipment1"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="systemsUsers1"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <ImageUploadButton
                customStyle={styles.uploadBtn}
                onClick={() => {}}
                fieldName="systems1QImg"
                formValue={formValues["systems1QImg"]}
              >
                Upload photo
              </ImageUploadButton>
            </td>
          </tr>
          </thead>
          <thead>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>What type of BMS is present? E.g Desigo CC 5.0</p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="systems1Q1"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          </thead>
          <thead>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                Which communication protocoll is supported (BACnet, Modbus TCP, Modbus RTU)
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="systems1Q2"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          </thead>
          <thead>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                If the BMS speaks BACnet please include the network information and EDE list (scan of BACnet points to the report)
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                  fastField
                  fieldName="systems1Q21"
                  customStyle={styles.rowField}
              />
            </td>
          </tr>
          </thead>
          <thead>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                Are all main HVAC units connected to the BMS?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                  fastField
                  fieldName="systems1Q3"
                  customStyle={styles.rowField}
              />
            </td>
          </tr>
          </thead>
          <thead>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                Is internet access available from the BMS or can it be provided?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                  fastField
                  fieldName="systems1Q4"
                  customStyle={styles.rowField}
              />
            </td>
          </tr>
          </thead>
          <thead>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                Does it have further system/software integration possibilities (open API)?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                  fastField
                  fieldName="systems1Q5"
                  customStyle={styles.rowField}
              />
            </td>
          </tr>
          </thead>

          <thead>
          <tr className={styles.rowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              {/* <p className={styles.typeTxt}>
                Heating Ventilation and Air Conditioning (HVAC) Functionality
              </p> */}
              <p className={styles.questionTxt}>
                How do you control and monitor HVAC?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormSelectField
                  fieldName="systems2"
                  initialValue={
                  formValues.systems2 !== ""
                    ? formValues.systems2
                    : initialValue
                }
                placeholder={placeholder}
                formikChangeHandler={formikChangeHandler}
                isForm
                customStyle={styles.rowField}
                customDropDownMenuContainerStyle={styles.fieldDropDownContainer}
                options={[
                  "No monitoring or reporting implemented on HVAC",
                  "Monitoring & control of hot/cold production and hot/cold distribution",
                  "HVAC automated steering (duration & intensity) with weather tracking",
                  "Optimization of HVAC through predictive and supervisory software and grid integration",
                ]}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="systemsInstallation2"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="systemsEquipment2"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="systemsUsers2"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <ImageUploadButton
                customStyle={styles.uploadBtn}
                // icon={<UploadIcon />}
                onClick={() => {}}
                fieldName="systems2QImg"
                formValue={formValues["systems2QImg"]}
              >
                Upload photo
              </ImageUploadButton>
            </td>
          </tr>
          </thead>
          <thead>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                Are there any existing optimization or predictive capabilities?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="systems2Q1"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                Is it possible to interact with the grid?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="systems2Q2"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          </thead>

          {/*System 2.1*/}

          <thead>
          <tr className={styles.rowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                How many ventilation/air conditioning systems are in the building?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                  fastField
                  fieldName="systems21"
                  customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                  fastField
                  fieldName="systemsInstallation21"
                  customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                  fastField
                  fieldName="systemsEquipment21"
                  customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                  fastField
                  fieldName="systemsUsers21"
                  customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <ImageUploadButton
                  customStyle={styles.uploadBtn}
                  onClick={() => {}}
                  fieldName="systems21Img"
                  formValue={formValues["systems21Img"]}
              >
                Upload photo
              </ImageUploadButton>
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                Number of air handling units &gt; 5,000 m³/h:
                <br/>
                Number of air handling units &gt; 10,000 m³/h:
                <br/>
                Number of air handling units &gt; 20,000 m³/h:
                <br/>
                Number of air handling units &gt; 50,000 m³/h
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                  fastField
                  fieldName="systems2Q21"
                  customStyle={styles.rowField}
              />
            </td>
          </tr>
          </thead>


          {/* System 2.2 */}

          <thead>
          <tr className={styles.rowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                What technical infrastructure is available?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormSelectField
                  fieldName="systems22"
                  initialValue={
                    formValues.systems22 !== ""
                        ? formValues.systems22
                        : initialValue
                  }
                  placeholder={placeholder}
                  formikChangeHandler={formikChangeHandler}
                  isForm
                  customStyle={styles.rowField}
                  customDropDownMenuContainerStyle={styles.fieldDropDownContainer}
                  options={[
                    "Concrete core activation",
                    "Radiator",
                    "Chilled ceilings",
                    "Individual room control",
                  ]}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                  fastField
                  fieldName="systemsInstallation22"
                  customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                  fastField
                  fieldName="systemsEquipment22"
                  customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                  fastField
                  fieldName="systemsUsers22"
                  customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <ImageUploadButton
                  customStyle={styles.uploadBtn}
                  onClick={() => {}}
                  fieldName="systems22Img"
                  formValue={formValues["systems22Img"]}
              >
                Upload photo
              </ImageUploadButton>
            </td>
          </tr>
          </thead>

          <thead>
          <tr className={styles.rowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                Which areas have the metering of the electricity?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormSelectField
                  fieldName="systems3"
                  initialValue={
                  formValues.systems3 !== ""
                    ? formValues.systems3
                    : initialValue
                }
                placeholder={placeholder}
                formikChangeHandler={formikChangeHandler}
                isForm
                customStyle={styles.rowField}
                customDropDownMenuContainerStyle={styles.fieldDropDownContainer}
                options={[
                  "Manual reporting only on main electricity distribution",
                  "Automatic meter on main electricity distribution",
                  "Automatic meter on main electricity distribution and equipment (i.e. HVAC, pump, general services), common areas, tenant areas.",
                  "Automatic meter on main electricity distribution and equipment (i.e. HVAC, pump, general services), common areas, tenant areas and for each tenanted space separation between lighting and small power equipment.",
                ]}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="systemsInstallation3"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="systemsEquipment3"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="systemsUsers3"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <ImageUploadButton
                customStyle={styles.uploadBtn}
                onClick={() => {}}
                fieldName="systems3QImg"
                formValue={formValues["systems3QImg"]}
              >
                Upload photo
              </ImageUploadButton>
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                Is it manual/automatic and segregated within equipments, common/tenanted spaces and floors?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="systems3Q1"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                Who is the energy provider?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                  fastField
                  fieldName="systems3Q2"
                  customStyle={styles.rowField}
              />
            </td>
          </tr>
          </thead>

          <thead>
          <tr className={styles.rowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              {/* <p className={styles.typeTxt}>
                Electricity Metering Functionality
              </p> */}
              <p className={styles.questionTxt}>
                How does the metering of electricity consumption work?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormSelectField
                  fieldName="systems4"
                  initialValue={
                  formValues.systems4 !== ""
                    ? formValues.systems4
                    : initialValue
                }
                placeholder={placeholder}
                formikChangeHandler={formikChangeHandler}
                isForm
                customStyle={styles.rowField}
                customDropDownMenuContainerStyle={styles.fieldDropDownContainer}
                options={[
                  "Manual meter(s) reading and measuring of efficiency of electricity consumption are done",
                  "Automatic reading and measuring for metering and billing purposes",
                  "Automatic reading and measuring with cloud storage and reporting functions (dashboard, GRESB, etc.) ",
                  "Automatic reading and measuring with cloud storage, reporting functions and faults detections (peak, outage, etc.)",
                ]}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="systemsInstallation4"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="systemsEquipment4"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="systemsUsers4"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <ImageUploadButton
                customStyle={styles.uploadBtn}
                onClick={() => {}}
                fieldName="systems4Img"
                formValue={formValues["systems4Img"]}
              >
                Upload photo
              </ImageUploadButton>
            </td>
          </tr>
          </thead>

          <thead>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                Is it manual or automatic? If automatic metering is billing also automatic?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="systems4Q1"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                Is there cloud storage and reporting function with dashboard?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="systems4Q2"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          </thead>

          <thead>
          <tr className={styles.rowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              {/* <p className={styles.typeTxt}>Lighting Infrastructure</p> */}
              <p className={styles.questionTxt}>
                Which kind of light bulbs are in place? Do they have occupancy/motion tracking?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormSelectField
                  fieldName="systems5"
                  initialValue={
                  formValues.systems5 !== ""
                    ? formValues.systems5
                    : initialValue
                }
                placeholder={placeholder}
                formikChangeHandler={formikChangeHandler}
                isForm
                customStyle={styles.rowField}
                customDropDownMenuContainerStyle={styles.fieldDropDownContainer}
                options={[
                  "Traditional light bulbs or LED.",
                  "Dimmable (DALI - Digital Addressable Lighting Interface) lighting",
                  "Dimmable (DALI - Digital Addressable Lighting Interface) lighting, combined with occupancy/motion sensors",
                  "Dimmable (DALI - Digital Addressable Lighting Interface) lighting, combined with occupancy/motion sensors and daylight sensors.",
                ]}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="systemsInstallation5"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="systemsEquipment5"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="systemsUsers5"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <ImageUploadButton
                customStyle={styles.uploadBtn}
                onClick={() => {}}
                fieldName="systems5QImg"
                formValue={formValues["systems5QImg"]}
              >
                Upload photo
              </ImageUploadButton>
            </td>
          </tr>
          </thead>

          <thead>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                Is there a digital addressable lighting interface (DALI)?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="systems5Q1"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                Does it have motion/occupancy monitoring?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="systems5Q2"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                Does it also have daylight monitoring?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="systems5Q3"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          </thead>

          <thead>
          <tr className={styles.rowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              {/* <p className={styles.typeTxt}>Lighting Coverage</p> */}
              <p className={styles.questionTxt}>
                Are the lights connected to a central system?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormSelectField
                  fieldName="systems6"
                  initialValue={
                  formValues.systems6 !== ""
                    ? formValues.systems6
                    : initialValue
                }
                placeholder={placeholder}
                formikChangeHandler={formikChangeHandler}
                isForm
                customStyle={styles.rowField}
                customDropDownMenuContainerStyle={styles.fieldDropDownContainer}
                options={[
                  "Not connected lights (bulbs or LED)",
                  "Common areas partially covered (7%)",
                  "All common areas (15%)",
                  "All common areas and tenant spaces (100%)",
                ]}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="systemsInstallation6"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="systemsEquipment6"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="systemsUsers6"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <ImageUploadButton
                customStyle={styles.uploadBtn}
                onClick={() => {}}
                fieldName="systems6QImg"
                formValue={formValues["systems6QImg"]}
              >
                Upload photo
              </ImageUploadButton>
            </td>
          </tr>
          </thead>

          <thead>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                If centrally connected are only common lights connected
                to a central system such as BMS/BOS (building operating system)
                or are all lights connected to a central system.
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="systems6Q1"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          </thead>

          <thead>
          <tr className={styles.rowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              {/* <p className={styles.typeTxt}>Lighting Functionality</p> */}
              <p className={styles.questionTxt}>
                How do you control the lights?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormSelectField
                  fieldName="systems7"
                  initialValue={
                  formValues.systems7 !== ""
                    ? formValues.systems7
                    : initialValue
                }
                placeholder={placeholder}
                formikChangeHandler={formikChangeHandler}
                isForm
                customStyle={styles.rowField}
                customDropDownMenuContainerStyle={styles.fieldDropDownContainer}
                options={[
                  "No control",
                  "General status of the light system",
                  "Control and monitoring of the lights from a central system",
                  "Control and monitoring of the lights from a central " +
                  "system, as well as predictive maintenance, malfunction " +
                  "of devices and localisation of individual light",
                ]}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="systemsInstallation7"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="systemsEquipment7"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="systemsUsers7"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <ImageUploadButton
                customStyle={styles.uploadBtn}
                onClick={() => {}}
                fieldName="systems7Img"
                formValue={formValues["systems7Img"]}
              >
                Upload photo
              </ImageUploadButton>
            </td>
          </tr>
          </thead>

          <thead>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                If lights are connected centrally for control, is
                this manual or automated?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="systems7Q1"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                Is there central monitoring? If yes, is prediction also central?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="systems7Q2"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          </thead>

          <thead>
          <tr className={styles.rowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              {/* <p className={styles.typeTxt}>
                Electric Vehicle Charging Coverage
              </p> */}
              <p className={styles.questionTxt}>
                Do you have car parking, if yes =&gt;
                Do you have EV charging?
                What % of EV charging you have?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormSelectField
                  fieldName="systems8"
                  initialValue={
                  formValues.systems8 !== ""
                    ? formValues.systems8
                    : initialValue
                }
                placeholder={placeholder}
                formikChangeHandler={formikChangeHandler}
                isForm
                customStyle={styles.rowField}
                customDropDownMenuContainerStyle={styles.fieldDropDownContainer}
                options={[
                  "No EV charging on-site",
                  "EV Charging for 10% of parking spaces",
                  "EV Charging for 20%-50% of parking spaces",
                  "EV Charging for over 50% of parking spaces",
                ]}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="systemsInstallation8"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="systemsEquipment8"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="systemsUsers8"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <ImageUploadButton
                customStyle={styles.uploadBtn}
                onClick={() => {}}
                fieldName="systems8Img"
                formValue={formValues["systems8Img"]}
              >
                Upload photo
              </ImageUploadButton>
            </td>
          </tr>
          </thead>

          <thead>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                How many total no. of car parking spaces in the development.
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="systems8Q1"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          </thead>

          <thead>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                of the total car parking spaces
                how many (no.) are EV charging if any?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                  fastField
                  fieldName="systems8Q2"
                  customStyle={styles.rowField}
              />
            </td>
          </tr>
          </thead>

          <thead>
          <tr className={styles.rowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              {/* <p className={styles.typeTxt}>
                Electric Vehicle Charging Functionality
              </p> */}
              <p className={styles.questionTxt}>
                How is the data of the EV charging stations transmitted?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormSelectField
                  fieldName="systems9"
                  initialValue={
                  formValues.systems9 !== ""
                    ? formValues.systems9
                    : initialValue
                }
                placeholder={placeholder}
                formikChangeHandler={formikChangeHandler}
                isForm
                customStyle={styles.rowField}
                customDropDownMenuContainerStyle={styles.fieldDropDownContainer}
                options={[
                  "No EV charging on-site",
                  "Charging with no sensors or access control",
                  "Smart Charging: Access control and consumption metering for invoicing for energy",
                  "Smart grid integration for dynamic pricing and demand response",
                ]}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="systemsInstallation9"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="systemsEquipment9"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="systemsUsers9"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <ImageUploadButton
                customStyle={styles.uploadBtn}
                onClick={() => {}}
                fieldName="systems9Img"
                formValue={formValues["systems9Img"]}
              >
                Upload photo
              </ImageUploadButton>
            </td>
          </tr>
          </thead>

          <thead>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                Is the charging slow or fast? How many kvs?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="systems9Q1"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                Is it access controlled and has sensors?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="systems9Q2"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                Is the consumption automated for invoicing?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="systems9Q3"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                Is there grid interaction for dynamic charging and pricing?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="systems9Q4"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          </thead>

          <thead>
          <tr className={styles.rowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              {/* <p className={styles.typeTxt}>Domestic Hot Water Coverage</p> */}
              <p className={styles.questionTxt}>
                Where is the coverage of domestic hot water metering?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormSelectField
                  fieldName="systems10"
                  initialValue={
                  formValues.systems10 !== ""
                    ? formValues.systems10
                    : initialValue
                }
                placeholder={placeholder}
                formikChangeHandler={formikChangeHandler}
                isForm
                customStyle={styles.rowField}
                customDropDownMenuContainerStyle={styles.fieldDropDownContainer}
                options={[
                  "Meter(s) on main distribution only",
                  "Meter(s) on main distribution connected to central system (such as BMS)",
                  "Meter(s) on main distribution and common areas connected to central system (such as BMS)",
                  "Meter on main and secondary distributions and per distribution unit (such as bathroom, kitchen, etc.) " +
                  "that also enables leak detection (through pressure differential in the pipes between meters)",
                ]}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="systemsInstallation10"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="systemsEquipment10"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="systemsUsers10"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <ImageUploadButton
                customStyle={styles.uploadBtn}
                onClick={() => {}}
                fieldName="systems10Img"
                formValue={formValues["systems10Img"]}
              >
                Upload photo
              </ImageUploadButton>
            </td>
          </tr>
          </thead>

          <thead>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                Is the main distribution connected to the central system?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="systems10Q1"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                Are there meters on common areas?
                Are meters on common areas connected to the central system?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="systems10Q2"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                Are there different meters for main and
                secondary distributions (bathroom/kitchen)?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="systems10Q3"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                Is there leak detection in place through pressure in
                the pipes through meters?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="systems10Q4"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          </thead>

          <thead>
          <tr className={styles.rowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              {/* <p className={styles.typeTxt}>Domestic Hot Water Functionality</p> */}
              <p className={styles.questionTxt}>
                How does the metering of hot water consumption work?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormSelectField
                  fieldName="systems11"
                  initialValue={
                  formValues.systems11 !== ""
                    ? formValues.systems11
                    : initialValue
                }
                placeholder={placeholder}
                formikChangeHandler={formikChangeHandler}
                isForm
                customStyle={styles.rowField}
                customDropDownMenuContainerStyle={styles.fieldDropDownContainer}
                options={[
                  "Only manual reading of meters (No automated input)",
                  "Monitoring and reporting through smart meters (connected to a central system such as BMS)",
                  "Optimization of production capabilities (duration and quantity) based on demand, as well as reporting into a central system such as BMS",
                  "Supervisory software that enables predictive production and maintenance based on fault detections. ",
                ]}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="systemsInstallation11"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="systemsEquipment11"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="systemsUsers11"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <ImageUploadButton
                customStyle={styles.uploadBtn}
                onClick={() => {}}
                fieldName="systems11Img"
                formValue={formValues["systems11Img"]}
              >
                Upload photo
              </ImageUploadButton>
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                Are the meters manual or automatic for reading?
                If automatic, are the smart meters connected
                to a central system?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="systems11Q1"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                Is there optimisation of hot water usage?
                Is there prediction through a supervisory
                unit for automation of domestic hot water
                consumption?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="systems11Q2"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                Are there any showers/kitchens (dry/wet)
                or special equipment for hot water that
                requires high volume? List them if yes.
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="systems11Q3"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          </thead>

          <thead>
          <tr className={styles.rowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              {/* <p className={styles.typeTxt}>Water Leakage Detection Coverage</p> */}
              <p className={styles.questionTxt}>
                Do you have water leakage detection?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormSelectField
                  fieldName="systems12"
                  initialValue={
                  formValues.systems12 !== ""
                    ? formValues.systems12
                    : initialValue
                }
                placeholder={placeholder}
                formikChangeHandler={formikChangeHandler}
                isForm
                customStyle={styles.rowField}
                customDropDownMenuContainerStyle={styles.fieldDropDownContainer}
                options={[
                  "No water leakage detection",
                  "Water leakage detection on main distribution with a reporting / alert function",
                  "Water leakage detection on main distribution and common areas with a reporting / alert function",
                  "Water leakage detection on all units with a reporting or alert function",
                ]}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="systemsInstallation12"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="systemsEquipment12"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="systemsUsers12"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <ImageUploadButton
                customStyle={styles.uploadBtn}
                onClick={() => {}}
                fieldName="systems12Img"
                formValue={formValues["systems12Img"]}
              >
                Upload photo
              </ImageUploadButton>
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                Is there a reporting/alert function?
                If yes, where is it? Only on the main
                distribution or split across common
                areas to identify location?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="systems12Q1"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                And with what functionalities?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="systems12Q2"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          </thead>

          <thead>
          <tr className={styles.rowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              {/* <p className={styles.typeTxt}>
                Lifts Management System Functionality
              </p> */}
              <p className={styles.questionTxt}>
                Is there a lift management system in place?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormSelectField
                  fieldName="systems13"
                  initialValue={
                  formValues.systems13 !== ""
                    ? formValues.systems13
                    : initialValue
                }
                placeholder={placeholder}
                formikChangeHandler={formikChangeHandler}
                isForm
                customStyle={styles.rowField}
                customDropDownMenuContainerStyle={styles.fieldDropDownContainer}
                options={[
                  "No control of lift(s)",
                  "Access of blocking the lift(s)",
                  "Individual ordering, reserving, and controlling of the lift(s)",
                  "Individual ordering, reserving, and controlling of the lift(s) as well as faults and maintenance prediction",
                ]}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="systemsInstallation13"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="systemsEquipment13"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="systemsUsers13"
                customStyle={styles.rowField}
              />
            </td>
            <td className={styles.rowCellContainer}>
              <ImageUploadButton
                customStyle={styles.uploadBtn}
                onClick={() => {}}
                fieldName="systems13Img"
                formValue={formValues["systems13Img"]}
              >
                Upload photo
              </ImageUploadButton>
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                How many lifts per core and in total,
                how many floors and how are they controlled?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="systems13Q1"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                How busy are the lifts, is there a long waiting period?
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="systems13Q2"
                customStyle={styles.rowField}
              />
            </td>
          </tr>
          <tr className={styles.subRowContainer}>
            <td className={styles.typeAndQuestionContainer}>
              <p className={styles.questionTxt}>
                Is there a requirement on-site to have a lift management system,
                if yes why? : eg: heavy usage of reserving the lifts
              </p>
            </td>
            <td className={styles.rowCellContainer}>
              <FormField
                fastField
                fieldName="systems13Q3"
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

export default SystemsCheckListForm;

import { Form, Formik } from "formik";
import React, { useState, useEffect } from "react";
import { useStyles } from "./index.style";
import * as Yup from "yup";
import FormEditableField from "../FormEditableField";
import FormSelectField from "../FormSelectField";
import FormButton from "../FormButton";
import PersonalDetailImageUpload from "../PersonalDetailImageUpload";
import FormField from "../FormField";
import HospitalPicture from "../../assets/images/Hospital.jpg";
import { useLocation, useNavigate } from "react-router-dom";
import { useEditCampaign } from "../../hooks/useEditCampaign";
import LoadingSpinner from "../LoadingSpinner";
import ImageUpload from "../ImageUpload";
interface Values {
  targetFunding: number;
  startDate: string;
  endDate: string;
  currentFundedAmount: number;
  diagnosis: string;
  status: string;
  treatmentRequired: string;
  coverImage: string;
}

const CampaignEditSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[A-Za-z]+ [A-Za-z].{1,}$/, "please write your valid full name")
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("*Required"),
  email: Yup.string().email("Invalid email").required("*Required"),
  role: Yup.string().required("*Required"),
  company: Yup.string().required("*Required"),
});
const CampaignEdit = ({ profileData, handleProfileEdit }: any) => {
  const location = useLocation();
  const { state } = useLocation();
  const parentRoute = location.pathname.split("/")[1];
  const navigate = useNavigate();
  const styles = useStyles();
  const [isProfileEdited, setIsProfileEdited] = useState(false);
  const [uploadedPhoto, setUploadedPhoto] = useState("");

  const [imageUrlGenerated, setImageUrlGenerated] = useState(false);
  const [imgUploadUrl, setImagUploadUrl] = useState(state?.coverImage);

  const initialValues: any = {
    id: state?.id,
    targetFunding: state?.targetFunding,
    startDate: state?.startDate,
    endDate: state?.endDate,
    currentFundedAmount: state?.currentFundedAmount,
    diagnosis: state?.diagnosis,
    status: state?.status,
    treatmentRequired: state?.treatmentRequired[0],
  };

  const handleEditHospital = () => {};

  const { mutate, isLoading, data, isSuccess } = useEditCampaign({
    onEditCampaignSuccess: handleEditHospital,
    onEditCampaignError: handleEditHospital,
  });

  useEffect(() => {
    if (isSuccess === true) {
      navigate(`/${parentRoute}/campaigns`);
    }
  }, [isSuccess, data]);

  const onSubmitHandler = (values: Values) => {
    const formData = {
      targetFunding: values.targetFunding,
      startDate: values.startDate,
      endDate: values.endDate,
      currentFundedAmount: values.currentFundedAmount,
      diagnosis: [values.diagnosis],
      status: values.status,
      coverImage: `${imgUploadUrl}`,
      treatmentRequired: values.treatmentRequired,
    };
    console.log(formData, "formData formData formData");
    mutate({
      id: initialValues.id,
      obj: formData,
    });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmitHandler}
      // validationSchema={CampaignEditSchema}
    >
      {({ handleChange, resetForm }) => (
        <>
          <Form className={styles.topContainer}>
            <div className={styles.profilePictureContainer}>
              {/* {imgUploadUrl !== "" ? (
                <img
                  className={styles.pictureContainer}
                  src={imgUploadUrl}
                  alt="hospital"
                />
              ) : (
                <img
                  className={styles.pictureContainer}
                  src={HospitalPicture}
                  alt="hospital"
                />
              )} */}
              <ImageUpload
                setImageUrlGenerated={setImageUrlGenerated}
                setImagUploadUrl={setImagUploadUrl}
              />
            </div>

            <div className={styles.formMainContainer}>
              <div className={styles.formContainer}>
                <FormEditableField
                  fieldName="treatmentRequired"
                  fieldLabel="Treatment Required"
                  customStyle={styles.formField}
                  setIsProfileEdited={setIsProfileEdited}
                />
                <FormEditableField
                  fieldName="targetFunding"
                  fieldLabel="Target Funding"
                  customStyle={styles.formField}
                  setIsProfileEdited={setIsProfileEdited}
                />
                {/* <FormEditableField
                  fieldName="startDate"
                  fieldLabel="Start Date"
                  customStyle={styles.formField}
                  setIsProfileEdited={setIsProfileEdited}
                />
                <FormEditableField
                  fieldName="endDate"
                  fieldLabel="Start Date"
                  customStyle={styles.formField}
                  setIsProfileEdited={setIsProfileEdited}
                /> */}
                <FormSelectField
                  fieldName="status"
                  fieldLabel="Status"
                  formikChangeHandler={handleChange}
                  options={["Active", "Pending", "Terminate"]}
                  initialValue={"none"}
                  placeholder={"Select a Status"}
                  isFormName="hospital_create"
                />
              </div>
              <div className={styles.formContainer}>
                <FormField
                  fieldName="diagnosis"
                  fieldLabel="Diagnosis"
                  customStyle={styles.formField}
                />
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className={styles.actionBtnContainer}>
                <FormButton buttonType="submit" buttonVariant="contained">
                  {isLoading ? <LoadingSpinner type="button" /> : "Update"}
                </FormButton>
              </div>
              <div className={styles.actionBtnContainer}>
                <FormButton
                  buttonType="button"
                  buttonVariant="contained"
                  customStyle={styles.terminateBtn}
                >
                  {isLoading ? <LoadingSpinner type="button" /> : "Terminate"}
                </FormButton>
              </div>
            </div>
          </Form>
        </>
      )}
    </Formik>
  );
};

export default CampaignEdit;

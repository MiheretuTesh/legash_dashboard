import { Form, Formik } from "formik";
import React, { useState, useEffect } from "react";
import { useStyles } from "./index.style";
import * as Yup from "yup";
import FormEditableField from "../FormEditableField";
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
  const [imgUploadUrl, setImagUploadUrl] = useState("");

  const initialValues: any = {
    id: state?.id,
    targetFunding: state?.targetFunding,
    startDate: state?.startDate,
    endDate: state?.endDate,
    currentFundedAmount: state?.currentFundedAmount,
    diagnosis: state?.diagnosis,
    status: state?.status,
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
    };
    mutate({
      id: initialValues.id,
      obj: formData,
    });
  };

  const handleChangeImg = (e: any, setFieldValue: any) => {
    const file = e.target.files[0];
    if (file?.size / 1024 / 1024 < 5) {
      let url = URL.createObjectURL(file);
      setUploadedPhoto(url);
      setFieldValue("img", file);
      setIsProfileEdited(true);
    } else {
      console.log("Image size must be of 2MB or less");
    }
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
              <img
                className={styles.pictureContainer}
                src={HospitalPicture}
                alt="hospital"
              />
              <ImageUpload
                setImageUrlGenerated={setImageUrlGenerated}
                setImagUploadUrl={setImagUploadUrl}
              />
            </div>

            <div className={styles.formMainContainer}>
              <div className={styles.formContainer}>
                {/* <FormEditableField
                  fieldName="name"
                  fieldLabel="Name"
                  customStyle={styles.formField}
                  setIsProfileEdited={setIsProfileEdited}
                /> */}
                <FormEditableField
                  fieldName="targetFunding"
                  fieldLabel="Target Funding"
                  customStyle={styles.formField}
                  setIsProfileEdited={setIsProfileEdited}
                />
                <FormEditableField
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
                />
                <FormEditableField
                  fieldName="status"
                  fieldLabel="Status"
                  customStyle={styles.formField}
                  setIsProfileEdited={setIsProfileEdited}
                />
              </div>
              <div className={styles.formContainer}>
                <FormEditableField
                  fieldName="staffMembers"
                  fieldLabel="Staff Members"
                  customStyle={styles.formField}
                  setIsProfileEdited={setIsProfileEdited}
                />
                <FormField
                  fieldName="description"
                  fieldLabel="Description"
                  customStyle={styles.formField}
                />
              </div>
            </div>
            <div className={styles.actionBtnContainer}>
              <FormButton buttonType="submit" buttonVariant="contained">
                {isLoading ? <LoadingSpinner type="button" /> : "Save"}
              </FormButton>
            </div>
          </Form>
        </>
      )}
    </Formik>
  );
};

export default CampaignEdit;

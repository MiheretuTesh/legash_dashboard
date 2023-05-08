import { Form, Formik } from "formik";
import React, { useState } from "react";
import { useStyles } from "./index.style";
import * as Yup from "yup";
import FormEditableField from "../FormEditableField";
import FormButton from "../FormButton";
import { reverseTransformRole } from "../../utils/functions";
import PersonalDetailImageUpload from "../PersonalDetailImageUpload";
import { ProfilePictureExample } from "../../assets";
import FormField from "../FormField";

interface Values {
  name: string;
  email: string;
  role: string;
  company: string;
}

const PersonalDetailsSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[A-Za-z]+ [A-Za-z].{1,}$/, "please write your valid full name")
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("*Required"),
  email: Yup.string().email("Invalid email").required("*Required"),
  role: Yup.string().required("*Required"),
  company: Yup.string().required("*Required"),
});
const PersonalDetailsForm = ({ profileData, handleProfileEdit }: any) => {
  const styles = useStyles();
  const [isProfileEdited, setIsProfileEdited] = useState(false);
  const [uploadedPhoto, setUploadedPhoto] = useState("");

  const initialValues = {
    name: `${profileData?.first_name} ${profileData?.last_name}`,
    email: profileData?.email,
    role: reverseTransformRole(profileData?.type),
    company: profileData?.company,
  };

  const onSubmitHandler = (values: Values) => {
    handleProfileEdit(values);
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
      validationSchema={PersonalDetailsSchema}
    >
      {({ handleChange, resetForm }) => (
        <>
          <Form className={styles.topContainer}>
            <div className={styles.profilePictureContainer}>
              <img
                className={styles.pictureContainer}
                src={
                  uploadedPhoto
                    ? uploadedPhoto
                    : profileData?.photo !== null
                    ? profileData.photo
                    : ProfilePictureExample
                }
                alt="profile"
              />
              <PersonalDetailImageUpload
                customStyle={styles.uploadBtn}
                onChange={handleChangeImg}
                fieldName="img"
                isUploaded={uploadedPhoto}
              >
                Upload photo
              </PersonalDetailImageUpload>
            </div>

            <div className={styles.formContainer}>
              <FormEditableField
                fieldName="name"
                fieldLabel="Name"
                customStyle={styles.formField}
                setIsProfileEdited={setIsProfileEdited}
              />
              <FormField
                fieldName="role"
                fieldLabel="Role"
                customStyle={styles.formField}
                isDisabled
              />
              <FormField
                fieldName="email"
                fieldLabel="Email"
                customStyle={styles.formField}
                isDisabled
              />
              <FormEditableField
                fieldName="company"
                fieldLabel="Company"
                customStyle={styles.formField}
                setIsProfileEdited={setIsProfileEdited}
              />
              <div className={styles.actionBtnsContainer}>
                <FormButton
                  buttonType="submit"
                  buttonVariant="contained"
                  disabled={!isProfileEdited}
                >
                  Save
                </FormButton>
              </div>
            </div>
          </Form>
        </>
      )}
    </Formik>
  );
};

export default PersonalDetailsForm;

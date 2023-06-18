import { Form, Formik } from "formik";
import React, { useState } from "react";
import { useStyles } from "./index.style";
import * as Yup from "yup";
import FormEditableField from "../FormEditableField";
import FormButton from "../FormButton";
import PersonalDetailImageUpload from "../PersonalDetailImageUpload";
import { ProfilePictureExample } from "../../assets";
import FormField from "../FormField";
import { useEditUser } from "../../hooks/useEditUser";
import ImageUpload from "../ImageUpload";
interface Values {
  name: string;
  email: string;
  role: string;
  phonenumber: string;
}

const PersonalDetailsSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[A-Za-z]+ [A-Za-z].{1,}$/, "please write your valid full name")
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("*Required"),
  // email: Yup.string().email("Invalid email").required("*Required"),
  // role: Yup.string().required("*Required"),
  phonenumber: Yup.string().required("*Required"),
});
const PersonalDetailsForm = ({ profileData, handleProfileEdit }: any) => {
  const styles = useStyles();
  const [isProfileEdited, setIsProfileEdited] = useState(false);
  const [uploadedPhoto, setUploadedPhoto] = useState("");

  const [imageUploadUrl, setImagUploadUrl] = useState("");
  const [imageUrlGenerated, setImageUrlGenerated] = useState(false);

  const {
    mutate: updateUser,
    isLoading: updateUserLoading,
    isSuccess: updateUserSuccess,
  } = useEditUser({});

  const initialValues = {
    name: `${profileData?.firstName} ${profileData?.lastName}`,
    email: profileData?.email,
    role: profileData?.occupation?.occupationType,
    phonenumber: profileData?.phonenumber,
  };

  const onSubmitHandler = (values: any) => {
    const formData: any = {
      am_et: {
        firstName: "አበራ",
        lastName: "ሀብታሙ",
        bankAccounts: [
          {
            accountHolderName: "አበራ ሀብታሙ",
            accountNumber: "1000123456789",
            bankName: "ንግድ ባንክ",
            country: "ኢትዮጵያ",
          },
        ],
        gender: "ሴት",
      },
      en_us: {
        firstName: profileData?.firstName,
        lastName: profileData?.lastName,
        bankAccounts: [
          {
            accountHolderName: profileData?.bankAccounts[0].accountHolderName,
            accountNumber: profileData?.bankAccounts[0].accountNumber,
            bankName: profileData?.bankAccounts[0].bankName,
            country: "Ethiopia",
          },
        ],
        gender: profileData?.gender,
      },
      email: values.email,
      phonenumber: values.phonenumber,
      profilePicture: imageUploadUrl,
    };

    updateUser({ formData: formData, id: profileData._id });
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
              <ImageUpload
                setImagUploadUrl={setImagUploadUrl}
                setImageUrlGenerated={setImageUrlGenerated}
              />
              {/* <img
                className={styles.pictureContainer}
                src={ProfilePictureExample}
                alt="profile"
              /> */}
              {/* <PersonalDetailImageUpload
                customStyle={styles.uploadBtn}
                onChange={handleChangeImg}
                fieldName="img"
                isUploaded={uploadedPhoto}
              >
                Upload photo
              </PersonalDetailImageUpload> */}
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
                fieldName="phonenumber"
                fieldLabel="Phone Number"
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

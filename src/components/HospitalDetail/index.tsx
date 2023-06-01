import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useStyles } from "./index.style";
import * as Yup from "yup";
import FormEditableField from "../FormEditableField";
import FormButton from "../FormButton";
import FormSelectField from "../FormSelectField";
import PersonalDetailImageUpload from "../PersonalDetailImageUpload";
import HospitalPicture from "../../assets/images/Hospital.jpg";
import { useLocation, useNavigate } from "react-router-dom";
import { useEditHospital } from "../../hooks/useEditHospital";
import LoadingSpinner from "../LoadingSpinner";
import { CITIES, STATES, COUNTRIES } from "../../constants/constant";
import ImageUpload from "../ImageUpload";
interface Values {
  name: string;
  email: string;
  address: string;
  city: string;
  state: string;
  country: string;
  phone: string;
  bankAccounts: string;
  website: string;
}

const HospitalEditSchema = Yup.object().shape({
  name: Yup.string().required("*Name Required"),
  address: Yup.string().required("*Address Required"),
  city: Yup.string().required("*City Required"),
  state: Yup.string().required("*State Required"),
  country: Yup.string().required("*Country Required"),

  email: Yup.string().email("Invalid email").required("*Required"),
  bankAccounts: Yup.string().required("*Bank Account Required"),
  website: Yup.string().required("*Website Required"),
});
const HospitalEdit = ({ profileData, handleProfileEdit }: any) => {
  const location = useLocation();
  const { state } = location;
  const navigate = useNavigate();

  const parentRoute = location.pathname.split("/")[1];

  const styles = useStyles();
  const [isProfileEdited, setIsProfileEdited] = useState(false);
  const [uploadedPhoto, setUploadedPhoto] = useState("");
  const [imageUrlGenerated, setImageUrlGenerated] = useState(false);
  const [imgUploadUrl, setImagUploadUrl] = useState("");

  const initialValues: any = {
    id: state?.hospital?.id,
    name: state?.hospital?.name,
    email: state?.hospital?.email,
    address: state?.hospital?.locationA.address,
    city: state?.hospital?.locationA.city,
    state: state?.hospital?.locationA.state,
    country: state?.hospital?.locationA.country,
    phone: state?.hospital.phone,
    bankAccounts: state?.hospital.bankAccounts,
    website: state?.hospital.website,
  };
  const handleEditHospital = () => {};

  const { mutate, isLoading, data, isSuccess } = useEditHospital({
    onEditUserSuccess: handleEditHospital,
    onEditUserError: handleEditHospital,
  });

  useEffect(() => {
    console.log(data, data, isSuccess);
    if (isSuccess === true) {
      navigate(`/${parentRoute}/hospitals`);
    }
  }, [data, isSuccess]);

  const onSubmitHandler = (values: Values) => {
    console.log(values);
    const formData = {
      name: values.name,
      email: values.email,
      location: {
        address: values.address,
        city: values.city,
        state: values.state,
        country: values.country,
      },
      phone: values.phone,
      bankAccounts: [{ accountNumber: values.bankAccounts }],
      website: values.website,
      hospitalImgCover: imgUploadUrl,
    };

    handleProfileEdit(values);
    mutate({ id: initialValues.id, obj: formData });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmitHandler}
      validationSchema={HospitalEditSchema}
    >
      {({ handleChange, resetForm }) => (
        <>
          <Form className={styles.topContainer}>
            <div className={styles.profilePictureContainer}>
              {imgUploadUrl ? (
                ""
              ) : (
                <img
                  className={styles.pictureContainer}
                  src={HospitalPicture}
                  alt="hospital"
                />
              )}
              <ImageUpload
                setImageUrlGenerated={setImageUrlGenerated}
                setImagUploadUrl={setImagUploadUrl}
              />
            </div>

            <div className={styles.formMainContainer}>
              <div className={styles.formContainer}>
                <FormEditableField
                  fieldName="name"
                  fieldLabel="Name"
                  customStyle={styles.formField}
                  setIsProfileEdited={setIsProfileEdited}
                />
                <FormEditableField
                  fieldName="address"
                  fieldLabel="Address"
                  customStyle={styles.formField}
                  setIsProfileEdited={setIsProfileEdited}
                />
                {/* <FormEditableField
                  fieldName="city"
                  fieldLabel="City"
                  customStyle={styles.formField}
                  setIsProfileEdited={setIsProfileEdited}
                /> */}
                <FormSelectField
                  fieldName="city"
                  fieldLabel="city"
                  formikChangeHandler={handleChange}
                  options={CITIES}
                  initialValue={"none"}
                  placeholder={"Select a City"}
                  isFormName="hospital_create"
                />
                <FormSelectField
                  fieldName="state"
                  fieldLabel="State"
                  formikChangeHandler={handleChange}
                  options={STATES}
                  initialValue={"none"}
                  placeholder={"Select a State"}
                  isFormName="hospital_create"
                />
                <FormSelectField
                  fieldName="country"
                  fieldLabel="Country"
                  formikChangeHandler={handleChange}
                  options={COUNTRIES}
                  initialValue={"none"}
                  placeholder={"Select a Country"}
                  isFormName="hospital_create"
                />
              </div>
              <div className={styles.formContainer}>
                <FormSelectField
                  fieldName="status"
                  fieldLabel="Status"
                  formikChangeHandler={handleChange}
                  options={["Active", "Pending", "Terminate"]}
                  initialValue={"none"}
                  placeholder={"Select a Status"}
                  isFormName="hospital_create"
                />
                <FormEditableField
                  fieldName="email"
                  fieldLabel="Email"
                  customStyle={styles.formField}
                  setIsProfileEdited={setIsProfileEdited}
                />
                <FormEditableField
                  fieldName="phone"
                  fieldLabel="Phone Number"
                  customStyle={styles.formField}
                  setIsProfileEdited={setIsProfileEdited}
                />
                <FormEditableField
                  fieldName="bankAccounts"
                  fieldLabel="Account Number"
                  customStyle={styles.formField}
                  setIsProfileEdited={setIsProfileEdited}
                />
                <FormEditableField
                  fieldName="website"
                  fieldLabel="Website"
                  customStyle={styles.formField}
                  setIsProfileEdited={setIsProfileEdited}
                />
              </div>
            </div>
            <div style={{ margin: "10px", width: "200px" }}>
              <FormButton
                buttonType="submit"
                buttonVariant="contained"
                // disabled={!isProfileEdited}
              >
                {isLoading ? <LoadingSpinner type="button" /> : "Save"}
              </FormButton>
            </div>
          </Form>
        </>
      )}
    </Formik>
  );
};

export default HospitalEdit;

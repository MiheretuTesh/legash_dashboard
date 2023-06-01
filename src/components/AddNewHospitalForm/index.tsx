import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import FormField from "../FormField";
import FormSelectField from "../FormSelectField";
import { useStyles } from "./index.style";
import FormButton from "../FormButton";
import * as Yup from "yup";
import ErrorModal from "../ErrorModal";
import { useAddHospital } from "../../hooks/useAddHospital";
import LoadingSpinner from "../LoadingSpinner";
import { useLocation, useNavigate } from "react-router-dom";
import ImageUpload from "../ImageUpload";
import { CITIES, STATES, COUNTRIES } from "../../constants/constant";

const ethiopianPhoneNumberRegex = /^(\+251)?[0-9]\d{9}$/;

const HospitalAddSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("*Required"),
  // location: Yup.string()
  //   .min(2, "Too Short!")
  //   .max(70, "Too Long!")
  //   .required("*Required"),
  email: Yup.string().email("Invalid email").required("*Required"),
  address: Yup.string().required("*Required"),
  city: Yup.string().required("*Required"),
  state: Yup.string().required("*Required"),
  country: Yup.string().required("*Required"),

  website: Yup.string().required("*Required"),
  bankAccounts: Yup.string().required("*Required"),
  phone: Yup.string()
    .matches(ethiopianPhoneNumberRegex, "Invalid Ethiopian phone number")
    .required("Phone number is required"),
});

const AddNewHospitalForm = () => {
  const [imageUrlGenerated, setImageUrlGenerated] = useState(false);
  const [imgUploadUrl, setImagUploadUrl] = useState("");
  const location = useLocation();
  const parentRoute = location.pathname.split("/")[1];

  const navigate = useNavigate();

  const initialValues = {
    name: "",
    address: "",
    city: "",
    state: "",
    country: "",
    email: "",
    phone: "",
    bankAccounts: "",
    hospitalAdmins: ["6454b5414923fe67c83db134"],
    services: ["fkdkj"],
    website: "",
  };

  const [isError, setIsError] = useState(false);
  const [errorText, setErrorText] = useState("");

  const styles = useStyles();

  const hospitalHandler = () => {};

  const onAddHospitalError = () => {
    setErrorText("Incorrect Phone Number or URL");
    setIsError(true);
  };

  const { mutate, data, isLoading, isSuccess } = useAddHospital({
    onSuccess: hospitalHandler,
    onError: onAddHospitalError,
  });

  useEffect(() => {
    if (isSuccess == true) {
      navigate(`/${parentRoute}/hospitals`);
    }
  }, [data, isSuccess]);

  const onSubmitHandler = (values: any) => {
    const formData = {
      name: values.name.trim(),
      location: {
        address: values.address.trim(),
        city: values.city.trim(),
        state: values.state.trim(),
        country: values.country.trim(),
      },
      phone: values.phone.trim(),
      email: values.email.trim(),
      website: values.website.trim(),
      bankAccounts: [{ accountNumber: values.bankAccounts.trim() }],
      hospitalAdmins: ["6454b5414923fe67c83db134"],
      services: ["fkdkj"],
      hospitalCoverImg: imgUploadUrl,
    };
    mutate(formData);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmitHandler}
      validationSchema={HospitalAddSchema}
    >
      {({ handleChange }) => (
        <>
          <ErrorModal
            open={isError}
            setIsOpen={setIsError}
            errorText={errorText}
          />
          <Form>
            <div className={styles.secondContainer}>
              <div className={styles.fullWidth}>
                <div className={styles.formContainer}>
                  <div className={styles.formContainer2}>
                    <div style={{ width: "45%" }}>
                      <ImageUpload
                        setImageUrlGenerated={setImageUrlGenerated}
                        setImagUploadUrl={setImagUploadUrl}
                      />
                      <FormField
                        fieldName="name"
                        fieldLabel="Name"
                        fieldPlaceholder="Menilike"
                      />
                      <FormField
                        fieldName="address"
                        fieldLabel="Address"
                        fieldPlaceholder="Mexico"
                      />
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
                    </div>
                    <div style={{ width: "45%" }}>
                      <FormSelectField
                        fieldName="country"
                        fieldLabel="Country"
                        formikChangeHandler={handleChange}
                        options={COUNTRIES}
                        initialValue={"none"}
                        placeholder={"Select a Country"}
                        isFormName="hospital_create"
                      />

                      <FormField
                        fieldName="phone"
                        fieldLabel="Phone Number"
                        fieldPlaceholder="0912345678"
                      />

                      <FormField
                        fieldName="email"
                        fieldLabel="Email"
                        fieldPlaceholder="example@gmail.com"
                      />

                      <FormField
                        fieldName="website"
                        fieldLabel="Website"
                        fieldPlaceholder="www.menilike.com"
                      />
                      <FormField
                        fieldName="bankAccounts"
                        fieldLabel="Bank Accounts"
                        fieldPlaceholder="1000255788983"
                      />
                    </div>
                  </div>
                  <div style={{ margin: "20px" }}>
                    <FormButton
                      buttonVariant="contained"
                      buttonType="submit"
                      customStyle={styles.customBtnStyle}
                    >
                      {isLoading ? <LoadingSpinner type="button" /> : "Submit"}
                    </FormButton>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        </>
      )}
    </Formik>
  );
};

export default AddNewHospitalForm;

{
  /* <div className={styles.imageUploadContainer}>
<input
  accept="image/*"
  id="upload-image"
  type="file"
  name="image"
  onChange={handleInputChange}
  style={{ display: "none" }}
/>
<label htmlFor="upload-image">
  <Button
    variant="contained"
    component="span"
    startIcon={<CloudUploadIcon />}
  >
    Upload Image
  </Button>
</label>
</div>
</div> */
}

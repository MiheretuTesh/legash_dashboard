import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import FormField from "../FormField";
import { useStyles } from "./index.style";
import FormButton from "../FormButton";
import FormSelectField from "../FormSelectField";
import * as Yup from "yup";
import { ROLES_NAMES, GENDER } from "../../constants";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ErrorModal from "../ErrorModal";
import { useAddHospital } from "../../hooks/useAddHospital";

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
  website: Yup.string().required("*Required"),
  bankAccounts: Yup.string().required("*Required"),
  // status: Yup.string().required("*Required"),
  phone: Yup.string()
    .matches(ethiopianPhoneNumberRegex, "Invalid Ethiopian phone number")
    .required("Phone number is required"),
});

const AddNewHospitalForm = () => {
  const initialValues = {
    name: "",
    location: "",
    email: "",
    phone: "",
    bankAccounts: "",
    hospitalAdmins: ["6454b5414923fe67c83db134"],
    services: ["fkdkj"],
    website: "",
  };

  const styles = useStyles();

  const hospitalHandler = () => {};

  const { mutate, data, isLoading, isSuccess } = useAddHospital({
    onSuccess: () => hospitalHandler(),
    onError: () => hospitalHandler(),
  });

  // const handleSubmit = (e: any) => {
  //   e.preventDefault();

  //   console.log(formData, "formData");

  //   // Perform validation
  //   // const errors = {};
  //   // if (!formData.name.trim()) {
  //   //   errors.name = "Name is required";
  //   // }
  //   // if (!formData.email.trim()) {
  //   //   errors.email = "Email is required";
  //   // }
  //   // if (!formData.gender) {
  //   //   errors.gender = "Gender is required";
  //   // }

  //   // If there are errors, set them in state
  //   // if (Object.keys(errors).length > 0) {
  //   //   setErrors(errors);
  //   //   return;
  //   // }

  //   // Submit the form data
  //   console.log(formData);
  // };

  const STAFF_MEMBERS = ["Abebe", "Tefera"];
  const STATUS = ["Active", "Inactive"];

  const onSubmitHandler = (values: any) => {
    console.log(values, "Hospital Data Submitted");
    mutate(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmitHandler}
      // validationSchema={HospitalAddSchema}
    >
      {({ handleChange }) => (
        <>
          <Form>
            <div className={styles.secondContainer}>
              <div className={styles.fullWidth}>
                <div className={styles.formContainer}>
                  <FormField
                    fieldName="name"
                    fieldLabel="Name"
                    fieldPlaceholder="Menilike"
                  />
                  <FormField
                    fieldName="location"
                    fieldLabel="Location"
                    fieldPlaceholder="Addis Ababa"
                    isDisabled
                  />
                  {/* <FormSelectField
                    fieldName="status"
                    fieldLabel="Status"
                    formikChangeHandler={handleChange}
                    options={STATUS}
                    initialValue={"none"}
                    placeholder={"Select a status"}
                  /> */}

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
                  <FormButton buttonVariant="contained" buttonType="submit">
                    Submit
                  </FormButton>
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

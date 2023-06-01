import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import FormField from "../FormField";
import { useStyles } from "./index.style";
import { useNavigate } from "react-router-dom";
import FormButton from "../FormButton";
import FormSelectField from "../FormSelectField";
import * as Yup from "yup";
import { ROLES_NAMES, GENDER } from "../../constants";
import { RegistrationFormValues } from "../../types";
import { useRegister } from "../../hooks/useRegister";
import LoadingSpinner from "../LoadingSpinner";
import ErrorModal from "../ErrorModal";

const RegistrationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("*Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("*Required"),
  email: Yup.string().email("Invalid email").required("*Required"),
  role: Yup.string().required("*Required"),
  gender: Yup.string().required("*Required"),
  dateOfBirth: Yup.string().required("*Required"),
  phonenumber: Yup.string().required("*Required"),
  password: Yup.string()
    .required("*Required")
    .min(8, "Must be 8 characters or more")
    .matches(/[a-z]+/, "Must have one lowercase character")
    .matches(/[A-Z]+/, "Must have one uppercase character")
    .matches(/[@$!%*#?&_-]+/, "Must have one special character")
    .matches(/\d+/, "Must have one number"),
  confirmPassword: Yup.string()
    .required("*Required")
    .oneOf([Yup.ref("password"), null], "Passwords does not match"),
});

const RegistrationForm = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    phonenumber: "",
    password: "",
    confirmPassword: "",
    gender: "",
    dateOfBirth: "",
  };
  const styles = useStyles();
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);
  const [errorText, setErrorText] = useState("");

  const onRegisterSuccess = (values: RegistrationFormValues) => {
    // navigate(`/verify-email/${values.email}`);
  };

  const onRegisterError = (error: any) => {
    console.log(error, "ERROR Error");
    setErrorText("User already exists");
    setIsError(true);
  };

  const { data, mutate, isLoading, isSuccess } = useRegister({
    onSuccess: (_x: any, values: RegistrationFormValues) =>
      onRegisterSuccess(values),
    onError: (error: any) => onRegisterError(error),
  });

  useEffect(() => {
    if (isSuccess === true) {
      navigate("/login");
    }
  }, [data, isSuccess]);

  const onSubmitHandler = async (values: RegistrationFormValues) => {
    console.log(values, "Register From Values");
    const formData: any = {
      firstName: values.firstName,
      lastName: values.lastName,
      role: "643fcc7d9cbbe5517bf42776",
      email: values.email,
      phonenumber: values.phonenumber,
      password: values.password,
      dateOfBirth: values.dateOfBirth,
      gender: values.gender,
    };
    mutate(formData);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmitHandler}
      validationSchema={RegistrationSchema}
    >
      {({ handleChange }) => (
        <>
          <ErrorModal
            open={isError}
            setIsOpen={setIsError}
            errorText={errorText}
          />
          <h1 className={styles.formHeader}>Registration</h1>
          <Form className={styles.formContainer}>
            <div>
              <FormField
                fieldName="firstName"
                fieldLabel="First name"
                fieldPlaceholder="John"
              />
              <FormField
                fieldName="lastName"
                fieldLabel="Last name"
                fieldPlaceholder="Miller"
              />
              <FormField
                fieldName="email"
                fieldLabel="Email"
                fieldPlaceholder="johnmiller@gmail.com"
              />
              <FormField
                fieldName="phonenumber"
                fieldLabel="Phone Number"
                fieldPlaceholder="johnmiller@gmail.com"
              />
              <FormField
                fieldName="dateOfBirth"
                fieldLabel="Date of Birth"
                // fieldPlaceholder="johnmiller@gmail.com"
              />
              <FormButton buttonVariant="contained" buttonType="submit">
                {isLoading ? <LoadingSpinner type="button" /> : "Submit"}
              </FormButton>
            </div>
            <div>
              <FormSelectField
                fieldName="gender"
                fieldLabel="Gender"
                formikChangeHandler={handleChange}
                options={GENDER}
                initialValue={"none"}
                placeholder={"Select a gender"}
              />
              <FormSelectField
                fieldName="role"
                fieldLabel="Role"
                formikChangeHandler={handleChange}
                options={ROLES_NAMES}
                initialValue={"none"}
                placeholder={"Select a role"}
              />
              <FormField
                fieldName="password"
                type="password"
                fieldLabel="Password"
                fieldPlaceholder=""
              />
              <FormField
                fieldName="confirmPassword"
                type="password"
                fieldLabel="Confirm Password"
                fieldPlaceholder=""
              />
            </div>
          </Form>
        </>
      )}
    </Formik>
  );
};

export default RegistrationForm;

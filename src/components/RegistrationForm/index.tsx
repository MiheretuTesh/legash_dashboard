import React, { useState } from "react";
import { Formik, Form } from "formik";
import FormField from "../FormField";
import { useStyles } from "./index.style";
import { useNavigate } from "react-router-dom";
import FormButton from "../FormButton";
import FormSelectField from "../FormSelectField";
import * as Yup from "yup";
import { ROLES_NAMES } from "../../constants";
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
  company: Yup.string().required("*Required"),
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
    company: "",
    password: "",
    confirmPassword: "",
  };
  const styles = useStyles();
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);
  const [errorText, setErrorText] = useState("");

  const onRegisterSuccess = (values: RegistrationFormValues) => {
    navigate(`/verify-email/${values.email}`);
  };

  const onRegisterError = (error: any) => {
    setErrorText("User already exists");
    setIsError(true);
  };

  const { mutate, isLoading } = useRegister({
    onSuccess: (_x: any, values: RegistrationFormValues) =>
      onRegisterSuccess(values),
    onError: (error: any) => onRegisterError(error),
  });

  const onSubmitHandler = async (values: RegistrationFormValues) => {
    // mutate(values);
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
          <Form className={styles.formContainer}>
            <h1 className={styles.formHeader}>Registration</h1>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "space-between",
                width: "100%",
              }}
            >
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
              </div>
              <div style={{ width: "1em" }}></div>
              <div>
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
            </div>

            <FormButton buttonVariant="contained" buttonType="submit">
              {isLoading ? <LoadingSpinner type="button" /> : "Submit"}
            </FormButton>
          </Form>
        </>
      )}
    </Formik>
  );
};

export default RegistrationForm;

import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import FormButton from "../../components/FormButton";
import FormField from "../../components/FormField";
import IconUnderlinedButton from "../../components/IconUnderlinedButton";
import { useStyles } from "./index.style";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useLocation, useNavigate } from "react-router-dom";
import { useConfirmPasswordReset } from "../../hooks/useConfirmPasswordReset";
import LoadingSpinner from "../../components/LoadingSpinner";
import { ConfirmPasswordResetFormValues } from "../../types";

const SetNewPasswordSchema = Yup.object().shape({
  newPassword: Yup.string()
    .required("*Required")
    .min(8, "Must be 8 characters or more")
    .matches(/[a-z]+/, "Must have one lowercase character")
    .matches(/[A-Z]+/, "Must have one uppercase character")
    .matches(/[@$!%*#?&_-]+/, "Must have one special character")
    .matches(/\d+/, "Must have one number"),
  confirmNewPassword: Yup.string()
    .required("*Required")
    .oneOf([Yup.ref("newPassword"), null], "Passwords does not match"),
});

const SetNewPasswordPage = () => {
  const styles = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const token = urlParams.get("token");

  const onConfirmPasswordResetSuccess = () => {
    navigate(`/success/password-reset`);
  };

  const { mutate, isLoading } = useConfirmPasswordReset({
    onSuccess: onConfirmPasswordResetSuccess,
  });

  const initialValues = {
    newPassword: "",
    confirmNewPassword: "",
  };

  const onBackToLoginClickHandler = () => {
    navigate("/login");
  };

  const onSubmitHandler = (values: ConfirmPasswordResetFormValues) => {
    mutate({ password: values.newPassword, token: token || "" });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmitHandler}
      validationSchema={SetNewPasswordSchema}
    >
      {() => (
        <>
          <Form className={styles.formContainer}>
            <h1 className={styles.formHeader}>Set new password</h1>
            <p className={styles.subText}>
              Your new password must be different to previously used passwords.
            </p>
            <FormField
              fieldName="newPassword"
              type="password"
              fieldLabel="New password"
              fieldPlaceholder=""
            />
            <FormField
              fieldName="confirmNewPassword"
              type="password"
              fieldLabel="Confirm new password"
              fieldPlaceholder=""
            />
            <FormButton buttonVariant="contained" buttonType="submit">
              {isLoading ? <LoadingSpinner type="button" /> : "Reset password"}
            </FormButton>
            <IconUnderlinedButton
              customStyle={styles.backBtn}
              icon={<KeyboardBackspaceIcon />}
              onClick={onBackToLoginClickHandler}
            >
              Back to login
            </IconUnderlinedButton>
          </Form>
        </>
      )}
    </Formik>
  );
};

export default SetNewPasswordPage;

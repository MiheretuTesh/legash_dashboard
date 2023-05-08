import { Formik, Form, FormikHelpers } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { useChangePassword } from "../../hooks/useChangePassword";
import { ChangePasswordFormValues } from "../../types";
import FormButton from "../FormButton";
import FormField from "../FormField";
import LoadingSpinner from "../LoadingSpinner";
import Fade from "@mui/material/Fade";
import { useStyles } from "./index.style";
import { SuccessIcon } from "../../assets";

const ChangePasswordSchema = Yup.object().shape({
  oldPassword: Yup.string().required("*Required"),
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

const ChangePassword = () => {
  const styles = useStyles();
  const [isChangeSuccess, setIsChangeSuccess] = useState(false);
  const initialValues = {
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  };

  const onChangePasswordSuccess = () => {
    setIsChangeSuccess(true);
    setTimeout(() => {
      setIsChangeSuccess(false);
    }, 1000);
  };

  const { mutate, isLoading } = useChangePassword({
    onSuccess: onChangePasswordSuccess,
  });

  const onSubmitHandler = (
    values: ChangePasswordFormValues,
    { resetForm }: FormikHelpers<ChangePasswordFormValues>
  ) => {
    setIsChangeSuccess(true);
    mutate({
      oldPassword: values.oldPassword,
      newPassword: values.newPassword,
      newPasswordConfirm: values.confirmNewPassword,
    });
    resetForm();
  };

  return (
    <div className={styles.container}>
      <p className={styles.changePasswordTxt}>
        Your new password must be different to previously used passwords.
      </p>

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmitHandler}
        validationSchema={ChangePasswordSchema}
      >
        {({ resetForm }) => (
          <>
            <Form className={styles.formContainer}>
              <FormField
                fieldName="oldPassword"
                type="password"
                fieldLabel="Old password"
                fieldPlaceholder=""
                customFieldStyle={styles.formField}
              />
              <FormField
                fieldName="newPassword"
                type="password"
                fieldLabel="New password"
                fieldPlaceholder=""
                customFieldStyle={styles.formField}
              />
              <FormField
                fieldName="confirmNewPassword"
                type="password"
                fieldLabel="Confirm new password"
                fieldPlaceholder=""
                customFieldStyle={styles.formField}
              />
              <FormButton buttonType="submit" buttonVariant="contained">
                {isLoading ? (
                  <LoadingSpinner type="button" />
                ) : (
                  <>
                    <Fade in={isChangeSuccess}>
                      <img
                        className={styles.successIcon}
                        src={SuccessIcon}
                        alt="success"
                      />
                    </Fade>
                    {isChangeSuccess ? "" : "Change password"}
                  </>
                )}
              </FormButton>
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
};

export default ChangePassword;

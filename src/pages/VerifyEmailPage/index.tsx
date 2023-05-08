import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import FormButton from "../../components/FormButton";
import FormField from "../../components/FormField";
import { useStyles } from "./index.style";
import { useNavigate, useParams } from "react-router-dom";
import { useVerifyEmail } from "../../hooks/useVerifyEmail";
import LoadingSpinner from "../../components/LoadingSpinner";
import { useGetCode } from "../../hooks/useGetCode";

interface Values {
  field_1: string;
  field_2: string;
  field_3: string;
  field_4: string;
}

const VerifyEmailPage = () => {
  const styles = useStyles();
  const { email } = useParams();
  const navigate = useNavigate();

  const onVerifySuccess = () => {
    navigate("/success/email-verified");
  };

  const { mutate: verifyEmail, isLoading: verifyEmailLoading } = useVerifyEmail(
    { onSuccess: onVerifySuccess }
  );
  const { mutate: resendCode, isLoading: resendCodeLoading } = useGetCode();

  const initialValues = {
    field_1: "",
    field_2: "",
    field_3: "",
    field_4: "",
  };

  const ForgotPasswordSchema = Yup.object().shape({
    field_1: Yup.string().required(""),
    field_2: Yup.string().required(""),
    field_3: Yup.string().required(""),
    field_4: Yup.string().required("*Required"),
  });

  const onResendClickHandler = (email: string | undefined) => {
    resendCode({ email: email || "" });
  };

  const onSubmitHandler = (values: Values) => {
    let verificationCode = `${values.field_1}${values.field_2}${values.field_3}${values.field_4}`;
    verifyEmail({ email: email || "", verificationCode });
  };

  const handleChange = (e: React.ChangeEvent<any>) => {
    const { maxLength, value, name } = e.target;
    const [, fieldIndex] = name.split("_");

    let fieldIntIndex = parseInt(fieldIndex, 10);

    // Check if no of char in field == maxlength
    if (value.length >= maxLength) {
      // It should not be last input field
      if (fieldIntIndex < 4) {
        // Get the next input field using it's name
        const nextfield: HTMLElement | null = document.querySelector(
          `input[name=field_${fieldIntIndex + 1}]`
        );

        // If found, focus the next field
        if (nextfield !== null) {
          nextfield.focus();
        }
      }
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmitHandler}
      validationSchema={ForgotPasswordSchema}
    >
      {({ values, handleChange: formikChangeHandler, resetForm }) => {
        return (
          <>
            <Form className={styles.formContainer}>
              <h1 className={styles.formHeader}>Verify email</h1>
              <p className={styles.subText}>
                An email with a verification code has been sent to your email.
              </p>
              <div className={styles.verficationCodesContainer}>
                <FormField
                  customFieldStyle={styles.verficationCode}
                  customErrorFieldStyle={styles.errorMessage}
                  fieldName="field_1"
                  oneDigit
                  handleChange={handleChange}
                  formikChangeHandler={formikChangeHandler}
                />
                <FormField
                  customFieldStyle={styles.verficationCode}
                  customErrorFieldStyle={styles.errorMessage}
                  fieldName="field_2"
                  oneDigit
                  handleChange={handleChange}
                  formikChangeHandler={formikChangeHandler}
                />
                <FormField
                  customFieldStyle={styles.verficationCode}
                  customErrorFieldStyle={styles.errorMessage}
                  fieldName="field_3"
                  oneDigit
                  handleChange={handleChange}
                  formikChangeHandler={formikChangeHandler}
                />
                <FormField
                  customFieldStyle={styles.verficationCode}
                  customErrorFieldStyle={styles.errorMessage}
                  fieldName="field_4"
                  oneDigit
                  handleChange={handleChange}
                  formikChangeHandler={formikChangeHandler}
                />
              </div>
              <FormButton
                customStyle={styles.continueBtn}
                buttonVariant="contained"
                buttonType="submit"
              >
                {verifyEmailLoading || resendCodeLoading ? (
                  <LoadingSpinner type="button" />
                ) : (
                  "Continue"
                )}
              </FormButton>
              <p className={styles.subText}>
                Didn’t receive the code?&nbsp;
                <span
                  className={styles.resend}
                  onClick={() => {
                    onResendClickHandler(email);
                    resetForm();
                  }}
                >
                  Click to resend
                </span>
              </p>
            </Form>
          </>
        );
      }}
    </Formik>
  );
};

export default VerifyEmailPage;

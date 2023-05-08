import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import FormButton from "../../components/FormButton";
import FormField from "../../components/FormField";
import IconUnderlinedButton from "../../components/IconUnderlinedButton";
import { useStyles } from "./index.style";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import { useResetPassword } from "../../hooks/useResetPassword";
import LoadingSpinner from "../../components/LoadingSpinner";

interface Values {
  email: string;
}

const ForgotPasswordPage = () => {
  const styles = useStyles();
  const navigate = useNavigate();

  const onResetPasswordSuccess = (data: any) => {
    navigate(`/check-your-email/${JSON.parse(data.config.data).email}`);
  };

  const { mutate, isLoading } = useResetPassword({
    onSuccess: (data: any) => onResetPasswordSuccess(data),
  });

  const initialValues = {
    email: "",
  };

  const ForgotPasswordSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("*Required"),
  });

  const onBackToLoginClickHandler = () => {
    navigate("/login");
  };

  const onSubmitHandler = (values: Values) => {
    mutate({ email: values.email });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmitHandler}
      validationSchema={ForgotPasswordSchema}
    >
      {() => (
        <>
          <Form className={styles.formContainer}>
            <h1 className={styles.formHeader}>Forget password?</h1>
            <p className={styles.subText}>
              No worries, we’ll send you reset instructions.
            </p>
            <FormField
              fieldName="email"
              fieldLabel="Email"
              fieldPlaceholder="johnmiller@gmail.com"
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

export default ForgotPasswordPage;

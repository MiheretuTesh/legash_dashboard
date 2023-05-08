import React from "react";
import IconUnderlinedButton from "../../components/IconUnderlinedButton";
import { useStyles } from "./index.style";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate, useParams } from "react-router-dom";
import { useResetPassword } from "../../hooks/useResetPassword";
import LoadingSpinner from "../../components/LoadingSpinner";

const CheckYourEmailPage = () => {
  const styles = useStyles();
  const { email } = useParams();
  const navigate = useNavigate();

  const { mutate, isLoading } = useResetPassword({});

  const onBackToLoginClickHandler = () => {
    navigate("/login");
  };

  const onResendEmailHandler = () => {
    mutate({ email: email || "" });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Check your email</h1>
      <p className={styles.subText}>
        We sent a password reset link to&nbsp;
        <span className={styles.email}>{email}</span>
      </p>
      <p className={styles.subText}>
        {isLoading ? (
          <LoadingSpinner type="text" />
        ) : (
          <>
            Didn’t receive the email?&nbsp;
            <span className={styles.resend} onClick={onResendEmailHandler}>
              Click to resend
            </span>
          </>
        )}
      </p>
      <IconUnderlinedButton
        customStyle={styles.backBtn}
        icon={<KeyboardBackspaceIcon />}
        onClick={onBackToLoginClickHandler}
      >
        Back to login
      </IconUnderlinedButton>
    </div>
  );
};

export default CheckYourEmailPage;

import React from "react";
import { Link } from "react-router-dom";
import RegistrationForm from "../../components/RegistrationForm";
import { useStyles } from "./index.style";

const RegisterPage = () => {
  const styles = useStyles();

  return (
    <div className={styles.pageContainer}>
      <RegistrationForm />
      <p className={styles.loginQuestionTxt}>
        Are you already registered?&nbsp;
        <Link
          className={`${styles.loginQuestionTxt} ${styles.loginActionTxt}`}
          to={"/login"}
        >
          Login
        </Link>
      </p>
    </div>
  );
};

export default RegisterPage;

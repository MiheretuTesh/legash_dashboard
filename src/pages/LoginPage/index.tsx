import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm";
import { useStyles } from "./index.style";

const LoginPage = () => {
  const styles = useStyles();

  return (
    <div className={styles.pageContainer}>
        <LoginForm />
        <div className={styles.questionContainer}>
        <p className={styles.registerQuestionTxt}>
          Not registered yet?&nbsp;
          <Link
            className={`${styles.registerQuestionTxt} ${styles.registerActionTxt}`}
            to={"/register"}
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

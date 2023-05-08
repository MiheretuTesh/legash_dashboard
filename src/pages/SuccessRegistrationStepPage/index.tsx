import React from "react";
import FormButton from "../../components/FormButton";
import { useStyles } from "./index.style";
import { useNavigate, useParams } from "react-router-dom";
import { SuccessIcon } from "../../assets";

const SuccessRegistrationStepPage = () => {
  const styles = useStyles();
  const navigate = useNavigate();
  const { type } = useParams();

  const onContinueClickHandler = () => {
    navigate("/login");
  };

  return (
    <div className={styles.container}>
      <img className={styles.icon} src={SuccessIcon} alt="success" />
      <h1 className={styles.header}>
        {type === "email-verified" && "Email verified"}
        {type === "password-reset" && "Password reset"}
      </h1>
      <p className={styles.subText}>
        {type === "email-verified" &&
          "Your password has been succesfully reset."}
        {type === "password-reset" &&
          "Your password has been successfully reset."}
        <br />
        Click below to login.
      </p>
      <FormButton
        buttonVariant="contained"
        buttonType="button"
        onButtonClick={onContinueClickHandler}
      >
        Continue
      </FormButton>
    </div>
  );
};

export default SuccessRegistrationStepPage;

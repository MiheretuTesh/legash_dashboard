import React from "react";
import { Button } from "@mui/material";
import { useStyles } from "./index.style";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const styles = useStyles();
  const navigate = useNavigate();

  const onRegisterClickHandler = () => {
    navigate("/register");
  };

  const onLoginClickHandler = () => {
    navigate("/login");
  };

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageHeader}>Lorem ipsum</h1>
      <p className={styles.pageSubheader}>
          If you identify yourself as a Fund or an Asset Manager kindly register yourself as a Fund/Asset Manager.
      </p>
        <br/>
        <p className={styles.pageSubheader}>
            If you identify yourself as a technical due diligence personal kindly register yourself as a Consultant.
        </p>
      <div className={styles.btnsContainer}>
        <Button
          className={styles.registerBtn}
          variant="contained"
          onClick={onRegisterClickHandler}
        >
          Register
        </Button>
        <Button
          className={styles.loginBtn}
          variant="outlined"
          onClick={onLoginClickHandler}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default HomePage;

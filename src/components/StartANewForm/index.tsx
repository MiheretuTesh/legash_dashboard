import React from "react";
import { useNavigate } from "react-router-dom";
import ConsultantHomePageCard from "../ConsultantHomePageCard";
import { useStyles } from "./index.style";

const EXAMPLE_TEXT =
  "Please complete the form by providing building data.";

const StartANewForm = ({parentRoute}:any) => {
  const styles = useStyles();
  const navigate = useNavigate();

  const onClickHandler = () => {
      if(parentRoute === "account-admin"){
          navigate("/account-admin/newform");
      }else{
          navigate(`/${parentRoute}/new-onsite-checklist`);
      }
  };

  return (
    <div className={styles.container}>
      <ConsultantHomePageCard
        text={EXAMPLE_TEXT}
        onViewClick={onClickHandler}
      />
    </div>
  );
};

export default StartANewForm;
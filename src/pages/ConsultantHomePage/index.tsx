import React from "react";
import { useStyles } from "./index.style";
import { useNavigate } from "react-router-dom";
import ConsultantHomePageCard from "../../components/ConsultantHomePageCard";

const NEW_FORM_CARD_TXT =
  "Kindly fill in all the key building details and assumptions in the form.";

const ConsultantHomePage = () => {
  const styles = useStyles();
  const navigate = useNavigate();

  const onFormsViewClickHandler = () => {
    navigate("/account-consultant/forms");
  };
  const onDashboardsViewClickHandler = () => {
    navigate("/account-consultant/dashboards");
  };

  return (
    <div className={styles.container}>
      <ConsultantHomePageCard
        onViewClick={onFormsViewClickHandler}
        title="Forms"
        text={NEW_FORM_CARD_TXT}
      />
      <ConsultantHomePageCard
        onViewClick={onDashboardsViewClickHandler}
        title="Dashboards"
        text={NEW_FORM_CARD_TXT}
      />
    </div>
  );
};

export default ConsultantHomePage;

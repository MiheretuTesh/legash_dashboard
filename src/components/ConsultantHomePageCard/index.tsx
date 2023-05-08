import React from "react";
import FormButton from "../FormButton";
import { useStyles } from "./index.style";

interface ConsultantHomePageCardProps {
  title?: string;
  text: string;
  onViewClick: () => void;
}

const ConsultantHomePageCard = ({
  title,
  text,
  onViewClick,
}: ConsultantHomePageCardProps) => {
  const styles = useStyles();

  return (
    <div className={styles.cardContainer}>
      {title && <h1 className={styles.cardTitle}>{title}</h1>}
      <p className={styles.cardTxt}>{text}</p>
      <FormButton
        customStyle={styles.cardButton}
        buttonType="button"
        buttonVariant="contained"
        onButtonClick={onViewClick}
      >
        {title === "Dashboards" ? "View" : "New Form"}
      </FormButton>
    </div>
  );
};

export default ConsultantHomePageCard;

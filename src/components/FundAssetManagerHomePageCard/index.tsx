import React from "react";
import FormButton from "../FormButton";
import { useStyles } from "./index.style";

interface FundAssetManagerHomePageCardProps {
  title?: string;
  text: string;
  onViewClick: () => void;
}

const FundAssetManagerHomePageCard = ({
  title,
  text,
  onViewClick,
}: FundAssetManagerHomePageCardProps) => {
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

export default FundAssetManagerHomePageCard;

import React from "react";
import { useStyles } from "./index.style";
import LoadingSpinner from "../LoadingSpinner";

interface HomeCardProps {
  name: string;
  value: string;
  isPercent: boolean;
  isLoading: boolean;
}

const HomeCard = ({ name, value, isPercent, isLoading }: HomeCardProps) => {
  const styles = useStyles();
  return (
    <div className={`${styles.cardContainer}`}>
      {isLoading ? (
        <div className={styles.loaderStyle}>
          <LoadingSpinner />
        </div>
      ) : (
        <>
          <div className={styles.headerContainer}>
            <h1 className={styles.headerText}>{name}</h1>
          </div>
          {isPercent ? (
            <div className={styles.cardTxt}>{value}%</div>
          ) : (
            <div className={styles.cardTxt}>{value} birr</div>
          )}
        </>
      )}
    </div>
  );
};

export default HomeCard;

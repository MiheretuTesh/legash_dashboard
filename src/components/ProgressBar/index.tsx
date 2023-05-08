import React from "react";
import { useStyles } from "./index.style";

interface ProgressBarProps {
  numberOfSteps: number;
  currentStep: number;
  customStyle?: string;
}

const ProgressBar = ({
  numberOfSteps,
  currentStep,
  customStyle,
}: ProgressBarProps) => {
  const styles = useStyles();
  return (
    <div className={`${styles.container} ${customStyle}`}>
      <span className={styles.stepsTxt}>
        {currentStep}/<p className={styles.totalSteps}>{numberOfSteps}</p>
      </span>
      <div className={styles.barsContainer}>
        {[...Array(numberOfSteps)].map((step, index) => {
          return (
            <div
              key={`${index}-${step}`}
              className={`${styles.bar} ${
                currentStep >= index + 1 ? styles.passed : ""
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;

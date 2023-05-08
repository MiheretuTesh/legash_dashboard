import { Box, CircularProgress } from "@mui/material";
import React from "react";
import { useStyles } from "./index.style";

interface LoadingSpinnerProps {
  customStyle?: string;
  type?: string;
}

const LoadingSpinner = ({ customStyle, type }: LoadingSpinnerProps) => {
  const styles = useStyles();
  return (
    <Box
      className={`${styles.container} ${
        type === "button"
          ? styles.btnLoading
          : type === "text"
          ? styles.textLoading
          : type === "page"
          ? styles.pageLoading
          : type === "submitBtn"
          ? styles.submitBtn
          : ""          
      }`}
    >
      <CircularProgress
        size={type === "button" || type === "text" ? "1.5rem" : type === "submitBtn" ? "1.2rem" : "3rem"}
      />
    </Box>
  );
};

export default LoadingSpinner;

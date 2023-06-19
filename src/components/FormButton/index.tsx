import { Button } from "@mui/material";
import React from "react";
import { useStyles } from "./index.style";

interface FormButtonProps {
  children: React.ReactNode;
  buttonType: "button" | "reset" | "submit" | undefined;
  buttonVariant: "text" | "contained" | "outlined" | undefined;
  customStyle?: string;
  onButtonClick?: () => void;
  disabled?: boolean;
}

const FormButton = ({
  children,
  buttonType,
  buttonVariant,
  customStyle,
  onButtonClick,
  disabled,
}: FormButtonProps) => {
  const styles = useStyles();
  return (
    <Button
      className={
        buttonType === "button"
          ? `${styles.terminateContainer} ${customStyle}`
          : `${styles.btnContainer} ${customStyle}`
      }
      variant={buttonVariant}
      type={buttonType}
      onClick={onButtonClick}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

export default FormButton;

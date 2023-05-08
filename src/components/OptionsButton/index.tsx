import { IconButton } from "@mui/material";
import React from "react";
import { OptionsIcon } from "../../assets";
import { useStyles } from "./index.style";

interface OptionsButtonProps {
  onButtonClick?: () => void;
}

const OptionsButton = ({ onButtonClick }: OptionsButtonProps) => {
  const styles = useStyles();
  return (
    <IconButton className={styles.btnContainer} onClick={onButtonClick}>
      <OptionsIcon />
    </IconButton>
  );
};

export default OptionsButton;

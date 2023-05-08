import { Button } from "@mui/material";
import React from "react";
import { EditIcon } from "../../assets";
import { useStyles } from "./index.style";

interface EditButtonProps {
  isDisabled?: boolean;
  onButtonClick?: () => void;
}

const EditButton = ({ isDisabled, onButtonClick }: EditButtonProps) => {
  const styles = useStyles();
  return (
    <Button
      variant="outlined"
      className={styles.actionBtn}
      startIcon={<EditIcon />}
      disabled={isDisabled}
      onClick={onButtonClick}
    >
      Edit
    </Button>
  );
};

export default EditButton;

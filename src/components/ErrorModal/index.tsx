import React from "react";
import Modal from "@mui/material/Modal";
import { useStyles } from "./index.style";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface ErrorModalProps {
  open: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  errorText: string;
}

const ErrorModal = ({ open, setIsOpen, errorText }: ErrorModalProps) => {
  const styles = useStyles();

  const onCloseHandler = () => {
    setIsOpen(false);
  };

  return (
    <Modal open={open} onClose={onCloseHandler}>
      <div className={styles.modalContainer}>
        <div className={styles.cancelBtn}>
          <IconButton onClick={onCloseHandler}>
            <CloseIcon />
          </IconButton>
        </div>
        <h1 className={styles.errorHeader}>Error</h1>
        <p className={styles.errorText}>{errorText}</p>
      </div>
    </Modal>
  );
};

export default ErrorModal;

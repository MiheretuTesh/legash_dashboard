import { ErrorMessage, Field } from "formik";
import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import DoneIcon from "@mui/icons-material/Done";
import { useStyles } from "./index.style";
import { EditIcon } from "../../assets";

interface FormEditableFieldProps {
  fieldName: string;
  fieldLabel: string;
  customStyle?: string;
  isDisabled?: boolean;
  setIsProfileEdited: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormEditableField = ({
  fieldName,
  fieldLabel,
  customStyle,
  isDisabled,
  setIsProfileEdited,
}: FormEditableFieldProps) => {
  const styles = useStyles();
  const [isEditable, setIsEditable] = useState(false);

  const onEditClickHandler = () => {
    setIsEditable(true);
    setIsProfileEdited(true);
  };
  const onDoneClickHandler = () => {
    setIsEditable(false);
  };

  return (
    <div className={`${styles.container} ${customStyle}`}>
      <label className={styles.label} htmlFor={fieldName}>
        {fieldLabel}
      </label>
      <div className={styles.fieldContainer}>
        <Field
          className={styles.field}
          disabled={!isEditable}
          name={fieldName}
          type={
            fieldName === "password" || fieldName === "confirmPassword"
              ? "password"
              : "text"
          }
        />
        {isEditable ? (
          <IconButton
            className={styles.iconBtnContainer}
            onClick={onDoneClickHandler}
          >
            <DoneIcon className={styles.doneIcon} />
          </IconButton>
        ) : (
          <IconButton
            className={styles.iconBtnContainer}
            onClick={onEditClickHandler}
          >
            <EditIcon />
          </IconButton>
        )}
      </div>
      <ErrorMessage
        className={styles.errorMessageTxt}
        name={fieldName}
        component={"p"}
      />
    </div>
  );
};

export default FormEditableField;

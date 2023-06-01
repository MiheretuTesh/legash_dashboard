import React from "react";
import FormSelectField from "../FormSelectField";
import { useStyles } from "./index.style";

interface SideLabelFormSelectFieldProps {
  fieldLabel?: string;
  fieldName: string;
  fieldPlaceholder?: string;
  options: any[];
  customFieldStyle?: string;
  initialValue?: string;
  formikChangeHandler?: {
    (e: React.ChangeEvent<any>): void;
    <T = string | React.ChangeEvent<any>>(
      field: T
    ): T extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
  isFormName?: string;
}

const SideLabelFormSelectField = ({
  fieldLabel,
  fieldName,
  fieldPlaceholder,
  options,
  customFieldStyle,
  initialValue,
  isFormName,
  formikChangeHandler,
}: SideLabelFormSelectFieldProps) => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <label className={styles.label}>{fieldLabel}</label>
      <FormSelectField
        customStyle={`${styles.field} ${customFieldStyle}`}
        fieldName={fieldName}
        options={options}
        initialValue={initialValue ? initialValue : options[0]}
        placeholder={fieldPlaceholder}
        formikChangeHandler={formikChangeHandler}
        isFormName={isFormName}
      />
    </div>
  );
};

export default SideLabelFormSelectField;

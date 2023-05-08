import React from "react";
import FormField from "../FormField";
import { useStyles } from "./index.style";

interface SideLabelFormFieldProps {
  fieldLabel?: string;
  fieldName: string;
  fieldPlaceholder?: string;
  customStyle?: string;
  isDisabled?: boolean;
  customFieldStyle?: string;
  unit?: string;
  type?: string;
}

const SideLabelFormField = ({
  fieldLabel,
  fieldName,
  fieldPlaceholder,
  customStyle,
  customFieldStyle,
  isDisabled,
  unit,
  type,
}: SideLabelFormFieldProps) => {
  const styles = useStyles();
  return (
    <div className={`${styles.container} ${customStyle}`}>
      <label className={styles.label}>{fieldLabel}</label>
      <div className={`${styles.fieldContainer} ${customFieldStyle}`}>
        <FormField
          customStyle={styles.field}
          fieldName={fieldName}
          fieldPlaceholder={fieldPlaceholder}
          isDisabled={isDisabled}
          type={type}
        />
        {unit && <p className={styles.unit}>{unit}</p>}
      </div>
    </div>
  );
};

export default SideLabelFormField;

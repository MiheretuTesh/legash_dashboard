import React from "react";
import FormField from "../FormField";
import { useStyles } from "./index.style";

interface SideLabelFormFieldCampaignProps {
  formikChangeHandler: {
    (e: React.ChangeEvent<any>): void;
    <T = string | React.ChangeEvent<any>>(
      field: T
    ): T extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
  fieldLabel?: string;
  fieldName: string;
  fieldPlaceholder?: string;
  customStyle?: string;
  isDisabled?: boolean;
  customFieldStyle?: string;
  unit?: string;
  type?: string;
}

const SideLabelFormFieldCampaign = ({
  fieldLabel,
  fieldName,
  fieldPlaceholder,
  customStyle,
  customFieldStyle,
  isDisabled,
  unit,
  type,
  formikChangeHandler,
}: SideLabelFormFieldCampaignProps) => {
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
          formikChangeHandler={formikChangeHandler}
        />
        {unit && <p className={styles.unit}>{unit}</p>}
      </div>
    </div>
  );
};

export default SideLabelFormFieldCampaign;

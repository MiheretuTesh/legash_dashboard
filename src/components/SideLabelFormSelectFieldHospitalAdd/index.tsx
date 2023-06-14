import React from "react";
import FormSelectFieldHospitalAdd from "../FormSelectFieldHospitalAdd";
import { useStyles } from "./index.style";

interface SideLabelFormSelectFieldHospitalAddProps {
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
  setHospitalAdminId: Function;
}

const SideLabelFormSelectFieldHospitalAdd = ({
  fieldLabel,
  fieldName,
  fieldPlaceholder,
  options,
  customFieldStyle,
  initialValue,
  isFormName,
  formikChangeHandler,
  setHospitalAdminId,
}: SideLabelFormSelectFieldHospitalAddProps) => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <label className={styles.label}>{fieldLabel}</label>
      <FormSelectFieldHospitalAdd
        customStyle={`${styles.field} ${customFieldStyle}`}
        fieldName={fieldName}
        options={options}
        initialValue={initialValue ? initialValue : options[0]}
        placeholder={fieldPlaceholder}
        formikChangeHandler={formikChangeHandler}
        isFormName={isFormName}
        setHospitalAdminId={setHospitalAdminId}
      />
    </div>
  );
};

export default SideLabelFormSelectFieldHospitalAdd;

import React from "react";
import FormSelectFieldCampaignAdd from "../FormSelectFieldCampaignAdd";
import { useStyles } from "./index.style";

interface SideLabelFormSelectFieldCampaignAddProps {
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
  setHospitalId: Function;
  setPatientId: Function;
}

const SideLabelFormSelectFieldCampaignAdd = ({
  fieldLabel,
  fieldName,
  fieldPlaceholder,
  options,
  customFieldStyle,
  initialValue,
  isFormName,
  formikChangeHandler,
  setHospitalId,
  setPatientId,
}: SideLabelFormSelectFieldCampaignAddProps) => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <label className={styles.label}>{fieldLabel}</label>
      <FormSelectFieldCampaignAdd
        customStyle={`${styles.field} ${customFieldStyle}`}
        fieldName={fieldName}
        options={options}
        initialValue={initialValue ? initialValue : options[0]}
        placeholder={fieldPlaceholder}
        formikChangeHandler={formikChangeHandler}
        isFormName={isFormName}
        setHospitalId={setHospitalId}
        setPatientId={setPatientId}
      />
    </div>
  );
};

export default SideLabelFormSelectFieldCampaignAdd;

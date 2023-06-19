import React, { useState } from "react";
import { AssumtionFormValues } from "../../types";
import SideLabelFormField from "../SideLabelFormField";
import SideLabelFormSelectField from "../SideLabelFormSelectField";
import { useStyles } from "./index.style";
import ImageUpload from "../ImageUpload";
import ImageUploads from "../ImageUploads";
import {
  CITIES,
  STATES,
  COUNTRIES,
  AM_CITIES,
  AM_COUNTRY,
  AM_STATE,
} from "../../constants/constant";

interface CampaignDataFormProps {
  formikChangeHandler: {
    (e: React.ChangeEvent<any>): void;
    <T = string | React.ChangeEvent<any>>(
      field: T
    ): T extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
  assumptionFormValues?: AssumtionFormValues;
  setImagUploadUrl: Function;
  setImageUrlGenerated: Function;
  setImageUrls: any;
}

const CampaignDataForm = ({
  formikChangeHandler,
  assumptionFormValues,
  setImagUploadUrl,
  setImageUrlGenerated,
  setImageUrls,
}: CampaignDataFormProps) => {
  const styles = useStyles();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <div className={styles.container}>
        <div className={styles.fieldsContainer}>
          <h3>English</h3>
          <ImageUpload
            setImageUrlGenerated={setImageUrlGenerated}
            setImagUploadUrl={setImagUploadUrl}
          />
          <ImageUploads setImageUrls={setImageUrls} />
          <SideLabelFormField
            fieldLabel="Title"
            fieldName="campaignTitle"
            fieldPlaceholder="Help Simon"
          />
          <SideLabelFormField
            fieldLabel="Campaign Description"
            fieldName="campaignDescription"
            fieldPlaceholder="Campaign Description"
          />
          <SideLabelFormField
            fieldLabel="Treatment Required"
            fieldName="treatmentRequired"
            fieldPlaceholder="Treatment Required"
          />
          <SideLabelFormField
            fieldLabel="Diagnosis"
            fieldName="diagnosis"
            fieldPlaceholder="Diagnosis"
          />
          <SideLabelFormField
            fieldLabel="Target Funding"
            fieldName="targetFunding"
            fieldPlaceholder="Target Funding"
          />
          <SideLabelFormSelectField
            formikChangeHandler={formikChangeHandler}
            fieldLabel="Has Explicit Content"
            fieldName="hasExplicitContent"
            initialValue={
              assumptionFormValues?.developmentState !== ""
                ? assumptionFormValues?.developmentState
                : "none"
            }
            fieldPlaceholder="Select"
            options={["Yes", "No"]}
            isFormName="campaign_create_1"
          />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.fieldsContainer}>
          <h3>Amharic</h3>
          <SideLabelFormField
            fieldLabel="ርዕስ"
            fieldName="am_campaignTitle"
            fieldPlaceholder="ሳምሶንን እርዱት"
          />
          <SideLabelFormField
            fieldLabel="ማብራሪያ"
            fieldName="am_campaignDescription"
            fieldPlaceholder="ማብራሪያ"
          />
          <SideLabelFormField
            fieldLabel="ህክምና"
            fieldName="am_treatmentRequired"
            fieldPlaceholder="ህክምና"
          />
          <SideLabelFormField
            fieldLabel="ምርመራ"
            fieldName="am_diagnosis"
            fieldPlaceholder="ምርመራ"
          />
        </div>
      </div>
    </div>
  );
};

export default CampaignDataForm;

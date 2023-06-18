import React, { useState, useEffect } from "react";
import { AssumtionFormValues } from "../../types";
import SideLabelFormField from "../SideLabelFormField";
import SideLabelFormSelectFieldCampaignAdd from "../SideLabelFormSelectFieldCampaignAdd";
import SideLabelFormFieldCampaign from "../SideLabelFormFieldCampaign";
import { useStyles } from "./index.style";
import { BANKS, COUNTRIES } from "../../constants/constant";
import { useGetAllUsers } from "../../hooks/useGetAllUsers";
import { useGetHospitals } from "../../hooks/useGetHospitals";

interface CampaignDataForm2Props {
  formikChangeHandler: {
    (e: React.ChangeEvent<any>): void;
    <T = string | React.ChangeEvent<any>>(
      field: T
    ): T extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
  assumptionFormValues?: AssumtionFormValues;
  setPatientId: Function;
  setHospitalId: Function;
}

const CampaignDataForm2 = ({
  formikChangeHandler,
  assumptionFormValues,
  setHospitalId,
  setPatientId,
}: CampaignDataForm2Props) => {
  const styles = useStyles();

  const [allUsers, setAllUsers]: any = useState([]);
  const [allHospitals, setAllHospitals]: any = useState([]);

  const campaignAddHandler = () => {};
  const {
    dataUsers,
    isLoadingUsers,
    isSuccess: isAllUsersFetched,
  } = useGetAllUsers({});

  const { dataHospitals, isLoadingHospitals } = useGetHospitals({});

  useEffect(() => {
    if (dataUsers?.data.length > 0) {
      const tableData: any[] = [];
      console.log(dataUsers, "dataUsers dataUsers dataUsers");

      dataUsers?.data.forEach((data: any) => {
        if (data?.occupation?.occupationType === "Patient") {
          tableData.push({
            id: data._id,
            name: `${data.firstName} ${data.lastName}`,
            email: data.email,
          });













































































































          
        }
      });
      setAllUsers(tableData);
    } else {
      setAllUsers([]);
    }

    return () => {
      setAllUsers([]);
    };
  }, [dataUsers]);

  useEffect(() => {
    if (dataHospitals?.data.length > 0) {
      const tableData: any[] = [];

      dataHospitals?.data.forEach((data: any) => {
        tableData.push({
          id: data._id,
          name: data.name,
          email: data.email,
        });
      });
      setAllHospitals(tableData);
    } else {
      setAllHospitals([]);
    }
    return () => {
      setAllHospitals([]);
    };
  }, [dataHospitals]);

  return (
    <div className={styles.container}>
      <div className={styles.fieldsContainer}>
        <SideLabelFormSelectFieldCampaignAdd
          formikChangeHandler={formikChangeHandler}
          fieldLabel="Patient"
          fieldName="patientId"
          initialValue={
            assumptionFormValues?.developmentState !== ""
              ? assumptionFormValues?.developmentState
              : "none"
          }
          fieldPlaceholder="Select a Patient"
          options={allUsers}
          isFormName="campaign_create_patient"
          setHospitalId={setHospitalId}
          setPatientId={setPatientId}
        />
        <SideLabelFormSelectFieldCampaignAdd
          formikChangeHandler={formikChangeHandler}
          fieldLabel="Hospital"
          fieldName="hospitalId"
          initialValue={
            assumptionFormValues?.developmentState !== ""
              ? assumptionFormValues?.developmentState
              : "none"
          }
          fieldPlaceholder="Select a Hospital"
          options={allHospitals}
          isFormName="campaign_create_hospital"
          setHospitalId={setHospitalId}
          setPatientId={setPatientId}
        />
        <SideLabelFormFieldCampaign
          fieldName="startDate"
          fieldLabel="Starting Date"
          fieldPlaceholder="2022-10-23"
          formikChangeHandler={formikChangeHandler}
        />
        <SideLabelFormFieldCampaign
          fieldName="endDate"
          fieldLabel="Ending Date"
          fieldPlaceholder="2022-10-23"
          formikChangeHandler={formikChangeHandler}
        />
      </div>
    </div>
  );
};

export default CampaignDataForm2;

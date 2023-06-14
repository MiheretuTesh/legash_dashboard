import React, { useState, useEffect } from "react";
import { AssumtionFormValues } from "../../types";
import SideLabelFormField from "../SideLabelFormField";
import SideLabelFormSelectFieldHospitalAdd from "../SideLabelFormSelectFieldHospitalAdd";
import { useStyles } from "./index.style";
import { CITIES, BANKS, COUNTRIES } from "../../constants/constant";
import { useGetAllUsers } from "../../hooks/useGetAllUsers";

interface HospitalAdminForm2Props {
  formikChangeHandler: {
    (e: React.ChangeEvent<any>): void;
    <T = string | React.ChangeEvent<any>>(
      field: T
    ): T extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
  assumptionFormValues?: AssumtionFormValues;
  setHospitalAdminId: Function;
}

const HospitalAdminForm2 = ({
  formikChangeHandler,
  assumptionFormValues,
  setHospitalAdminId,
}: HospitalAdminForm2Props) => {
  const styles = useStyles();

  const [allUsers, setAllUsers]: any = useState([]);

  const {
    dataUsers,
    isLoadingUsers,
    isSuccess: isAllUsersFetched,
  } = useGetAllUsers({});

  console.log(allUsers, "dataUsers dataUsers dataUsers dataUsers");

  useEffect(() => {
    if (dataUsers?.data.length > 0) {
      const tableData: any[] = [];

      dataUsers?.data.forEach((data: any) => {
        if (data?.role?.roleName === "Hospital Admin") {
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

  return (
    <div className={styles.container}>
      <div className={styles.fieldsContainer}>
        <SideLabelFormSelectFieldHospitalAdd
          formikChangeHandler={formikChangeHandler}
          fieldLabel="Hospital Admin"
          fieldName="hospitalAdmins"
          initialValue={
            assumptionFormValues?.developmentState !== ""
              ? assumptionFormValues?.developmentState
              : "none"
          }
          fieldPlaceholder="Select a Hospital Admin"
          options={allUsers}
          isFormName="hospital_create"
          setHospitalAdminId={setHospitalAdminId}
        />
      </div>
    </div>
  );
};

export default HospitalAdminForm2;

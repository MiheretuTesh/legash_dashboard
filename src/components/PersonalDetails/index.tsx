import React, { useState } from "react";
import HospitalEdit from "../HospitalDetail";
import { useStyles } from "./index.style";
import { useGetUsersProfile } from "../../hooks/useGetUsersProfile";
import { useProfileEdit } from "../../hooks/useProfileEdit";
import LoadingSpinner from "../LoadingSpinner";
import { useNavigate } from "react-router-dom";

interface Values {
  firstName: string;
  lastName: string;
  email: string;
  jobTitle: string;
  company: string;
}

const PersonalDetails = () => {
  // const { isLoading, data } = useGetUsersProfile();
  const [isUploading, setIsUploading] = useState(false);
  const navigate = useNavigate();

  // const { mutate } = useProfileEdit({
  //   onSuccess: (data) => UseHandleProfileEdit(data),
  // });

  const UseHandleProfileEdit = (values: Values) => {
    navigate(0);
  };

  const handleProfileEdit = (values: any) => {
    const name = values.name.split(" ");
    const first_name = name[0];
    const last_name = name[1] ? name[1] : "";

    const fd = new FormData();
    if (values.img) {
      fd.append("photo", values.img, values.img.name);
    }
    fd.append("first_name", first_name);
    fd.append("last_name", last_name);
    fd.append("email", values.email);
    fd.append("job_title", values.role);
    fd.append("company", values.company);

    setIsUploading(true);
    // mutate(fd);
  };

  const styles = useStyles();
  return (
    <div>
      <>
        <HospitalEdit profileData={""} handleProfileEdit={handleProfileEdit} />
      </>
    </div>
    //   <div className={styles.container}>
    //   {isLoading || isUploading ? (
    //     <div className={styles.loaderStyle}>
    //       <LoadingSpinner />
    //     </div>
    //   ) : (
    //     <>
    //       {data?.data && (
    //         <PersonalDetailsForm
    //           profileData={data?.data}
    //           handleProfileEdit={handleProfileEdit}
    //         />
    //       )}
    //     </>
    //   )}
    // </div>
  );
};

export default PersonalDetails;

import React, { useState } from "react";
import HospitalEdit from "../HospitalDetail";
import PersonalDetailsForm from "../PersonalDetailsForm";
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
  const { isLoading, data: profileData } = useGetUsersProfile();
  const [isUploading, setIsUploading] = useState(false);
  const navigate = useNavigate();

  const UseHandleProfileEdit = (data: any) => {};

  const { mutate } = useProfileEdit({
    onSuccess: (data) => UseHandleProfileEdit(data),
  });

  const handleProfileEdit = (values: any) => {
    const name = values.name.split(" ");
    const firstName = name[0];
    const lastName = name[1] ? name[1] : "";

    const fd = new FormData();
    if (values.img) {
      fd.append("photo", values.img, values.img.name);
    }
    fd.append("firstName", firstName);
    fd.append("lastName", lastName);
    fd.append("phonenumber", values.phonenumber);

    setIsUploading(true);
    mutate(fd);
  };

  const styles = useStyles();
  return (
    <div>
      <>
        <PersonalDetailsForm
          profileData={profileData?.data.data}
          handleProfileEdit={handleProfileEdit}
        />
      </>
    </div>
  );
};

export default PersonalDetails;

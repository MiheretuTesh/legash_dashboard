import React from "react";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import { useStyles } from "./index.style";
import { NotificationIcon, ProfilePictureExample } from "../../assets";
import { useNavigate } from "react-router-dom";
import { useGetUsersProfile } from "../../hooks/useGetUsersProfile";
import LoadingSpinner from "../LoadingSpinner";
import { reverseTransformRole } from "../../utils/functions";
import { useQueryClient } from "@tanstack/react-query";
import DrawerButton from "../DrawerButton";
import { useMsal } from "@azure/msal-react";

interface AccountPageHeaderProps {
  headerTitle: string | undefined;
  handleDrawerToggle: () => void;
}

const AccountPageHeader = ({
  headerTitle,
  handleDrawerToggle,
}: AccountPageHeaderProps) => {
  const styles = useStyles();
  const navigate = useNavigate();
  // const {instance, accounts} = useMsal();

  const { data } = useGetUsersProfile();
  const queryClient = useQueryClient();

  const logout = () => {
    localStorage.removeItem("token");
    // if(accounts){
    //   instance.logout({
    //     postLogoutRedirectUri: "/",
    //   });
    // }
    /*sessionStorage.removeItem('00000000-0000-0000-e896-d6a858826147.9188040d-6c67-4c5b-b112-36a304b66dad-login.windows.net-accesstoken-c153880a-2f00-4e16-815f-391441faefce-daff0d6b-5365-47bb-8d5f-3c7b38042ce6-api://92488830-c2c0-4e70-bd5c-46c4304268b0/read--')*/

    localStorage.removeItem("type");
    sessionStorage.clear();
    queryClient.removeQueries();
    navigate("/");
  };

  const handleAdminLog = () => {
    navigate("/account-admin/settings", { state: { tab: 3 } });
  };

  const handleProfile = () => {
    navigate("/account-admin/settings", { state: { tab: 1 } });
  };

  return (
    <header className={styles.headerContainer}>
      <DrawerButton handleDrawerToggle={handleDrawerToggle} />
      <div className={styles.detailsContainer}>
        <h1 className={styles.headerTxt}>{headerTitle}</h1>
        <div className={styles.headerRightContainer}>
          <IconButton className={styles.iconBtnContainer} onClick={logout}>
            <LogoutIcon />
          </IconButton>

          {data?.data?.type === "ADMIN" && (
            <IconButton
              className={`${styles.notificationsBtnContainer} ${styles.iconBtnContainer}`}
              onClick={handleAdminLog}
            >
              <div className={styles.greenCircle} />
              <NotificationIcon />
            </IconButton>
          )}
          {data?.data ? (
            <div className={styles.profileContainer}>
              <div className={styles.nameRoleContainer}>
                <p className={styles.roleTxt}>
                  {reverseTransformRole(data?.data.type)}
                </p>
                <p className={styles.nameTxt}>
                  {data?.data?.first_name} {data?.data?.last_name}
                </p>
              </div>
              {data?.data.photo !== null ? (
                <img
                  className={styles.profilePicture}
                  src={data?.data.photo}
                  alt="profile"
                  onClick={handleProfile}
                />
              ) : (
                <img
                  className={styles.profilePicture}
                  src={ProfilePictureExample}
                  alt="profile"
                  onClick={handleProfile}
                />
              )}
            </div>
          ) : (
            <LoadingSpinner type={"text"} />
          )}
        </div>
      </div>
    </header>
  );
};

export default AccountPageHeader;

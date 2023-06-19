import React, { useEffect, useState } from "react";
import PageTabsHeader from "../../components/PageTabsHeader";
import PersonalDetails from "../../components/PersonalDetails";
import ChangePassword from "../../components/ChangePassword";
import AdminLogs from "../../components/AdminLogs";
import { useLocation } from "react-router";

const TABS = ["Personal Details"];
const CONSULTANT_TABS = ["Personal Details"];
const ADMIN_TABS = ["Personal Details"];

interface SettingsPageProps {
  userType: string;
}

const SettingsPage = ({ userType }: SettingsPageProps) => {
  const [selectedTab, setSelectedTab] = useState(
    userType === "admin" ? ADMIN_TABS[0] : TABS[0]
  );

  const location = useLocation();

  useEffect(() => {
    if (location && location.state) {
      if (location.state.tab === 3) {
        setSelectedTab("Admin Logs");
      }
    }
  }, [location]);

  const ShowSelectedTab = () => {
    switch (selectedTab) {
      case "Personal Details":
        return <PersonalDetails />;
      case "Change Password":
      case "Reset Password":
        return <ChangePassword />;
      case "Admin Logs":
        return <AdminLogs />;
      default:
        return <PersonalDetails />;
    }
  };

  return (
    <>
      <PageTabsHeader
        tabs={
          userType === "consultant"
            ? CONSULTANT_TABS
            : userType === "admin"
            ? ADMIN_TABS
            : TABS
        }
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      {ShowSelectedTab()}
    </>
  );
};

export default SettingsPage;

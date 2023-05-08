import React, { useEffect, useState } from "react";
import CampaignDetails from "../../components/CampaignDetails";
import { useLocation } from "react-router";

const TABS = ["Personal Details", "Change Password"];
const CONSULTANT_TABS = ["Personal Details", "Change Password"];
const ADMIN_TABS = ["Personal Details", "Reset Password", "Admin Logs"];

interface CampaignDetailsPageProps {
  userType: string;
}

const CampaignDetailsPage = ({ userType }: CampaignDetailsPageProps) => {
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

  return (
    <>
      <CampaignDetails />
    </>
  );
};

export default CampaignDetailsPage;

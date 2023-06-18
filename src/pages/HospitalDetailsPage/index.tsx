import React, { useEffect, useState } from "react";
import HospitalDetails from "../../components/HospitalDetails";
import { useLocation } from "react-router";

const TABS = ["Personal Details"];
const CONSULTANT_TABS = ["Personal Details"];
const ADMIN_TABS = ["Personal Details"];

interface HospitalDetailsPageProps {
  userType: string;
}

const HospitalDetailsPage = ({ userType }: HospitalDetailsPageProps) => {
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
      <HospitalDetails />
    </>
  );
};

export default HospitalDetailsPage;

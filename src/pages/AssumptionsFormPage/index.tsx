import React, { useEffect, useState } from "react";
import { useStyles } from "./index.style";
import PageTabsHeader from "../../components/PageTabsHeader";
import StartANewForm from "../../components/StartANewForm";
import DraftForms from "../../components/DraftForms";
import SubmittedForms from "../../components/SubmittedForms";
import TerminatedCampaigns from "../../components/TerminatedCampaigns";
import { useLocation } from "react-router";

const TABS = [
  // "Campaigns Review",
  "Draft Campaigns",
  "Submitted Campaigns",
  "Suspended Campaigns",
];

const AddNewHospital = ({ parentRoute }: { parentRoute: string }) => {
  const styles = useStyles();
  const [selectedTab, setSelectedTab] = useState(TABS[0]);

  const location = useLocation();

  useEffect(() => {
    if (location && location.state) {
      if (location.state.tab === 3) {
        setSelectedTab("Submitted Forms");
      }
      if (location.state.tab === 2) {
        setSelectedTab("Draft Forms");
      }
    }
  }, [location]);

  const ShowSelectedTab = () => {
    switch (selectedTab) {
      // case "Campaigns Review":
      //   return <StartANewForm parentRoute={parentRoute} />;
      case "Draft Campaigns":
        return <DraftForms parentRoute={parentRoute} />;
      case "Submitted Campaigns":
        return <SubmittedForms parentRoute={parentRoute} />;
      case "Suspended Campaigns":
        return <TerminatedCampaigns parentRoute={parentRoute} />;
    }
  };

  return (
    <>
      <PageTabsHeader
        tabs={TABS}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <div className={styles.tabContentContainer}> {ShowSelectedTab()}</div>
    </>
  );
};

export default AddNewHospital;

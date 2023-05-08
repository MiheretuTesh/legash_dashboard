import React, { useEffect, useState } from "react";
import { useStyles } from "./index.style";
import PageTabsHeader from "../../components/PageTabsHeader";
import StartANewForm from "../../components/StartANewForm";
import DraftForms from "../../components/DraftForms";
import SubmittedForms from "../../components/SubmittedForms";
import { useLocation } from "react-router";

const TABS = ["Start A New Form", "Draft Forms", "Submitted Forms"];

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
      case "Start A New Form":
        return <StartANewForm parentRoute={parentRoute} />;
      case "Draft Forms":
        return <DraftForms parentRoute={parentRoute} />;
      case "Submitted Forms":
        return <SubmittedForms parentRoute={parentRoute} />;
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

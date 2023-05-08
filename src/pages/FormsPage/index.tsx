import React, { useState, useEffect } from "react";
import DraftForms from "../../components/DraftForms";
import PageTabsHeader from "../../components/PageTabsHeader";
import StartANewForm from "../../components/StartANewForm";
import SubmittedForms from "../../components/SubmittedForms";
import { useStyles } from "./index.style";
import { useLocation } from "react-router";

const TABS = ["Start A New Form", "Draft Forms", "Submitted Forms"];
const FormsPage = ({parentRoute}:any) => {
  const styles = useStyles();
  const [selectedTab, setSelectedTab] = useState(TABS[0]);

  const location = useLocation();

  useEffect(()=>{
    if(location && location.state){
      console.log(location.state.tab, "hello");

      if (location.state.tab === 3) {
        setSelectedTab("Submitted Forms");
      }
      if(location.state.tab === 2) {
        setSelectedTab("Draft Forms");
      }
    }
  }, [location]);

  const ShowSelectedTab = () => {
    switch (selectedTab) {
      case "Start A New Form":
        return <StartANewForm parentRoute={parentRoute}/>;
      case "Draft Forms":
        return <DraftForms parentRoute={parentRoute}/>;
      case "Submitted Forms":
        return <SubmittedForms parentRoute={parentRoute}/>;
    }
  };

  return (
    <>
      <PageTabsHeader
        tabs={TABS}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <div className={styles.tabContentContainer}>{ShowSelectedTab()}</div>
    </>
  );
};

export default FormsPage;

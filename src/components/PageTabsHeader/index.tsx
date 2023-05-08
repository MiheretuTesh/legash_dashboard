import React from "react";
import { useStyles } from "./index.styles";

interface PageTabsHeaderProps {
  tabs: string[];
  selectedTab: string;
  setSelectedTab: React.Dispatch<React.SetStateAction<string>>;
}

const PageTabsHeader = ({
  selectedTab,
  setSelectedTab,
  tabs,
}: PageTabsHeaderProps) => {
  const styles = useStyles();

  const onTabClickHandler = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <div className={styles.container}>
      {tabs.map((tab, index) => (
        <button
          key={`${index}-${tab}`}
          type="button"
          className={`${styles.tabContainer} ${
            selectedTab === tab ? styles.selected : ""
          }`}
          onClick={() => onTabClickHandler(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default PageTabsHeader;

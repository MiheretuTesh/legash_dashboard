import React from "react";
import { useStyles } from "./index.style";

interface SideNavbarButtonProps {
  name: string;
  selected: boolean;
  onTabClick: (tab: string) => void;
  icon: JSX.Element;
  userType?: string;
}

const SideNavbarButton = ({
  name,
  selected,
  onTabClick,
  icon,
  userType,
}: SideNavbarButtonProps) => {
  const styles = useStyles();

  return (
    <button
      className={`${styles.buttonContainer} ${
        selected ? styles.buttonSelected : ""
      }`}
      onClick={() => onTabClick(name)}
    >
      <div className={styles.img}>{icon}</div>
      {/* {(userType === "account-admin" && name === "Dashboard") ||
      (userType === "report-admin" && name === "Report")
        ? "report"
        : name} */}
      {userType === "report-admin" && name === "Report" ? "Report" : name}
    </button>
  );
};

export default SideNavbarButton;

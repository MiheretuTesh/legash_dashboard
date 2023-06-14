import React from "react";
import { LegashIcon } from "../../assets";
import SideNavbarButton from "../SideNavbarButton";
import { useNavigate } from "react-router";
import DashboardsTabIcon from "../../assets/svgs/DashboardsTabIcon";
import UsersTabIcon from "../../assets/svgs/UsersTabIcon";
import AssetsTabIcon from "../../assets/svgs/AssetsTabIcon";
import SettingsTabIcon from "../../assets/svgs/SettingsTabIcon";
import { useStyles } from "./index.style";
import DrawerButton from "../DrawerButton";

const TABS = [
  "Dashboard",
  "Hospitals",
  "Campaigns",
  "Users",
  "Report",
  "Archive",
  "Settings",
];

interface SideNavbarProps {
  userType: string;
  selectedTab: string;
  setSelectedTab: React.Dispatch<React.SetStateAction<string>>;
  handleDrawerToggle: () => void;
  closeSideNavbarDrawer?: () => void;
}

const SideNavbar = ({
  userType,
  selectedTab,
  setSelectedTab,
  handleDrawerToggle,
  closeSideNavbarDrawer,
}: SideNavbarProps) => {
  const styles = useStyles();
  const navigate = useNavigate();

  const onTabClickHandler = (tab: string) => {
    setSelectedTab(tab);
    if (userType === "admin") {
      navigate(
        `${
          tab === "Dashboard"
            ? "/account-admin"
            : `/account-admin/${tab.toLowerCase()}`
        } `
      );
    } else if (userType === "hospital-admin") {
      navigate(
        `${
          tab === "Dashboard"
            ? "/hospital-admin"
            : `/hospital-admin/${tab.toLowerCase()}`
        }`
      );
    } else if (userType === "report-admin") {
      navigate(
        `${
          tab === "Report"
            ? "/report-admin"
            : `/report-admin/${tab.toLowerCase()}`
        }`
      );
    } else {
      navigate(
        `${tab === "Dashboard" ? "/user" : `/user/${tab.toLowerCase()}`} `
      );
    }
    closeSideNavbarDrawer && closeSideNavbarDrawer();
  };

  const ButtonIcon = (name: string) => {
    switch (name) {
      case "Dashboard":
        return (
          <DashboardsTabIcon
            color={selectedTab === name ? "#32E9DA" : "#B2C2C7"}
          />
        );
      case "Hospitals":
        return (
          <DashboardsTabIcon
            color={selectedTab === name ? "#32E9DA" : "#B2C2C7"}
          />
        );
      case "Campaign":
        return (
          <UsersTabIcon color={selectedTab === name ? "#32E9DA" : "#B2C2C7"} />
        );
      case "User":
        return (
          <UsersTabIcon color={selectedTab === name ? "#32E9DA" : "#B2C2C7"} />
        );
      case "Report":
        return (
          <AssetsTabIcon color={selectedTab === name ? "#32E9DA" : "#B2C2C7"} />
        );
      case "Archive":
        return (
          <AssetsTabIcon color={selectedTab === name ? "#32E9DA" : "#B2C2C7"} />
        );
      case "Settings":
        return (
          <SettingsTabIcon
            color={selectedTab === name ? "#32E9DA" : "#B2C2C7"}
          />
        );
      default:
        return (
          <DashboardsTabIcon
            color={selectedTab === name ? "#32E9DA" : "#B2C2C7"}
          />
        );
    }
  };

  return (
    <aside className={styles.sideBarContainer}>
      <div className={styles.navBarHeaderContainer}>
        <img className={styles.logoContainer} src={LegashIcon} alt="legash" />
        <DrawerButton handleDrawerToggle={handleDrawerToggle} isInDrawer />
      </div>
      <nav className={styles.navBarContainer}>
        {TABS.map((tab, index) => {
          if (userType === "admin" && tab === "Campaigns") {
            return null;
          } else if (userType === "hospital-admin" && tab === "Users") {
            return null;
          } else if (
            (userType === "user" && tab === "Hospitals") ||
            (userType === "user" && tab === "Campaigns")
          ) {
            return null;
          } else {
            return (
              <SideNavbarButton
                key={`${index}-${tab}`}
                name={tab}
                selected={selectedTab === tab}
                onTabClick={onTabClickHandler}
                icon={ButtonIcon(tab)}
                userType={userType}
              />
            );
          }
        })}
      </nav>
    </aside>
  );
};

export default SideNavbar;

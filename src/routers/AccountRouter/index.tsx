import React, { useContext, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { LegashIcon } from "../../assets";
import AccountPageHeader from "../../components/AccountPageHeader";
import { NewOnsiteChecklistContext } from "../../contexts/NewOnsiteChecklistContext";

import { useStyles } from "./index.style";
import SideNavbarDrawer from "../../components/SideNavbarDrawer";

interface AccountRouterProps {
  userType: string;
}

const AccountRouter = ({ userType }: AccountRouterProps) => {
  const styles = useStyles();
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState("");
  const [imageIsReady, setImageIsReady] = useState(false);
  const { reportPageTitle } = useContext(NewOnsiteChecklistContext);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageIsReady(true);
    };
    img.src = LegashIcon;

    switch (location.pathname) {
      case "/user":
      case "/account-admin":
      case "/hospital-admin":
        setSelectedTab("Dashboard");
        break;
      case "/report-admin":
        setSelectedTab("Report");
        break;
      case "/user/hospitals":
      case "/account-admin/hospitals":
      case "/hospital-admin/hospitals":
        setSelectedTab("Hospitals");
        break;
      case "/account-admin/campaigns":
      case "/hospital-admin/campaigns":
      case "/report-admin/campaigns":
        setSelectedTab("Campaigns");
        break;
      case "/user/report":
      case "/account-admin/report":
      case "/hospital-admin/report":
      case "/report-admin/report":
        setSelectedTab("Report");
        break;
      case "/user/archive":
      case "/account-admin/archive":
      case "/hospital-admin/archive":
      case "/report-admin/archive":
        setSelectedTab("Archive");
        break;
      case "/user/setting":
      case "/account-admin/setting":
      case "/hospital-admin/setting":
      case "/report-admin/setting":
        setSelectedTab("Setting");
        break;
      case "/account/settings":
      case "/account-admin/settings":
      case "/account-consultant/settings":
      case "/account-fund/setting":
      case "/account-fund-admin/setting":
        setSelectedTab("Settings");
        break;
      case "/account/help":
      case "/account-admin/help":
      case "/account-consultant/help":
      case "/account-fund/help":
      case "/account-fund-admin/help":
        setSelectedTab("Help");
        break;
    }
  }, [location.pathname]);

  const HeaderTitle = () => {
    switch (location.pathname) {
      case "/user":
      case "/account-admin":
      case "/hospital-admin":
        return "Dashboard";
      case "/report-admin":
        return "Report";
      case "/account-admin/hospitals":
      case "/hospital-admin/hospitals":
      case "/report-admin/hospitals":
        return "Hospitals";
      case "/account-admin/new-hospitals":
        return "Add New Hospital";
      case "/account-admin/campaigns":
      case "/hospital-admin/campaigns":
      case "/report-admin/campaigns":
        return "Campaigns";
      case "/account/users":
      case "/account-admin/users":
      case "/account-fund-admin/users":
        return "Users";
      case "/account/assets":
      case "/account-admin/assets":
      case "/account-fund-admin/assets":
        return "Assets";
      case "/account/settings":
      case "/account-admin/settings":
      case "/account-consultant/settings":
      case "/account-fund-admin/settings":
        return "Settings";
      case "/account/assumptions-form":
      case "/account-admin/assumptions-form":
      case "/account-fund-admin/assumptions-form":
        return "Assumptions form";
      case "/account-consultant":
        return "Consultant";
      case "/account/forms":
      case "/account-admin/forms":
      case "/account-consultant/forms":
      case "/account-fund-admin/forms":
        return "Forms";
      case "/account-consultant/form":
      case "/account-consultant/new-onsite-checklist":
      case "/account-admin/consultant-form":
        return "New Onsite Checklist";
      case "/account/new-onsite-checklist":
      case "/account-admin/new-onsite-checklist":
      case "/account-fund-admin/new-onsite-checklist":
        return "Assumptions form";
      case "/account-admin":
        return "Homepage";
      case "/account-admin/newform":
        return "Select form type";
      case "/account/help":
      case "/account-admin/help":
      case "/account-consultant/help":
      case "/account-fund-admin/help":
        return "Help";
    }
    let reportPathTest = `/${location.pathname.split("/")[1]}/${
      location.pathname.split("/")[2]
    }`;
    if (
      reportPathTest === "/account/report" ||
      reportPathTest === "/account-admin/report" ||
      reportPathTest === "/account-fund-admin/report" ||
      reportPathTest === "/account-consultant/report"
    ) {
      return reportPageTitle;
    }
  };

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const closeSideNavbarDrawer = () => {
    setMobileOpen(false);
  };

  return (
    <>
      {imageIsReady ? (
        <div className={styles.routerContainer}>
          <SideNavbarDrawer
            userType={userType}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
            mobileOpen={mobileOpen}
            handleDrawerToggle={handleDrawerToggle}
            closeSideNavbarDrawer={closeSideNavbarDrawer}
          />
          <div className={styles.pageContainer}>
            <AccountPageHeader
              headerTitle={HeaderTitle()}
              handleDrawerToggle={handleDrawerToggle}
            />
            <div className={styles.contentContainer}>
              <Outlet />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default AccountRouter;

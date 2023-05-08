import { Box, Drawer } from "@mui/material";
import React from "react";
import { useStyles } from "./index.style";
import SideNavbar from "../SideNavbar";

const DRAWER_WIDTH = 270;

interface SideNavbarDrawerProps {
  userType: string;
  selectedTab: string;
  setSelectedTab: React.Dispatch<React.SetStateAction<string>>;
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
  closeSideNavbarDrawer: () => void;
}

const SideNavbarDrawer = ({
  userType,
  selectedTab,
  setSelectedTab,
  mobileOpen,
  handleDrawerToggle,
  closeSideNavbarDrawer,
}: SideNavbarDrawerProps) => {
  const styles = useStyles();

  return (
    <>
      {/* <DrawerButton handleDrawerToggle={handleDrawerToggle} /> */}
      <Box
        component="nav"
        sx={{ width: { md: DRAWER_WIDTH }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
          }}
          className={styles.drawerContainer}
        >
          {
            <SideNavbar
              userType={userType}
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
              handleDrawerToggle={handleDrawerToggle}
              closeSideNavbarDrawer={closeSideNavbarDrawer}
            />
          }
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
          }}
          className={styles.drawerContainer}
          open
        >
          {
            <SideNavbar
              userType={userType}
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
              handleDrawerToggle={handleDrawerToggle}
            />
          }
        </Drawer>
      </Box>
    </>
  );
};

export default SideNavbarDrawer;

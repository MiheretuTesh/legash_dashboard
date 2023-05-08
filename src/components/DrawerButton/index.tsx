import React from "react";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useStyles } from "./index.style";

interface DrawerButtonProps {
  handleDrawerToggle: () => void;
  isInDrawer?: boolean;
}

const DrawerButton = ({
  handleDrawerToggle,
  isInDrawer,
}: DrawerButtonProps) => {
  const styles = useStyles();
  return (
    <IconButton
      color="inherit"
      aria-label="open drawer"
      edge="start"
      onClick={handleDrawerToggle}
      className={`${styles.drawerBtn} ${
        isInDrawer ? styles.drawerBtnInDrawer : ""
      }`}
      sx={{
        display: { md: "none" },
      }}
    >
      <MenuIcon />
    </IconButton>
  );
};

export default DrawerButton;

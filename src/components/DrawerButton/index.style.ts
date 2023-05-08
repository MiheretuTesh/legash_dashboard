import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  drawerBtn: {
    "&.MuiIconButton-root": {
      height: "50px",
      width: "50px",
      background: "transparent",
      position: "absolute",
      top: "10px",
      left: "20px",
      zIndex: 99,
      color: "#003444",
      padding: 0,
    },
  },
  drawerBtnInDrawer: {
    "&.MuiIconButton-root": {
      position: "inherit",
      color: "#F7FCFB",
    },
  },
});

import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  drawerContainer: {
    "& .MuiDrawer-paper": {
      boxSizing: "border-box",
      width: "270px",
      borderRight: "none",
    },
  },
});

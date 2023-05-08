import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  pageContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "#F7FCFB",
  },
  leftWallpaper: {
    position: "fixed",
    width: "333px",
    height: "500px",
    left: "-100px",
    top: "0px",
    "@media (max-width: 768px)": {
      left: "-25px",
      width: "127px",
      height: "190px",
    },
  },
  rightWallpaper: {
    position: "fixed",
    width: "333px",
    height: "500px",
    right: "-100px",
    bottom: "0px",
    "@media (max-width: 768px)": {
      right: "-25px",
      width: "127px",
      height: "190px",
    },
  },
  ambioLogoText: {
    // width: "500px",
    // height: "500px",
    marginTop: "-100px",
  },

  outletContainer: {
    display: "flex",
    flexDirection: "column",
    background: "transparent",
    alignItems: "center",
    width: "calc(100% - 40px)",
    // padding: "0 20px",
    minHeight: "calc(100vh - 92px)",
    zIndex: 10,
    marginTop: "-300px",
  },
});

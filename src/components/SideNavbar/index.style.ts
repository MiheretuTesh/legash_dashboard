import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  sideBarContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    background: "#000000",
    padding: "37px 30px",
  },
  navBarHeaderContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoContainer: {
    width: "200px",
    height: "200px",
    marginTop: "-50px",
  },
  navBarContainer: {
    marginTop: "-50px",
  },
});

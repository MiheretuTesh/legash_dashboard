import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  routerContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "100vh",
    background: "#F7FCFB",
  },
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "30px 0px",
    width: "calc(100% - 270px)",
    background: "#F7FCFB",
    overflowY: "auto",
    "@media (max-width: 900px)": {
      width: "100%",
    },
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "0px 60px",
    "@media (max-width: 900px)": {
      padding: "0px 20px",
    },
  },
});

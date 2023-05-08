import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "15px",
    marginBottom: "15px",
  },
  stepsTxt: {
    display: "flex",
    flexDirection: "row",
    fontFamily: "RobotoBold",
    fontSize: "18px",
    lineHeight: "21px",
    color: "#32E9DA",
    margin: 0,
  },
  totalSteps: {
    color: "#B2C2C7",
    margin: 0,
  },
  barsContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "15px",
  },
  bar: {
    width: "100%",
    marginRight: "9px",
    background: "#D6E3E6",
    borderRadius: "5px",
    height: "5px",
  },
  passed: {
    background: "#32E9DA",
  },
});

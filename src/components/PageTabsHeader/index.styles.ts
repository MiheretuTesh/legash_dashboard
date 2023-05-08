import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    marginTop: "30px",
  },
  tabContainer: {
    padding: "5px 0px",
    marginRight: "30px",
    outline: "none",
    background: "transparent",
    border: "none",
    fontFamily: "Roboto",
    fontSize: "18px",
    lineHeight: "21px",
    color: "#86989D",
    cursor: "pointer",
  },

  selected: {
    fontFamily: "RobotoBold",
    borderBottom: "2px solid #32E9DA",
    color: "#003444",
  },
});

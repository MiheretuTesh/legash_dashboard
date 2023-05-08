import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: "20px",
    height: "20px",
    color: "#003444 !important",
    "&.Mui-checked": {
      color: "#003444 !important",
    },
  },
  rememberMeTxt: {
    margin: 0,
    fontFamily: "Roboto",
    fontSize: "16px",
    color: "#003444",
    marginLeft: "10px",
  },
});

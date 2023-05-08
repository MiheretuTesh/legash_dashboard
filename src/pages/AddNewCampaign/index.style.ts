import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  container: {
    margin: "50px 0px",
  },
  tabContentContainer: { marginTop: "10px" },
  btnsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "30px",
    "@media (max-width: 565px)": {
      flexDirection: "column-reverse",
    },
  },
  saveBtn: {
    "&.MuiButton-contained": {
      width: "140px",
    },
  },
  buildingChoiceContainer: {
    width: "250px !important",
    marginBottom: "0px",
  },
});

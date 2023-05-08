import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
    marginBottom: "20px",
    position: "relative",
  },
  label: { fontFamily: "Roboto", fontSize: "14px", color: "#86989D" },
  fieldContainer: {
    width: "calc(100% - 22px)",
    height: "44px",
    background: "#FEFEFE",
    border: "1px solid #D6E3E6",
    borderRadius: "10px",
    marginTop: "5px",
    padding: "0px 5px 0px 15px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  field: {
    width: "100%",
    padding: "0px",
    border: "none",
    outline: "none",

    fontFamily: "Roboto",
    fontSize: "16px",
    color: "#003444",
    "&:disabled": {
      background: "transparent",
    },
  },
  iconBtnContainer: {
    width: "30px",
    height: "30px",
  },
  doneIcon: {
    color: "#32E9DA",
  },
  errorMessageTxt: {
    fontFamily: "Roboto",
    fontSize: "12px",
    color: "#FF9494",
    margin: 0,
    position: "absolute",
    top: 68,
    right: 0,
  },
});

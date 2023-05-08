import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  formFieldContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
    marginBottom: "20px",
    position: "relative",
  },
  label: {
    fontFamily: "Roboto",
    fontSize: "14px",
    color: "#86989D",
    marginBottom: "5px",
  },
  fieldContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    position: "relative",
  },
  unit: {
    margin: 0,
    fontFamily: "RobotoBold",
    fontSize: "18px",
    color: "#003444",
    marginLeft: "10px",
  },
  field: {
    width: "calc(100% - 24px)",
    background: "#FEFEFE",
    border: "1px solid #D6E3E6",
    borderRadius: "10px",
    outlineColor: "#32E9DA",
    fontFamily: "Roboto",
    fontSize: "16px",
    color: "#003444",
    padding: "12px",
    "&::placeholder": {
      color: "#D6E3E6",
    },
    "&:disabled": {
      border: "none",
    },
    "&::-webkit-outer-spin-button , &::-webkit-inner-spin-button": {
      WebkitAppearance: "none",
      margin: 0,
    },
    "&[type=number]": {
      MozAppearance: "textfield",
    },
  },
  showPasswordBtn: {
    "& .MuiSvgIcon-root": {
      color: "#003444",
    },
  },
  showPasswordBtnContainer: {
    position: "absolute",
    right: 0,
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
  errorMessageTxtNoLabel: {
    top: 45,
  },
});

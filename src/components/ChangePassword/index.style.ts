import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  container: {
    maxWidth: "385px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "25px",
    marginTop: "30px",
    background: "#FEFEFE",
    border: "1px solid #D6E3E6",
    borderRadius: "10px",
  },
  changePasswordTxt: {
    margin: 0,
    fontFamily: "Roboto",
    fontSize: "16px",
    lineHeight: "21px",
    color: "#003444",
    textAlign: "left",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginTop: "20px",
  },
  formField: {
    "@media (max-height: 640px)": {
      height: "6px",
    },
  },
  successIcon: {
    width: "25px",
    height: "25px",
  },
});

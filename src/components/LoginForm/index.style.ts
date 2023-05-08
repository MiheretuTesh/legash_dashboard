import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  formContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    marginTop: "-200px",
  },
  formHeader: {
    margin: 0,
    marginBottom: "25px",
    fontFamily: "PoppinsBold",
    fontSize: "32px",
    color: "#003444",
  },
  rememberForgotPasswordContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "10px",
    marginBottom: "30px",
  },
  forgotPasswordTxt: {
    fontFamily: "Roboto",
    fontSize: "16px",
    color: "#003444",
  },
});

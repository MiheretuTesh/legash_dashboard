import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  pageContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "#F7FCFB",

  },
  pageSmallContainer: {
    minHeight: "calc(100vh - 92px)",
    width: "100%",
    maxWidth: "325px",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  leftWallpaper: {
    position: "fixed",
    width: "333px",
    height: "500px",
    left: "-100px",
    top: "0px",
    "@media (max-width: 768px)": {
      left: "-25px",
      width: "127px",
      height: "190px",
    },
  },
  rightWallpaper: {
    position: "fixed",
    width: "333px",
    height: "500px",
    right: "-100px",
    bottom: "0px",
    "@media (max-width: 768px)": {
      right: "-25px",
      width: "127px",
      height: "190px",
    },
  },
  ambioLogoText: {
    marginTop: "55px",
    width: "148px",
    height: "37px",
  },
  skipBtnsContainer: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    width: "400px",
    gap: 10,
    top: 0,
    left: "70%",
  },
  skipBtn: {
    width: "50%",
  },
  outletContainer: {
    display: "flex",
    flexDirection: "column",
    background: "transparent",
    alignItems: "center",
    width: "calc(100% - 40px)",
    padding: "0 20px",
    minHeight: "calc(100vh - 92px)",
    zIndex: 10,
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
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

  questionContainer: { position: "absolute", bottom: "0px" },
  registerQuestionTxt: {
    fontFamily: "Roboto",
    fontWeight: 400,
    fontSize: "18px",
    color: "#003444",
    margin: 0,
    marginBottom: "25px",
  },
  registerActionTxt: {
    color: "#32E9DA",
  },

});

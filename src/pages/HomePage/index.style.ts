import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    minHeight: "calc(100vh - 92px)",
    maxWidth: "460px",
    alignItems: "center",
    justifyContent: "center",
  },
  pageHeader: {
    margin: 0,
    marginBottom: "10px",
    fontFamily: "PoppinsBold",
    fontSize: "32px",
    lineHeight: "42px",
    color: "#003444",
  },
  pageSubheader: {
    margin: 0,
    fontFamily: "Roboto",
    fontSize: "18px",
    lineHeight: "21px",
    textAlign: "center",
    color: "#003444",
  },
  btnsContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: "30px",
    "@media (max-width: 576px)": {
      flexDirection: "column",
    },
  },
  registerBtn: {
    width: "157px",
    height: "51px",
    "&.MuiButton-contained": {
      textTransform: "none",
      background: "#32E9DA",
      boxShadow: "none",
      borderRadius: "10px",
      fontFamily: "Roboto",
      fontSize: "18px",
      lineHeight: "21px",
      color: "#003444",
      "&:hover": {
        background: "#003444",
        boxShadow: "none",
        color: "#FEFEFE",
      },
    },
  },
  loginBtn: {
    "&.MuiButton-outlined": {
      width: "157px",
      height: "51px",
      marginLeft: "30px",
      textTransform: "none",
      border: "1px solid #003444",
      background: "transparent",
      borderRadius: "10px",
      fontFamily: "Roboto",
      fontSize: "18px",
      lineHeight: "21px",
      color: "#003444",
      "&:hover": {
        background: "#003444",
        color: "#FEFEFE",
        border: "1px solid #003444",
      },
    },

    "@media (max-width: 576px)": {
      "&.MuiButton-outlined": {
        marginLeft: "0px",
        marginTop: "20px",
      },
    },
  },
});

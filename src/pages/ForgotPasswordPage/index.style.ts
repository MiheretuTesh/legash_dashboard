import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  formContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "325px",
    minHeight: "calc(100vh - 92px)",
    justifyContent: "center",
  },
  formHeader: {
    margin: 0,
    marginBottom: "25px",
    fontFamily: "PoppinsBold",
    fontSize: "32px",
    color: "#003444",
  },
  subText: {
    margin: 0,
    fontFamily: "Roboto",
    fontSize: "18px",
    lineHeight: "21px",
    textAlign: "center",
    color: "#003444",
    marginBottom: "25px",
  },
  backBtn: {
    "&.MuiButton-outlined": {
      width: "150px",
      marginTop: "25px",
      alignSelf: "center",
    },
  },
});

import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "325px",
    minHeight: "calc(100vh - 92px)",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: { width: "56px", height: "56px", marginBottom: "25px" },
  header: {
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
});

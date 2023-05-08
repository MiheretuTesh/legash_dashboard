import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  pageContainer: {
    width: "100%",
    maxWidth: "325px",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  loginQuestionTxt: {
    fontFamily: "Roboto",
    fontWeight: 400,
    fontSize: "18px",
    color: "#003444",
    margin: 0,
    marginBottom: "25px",
    marginTop: "10px",
  },
  loginActionTxt: {
    color: "#32E9DA",
  },
});

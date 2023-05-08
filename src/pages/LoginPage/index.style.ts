import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  pageContainer: {
    minHeight: "calc(100vh - 92px)",
    width: "100%",
    maxWidth: "325px",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  questionContainer: { position: "absolute", bottom: "0px" },
  registerQuestionTxt: {
    fontFamily: "Roboto",
    fontWeight: 400,
    fontSize: "18px",
    color: "#003444",
    margin: 0,
    marginBottom: "25px",
    marginTop: "-200px",
  },
  registerActionTxt: {
    color: "#32E9DA",
  },
});

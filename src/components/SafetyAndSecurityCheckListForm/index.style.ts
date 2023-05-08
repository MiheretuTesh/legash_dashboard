import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxHeight: "460px",
  },
  headerTxt: {
    margin: "0px",
    textAlign: "left",
    fontFamily: "RobotoBold",
    fontSize: "18px",
    lineHeight: "21px",
    color: "#003444",
  },
  label: {
    fontFamily: "RobotoBold",
    fontSize: "16px",
    lineHeight: "19px",
    color: "#86989D",
    textAlign: "left",
  },
  tableContainer: {
    overflowY: "auto",
    padding: "0px 25px 5px 25px",
    marginTop: "20px",
    background: "#FEFEFE",
    border: "1px solid #D6E3E6",
    borderRadius: "10px",
    "&::-webkit-scrollbar": {
      width: "1px",
    },
    "&::-webkit-scrollbar-track": {
      background: "#f1f1f1",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#888",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "#555",
    },
    position: "relative",
  },
  labelsContainer: {
    display: "grid",
    width: "100%",
    padding: "25px 0px 20px 0px",
    borderBottom: "1px solid #D6E3E6",
    gridTemplateColumns: "25% 30% 10% 1fr 1fr",
    columnGap: "30px",
    position: "sticky",
    top: 0,
    zIndex: 10,
    background: "#FEFEFE",
  },
  rowContainer: {
    display: "grid",
    borderBottom: "1px solid #D6E3E6",
    padding: "20px 0px 20px 0px",
    width: "100%",
    gridTemplateColumns: "25% 30% 10% 1fr 1fr",
    columnGap: "30px",
  },
  typeAndQuestionContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  typeTxt: {
    margin: 0,
    marginBottom: "5px",
    fontFamily: "RobotoBold",
    fontSize: "12px",
    color: "#003444",
    textAlign: "left",
  },

  questionTxt: {
    margin: 0,

    fontFamily: "Roboto",
    fontSize: "16px",
    color: "#003444",
    textAlign: "left",
  },
  rowField: {
    marginBottom: "0px",
  },
});

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
      height: "1px",
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
    width: "fit-content",
    padding: "25px 0px 20px 0px",
    gridTemplateColumns:
      "minmax(250px, 25%) minmax(150px, 15%) minmax(100px, 10%) minmax(100px, 10%) minmax(120px, 12%) minmax(120px, auto)",
    columnGap: "30px",
    position: "sticky",
    top: 0,
    zIndex: 10,
    background: "#FEFEFE",
    borderRight: "1px solid #FFFFFF",
  },
  rowContainer: {
    display: "grid",
    borderTop: "5px solid #D6E3E6",
    padding: "20px 0px 20px 0px",
    width: "fit-content",
    gridTemplateColumns:
      "minmax(250px, 25%) minmax(150px, 15%) minmax(100px, 10%) minmax(100px, 10%) minmax(120px, 12%) minmax(120px, auto)",
    columnGap: "30px",
  },
  subRowContainer: {
    display: "grid",
    padding: "10px 0px 20px 0px",
    width: "100%",
    gridTemplateColumns: "minmax(250px, 25%) minmax(700px, auto)",
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
    marginBottom: "0px !important",
  },
  rowCellContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  fieldDropDownContainer: {
    width: "20%",
  },
  uploadBtn: {
    "&.MuiButton-outlined": {
      fontFamily: "RobotoBold !important",
      fontSize: "12px !important",
    },
  },
});

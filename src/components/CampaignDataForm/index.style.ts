import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "45%",
    height: "600px",
    "@media (max-width: 900px)": {
      width: "100%",
    },
  },
  headerTxt: {
    margin: "0px",
    textAlign: "left",
    fontFamily: "RobotoBold",
    fontSize: "18px",
    lineHeight: "21px",
    color: "#003444",
  },
  fieldsContainer: {
    height: "600px",

    display: "flex",
    flexDirection: "column",
    // width: "calc(80% - 200px)",
    padding: "5px 50px",
    marginTop: "20px",
    background: "#FEFEFE",
    border: "1px solid #D6E3E6",
    borderRadius: "10px",
    overflowY: "auto",

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
  },
});

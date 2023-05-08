import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "500px",
    height: "400px",
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
    display: "flex",
    flexDirection: "column",
    width: "calc(100% - 50px)",
    padding: "5px 25px",
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

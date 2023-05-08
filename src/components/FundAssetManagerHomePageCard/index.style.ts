import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    background: "#FEFEFE",
    border: "1px solid #D6E3E6",
    borderRadius: "10px",
    padding: "25px",
  },
  cardTitle: {
    margin: 0,
    fontFamily: "RobotoBold",
    fontSize: "18px",
    lineHeight: "21px",
    color: "#003444",
    marginBottom: "16px",
  },
  cardTxt: {
    margin: 0,
    fontFamily: "Roboto",
    fontSize: "16px",
    lineHeight: "19px",
    color: "#003444",
    textAlign: "left",
  },
  cardButton: {
    width: "30%",
    "&.MuiButton-contained": {
      marginTop: "30px",
      width: "30%",
      minWidth:'120px',
    },
  },
});

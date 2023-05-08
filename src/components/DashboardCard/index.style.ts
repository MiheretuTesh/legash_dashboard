import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",

    padding: "25px",
    background: "#FEFEFE",
    border: "1px solid #D6E3E6",
    borderRadius: "10px",
    height: "150px",
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  headerText: {
    margin: 0,
    fontFamily: "Roboto",
    fontSize: "18px",
    lineHeight: "21px",
    color: "#003444",
    textAlign: "left",
    marginBottom: "10px",
  },
  subText: {
    margin: 0,
    fontFamily: "Roboto",
    fontSize: "14px",
    lineHeight: "17px",
    color: "#003444",
    textAlign: "left",
    marginBottom: "10px",
  },
  paleHeaderText: {
    margin: 0,
    fontFamily: "Roboto",
    fontSize: "16px",
    lineHeight: "19px",
    color: "#86989D",
    textAlign: "left",
  },
  viewBtn: {
    "&.MuiButton-contained": {
      // marginTop: "20px",
    },
  },
});

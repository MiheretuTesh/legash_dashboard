import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  container: {
    display: "flex",
    gap: "30px",
    flexWrap: "wrap",
    overflowY: "auto",
    maxHeight: "550px",
    "@media (min-height: 680px)": {
      maxHeight: "930px",
    },
    width: "100%",
  },

  cardContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "25px",
    height: "330px",
    background: "#FEFEFE",
    // border: "1px solid #D6E3E6",
    borderRadius: "10px",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    marginBottom: "30px",
    width: "100%",
    "@media (min-width: 900px) and (max-width: 1056px)": {
      width: "100%",
      flexDirection: "row",
    },
    "@media (max-width: 710px)": {
      width: "100%",
    },
  },

  headerContainer: {},

  headerText: {
    margin: 0,
    fontFamily: "Roboto",
    fontSize: "16px",
    lineHeight: "18px",
    color: "#003444",
  },

  paleHeaderText: {
    margin: 0,
    fontFamily: "Roboto",
    fontSize: "16px",
    lineHeight: "19px",
    color: "#86989D",
  },

  horizontalNum: {
    display: "flex",
    justifyContent: "space-between",
    width: "80%",
    paddingLeft: "25px",
  },

  verticalNum: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    height: "75%",
  },

  cardTxt: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "60px",
  },

  loaderStyle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
});